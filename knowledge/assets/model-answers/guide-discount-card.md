---
schema_version: 2
id: "GUIDE-ASSETS-DISCOUNT-CARD"
title: "Discount Card"
category: "Assets"
module: "Discount Card"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Discount Card 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Discount Card 點用？"
  - "點樣設定 Discount Card？"
  - "Discount Card 有咩用途同注意事項？"
  - "What is Discount Card used for?"
keywords:
  - "Discount Card"
  - "Assets"
  - "Discount"
  - "Card"
  - "折扣卡"
  - "會員卡"
  - "會員等級"
  - "CMS"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "Discount Card"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Discount Card

**這是什麼：** 會員折扣卡（會員等級），持有者享特定折扣率與專屬優惠券。
**出現位置：** 顧客 App（會員卡區）、收銀機（結帳時套用折扣）。
**欄位／設定：**
- **Brand** — 所屬品牌。
- **Discount Card Type** — Normal（一般會員等級）或 Paid Tier（付費訂閱等級）。兩者可選的等級數字範圍不同。
- **Discount Level** — 等級編號。
- **Name（Primary / Secondary Language）** — 卡片名稱（中英文，必填）。
- **Image / Image 2 / Image 3 / Image Renew** — 多張卡片圖，各可分中英文版本；Renew 為續會時顯示的縮圖。
- **Discount Rate** — 折扣率（百分比）。
- **Redemption Period** — 卡片有效期間。
- **Redemption Point** — 開通此卡所需的積分。
- **Terms and Conditions / How To Use** — 條款與使用說明（支援 HTML，分中英文）。
- **Set As Welcome Pack / Welcome Pack Period** — 是否作為迎新禮自動派發，及其適用期間。
- **Upgrade From / Point For Upgrade** — 從哪張卡升等過來，以及升等所需積分（僅 Normal 類型顯示）。
- **Renew Type** — 續會方式：None（不續）、Auto（自動）、Acc Transaction Amount（累積消費滿額自動續）、File（上傳會員電話名單續）。不同選擇會帶出不同欄位（續會門檻、保留會籍金額、電話清單檔）。
- **Expiry Date Pattern** — 到期規則，例如 Align With Point Expiry、Next Expiry Period、One Year、Never End、Custom、Exact Date。
- **Coupon List / Renew Size** — 勾選此卡隨附的優惠券，並可分別設定「開通時」與「續會時」發放的數量。
- **Point Multiply Ratio / Stamp Multiply Ratio** — 持卡人賺取積分／印花的倍數。
- **Shared With Brands** — 主品牌專屬，可把此卡共享給集團內其他品牌。
- **Hidden** — 在 App 隱藏此卡（僅後台存在）。
- **Colour Code / Highlighted Colour Code** — 卡片在 App 的主色與高亮色。
- **Privileges** — 自訂會員特權列表，每項含英文標題、中文標題、圖示。
- **Shopline Member Tier ID** — 對接 Shopline 會員等級的識別碼。
- **White Label Only / Storellet Only / Not Transferable / Status** — 同上。
**注意：** Paid Tier 類型不適用升等與自動續會檔案功能；切換類型時相關欄位會自動隱藏。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
