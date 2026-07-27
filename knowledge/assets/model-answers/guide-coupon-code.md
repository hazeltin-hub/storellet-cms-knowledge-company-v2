---
schema_version: 2
id: "GUIDE-ASSETS-COUPON-CODE"
title: "Coupon Code"
category: "Assets"
module: "Coupon Code"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Coupon Code 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Coupon Code 點用？"
  - "點樣設定 Coupon Code？"
  - "Coupon Code 有咩用途同注意事項？"
  - "What is Coupon Code used for?"
keywords:
  - "Coupon Code"
  - "Assets"
  - "Coupon"
  - "Code"
  - "優惠券"
  - "券"
  - "CMS"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "Coupon Code"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Coupon Code

**這是什麼：** 優惠兌換碼產生器，批次產出一組序號綁到某張券，可發給非會員或特定名單兌換。
**出現位置：** 顧客 App（會員或非會員輸入碼兌換）；序號可匯出後經任何管道發送。
**欄位／設定：**
- **Brand** — 所屬品牌。
- **Coupon** — 要綁定的優惠券。
- **Name** — 這批序號的名稱。
- **Expiry Date** — 序號有效期限（必填，會自動帶入券的有效期上限）。
- **Quantity** — 要產生幾組（建立後不可改）。
- **Type** — Individual（每碼一人用）、Shared（共用碼）、System（系統配發）。
- **Generate Option** — 字元組合：Both（數字＋字母）、A-Za-z（純字母）、0-9（純數字）。
- **Prefix Option** — 序號前綴：None、By Brand Code、Custom（自訂，最多 5 碼）。
- **Length** — 序號總長度（8–50）。
- **Life Time Limit / Week Limit / Day Limit** — 每碼的終身、每週、每日兌換次數上限。
- **Auto Expand / Expand Message** — 序號用罄是否自動加發，及提示訊息。
- **Force Join / Force Dispatch / In-App Force Join / In-App Force Dispatch** — 是否強制加入會員、強制派發等行為。
- **Is Redeem With Virtual User** — 勾選後展開 Virtual User List 與 Redeem Expiry Time，用於把碼綁定到虛擬會員作限時兌換。
**注意：** 系統會即時檢查「長度＋字元組合」可產生的不重複序號數是否足夠，不足會提示加長。Shared 類型的共用碼需填 Unique Key 並檢查是否重複。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
