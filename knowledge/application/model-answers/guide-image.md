---
schema_version: 2
id: "GUIDE-APPLICATION-IMAGE"
title: "Image"
category: "Application"
module: "Image"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "low"
locale: "zh-HK"
question: "Image 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Image 點用？"
  - "點樣設定 Image？"
  - "Image 有咩用途同注意事項？"
  - "What is Image used for?"
keywords:
  - "Image"
  - "Application"
  - "CMS"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Image

**這是什麼：** 橫幅／訊息可重用的圖片資料庫；每張圖上傳後會產生一個站位，可在 App Banner 的 Header／Body 內嵌入。
**出現位置：** 圖片本身不單獨顯示在 App 上，只會透過站位出現在 App Banner（以及任何支援站位的地方）。
**欄位／設定：**
- **Image Alias** — 這張圖在後台辨識用的名稱，必填。
- **Image Source** — 二選一：Upload Image（從本機上傳，可預覽）或 External URL（貼外部圖址，可預覽）。
- **Upload Image / External URL** — 依上面選擇顯示對應輸入。
- **Current Image** — 進入編輯時顯示目前圖、可複製的 Image URL，以及可複製的 Image Placeholder（長得像 `{{image.編號}}`），把這段貼到 App Banner 文案中即可顯示該圖。
- **Created By / At / Updated By / At** — 系統紀錄。
**注意：** 進入編輯模式後無法再切換圖片來源或重新上傳，要換圖請回到列表用 Add New 重建。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
