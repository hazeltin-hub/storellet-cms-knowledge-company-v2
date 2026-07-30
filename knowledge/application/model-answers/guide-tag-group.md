---
schema_version: 2
id: "GUIDE-APPLICATION-TAG-GROUP"
title: "Tag Group"
category: "Application"
module: "Tag Group"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "low"
locale: "zh-HK"
question: "Tag Group 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Tag Group 點用？"
  - "點樣設定 Tag Group？"
  - "Tag Group 有咩用途同注意事項？"
  - "What is Tag Group used for?"
keywords:
  - "Tag Group"
  - "Application"
  - "Tag"
  - "Group"
  - "CMS"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Tag Group

**這是什麼：** 管理顧客 App 瀏覽頁的分類群組，分為「品牌分類」與「地理分類」兩種。
**出現位置：** 顧客 App 首頁的瀏覽／篩選分類，以及 Front Page Setting 中可挑選的分類區塊。
**欄位／設定：**
- **Type** — 選擇 Geo Location 或 Brand（Asset 為系統用，不能選）。
- **Name** — 後台辨識用名稱。
- **Title (Eng / Chi)** — 顧客 App 上顯示的分類標題（英／繁中）。
- **Icon with Title** — 是否在 App 中連同圖示一起顯示標題。
- **Headline (Eng / Chi) / Description (Eng / Chi)** — 分類頁頂部的標語與說明文字。
- **Detail Url (Eng / Chi) / Detail Url Wordings (Eng / Chi)** — 在 App 點入分類詳情頁時前往的網址，與按鈕文字。
- **Background Image (Eng / Chi) / Icon Image (Eng / Chi)** — 分類的背景圖與圖示（英／繁中），可上傳。
- **Icon with Fade Color** — 圖示是否套用淡色效果。
- **Background Color / Text Color** — 分類卡的背景色與文字色（附色盤）。
- **Tag Wordings / Geo Location Tag Wordings** — 這個分類底下要包含哪些標籤（可多選；Brand 類顯示前者，Geo 類顯示後者）。
- **Geo Location / Distance (in meter)** — 當類型為 Geo 時，用互動地圖指定中心點與涵蓋半徑（公尺）。
- **Priority** — 在 App 上的排列先後。
- **Status** — Active 顧客可見；Inactive 顧客看不到。
**注意：** 切換 Type 時會自動清空另一類的標籤與地理位置，務必先選好 Type 再填內容。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
