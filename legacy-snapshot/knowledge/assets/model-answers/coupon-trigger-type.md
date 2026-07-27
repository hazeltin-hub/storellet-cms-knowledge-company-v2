---
id: ASSETS-COUPON-TRIGGER-TYPE
category: Assets
module: "Assets"
intent: reference
status: confirmed
question: "Coupon Trigger Type 有邊幾種？"
alternatives:
  - "Coupon Trigger Type 種類"
  - "Trigger Type 有幾種"
  - "Coupon Trigger Rules Type"
  - "優惠券觸發類型"
  - "Trigger Type 分類"
  - "Coupon Trigger 有邊幾個 type"
keywords:
  - "Coupon Trigger Type"
  - "Trigger Type"
  - "優惠券觸發類型"
  - "觸發規則類型"
  - "Registration"
  - "Birthday"
  - "Monthly"
  - "Spending"
  - "Anniversary"
  - "Manual"
  - "Event"
source_title: "Assets Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

**Coupon Trigger Type** 有以下幾種主要類型，用於自動發放優惠券。

### Coupon Trigger Type 種類

#### **1. Registration Type（註冊觸發）**
- **用途**：新用戶註冊時自動派發優惠券
- **適用場景**：新會員 Welcome Pack
- **設定要求**：無需特殊設定，註冊完成即觸發
- **常見優惠**：新會員折扣券、歡迎優惠

#### **2. Birthday Type（生日觸發）**
- **用途**：用戶生日時自動派發優惠券
- **適用場景**：生日優惠、生日月特別優惠
- **設定要求**：需要用戶填寫生日資料
- **常見優惠**：生日折扣券、免費物品券

#### **3. Monthly Type（每月觸發）**
- **用途**：每月指定日期自動派發優惠券
- **適用場景**：定期會員福利、月度優惠
- **設定要求**：需設定 Day of Month（如每月 1 號或 15 號）
- **常見優惠**：月度會員券、定期折扣券

#### **4. Anniversary Type（週年觸發）**
- **用途**：用戶註冊週年時自動派發優惠券
- **適用場景**：會員週年慶
- **設定要求**：基於用戶註冊日期計算
- **常見優惠**：週年特別優惠、升級券

#### **5. Spending Type（消費觸發）**
- **用途**：用戶消費達到指定金額時派發優惠券
- **適用場景**：消費回饋、滿額送券
- **設定要求**：需設定消費金額門檻
- **常見優惠**：消費滿額券、回贈券

#### **6. Milestone Type（里程碑觸發）**
- **用途**：用戶達到特定里程碑時派發優惠券
- **適用場景**：會員等級升級、積分達標
- **設定要求**：需設定里程碑條件
- **常見優惠**：升級祝賀券、達標獎勵券

#### **7. Manual Type（手動觸發）**
- **用途**：管理員手動派發優惠券
- **適用場景**：特殊活動、客服補償、營銷活動
- **設定要求**：需後台操作觸發
- **常見優惠**：活動優惠券、補償券

#### **8. Event Type（事件觸發）**
- **用途**：特定事件或條件發生時派發優惠券
- **適用場景**：節日活動、特殊推廣
- **設定要求**：需設定事件條件
- **常見優惠**：節日優惠券、活動專用券

### 設定 Trigger Type 步驟

#### **Step 1：選擇 Type**
1. 進入 Create Coupon Trigger Rule 頁面
2. 在 **Type** 欄位選擇觸發類型

#### **Step 2：設定類型特定參數**
- **Monthly**：設定 Day of Month（1/15/指定日期）
- **Spending**：設定消費金額門檻
- **Milestone**：設定里程碑條件

#### **Step 3：關聯 Coupon**
1. 在 **Coupon List** 選擇要派發的優惠券
2. 設定每個優惠券的數量

#### **Step 4：設定有效期**
1. 設定 **Effective Period**（Start Date - End Date）
2. 確保 trigger rule 有效期涵蓋整個活動期間

#### **Step 5：設定會員級別限制**
- **Required Discount Card Level**：可選擇特定會員級別
- **None**：所有會員都可觸發

### 使用建議

#### **常用 Trigger Type 組合**
- **新會員**：Registration + Birthday
- **活躍會員**：Monthly + Anniversary
- **高消費會員**：Spending + Milestone
- **活動推廣**：Manual + Event

#### **注意事項**
- 不同 Type 可能需要不同的設定參數
- Trigger Rule 需要設定為 Active 才會生效
- 確保關聯的 Coupon 也有足夠的數量
- 定期檢查 Trigger Rule 的有效期

## 相關 Model Answers

- **Coupon Trigger Rules List**：`coupon-trigger-rules-list.md`
- **Create Coupon**：`create-coupon.md`
- **Assets Creation Guide**：`assets-creation-guide.md`