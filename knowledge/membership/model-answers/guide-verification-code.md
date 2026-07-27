---
schema_version: 2
id: "GUIDE-MEMBERSHIP-VERIFICATION-CODE"
title: "Verification Code"
category: "Membership"
module: "Verification Code"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Verification Code 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Verification Code 點用？"
  - "點樣設定 Verification Code？"
  - "Verification Code 有咩用途同注意事項？"
  - "What is Verification Code used for?"
keywords:
  - "Verification Code"
  - "Membership"
  - "Verification"
  - "Code"
  - "驗證碼"
  - "OTP"
  - "CMS"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "Verification Code"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Verification Code

**這是什麼：** 查詢某支手機或電郵收過的一次性驗證碼，必要時延長其有效期。客服在會員反映「收不到碼」或「碼過期了」時常用。
**出現位置：** 純後台內部頁面；驗證碼本身是簡訊／電郵發到會員手機或信箱的，這裡只是後台查看與延期。
**欄位／設定：**
- **Phone** — 篩選某手機號碼收過的驗證碼。
- **Email** — 篩選某電郵收過的驗證碼。
- 表格欄位：Phone、Email、Verification Code（驗證碼內容）、Expiry Date（失效時間）、Status（Active 可用 / Used 已使用 / Expired 已過期）。
- **Edit** 按鈕（只出現在 Active 或 Expired 紀錄上）— 開啟小視窗，可修改 **Expiry Date** 延長該驗證碼的可用時間；按 Confirm 送出。
**注意：** 已 Used 的驗證碼不能再次編輯延期。延期後請提醒會員用新的有效期再試一次。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
