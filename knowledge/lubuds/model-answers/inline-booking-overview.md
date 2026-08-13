---
schema_version: 2
id: "LUBUDS-INLINE-BOOKING-OVERVIEW"
title: "LUBUDS Inline Booking 支援概覽"
category: "LUBUDS Operations"
module: "Inline Integration"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "LUBUDS Inline Booking 有咩常見支援問題？"
alternatives:
  - "LUBUDS Inline booking"
  - "Inline booking 有咩功能？"
  - "LUBUDS 訂座整合有咩要留意？"
  - "What does the LUBUDS Inline booking integration cover?"
keywords:
  - "LUBUDS Inline booking"
  - "Inline"
  - "booking"
  - "reservation"
  - "No-show"
  - "deposit"
  - "payment"
  - "webhook"
source_title: "Private Inline and LUBUDS project conversations"
source_path: "private source — not committed"
source_anchor: "2026-06 to 2026-08"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

LUBUDS 嘅 Inline Booking 支援主要分為以下兩個方向：

### 1. 訂座狀態同步及 No-show

- 可以用 reservation ID 主動查詢目前訂座狀態，亦可以透過 webhook 接收狀態更新。
- 為避免遺漏 webhook event，可按正式架構加入定時 reconciliation，再向 API 核對最新狀態。
- Inline 嘅 No-show 會以 `cancelled` state 表示，並由 `cancelReason` 判斷為 `no-show`；唔可以只睇 state。

如果你想了解狀態 mapping、webhook 或 No-show，請再搜尋：

`LUBUDS Inline booking No-show 點判斷？`

### 2. 訂座按金及付款安排

- 標準 Patron Web online booking 如已啟用按金或信用卡授權，顧客要即時完成付款或授權先可以完成訂座。
- 「先完成網上訂座、之後再付款」唔係標準 online booking flow。
- 商戶透過 Host App 建立電話訂座並加上 deposit，或者收到訂座後再手動 attach deposit，先可能產生稍後付款安排；實際支援範圍要跟最新產品規格確認。

如果你想了解按金、付款連結或 outstanding payment，請再搜尋：

`Inline booking 可唔可以之後先畀按金？`

### 排查前要先確認

1. 問題屬於狀態同步、No-show、按金，定付款連結。
2. 訂座由 Patron Web、Host App，定其他渠道建立。
3. 使用緊 UAT 定 Production。
4. 涉及邊個 reservation state、webhook event 或付款階段。

### 注意事項

- 呢條係概覽及分流答案；實際狀態 mapping、付款流程及專案 scope 應以兩條詳細答案同最新規格為準。
- API key、webhook secret、付款連結、完整 payload 及真實訂座資料不可放入公開 repository。

## Internal Notes

- 呢條答案只整理兩個已確認 Inline 主題，目的係處理較廣泛嘅 `LUBUDS Inline booking` 搜尋，避免兩條詳細答案同分而觸發 conflict。
