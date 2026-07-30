---
schema_version: 2
id: "GUIDE-APPLICATION-REGION-CODE-CONFIG"
title: "Region Code Config"
category: "Application"
module: "Region Code Config"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "low"
locale: "zh-HK"
question: "Region Code Config 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Region Code Config 點用？"
  - "點樣設定 Region Code Config？"
  - "Region Code Config 有咩用途同注意事項？"
  - "What is Region Code Config used for?"
keywords:
  - "Region Code Config"
  - "Application"
  - "Region"
  - "Code"
  - "Config"
  - "CMS"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Region Code Config

**這是什麼：** 維護地區電話區號的參考資料，包含電話區號、ISO 國碼、手機號碼長度、中英文名稱。
**出現位置：** 顧客 App 註冊與登入時的「國家區號選擇」，以及 Configure 頁 Available Region Codes 的選項來源。
**欄位／設定：**
- **Region Code** — 電話區號（例如 852）。新建時可填，建立後不可改。
- **Country Code** — ISO 國碼（例如 HK）。唯讀，由系統帶入。
- **Number Of Digit** — 此區號標準的手機號碼位數。唯讀，由系統帶入。
- **Name Zh / Name En** — 此區號在後台與切換清單上的繁中／英文名稱，可編輯。
**注意：** Region Code 與 Country Code 是配對的參考資料，不要任意新建非正規區號，否則會誤導顧客選錯國碼導致收不到驗證碼。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
