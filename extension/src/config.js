window.CMS_CHAT_CONFIG = {
  // Primary source selection: "github" or "r2"
  source: {
    type: "github" // Current testing mode - switch to "r2" for production
  },

  // GitHub configuration (primary for testing)
  github: {
    owner: "hazeltin-hub",
    repository: "storellet-cms-knowledge-company-v2",
    branch: "main",
    indexPath: "knowledge/index.json"
  },

  // R2/ZIP backup configuration (for production)
  knowledgeUrls: [
    "https://storellet-knowledge.storellet.com/storellet-knowledge.zip",
    "https://storellet-knowledge.storellet.com/knowledge.zip"
  ],
  cloudflareAccess: {
    enabled: true,
    loginUrl: "https://storellet-knowledge.storellet.com/cdn-cgi/access/get-identity",
    identityUrl: "https://storellet-knowledge.storellet.com/cdn-cgi/access/get-identity",
    logoutUrl: "https://storellet-knowledge.storellet.com/cdn-cgi/access/logout",
    pollIntervalMs: 1500,
    pollTimeoutMs: 120000,
    sessionCheckMaxAgeMs: 300000
  },
  knowledge: {
    minimumScore: 18
  },
  followUp: {
    maxQuestionsPerIssue: 5,
    issueTitlePrefix: "Chatroom 待跟進",
    // Keep "public" until the GitHub repository has actually been changed to private.
    // Private mode submits one original question per issue for Account Team follow-up.
    repositoryVisibility: "public"
  },
  ai: {
    enabled: false, // Default disabled, enabled via settings panel
    provider: "claude",
    apiKey: "", // Will be loaded from storage
    apiEndpoint: "https://api.anthropic.com", // Custom endpoint support
    model: "claude-3-5-sonnet-20241022",
    customModel: "", // For custom model names
    modelMode: "preset", // "preset" or "custom"
    maxTokens: 600,
    temperature: 0.7
  },
  interface: {
    botName: "Storellet CMS 助手",
    welcomeMessage: "你好！你可以輸入 Storellet CMS 相關問題，我會搜尋已確認嘅 Model Answer。⚙️ 點擊右上角設定按鈕配置 AI 功能。",
    noAnswerMessage: "暫時未有相關資料，Hazel 會稍後親自跟進。",
    conflictMessage: "暫時未能確認正確設定，Hazel 會稍後親自跟進。",
    aiSearchingMessage: "🤖 AI 正在搜索知識庫...",
    modelAnswerPreviewCharacters: 460
  },
  tracking: {
    enabled: true,
    categorizeReasons: true,
    autoPriority: true,
    collectContext: true,
    trackResolution: true
  }
};
