---
schema_version: 2
id: "GUIDE-PUSH-BATCH-POINT-ADJUSTMENT"
title: "Batch Point Adjustment"
category: "Push"
module: "Batch Point Adjustment"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Batch Point Adjustment 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Batch Point Adjustment 點用？"
  - "點樣設定 Batch Point Adjustment？"
  - "Batch Point Adjustment 有咩用途同注意事項？"
  - "What is Batch Point Adjustment used for?"
  - "Push 入面 Batch Point Adjustment 係做咩？"
  - "Push tab 嘅 Batch Point Adjustment"
  - "Batch Point Adjustment 喺 Push 嘅功能"
  - "點樣用 Batch Point Adjustment 調整會員積分？"
  - "Batch Point Adjustment CSV 格式係點樣？"
  - "批量積分调整 點樣做？"
  - "積分批量調整 Push 入面點搵？"
keywords:
  - "Batch Point Adjustment"
  - "Push"
  - "Batch"
  - "Point"
  - "Adjustment"
  - "積分"
  - "點數"
  - "CMS"
  - "批量調整"
  - "積分調整"
  - "點數調整"
  - "CSV"
  - "排程"
  - "會員積分"
  - "補發積分"
  - "扣減積分"
  - "批量積分"
  - "批量點數"
  - "Push tab"
  - "推播服務"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Batch Point Adjustment

**這是什麼：** 上載一份 CSV，排程在某個時間大量調整一批會員的點數結餘（例如補發、扣減）。
**出現位置：** 顧客 App 的點數結餘（顧客只看到結餘變化，不會看到「這是一筆批次調整」）。純後台作業。
**欄位／設定：**
- **Brand** — 要調整的品牌。
- **Scheduled Date / Scheduled Time** — 排程執行的日期與時間。系統會在這個時間才套用調整，不是按下 Confirm 就立即生效。
- **CSV** — 上載包含調整明細的檔案。
**注意：** 列表上的 Status 會依序顯示 Pending → Sending → Sent，代表整批調整的進度。實際點數變化以排程時間為準，建立後無法在這個畫面編輯或取消。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
