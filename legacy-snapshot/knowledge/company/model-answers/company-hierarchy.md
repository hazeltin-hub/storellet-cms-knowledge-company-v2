---
id: COMPANY-001
category: Company
module: "Company Structure"
intent: definition
status: confirmed
question: "Storellet CMS 的 Company 架構係點？"
alternatives:
  - "Company、Group、Brand、Shop 有咩關係？"
  - "Company hierarchy 係點？"
  - "品牌同分店屬於邊一層？"
  - "Company 有咩幾層？"
  - "Storellet CMS 有 Company 相關嘅咩層？"
keywords:
  - "Company hierarchy"
  - "Company Group Brand Shop"
  - "公司 集團 品牌 分店"
  - "所屬關係"
  - "CMS架構"
  - "Company 架構"
  - "Company 層級"
  - "company structure"
  - "company 幾層"
source_title: "Company Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

Company 模組嘅層級係：

1. **Company**：最上層公司。
2. **Company Group**：必須選擇所屬 Company。
3. **Brand**：必須選擇所屬 Group。
4. **Shop**：必須選擇所屬 Brand。

即係 **Company → Company Group → Brand → Shop**。

Featured Item 需要選擇所屬 Brand，但唔屬於以上四層架構。

### 每層嘅必填欄位摘要

- **Company 層**（3個必填欄位）：Company Name、Join Date、Status
- **Company Group 層**（11個必填欄位）：Group Name (EN/CN)、Company、Grade、Point Ratio、T&C (EN/CN)、Member Limit、Point Limit、Status、Point Expiry Type
- **Brand 層**（27個必填欄位）：Brand Name (EN/CN)、Brand Code、Display Sequence、Group、Category、Tag、Geo Tag、Logo、Background Image、Join/Expiry Date、Point Limits、Colours、Price Range、Status 等
- **Shop 層**（15個必填欄位）：Shop Name (EN/CN)、Reference ID、Brand、Region (EN/CN)、District (EN/CN)、Geo Location、Address (EN/CN)、Telephone、Opening Hours (EN/CN)、Status

## 注意事項

- 建立下層資料前，先確認對應上層資料已存在。
- 各層嘅完整必填欄位列表請查詢相應問題。
