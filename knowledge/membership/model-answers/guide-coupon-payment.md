---
schema_version: 2
id: "GUIDE-MEMBERSHIP-COUPON-PAYMENT"
title: "Coupon Payment"
category: "Membership"
module: "Coupon Payment"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Coupon Payment 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Coupon Payment 點用？"
  - "點樣設定 Coupon Payment？"
  - "Coupon Payment 有咩用途同注意事項？"
  - "What is Coupon Payment used for?"
keywords:
  - "Coupon Payment"
  - "Membership"
  - "Coupon"
  - "Payment"
  - "優惠券"
  - "券"
  - "CMS"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Coupon Payment

**這是什麼：** 查詢會員購買付費優惠券的交易紀錄（線上付款買券的訂單），核對付款狀態、退款編號與失敗原因。
**出現位置：** 純後台內部頁面；付款發生在顧客 App 結帳時，這裡是後台查詢與對帳介面。
**欄位／設定：**
- **Ref Id** — 訂單參考編號。
- **Brand** — 篩選品牌（只列出有啟用付費優惠券的品牌）。
- **Member No** — 篩選某會員編號。
- **Create Date** — 訂單建立日期區間。

表格欄位：
- **Ref Id** — 訂單參考編號。
- **Brand / Coupon** — 品牌與購買的優惠券名稱。
- **Member No** — 購買會員編號。
- **Create Date** — 訂單時間。
- **Status** — Fail（失敗）/ Success（成功）/ Processing（處理中）/ Void（作廢）。
- **Remark** — 若有退款會顯示 Refund Id；若付款失敗會顯示 Payment Fail 並附 Error Code 與 Reason。

**注意：** Status 為 Processing 不代表最終成功，需等系統更新為 Success 或 Fail。Fail 的訂單可在 Remark 欄看到失敗原因代碼，方便回報金流服務商。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
