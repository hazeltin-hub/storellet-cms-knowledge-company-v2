---
schema_version: 2
id: "GUIDE-PUSH-USER-FAVOUR-BATCH-OPERATION"
title: "User Favour Batch Operation"
category: "Push"
module: "User Favour Batch Operation"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "User Favour Batch Operation 係做咩，有咩欄位同注意事項？"
alternatives:
  - "User Favour Batch Operation 點用？"
  - "點樣設定 User Favour Batch Operation？"
  - "User Favour Batch Operation 有咩用途同注意事項？"
  - "What is User Favour Batch Operation used for?"
  - "Push 入面 User Favour Batch Operation 係做咩？"
  - "Push tab 嘅喜好批量操作"
  - "用戶喜好批量操作 點樣做？"
  - "點樣批量處理會員喜好？"
  - "會員喜好批量處理 喺 Push 嘅功能"
  - "喜好批量操作 Push 入面"
keywords:
  - "User Favour Batch Operation"
  - "Push"
  - "User"
  - "Favour"
  - "Batch"
  - "Operation"
  - "CMS"
  - "喜好"
  - "批量操作"
  - "會員喜好"
  - "批量處理"
  - "用戶喜好"
  - "Push tab"
  - "推播服務"
  - "會員操作"
  - "喜好處理"
  - "用戶偏好"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### User Favour Batch Operation

**這是什麼：** 針對已派發到會員手中的優惠券，進行大量一次性操作：補派、改效期、強制到期或標記為已使用。主要用於修正資料或活動補救。
**出現位置：** 顧客 App 的優惠券（顧客只會看到結果——券的數量／效期改變）。純後台批次作業。
**欄位／設定：**
- **Name** — 這次批次操作的名稱，方便日後辨識。
- **Brand** — 所屬品牌。先選品牌、上載名單後按 Initialize，系統才會載入下面的欄位。
- **Upload CSV** — 要處理的會員名單（只含Member ID/電話號碼需加852），只Support 10萬內名單。
- **Coupon** — 要操作的是哪一張優惠券。
- **Type** — 操作類型：Dispatch（補派新的券）、Update（改現有券的日期）、Expire（強制把現有券設為到期）、Use（標記為已使用）。
- **Active On / Create After / Create Before / Expire After / Expire Before** — 篩選條件，用來限定「只處理在某段時間內有效／建立／到期的券」。Update／Expire／Use 類型才會用到。
- **Max Qty Per User** — 每位會員最多處理幾張券的上限。
- **Quantity** — Dispatch 時要補派幾張。
- **New Start Date / New Expiry Date** — Update 時要改成的新的起訖日期。
- **Remark** — 內部備註。
- **Status** — Awaiting Processing（排隊處理中）、Finished（完成）、Error（發生錯誤）。
- **Results** — 執行後顯示每位會員的處理結果（影響幾張、實際處理幾張、訊息）。
- **Created By / Created At** — 操作人員與時間紀錄。
**注意：** Dispatch／Update 需要按 Execute 直接執行；Update／Expire／Use 類型建議先按 Pre-execute 預覽「會影響多少張券」再正式執行，避免誤改大量資料。建立後無法編輯，只能檢視結果。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
