---
schema_version: 2
id: "LUBUDS-INLINE-DEPOSIT-PAYMENT"
title: "LUBUDS Inline 訂座按金及稍後付款流程"
category: "LUBUDS Operations"
module: "Inline Integration"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Inline 網上訂座可唔可以先完成 booking，之後再畀按金？"
alternatives:
  - "訂座按金 outstanding status 點做？"
  - "Inline deposit payment link"
  - "reservation-payment-created 點用？"
  - "Can an online booking pay the deposit later?"
keywords:
  - "LUBUDS"
  - "Inline"
  - "deposit"
  - "payment link"
  - "outstanding"
  - "reservation-payment-created"
  - "online booking"
source_title: "Private Inline and LUBUDS project conversations"
source_path: "private source — not committed"
source_anchor: "2026-06 to 2026-07"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### 標準 Online Booking 唔支援「先訂座、後付款」

如果 Inline Patron Web 嘅 online booking 已啟用按金／信用卡授權，顧客需要即時完成付款或授權，先完成網上訂座。呢個流程唔會自然產生一個等待顧客稍後付款嘅 outstanding booking。

### 邊種情況可以稍後付款？

由商戶在 Host App 建立電話訂座，並把 deposit 加到該 reservation，顧客可以收到 SMS／email 提醒及付款連結，在期限前完成按金。另一可行操作係 online booking 不啟用按金，由商戶收到訂座後再手動 attach deposit；呢個屬商戶後續操作，唔係標準 online payment flow。

### 整合要點

- Deposit 建立可參考 `reservation-payment-created` 相關 webhook／event。
- 測試前需要由 Inline 為 staging webhook URL 配置相應 event。
- App 如要顯示待付款狀態，必須先確認來源流程真係會產生 payment link 及可識別狀態。
- 專案 Phase 1 曾把 online booking 稍後付款移出範圍；目前 scope 要以最新產品決定為準。

### 注意事項

- 唔好向顧客承諾網上訂座可稍後付款，除非目前 Inline 配置及 LUBUDS scope 已正式支援。
- 測試卡資料、payment link、webhook secret 及真實付款狀態不可放入公開 repo。

## Internal Notes

- 呢條答案區分 Patron Web online booking 與 Host App／商戶後加 deposit 兩個流程。
