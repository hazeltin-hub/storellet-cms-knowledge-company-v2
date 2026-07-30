---
schema_version: 2
id: "GUIDE-APPLICATION-REGION"
title: "Region"
category: "Application"
module: "Region"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "low"
locale: "zh-HK"
question: "Region 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Region 點用？"
  - "點樣設定 Region？"
  - "Region 有咩用途同注意事項？"
  - "What is Region used for?"
keywords:
  - "Region"
  - "Application"
  - "CMS"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Region

**這是什麼：** 管理顧客 App 可選擇的地區（例如 HK、TW、MO、CN），每個地區帶有電話國碼、可用語言、貨幣、聯絡管道與教學影片。
**出現位置：** 顧客 App 註冊／登入時的「選擇地區」、App 設定頁的聯絡信箱與社群連結、各教學影片播放處，以及顧客切換地區時可用的語言清單。
**欄位／設定：**
- **Identifier** — 地區代碼（新建時可填，建立後不可改）。
- **API Prefix** — 此地區使用的後端服務位置（由技術團隊填寫）。
- **Name** — 地區顯示名稱。
- **Country Phone Prefix** — 此地區的電話國碼（例如 852、886）。
- **Available Phone Prefix List For Login** — 顧客登入時可選擇的電話國碼清單，可多選。
- **Currency Locale Identifier** — 此地區使用的貨幣格式代碼。
- **Official Web Link / Facebook Link** — 顧客 App 設定頁中的官方網站與 Facebook 連結。
- **CS Email / Support Email** — 顧客 App 設定頁顯示的客服信箱與技術支援信箱。
- **How To Use Video / Stamp Combo Video / Main Video / Bingo Game Video / Point Earn Video** — 顧客 App 中各教學／宣傳影片的網址。
- **Priority** — 地區在選擇清單中的排列先後（數字小的在前）。
- **Available Locale Group** — 此地區提供哪些語言；每個語言可單獨設定此語言下的條款、隱私政策、註冊備註、年齡層與性別選項。
**注意：** 每個地區的 Available Locale 都必須填齊條款與隱私政策，否則按 Confirm 會被擋下。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
