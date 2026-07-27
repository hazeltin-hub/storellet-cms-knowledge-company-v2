---
id: SHOP-001
category: Company
module: "Shops"
intent: how_to
status: confirmed
question: "建立 Shop 有咩必填欄位？"
alternatives:
  - "點樣 Create Shop？"
  - "開分店要填咩？"
  - "What fields are required to create a Shop?"
  - "Shop 層必填欄位？"
  - "分店層要填咩先得？"
keywords:
  - "Create Shop"
  - "Shop required fields"
  - "Shop Name"
  - "Reference ID"
  - "Brand"
  - "Region District"
  - "Geo Location"
  - "Address"
  - "Telephone"
  - "Opening Hours"
  - "Shop Status"
  - "分店必填"
  - "shop 層"
  - "分店層必填"
  - "shop 必填"
source_title: "Company Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

Create Shop 已確認嘅一般必填欄位如下：

- **Shop Name (English)**｜必填｜建議／預設：英文分店名｜用途：App 分店列表顯示
- **Shop Name (Local Language)**｜必填｜建議／預設：中文分店名｜用途：App 中文分店列表顯示
- **Reference ID**｜必填｜建議／預設：與 merchant confirm / 由 001 開始｜用途：POS 識別分店 ID
- **Brand**｜必填｜建議／預設：所屬 brand｜用途：將分店歸屬到品牌
- **Region (English)**｜必填｜建議／預設：Hong Kong Island / Kowloon / New Territories｜用途：分店區域 tab；WEB 區域 顯示
- **Region (Local Language)**｜必填｜建議／預設：香港島 / 九龍 / 新界｜用途：中文分區 tab；WEB 區域 顯示
- **District (English)**｜必填｜建議／預設：例如 Kwun Tong｜用途：分店地區；WEB 地區顯示
- **District (Local Language)**｜必填｜建議／預設：例如 觀塘｜用途：分店地區；WEB 地區顯示
- **Geo Location**｜必填｜建議／預設：Longitude - Latitude｜用途：Shop Map Pin位置顯示
- **Address (English)**｜必填｜建議／預設：英文地址｜用途：APP 分店資料顯示
- **Address (Local Language)**｜必填｜建議／預設：中文地址｜用途：APP 中文分店資料顯示
- **Telephone**｜必填｜建議／預設：分店電話｜用途：分店資料顯示
- **Opening Hours (English)**｜必填｜建議／預設：例如 10:00 - 22:00｜用途：分店營業時間
- **Opening Hours (Local Language)**｜必填｜建議／預設：例如 10:00 - 22:00（星期一至日）｜用途：中文營業時間
- **Status**｜必填｜建議／預設：Active｜用途：分店是否上架 / 有效

## 注意事項

- 來源同時將 Create Date 列為「必填」及「系統產生」，因此暫時唔將 Create Date 歸入已確認必填清單；有人查詢時 Chatroom 會標記為資料衝突。
