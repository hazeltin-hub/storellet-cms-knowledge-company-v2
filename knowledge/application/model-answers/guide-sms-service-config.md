---
schema_version: 2
id: "GUIDE-APPLICATION-SMS-SERVICE-CONFIG"
title: "SMS Service Config"
category: "Application"
module: "SMS Service Config"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "SMS Service Config 係做咩，有咩欄位同注意事項？"
alternatives:
  - "SMS Service Config 點用？"
  - "點樣設定 SMS Service Config？"
  - "SMS Service Config 有咩用途同注意事項？"
  - "What is SMS Service Config used for?"
keywords:
  - "SMS Service Config"
  - "Application"
  - "SMS"
  - "Service"
  - "Config"
  - "簡訊"
  - "CMS"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "SMS Service Config"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### SMS Service Config

**這是什麼：** 決定哪一家簡訊供應商負責哪一類簡訊、配送到哪些 App、支援哪些行動電話國碼（MCC），並以優先順序決定備援。
**出現位置：** 顧客 App 註冊／登入／忘記密碼等流程收到的驗證碼簡訊；顧客看到的不是設定本身，而是「有沒有收到、從哪一家業者收到」。
**欄位／設定：**
- **Name** — 這組設定在後台的名稱。
- **Provider Name** — 實際發送的簡訊業者，從系統已接入的清單中挑選。
- **Type** — 這組設定負責的簡訊類型（可多選），例如註冊、忘記密碼、刪除帳號、一般驗證、OTP 登入等。
- **App Ids** — 套用到哪些 App（可多選）。
- **Support MCC** — 支援的行動電話國碼清單（可多選）；不在清單中的國碼不會走這家供應商。
- **Only First Time** — 勾選後，這條規則只在顧客首次收到該類簡訊時生效。
- **Order** — 優先順序，數字愈大優先級愈高；同一條件下會依此排序選擇供應商。
- **Status** — 勾選代表啟用。
- **Last Update** — 系統紀錄。
**注意：** 改動前先確認新供應商已在系統中接入且帳號有效；若把某個 Type 的所有規則都停用，該類簡訊將完全發不出去，直接卡住顧客註冊。

---

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
