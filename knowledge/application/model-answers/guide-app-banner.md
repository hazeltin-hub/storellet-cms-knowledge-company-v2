---
schema_version: 2
id: "GUIDE-APPLICATION-APP-BANNER"
title: "App Banner"
category: "Application"
module: "App Banner"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "App Banner 係做咩，有咩欄位同注意事項？"
alternatives:
  - "App Banner 點用？"
  - "點樣設定 App Banner？"
  - "App Banner 有咩用途同注意事項？"
  - "What is App Banner used for?"
keywords:
  - "App Banner"
  - "Application"
  - "App"
  - "Banner"
  - "應用程式"
  - "CMS"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "App Banner"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### App Banner

**這是什麼：** 顧客 App 頂部的橫幅訊息，可依「所有顧客」或「已加入某品牌的顧客」分別顯示不同文案與按鈕，並可設定上下檔期間。
**出現位置：** 顧客 App 首頁最上方的橫幅。
**欄位／設定：**
- **App Ids** — 這則橫幅要出現在哪些 App，可多選。
- **Criteria** — 觸發條件類型；選 Joined 表示「只顯示給已加入某品牌的顧客」，此時需再選 Brand Id。其他類型為不區分對象的全員橫幅。
- **Criteria Meet（符合條件時顯示）** — Header Zh/En、Body Zh/EN、Button Wording Zh/EN、Button Action（Deeplink，顧客點按鈕時前往的 App 頁或網址），以及背景色、文字色、按鈕底色、按鈕文字色。
- **Criteria Not Meet（未符合條件時顯示，僅 Joined 才會出現這一整區）** — 同上四組文案加四組顏色，給「還沒加入這個品牌」的顧客看。
- **Active** — 勾選才會上線。
- **Start Time / End Time** — 橫幅的有效上下檔時間，未填會被擋下。
- 文案欄支援三種站位：`{{brand.name}}`（品牌名稱）、`{{userPoint.point}}`（顧客點數），以及在 Image 頁上傳圖片後取得的 `{{image.編號}}` 圖片站位；圖片建議高度 21 pixel 或使用 SVG。
- **Created By / At / Updated By / At** — 系統紀錄。
**注意：** 填完 Meet 區所有必填（中英 Header、Body、Button Wording、Button Action）才能儲存；若選 Joined，Not Meet 區的 Header／Body 同樣不能留空。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
