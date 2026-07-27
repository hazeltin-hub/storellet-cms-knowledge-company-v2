---
id: GROUP-007
category: Company
module: "Company Groups"
intent: reference
status: confirmed
question: "Company Group 的積分比例同上限點設定？"
alternatives:
  - "Point Ratio 點填？"
  - "點設定會員積分上限？"
  - "Group point settings 有咩？"
keywords:
  - "Point Ratio"
  - "Display Point Ratio"
  - "CS App Point Limit"
  - "User Point Expiry Type"
  - "Member No Limit"
  - "-1 unlimited"
  - "積分比例"
  - "積分上限"
source_title: "Company Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

Company Group 有以下積分及會員上限設定：

- **Point Ratio**｜必填｜建議／預設：例如 $1 = 1 point(s)｜用途：積分比例計算
- **Display Point Ratio**｜選填｜建議／預設：可留空｜用途：前台顯示用積分比例文字
- **Member No. Limit**｜必填｜建議／預設：-1 （-1 for unlimited）｜用途：會員數量上限
- **CS App Point Limit**｜必填｜建議／預設：-1 （-1 for unlimited）｜用途：App 內可累積會員積分上限
- **User Point Expiry Type**｜必填｜建議／預設：User Point Dynamic Expire Every Quarter After 1 Year｜用途：控制會員積分到期方式
