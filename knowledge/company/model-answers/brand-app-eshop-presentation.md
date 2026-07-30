---
schema_version: 2
id: "COMPANY-V2-BRAND-APP-ESHOP-PRESENTATION"
title: "Brand：App、eShop、Carousel 與 Branded App 圖片"
category: "Company"
module: "Brands"
screen: "Create Brand / Branded App"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Brand 嘅 App、eShop、Carousel 同 Thumbnails 點設定？"
alternatives:
  - "Brands 入面 Create Brand / Branded App 點用？"
  - "Brand：App、eShop、Carousel 與 Branded App 圖片 有咩欄位？"
  - "Eshop Banner 用途係咩？"
  - "Eshop Banner 點設定？"
  - "Eshop Product ID 用途係咩？"
  - "Eshop Product ID 點設定？"
  - "Carousel 用途係咩？"
  - "Carousel 點設定？"
  - "Is Show Bottom Bar 用途係咩？"
  - "Is Show Bottom Bar 點設定？"
  - "Thumbnails 用途係咩？"
  - "Thumbnails 點設定？"
keywords:
  - "Company"
  - "Brands"
  - "Create Brand / Branded App"
  - "Eshop Banner"
  - "Eshop Product ID"
  - "Carousel"
  - "Is Show Bottom Bar"
  - "Thumbnails"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### 直接答案

呢組欄位控制 eShop banner／產品識別、品牌頁 Carousel、App bottom bar，以及 Branded App 使用嘅 Thumbnails。

**出現位置：** CMS → Company → Brands → Create Brand／Branded App；內容會影響 App、eShop 或 Branded App 顯示。

### 已確認欄位

| Field | 必填程度 | 建議填寫／Default | 用途／影響 | 操作注意事項 | 來源頁 |
|---|---|---|---|---|---|
| **Eshop Banner** | 視乎 eShop | 建議 3.2:1 | eShop banner | 有 eShop 先填 | P.19 |
| **Eshop Product ID** | 視乎 eShop | Stripe / Product ID | 對應 eShop product | 有 eShop 先填 | P.19 |
| **Carousel** | 選填 | YouTube / Image、Sort、URL | 品牌頁 carousel | 可放影片或圖片 | P.21 |
| **Is Show Bottom Bar** | 視乎 App | Tick | App 是否顯示 bottom bar | Branded App / app setting 先需要 | P.22 |
| **Thumbnails** | 視乎 Branded App | 圖片 | Branded App 縮圖 | Branded App 先需要 | P.22 |

### 操作前注意

- Eshop Banner 來源建議使用約 3.2:1 圖片比例。
- Eshop Product ID 必須使用正確外部產品識別碼。
- Carousel 可包含 YouTube 或圖片資料，上線前要檢查排序及 URL。
- 如果實際 CMS 畫面同呢份已確認資料不一致，停止推斷並交由內容負責人覆核。

## Internal Notes

- 來源：Company Confirmed Fields workbook，Company Confirmed Fields sheet rows 92-93, 102, 104, 106。
- 舊 Company 單欄位答案已由呢份主題式答案取代。
