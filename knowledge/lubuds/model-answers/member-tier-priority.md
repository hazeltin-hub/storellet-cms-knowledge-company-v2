---
schema_version: 2
id: "LUBUDS-MEMBER-TIER-PRIORITY"
title: "LUBUDS 會員有多個 Tier 時顯示錯誤"
category: "LUBUDS Operations"
module: "Membership Tier"
intent: "troubleshooting"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "LUBUDS 會員有多個身份，但 App 或 POS 顯示錯 Tier，點查？"
alternatives:
  - "Staff Family 點解顯示 Basic？"
  - "會員有 Luxe 同 Premium，應該顯示邊張卡？"
  - "POS API return 錯 discount card"
  - "Member tier priority troubleshooting"
keywords:
  - "LUBUDS"
  - "tier"
  - "discount card"
  - "priority"
  - "Basic"
  - "Premium"
  - "Staff"
  - "Partner"
source_title: "Private LUBUDS project conversations"
source_path: "private source — not committed"
source_anchor: "2024-07 onward"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### 多張 Tier Card 要同時核對資料同優先次序

會員同時擁有 Basic、Premium、Staff、Partner 或付費會籍時，App 與 POS 應按已配置優先次序顯示／回傳適用 Tier。顯示 Basic 唔一定代表高階卡不存在，亦可能係 priority、有效期、狀態、API cache 或 POS mapping 問題。

### 排查步驟

1. 在 CMS 確認會員實際持有嘅所有 Discount Card／Tier Card。
2. 逐張核對 Status、Start Date、Expiry Date 及所屬 Brand。
3. 確認目前業務批准嘅 tier priority；唔好沿用聊天中嘅舊排序。
4. 檢查會員 API 實際回傳邊個 Card ID／Tier Name。
5. App 正確但 POS 錯：檢查 POS 是否使用舊 cache、舊 mapping 或只取第一筆。
6. App 與 API 都錯：由 Storellet 團隊檢查 priority／card config，修正後重新測試。
7. 用一個只有單 Tier 嘅測試會員同一個多 Tier 測試會員做對照。

### 注意事項

- 調整全域 priority 可能影響所有會員及優惠適用條件，唔可以只為單一個案直接改。
- 改 Tier ID／Level 後，要覆核所有以 Tier 為條件嘅 Coupon、Stamp、Braze segment 及 POS 折扣。

## Internal Notes

- 歷史對話中 priority 及 tier level 曾更新，故答案要求以當前批准配置為準。
