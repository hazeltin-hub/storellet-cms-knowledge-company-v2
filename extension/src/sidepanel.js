(function initializeSidePanel() {
  "use strict";

  const config = window.CMS_CHAT_CONFIG;
  const searchEngine = window.KnowledgeSearch;
  const chatroomUtils = window.ChatroomUtils;
  const cloudflareAuth = window.CloudflareAuth;
  const authClient = config.cloudflareAccess?.enabled
    ? cloudflareAuth.createClient(config.cloudflareAccess)
    : null;
  const elements = {
    authGate: document.querySelector("#auth-gate"),
    authStatus: document.querySelector("#auth-status"),
    authLoginButton: document.querySelector("#cloudflare-login-button"),
    authRetryButton: document.querySelector("#cloudflare-retry-button"),
    authLogoutButton: document.querySelector("#cloudflare-logout-button"),
    authSessionRow: document.querySelector("#auth-session-row"),
    authUser: document.querySelector("#auth-user"),
    botName: document.querySelector("#bot-name"),
    statusDot: document.querySelector("#status-dot"),
    knowledgeStatus: document.querySelector("#knowledge-status"),
    pendingCount: document.querySelector("#pending-count"),
    messages: document.querySelector("#messages"),
    questionForm: document.querySelector("#question-form"),
    questionInput: document.querySelector("#question-input"),
    sendButton: document.querySelector("#send-button"),
    reloadButton: document.querySelector("#reload-button"),
    clearButton: document.querySelector("#clear-button"),
    exportButton: document.querySelector("#export-button"),
    githubSyncButton: document.querySelector("#github-sync-button"),
    githubSyncDialog: document.querySelector("#github-sync-dialog"),
    githubSyncWarning: document.querySelector("#github-sync-warning"),
    githubSyncPreview: document.querySelector("#github-sync-preview"),
    githubSyncRemaining: document.querySelector("#github-sync-remaining"),
    githubSyncCancel: document.querySelector("#github-sync-cancel"),
    githubSyncConfirm: document.querySelector("#github-sync-confirm"),
    userTemplate: document.querySelector("#user-message-template"),
    botTemplate: document.querySelector("#bot-message-template"),
    // Settings elements
    settingsButton: document.querySelector("#settings-button"),
    settingsPanel: document.querySelector("#settings-panel"),
    closeSettingsButton: document.querySelector("#close-settings"),
    apiKeyInput: document.querySelector("#api-key-input"),
    apiEndpointInput: document.querySelector("#api-endpoint-input"),
    modelSelect: document.querySelector("#model-select"),
    customModelInput: document.querySelector("#custom-model-input"),
    modelModeRadios: document.querySelectorAll("input[name='model-mode']"),
    presetModelGroup: document.querySelector("#preset-model-group"),
    customModelGroup: document.querySelector("#custom-model-group"),
    maxTokensInput: document.querySelector("#max-tokens-input"),
    temperatureInput: document.querySelector("#temperature-input"),
    temperatureValue: document.querySelector("#temperature-value"),
    aiEnabledToggle: document.querySelector("#ai-enabled-toggle"),
    testApiButton: document.querySelector("#test-api-button"),
    saveSettingsButton: document.querySelector("#save-settings-button"),
    settingStatus: document.querySelector("#setting-status"),
    aiSearchCount: document.querySelector("#ai-search-count"),
    aiSuccessCount: document.querySelector("#ai-success-count"),
    apiUsageCount: document.querySelector("#api-usage-count")
  };

  const state = {
    entries: [],
    sourceMode: "loading",
    appInitialized: false,
    auth: {
      status: "checking",
      identity: null,
      lastCheckedAt: 0,
      loginStartedAt: 0,
      pollTimer: null,
      heartbeatTimer: null,
      needsKnowledgeReload: false
    },
    unansweredQuestions: [],
    githubIssueDraft: null,
    knowledgeFiles: new Map(), // Store loaded knowledge files
    conversationHistory: {
      messages: [],
      currentContext: null,
      followUpSuggestions: []
    }, // 新增：對話歷史
    aiSettings: {
      apiKey: "",
      apiEndpoint: "https://api.anthropic.com",
      model: "claude-3-5-sonnet-20241022",
      customModel: "",
      modelMode: "preset", // "preset" or "custom"
      maxTokens: 600,
      temperature: 0.7,
      enabled: false
    },
    aiStats: {
      searchCount: 0,
      successCount: 0,
      totalTokens: 0
    }
  };

  // GitHub URL construction
  function githubRawUrl(path) {
    const { owner, repository, branch } = config.github;
    const safePath = String(path)
      .split("/")
      .map((part) => encodeURIComponent(part))
      .join("/");
    return `https://raw.githubusercontent.com/${encodeURIComponent(owner)}/${encodeURIComponent(repository)}/${encodeURIComponent(branch)}/${safePath}`;
  }

  // Check if GitHub is properly configured
  function isGithubConfigured() {
    const { owner, repository, branch, indexPath } = config.github;
    return Boolean(
      owner &&
        owner !== "YOUR_GITHUB_USERNAME" &&
        repository &&
        branch &&
        indexPath
    );
  }

  // Fetch from GitHub (no special headers needed)
  async function fetchFromGitHub(url) {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${url}`);
    }
    return response;
  }

  async function fetchResource(url, protectedResource = false) {
    if (protectedResource) {
      return authClient.fetchProtected(url);
    }

    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${url}`);
    return response;
  }

  async function fetchJson(url, protectedResource = false) {
    const response = await fetchResource(url, protectedResource);
    return response.json();
  }

  async function fetchText(url, protectedResource = false) {
    const response = await fetchResource(url, protectedResource);
    return response.text();
  }

  async function fetchArrayBuffer(url) {
    const response = await authClient.fetchProtected(url);
    return response.arrayBuffer();
  }

  // Unzip buffer and extract files
  async function unzipKnowledge(arrayBuffer) {
    try {
      // Use JSZip if available, otherwise use native browser APIs
      if (typeof JSZip !== 'undefined') {
        const zip = await JSZip.loadAsync(arrayBuffer);
        const files = new Map();

        // Process all files in the ZIP
        for (const [path, zipEntry] of Object.entries(zip.files)) {
          if (!zipEntry.dir && path.endsWith('.md') || path.endsWith('.json')) {
            const content = await zipEntry.async('text');
            files.set(path, content);
          }
        }

        return files;
      } else {
        // Fallback: Assume the ZIP contains a flat structure with index.json at root
        // This is a simplified version - in production, use JSZip or similar
        throw new Error('JSZip library not loaded. Please include JSZip in the extension.');
      }
    } catch (error) {
      console.error('Failed to unzip knowledge:', error);
      throw new Error(`解壓知識庫失敗: ${error.message}`);
    }
  }

  // Load knowledge from GitHub
  async function loadFromGitHub() {
    console.log(`🔷 Loading knowledge from GitHub: ${config.github.owner}/${config.github.repository}`);

    try {
      // Load index.json
      const indexUrl = githubRawUrl(config.github.indexPath);
      console.log(`📄 Loading index from: ${indexUrl}`);

      const indexResponse = await fetchFromGitHub(indexUrl);
      const index = await indexResponse.json();

      if (!index || !Array.isArray(index.files)) {
        throw new Error("Invalid index.json format");
      }

      // Filter enabled files
      const enabledFiles = index.files
        .filter((item) => item && item.enabled !== false && item.path)
        .map((item) => String(item.path));

      console.log(`📚 Found ${enabledFiles.length} enabled knowledge files`);

      // Load all markdown files
      const markdownFiles = await Promise.all(
        enabledFiles.map(async (path) => {
          const fileUrl = githubRawUrl(path);
          console.log(`📄 Loading: ${path}`);
          const response = await fetchFromGitHub(fileUrl);
          const markdown = await response.text();
          return { path, markdown };
        })
      );

      // Build entries
      const entries = markdownFiles
        .map(({ markdown, path }) => searchEngine.buildEntry(markdown, path))
        .filter((entry) => entry.question && entry.answer);

      if (entries.length === 0) {
        throw new Error("知識庫未有可用 Model Answer");
      }

      console.log(`✅ Successfully loaded ${entries.length} entries from GitHub`);
      return entries;

    } catch (error) {
      console.error(`❌ Failed to load from GitHub:`, error);
      throw error;
    }
  }

  // Load knowledge from ZIP URLs
  async function loadFromZipUrls() {
    const errors = [];

    for (const url of config.knowledgeUrls) {
      try {
        console.log(`📦 Loading knowledge from: ${url}`);
        console.log(`🔐 Using Cloudflare Access user session: ${state.auth.status === 'authenticated' ? 'Yes' : 'No'}`);

        // Download ZIP
        console.log(`⬇️  Starting download...`);
        const arrayBuffer = await fetchArrayBuffer(url);
        console.log(`✅ Downloaded ${arrayBuffer.byteLength} bytes`);

        if (arrayBuffer.byteLength === 0) {
          throw new Error('下載的文件為空');
        }

        // Check if it's a ZIP file
        const firstBytes = new Uint8Array(arrayBuffer.slice(0, 4));
        if (firstBytes[0] !== 0x50 || firstBytes[1] !== 0x4B) {
          console.error(`❌ Not a ZIP file. First bytes: ${Array.from(firstBytes).map(b => b.toString(16).padStart(2, '0')).join(' ')}`);
          throw new Error('下載的文件不是 ZIP 格式');
        }

        // Unzip
        console.log(`📦 Starting unzip...`);
        const files = await unzipKnowledge(arrayBuffer);
        console.log(`📂 Extracted ${files.size} files`);

        if (files.size === 0) {
          throw new Error('ZIP 文件為空或無法提取');
        }

        // Find and parse index.json
        const indexPath = Array.from(files.keys()).find(path =>
          path.endsWith('index.json') || path.includes('index.json')
        );

        if (!indexPath) {
          console.error(`❌ Available files: ${Array.from(files.keys()).slice(0, 10).join(', ')}`);
          throw new Error('ZIP 中未找到 index.json');
        }

        console.log(`📄 Found index.json at: ${indexPath}`);

        const indexContent = files.get(indexPath);
        const index = JSON.parse(indexContent);

        if (!Array.isArray(index.files)) {
          throw new Error('index.json 缺少 files array');
        }

        console.log(`📋 Index contains ${index.files.length} files`);

        // Load all markdown files mentioned in index
        const entries = [];
        const markdownFiles = index.files.filter(item =>
          item && item.enabled !== false && item.path && item.path.endsWith('.md')
        );

        console.log(`📝 Loading ${markdownFiles.length} markdown files...`);

        let loadedCount = 0;
        let skippedCount = 0;

        for (const file of markdownFiles) {
          const content = files.get(file.path);
          if (content) {
            const entry = searchEngine.buildEntry(content, file.path);
            if (entry.question && entry.answer) {
              entries.push(entry);
              loadedCount++;
            } else {
              skippedCount++;
              console.warn(`⚠️  Skipped invalid entry: ${file.path}`);
            }
          } else {
            console.warn(`⚠️  File not found in ZIP: ${file.path}`);
          }
        }

        console.log(`✅ Loaded: ${loadedCount}, Skipped: ${skippedCount}, Total: ${entries.length}`);

        if (entries.length === 0) {
          throw new Error('知識庫未有可用 Model Answer');
        }

        console.log(`✅ Successfully loaded ${entries.length} model answers from ${url}`);
        return entries;

      } catch (error) {
        if (error.code === cloudflareAuth.AUTH_REQUIRED) throw error;
        console.error(`❌ Failed to load from ${url}:`, error);
        console.error(`   Error details:`, error.stack);
        errors.push({ url, error: error.message, details: error.stack });
      }
    }

    // If all URLs failed, throw detailed error
    if (errors.length === config.knowledgeUrls.length) {
      const errorMsg = `所有知識庫來源均失敗:\n${errors.map((e, i) =>
        `${i + 1}. ${e.url}\n   錯誤: ${e.error}`
      ).join('\n\n')}\n\n💡 請檢查:\n   1. Cloudflare Access 登入是否有效\n   2. ZIP URLs 是否可訪問\n   3. 網絡連接是否正常`;

      console.error(`🚨 ${errorMsg}`);
      throw new Error(errorMsg);
    }
  }

  function validateIndex(index) {
    if (!index || !Array.isArray(index.files)) {
      throw new Error("knowledge/index.json 缺少 files array");
    }

    return index.files
      .filter((item) => item && item.enabled !== false && item.path)
      .map((item) => String(item.path));
  }

  async function loadFromBase(indexUrl, resolveFileUrl, isR2 = false) {
    const index = await fetchJson(indexUrl, isR2);
    const paths = validateIndex(index);
    const markdownFiles = await Promise.all(
      paths.map(async (path) => ({
        path,
        markdown: await fetchText(resolveFileUrl(path), isR2)
      }))
    );

    const entries = markdownFiles
      .map(({ markdown, path }) => searchEngine.buildEntry(markdown, path))
      .filter((entry) => entry.question && entry.answer);

    if (entries.length === 0) {
      throw new Error("知識庫未有可用 Model Answer");
    }

    return entries;
  }

  async function loadRemoteKnowledge() {
    const sourceType = config.source.type;

    if (sourceType === "r2" && isR2Configured()) {
      return loadFromBase(
        r2Url(config.r2.indexPath),
        (path) => r2Url(path),
        true // isR2
      );
    }

    if (sourceType === "github" && isGithubConfigured()) {
      return loadFromBase(
        githubRawUrl(config.github.indexPath),
        (path) => githubRawUrl(path),
        false // isR2
      );
    }

    throw new Error(`遠端來源 ${sourceType} 尚未設定`);
  }

  async function loadLocalKnowledge() {
    return loadFromBase(
      chrome.runtime.getURL(config.github.indexPath),
      (path) => chrome.runtime.getURL(path)
    );
  }

  function updateStatus(mode, message) {
    state.sourceMode = mode;
    elements.knowledgeStatus.textContent = message;
    elements.statusDot.className = `status-dot status-dot--${mode}`;
  }

  function setLoading(isLoading) {
    elements.sendButton.disabled = isLoading;
    elements.reloadButton.disabled = isLoading;
    if (isLoading) updateStatus("loading", "正在載入知識庫…");
  }

  function clearAuthTimers() {
    if (state.auth.pollTimer) clearTimeout(state.auth.pollTimer);
    if (state.auth.heartbeatTimer) clearTimeout(state.auth.heartbeatTimer);
    state.auth.pollTimer = null;
    state.auth.heartbeatTimer = null;
  }

  function setAuthGate(message, status = "login_required") {
    clearAuthTimers();
    state.auth.status = status;
    elements.authGate.hidden = false;
    elements.authStatus.textContent = message;
    elements.authStatus.className = `auth-status auth-status--${status}`;
    elements.authLoginButton.disabled = status === "checking" || status === "waiting";
    elements.authRetryButton.disabled = status === "checking";
    elements.authSessionRow.hidden = true;
    elements.authLogoutButton.hidden = true;
    elements.settingsPanel.style.display = "none";
    elements.questionInput.disabled = true;
    elements.sendButton.disabled = true;
  }

  function scheduleSessionHeartbeat() {
    if (!authClient) return;
    if (state.auth.heartbeatTimer) clearTimeout(state.auth.heartbeatTimer);
    const delay = config.cloudflareAccess.sessionCheckMaxAgeMs || 300000;
    state.auth.heartbeatTimer = setTimeout(async () => {
      const isAuthenticated = await ensureCloudflareSession({ force: true });
      if (isAuthenticated) scheduleSessionHeartbeat();
    }, delay);
  }

  async function unlockChatroom(session) {
    clearAuthTimers();
    state.auth.status = "authenticated";
    state.auth.identity = session.identity || null;
    state.auth.lastCheckedAt = Date.now();
    elements.authGate.hidden = true;
    elements.authSessionRow.hidden = false;
    elements.authLogoutButton.hidden = false;
    elements.authUser.textContent = session.identity?.email || "Cloudflare 已登入";
    elements.questionInput.disabled = false;
    elements.sendButton.disabled = false;
    elements.reloadButton.disabled = false;
    scheduleSessionHeartbeat();

    if (!state.appInitialized) {
      await initializeAuthenticatedApp();
    } else if (state.auth.needsKnowledgeReload) {
      state.auth.needsKnowledgeReload = false;
      await loadKnowledge();
    }
  }

  async function checkCloudflareSession({ showChecking = false } = {}) {
    if (!authClient) return { authenticated: true, identity: null };
    if (showChecking) setAuthGate("正在檢查 Cloudflare 登入狀態…", "checking");
    const session = await authClient.checkSession();
    if (session.authenticated) state.auth.lastCheckedAt = Date.now();
    return session;
  }

  async function ensureCloudflareSession({ force = false } = {}) {
    if (!authClient) return true;
    const maxAge = config.cloudflareAccess.sessionCheckMaxAgeMs || 300000;
    if (
      !force &&
      state.auth.status === "authenticated" &&
      Date.now() - state.auth.lastCheckedAt < maxAge
    ) {
      return true;
    }

    const session = await checkCloudflareSession();
    if (session.authenticated) {
      state.auth.status = "authenticated";
      state.auth.identity = session.identity || null;
      return true;
    }

    const message = session.reason === "network_error"
      ? "未能連接 Cloudflare Access，請檢查網絡後再試。"
      : "Cloudflare 登入已過期，請重新登入。";
    setAuthGate(message, session.reason === "network_error" ? "error" : "login_required");
    return false;
  }

  async function pollForCloudflareLogin() {
    const session = await checkCloudflareSession();
    if (session.authenticated) {
      await unlockChatroom(session);
      return;
    }

    const timeout = config.cloudflareAccess.pollTimeoutMs || 120000;
    if (Date.now() - state.auth.loginStartedAt >= timeout) {
      setAuthGate("未偵測到登入。完成 Cloudflare 登入後，請按「重新檢查」。", "login_required");
      return;
    }

    state.auth.pollTimer = setTimeout(
      pollForCloudflareLogin,
      config.cloudflareAccess.pollIntervalMs || 1500
    );
  }

  async function beginCloudflareLogin() {
    try {
      await chrome.tabs.create({ url: authClient.getLoginUrl() });
      setAuthGate("Cloudflare 登入頁已開啟，正在等候驗證…", "waiting");
      state.auth.loginStartedAt = Date.now();
      state.auth.pollTimer = setTimeout(
        pollForCloudflareLogin,
        config.cloudflareAccess.pollIntervalMs || 1500
      );
    } catch (error) {
      console.error("❌ Failed to open Cloudflare Access login:", error);
      setAuthGate("未能開啟 Cloudflare 登入頁，請再試一次。", "error");
    }
  }

  async function retryCloudflareLogin() {
    const session = await checkCloudflareSession({ showChecking: true });
    if (session.authenticated) {
      await unlockChatroom(session);
      return;
    }

    const message = session.reason === "network_error"
      ? "未能連接 Cloudflare Access，請檢查網絡後再試。"
      : "仍未完成登入，請先在 Cloudflare 頁面登入。";
    setAuthGate(message, session.reason === "network_error" ? "error" : "login_required");
  }

  async function logoutCloudflare() {
    clearAuthTimers();
    state.entries = [];
    state.appInitialized = false;
    state.auth.identity = null;
    state.auth.lastCheckedAt = 0;
    state.auth.needsKnowledgeReload = false;
    elements.messages.replaceChildren();
    setAuthGate("登出頁已開啟。完成後可再次使用公司帳戶登入。", "login_required");

    try {
      await chrome.tabs.create({ url: authClient.getLogoutUrl() });
    } catch (error) {
      console.error("❌ Failed to open Cloudflare Access logout:", error);
      setAuthGate("未能開啟 Cloudflare 登出頁，請再試一次。", "error");
    }
  }

  async function loadKnowledge() {
    setLoading(true);

    try {
      const sourceType = config.source.type || "github"; // Default to GitHub
      console.log(`🔧 Source type: ${sourceType}`);

      if (sourceType === "github" && isGithubConfigured()) {
        // Load from GitHub (primary for testing)
        console.log(`🔷 Using GitHub as primary source`);
        try {
          state.entries = await loadFromGitHub();
          updateStatus("ready", `GitHub 知識庫 · ${state.entries.length} 條答案`);
          console.log(`✅ GitHub knowledge loaded successfully: ${state.entries.length} entries`);
          return;
        } catch (githubError) {
          console.warn(`⚠️ GitHub loading failed, trying R2 fallback:`, githubError);

          // Try R2 as fallback
          if (config.knowledgeUrls && config.knowledgeUrls.length > 0) {
            try {
              state.entries = await loadFromZipUrls();
              updateStatus("fallback", `GitHub 失敗，使用 R2 知識庫 · ${state.entries.length} 條答案`);
              console.log(`✅ R2 fallback loaded successfully: ${state.entries.length} entries`);
              return;
            } catch (r2Error) {
              if (r2Error.code === cloudflareAuth.AUTH_REQUIRED) throw r2Error;
              console.error(`❌ Both GitHub and R2 failed:`, r2Error);
              throw new Error(`GitHub 和 R2 都無法載入: ${githubError.message} | ${r2Error.message}`);
            }
          } else {
            throw githubError;
          }
        }
      }

      if (sourceType === "r2") {
        // Load from R2/ZIP (production mode)
        console.log(`🔶 Using R2/ZIP as primary source`);
        state.entries = await loadFromZipUrls();
        updateStatus("ready", `R2 知識庫 · ${state.entries.length} 條答案`);
        console.log(`✅ R2 knowledge loaded successfully: ${state.entries.length} entries`);
        return;
      }

      throw new Error(`無效的來源類型: ${sourceType}`);

    } catch (error) {
      if (error.code === cloudflareAuth.AUTH_REQUIRED) {
        state.entries = [];
        state.auth.needsKnowledgeReload = true;
        updateStatus("error", "Cloudflare 登入已過期");
        setAuthGate("Cloudflare 登入已過期，請重新登入。", "login_required");
        return;
      }
      console.error('❌ Failed to load knowledge:', error);
      state.entries = [];
      updateStatus("error", "未能載入知識庫");
      addBotMessage({
        content: `未能載入知識庫：${error.message}`,
        isSystem: true
      });
    } finally {
      setLoading(false);
      if (authClient && state.auth.status !== "authenticated") {
        elements.questionInput.disabled = true;
        elements.sendButton.disabled = true;
        elements.reloadButton.disabled = true;
      }
    }
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function inlineMarkdown(value) {
    return escapeHtml(value)
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }

  function renderMarkdown(markdown) {
    const lines = String(markdown || "").replace(/\r\n/g, "\n").split("\n");
    const html = [];
    let activeList = null;

    function closeList() {
      if (activeList) {
        html.push(`</${activeList}>`);
        activeList = null;
      }
    }

    lines.forEach((line) => {
      const trimmed = line.trim();

      if (!trimmed) {
        closeList();
        return;
      }

      const heading = trimmed.match(/^(#{2,3})\s+(.+)$/);
      if (heading) {
        closeList();
        const level = heading[1].length;
        html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
        return;
      }

      const unordered = trimmed.match(/^[-*]\s+(.+)$/);
      if (unordered) {
        if (activeList !== "ul") {
          closeList();
          activeList = "ul";
          html.push("<ul>");
        }
        html.push(`<li>${inlineMarkdown(unordered[1])}</li>`);
        return;
      }

      const ordered = trimmed.match(/^\d+\.\s+(.+)$/);
      if (ordered) {
        if (activeList !== "ol") {
          closeList();
          activeList = "ol";
          html.push("<ol>");
        }
        html.push(`<li>${inlineMarkdown(ordered[1])}</li>`);
        return;
      }

      closeList();
      html.push(`<p>${inlineMarkdown(trimmed)}</p>`);
    });

    closeList();
    return html.join("");
  }

  function addUserMessage(question) {
    const node = elements.userTemplate.content.cloneNode(true);
    node.querySelector(".message-bubble").textContent = question;
    elements.messages.append(node);
    scrollToLatest();

    // 暫時禁用對話記憶功能進行緊急修復
    // addConversationMessage('user', question, { type: 'question' });
  }

  function safeSourceLink(url, title) {
    try {
      const parsed = new URL(url);
      if (parsed.protocol !== "https:") throw new Error("Unsupported URL");
      return `<a href="${escapeHtml(parsed.href)}" target="_blank" rel="noreferrer">${escapeHtml(title)}</a>`;
    } catch {
      return escapeHtml(title);
    }
  }

  // Conversation Memory Functions
  function addConversationMessage(role, content, metadata = {}) {
    const message = {
      role,
      content,
      timestamp: new Date().toISOString(),
      metadata
    };

    state.conversationHistory.messages.push(message);

    // 只保留最近 10 條消息，避免 token 過多
    if (state.conversationHistory.messages.length > 10) {
      state.conversationHistory.messages = state.conversationHistory.messages.slice(-10);
    }

    // 更新對話上下文
    updateConversationContext(content);

    // 保存到 local storage
    try {
      chrome.storage.local.set({ conversationHistory: state.conversationHistory });
    } catch (error) {
      console.warn('Failed to save conversation history:', error);
    }
  }

  function updateConversationContext(content) {
    const contextKeywords = {
      'birthday_setup': ['生日優惠', 'birthday', '派發', 'coupon trigger', 'dispatch on join'],
      'pos_system': ['POS', 'Pointsoft', 'Seito', 'Everyware', '整合', 'invoice'],
      'brand_setup': ['品牌', 'brand', '新品牌', '創建', 'cuisine tag', 'region tag'],
      'coupon_issue': ['優惠券問題', 'coupon', '錯誤', '失敗', '唔可以用'],
      'operation_notes': ['注意事項', '陷阱', '天書', '技巧', '經驗', '配置']
    };

    let contextDetected = false;

    for (const [context, keywords] of Object.entries(contextKeywords)) {
      if (keywords.some(keyword => content.toLowerCase().includes(keyword.toLowerCase()))) {
        state.conversationHistory.currentContext = context;
        contextDetected = true;
        console.log(`🎯 對話上下文檢測: ${context}`);
        break;
      }
    }
  }

  function generateFollowUpSuggestions() {
    // 使用當前的對話上下文
    const context = state.conversationHistory.currentContext;

    const suggestionsMap = {
      'birthday_setup': [
        '💡 既然你問生日優惠，有分 tier 嘅品牌嗎？記得唔好 tick "dispatch on join"',
        '💡 需要唔需要了解 Braze 設定？',
        '💡 想了解更多 birthday coupon 嘅陷阱？'
      ],
      'pos_system': [
        '💡 既然你關注 POS，想了解其他穩定嘅系統？例如 Seito 8',
        '💡 需要唔需要了解 POS 嘅 invoice 格式差異？',
        '💡 想知各 POS 嘅技術限制對比？'
      ],
      'brand_setup': [
        '💡 新品牌設定需要注意 Cuisine Tag 同 Region Tag 格式',
        '💡 需要唔需要了解 Branded App 設定要求？',
        '💡 想了解年齡分組同 FAQ 設定？'
      ],
      'coupon_issue': [
        '💡 既然有優惠券問題，想了解 CMS 操作注意事項？',
        '💡 需要唔需要了解 coupon type 嘅分別？',
        '💡 想排查 Braze 配置問題？'
      ],
      'operation_notes': [
        '💡 既然你關注操作技巧，想了解特定功能嘅陷阱？',
        '💡 需要唔需要了解 tier 系統嘅注意事項？',
        '💡 想知更多實戰經驗分享？'
      ]
    };

    if (context && suggestionsMap[context]) {
      state.conversationHistory.followUpSuggestions = suggestionsMap[context];
      console.log(`💡 已生成 ${state.conversationHistory.followUpSuggestions.length} 個跟進建議 for ${context}`);
    } else {
      state.conversationHistory.followUpSuggestions = [];
    }
  }

  function buildConversationContext() {
    if (state.conversationHistory.messages.length === 0) {
      return '';
    }

    const recentMessages = state.conversationHistory.messages.slice(-5);
    const conversationSummary = recentMessages
      .map(msg => `${msg.role === 'user' ? '用戶' : 'AI'}: ${msg.content.substring(0, 100)}`)
      .join('\n');

    return `
## 對話上下文記憶
最近對話記錄（最近5條）：
${conversationSummary}

當前對話主題：${state.conversationHistory.currentContext || '一般查詢'}

## 智能提問指引
- 根據對話上下文，主動提供相關建議
- 如果用戶問設置類問題，後續提問注意事項和陷阱
- 像專家助手一樣，基於用戶需求漸進式引導
- 自然對話風格，不要過於機械化
`;
  }

  // Layered Response Processing Functions
  function processLayeredResponse(aiResponse) {
    // Check if response contains progress check
    const progressCheckMatch = aiResponse.match(/\[PROGRESS_CHECK\](.*?)\[\/PROGRESS_CHECK\]/);
    if (progressCheckMatch) {
      const questions = progressCheckMatch[1].split('|').map(q => q.trim());
      return {
        hasProgressCheck: true,
        questions: questions,
        mainContent: aiResponse.replace(/\[PROGRESS_CHECK\].*?\[\/PROGRESS_CHECK\]/, '').trim()
      };
    }

    // Check if response contains layered content
    const layerMatch = aiResponse.match(/\[LAYER\](.*?)\[\/LAYER\]((?:\[DETAIL\].*?\[\/DETAIL\])?)/);
    if (layerMatch) {
      return {
        isLayered: true,
        mainContent: layerMatch[1].trim(),
        detailContent: layerMatch[2] ? layerMatch[2].replace(/\[DETAIL\](.*?)\[\/DETAIL\]/, '$1').trim() : ''
      };
    }

    // Smart layering: if response is long without markers, auto-layer it
    const lines = aiResponse.split('\n').filter(line => line.trim());
    const charCount = aiResponse.length;

    // Detect if this looks like a workflow response
    const workflowKeywords = ['步驟', '流程', '設定', '設置', '配置', 'setup', 'step', '工作流程', '配置', '創建', '建立'];
    const isWorkflow = workflowKeywords.some(keyword =>
      aiResponse.toLowerCase().includes(keyword)
    );

    // Auto-layer based on multiple criteria (more aggressive)
    const shouldLayer = isWorkflow || lines.length >= 3 || charCount >= 150;

    if (shouldLayer && lines.length >= 2) {
      if (isWorkflow) {
        // Auto-generate progress check for workflow responses
        const mainContent = lines[0] + '\n\n' + '請選擇你當前的進度：';
        const commonProgressOptions = [
          '剛開始，還未設置',
          '已有部分設置',
          '快完成了'
        ];

        return {
          hasProgressCheck: true,
          questions: commonProgressOptions,
          mainContent: mainContent,
          autoGenerated: true
        };
      }

      // General multi-line response - split into layers
      const splitPoint = Math.min(2, Math.ceil(lines.length / 3));
      const mainContent = lines.slice(0, splitPoint).join('\n').trim();
      const detailContent = lines.slice(splitPoint).join('\n').trim();

      return {
        hasProgressCheck: false,
        isLayered: true,
        mainContent: mainContent,
        detailContent: detailContent
      };
    }

    // No special formatting, return as-is
    return {
      hasProgressCheck: false,
      isLayered: false,
      mainContent: aiResponse,
      detailContent: ''
    };
  }

  function createInteractiveButton(text, onClick) {
    const button = document.createElement('button');
    button.className = 'layered-response-button';
    button.textContent = text;
    button.onclick = onClick;
    return button;
  }

  function createProgressCheckUI(questions) {
    const container = document.createElement('div');
    container.className = 'progress-check-container';

    const questionText = document.createElement('div');
    questionText.className = 'progress-check-question';
    questionText.textContent = '請選擇你當前的進度：';
    container.appendChild(questionText);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'progress-check-buttons';

    questions.forEach((question, index) => {
      const button = createInteractiveButton(question, () => {
        handleProgressSelection(question, index);
      });
      buttonContainer.appendChild(button);
    });

    container.appendChild(buttonContainer);
    return container;
  }

  function handleProgressSelection(selection, index) {
    // User clicked on a progress option
    const followUpQuestion = `我${selection}，下一步應該做咩？`;
    elements.questionInput.value = followUpQuestion;
    elements.questionInput.focus();
  }

  function createDetailViewButton(detailContent) {
    const button = createInteractiveButton('查看詳細步驟 ▼', () => {
      const detailDiv = document.createElement('div');
      detailDiv.className = 'layered-response-detail';
      detailDiv.innerHTML = renderMarkdown(detailContent);

      button.parentNode.replaceChild(detailDiv, button);
    });
    return button;
  }

  function renderKnowledgeAnswer(container, markdown) {
    const previewResult = chatroomUtils.buildModelAnswerPreview(markdown, {
      maxCharacters: config.interface.modelAnswerPreviewCharacters
    });

    if (!previewResult.isTruncated) {
      container.innerHTML = renderMarkdown(markdown);
      return;
    }

    const preview = document.createElement("div");
    preview.className = "model-answer-preview";
    preview.innerHTML = renderMarkdown(previewResult.preview);

    const details = document.createElement("details");
    details.className = "model-answer-details";

    const toggle = document.createElement("summary");
    toggle.textContent = "查看完整答案";

    const fullAnswer = document.createElement("div");
    fullAnswer.className = "model-answer-full";
    fullAnswer.innerHTML = renderMarkdown(markdown);

    details.addEventListener("toggle", () => {
      toggle.textContent = details.open ? "收起完整答案" : "查看完整答案";
    });

    details.append(toggle, fullAnswer);
    container.replaceChildren(preview, details);
  }

  function addBotMessage({ entry, content, isSystem = false, context = "" }) {
    const node = elements.botTemplate.content.cloneNode(true);
    const meta = node.querySelector(".answer-meta");
    const answer = node.querySelector(".answer-content");
    const source = node.querySelector(".answer-source");

    if (entry) {
      meta.innerHTML = [
        `<span class="meta-pill">${escapeHtml(entry.category)}</span>`,
        entry.module
          ? `<span class="meta-pill">${escapeHtml(entry.module)}</span>`
          : "",
        entry.status === "confirmed"
          ? '<span class="meta-pill meta-pill--confirmed">已確認</span>'
          : `<span class="meta-pill">${escapeHtml(entry.status)}</span>`
      ].join("");

      renderKnowledgeAnswer(answer, entry.answer);

      const sourceLabel = entry.sourceUrl
        ? safeSourceLink(entry.sourceUrl, entry.sourceTitle)
        : escapeHtml(entry.sourceTitle);
      const reviewed = entry.lastReviewed
        ? ` · 最後確認：${escapeHtml(entry.lastReviewed)}`
        : "";
      source.innerHTML = `資料來源：${sourceLabel}${reviewed}`;
    } else {
      meta.remove();

      // Process layered response for AI answers
      if (!isSystem && context.includes("AI")) {
        const processed = processLayeredResponse(content);

        // Display main content
        answer.innerHTML = renderMarkdown(processed.mainContent);

        // Add progress check UI if present
        if (processed.hasProgressCheck) {
          const progressUI = createProgressCheckUI(processed.questions);
          answer.appendChild(progressUI);
        }

        // Add detail view button if layered content exists
        if (processed.isLayered && processed.detailContent) {
          const detailButton = createDetailViewButton(processed.detailContent);
          answer.appendChild(detailButton);
        }

        if (context) {
          const contextDiv = document.createElement("div");
          contextDiv.className = "answer-context";
          contextDiv.textContent = context;
          answer.appendChild(contextDiv);
        }
        source.textContent = "AI 生成答案";
      } else {
        // Standard display for non-AI or system messages
        answer.innerHTML = renderMarkdown(content);
        if (context) {
          const contextDiv = document.createElement("div");
          contextDiv.className = "answer-context";
          contextDiv.textContent = context;
          answer.appendChild(contextDiv);
        }
        if (isSystem) {
          source.textContent = "系統訊息";
        } else {
          source.textContent = "此問題已加入本機待跟進清單";
        }
      }
    }

    // 暫時禁用對話記憶功能進行緊急修復
    // if (!isSystem) {
    //   addConversationMessage('assistant', content, {
    //     type: context.includes("AI") ? 'ai_answer' : 'standard_answer'
    //   });
    // }

    elements.messages.append(node);
    scrollToLatest();
  }

  function scrollToLatest() {
    requestAnimationFrame(() => {
      elements.messages.scrollTop = elements.messages.scrollHeight;
    });
  }

  // 新增：對話歷史管理函數
  async function loadConversationHistory() {
    try {
      const result = await chrome.storage.local.get('conversationHistory');
      if (result.conversationHistory) {
        state.conversationHistory = result.conversationHistory;
        console.log('💾 對話歷史已恢復:', state.conversationHistory.messages.length, '條消息');
      }
    } catch (error) {
      console.warn('無法載入對話歷史:', error);
    }
  }

  function displayFollowUpSuggestions() {
    if (state.conversationHistory.followUpSuggestions.length === 0) return;

    const suggestionDiv = document.createElement('div');
    suggestionDiv.className = 'follow-up-suggestions';
    suggestionDiv.innerHTML = `
      <div class="follow-up-header">💡 基於對話的智能建議：</div>
    `;

    state.conversationHistory.followUpSuggestions.forEach((suggestion, index) => {
      const suggestionButton = createInteractiveButton(suggestion, () => {
        const followUpQuestion = suggestion.replace('💡 ', '').trim();
        elements.questionInput.value = followUpQuestion;
        elements.questionInput.focus();
      });

      suggestionDiv.appendChild(suggestionButton);
    });

    // 顯示在消息容器的最後
    elements.messages.appendChild(suggestionDiv);
    scrollToLatest();

    // 8秒後自動隱藏，避免干擾
    setTimeout(() => {
      if (suggestionDiv.parentNode) {
        suggestionDiv.remove();
      }
    }, 8000);
  }

  async function loadUnansweredQuestions() {
    const result = await chrome.storage.local.get("unansweredQuestions");
    state.unansweredQuestions = Array.isArray(result.unansweredQuestions)
      ? result.unansweredQuestions
      : [];
  }

  async function recordUnansweredQuestion(question, reason, priority = null) {
    const normalized = searchEngine.normalizeText(question);
    const existingIndex = state.unansweredQuestions.findIndex(
      (item) => searchEngine.normalizeText(item.question) === normalized
    );

    if (existingIndex !== -1) {
      // Update existing question with new timestamp and frequency
      const existingQuestion = state.unansweredQuestions[existingIndex];
      const now = new Date().toISOString();
      existingQuestion.context = {
        ...(existingQuestion.context || {}),
        firstSeen: existingQuestion.context?.firstSeen || existingQuestion.firstSeen || now,
        lastSeen: now,
        frequency: (existingQuestion.context?.frequency || existingQuestion.frequency || 1) + 1
      };
      existingQuestion.resolution = { status: "pending" };
      await chrome.storage.local.set({
        unansweredQuestions: state.unansweredQuestions
      });
      return;
    }

    // Auto-determine priority if not provided
    if (!priority && config.tracking.autoPriority) {
      priority = determinePriority(question, reason);
    }

    const newQuestion = {
      id: `Q-${Date.now().toString(36).toUpperCase()}`,
      question,
      reason: categorizeReason(reason),
      priority: priority || "medium",
      context: {
        frequency: 1,
        firstSeen: new Date().toISOString(),
        lastSeen: new Date().toISOString()
      },
      resolution: {
        status: "pending"
      }
    };

    state.unansweredQuestions.push(newQuestion);
    await chrome.storage.local.set({
      unansweredQuestions: state.unansweredQuestions
    });
  }

  function categorizeReason(reason) {
    const categories = {
      "conflicting_answers": "知識庫衝突 - 多個答案符合但內容不同",
      "no_match": "無匹配 - 知識庫中沒有相關資料",
      "ai_no_match": "AI 無匹配 - 知識庫中沒有足夠資料",
      "ai_error": "AI 搜尋失敗 - 需要人工跟進",
      "too_general": "問題太模糊 - 需要更具體的問題",
      "missing_field": "欄位缺失 - 該具體欄位的資料不存在",
      "technical_issue": "技術問題 - CMS 或系統相關問題"
    };
    return categories[reason] || reason;
  }

  function determinePriority(question, reason) {
    // High priority: Frequently asked or blocking main flow
    const highPriorityKeywords = ["必填", "上架", "建立", "create", "required", "onboarding"];
    const questionLower = question.toLowerCase();

    // Check for high priority indicators
    if (highPriorityKeywords.some(keyword => questionLower.includes(keyword))) {
      return "high";
    }

    // Medium priority: General operational questions
    const mediumPriorityKeywords = ["用途", "點樣", "如何", "status", "setting"];
    if (mediumPriorityKeywords.some(keyword => questionLower.includes(keyword))) {
      return "medium";
    }

    // Low priority: Everything else
    return "low";
  }

  function markQuestionResolved(questionId, resolutionMethod, notes) {
    const questionIndex = state.unansweredQuestions.findIndex(q => q.id === questionId);
    if (questionIndex !== -1) {
      state.unansweredQuestions[questionIndex].resolution = {
        status: "resolved",
        method: resolutionMethod,
        resolvedAt: new Date().toISOString(),
        notes: notes
      };
      chrome.storage.local.set({
        unansweredQuestions: state.unansweredQuestions
      });
    }
  }

  // AI Settings Functions
  async function loadAISettings() {
    try {
      const result = await chrome.storage.local.get("aiSettings");
      if (result.aiSettings) {
        state.aiSettings = { ...state.aiSettings, ...result.aiSettings };
        console.log("✅ Loaded AI settings:", state.aiSettings);
      }
    } catch (error) {
      console.error("❌ Failed to load AI settings:", error);
    }
  }

  async function saveAISettings() {
    try {
      await chrome.storage.local.set({ aiSettings: state.aiSettings });
      console.log("✅ Saved AI settings");
    } catch (error) {
      console.error("❌ Failed to save AI settings:", error);
      throw error;
    }
  }

  function populateSettingsForm() {
    elements.apiKeyInput.value = state.aiSettings.apiKey || "";
    elements.apiEndpointInput.value = state.aiSettings.apiEndpoint || "https://api.anthropic.com";

    // Model mode handling
    const modelMode = state.aiSettings.modelMode || "preset";
    elements.modelModeRadios.forEach(radio => {
      radio.checked = radio.value === modelMode;
    });

    // Show/hide appropriate model input
    if (modelMode === "custom") {
      elements.presetModelGroup.style.display = "none";
      elements.customModelGroup.style.display = "block";
      elements.customModelInput.value = state.aiSettings.customModel || "";
    } else {
      elements.presetModelGroup.style.display = "block";
      elements.customModelGroup.style.display = "none";
      elements.modelSelect.value = state.aiSettings.model || "claude-3-5-sonnet-20241022";
    }

    elements.maxTokensInput.value = state.aiSettings.maxTokens || 600;
    elements.temperatureInput.value = state.aiSettings.temperature || 0.7;
    elements.temperatureValue.textContent = state.aiSettings.temperature || 0.7;
    elements.aiEnabledToggle.checked = state.aiSettings.enabled || false;
  }

  function showSettingStatus(message, type) {
    elements.settingStatus.style.display = "block";
    elements.settingStatus.className = `setting-status ${type}`;
    elements.settingStatus.querySelector(".status-message").textContent = message;

    // Auto hide after 5 seconds for success messages
    if (type === "success") {
      setTimeout(() => {
        elements.settingStatus.style.display = "none";
      }, 5000);
    }
  }

  async function testAPIConnection() {
    const apiKey = elements.apiKeyInput.value.trim();
    const apiEndpoint = elements.apiEndpointInput.value.trim();
    const modelMode = document.querySelector("input[name='model-mode']:checked").value;

    let model;
    if (modelMode === "custom") {
      model = elements.customModelInput.value.trim();
    } else {
      model = elements.modelSelect.value;
    }

    if (!apiKey) {
      showSettingStatus("❌ 請先輸入 API Key", "error");
      return;
    }

    if (!apiEndpoint) {
      showSettingStatus("❌ 請輸入 API Endpoint", "error");
      return;
    }

    if (!model) {
      showSettingStatus("❌ 請選擇或輸入模型名稱", "error");
      return;
    }

    showSettingStatus("🔍 正在測試 API 連接...", "loading");
    elements.testApiButton.disabled = true;

    try {
      // Use custom endpoint if provided
      const endpoint = apiEndpoint.replace(/\/$/, ''); // Remove trailing slash
      const testUrl = `${endpoint}/v1/messages`;

      const response = await fetch(testUrl, {
        method: 'POST',
        headers: {
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
          'dangerously-allow-browser': 'true'
        },
        body: JSON.stringify({
          model: model,
          max_tokens: 50,
          system: 'You are a helpful assistant.',
          messages: [{
            role: 'user',
            content: 'Say "Hello!" in Chinese.'
          }]
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API 錯誤: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log("✅ API test successful:", data);

      const endpointName = apiEndpoint.includes('anthropic.com') ? 'Anthropic' : '自定義';
      showSettingStatus(`✅ ${endpointName} API 連接成功！可以正常使用 AI 功能`, "success");

    } catch (error) {
      console.error("❌ API test failed:", error);
      showSettingStatus(`❌ API 連接失敗: ${error.message}`, "error");
    } finally {
      elements.testApiButton.disabled = false;
    }
  }

  async function saveSettings() {
    const apiKey = elements.apiKeyInput.value.trim();
    const apiEndpoint = elements.apiEndpointInput.value.trim();
    const modelMode = document.querySelector("input[name='model-mode']:checked").value;
    const maxTokens = parseInt(elements.maxTokensInput.value);
    const temperature = parseFloat(elements.temperatureInput.value);
    const enabled = elements.aiEnabledToggle.checked;

    // Get model based on mode
    let model;
    if (modelMode === "custom") {
      model = elements.customModelInput.value.trim();
      if (!model && enabled) {
        showSettingStatus("❌ 自定義模式下必須輸入模型名稱", "error");
        return;
      }
    } else {
      model = elements.modelSelect.value;
    }

    // Validation
    if (!apiKey && enabled) {
      showSettingStatus("❌ 啟用 AI 功能時必須輸入 API Key", "error");
      return;
    }

    if (apiKey && !apiKey.startsWith("sk-ant-") && !apiEndpoint.includes("anthropic.com")) {
      // Allow non-sk-ant keys for custom endpoints
      console.log("⚠️ Using custom endpoint with custom API key format");
    }

    if (!apiEndpoint) {
      showSettingStatus("❌ API Endpoint 不能為空", "error");
      return;
    }

    try {
      new URL(apiEndpoint);
    } catch {
      showSettingStatus("❌ API Endpoint 格式不正確", "error");
      return;
    }

    if (maxTokens < 100 || maxTokens > 4000) {
      showSettingStatus("❌ 最大答案長度必須在 100-4000 之間", "error");
      return;
    }

    if (temperature < 0 || temperature > 1) {
      showSettingStatus("❌ 創造性程度必須在 0-1 之間", "error");
      return;
    }

    // Update state
    state.aiSettings = {
      apiKey,
      apiEndpoint,
      model,
      customModel: modelMode === "custom" ? model : "",
      modelMode,
      maxTokens,
      temperature,
      enabled
    };

    showSettingStatus("💾 正在儲存設置...", "loading");
    elements.saveSettingsButton.disabled = true;

    try {
      await saveAISettings();
      showSettingStatus("✅ 設置已儲存！AI 功能已" + (enabled ? "啟用" : "停用"), "success");

      // Update global config for immediate use
      if (typeof config.ai !== 'undefined') {
        config.ai.apiKey = apiKey;
        config.ai.apiEndpoint = apiEndpoint;
        config.ai.model = model;
        config.ai.maxTokens = maxTokens;
        config.ai.temperature = temperature;
        config.ai.enabled = enabled;
      }

    } catch (error) {
      console.error("❌ Failed to save settings:", error);
      showSettingStatus("❌ 儲存失敗: " + error.message, "error");
    } finally {
      elements.saveSettingsButton.disabled = false;
    }
  }

  function updateAIStats() {
    elements.aiSearchCount.textContent = state.aiStats.searchCount;
    elements.aiSuccessCount.textContent = state.aiStats.successCount;

    // Estimate tokens (rough calculation: 1 token ≈ 4 characters)
    const estimatedTokens = state.aiStats.totalTokens;
    if (estimatedTokens < 1000) {
      elements.apiUsageCount.textContent = `~${estimatedTokens} tokens`;
    } else {
      elements.apiUsageCount.textContent = `~${(estimatedTokens / 1000).toFixed(1)}k tokens`;
    }
  }

  // AI Search Functions
  async function callClaudeAPI(question, knowledgeContext) {
    try {
      // Use settings from state instead of config
      const apiKey = state.aiSettings.apiKey || config.ai.apiKey;
      const apiEndpoint = state.aiSettings.apiEndpoint || config.ai.apiEndpoint || "https://api.anthropic.com";
      const model = state.aiSettings.model || config.ai.model;
      const maxTokens = state.aiSettings.maxTokens || config.ai.maxTokens;
      const temperature = state.aiSettings.temperature || config.ai.temperature;

      if (!apiKey || apiKey === "YOUR_CLAUDE_API_KEY") {
        throw new Error("API Key 未配置");
      }

      const systemPrompt = `你係 Storellet CMS 專家助手。請根據以下 knowledge base 回答用戶問題：

<knowledge_base>
${knowledgeContext}
</knowledge_base>

**極簡回答規則（必須遵守）：**

1. **所有回答必須 ≤ 80 字**
2. **工作流程問題** → 使用 [PROGRESS_CHECK]
3. **概念問題** → 使用 [LAYER] 標記
4. **絕對禁止長篇大論**

**智能提問規則（新增）：**
- 基於對話上下文，在回答後添加 💡 智能建議
- 如果用戶剛問了相關設置，建議下一步操作或陷阱
- 自然對話風格，像專家助手一樣引導用戶

**建議格式：**
回答之後添加智能建議，格式：
"答案内容。
💡 基於剛才嘅問題，建議..."

**標準回答格式：**

工作流程：
"呢個設置需要根據進度設定。[PROGRESS_CHECK]剛開始|已有品牌|已有優惠券[/PROGRESS_CHECK]"

概念問題：
"自動化規則：會員生日時自動派發優惠券。[LAYER]需要詳細設定？[/LAYER]"

**違反規則的例子（不要這樣做）：**
❌ "生日優惠設置工作流程...這是什麼...步驟1...步驟2..." (太長)
❌ "Coupon Trigger Rule 係用嚟...它可以...設置方法包括..." (太長)
✅ "自動化規則：會員生日時自動派發優惠券。[LAYER]需要詳細設定？[/LAYER]" (正確)

**要求：**
- 用中文回答
- 使用 knowledge base
- 沒有資料時說明"根據現有資料未能找到相關資訊"
- **回答 ≤ 80 字，建議用智能提問補充**
- **像專家助手一樣基於對話提供相關建議**`;

      // Use custom endpoint if provided
      const endpoint = apiEndpoint.replace(/\/$/, ''); // Remove trailing slash
      const apiUrl = `${endpoint}/v1/messages`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
          'dangerously-allow-browser': 'true'
        },
        body: JSON.stringify({
          model: model,
          max_tokens: maxTokens,
          temperature: temperature,
          system: systemPrompt,
          messages: [{
            role: 'user',
            content: question
          }]
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Claude API 錯誤: ${response.status} - ${errorText}`);
      }

      const data = await response.json();

      // Update stats
      state.aiStats.searchCount++;
      state.aiStats.totalTokens += maxTokens + (data.content[0].text.length / 4);

      return data.content[0].text;

    } catch (error) {
      console.error('Claude API 錯誤:', error);
      throw error;
    }
  }

  function buildKnowledgeContext() {
    // Extract keywords from the question (simple tokenization)
    const questionWords = typeof window.currentQuestion === 'string'
      ? window.currentQuestion.toLowerCase().split(/\s+/)
      : [];

    // Score all entries based on keyword matching
    const scoredEntries = state.entries.map(entry => {
      let score = 0;
      const entryText = `${entry.question} ${entry.alternatives?.join(' ')} ${entry.keywords?.join(' ')}`.toLowerCase();

      // Check for keyword matches
      questionWords.forEach(word => {
        if (word.length > 2) { // Ignore very short words
          if (entryText.includes(word)) {
            score += 1;
            // Higher score for exact matches
          }
          if (entry.question.toLowerCase().includes(word) ||
              (entry.alternatives && entry.alternatives.some(alt => alt.toLowerCase().includes(word)))) {
            score += 2;
          }
        }
      });

      // Bonus for confirmed status
      if (entry.status === 'confirmed') score += 1;

      return { entry, score };
    });

    // Sort by score (highest first) and take top 50 most relevant entries
    const topEntries = scoredEntries
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 50)
      .map(item => item.entry);

    // If no relevant entries found, fall back to first 30 confirmed entries
    const fallbackEntries = topEntries.length > 0
      ? topEntries
      : state.entries.filter(e => e.status === 'confirmed').slice(0, 30);

    console.log(`🔍 Building context with ${fallbackEntries.length} relevant entries`);

    // Build a simplified knowledge context from selected entries
    const contextParts = fallbackEntries.map(entry => {
      return `問題：${entry.question}
類別：${entry.category}${entry.module ? ` | ${entry.module}` : ''}
答案：${entry.answer.substring(0, 800)}...`;
    });

    return contextParts.join('\n\n---\n\n');
  }

  function isAIGeneratedAnswer(answer) {
    // Check if AI couldn't find relevant information
    const noMatchPhrases = [
      '根據現有資料未能找到相關資訊',
      '未能找到相關資料',
      '沒有相關資訊',
      'knowledge base 中沒有'
    ];

    return !noMatchPhrases.some(phrase => answer.includes(phrase));
  }

  async function handleQuestionWithAI(question) {
    console.log("🤖 Starting AI fallback...");

    // Store current question for context building
    window.currentQuestion = question;

    // Show AI searching message
    const loadingNode = document.createElement("div");
    loadingNode.className = "message message--bot";
    loadingNode.innerHTML = `
      <div class="message-label">CMS 助手</div>
      <div class="message-bubble">
        <div class="answer-content">${config.interface.aiSearchingMessage}</div>
        <div class="answer-source">🤖 AI 搜索中...</div>
      </div>
    `;
    elements.messages.append(loadingNode);
    scrollToLatest();

    try {
      // Build knowledge context with relevance matching
      console.log("📚 Building knowledge context from", state.entries.length, "entries");
      const knowledgeContext = buildKnowledgeContext();
      console.log("📝 Knowledge context length:", knowledgeContext.length, "characters");

      // Call Claude API
      console.log("🔧 Calling Claude API...");
      const aiAnswer = await callClaudeAPI(question, knowledgeContext);
      console.log("✅ AI response received");

      // Remove loading message
      loadingNode.remove();

      // Check if AI found relevant information
      if (isAIGeneratedAnswer(aiAnswer)) {
        // AI found relevant info - show AI answer
        state.aiStats.successCount++; // Update success stats
        updateAIStats(); // Update UI

        addBotMessage({
          content: aiAnswer,
          isSystem: false,
          context: "🤖 AI 基於知識庫生成的答案"
        });
        console.log("✅ AI provided relevant answer");
      } else {
        // AI couldn't find info - show Hazel message
        await recordUnansweredQuestion(question, "ai_no_match");
        updatePendingCount();
        addBotMessage({
          content: "Hazel 會跟進",
          isSystem: true
        });
        console.log("⚠️ AI couldn't find relevant information");
      }

    } catch (error) {
      // Remove loading message
      loadingNode.remove();

      console.error("❌ AI fallback failed:", error);

      // If AI fails, fall back to original behavior
      await recordUnansweredQuestion(question, "ai_error");
      updatePendingCount();
      addBotMessage({
        content: "Hazel 會跟進",
        isSystem: true,
        context: `🤖 AI 搜索失敗: ${error.message}`
      });
    }
  }

  async function handleQuestion(question) {
    console.log("🔍 Question received:", question);
    console.log("📚 Searching through", state.entries.length, "entries");
    console.log("🎯 Minimum score:", config.knowledge.minimumScore);

    const result = searchEngine.search(
      question,
      state.entries,
      config.knowledge.minimumScore
    );

    console.log("📋 Search result type:", result.type);
    console.log("📊 Matches found:", result.matches.length);
    if (result.matches.length > 0) {
      console.log("🏆 Top score:", result.matches[0].score);
      console.log("❓ Top question:", result.matches[0].entry.question);
    }

    // Step 1: Check if we have a model answer
    if (result.type === "answer") {
      console.log("✅ Model answer found - displaying it");
      addBotMessage({ entry: result.matches[0].entry });
      return;
    }

    // Step 2: Check for conflicts
    if (result.type === "conflict") {
      console.log("⚠️ Conflict detected - recording for Hazel");
      await recordUnansweredQuestion(question, "conflicting_answers");
      updatePendingCount();
      addBotMessage({
        content: config.interface.conflictMessage,
        context: `📋 已記錄問題並分類為「答案衝突」，優先級：${determinePriority(question, "conflicting_answers")}`
      });
      return;
    }

    // Step 3: No model answer found - try AI
    console.log("❓ No model answer found - trying AI fallback");

    // Check if AI is enabled (from settings or config)
    const aiEnabled = state.aiSettings.enabled || (config.ai && config.ai.enabled);
    const apiKey = state.aiSettings.apiKey || (config.ai && config.ai.apiKey);

    if (aiEnabled && apiKey && apiKey !== "YOUR_CLAUDE_API_KEY") {
      await handleQuestionWithAI(question);
    } else {
      // AI not configured - fall back to original behavior
      console.log("⚠️ AI not configured - using original fallback");
      await recordUnansweredQuestion(question, "no_match");
      updatePendingCount();
      addBotMessage({
        content: config.interface.noAnswerMessage,
        context: `📋 已記錄問題並分類為「無匹配」，優先級：${determinePriority(question, "no_match")}`
      });
    }
  }

  function downloadUnansweredQuestions() {
    const pendingQuestions = state.unansweredQuestions.filter(q => !q.resolution || q.resolution.status === "pending");

    // Generate summary statistics
    const byReason = {};
    const byPriority = {};
    const byStatus = {};

    pendingQuestions.forEach(q => {
      byReason[q.reason] = (byReason[q.reason] || 0) + 1;
      byPriority[q.priority] = (byPriority[q.priority] || 0) + 1;
      const status = q.resolution?.status || "pending";
      byStatus[status] = (byStatus[status] || 0) + 1;
    });

    const exportData = {
      summary: {
        exportDate: new Date().toISOString(),
        totalQuestions: state.unansweredQuestions.length,
        pendingQuestions: pendingQuestions.length,
        resolvedQuestions: state.unansweredQuestions.length - pendingQuestions.length,
        byReason,
        byPriority,
        byStatus
      },
      questions: state.unansweredQuestions.map(q => ({
        ...q,
        summary: `${q.reason} | ${q.priority} | 出現${q.context?.frequency || 1}次`
      }))
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `storellet-cms-questions-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);

    console.log("📊 Export summary:", exportData.summary);
  }

  function getPendingQuestions() {
    return state.unansweredQuestions.filter(
      (question) => !question.resolution || question.resolution.status === "pending"
    );
  }

  function prepareGitHubIssueDraft() {
    const pendingQuestions = getPendingQuestions();
    if (pendingQuestions.length === 0) {
      addBotMessage({
        content: "暫時未有待跟進問題需要提交。",
        isSystem: true
      });
      return;
    }

    const isPrivateRepository = config.followUp.repositoryVisibility === "private";
    const notYetDrafted = pendingQuestions.filter(
      (question) => question.githubSync?.status !== "draft_opened"
    );
    const previouslyDrafted = pendingQuestions.filter(
      (question) => question.githubSync?.status === "draft_opened"
    );

    state.githubIssueDraft = chatroomUtils.buildFollowUpIssueDraft(
      [...notYetDrafted, ...previouslyDrafted], {
        maxQuestions: isPrivateRepository ? 1 : config.followUp.maxQuestionsPerIssue,
        titlePrefix: config.followUp.issueTitlePrefix,
        redactSensitiveData: !isPrivateRepository
      }
    );

    elements.githubSyncWarning.textContent = state.githubIssueDraft.redactionApplied
      ? "GitHub repo 目前仍然係公開，因此今次會先遮蓋常見敏感資料。轉為 Private 並更新設定後，問題會以原文提交。"
      : "Private repo 模式：以下會提交問題原文，只供 Account Team 內部跟進。請確認 repository 仍然係 Private。";

    elements.githubSyncPreview.replaceChildren();
    state.githubIssueDraft.previewQuestions.forEach((question) => {
      const item = document.createElement("li");
      item.textContent = question || "[未有問題內容]";
      elements.githubSyncPreview.appendChild(item);
    });

    elements.githubSyncRemaining.textContent = state.githubIssueDraft.remainingCount > 0
      ? `今次會加入 ${state.githubIssueDraft.includedCount} 條；尚有 ${state.githubIssueDraft.remainingCount} 條可下一次提交。`
      : `今次會加入全部 ${state.githubIssueDraft.includedCount} 條待跟進問題。`;

    elements.githubSyncDialog.showModal();
  }

  async function openGitHubIssueDraft() {
    if (!state.githubIssueDraft) return;

    const issueUrl = chatroomUtils.buildGitHubIssueUrl({
      owner: config.github.owner,
      repository: config.github.repository,
      title: state.githubIssueDraft.title,
      body: state.githubIssueDraft.body
    });

    try {
      await chrome.tabs.create({ url: issueUrl });

      const openedAt = new Date().toISOString();
      const draftedQuestionIds = new Set(state.githubIssueDraft.questionIds);
      getPendingQuestions()
        .filter((question) => draftedQuestionIds.has(question.id))
        .forEach((question) => {
          question.githubSync = {
            status: "draft_opened",
            draftOpenedAt: openedAt
          };
        });
      await chrome.storage.local.set({
        unansweredQuestions: state.unansweredQuestions
      });

      elements.githubSyncDialog.close();
      state.githubIssueDraft = null;
      addBotMessage({
        content: "GitHub Issue 草稿已開啟。請在 GitHub 再檢查內容並按「Create new issue」；提交完成前，問題會繼續保留在本機待跟進清單。",
        isSystem: true
      });
    } catch (error) {
      console.error("❌ Failed to open GitHub issue draft:", error);
      addBotMessage({
        content: "未能開啟 GitHub Issue 草稿，請確認 Extension 有權開啟新分頁後再試。",
        isSystem: true
      });
    }
  }

  elements.questionForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const question = elements.questionInput.value.trim();
    if (!question) return;
    if (!(await ensureCloudflareSession())) return;

    addUserMessage(question);
    elements.questionInput.value = "";
    await handleQuestion(question);
    elements.questionInput.focus();
  });

  elements.questionInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      elements.questionForm.requestSubmit();
    }
  });

  elements.reloadButton.addEventListener("click", async () => {
    if (!(await ensureCloudflareSession({ force: true }))) return;
    console.log("🔄 Reload button clicked!");
    console.log("📦 Loading knowledge from ZIP URLs:", config.knowledgeUrls);
    loadKnowledge().then(() => {
      console.log("✅ Knowledge reloaded successfully");
    }).catch(error => {
      console.error("❌ Knowledge reload failed:", error);
    });
  });

  elements.clearButton.addEventListener("click", () => {
    elements.messages.replaceChildren();
    addBotMessage({
      content: config.interface.welcomeMessage,
      isSystem: true
    });
  });

  elements.exportButton.addEventListener("click", async () => {
    if (await ensureCloudflareSession()) downloadUnansweredQuestions();
  });
  elements.githubSyncButton.addEventListener("click", async () => {
    if (await ensureCloudflareSession()) prepareGitHubIssueDraft();
  });
  elements.githubSyncCancel.addEventListener("click", () => {
    elements.githubSyncDialog.close();
    state.githubIssueDraft = null;
  });
  elements.githubSyncConfirm.addEventListener("click", openGitHubIssueDraft);
  elements.authLoginButton.addEventListener("click", beginCloudflareLogin);
  elements.authRetryButton.addEventListener("click", retryCloudflareLogin);
  elements.authLogoutButton.addEventListener("click", logoutCloudflare);

  // Settings panel event listeners
  elements.settingsButton.addEventListener("click", () => {
    populateSettingsForm();
    updateAIStats();
    elements.settingsPanel.style.display = "flex";
  });

  elements.closeSettingsButton.addEventListener("click", () => {
    elements.settingsPanel.style.display = "none";
  });

  elements.temperatureInput.addEventListener("input", (e) => {
    elements.temperatureValue.textContent = e.target.value;
  });

  elements.testApiButton.addEventListener("click", testAPIConnection);

  elements.saveSettingsButton.addEventListener("click", saveSettings);

  // Model mode toggle handlers
  elements.modelModeRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      if (e.target.value === "custom") {
        elements.presetModelGroup.style.display = "none";
        elements.customModelGroup.style.display = "block";
      } else {
        elements.presetModelGroup.style.display = "block";
        elements.customModelGroup.style.display = "none";
      }
    });
  });

  function updatePendingCount() {
    const pendingCount = state.unansweredQuestions.filter(q => !q.resolution || q.resolution.status === "pending").length;
    elements.pendingCount.textContent = pendingCount;
    elements.githubSyncButton.disabled = pendingCount === 0;

    // Update tracking count visibility
    const trackingInfo = document.querySelector('.tracking-info');
    if (trackingInfo) {
      if (pendingCount > 0) {
        trackingInfo.style.display = 'flex';
      } else {
        trackingInfo.style.display = 'none';
      }
    }
  }

  async function initializeAuthenticatedApp() {
    if (state.appInitialized) return;
    state.appInitialized = true;

    addBotMessage({
      content: config.interface.welcomeMessage,
      isSystem: true
    });

    // Load AI settings from storage
    await loadAISettings();

    // 暫時禁用對話記憶功能進行緊急修復
    // await loadConversationHistory();

    await loadUnansweredQuestions();
    await loadKnowledge();
    updatePendingCount();
    elements.questionInput.focus();

    // 暫時禁用對話記憶功能進行緊急修復
    // 顯示當前對話主題的智能建議（如果有）
    // if (state.conversationHistory.currentContext) {
    //   setTimeout(() => {
    //     displayFollowUpSuggestions();
    //   }, 1000);
    // }

    // Expose state for debugging
    window.cmsChatState = state;
    console.log("🔧 Chatbot Debug Mode - State exposed to window.cmsChatState");
    console.log("📊 Knowledge entries loaded:", state.entries.length);
    console.log("🌐 Source mode:", state.sourceMode);
    console.log("📋 Pending questions:", state.unansweredQuestions.length);
    console.log("🤖 AI Settings:", state.aiSettings);
  }

  async function start() {
    elements.botName.textContent = config.interface.botName;

    if (!authClient) {
      elements.authGate.hidden = true;
      await initializeAuthenticatedApp();
      return;
    }

    const session = await checkCloudflareSession({ showChecking: true });
    if (session.authenticated) {
      await unlockChatroom(session);
      return;
    }

    const message = session.reason === "network_error"
      ? "未能連接 Cloudflare Access，請檢查網絡後再試。"
      : "請使用公司帳戶登入 Cloudflare Access。";
    setAuthGate(message, session.reason === "network_error" ? "error" : "login_required");
  }

  start();
})();
