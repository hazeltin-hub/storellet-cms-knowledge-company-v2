---
id: FIELD-GEO-LOCATION-DEDICATED
category: System
module: "Field Search"
intent: reference
status: confirmed
question: "Geo Location field 係邊個 tab？"
alternatives:
  - "geo location field 係邊到"
  - "Geo Location 係咩用途"
  - "Geo Location 係邊個"
  - "Geo Location field 位置"
  - "搵 Geo Location"
  - "Shop Geo Location"
keywords:
  - "Geo Location"
  - "Geo Location field"
  - "地理定位"
  - "經緯度"
  - "latitude"
  - "longitude"
  - "map pin"
  - "地圖定位"
  - "shop location"
  - "shop geo"
source_title: "CMS Field Name Index（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

**Geo Location field** 主要出現喺 **Shop 層級**嘅 Create Shop 頁面。

### Geo Location Field 位置

#### **Shop Geo Location**（主要位置）
- **路徑**：Shops → Create Shop
- **欄位名稱**：Geo Location
- **Model Answer**：`shop-geo-location.md` 或 `geo-location.md`
- **用途**：Shop Map Pin 位置顯示
- **填寫**：必填，Longitude - Latitude（經度 - 緯度）
- **格式**：經度,緯度
- **例子**：22.3193,114.1694（香港座標）

### 其他 Location 相關欄位

#### **Brand Geo Tag**
- **路徑**：Brands → Create Brand
- **欄位名稱**：Geo Tag
- **用途**：品牌地理標籤
- **填寫**：選填

### Geo Location 特點

#### **必填性質**
- **Shop 層級**：必填欄位
- **Brand 層級**：選填欄位（Geo Tag）

#### **功能用途**
- **地圖顯示**：Shop Map Pin 位置
- **定位功能**：用戶導航到分店
- **區域篩選**：按地理位置篩選分店

#### **填寫格式**
- **經度 Longitude**：例如 114.1694
- **緯度 Latitude**：例如 22.3193
- **順序**：通常先緯度後經度，或按 CMS 要求格式

## 答案確認

**Geo Location field 係喺：**
- **主要位置**：Shops → Create Shop → Geo Location
- **具體用途**：Shop Map Pin 位置顯示
- **必填狀態**：必填
- **填寫格式**：Longitude - Latitude

## 相關 Model Answers

- **Shop Geo Location**：`shop-geo-location.md`
- **Brand Geo Tag**：`brand-geo-tag.md`
- **General Geo Location**：`geo-location.md`

## 注意事項

- Geo Location 主要用於 Shop 層級，不是 Company 或 Brand 層級
- Brand 層級有類似嘅 Geo Tag 欄位，但用途不同
- 座標格式要正確，否則地圖定位會唔準
- 可用 Google Maps 或其他地圖服務獲取準確座標