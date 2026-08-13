---
schema_version: 2
id: "LUBUDS-GOPOS-TRANSACTION-SYNC"
title: "LUBUDS GoPOS 交易上數及反向交易排查"
category: "LUBUDS Operations"
module: "GoPOS Integration"
intent: "troubleshooting"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "LUBUDS GoPOS 交易上唔到數或 void 後未反向，應該點查？"
alternatives:
  - "closeTransaction 同 reverseTransaction 有咩分別？"
  - "POS 上數失敗點處理？"
  - "void transaction 後積分優惠券未還原"
  - "GoPOS transaction sync troubleshooting"
keywords:
  - "LUBUDS"
  - "GoPOS"
  - "closeTransaction"
  - "reverseTransaction"
  - "void"
  - "上數"
  - "invoice"
  - "document number"
source_title: "Private LUBUDS and GoPOS project conversations"
source_path: "private source — not committed"
source_anchor: "2024-06 onward"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### 先確認 POS 呼叫咗正確動作

- 正常完成交易／上數應使用 `closeTransaction`。
- 取消已完成交易先使用 `reverseTransaction`。
- 如果上數時誤用反向交易，或者同一單重複反向，可能出現 document number invalid、交易搵唔到或權益未同步。

### 最少排查資料

請收集以下資料交畀 POS 及 Storellet 技術團隊，敏感值只可經內部安全渠道傳送：

- 環境：UAT 或 Production
- Shop Code、Brand ID
- Invoice No. 及交易時間
- 呼叫 endpoint／動作名稱
- request timestamp、response code 及完整 error message
- 預期結果與實際結果
- 有無重試、void 或重複提交

### 排查次序

1. 確認 POS 版本及環境正確。
2. 確認 Shop Code、Brand ID、Invoice No. 格式及交易時間。
3. 查 POS log 有無真正送出 request 及收到 response。
4. 查 Storellet log 有無收到同一 request，以及回應係成功定錯誤。
5. 如果兩邊對「成功」理解唔一致，用同一 request timestamp 對數。
6. 測試一張新交易，再測一次反向；唔好不停重試同一正式交易。
7. 最後核對積分、優惠券、印花、支付及 CMS invoice record 是否全部一致。

### 注意事項

- Void／reverse 涉及會員權益及金錢，唔應只睇 POS 畫面就判定完成。
- 技術排查期間唔好把完整會員資料、動態 QR 或支付資料貼入公開 issue／repo。

## Internal Notes

- 歷史個案顯示「server 回 success」但 POS 未完成，必須以雙方 log 及最終權益狀態核實。
