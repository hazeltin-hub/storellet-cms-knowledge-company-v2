---
schema_version: 2
id: "LUBUDS-DYNAMIC-MEMBER-QR-EXPIRY"
title: "LUBUDS 動態會員 QR Code 過期排查"
category: "LUBUDS Operations"
module: "Member QR and POS"
intent: "troubleshooting"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "POS 顯示 Invalid or expired QR code，應該點處理？"
alternatives:
  - "會員 QR code 過期"
  - "UAT QR 可以查會員但做唔到付款"
  - "dynamic member QR invalid"
  - "點樣測試 LUBUDS member QR？"
keywords:
  - "LUBUDS"
  - "dynamic QR"
  - "member QR"
  - "Invalid or expired qrcode"
  - "token"
  - "UAT"
  - "COF"
source_title: "Private LUBUDS and GoPOS project conversations"
source_path: "private source — not committed"
source_anchor: "2024-08 onward"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### 先分清楚會員查詢同支付授權

同一個 QR 可能足以讀取會員資料，但未必仍然具備支付／Card on File 所需嘅有效 token。出現 `Invalid or expired QR code` 時，要檢查動態 QR 生成時間、token 有效期、App／POS 環境，以及測試卡或支付綁定狀態。

### 排查步驟

1. 確認 App 與 POS 都係同一環境（UAT 或 Production）。
2. 由會員 App 即時重新開啟／刷新 QR，唔好重用截圖或舊 QR。
3. 確認測試會員仍有有效嘅支付 token／綁卡狀態。
4. 核對 POS 時鐘及 request timestamp，避免時間偏差令 token 被判過期。
5. 分開測試 member enquiry 與 payment／COF，記錄邊一步失敗。
6. 如果重發 token 後成功，將個案歸類為 token expiry；否則連同去識別化 log 交技術團隊。

### 注意事項

- 動態 QR、支付 token 及完整 request payload 都屬敏感資料，唔好貼入公開 issue 或 repo。
- 唔好將測試環境嘅 token 有效期當成正式環境保證；實際設定要由技術團隊確認。

## Internal Notes

- 歷史 UAT 個案曾因測試 token 失效而出現同類訊息；答案保留通用排查方法，唔固定寫死有效日數。
