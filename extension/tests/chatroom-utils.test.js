"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const {
  buildFollowUpIssueDraft,
  buildGitHubIssueUrl,
  buildModelAnswerPreview,
  redactSensitiveText
} = require("../src/chatroom-utils.js");

test("redacts common personal and secret data before GitHub submission", () => {
  const input = "客戶 test@example.com 電話 91234567，link https://example.com/private，token sk-ant-1234567890abcdef";
  const output = redactSensitiveText(input);

  assert.doesNotMatch(output, /test@example\.com/);
  assert.doesNotMatch(output, /91234567/);
  assert.doesNotMatch(output, /https:\/\//);
  assert.doesNotMatch(output, /sk-ant-/);
  assert.match(output, /已隱藏/);
});

test("builds a bounded public issue draft from pending questions only", () => {
  const draft = buildFollowUpIssueDraft([
    {
      id: "Q-1",
      question: "點解會員 91234567 未收到優惠券？",
      reason: "無匹配",
      priority: "high",
      context: { frequency: 2 },
      resolution: { status: "pending" }
    },
    {
      id: "Q-2",
      question: "已處理問題",
      resolution: { status: "resolved" }
    }
  ], { maxQuestions: 10, issueDate: "2026-08-13" });

  assert.equal(draft.includedCount, 1);
  assert.equal(draft.remainingCount, 0);
  assert.doesNotMatch(draft.body, /91234567/);
  assert.doesNotMatch(draft.body, /已處理問題/);
  assert.match(draft.body, /提交前檢查/);
  assert.equal(draft.redactionApplied, true);
});

test("keeps the original question in private repository mode", () => {
  const originalQuestion = "會員 test@example.com 電話 91234567 未收到優惠券";
  const draft = buildFollowUpIssueDraft([
    {
      id: "Q-PRIVATE-1",
      question: originalQuestion,
      reason: "無匹配",
      priority: "high",
      resolution: { status: "pending" }
    }
  ], {
    maxQuestions: 1,
    issueDate: "2026-08-13",
    redactSensitiveData: false
  });

  assert.equal(draft.redactionApplied, false);
  assert.match(draft.body, /test@example\.com/);
  assert.match(draft.body, /91234567/);
  assert.match(draft.body, /repository 仍為 Private/);
});

test("creates a GitHub new issue URL with a prefilled title and body", () => {
  const url = new URL(buildGitHubIssueUrl({
    owner: "hazeltin-hub",
    repository: "storellet-cms-knowledge-company-v2",
    title: "待跟進",
    body: "問題內容"
  }));

  assert.equal(url.hostname, "github.com");
  assert.equal(url.pathname, "/hazeltin-hub/storellet-cms-knowledge-company-v2/issues/new");
  assert.equal(url.searchParams.get("title"), "待跟進");
  assert.equal(url.searchParams.get("body"), "問題內容");
});

test("keeps the first model answer section as a short preview", () => {
  const result = buildModelAnswerPreview(`### 概覽
呢個功能用嚟處理會員遷移。
- 先匯出會員
- 再檢查欄位
- 最後匯入

### 詳細步驟
1. 打開 CMS
2. 選擇品牌
3. 上載檔案`);

  assert.match(result.preview, /概覽/);
  assert.doesNotMatch(result.preview, /詳細步驟/);
  assert.equal(result.isTruncated, true);
});
