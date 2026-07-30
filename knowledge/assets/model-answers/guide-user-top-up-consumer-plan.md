---
schema_version: 2
id: "GUIDE-ASSETS-USER-TOP-UP-CONSUMER-PLAN"
title: "User Top Up Consumer Plan"
category: "Assets"
module: "User Top Up Consumer Plan"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "User Top Up Consumer Plan 係做咩，有咩欄位同注意事項？"
alternatives:
  - "User Top Up Consumer Plan 點用？"
  - "點樣設定 User Top Up Consumer Plan？"
  - "User Top Up Consumer Plan 有咩用途同注意事項？"
  - "What is User Top Up Consumer Plan used for?"
keywords:
  - "User Top Up Consumer Plan"
  - "Assets"
  - "User"
  - "Top"
  - "Up"
  - "Consumer"
  - "Plan"
  - "電子錢包"
  - "儲值"
  - "CMS"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### User Top Up Consumer Plan

**這是什麼：** 電子錢包「消費／扣款」方案，定義某些消費項目從錢包扣款時的顯示金額與實際扣款金額。
**出現位置：** 顧客 App（錢包交易紀錄）；收銀機結帳時套用。
**欄位／設定：**
- **Brand** — 所屬品牌。
- **Name（中英文）** — 方案名稱。
- **Display Consume Amount** — 顧客看到的扣款金額。
- **Actual Consume Amount** — 實際從錢包扣除的金額（可與顯示額不同，做補貼或折扣）。
- **Expiry Date / Status** — 方案效期與上下架。
**注意：** Display 與 Actual 分開，可做「顯示扣 $100，實際只扣 $80」的內部補貼方案，差額由品牌吸收。

---

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
