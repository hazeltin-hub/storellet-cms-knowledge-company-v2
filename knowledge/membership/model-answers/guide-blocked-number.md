---
schema_version: 2
id: "GUIDE-MEMBERSHIP-BLOCKED-NUMBER"
title: "Blocked Number"
category: "Membership"
module: "Blocked Number"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Blocked Number 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Blocked Number 點用？"
  - "點樣設定 Blocked Number？"
  - "Blocked Number 有咩用途同注意事項？"
  - "What is Blocked Number used for?"
keywords:
  - "Blocked Number"
  - "Membership"
  - "Blocked"
  - "Number"
  - "CMS"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Blocked Number

**這是什麼：** 顯示被系統封鎖的手機號碼清單，可手動解除封鎖。被封鎖的號碼無法收到驗證碼簡訊。
**出現位置：** 純後台內部頁面；封鎖與解封只影響簡訊發送，會員端看不到這份清單。
**欄位／設定：**
- 表格欄位：Phone（被封鎖號碼）、Block Date（封鎖日期時間）。
- **Unblock** 按鈕（每列後方）— 解除該號碼的封鎖；按後系統回到列表頁，該號碼即可重新收到驗證碼。
**注意：** 解封前請先確認該號碼並非惡意濫發，以免再次觸發系統封鎖。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
