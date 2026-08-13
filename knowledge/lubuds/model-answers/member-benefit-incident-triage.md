---
schema_version: 2
id: "LUBUDS-MEMBER-BENEFIT-INCIDENT-TRIAGE"
title: "LUBUDS 會員積分／券／印花異常處理清單"
category: "LUBUDS Operations"
module: "Incident Triage"
intent: "support_workflow"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "會員話少咗積分、優惠券或印花，客服應該先收集咩資料同點處理？"
alternatives:
  - "會員權益 missing 點查？"
  - "點樣處理 missing points case？"
  - "Coupon／stamp 未派發應該點跟？"
  - "Member benefit incident checklist"
keywords:
  - "LUBUDS"
  - "missing points"
  - "missing coupon"
  - "missing stamp"
  - "會員權益"
  - "incident"
  - "補分"
  - "補券"
source_title: "Private LUBUDS project conversations"
source_path: "private source — not committed"
source_anchor: "2024-06 onward"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### 先查原因，唔好即刻補發

積分、優惠券或印花異常可能源自交易未上數、reverse 未完成、會員綁定錯誤、Tier／活動條件不符、資料遷移、第三方同步、排程延遲或 App 顯示問題。直接補發可能令會員收到雙份權益。

### 客服最少收集資料

敏感值只可經公司批准嘅安全渠道傳送：

- 問題類型：積分、優惠券、印花、Tier 或多項
- 發生日期、時間、店舖及大概消費金額
- 會員識別資料（避免在公開渠道貼完整電話／會員 ID）
- Invoice／交易識別資料
- 預期權益與實際畫面
- 有無付款、void、退款、重試或轉換帳戶
- App 版本、iOS／Android 及相關截圖

### 分流排查

1. **CMS 有、App 無**：先查 App cache、版本及顯示邏輯。
2. **CMS 無、POS 有交易**：查 `closeTransaction`、活動 trigger 及交易 log。
3. **Void 後未還原**：查 `reverseTransaction` 及各權益 reverse 規則。
4. **只影響某 Tier／店舖**：查 Tier priority、Brand／Shop、活動及 POS key 範圍。
5. **涉及 migration／批次**：同 cut-off snapshot、匯入名單及 exception list 對數。
6. **涉及第三方**：用 timestamp 對 Qonbay、Shopline、GoPOS、Inline 或 Braze 兩邊 log。

### 補處理原則

- 只可按已核實嘅差額補發或扣回。
- 記錄原因、批准人、原值、改後值、操作人及時間。
- 批量事故先停止相關 trigger／flow，確認受影響範圍，再用已覆核名單處理。
- 完成後要通知客服可用嘅一致回覆及監察期。

## Internal Notes

- 呢條答案綜合多次 LUBUDS 支援個案，刻意不包含任何真實會員或交易資料。
