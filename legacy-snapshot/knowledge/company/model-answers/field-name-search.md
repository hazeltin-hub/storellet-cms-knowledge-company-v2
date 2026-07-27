---
id: FIELD-NAME-SEARCH
category: System
module: "Field Search"
intent: reference
status: confirmed
question: "Status field 係邊度有？"
alternatives:
  - "field name 搜索"
  - "field 搜索"
  - "搵 field 用途"
  - "field 係邊個 tab"
  - "相同 field name 有幾多個"
  - "field 位置"
  - "所有 field"
  - "field list"
  - "搜尋 field"
  - "field 名稱"
  - "field 分類"
  - "搵唔到 field"
keywords:
  - "field"
  - "field name"
  - "field search"
  - "field 搜索"
  - "Status"
  - "Name"
  - "Image"
  - "Date"
  - "URL"
  - "Email"
  - "Location"
  - "field 位置"
  - "field 用途"
  - "所有 field"
  - "field list"
  - "搜尋"
  - "查找"
  - "邊度有"
  - "係邊個"
  - "分類"
source_title: "CMS Field Name Index（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

**Field Name Search** 功能幫你找到所有包含特定 field name 嘅 model answers。

### 常見重複 Field Names

以下是 CMS 中出現多次嘅 field names 同佢哋嘅位置：

#### **Status（狀態欄位）**
- **Company** → `company-status.md` - 公司狀態（Active/Inactive）
- **Brand** → `brand-status-and-display.md` - 品牌狀態
- **Shop** → `shop-status.md` - 分店狀態
- **Assets** → 各種 Assets 都有 Status 欄位

#### **Name（名稱欄位）**
- **Company** → `company-name.md` - 公司名稱
- **Company Group** → `group-name.md` - 集團名稱
- **Brand** → `brand-name.md` - 品牌名稱
- **Shop** → `shop-name.md` - 分店名稱

#### **Image（圖片欄位）**
- **Company Group** → `group-logo.md` - 集團 logo
- **Company Group** → `registration-image.md` - 註冊圖片
- **Brand** → `brand-image-specifications.md` - 品牌圖片規格
- **Brand** → `thumbnails.md` - 縮圖
- **Shop** - 各種圖片欄位
- **Assets** → 各種 Assets 都有 Image 欄位

#### **Date（日期欄位）**
- **Company** → `company-join-date.md` - 公司加入日期
- **Brand** → `brand-join-date.md` - 品牌加入日期
- **Shop** → `shop-create-date.md` - 分店建立日期
- **Assets** → 各種 Assets 都有 Start/End Date

#### **URL（連結欄位）**
- **Brand** → `website-english.md` - 網站連結
- **Brand** → `eshop-url.md` - eShop 連結
- **Brand** → `info-url.md` - 品牌資訊連結
- **Brand** → `facebook.md` - Facebook 連結
- **Brand** → `instagram.md` - Instagram 連結

#### **Email（電郵欄位）**
- **Company Group** → `customer-service-email.md` - 客服電郵
- **Brand** → `email.md` - 品牌聯絡電郵

### 使用方法

#### **方法 1：直接搜索 Field Name**
問：「**Status** 係邊度有？」
答：會列出所有包含 Status 欄位嘅位置

#### **方法 2：加上用途說明**
問：「**Name field** 係咩用途？」
答：會列出所有 Name 欄位嘅具體用途

#### **方法 3：指定層級**
問：「**Company 層嘅 Status** 係咩？」
答：會直接匹配到 `company-status.md`

### Field Name 分類

#### **Company 層級 Fields**
- Company Name, Status, Join Date
- Create Date, Last Update Date

#### **Company Group 層級 Fields**
- Group Name (English/Local), Grade, Logo
- Point Ratio, Terms & Conditions
- Member No. Limit, CS App Point Limit

#### **Brand 層級 Fields**
- Brand Name (English/Local), Status, Join Date
- Brand Logo, Images, Thumbnails
- UI Colours, Links, Social Media
- Point/Stamp Limits, Settings

#### **Shop 層級 Fields**
- Shop Name (English/Local), Status
- Address, Telephone, Geo Location
- Opening Hours, Payment Methods

#### **Assets 層級 Fields**
- Points: Point Value, Type, Image, Start/End Date
- Discount Cards: Card Name, Image, Discount Rate, Level
- Coupons: Coupon Name, Type, Value, Quantity
- Stamps: Stamp Name, Image, Required Count
- Bingo: Bingo Name, Image, Grid Size
- Surveys: Survey Name, Questions

## 注意事項

- 相同 field name 喺不同層級可能有不同用途
- 搜索時建議加上層級名稱（如「Company Status」）
- 部分欄位係系統產生，部分係必填或選填
- 詳細用途請參考各別嘅 model answer