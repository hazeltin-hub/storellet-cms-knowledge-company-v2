# Storellet CMS Chatroom v1.1

Chrome Extension Side Panel，第一版使用 GitHub Markdown 關鍵字搜尋及已確認 Model Answer，暫時不接駁 AI。

## 第一版範圍

- 供 Storellet 內部 Account Servicing、Product 及 Tech Team 使用。
- 獨立 Chrome Side Panel，不讀取 CMS 網頁內容，亦不會自動填寫 CMS 欄位。
- 優先顯示最相關 Model Answer、確認狀態及資料來源。
- 無答案或答案衝突時，顯示固定跟進訊息。
- 未回答問題只儲存在使用者 Chrome 本機，可下載 JSON 清單。
- 不會將問題或資料自動 Push 到 GitHub。

## Repo 結構

```text
storellet-cms-chatroom/
├── manifest.json
├── service-worker.js
├── config.js
├── sidepanel.html
├── sidepanel.css
├── sidepanel.js
├── search-engine.js
├── knowledge/
│   ├── index.json
│   ├── README.md
│   ├── _templates/
│   │   └── model-answer-template.md
│   └── system/
│       └── chatroom-scope.md
└── tests/
    └── search-engine.test.js
```

## 1. 建立新 GitHub Repo

建議 repo 名稱：`storellet-cms-chatroom`

將此 folder 內所有檔案 Push 到新 repo 根目錄。第一版直接從 `raw.githubusercontent.com` 讀取 Markdown，因此 repo 需要設為 **Public**。

> Private repo 不應將 Personal Access Token 寫入 Extension。若知識內容不能公開，應在下一階段加入受權限保護嘅後端或 GitHub App proxy。

## 2. 連接 GitHub Knowledge Base

打開 `config.js`，修改：

```js
github: {
  owner: "你的 GitHub Username 或 Organization",
  repository: "storellet-cms-chatroom",
  branch: "main",
  indexPath: "knowledge/index.json"
}
```

完成 Push 後，Side Panel 右上角狀態應顯示：

```text
GitHub 知識庫 · 1 條答案
```

如果 GitHub 設定未完成或讀取失敗，Extension 會載入 package 內嘅本地測試答案。

## 3. 安裝 Chrome Extension

1. 在 Chrome 開啟 `chrome://extensions`。
2. 開啟右上角 **Developer mode**。
3. 選擇 **Load unpacked**。
4. 選擇 `storellet-cms-chatroom` folder。
5. 將 Extension pin 到工具列。
6. 點擊 Extension icon 開啟 Side Panel。

測試問題：

```text
呢個 Chatroom 可以做咩？
```

## 4. 已加入 Company Model Answers

第一批 Company Knowledge Base 已按 2026-07-24 最新版
`company_confirmed_fields.csv` 建立，包括：

- All Companies
- Company Groups
- Brands
- Shops
- Featured Items

`knowledge/company/company-field-reference.md` 保存完整 181 條有效欄位，
Chatroom 則由 `knowledge/company/model-answers/` 載入 29 條 Model Answers。

已知資料衝突：

- Shops > Create Shop > Create Date 同時被列為「必填」及「系統產生」。
- 相關問題會觸發 conflict fallback，並加入本機待跟進清單。

## 5. 加入其他 CMS Model Answers

詳細格式見 `knowledge/README.md`。

每新增一個 Markdown：

1. 使用 `knowledge/_templates/model-answer-template.md`。
2. 將檔案路徑加入 `knowledge/index.json`。
3. Push 到 GitHub。
4. 在 Side Panel 點擊「↻」重新載入。

## 6. 待跟進問題

配對唔到或有衝突嘅問題會儲存在 `chrome.storage.local`，不會離開使用者裝置。點擊「下載待跟進問題」會輸出 JSON。

清除對話只會清除畫面訊息，不會刪除待跟進記錄。

## 7. 本機檢查

需要 Node.js 18 或以上：

```bash
npm run check
npm test
```

## 搜尋邏輯

搜尋會按以下資料評分：

- 標準問題 `question`
- 相似問法 `alternatives`
- 中英文關鍵字 `keywords`
- Module、Category 及 Model Answer 文字
- 香港中文以雙字詞切分，英文不分大小寫

最低配對分數可在 `config.js` 嘅 `minimumScore` 調整。數值越高，錯配機會越低，但較容易出現「未有相關資料」。

## 安全限制

- Extension 不包含 AI API Key、GitHub Token 或其他 secret。
- Model Answer Markdown 會在顯示前轉義 HTML。
- 只允許開啟 `https` 資料來源連結。
- 第一版不讀取 CMS 頁面或登入資料。
