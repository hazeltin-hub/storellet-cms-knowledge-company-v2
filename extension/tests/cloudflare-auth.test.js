"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const {
  AUTH_REQUIRED,
  createClient,
  isAuthenticationRequired
} = require("../src/cloudflare-auth.js");

const CONFIG = {
  identityUrl: "https://storellet-knowledge.storellet.com/cdn-cgi/access/get-identity",
  loginUrl: "https://storellet-knowledge.storellet.com/cdn-cgi/access/get-identity",
  logoutUrl: "https://storellet-knowledge.storellet.com/cdn-cgi/access/logout"
};

function response({ status = 200, type = "basic", contentType = "application/json", json = {} } = {}) {
  return {
    status,
    type,
    ok: status >= 200 && status < 300,
    headers: { get: () => contentType },
    json: async () => json,
    arrayBuffer: async () => new ArrayBuffer(4)
  };
}

test("checks a Cloudflare session with browser credentials and no service-token headers", async () => {
  let request;
  const client = createClient(CONFIG, {
    fetchImpl: async (url, options) => {
      request = { url, options };
      return response({ json: { email: "account@storellet.com", user_uuid: "user-1" } });
    }
  });

  const session = await client.checkSession();
  assert.equal(session.authenticated, true);
  assert.equal(session.identity.email, "account@storellet.com");
  assert.equal(request.options.credentials, "include");
  assert.equal(request.options.redirect, "manual");
  assert.equal(request.options.headers, undefined);
});

test("treats an Access login redirect as an unauthenticated session", async () => {
  const client = createClient(CONFIG, {
    fetchImpl: async () => response({ status: 0, type: "opaqueredirect" })
  });

  const session = await client.checkSession();
  assert.equal(session.authenticated, false);
  assert.equal(session.reason, "login_required");
  assert.equal(isAuthenticationRequired(response({ status: 302 })), true);
});

test("protected R2 requests include the Access cookie credentials", async () => {
  let requestOptions;
  const client = createClient(CONFIG, {
    fetchImpl: async (_url, options) => {
      requestOptions = options;
      return response({ contentType: "application/zip" });
    }
  });

  await client.fetchProtected("https://storellet-knowledge.storellet.com/storellet-knowledge.zip");
  assert.equal(requestOptions.credentials, "include");
  assert.equal(requestOptions.redirect, "manual");
});

test("throws a typed error when the protected resource session expires", async () => {
  const client = createClient(CONFIG, {
    fetchImpl: async () => response({ status: 401 })
  });

  await assert.rejects(
    () => client.fetchProtected("https://storellet-knowledge.storellet.com/knowledge.zip"),
    (error) => error.code === AUTH_REQUIRED
  );
});

test("rejects login URLs outside the configured Access application domain", () => {
  assert.throws(
    () => createClient({ ...CONFIG, logoutUrl: "https://example.com/logout" }, { fetchImpl: async () => response() }),
    /同一個 application domain/
  );
});
