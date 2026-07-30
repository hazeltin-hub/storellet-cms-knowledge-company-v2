---
schema_version: 2
id: "GUIDE-ASSETS-SURVEY"
title: "Survey"
category: "Assets"
module: "Survey"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Survey 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Survey 點用？"
  - "點樣設定 Survey？"
  - "Survey 有咩用途同注意事項？"
  - "What is Survey used for?"
keywords:
  - "Survey"
  - "Assets"
  - "問卷"
  - "CMS"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Survey

**這是什麼：** 顧客問卷，可自訂多個選擇題或開放題，收集回覆後可在後台查看。
**出現位置：** 顧客 App（以圖文卡片呈現，含加入與提交按鈕）。
**欄位／設定：**
- **Brand** — 所屬品牌。
- **Name（中英文，必填）** — 問卷標題。
- **Image（中英文）** — 問卷主圖。
- **Description（中英文）** — 問卷簡介。
- **Thank You Message / Finished Message（中英文）** — 提交後的感謝訊息與完成訊息。
- **Join Button / Submit Button（中英文）** — 「加入」與「提交」按鈕的顯示文字。
- **Question（可新增多題）** — 每題含：
  - **Type** — Multiple Choice 或 Open Question。
  - **Sequence** — 題目排序。
  - **Title（中英文）** — 題目。
  - **Min And Max** — 選擇題的最少／最多勾選數。
  - **Option（可新增多個）** — 每個選項含 Sequence、Code、Answer（中英文）。
- **Effective Period / White Label Only / Status** — 同上。
**注意：** 題目類型切成 Open Question 時，選項區塊會自動隱藏。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
