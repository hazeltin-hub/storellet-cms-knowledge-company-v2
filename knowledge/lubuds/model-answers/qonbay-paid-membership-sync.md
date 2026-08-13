---
schema_version: 2
id: "LUBUDS-QONBAY-PAID-MEMBERSHIP-SYNC"
title: "LUBUDS Qonbay 付費會籍同步排查"
category: "LUBUDS Operations"
module: "Qonbay Integration"
intent: "troubleshooting"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Qonbay 顯示付費會籍已啟動，但 LUBUDS App／CMS 未更新，點處理？"
alternatives:
  - "Luxe paid member 仲顯示 Premium"
  - "付費後會員卡同 banner 無轉"
  - "Qonbay active but Storellet not updated"
  - "Paid membership sync issue"
keywords:
  - "LUBUDS"
  - "Qonbay"
  - "paid membership"
  - "Luxe"
  - "tier sync"
  - "SKU code"
  - "membership activation"
source_title: "Private LUBUDS project conversations"
source_path: "private source — not committed"
source_anchor: "2024-04 onward"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### 先分開檢查付款、會籍、Tier 同額外權益

Qonbay 顯示付款／會籍 active，只代表 Qonbay 端狀態。LUBUDS App 需要收到並正確處理同步資料，先會更新 CMS Tier、App banner、會籍有效期及相關優惠券。任何一段 mapping 或通知失敗，都可能造成部分更新。

### 排查步驟

1. 經安全渠道確認 Qonbay transaction／membership 狀態及更新時間。
2. 確認 Qonbay 有無向 Storellet 發出 callback／API 資料，以及 Storellet 有無成功接收。
3. 核對會員識別資料及 SKU／方案 mapping。
4. 在 CMS 檢查 Tier Card、Start／Expiry Date、Status 及同步紀錄。
5. 分開驗證 App Tier、付費會員 banner、有效期文字及應派優惠券。
6. 如涉及不同付款方式或額外獎賞，確認規則係由 Qonbay、Storellet 定 Braze 觸發，避免重複派發。
7. 修正後先以測試個案跑完整流程，再按已批准名單補處理受影響會員。

### 注意事項

- 唔好見到 Tier 未更新就直接手動補券；先確認同步流程有無稍後重試，避免重複。
- 舊 Qonbay 流程曾與後續 Shopline／Braze 流程並存，排查時要確認事故日期當時實際使用邊套流程。

## Internal Notes

- 呢條答案保留跨系統同步嘅通用排查方法，不承諾目前仍使用某個舊流程。
