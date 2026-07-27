---
id: ASSETS-CREATE-COUPON
category: Assets
module: "Assets"
intent: reference
status: confirmed
question: "點樣 create Coupon？"
alternatives:
  - "如何創建優惠券"
  - "Coupon 係點樣 create"
  - "Create Coupon 步驟"
  - "新增優惠券步驟"
keywords:
  - "Create Coupon"
  - "創建優惠券"
  - "Coupon"
  - "優惠券"
source_title: "Assets Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

**Create Coupon** 係創建優惠券活動嘅功能頁面。

### 主要欄位說明

#### **基本設定**
- **Import File**（選填）：批量上傳配置
- **Brand**（必填）：選擇所屬品牌
- **Coupon Name**（必填）：優惠券名稱
- **Coupon Type**（必填）：優惠券類型（Discount/Fixed/BOGOF）

#### **折扣設定**
- **Discount Type**（必填）：折扣類型（Percentage/Fixed Amount）
- **Discount Value**（必填）：折扣數值
- **Max Discount Amount**（選填）：最大折扣金額

#### **使用條件**
- **Minimum Spend**（選填）：最低消費金額
- **Applicable Brands**（選填）：適用品牌
- **Applicable Categories**（選填）：適用類別
- **Excluded Items**（選填）：排除商品

#### **發行設定**
- **Total Quantity**（必填）：總發行數量
- **Per User Limit**（選填）：每用戶限領數量
- **Distribution Method**（必填）：發放方式（Auto/Code/QR）

#### **有效期和顯示**
- **Start Date**（必填）：開始日期
- **End Date**（必填）：結束日期
- **Valid Period**（選填）：領取後有效期
- **Available to White Label App Only**（選填）
- **Available to Storellet App Only**（選填）
- **Status**（必填）：Active

#### **內容說明**
- **Description**（選填）：優惠券描述
- **Terms & Conditions**（建議必填）：使用條款
- **How To Use**（建議必填）：使用說明

### Create Coupon 步驟

#### **Step 1：基本設定**
1. 選擇 **Brand**
2. 輸入 **Coupon Name**
3. 選擇 **Coupon Type**

#### **Step 2：折扣設定**
1. 選擇 **Discount Type**（Percentage/Fixed Amount）
2. 設定 **Discount Value**
3. 可選設定 **Max Discount Amount**

#### **Step 3：使用條件**
1. 可選設定 **Minimum Spend**
2. 可選設定 **Applicable Brands** 和 **Applicable Categories**
3. 可選設定 **Excluded Items**

#### **Step 4：發行設定**
1. 設定 **Total Quantity**
2. 可選設定 **Per User Limit**
3. 選擇 **Distribution Method**

#### **Step 5：有效期和顯示**
1. 設定 **Start Date** 和 **End Date**
2. 可選設定 **Valid Period**（領取後有效期）
3. 設定 App 顯示範圍

#### **Step 6：內容說明**
1. 填寫 **Description**
2. 填寫 **Terms & Conditions**
3. 填寫 **How To Use**

#### **Step 7：狀態和保存**
1. 設定 **Status** 為 **Active**
2. 確認所有資料正確
3. 點擊 **Create** 按鈕

## 常見配置例子

### **飲食優惠券**
- **Brand**：ABC Restaurant
- **Coupon Name**：9折優惠券
- **Coupon Type**：Discount
- **Discount Type**：Percentage
- **Discount Value**：10（代表 10% off）
- **Total Quantity**：1000
- **Distribution Method**：Auto
- **Status**：Active

### **固定金額優惠券**
- **Brand**：ABC Store
- **Coupon Name**：$20現金券
- **Coupon Type**：Fixed
- **Discount Type**：Fixed Amount
- **Discount Value**：20
- **Minimum Spend**：100
- **Total Quantity**：500
- **Status**：Active

## 注意事項

- Coupon Type 需同實際優惠類型一致
- Discount Value 按類型填寫（百分比或金額）
- Total Quantity 控制優惠券總發行量
- Per User Limit 防止用戶領取過多
- Terms & Conditions 建議必填，保障商家權益
- 創建後可以在 Coupons List 再做編輯修改