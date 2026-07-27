---
id: BRAND-003
category: Company
module: "Brands"
intent: reference
status: confirmed
question: "Brand 的賺分上限同 QR Code 有咩設定？"
alternatives:
  - "每張單最多可以賺幾多分？"
  - "Brand QR code 幾時到期？"
  - "每日每週賺分次數點設定？"
keywords:
  - "Max Point Earn Per Invoice"
  - "Max Time Earn Point"
  - "per Day per Week POS"
  - "QR Code Expired In Same Day"
  - "QR Code Expiry Day"
  - "99999"
  - "999"
  - "-1 default"
  - "賺分上限"
  - "QR到期"
source_title: "Company Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

Brand 的賺分及 QR Code 限制欄位如下：

- **Max Point Earn Per Invoice**｜必填｜建議／預設：99999 / 按規則｜用途：每張單可賺最多積分
- **Max. Time of Earn Point per Day**｜必填｜建議／預設：999 / 按規則｜用途：每日可賺積分次數上限
- **Max. Time of Earn Point per Week**｜必填｜建議／預設：999 / 按規則｜用途：每週可賺積分次數上限
- **Max. Time of Earn Point per Day For POS**｜必填｜建議／預設：999 / 按規則｜用途：POS 每日賺分次數上限
- **Max. Time of Earn Point per Week For POS**｜必填｜建議／預設：999 / 按規則｜用途：POS 每週賺分次數上限
- **QR Code Expired In Same Day**｜選填｜建議／預設：Tick / Untick｜用途：控制 QR code 是否為一日有效
- **QR Code Expiry Day**｜必填｜建議／預設：-1 default （7日）｜用途：QR code 到期日
