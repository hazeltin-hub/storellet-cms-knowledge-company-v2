---
schema_version: 2
id: "GUIDE-APPLICATION-MERCHANT-WEB-CONFIG"
title: "Merchant Web Config"
category: "Application"
module: "Merchant Web Config"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Merchant Web Config 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Merchant Web Config 點用？"
  - "點樣設定 Merchant Web Config？"
  - "Merchant Web Config 有咩用途同注意事項？"
  - "What is Merchant Web Config used for?"
keywords:
  - "Merchant Web Config"
  - "Application"
  - "Merchant"
  - "Web"
  - "Config"
  - "CMS"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Merchant Web Config

**這是什麼：** 編排商家專用網站（merchant web）的主題、自訂標頭、橫幅、任務群組與排列順序，可指定上下檔期間。
**出現位置：** 商家登入的網店後台／導引網頁；顧客 App 完全看不到。
**欄位／設定：**
- **Brand Id** — 這組設定要套用到哪個品牌。
- **Theme** — 網店後台的主題風格。
- **Custom Header Zh / En** — 整個商家網頁最上方的自訂標頭（繁中／英文）。
- **Custom Session Order** — 商家網頁各區段（Banner、ItemGroup 與系統預設區段）的排列順序，用拖曳調整。
- **Banner（可新增多個）** — 每組含 Image Url 與 Action（點擊前往的網址）。
- **Item Group（可新增多組，每組內可再新增多個 Task）** — 群組有 Header Zh/En 與 Task Order（拖曳排序）；每個 Task 有 Icon Url、Header Zh/En、Body Zh/En、Button Wording Zh/En、Button Action。
- **Active** — 勾選才會上線。
- **Start Time / End Time** — 設定的有效上下檔時間。
- **Created By / At / Updated By / At** — 系統紀錄。
**注意：** Custom Session Order 中的區段順序就是商家看到的順序；若刪掉某個 Banner 或 ItemGroup，它會自動從 Session Order 移除。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
