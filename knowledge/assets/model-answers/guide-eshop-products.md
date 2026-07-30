---
schema_version: 2
id: "GUIDE-ASSETS-ESHOP-PRODUCTS"
title: "Eshop Products"
category: "Assets"
module: "Eshop Products"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Eshop Products 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Eshop Products 點用？"
  - "點樣設定 Eshop Products？"
  - "Eshop Products 有咩用途同注意事項？"
  - "What is Eshop Products used for?"
keywords:
  - "Eshop Products"
  - "Assets"
  - "Eshop"
  - "Products"
  - "CMS"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Eshop Products

**這是什麼：** 網店商品管理，設定可在網店販售的實體或電子商品，含交付方式與對接平台的商品識別碼。
**出現位置：** 網店。
**欄位／設定：**
- **Brand** — 所屬品牌。
- **Delivery Type** — Direct（直接交付）或 Coupon Code（憑兌換碼交付）。
- **Product Type** — Default（一般商品）、Wallet（電子錢包）、Sub Item（子品項）。
- **Coupon / Coupon Code Group** — 依 Delivery Type 顯示：要綁定的券或兌換碼組。
- **Name（中英文）** — 商品名稱。
- **Image（中英文）** — 商品圖。
- **Point Ratio** — 購買時的積分回贈比例。
- **Exclude From Accu Sales** — 是否排除在累計消費額外。
- **Purchase Quantity Min / Max** — 每次購買數量上下限。
- **Product Reference ID / STL Reference ID** — 對接 Stripe／Shopline 等外部平台的商品編號（附 tooltip 說明用途）。
- **Type / Status** — 商品類型與上下架狀態。
**注意：** Product Type 為 Wallet 時，商品本身會化作電子錢包充值方案；Sub Item 則作為其他商品的下拉加購項。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
