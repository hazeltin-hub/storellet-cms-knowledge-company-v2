---
schema_version: 2
id: "COMPANY-V2-BRAND-IDENTITY-DISCOVERY"
title: "Brand：身份、歸屬、排序與搜尋分類"
category: "Company"
module: "Brands"
screen: "Create Brand"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Brand 名稱、分類、標籤同排序點設定？"
alternatives:
  - "Brands 入面 Create Brand 點用？"
  - "Brand：身份、歸屬、排序與搜尋分類 有咩欄位？"
  - "Brand Name (English) 用途係咩？"
  - "Brand Name (English) 點設定？"
  - "Brand Name (Local Language) 用途係咩？"
  - "Brand Name (Local Language) 點設定？"
  - "Brand Code 用途係咩？"
  - "Brand Code 點設定？"
  - "Display Sequence 用途係咩？"
  - "Display Sequence 點設定？"
  - "Group 用途係咩？"
  - "Group 點設定？"
  - "Tab 用途係咩？"
  - "Tab 點設定？"
  - "Restaurant Category 用途係咩？"
  - "Restaurant Category 點設定？"
  - "Tag 用途係咩？"
  - "Tag 點設定？"
  - "Geo Tag 用途係咩？"
  - "Geo Tag 點設定？"
  - "Categories 用途係咩？"
  - "Categories 點設定？"
keywords:
  - "Company"
  - "Brands"
  - "Create Brand"
  - "Brand Name (English)"
  - "Brand Name (Local Language)"
  - "Brand Code"
  - "Display Sequence"
  - "Group"
  - "Tab"
  - "Restaurant Category"
  - "Tag"
  - "Geo Tag"
  - "Categories"
source_title: "Company Confirmed Fields workbook"
source_path: "knowledge/references/company-confirmed-fields.xlsx"
source_anchor: "Company Confirmed Fields sheet; rows 49-57, 105"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### 直接答案

呢組欄位建立 Brand 身份、所屬 Company Group、顯示排序，以及 App／Web 搜尋同分類所需資料。

**出現位置：** CMS → Company → Brands → Create Brand；名稱、分類及標籤會影響 App／Web 顯示及搜尋。

### 已確認欄位

| Field | 必填程度 | 建議填寫／Default | 用途／影響 | 操作注意事項 | 來源頁 |
|---|---|---|---|---|---|
| **Brand Name (English)** | 必填 | 英文品牌名 | App / Web 顯示 | 前台可見 | P.13 |
| **Brand Name (Local Language)** | 必填 | 中文品牌名 | App / Web 中文顯示 | 前台可見 | P.13 |
| **Brand Code** | 必填 | 商戶名英文首字母 | 品牌代碼 | PPT 建議用 merchant name first alphabet | P.13 |
| **Display Sequence** | 必填 | 數字 | 控制排序 | 數值需按內部排序規則 | P.13 |
| **Group** | 必填 | 所屬 group | 品牌歸屬 | 必須選正確 group | P.13 |
| **Tab** | 必填 | Popular / Premium | 控制品牌分類 tab | PPT：0 = popular，1 = premium | P.12-P.13 |
| **Restaurant Category** | 必填 | 餐廳類別 | 搜尋 / 分類用 | 例如 Cafe | P.13 |
| **Tag** | 建議必填 | 品牌相關 keyword | 搜尋時會命中 brand | 建議加入品牌名、菜式、地區等 | P.13 |
| **Geo Tag** | 選填 | 地理 tag | 地區搜尋 / 分類 | 視乎前台是否用 | P.13 |
| **Categories** | 選填 | Category tags | 分類顯示 | 中英文可分開 | P.22 |

### 操作前注意

- Brand Code、Group、Tab、分類及標籤應喺上線前由商戶確認。
- Display Sequence 會影響前台排序。
- 如果實際 CMS 畫面同呢份已確認資料不一致，停止推斷並交由內容負責人覆核。

## Internal Notes

- 來源：Company Confirmed Fields workbook，Company Confirmed Fields sheet rows 49-57, 105。
- 舊 Company 單欄位答案已由呢份主題式答案取代。
