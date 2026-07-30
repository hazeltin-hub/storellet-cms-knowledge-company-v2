---
schema_version: 2
id: "GUIDE-ASSETS-TRIGGER-FLOW"
title: "Trigger Flow"
category: "Assets"
module: "Trigger Flow"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "low"
locale: "zh-HK"
question: "Trigger Flow 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Trigger Flow 點用？"
  - "點樣設定 Trigger Flow？"
  - "Trigger Flow 有咩用途同注意事項？"
  - "What is Trigger Flow used for?"
keywords:
  - "Trigger Flow"
  - "Assets"
  - "Trigger"
  - "Flow"
  - "CMS"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Trigger Flow

**這是什麼：** 一個視覺化檢查工具，把單一交易套用所有印花規則的過程畫成流程圖，顯示每個條件「通過／未通過」。
**出現位置：** 僅後台，診斷用途，不直接影響顧客。
**欄位／設定：**
- **Shop / Amount ($) / Date / Time** — 模擬一筆交易的分店、金額、日期、時間。
- **POS Items** — 模擬交易包含的品項。
- **Coupon ID** — 模擬使用的優惠券。
- **User Birthday** — 模擬顧客生日條件。
**注意：** 純檢視頁，填入模擬條件後系統會繪出哪條規則被觸發、哪條被跳過，用來排查「為什麼顧客沒收到印花」。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
