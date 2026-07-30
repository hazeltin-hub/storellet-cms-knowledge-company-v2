---
schema_version: 2
id: "GUIDE-ASSETS-OPERATION-ACCESS-CODE"
title: "Operation Access Code"
category: "Assets"
module: "Operation Access Code"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Operation Access Code 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Operation Access Code 點用？"
  - "點樣設定 Operation Access Code？"
  - "Operation Access Code 有咩用途同注意事項？"
  - "What is Operation Access Code used for?"
keywords:
  - "Operation Access Code"
  - "Assets"
  - "Operation"
  - "Access"
  - "Code"
  - "CMS"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Operation Access Code

**這是什麼：** 營運存取碼，給店舖人員或特定群組用的兌換／操作碼，可綁定優惠券並設使用限制。
**出現位置：** 收銀機／店舖人員端；顧客通常看不到。
**欄位／設定：**
- **Brand** — 所屬品牌。
- **Coupon** — 綁定的優惠券。
- **Expiry Date** — 碼的有效期限。
- **Type** — Individual（個別）、Public（公開共用）、Closed Group（封閉群組）。
- **Closed Group Type** — 封閉群組的識別方式：User ID 或 Phone。
- **Import File** — 匯入群組成員清單。
- **Quantity** — 產生數量。
- **Life Time Limit / Week Limit / Day Limit** — 每碼的兌換次數上限。
- **With Deep Link** — 是否產生深層連結直接打開 App 對應頁面。
**注意：**
- Closed Type 才需指定成員清單；Public 則任何持有者皆可使用。

**天書重要技巧：**
- **生成步驟：** Gen code → 要 tick **"Create Deep Link"** → 再睇佢要幾多數量
- **Code 類型說明：**
  - **Public：** 淨係 gen 一條 link（適合大眾推廣）
  - **Individual：** unique link（每人一條，適合個人化推廣）
- **使用方法：** Set 左之後將條 link gen 成 QR code 就可以比佢
- **重要建議：** **你自己試拎左一次先**，確保正常運作
- **With Deep Link：** 建議勾選，可以產生深層連結直接打開 App 對應頁面

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
