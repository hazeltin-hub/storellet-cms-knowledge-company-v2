---
schema_version: 2
id: "GUIDE-APPLICATION-PMS-RECORDS"
title: "PMS Records"
category: "Application"
module: "PMS Records"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "PMS Records 係做咩，有咩欄位同注意事項？"
alternatives:
  - "PMS Records 點用？"
  - "點樣設定 PMS Records？"
  - "PMS Records 有咩用途同注意事項？"
  - "What is PMS Records used for?"
keywords:
  - "PMS Records"
  - "Application"
  - "PMS"
  - "Records"
  - "CMS"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### PMS Records

**這是什麼：** 維護每間分店對應到外部 PMS（付款管理／飯店管理）系統的合作夥伴代碼、商家代碼、門市代碼、範本代碼與標籤。
**出現位置：** 僅後台與 PMS 夥伴系統之間；顧客看不到。
**欄位／設定：**
- **Brand** — 篩選／指定品牌（list 頁可用 All 看全部）。
- **Shop** — 選擇分店；選好後系統會帶入該分店既有的 PMS 設定。
- **Shop Name / Partner ID / Merchant ID / Secondary Merchant ID / Store ID / Template ID / PMS Label** — 對應到 PMS 夥伴系統中的各種識別碼；預設唯讀，勾選旁邊的 Edit 才能改。
- **Last Update Date / Last Update By** — 系統紀錄。
- **Save / Cancel / Delete** — 按 Save 前會跳確認；Delete 同樣會跳確認。
**注意：** Partner ID、Merchant ID、Store ID 一旦寫錯，會直接影響付款或訂單對帳，改動前務必與 PMS 夥伴確認。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
