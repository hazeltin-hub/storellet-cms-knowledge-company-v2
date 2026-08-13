---
schema_version: 2
id: "GUIDE-ASSETS-STAMP"
title: "Stamp"
category: "Assets"
module: "Stamp"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Stamp 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Stamp 點用？"
  - "點樣設定 Stamp？"
  - "Stamp 有咩用途同注意事項？"
  - "印花點樣批量匯出匯入？"
  - "Stamp Trigger Rule 可唔可以 bulk export import？"
  - "What is Stamp used for?"
keywords:
  - "Stamp"
  - "Assets"
  - "印花"
  - "印花卡"
  - "CMS"
  - "批量匯出"
  - "批量匯入"
  - "bulk export import"
  - "Stamp Trigger Rule"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### Stamp

**這是什麼：** 集印活動（印花卡），顧客集滿指定格數可換禮物；支援特別印花與時段加倍。
**出現位置：** 顧客 App（印花卡）；收銀機在符合條件時派發印花。
**欄位／設定：**
- **Brand** — 所屬品牌（必選；會連動顯示此品牌的折扣卡清單）。
- **Required Discount Card Level** — 勾選哪些會員等級才能參與此活動。
- **Name / Description / Terms and Conditions（中英文）** — 活動文案。
- **Promotion Message（中英文）** — 推廣訊息，可插入 `{leftStampCount}`、`{totalStampCount}`、`{normalStampCount}`、`{specialStampCount}` 等變數顯示即時印花數。
- **Image（中英文）** — 活動主圖。
- **Campaign Period** — 活動期間。
- **Normal Stamp Image** — 一般印花的圖示。
- **Welcome Pack** — 迎新印花數量。
- **Special Stamp** — 是否啟用特別印花（勾選後展開下述欄位）。
- **Special Stamp Image** — 特別印花圖。
- **Special Stamp Probability** — 特別印花的出現機率（0–100%）。
- **Special Stamp Daily Limit** — 特別印花每日上限。
- **Type** — By Transaction Amount（依消費金額）或 By Purchased Item（依購買品項）。
- **Transaction Amount / Purchase Item Code** — 依 Type 切換：前者填最低金額與加碼金額；後者填品項代碼（以逗號分隔）。兩者都可加「自訂條件」，為特定分店或訂單類型設獨立門檻。
- **Total Space** — 印花卡總格數。
- **Gift** — 新增一個或多個禮物（優惠券），每個可指定位置（集到第幾格送）。
- **Has Week Day Time Criteria** — 勾選後可為星期日至星期六各自指定時段與印花倍數（例如週末加倍）。
- **Auto Redeem / Multiple Gift Auto Redeem** — 集滿自動兌換。兩者互斥，只能擇一。
- **Transferable / Status（Active / Inactive）** — 可轉贈與否、上下架。
**注意：** Auto Redeem 與 Multiple Gift Auto Redeem 互斥；勾選其一會自動取消另一個。

### 0.14.0 批量匯出／匯入

- CMS 已支援 **印花活動（Stamp Campaign）** 批量匯出／匯入。
- CMS 同時支援 **印花觸發規則（Stamp Trigger Rule）** 批量匯出／匯入。
- 建議先從目標環境匯出現有設定作模板及備份，再修改匯入內容。
- 匯入前要核對品牌、活動期間、印花圖、Gift Coupon、店舖、條件及通知設定；跨環境時尤其要確認所有 ID 都存在並屬於正確品牌。
- 批量匯入會一次影響多個活動／規則，正式執行前應先喺測試環境驗證，並保留匯出檔及操作紀錄。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
