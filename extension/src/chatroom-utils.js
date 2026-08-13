(function initializeChatroomUtils(root, factory) {
  "use strict";

  const api = factory();

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.ChatroomUtils = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function createChatroomUtils() {
  "use strict";

  function shortenLine(line, maxLength) {
    const value = String(line || "").trim();
    if (value.length <= maxLength) return value;

    const listPrefix = value.match(/^(?:[-*]|\d+\.)\s+/)?.[0] || "";
    const plainContent = value
      .slice(listPrefix.length)
      .replace(/\*\*/g, "")
      .replace(/`/g, "");

    return `${listPrefix}${plainContent.slice(0, Math.max(1, maxLength - listPrefix.length - 1)).trimEnd()}…`;
  }

  function buildModelAnswerPreview(markdown, options = {}) {
    const maxCharacters = Number(options.maxCharacters) || 460;
    const maxContentLines = Number(options.maxContentLines) || 4;
    const fullAnswer = String(markdown || "").replace(/\r\n/g, "\n").trim();
    const lines = fullAnswer.split("\n");
    const previewLines = [];
    let contentLines = 0;
    let previewLength = 0;
    let started = false;

    const firstSectionIndex = lines.findIndex((line) => /^###\s+/.test(line.trim()));
    const startIndex = firstSectionIndex >= 0 ? firstSectionIndex : 0;

    for (let index = startIndex; index < lines.length; index += 1) {
      const trimmed = lines[index].trim();
      if (!trimmed || /^##\s+Model Answer$/i.test(trimmed)) continue;

      const isSectionHeading = /^###\s+/.test(trimmed);
      if (isSectionHeading && started && contentLines > 0) break;
      if (/^##\s+/.test(trimmed) && !isSectionHeading && started) break;

      const remaining = Math.max(80, maxCharacters - previewLength);
      const previewLine = shortenLine(trimmed, Math.min(180, remaining));
      if (!previewLine) continue;

      previewLines.push(previewLine);
      previewLength += previewLine.length;
      started = true;

      if (!isSectionHeading) {
        contentLines += 1;
      }

      if (contentLines >= maxContentLines || previewLength >= maxCharacters) break;
    }

    const preview = previewLines.join("\n").trim() || shortenLine(fullAnswer, maxCharacters);
    const compactFull = fullAnswer.replace(/\s+/g, " ").trim();
    const compactPreview = preview.replace(/\s+/g, " ").trim();

    return {
      preview,
      isTruncated: compactFull !== compactPreview
    };
  }

  function redactSensitiveText(value, maxLength = 300) {
    const redacted = String(value || "")
      .replace(/\b(?:sk-ant|sk|gh[pousr]|token|api)[-_][A-Za-z0-9_-]{10,}\b/gi, "[已隱藏敏感資料]")
      .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, "[已隱藏電郵]")
      .replace(/https?:\/\/[^\s<>()]+/gi, "[已隱藏連結]")
      .replace(/(?:\+?\d[\s().-]*){8,15}/g, "[已隱藏電話／編號]")
      .replace(/\b(?=[A-Za-z0-9_-]{18,}\b)(?=[A-Za-z0-9_-]*\d)[A-Za-z0-9_-]+\b/g, "[已隱藏長編號]")
      .replace(/[ \t]{2,}/g, " ")
      .trim();

    if (redacted.length <= maxLength) return redacted;
    return `${redacted.slice(0, Math.max(1, maxLength - 1)).trimEnd()}…`;
  }

  function priorityLabel(priority) {
    return {
      high: "高",
      medium: "中",
      low: "低"
    }[priority] || "中";
  }

  function buildFollowUpIssueDraft(questions, options = {}) {
    const maxQuestions = Math.max(1, Number(options.maxQuestions) || 10);
    const pendingQuestions = (Array.isArray(questions) ? questions : []).filter(
      (question) => !question.resolution || question.resolution.status === "pending"
    );
    const selectedQuestions = pendingQuestions.slice(0, maxQuestions);
    const issueDate = String(options.issueDate || new Date().toISOString().slice(0, 10));
    const titlePrefix = String(options.titlePrefix || "Chatroom 待跟進");
    const lines = [
      "## Chatroom 待跟進問題",
      "",
      "> 由 Storellet CMS Chatroom 產生。內容已自動遮蓋常見敏感資料；提交前仍須由 Account Team 再次檢查。",
      ""
    ];

    selectedQuestions.forEach((question, index) => {
      const safeQuestion = redactSensitiveText(question.question, 180);
      const safeReason = redactSensitiveText(question.reason, 160);
      const frequency = question.context?.frequency || question.frequency || 1;

      lines.push(`### ${index + 1}. ${safeQuestion || "[未有問題內容]"}`);
      lines.push(`- 本機編號：${redactSensitiveText(question.id || `Q-${index + 1}`, 80)}`);
      lines.push(`- 分類：${safeReason || "未分類"}`);
      lines.push(`- 優先級：${priorityLabel(question.priority)}`);
      lines.push(`- 出現次數：${frequency}`);
      lines.push("");
    });

    const remainingCount = Math.max(0, pendingQuestions.length - selectedQuestions.length);
    if (remainingCount > 0) {
      lines.push(`> 尚有 ${remainingCount} 條待跟進問題未加入今次草稿，可再次提交下一批。`);
      lines.push("");
    }

    lines.push("## 提交前檢查");
    lines.push("");
    lines.push("- [ ] 已確認內容不含客戶姓名、電話、電郵、會員編號、付款或其他敏感資料");
    lines.push("- [ ] 已補充負責人及需要的 Model Answer 範圍");

    return {
      title: `${titlePrefix}：${issueDate}（${selectedQuestions.length} 條）`,
      body: lines.join("\n"),
      includedCount: selectedQuestions.length,
      remainingCount,
      questionIds: selectedQuestions.map((question) => question.id),
      previewQuestions: selectedQuestions.map((question) => redactSensitiveText(question.question, 180))
    };
  }

  function buildGitHubIssueUrl({ owner, repository, title, body }) {
    const safeOwner = encodeURIComponent(String(owner || "").trim());
    const safeRepository = encodeURIComponent(String(repository || "").trim());
    const params = new URLSearchParams({
      title: String(title || ""),
      body: String(body || "")
    });

    return `https://github.com/${safeOwner}/${safeRepository}/issues/new?${params.toString()}`;
  }

  return {
    buildFollowUpIssueDraft,
    buildGitHubIssueUrl,
    buildModelAnswerPreview,
    redactSensitiveText
  };
});
