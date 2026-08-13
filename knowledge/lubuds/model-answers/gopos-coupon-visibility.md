---
schema_version: 2
id: "LUBUDS-GOPOS-COUPON-VISIBILITY"
title: "LUBUDS App 有券但 GoPOS 顯示唔到"
category: "LUBUDS Operations"
module: "GoPOS Integration"
intent: "troubleshooting"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "會員喺 LUBUDS App 見到優惠券，但 GoPOS 顯示唔到，應該點查？"
alternatives:
  - "App 有 coupon，POS 冇券"
  - "GoPOS load 唔到某張 voucher"
  - "Coupon database 有但 POS 唔顯示"
  - "Why is a coupon visible in the app but not POS?"
keywords:
  - "LUBUDS"
  - "GoPOS"
  - "coupon"
  - "voucher"
  - "優惠券"
  - "POS key"
  - "API response"
source_title: "Private LUBUDS and GoPOS project conversations"
source_path: "private source — not committed"
source_anchor: "2024-06 onward"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### App 見到唔代表 POS 一定符合顯示條件

先確認優惠券確實存在於會員 wallet，再分開檢查 Storellet 設定與 POS 顯示／過濾邏輯。常見原因包括 POS key 未包含該券、品牌／店舖不適用、券狀態或有效期不符、POS 版本／環境錯誤，或者 POS 未正確處理 API response。

### 排查步驟

1. 以安全渠道取得會員及券嘅識別資料，確認 CMS wallet 內狀態為可用。
2. 核對券嘅 Brand、適用 Shop、有效期、Status、Coupon Type 及使用限制。
3. 確認 GoPOS 使用正確環境、版本及 POS key。
4. 請 POS 團隊提供 member enquiry／coupon API response 嘅相關片段及 error log。
5. 比對 API 有無回傳該券：
   - 有回傳但 POS 不顯示：由 POS 團隊檢查 mapping／filter／UI。
   - 無回傳：由 Storellet 團隊檢查券設定、會員持有狀態及 key access。
6. 用測試會員及同類測試券重現，避免直接改正式會員資料。

### 注意事項

- 唔好因為 App 截圖就直接補發另一張券，否則可能造成重複權益。
- 修正後要同時驗證顯示、使用及 reverse 後返還三個流程。

## Internal Notes

- 歷史個案顯示問題可以出現喺 Storellet 設定或 POS 端，必須先睇 API response 分界。
