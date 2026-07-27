---
schema_version: 2
id: "GUIDE-APPLICATION-QUEUING-SYSTEM"
title: "Queuing System"
category: "Application"
module: "Queuing System"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Queuing System 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Queuing System 點用？"
  - "點樣設定 Queuing System？"
  - "Queuing System 有咩用途同注意事項？"
  - "What is Queuing System used for?"
keywords:
  - "Queuing System"
  - "Application"
  - "Queuing"
  - "System"
  - "CMS"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "Queuing System"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Queuing System

**這是什麼：** 為每個品牌設定要使用哪一套外部排隊／候位系統，並指定旗下哪些分店要走這套系統，以及哪些候位標籤可對應發送哪張折扣卡。
**出現位置：** 顧客 App 的候位／抽籤／排隊功能（背後串接外部系統）；網店或收銀機場景看不到。
**欄位／設定：**
- **Brand** — 列表頁的篩選器；編輯頁為必選。
- **Queue System** — 選擇要串接的候位系統（目前僅 WebOn）。
- **Internal Shop Codes** — 這個品牌底下哪些分店要走此候位系統，可多選。
- **Queue Group Rules** — 可新增多筆規則，每筆指定一個 Tag（標籤）並選擇要發給哪些折扣卡。
- **Status** — Active 或 Inactive；Inactive 時此設定不生效。
**注意：** 切換品牌時 Internal Shop Codes 與 Queue Group Rules 會重置，請先選好品牌再繼續操作。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
