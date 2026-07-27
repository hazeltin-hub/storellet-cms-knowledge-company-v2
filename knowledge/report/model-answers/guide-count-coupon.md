---
schema_version: 2
id: "GUIDE-REPORT-COUNT-COUPON"
title: "Count Coupon"
category: "Report"
module: "Count Coupon"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "low"
locale: "zh-HK"
question: "Count Coupon 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Count Coupon 點用？"
  - "點樣設定 Count Coupon？"
  - "Count Coupon 有咩用途同注意事項？"
  - "What is Count Coupon used for?"
keywords:
  - "Count Coupon"
  - "Report"
  - "Count"
  - "Coupon"
  - "優惠券"
  - "券"
  - "CMS"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "Count Coupon"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Count Coupon

**這是什麼：** 單次優惠券數量查詢工具。選擇某張優惠券、查詢基準與一個時間點，按下按鈕即可得到「截至該時間為止，符合條件的券數量」。查詢結果以彈窗顯示一個數字，不會列出明細，也無法匯出。
**出現位置：** 後台檢視；結果只在畫面上以彈窗顯示，不提供 Excel 或其他匯出。適合行銷／管理層做快速點算（例如確認某券迄今已派發多少張），需要正式報表時請改用 Auto Regular Alarm 排程。需具備特定權限才看得到此選單。
**篩選／欄位：**
- **Brand** — 選擇品牌；切換後 Coupon 下拉選單會重新載入該品牌的優惠券。
- **Coupon** — 選擇要查詢的優惠券（清單包含已停用、已過期、尚未生效的券，並會顯示每張券的編號與狀態方便辨識）。
- **Request Type** — 數量的計算基準，有五種：
  - Issue After Request Date — 於指定時間「之後」發出的數量。
  - Used After Request Date — 於指定時間「之後」被使用的數量。
  - Expired After Request Date — 於指定時間「之後」過期的數量。
  - Used After Issue On Request Date — 發出後、於指定時間使用掉的數量。
  - Expired After Issue On Request Date — 發出後、於指定時間已過期的數量。
- **Request Date Time** — 查詢的基準日期與時間（預設帶入現在時間，可手動修改）。
- **Request** — 執行查詢；系統會顯示載入動畫，完成後以彈窗顯示數量。
**注意：** 每次查詢只回傳一個總數，不會列出會員或券號明細。若需要名單或可匯出的版本，請使用 Auto Regular Alarm 排程並勾選 Coupon Issued 或 Coupon Used。

---

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
