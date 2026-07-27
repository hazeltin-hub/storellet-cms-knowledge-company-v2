---
schema_version: 2
id: "GUIDE-PUSH-NOTIFICATION"
title: "Notification"
category: "Push"
module: "Notification"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Notification 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Notification 點用？"
  - "點樣設定 Notification？"
  - "Notification 有咩用途同注意事項？"
  - "What is Notification used for?"
keywords:
  - "Notification"
  - "Push"
  - "推播"
  - "通知"
  - "CMS"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "Notification"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Notification

**這是什麼：** 對會員發送一則推播通知與（或）App 收件匣訊息，可排程，可指定點擊後打開 App 內某個畫面。
**出現位置：** 顧客 App 的推播通知 ＋ App 內收件匣（兩者可獨立開關）。
**欄位／設定：**
- **Push Target** — All Members（全部會員）、Brand Members（某品牌會員）或 Custom (Upload File)（自訂名單，上載 CSV）。
- **Brand** — 對象品牌。僅在 Push Target 為 Brand Members 時出現。
- **Receivers** — 上載 CSV 收件人清單。僅在 Push Target 為 Custom 時出現。
- **Title (Eng) / Title (Chi)** — 推播標題的英文與中文版本。
- **Message (Eng) / Message (Chi)** — 推播內文的英文與中文版本。中英文皆為必填。
- **Same Inbox Message** — 勾起來時，App 收件匣裡的標題與內文直接沿用上面的推播文字（此時下面的收件匣欄位會隱藏）。不勾時可為收件匣另外寫一套文字。
- **Inbox Title (Eng/Chi) / Inbox Message (Eng/Chi)** — App 收件匣訊息的標題與內文。僅在 Same Inbox Message 未勾選時填寫。
- **Image** — 附在訊息上的圖片。
- **Notification Type** — 決定會員點擊推播後被打開的 App 畫面，例如 Home、Promotion、Merchant（各種品牌頁）、Tag Group、Popup Webview、Story、Eshop Item、Merchant (Specific Coupon／Specific Redeemable) 等。不同類型會帶出不同的額外欄位。
- **Push Date / Push Time** — 發送日期與時間。
- **Push to device: Storellet App / Branded App** — 要推到主 Storellet App 還是品牌專屬 App。僅在 Push Target 為 Brand Members 時出現，且兩者至少須勾一個。
- **Push Needed** — 勾起來才會發送推播通知到裝置。不勾則完全不發推播。
- **Inbox Needed** — 勾起來才會把訊息寫進 App 收件匣。
- **Highlighted Message Needed** — 勾起來會在 App 內把這則訊息標示為「精選／高亮」，並需設定結束日期。
- **Highlighted Message End Date** — 高亮訊息的顯示截止日。
- **Deep Link** — 系統自動產生的深層連結（僅在已存在時顯示，可預覽），供行銷用途複製使用。
**注意：** Push Needed 與 Inbox Needed 是兩個獨立開關——可以「只發推播不進收件匣」「只進收件匣不推播」或「兩者都做」，看你的活動設計。發送完成的訊息無法在列表上刪除，只有尚未發送的可以刪。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
