---
schema_version: 2
id: "GUIDE-ASSETS-COUPON-PACKAGE"
title: "Coupon Package"
category: "Assets"
module: "Coupon Package"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Coupon Package 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Coupon Package 點用？"
  - "點樣設定 Coupon Package？"
  - "Coupon Package 有咩用途同注意事項？"
  - "What is Coupon Package used for?"
keywords:
  - "Coupon Package"
  - "Assets"
  - "Coupon"
  - "Package"
  - "優惠券"
  - "券"
  - "CMS"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "Coupon Package"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Coupon Package

**這是什麼：** 優惠券組合包，一次派發內含多張券／會員卡的套裝。
**出現位置：** 顧客 App、收銀機（依 Delivery Type）。
**欄位／設定：**
- **Brand** — 所屬品牌。選後會列出可勾選的券／會員卡清單。
- **Coupon Or Discount Card List** — 勾選包內含的項目，並指定各自的數量。
- **Delivery Type** — 派發方式（同 Coupon 的選項）。
- **Name / Description / Terms and Conditions / How To Use（中英文）** — 文案。
- **Image / Image 2 / Image 3（中英文）** — 圖片。
- **Effective Period / Expiry** — 依 Delivery Type 帶出：有效天數或固定到期日。
- **Redemption Point / Quantity / Entitlement / Coupon Replacement** — 依 Delivery Type 顯示對應欄位。
- **White Label Only / Storellet Only / Not Transferable / Status** — 同上。
**注意：** 選擇 Push 等不同 Delivery Type 時，數量、限領、兌換點數欄位會動態切換。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
