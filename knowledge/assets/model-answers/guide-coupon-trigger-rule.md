---
schema_version: 2
id: "GUIDE-ASSETS-COUPON-TRIGGER-RULE"
title: "Coupon Trigger Rule"
category: "Assets"
module: "Coupon Trigger Rule"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Coupon Trigger Rule 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Coupon Trigger Rule 點用？"
  - "點樣設定 Coupon Trigger Rule？"
  - "Coupon Trigger Rule 有咩用途同注意事項？"
  - "What is Coupon Trigger Rule used for?"
keywords:
  - "Coupon Trigger Rule"
  - "Assets"
  - "Coupon"
  - "Trigger"
  - "Rule"
  - "優惠券"
  - "券"
  - "CMS"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "Coupon Trigger Rule"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Coupon Trigger Rule

**這是什麼：** 自動化規則：當顧客消費、生日、或符合條件時自動派發優惠券。
**出現位置：** 僅後台自動化設定；觸發後券會落入顧客 App。
**欄位／設定：**
- **Brand / Name / Status** — 基本資訊。
- **Coupon Trigger Rule Type** — 規則類型。
- **Trigger Coupon / Coupon Or Discount Card List** — 要派發的券與數量。
- **Effective Period / Effective Week Day / Effective Time** — 生效期間、星期、時段。
- **Available Shops** — 適用分店。
- **Min Amount / Max Amount / Step Up Amount** — 消費金額門檻與累進。
- **Transaction Count** — 交易次數條件。
- **POS Item Code** — 指定品項。
- **Lapse Period** — 顧客多久沒消費才觸發（回流喚醒）。
- **Dispatch Day / Dispatch Once A Day** — 派發日期與每日限發一次。
- **Max Quantity** — 每人可領上限。
- **Exclude Discount Card** — 排除特定會員等級。
- **Point Bonus Ratio / Point Bonus Cap** — 加碼回贈積分的比例與上限。
- **Push Notification / Push User Message（中英文）** — 自訂推播與收件匣訊息。
- **Required Discount Card Level** — 限定哪些會員等級才適用。
**注意：**
- 條件之間為 AND 邏輯
- Lapse Period 適合做「久未光顧」召回
- **Monthly Trigger Rule：** 必須 untick "Submit To 3rd Party Event Tracking"
- **Monthly Trigger Rule 排查功能：** 可以排查客人 account 裡面有無張 coupon，有就唔再派發
- **新店注意：** Trigger Rules - 1個月 birthday point bonus，有新店要 check trigger rule 裡面加新店
- **有分 Tier 系統：** Birthday Coupon/Monthly Coupon 唔可以 tick "Dispatch on Join"，否則所有新會員都會收到（除非所有 tier member 都係收到相同的 offer）

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
