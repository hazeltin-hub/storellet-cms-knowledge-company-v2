---
id: COMPANY-002
category: Company
module: "All Companies"
intent: how_to
status: confirmed
question: "建立 Company 有咩必填欄位？"
alternatives:
  - "點樣 Create Company？"
  - "開公司要填咩？"
  - "What fields are required to create a company?"
  - "Company 層必填欄位有咩？"
  - "All Companies 要填咩先得？"
keywords:
  - "Create Company"
  - "Company Name"
  - "Join Date"
  - "Company required fields"
  - "建立公司"
  - "公司必填"
  - "company 層"
  - "all companies 必填"
  - "頂層公司必填"
source_title: "Company Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

Create Company 共有 3 個已確認必填欄位：

- **Company Name**｜必填｜建議／預設：公司註冊 / 內部公司名｜用途：CMS 內部公司名稱
- **Join Date**｜必填｜建議／預設：建立日期 / 合作開始日｜用途：記錄公司加入日期
- **Status**｜必填｜建議／預設：Active｜用途：控制公司是否有效; 如選擇Active公司其下Group/Brand為有效；選擇Inactive公司為無效其下Group/Brand不會再顯示於Dashboard或Frontend
