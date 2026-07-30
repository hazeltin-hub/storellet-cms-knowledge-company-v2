---
schema_version: 2
id: "GUIDE-ASSETS-FOOD-MENU"
title: "Food Menu"
category: "Assets"
module: "Food Menu"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Food Menu 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Food Menu 點用？"
  - "點樣設定 Food Menu？"
  - "Food Menu 有咩用途同注意事項？"
  - "What is Food Menu used for?"
keywords:
  - "Food Menu"
  - "Assets"
  - "Food"
  - "Menu"
  - "CMS"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Food Menu

**這是什麼：** 電子餐牌管理，可上傳 PDF 或逐項建立餐點，產出品牌／分店專屬的掃碼點餐連結。
**出現位置：** 顧客 App（掃 QR 或點連結瀏覽餐牌）。
**欄位／設定：**
- **Brand** — 所屬品牌。
- **Name（En / Zh / Cn）** — 餐牌名稱（英、繁中、簡中）。
- **PDF Url / Upload PDF** — 直接填入 PDF 連結或上傳 PDF。
- **Current PDF** — 已上傳的 PDF 預覽連結。
- **Food Menu Item** — 逐項建立餐點（含名稱、價格、圖片、分類、選項）。
- **Priority** — 多份餐牌間的排序。
- 清單檢視顯示品牌、各語言名稱、PDF 連結、狀態、優先序。
**注意：** 餐牌內亦可設定多語系、分類與品項選項（例如規格、加料）；完成後可發佈到正式環境供顧客瀏覽。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
