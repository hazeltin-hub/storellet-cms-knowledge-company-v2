# Knowledge Base 維護說明

第一版 Chatroom 會先讀取 `knowledge/index.json`，再逐一載入當中已啟用嘅 Markdown Model Answer。

## 現有 Company Knowledge Base

- `company/company-field-reference.md`：最新版 Company Guide 完整欄位 reference。
- `company/model-answers/`：All Companies、Company Groups、Brands、Shops
  及 Featured Items 嘅 Chatroom 答案。
- 最後確認日期：2026-07-24。
- Company 層級：`Company → Company Group → Brand → Shop`。

Field Reference 不會直接載入 Chatroom，避免一條過長答案同其他問題錯配。

## 新增答案

1. 複製 `_templates/model-answer-template.md`。
2. 將檔案放入合適嘅 module folder。
3. 填寫 front matter 同 `## Model Answer`。
4. 將新檔案路徑加入 `knowledge/index.json`。
5. Push 到 GitHub `main` branch。
6. 在 Chrome Side Panel 點擊右上角「↻」。

## 狀態

- `confirmed`：Chatroom 顯示「已確認」。
- `draft`：可以被搜尋，但會顯示 draft 標籤。
- `disabled`：搜尋時略過。

## 編寫規則

- 一個 Markdown 檔案只處理一個標準問題。
- 每條答案要有中英文關鍵字及常見相似問法。
- `question`、`source_title`、`last_reviewed` 必須填寫。
- 只可加入已確認 CMS 資料。
- 唔可以將密碼、API Key、Token、會員個人資料或客戶敏感資料放入 repo。
- 公開 repo 只適合儲存可公開畀內部使用者讀取嘅操作知識。
- 如果同一來源有互相矛盾定義，不可自行揀其中一個；應建立兩條同問題、
  不同答案嘅 confirmed Model Answer，令 Chatroom 觸發 conflict fallback。
