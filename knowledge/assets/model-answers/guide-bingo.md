---
schema_version: 2
id: "GUIDE-ASSETS-BINGO"
title: "Bingo"
category: "Assets"
module: "Bingo"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Bingo 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Bingo 點用？"
  - "點樣設定 Bingo？"
  - "Bingo 有咩用途同注意事項？"
  - "What is Bingo used for?"
keywords:
  - "Bingo"
  - "Assets"
  - "賓果"
  - "集印"
  - "CMS"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Bingo

**這是什麼：** 賓果活動（以印花集卡的遊戲化玩法），顧客在指定期間／金額範圍內集印花換獎。
**出現位置：** 顧客 App（賓果活動卡）；收銀機在符合條件時派發印花。
**欄位／設定：**
- **Brand** — 所屬品牌。
- **Name（Primary / Secondary Language）** — 活動名稱（必填）。
- **Image** — 活動印花圖。
- **Description / Terms and Conditions / How To Use** — 說明文字，分中英文。
- **Day Period 1 / 2 / 3** — 為每個時段勾選適用的星期（Mon–Sun）。
- **Type** — Day Part（時段制，需填時段）或 Amount Range（消費金額範圍制）。
- **Effective Period** — 活動有效期。
- **Day Part Time Slot 1 / 2 / 3** — 時段制的起止時間，僅 Day Part 顯示。
- **Day Part Slot 1 / 2 / 3** — 各時段名稱（中英文）。
- **Amount Range 1 / 2 / 3** — 金額範圍制的上下限。
- **Reward 1–8** — 集到第 N 個印花時派發的優惠券，每格對應一個印花計數器。
- **White Label Only / Storellet Only / Not Transferable / Status** — 同上。
**注意：** 選 Amount Range 時，時段欄位會隱藏，系統改用消費金額判定。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
