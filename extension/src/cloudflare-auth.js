(function initializeCloudflareAuth(root, factory) {
  "use strict";

  const api = factory();

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CloudflareAuth = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function createCloudflareAuthApi() {
  "use strict";

  const AUTH_REQUIRED = "CF_ACCESS_AUTH_REQUIRED";

  class CloudflareAccessError extends Error {
    constructor(message, code = AUTH_REQUIRED) {
      super(message);
      this.name = "CloudflareAccessError";
      this.code = code;
    }
  }

  function parseHttpsUrl(value, label) {
    let parsed;
    try {
      parsed = new URL(String(value || ""));
    } catch {
      throw new Error(`${label} 必須係有效 HTTPS URL`);
    }

    if (parsed.protocol !== "https:") {
      throw new Error(`${label} 必須使用 HTTPS`);
    }
    return parsed;
  }

  function isAuthenticationRequired(response) {
    return Boolean(
      !response ||
      response.type === "opaqueredirect" ||
      response.status === 0 ||
      response.status === 401 ||
      response.status === 403 ||
      (response.status >= 300 && response.status < 400)
    );
  }

  function createClient(options = {}, dependencies = {}) {
    const fetchImpl = dependencies.fetchImpl || globalThis.fetch;
    if (typeof fetchImpl !== "function") {
      throw new Error("Cloudflare Access 需要 fetch 支援");
    }

    const identityUrl = parseHttpsUrl(options.identityUrl, "identityUrl");
    const loginUrl = parseHttpsUrl(options.loginUrl || options.identityUrl, "loginUrl");
    const logoutUrl = parseHttpsUrl(options.logoutUrl, "logoutUrl");

    if (loginUrl.origin !== identityUrl.origin || logoutUrl.origin !== identityUrl.origin) {
      throw new Error("Cloudflare Access URLs 必須使用同一個 application domain");
    }

    async function checkSession() {
      try {
        const response = await fetchImpl(identityUrl.href, {
          cache: "no-store",
          credentials: "include",
          redirect: "manual"
        });

        if (isAuthenticationRequired(response) || !response.ok) {
          return { authenticated: false, reason: "login_required" };
        }

        const contentType = response.headers?.get?.("content-type") || "";
        if (!contentType.toLowerCase().includes("application/json")) {
          return { authenticated: false, reason: "unexpected_response" };
        }

        const identity = await response.json();
        return {
          authenticated: true,
          identity: {
            email: typeof identity?.email === "string" ? identity.email : "",
            userUuid: typeof identity?.user_uuid === "string" ? identity.user_uuid : ""
          }
        };
      } catch (error) {
        return {
          authenticated: false,
          reason: "network_error",
          error
        };
      }
    }

    async function fetchProtected(url, requestOptions = {}) {
      const target = parseHttpsUrl(url, "protected resource URL");
      if (target.origin !== identityUrl.origin) {
        throw new Error("Protected resource 必須使用已設定的 Cloudflare Access domain");
      }

      const response = await fetchImpl(target.href, {
        ...requestOptions,
        cache: requestOptions.cache || "no-store",
        credentials: "include",
        redirect: "manual"
      });

      if (isAuthenticationRequired(response)) {
        throw new CloudflareAccessError("Cloudflare Access 登入已過期");
      }
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${target.href}`);
      }
      return response;
    }

    return {
      checkSession,
      fetchProtected,
      getLoginUrl: () => loginUrl.href,
      getLogoutUrl: () => logoutUrl.href
    };
  }

  return {
    AUTH_REQUIRED,
    CloudflareAccessError,
    createClient,
    isAuthenticationRequired
  };
});
