---
schema_version: 2
id: "LUBUDS-INLINE-BOOKING-STATUS"
title: "LUBUDS Inline 訂座狀態同步及 No-show mapping"
category: "LUBUDS Operations"
module: "Inline Integration"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "LUBUDS App 點樣取得 Inline 訂座狀態，No-show 又點判斷？"
alternatives:
  - "Inline reservation status API"
  - "No-show 點樣 mapping？"
  - "訂座狀態用 API 定 webhook？"
  - "How does LUBUDS sync Inline booking status?"
keywords:
  - "LUBUDS"
  - "Inline"
  - "reservation"
  - "booking status"
  - "webhook"
  - "no-show"
  - "cancelReason"
source_title: "Private Inline and LUBUDS project conversations"
source_path: "private source — not committed"
source_anchor: "2026-06 to 2026-08"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### 狀態可以主動查詢，亦可以用 webhook 接收更新

- 單一訂座可透過 Inline reservation endpoint，以 reservation ID 查詢目前 state。
- 即時更新可訂閱 reservation-created、reservation-seated、reservation-cancelled 等 webhook event。
- 為避免漏 event，可按正式架構加定時 reconciliation／cron job，再向 API 核對最新狀態。

### No-show mapping

Inline 無獨立 `no-show` state；No-show 會以 `cancelled` state 表示，並由 `cancelReason` 判斷為 `no-show`。因此前端或 Braze attribute 唔可以只睇 state，必須一併處理 cancel reason。

### LUBUDS App 顯示建議

- 待出席：已建立、等待到場嘅訂座。
- 完成：已入座／完成嘅訂座；實際定義要跟目前產品規格。
- 失效：已取消或 No-show；No-show 由 cancel reason 分辨。
- App 內 action button 及「Book Again」邏輯應跟最終 UI 規格。

### 測試清單

1. 建立訂座。
2. 取消訂座。
3. 標記 Seated。
4. 標記 No-show，確認 state 與 cancelReason mapping。
5. 模擬 webhook 延遲／遺漏，再驗證 reconciliation。
6. 確認 App、Storellet backend、Braze attribute 三邊結果一致。

### 注意事項

- API key、webhook secret、完整 webhook payload 及真實訂座資料不可寫入知識庫。
- 狀態名稱、同步頻率及前端分組曾在專案中調整；實作前要跟最新規格確認。

## Internal Notes

- `no-show = cancelled + cancelReason` 係 Inline 團隊於對話中明確確認嘅 mapping。
