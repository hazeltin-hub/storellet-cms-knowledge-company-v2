---
schema_version: 2
id: "COMPANY-V2-GROUP-IDENTITY-REGISTRATION"
title: "Company Group：身份、註冊頁與圖片設定"
category: "Company"
module: "Company Groups"
screen: "Create Company Group"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Company Group 名稱、註冊頁同圖片欄位點設定？"
alternatives:
  - "Company Groups 入面 Create Company Group 點用？"
  - "Company Group：身份、註冊頁與圖片設定 有咩欄位？"
  - "Group Name (English) 用途係咩？"
  - "Group Name (English) 點設定？"
  - "Group Name (Local Language) 用途係咩？"
  - "Group Name (Local Language) 點設定？"
  - "Company 用途係咩？"
  - "Company 點設定？"
  - "Grade 用途係咩？"
  - "Grade 點設定？"
  - "Registration Image (English) 用途係咩？"
  - "Registration Image (English) 點設定？"
  - "Registration Image (Local Language) 用途係咩？"
  - "Registration Image (Local Language) 點設定？"
  - "Group Logo 用途係咩？"
  - "Group Logo 點設定？"
  - "Register Header Text (English) 用途係咩？"
  - "Register Header Text (English) 點設定？"
  - "Register Header Text (Local Language) 用途係咩？"
  - "Register Header Text (Local Language) 點設定？"
  - "Registration Text (English) 用途係咩？"
  - "Registration Text (English) 點設定？"
  - "Registration Text (Local Language) 用途係咩？"
  - "Registration Text (Local Language) 點設定？"
  - "Thumbnails 用途係咩？"
  - "Thumbnails 點設定？"
keywords:
  - "Company"
  - "Company Groups"
  - "Create Company Group"
  - "Group Name (English)"
  - "Group Name (Local Language)"
  - "Grade"
  - "Registration Image (English)"
  - "Registration Image (Local Language)"
  - "Group Logo"
  - "Register Header Text (English)"
  - "Register Header Text (Local Language)"
  - "Registration Text (English)"
  - "Registration Text (Local Language)"
  - "Thumbnails"
source_title: "Company Confirmed Fields workbook"
source_path: "knowledge/references/company-confirmed-fields.xlsx"
source_anchor: "Company Confirmed Fields sheet; rows 9-15, 18-21, 43"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### 直接答案

呢組欄位決定 Company Group 歸屬、名稱、級別，以及註冊頁同 Branded App 使用嘅文字及圖片。

**出現位置：** CMS → Company → Company Groups → Create Company Group；部分內容會顯示喺註冊頁或 Branded App。

### 已確認欄位

| Field | 必填程度 | 建議填寫／Default | 用途／影響 | 操作注意事項 | 來源頁 |
|---|---|---|---|---|---|
| **Group Name (English)** | 必填 | 英文 group name | App / CMS 顯示 group name | 建議同 brand / merchant 命名一致 | P.8 |
| **Group Name (Local Language)** | 必填 | 中文 group name | App / CMS 中文顯示 | 客戶前台會見到 | P.8 |
| **Company** | 必填 | 選擇所屬公司 | 將 group 歸屬到公司 | 必須揀正確 company | P.8 |
| **Grade** | 必填 | Standard | Group 等級 / 類型 | 如無特別要求用 default | P.8 |
| **Registration Image (English)** | 選填 | 背景圖 | 註冊 / group 背景圖 | PPT 標示為 BG Image | P.8 |
| **Registration Image (Local Language)** | 選填 | 中文版背景圖 | 中文前台背景圖 | 如中英文同圖可重用 | P.8 |
| **Group Logo** | 建議必填 | Merchant / Group logo | App 內顯示 logo | 建議清晰 logo | P.8 |
| **Register Header Text (English)** | 選填 | 留空 | 註冊頁 header text | PPT 指示 Keep Blank | P.8 |
| **Register Header Text (Local Language)** | 選填 | 留空 | 中文註冊頁 header text | PPT 指示 Keep Blank | P.8 |
| **Registration Text (English)** | 選填 | 留空 | 註冊頁說明文字 | PPT 指示 Keep Blank | P.8 |
| **Registration Text (Local Language)** | 選填 | 留空 | 中文註冊頁說明文字 | PPT 指示 Keep Blank | P.8 |
| **Thumbnails** | 選填 | 圖片 | 前台縮圖 | 視乎前台設計 | P.11 |

### 操作前注意

- 先選正確 Company，再填 Group 名稱及 Grade。
- Branded App 使用時，Group Logo 需要按來源要求提供。
- 如果實際 CMS 畫面同呢份已確認資料不一致，停止推斷並交由內容負責人覆核。

## Internal Notes

- 來源：Company Confirmed Fields workbook，Company Confirmed Fields sheet rows 9-15, 18-21, 43。
- 舊 Company 單欄位答案已由呢份主題式答案取代。
