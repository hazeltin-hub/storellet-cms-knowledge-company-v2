---
id: GROUP-001
category: Company
module: "Company Groups"
intent: how_to
status: confirmed
question: "建立 Company Group 有咩必填欄位？"
alternatives:
  - "點樣 Create Company Group？"
  - "開 Group 要填咩？"
  - "What fields are required to create a Company Group?"
  - "Company Group 層必填欄位？"
  - "Group 層要填咩先得？"
keywords:
  - "Create Company Group"
  - "Company Group required fields"
  - "Group Name"
  - "Point Ratio"
  - "Terms Conditions"
  - "Member No Limit"
  - "CS App Point Limit"
  - "User Point Expiry Type"
  - "Group必填"
  - "company group 層"
  - "group 層必填"
  - "集團必填"
source_title: "Company Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

Create Company Group 嘅一般必填欄位如下：

- **Group Name (English)**｜必填｜建議／預設：英文集團名稱｜用途：用作前台/後台顯示
- **Group Name (Local Language)**｜必填｜建議／預設：中文集團名稱｜用途：用作前台/後台顯示
- **Company**｜必填｜建議／預設：選擇所屬公司｜用途：將 group 歸屬到所選Company
- **Grade**｜必填｜建議／預設：Standard｜用途：Group 等級 / 類型
- **Point Ratio**｜必填｜建議／預設：例如 $1 = 1 point(s)｜用途：積分比例計算
- **Terms & Conditions (English)**｜必填｜建議／預設：HTML/TXT 格式｜用途：App 前台 T&C 顯示
- **Terms & Conditions (Local Language)**｜必填｜建議／預設：HTML/TXT 格式｜用途：App 中文 T&C 顯示
- **Member No. Limit**｜必填｜建議／預設：-1 （-1 for unlimited）｜用途：會員數量上限
- **CS App Point Limit**｜必填｜建議／預設：-1 （-1 for unlimited）｜用途：App 內可累積會員積分上限
- **Status**｜必填｜建議／預設：Active｜用途：控制 group 狀態； 如選擇Active公司其下Brand為有效；選擇Inactive公司為無效其下Brand不會再顯示於Dashboard或Frontend
- **User Point Expiry Type**｜必填｜建議／預設：User Point Dynamic Expire Every Quarter After 1 Year｜用途：控制會員積分到期方式

## 注意事項

- Branded App 專用必填欄位另見「Branded App 的 Company Group 有咩必填設定？」。
