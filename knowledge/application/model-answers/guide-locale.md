---
schema_version: 2
id: "GUIDE-APPLICATION-LOCALE"
title: "Locale"
category: "Application"
module: "Locale"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "low"
locale: "zh-HK"
question: "Locale 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Locale 點用？"
  - "點樣設定 Locale？"
  - "Locale 有咩用途同注意事項？"
  - "What is Locale used for?"
keywords:
  - "Locale"
  - "Application"
  - "CMS"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Locale

**這是什麼：** 管理顧客 App 支援的語言，包含顯示名稱、iOS 與 Android 各自的語言字串檔。
**出現位置：** 顧客 App 全機的在地化文字（依顧客手機語言切換）。
**欄位／設定：**
- **Identifier** — 語言代碼（例如 zh-Hant、en）。新建時可填，建立後不可改。
- **Display Name** — 在後台清單與顧客端切換語言時顯示的名稱。
- **Strings Name / Strings File** — iOS 用的字串檔名稱與檔案（可下載既有檔再上傳新版本）。
- **Android Strings File** — Android 用的字串檔（可下載既有檔再上傳新版本）。
- **Default Locale Identifier** — 此語言在 iOS／Android 系統中的預設地區代碼。
**注意：** 所有欄位都是必填，未填會在按 Confirm 時被擋下。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
