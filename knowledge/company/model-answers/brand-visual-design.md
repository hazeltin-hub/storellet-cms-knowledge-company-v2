---
schema_version: 2
id: "COMPANY-V2-BRAND-VISUAL-DESIGN"
title: "Brand：Logo、背景、顏色與 Highlighted Image"
category: "Company"
module: "Brands"
screen: "Create Brand"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Brand 圖片尺寸、背景同 UI 顏色點設定？"
alternatives:
  - "Brands 入面 Create Brand 點用？"
  - "Brand：Logo、背景、顏色與 Highlighted Image 有咩欄位？"
  - "Brand Logo 用途係咩？"
  - "Brand Logo 點設定？"
  - "Background Image on Dashboard 用途係咩？"
  - "Background Image on Dashboard 點設定？"
  - "Background Colour 1 用途係咩？"
  - "Background Colour 1 點設定？"
  - "Text Colour 1 用途係咩？"
  - "Text Colour 1 點設定？"
  - "Background Colour 2 用途係咩？"
  - "Background Colour 2 點設定？"
  - "Text Colour 2 用途係咩？"
  - "Text Colour 2 點設定？"
  - "Background Colour 3 用途係咩？"
  - "Background Colour 3 點設定？"
  - "Text Colour 3 用途係咩？"
  - "Text Colour 3 點設定？"
  - "Highlighted Image 用途係咩？"
  - "Highlighted Image 點設定？"
  - "Highlighted Image Description 用途係咩？"
  - "Highlighted Image Description 點設定？"
keywords:
  - "Company"
  - "Brands"
  - "Create Brand"
  - "Brand Logo"
  - "Background Image on Dashboard"
  - "Background Colour 1"
  - "Text Colour 1"
  - "Background Colour 2"
  - "Text Colour 2"
  - "Background Colour 3"
  - "Text Colour 3"
  - "Highlighted Image"
  - "Highlighted Image Description"
source_title: "Company Confirmed Fields workbook"
source_path: "knowledge/references/company-confirmed-fields.xlsx"
source_anchor: "Company Confirmed Fields sheet; rows 58-59, 74-79, 90-91"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### 直接答案

呢組欄位控制 Brand Logo、品牌頁背景、三組介面及文字顏色，以及 Highlighted Image 同描述。

**出現位置：** CMS → Company → Brands → Create Brand；內容會顯示喺 App／Web 品牌頁及相關介紹位置。

### 已確認欄位

| Field | 必填程度 | 建議填寫／Default | 用途／影響 | 操作注意事項 | 來源頁 |
|---|---|---|---|---|---|
| **Brand Logo** | 必填 | 1:1 logo，建議 1MB | App 前台顯示 logo | PPT 指出會顯示於 mobile app | P.13 |
| **Background Image on Dashboard** | 建議必填 | 品牌背景圖，建議 1MB | App 品牌頁 header 背景 | 前台會以 soft bottom edge 顯示 | P.14 |
| **Background Colour 1** | 視乎設計 | Brand color | App UI 色系 | 影響前台不同區域背景 | P.16 |
| **Text Colour 1** | 視乎設計 | Brand color | App UI 文字色 | 需留意對比度 | P.16 |
| **Background Colour 2** | 視乎設計 | Brand color | App UI 色系 | 影響 button / label | P.16 |
| **Text Colour 2** | 視乎設計 | Brand color | App UI 文字色 | 需留意 readability | P.16 |
| **Background Colour 3** | 視乎設計 | Brand color | App UI 色系 | 影響內容區背景 | P.16 |
| **Text Colour 3** | 視乎設計 | Brand color | App UI 文字色 | 需留意 readability | P.16 |
| **Highlighted Image** | 選填 | 圖片，建議 1MB | 商店介紹圖片 | App 前台「商店推介 / 介紹」顯示 | P.19 |
| **Highlighted Image Description** | 選填 | 圖片描述 | 對應 highlighted image | 中英文可分開 | P.19 |

### 操作前注意

- Brand Logo 來源建議 400 × 400、1:1，Logo 同文字保留約 20% padding，建議不超過 1MB。
- Background Image on Dashboard 來源建議 800 × 533、1.5:1，建議不超過 1MB。
- 三組背景色同文字色要一併測試可讀性。
- 如果實際 CMS 畫面同呢份已確認資料不一致，停止推斷並交由內容負責人覆核。

## Internal Notes

- 來源：Company Confirmed Fields workbook，Company Confirmed Fields sheet rows 58-59, 74-79, 90-91。
- 舊 Company 單欄位答案已由呢份主題式答案取代。
