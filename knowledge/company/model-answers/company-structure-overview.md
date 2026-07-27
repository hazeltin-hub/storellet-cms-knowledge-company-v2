---
schema_version: 2
id: "COMPANY-V2-STRUCTURE-OVERVIEW"
title: "Company 模組架構總覽"
category: "Company"
module: "Company"
screen: "Overview"
intent: "definition"
status: "confirmed"
risk_level: "low"
locale: "zh-HK"
question: "Company、Company Group、Brand、Shop 同 Featured Item 有咩關係？"
alternatives:
  - "Company 模組架構係點？"
  - "Company Group、Brand、Shop 層級"
  - "Featured Item 屬於邊一層？"
  - "How are Company, Group, Brand and Shop related?"
keywords:
  - "Company"
  - "Company Group"
  - "Brand"
  - "Shop"
  - "Featured Item"
  - "hierarchy"
source_title: "Company Confirmed Fields workbook"
source_path: "knowledge/references/company-confirmed-fields.xlsx"
source_anchor: "Company Confirmed Fields sheet; relationship fields across rows 2-136"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### 直接答案

按已確認嘅歸屬欄位，Company 模組主要關係係：

`Company → Company Group → Brand → Shop`

- **Company Group** 透過 **Company** 欄位歸屬 Company。
- **Brand** 透過 **Group** 欄位歸屬 Company Group。
- **Shop** 透過 **Brand** 欄位歸屬 Brand。
- **Featured Item** 透過 **Brand** 欄位選擇所屬品牌，同時用 **Section** 控制顯示位置；佢唔係上述四層架構嘅另一層。

建立資料時應由上而下處理，避免 Brand 或 Shop 選錯上層歸屬。

## Internal Notes

- 呢個關係由 workbook 入面 Company／Group／Brand 歸屬欄位整合得出。
