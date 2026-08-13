---
schema_version: 2
id: "LUBUDS-DATA-MIGRATION-VALIDATION"
title: "LUBUDS 會員資料遷移驗證原則"
category: "LUBUDS Operations"
module: "Data Migration"
intent: "support_workflow"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "LUBUDS 會員資料遷移可唔可以只靠報表重建積分同優惠券？"
alternatives:
  - "Hard landing 可唔可以還原所有會員資料？"
  - "點樣驗證 migration 後嘅 points 同 coupons？"
  - "資料遷移有咩風險？"
  - "Can reports fully restore member balances and coupons?"
keywords:
  - "LUBUDS"
  - "data migration"
  - "hard landing"
  - "snapshot"
  - "積分"
  - "優惠券"
  - "會員資料"
source_title: "Private LUBUDS project conversations"
source_path: "private source — not committed"
source_anchor: "2024-02 to 2024-06"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### 唔可以假設報表等於完整原始資料

只靠匯出報表通常無法百分百重建舊系統狀態，尤其係「邊個會員擁有邊張優惠券」、優惠券使用狀態、積分結餘，以及交易反向處理。缺少原始關聯表時，從交易紀錄重新計算有機會造成漏數或重複。

### 建議遷移方式

1. 優先取得完整資料庫或涵蓋必要資料表嘅 API／原始匯出。
2. 為會員、積分、優惠券、會籍及交易建立一對一欄位 mapping。
3. 如果只能 hard landing，應使用已確認時間點嘅 snapshot；唔好自行用不完整 log 推算餘額。
4. 遷移前凍結會改變相關數據嘅功能，或至少記錄 cut-off time。
5. 遷移後抽樣比對會員身份、積分、優惠券、會籍有效期及交易歷史。
6. 為無法對應嘅資料建立 exception list，由業務負責人決定處理方式。

### 必須向持份者講清楚

- Hard landing 未必可以重建成與舊資料庫完全相同。
- 未提供嘅關聯資料可能永久無法推算。
- 補分、補券或改會籍必須根據已批准名單執行，並保留前後數值及原因。

### 注意事項

- 唔好將包含電話、會員 ID 或交易明細嘅原始 CSV 放入公開 repository。
- 唔好用單一會員個案驗證整批遷移成功；要有多個 tier、不同狀態及不同權益嘅樣本。

## Internal Notes

- 呢條答案整理歷史 migration 討論中一致嘅風險及驗證原則，不包含任何客戶記錄。
