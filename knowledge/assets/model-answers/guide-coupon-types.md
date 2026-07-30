---
schema_version: 2
id: "GUIDE-ASSETS-COUPON-TYPES"
title: "Coupon Trigger Rule 類型同 Coupon Delivery Type"
category: "Assets"
module: "Coupon"
intent: "reference"
status: "confirmed"
risk_level: "low"
locale: "zh-HK"
question: "Coupon Trigger Rule 有咩 Trigger Type？Coupon 有咩 Delivery Type？"
alternatives:
  - "Coupon Trigger Rule 類型有邊啲？"
  - "Coupon 派發方式有邊啲？"
  - "Trigger Rule Type 一覽"
  - "Coupon Delivery Type 解釋"
  - "Trigger Type 同 Delivery Type 分別"
  - "有咩 Trigger Rule Type？"
  - "Coupon 有幾種派發方式？"
keywords:
  - "Coupon Trigger Rule"
  - "Trigger Type"
  - "Delivery Type"
  - "派發方式"
  - "觸發類型"
  - "Coupon"
  - "Assets"
  - "CMS"
  - "優惠券類型"
  - "Welcome Pack"
  - "Birthday Gift"
  - "Anniversary Gift"
  - "Redeem"
  - "Push"
  - "Stamp"
  - "Replacement"
  - "Purchase"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "Coupon Trigger Rule；Coupon Delivery Type"
last_reviewed: "2026-07-30"
review_due: "2026-10-30"
---

## Model Answer

### 直接答案

**Coupon Trigger Rule Type（觸發類型）**同 **Coupon Delivery Type（派發方式）**係兩個唔同嘅概念：

- **Trigger Rule Type** 決定「點樣觸發」派發優惠券
- **Delivery Type** 決定優惠券「邊種方式」俾會員

### Coupon Trigger Rule Type（觸發類型）

主要嘅 Trigger Rule Type 包括：

1. **Birthday Trigger** — 生日派發（會員生日當日觸發）
2. **Monthly Trigger** — 每月派發（每月指定日期觸發）
3. **First Time Purchase** — 首次消費派發
4. **Lapse Period** — 久未消費召回（顧客指定時間無消費後觸發）
5. **Purchase Amount** — 消費金額門檻（達到指定金額觸發）
6. **Transaction Count** — 交易次數條件（累積指定次數觸發）
7. **Specific Item** — 指定品項（購買指定 POS Item Code 觸發）
8. **Point Bonus** — 積分加碼回贈（消費時額外送積分）

### Coupon Delivery Type（派發方式）

優惠券嘅 Delivery Type 決定會員「邊種方式」收到券：

1. **Welcome Pack** — 新會員迎新禮（會員註冊時自動派發）
2. **Birthday Gift** — 生日禮物（會員生日當日派發）
3. **Anniversary Gift** — 週年禮物（會員加入週年派發）
4. **Redeem** — 積分兌換（會員用積分換取）
5. **Push** — 主動派發（透過 Push 功能手動派發給指定會員）
6. **Stamp** — 集章獎勵（集滿指定印章數量後獲得）
7. **Replacement** — 券替換（用舊券換新券）
8. **Purchase** — 購買（會員用錢買優惠券）

### 主要用途對比

| Trigger Rule Type | 主要用途 | 對應 Delivery Type |
|---|---|---|
| Birthday Trigger | 生日自動派發 | Birthday Gift |
| Monthly Trigger | 每月固定派發 | Push 或其他 |
| Purchase Amount | 消費門檻獎勵 | Redeem、Push |
| Lapse Period | 召回久未光顧客戶 | Push、Welcome Pack |

### 設定注意事項

**Trigger Rule Type 選擇要點：**
- **Birthday/Monthly Trigger**：必須 untick "Submit To 3rd Party Event Tracking"
- **Monthly Trigger**：有排查功能，會檢查會員是否已有相關券
- **Lapse Period**：適合作「久未光顧」召回策略
- **新店設定**：需要檢查既有 Trigger Rules 有無包含新店

**Delivery Type 選擇要點：**
- **Welcome Pack**：新會員自動收到，唔可以 tick "Dispatch on Join"（除非所有 tier 都收到相同 offer）
- **Redeem**：需要設定 Redemption Point（兌換所需積分）
- **Purchase**：需要設定 Purchase Amount（售價）同 Purchase Add Point Amount
- **Push**：需要透過 Push 功能手動排程派發
- **Replacement**：需要指定被替換嘅原 Coupon List

### 運作例子

**例 1：生日自動派發**
- Trigger Rule Type：**Birthday Trigger**
- Delivery Type：**Birthday Gift**
- 結果：會員生日當日自動收到生日優惠券

**例 2：消費金額門檻**
- Trigger Rule Type：**Purchase Amount**（消費滿 $200）
- Delivery Type：**Redeem** 或 **Push**
- 結果：顧客消費滿 $200 後自動獲得優惠券

**例 3：新會員迎新**
- 無需 Trigger Rule
- Delivery Type：**Welcome Pack**
- 結果：新會員註冊時自動收到迎新禮

## Internal Notes

- Trigger Rule Type 同 Delivery Type 係兩個獨立設定，需要互相配合
- 唔同 Delivery Type 會顯示唔同欄位組合
- 設定前要確認品牌會員等級（Discount Card Level）配置
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核