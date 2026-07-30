---
schema_version: 2
id: "GUIDE-MEMBERSHIP-INVOICE"
title: "Invoice"
category: "Membership"
module: "Invoice"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Invoice 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Invoice 點用？"
  - "點樣設定 Invoice？"
  - "Invoice 有咩用途同注意事項？"
  - "What is Invoice used for?"
keywords:
  - "Invoice"
  - "Membership"
  - "發票"
  - "交易紀錄"
  - "CMS"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Invoice

**這是什麼：** 依發票編號、品牌、分店或交易日期搜尋交易紀錄，檢視金額、付款方式、使用優惠券、關聯會員等詳情；可把漏掉會員歸屬的交易手動掛到某會員帳下。
**出現位置：** 純後台內部頁面；交易本身發生在收銀機／網店結帳，這裡是後台查詢與補救介面。
**欄位／設定：**
- **Invoice No** — 想查找的發票編號。
- **Brand** — 篩選品牌（或 Show All 全部）。
- **Shop** — 篩選分店。
- **Transaction Date** — 交易日期區間（起 - 迄）。

表格欄位：
- **Invoice No** — 發票編號（後方括號顯示關聯參考編號）。
- **Brand / Shop** — 交易品牌與分店。
- **Purchase Time** — 實際交易時間。
- **Info** — 展開資訊：Status（Normal 正常 / Reversed 已沖退）、Invoice Amount（發票金額）、Net Amount（實收金額）、Order Type（訂單類型）、Payment Method（付款方式）、Items（項目）、Discount（折扣）、Coupons（使用優惠券）、Member No（會員編號）、Used Promo Code（使用的促銷碼）。
- **Redeem** — 兌換時間。

**Add Transaction To Member**（在 Member No 欄位為空且該交易未沖退時出現）：
- 在會員編號輸入框填入要歸屬的會員編號，按 Add。系統會彈出小視窗顯示該會員目前點數、今日／本週獲點次數等，供操作人員核對後再按 Confirm 完成歸屬。可填寫 **Remark** 說明（最多 250 字）。

**注意：** Add Transaction To Member 會回溯變更會員點數與紀錄，請先核對小視窗中的點數與次數預覽無誤再確認。已 Reversed（沖退）的交易不能再掛會員。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
