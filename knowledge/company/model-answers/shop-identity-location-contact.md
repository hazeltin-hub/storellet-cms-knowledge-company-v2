---
schema_version: 2
id: "COMPANY-V2-SHOP-IDENTITY-LOCATION-CONTACT"
title: "Shop：名稱、Reference ID、位置、地址與聯絡資料"
category: "Company"
module: "Shops"
screen: "Create Shop"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Shop 名稱、Reference ID、地區、地址同營業時間點設定？"
alternatives:
  - "Shops 入面 Create Shop 點用？"
  - "Shop：名稱、Reference ID、位置、地址與聯絡資料 有咩欄位？"
  - "Shop Name (English) 用途係咩？"
  - "Shop Name (English) 點設定？"
  - "Shop Name (Local Language) 用途係咩？"
  - "Shop Name (Local Language) 點設定？"
  - "Reference ID 用途係咩？"
  - "Reference ID 點設定？"
  - "Brand 用途係咩？"
  - "Brand 點設定？"
  - "Region (English) 用途係咩？"
  - "Region (English) 點設定？"
  - "Region (Local Language) 用途係咩？"
  - "Region (Local Language) 點設定？"
  - "District (English) 用途係咩？"
  - "District (English) 點設定？"
  - "District (Local Language) 用途係咩？"
  - "District (Local Language) 點設定？"
  - "Geo Location 用途係咩？"
  - "Geo Location 點設定？"
  - "Address (English) 用途係咩？"
  - "Address (English) 點設定？"
  - "Address (Local Language) 用途係咩？"
  - "Address (Local Language) 點設定？"
  - "Telephone 用途係咩？"
  - "Telephone 點設定？"
  - "Fax 用途係咩？"
  - "Fax 點設定？"
  - "Opening Hours (English) 用途係咩？"
  - "Opening Hours (English) 點設定？"
  - "Opening Hours (Local Language) 用途係咩？"
  - "Opening Hours (Local Language) 點設定？"
keywords:
  - "Company"
  - "Shops"
  - "Create Shop"
  - "Shop Name (English)"
  - "Shop Name (Local Language)"
  - "Reference ID"
  - "Brand"
  - "Region (English)"
  - "Region (Local Language)"
  - "District (English)"
  - "District (Local Language)"
  - "Geo Location"
  - "Address (English)"
  - "Address (Local Language)"
  - "Telephone"
  - "Fax"
  - "Opening Hours (English)"
  - "Opening Hours (Local Language)"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### 直接答案

呢組欄位建立 Shop 身份及所屬 Brand，並提供地區、地圖座標、地址、電話、Fax 同中英文營業時間。

**出現位置：** CMS → Company → Shops → Create Shop；資料會喺 App／Web 分店列表、地圖及分店詳情顯示。

### 已確認欄位

| Field | 必填程度 | 建議填寫／Default | 用途／影響 | 操作注意事項 | 來源頁 |
|---|---|---|---|---|---|
| **Shop Name (English)** | 必填 | 英文分店名 | App 分店列表顯示 | 前台可見 | P.25 |
| **Shop Name (Local Language)** | 必填 | 中文分店名 | App 中文分店列表顯示 | 前台可見 | P.25 |
| **Reference ID** | 必填 | 與 merchant confirm / 由 001 開始 | 分店識別 ID | PPT 建議如無特別要求由 001 開始 | P.25 |
| **Brand** | 必填 | 所屬 brand | 將分店歸屬到品牌 | 同 brand 下分店會於 View all shop list 顯示 | P.25 |
| **Region (English)** | 必填 | Hong Kong Island / Kowloon / New Territories | 分店區域 tab | 前台分區顯示 | P.25 |
| **Region (Local Language)** | 必填 | 香港島 / 九龍 / 新界 | 中文分區 tab | 前台分區顯示 | P.25 |
| **District (English)** | 必填 | 例如 Kwun Tong | 分店地區 | 前台分店顯示 | P.25 |
| **District (Local Language)** | 必填 | 例如 觀塘 | 中文地區 | 前台分店顯示 | P.25 |
| **Geo Location** | 建議必填 | Longitude - Latitude | Google Map 顯示位置 | PPT 指定格式為經度 - 緯度 | P.26 |
| **Address (English)** | 必填 | 英文地址 | 分店資料顯示 | 前台可見 | P.26 |
| **Address (Local Language)** | 必填 | 中文地址 | 中文分店資料顯示 | 前台可見 | P.26 |
| **Telephone** | 建議必填 | 分店電話 | 分店資料顯示 | 前台可見 | P.26 |
| **Fax** | 選填 | Fax no. | 分店資料 | 多數可留空 | P.26 |
| **Opening Hours (English)** | 建議必填 | 例如 10:00 - 22:00 | 分店營業時間 | 前台可見 | P.26 |
| **Opening Hours (Local Language)** | 建議必填 | 例如 10:00 - 22:00（星期一至日） | 中文營業時間 | 前台可見 | P.26 |

### 操作前注意

- Reference ID 要同商戶／POS 確認，來源建議由 001 開始。
- Geo Location 使用 Longitude - Latitude；上線前要檢查 Map Pin。
- 中英文 Region、District、Address 同 Opening Hours 要成對核對。
- **Tag 設置注意：**
  - **新 Brand 設置必填項目：** Brand: Cuisine Tag + Shop: Region Tag + District Tag
  - **Format 和大小楷要跟 Superbase：** `filter_cuisine`、`filter_location`
  - 適當的 Tag 設置對前台搜尋和分類功能很重要
- 如果實際 CMS 畫面同呢份已確認資料不一致，停止推斷並交由內容負責人覆核。

## Internal Notes

- 來源：Company Confirmed Fields workbook，Company Confirmed Fields sheet rows 107-121。
- 舊 Company 單欄位答案已由呢份主題式答案取代。
