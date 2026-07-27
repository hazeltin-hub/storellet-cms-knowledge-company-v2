---
schema_version: 2
id: "GUIDE-ASSETS-COUPON-EXTERNAL-CODE-GROUP"
title: "Coupon External Code Group"
category: "Assets"
module: "Coupon External Code Group"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Coupon External Code Group 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Coupon External Code Group 點用？"
  - "點樣設定 Coupon External Code Group？"
  - "Coupon External Code Group 有咩用途同注意事項？"
  - "What is Coupon External Code Group used for?"
keywords:
  - "Coupon External Code Group"
  - "Assets"
  - "Coupon"
  - "External"
  - "Code"
  - "Group"
  - "優惠券"
  - "券"
  - "CMS"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "Coupon External Code Group"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Coupon External Code Group

**這是什麼：** 一組外部兌換碼（第三方平台用的序號池），可綁定到優惠券，讓顧客在第三方通路兌換。
**出現位置：** 顧客 App（券詳情顯示序號或 QR）；外部平台憑碼兌換。
**欄位／設定：**
- **Name** — 組合名稱。
- **Allow Code Duplication / Allow Url Duplication** — 是否允許多張券共用同一碼／同一連結。
- **Copy Enabled / Copy Text（中英文）** — 是否顯示「複製碼」按鈕及其文字。
- **Url Enabled / Copy Text（中英文）** — 是否顯示外連按鈕及其文字。
- **Qrcode Enabled** — 是否顯示 QR Code。
- **Email List** — 要匯出的收件者清單。
**注意：** 建好群組後，到個別優惠券的 Leaflet 進階選項裡「Enable Coupon External Code」並選擇此群組，才算綁定。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
