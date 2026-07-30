---
schema_version: 2
id: "COMPANY-V2-FEATURED-ITEM-SETUP"
title: "Featured Item：活動、圖片、顯示期間與排序"
category: "Company"
module: "Featured Items"
screen: "Create Featured Item"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "點樣設定 Featured Item 嘅活動、圖片、日期同排序？"
alternatives:
  - "Featured Items 入面 Create Featured Item 點用？"
  - "Featured Item：活動、圖片、顯示期間與排序 有咩欄位？"
  - "Campaign Name 用途係咩？"
  - "Campaign Name 點設定？"
  - "Section 用途係咩？"
  - "Section 點設定？"
  - "Brand 用途係咩？"
  - "Brand 點設定？"
  - "Image (English) 用途係咩？"
  - "Image (English) 點設定？"
  - "Image (Local Language) 用途係咩？"
  - "Image (Local Language) 點設定？"
  - "Start Date 用途係咩？"
  - "Start Date 點設定？"
  - "End Date 用途係咩？"
  - "End Date 點設定？"
  - "Priority 用途係咩？"
  - "Priority 點設定？"
keywords:
  - "Company"
  - "Featured Items"
  - "Create Featured Item"
  - "Campaign Name"
  - "Section"
  - "Brand"
  - "Image (English)"
  - "Image (Local Language)"
  - "Start Date"
  - "End Date"
  - "Priority"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### 直接答案

Create Featured Item 用嚟將指定 Brand 嘅活動內容放入指定 Section，並設定中英文圖片、顯示日期及 Priority。

**出現位置：** CMS → Company → Featured Items → Create Featured Item；內容會喺所選前台 Section 顯示。

### 已確認欄位

| Field | 必填程度 | 建議填寫／Default | 用途／影響 | 操作注意事項 | 來源頁 |
|---|---|---|---|---|---|
| **Campaign Name** | 必填 | Campaign 名稱 | CMS 識別 featured item | 建議同活動名一致 | P.28 |
| **Section** | 必填 | 選擇出現 section | 控制 featured item 顯示位置 | PPT 指示需選擇會出現嘅 section | P.28 |
| **Brand** | 必填 | 所屬 brand | 控制 featured item 屬於邊個 brand | 必須揀正確 brand | P.28 |
| **Image (English)** | 必填 | 英文圖片 | Featured item 圖片顯示 | 前台 / section 顯示 | P.28 |
| **Image (Local Language)** | 必填 | 中文圖片 | 中文前台圖片 | 如同圖可重用 | P.28 |
| **Start Date** | 必填 | 顯示開始日 | 控制出現期間 | PPT 建議可早於 campaign start date | P.28 |
| **End Date** | 必填 | 顯示結束日 | 控制下架時間 | 需同 campaign period 對齊 | P.28 |
| **Priority** | 必填 | 數字，例如 -1 | 控制排序優先次序 | 需跟 section 排序邏輯 | P.27-P.28 |

### 操作前注意

- Brand 同 Section 必須選擇正確。
- Start Date 可按來源指引早過 campaign start date；End Date 要同 campaign period 對齊。
- Priority 要跟所屬 Section 嘅排序邏輯。
- 如果實際 CMS 畫面同呢份已確認資料不一致，停止推斷並交由內容負責人覆核。

## Internal Notes

- 來源：Company Confirmed Fields workbook，Company Confirmed Fields sheet rows 129-136。
- 舊 Company 單欄位答案已由呢份主題式答案取代。
