---
schema_version: 2
id: "GUIDE-PUSH-NEWS"
title: "News"
category: "Push"
module: "News"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "News 係做咩，有咩欄位同注意事項？"
alternatives:
  - "News 點用？"
  - "點樣設定 News？"
  - "News 有咩用途同注意事項？"
  - "What is News used for?"
keywords:
  - "News"
  - "Push"
  - "推播"
  - "通知"
  - "CMS"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "News"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### News

**這是什麼：** 發佈一則最新消息／資訊文章到 App 的消息專區，會員進入專區時可看到圖文內容。
**出現位置：** 顧客 App 的最新消息／資訊專區。不是推播通知。
**欄位／設定：**
- **Brand** — 所屬品牌。
- **News Title (Eng) / News Title (Chi)** — 標題英文與中文版本。英文標題為必填。
- **Description (Eng) / Description (Chi)** — 內文英文與中文版本。
- **Image (Eng) / Image (Chi)** — 中英文版可各自搭配一張圖片。
- **Publish Date / Publish Time** — 文章上線的日期與時間。
- **Status** — Active（上架，會員看得到）、Inactive（下架）、Suspended（暫停顯示）。只有 Active 的文章會出現在 App 中。
**注意：** 這裡不會主動發推播，只是把文章放進消息專區；若要通知會員，請另外到 Notification 建一則推播。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
