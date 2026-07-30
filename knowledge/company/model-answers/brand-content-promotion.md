---
schema_version: 2
id: "COMPANY-V2-BRAND-CONTENT-PROMOTION"
title: "Brand：簡介、推介菜式、品牌訊息與推廣"
category: "Company"
module: "Brands"
screen: "Create Brand"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "low"
locale: "zh-HK"
question: "Brand 簡介、推介菜式同推廣內容點設定？"
alternatives:
  - "Brands 入面 Create Brand 點用？"
  - "Brand：簡介、推介菜式、品牌訊息與推廣 有咩欄位？"
  - "Short Description (English) 用途係咩？"
  - "Short Description (English) 點設定？"
  - "Short Description (Local Language) 用途係咩？"
  - "Short Description (Local Language) 點設定？"
  - "Recommendation Dishes 用途係咩？"
  - "Recommendation Dishes 點設定？"
  - "Message 1 / 2 / 3 用途係咩？"
  - "Message 1 / 2 / 3 點設定？"
  - "Promotion Message 用途係咩？"
  - "Promotion Message 點設定？"
  - "Promoted 用途係咩？"
  - "Promoted 點設定？"
keywords:
  - "Company"
  - "Brands"
  - "Create Brand"
  - "Short Description (English)"
  - "Short Description (Local Language)"
  - "Recommendation Dishes"
  - "Message 1 / 2 / 3"
  - "Promotion Message"
  - "Promoted"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### 直接答案

呢組欄位管理中英文短描述、推介菜式、品牌 Message 1／2／3、推廣訊息及 Promoted 標記。

**出現位置：** CMS → Company → Brands → Create Brand；內容主要顯示喺 App／Web 品牌介紹及推廣位置。

### 已確認欄位

| Field | 必填程度 | 建議填寫／Default | 用途／影響 | 操作注意事項 | 來源頁 |
|---|---|---|---|---|---|
| **Short Description (English)** | 選填 | 英文短描述 | 前台簡介 | 有前台顯示先填 | P.16 |
| **Short Description (Local Language)** | 選填 | 中文短描述 | 前台簡介 | 有前台顯示先填 | P.16 |
| **Recommendation Dishes** | 選填 | 推介菜式 | 顯示於 recommendation section | 前台品牌頁可見 | P.17 |
| **Message 1 / 2 / 3** | 選填 | 品牌介紹文字 | 顯示於 brand description section | Message 1 通常較重要 | P.17 |
| **Promotion Message** | 選填 | 推廣文案 | 前台推廣顯示 | 如無可留空 | P.20 |
| **Promoted** | 選填 | Tick / Untick | 是否標記 promoted | 視乎前台 display logic | P.20 |

### 操作前注意

- 中英文內容要按實際語言分開填寫。
- Message 1／2／3 亦可能用作 SEO Header，上線前要核對文案。
- 如果實際 CMS 畫面同呢份已確認資料不一致，停止推斷並交由內容負責人覆核。

## Internal Notes

- 來源：Company Confirmed Fields workbook，Company Confirmed Fields sheet rows 83-86, 100-101。
- 舊 Company 單欄位答案已由呢份主題式答案取代。
