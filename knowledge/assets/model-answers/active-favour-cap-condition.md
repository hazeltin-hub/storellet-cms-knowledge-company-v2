---
schema_version: 2
id: "CMS-ACTIVE-FAVOUR-CAP-CONDITION"
title: "優惠券 Active Favour Cap 條件"
category: "Assets"
module: "Coupon Trigger Rule"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "優惠券有效數量上限 Active Favour Cap 條件點用？"
alternatives:
  - "優惠券有效優惠券上限條件"
  - "Active favour cap 係咩？"
  - "Transaction amount reaction 點限制會員持有優惠券數量？"
  - "Count-all mode 點計優惠券？"
keywords:
  - "active favour cap"
  - "有效優惠券上限"
  - "count-all"
  - "transaction amount reaction"
  - "優惠券"
source_title: "Storellet CMS 0.14.0 release notes"
source_path: "private release notes — not committed"
source_anchor: "有效優惠券上限條件"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### 功能用途

Active Favour Cap 係交易金額派券規則嘅額外條件，用嚟限制規則只喺會員優惠券數量符合設定時先繼續。0.14.0 已同時套用到：

- 交易後即時處理嘅派券規則。
- 系統定時處理嘅派券規則。

### 一般模式

- 按設定嘅優惠券及上限判斷會員目前有效優惠券數量。
- 支援針對多個優惠券設定相關條件。
- 條件只負責判斷反應規則應否繼續；實際派發內容仍由 Reaction 本身設定決定。

### Count-all 模式

- 開啟 Count-all 後，會按所選優惠券計算已使用／已過期記錄，而唔係以有效狀態作篩選。
- Count-all 模式開啟時，CMS 會停用多選，應按畫面限制選擇對應優惠券。
- Count-all 同一般 Active Favour Cap 計法唔同，設定前要先確認業務想限制「目前有效持有量」，定統計歷史已用／已過期數量。

### 建議設定及測試

1. 確認規則係即時處理定定時處理，以及要套用嘅品牌、優惠券同交易金額條件。
2. 確認要用一般 active 判斷，定 Count-all 歷史計法。
3. 選好優惠券同上限後，用以下會員情況分別測試：低於上限、等於上限、高於上限，以及有已使用／已過期記錄。
4. 定時處理嘅規則要等執行週期完成，再核對實際派發及紀錄。
5. 正式啟用前用測試會員驗證，避免因計法理解錯誤而大量漏派或多派。

### 注意事項

- Count-all 會忽略 active 狀態，唔可以將結果當成「會員目前有幾多張可用券」。
- 同一優惠券嘅有效、已使用、已過期數量可以有明顯差異；設定上限前要由活動負責人確認計算口徑。
- 如果實際 CMS 欄位提示同答案不一致，停止推斷並交產品或技術團隊確認目前版本行為。

## Internal Notes

- 呢條答案只描述 0.14.0 release notes 已確認嘅 Active Favour Cap、多券及 Count-all 行為。
