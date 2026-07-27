---
id: ASSETS-CREATE-STAMP
category: Assets
module: "Assets"
intent: reference
status: confirmed
question: "點樣 create Stamp？"
alternatives:
  - "如何創建印花"
  - "Stamp 係點樣 create"
  - "Create new Stamp 步驟"
keywords:
  - "Create Stamp"
  - "創建印花"
  - "Stamp"
  - "印花卡"
source_title: "Assets Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

**Create new Stamp** 係創建印花設計和規則嘅功能頁面。

### 主要欄位說明

#### **基本設定**
- **Import File**（選填）：批量上傳配置
- **Brand**（必填）：選擇所屬品牌
- **Stamp Name**（必填）：印花名稱
- **Required Count**（必填）：所需印花數量

#### **圖片和設計**
- **Stamp Image**（必填）：印花圖示
- **Completed Image**（必填）：完成後圖示
- **Background Image**（選填）：背景圖片

#### **獎勵設定**
- **Reward Type**（必填）：獎勵類型（Points/Coupon/Discount）
- **Reward Value**（必填）：獎勵數值

#### **有效期和顯示**
- **Start Date**（必填）：活動開始日期
- **End Date**（必填）：活動結束日期
- **Available to White Label App Only**（選填）
- **Available to Storellet App Only**（選填）
- **Status**（必填）：Active

### Create Stamp 步驟

#### **Step 1：基本設定**
1. 選擇 **Brand**
2. 輸入 **Stamp Name**
3. 設定 **Required Count**（例如：收集 10 個印花）

#### **Step 2：圖片和設計**
1. 上傳 **Stamp Image**（單個印花圖示）
2. 上傳 **Completed Image**（收集完成後圖示）
3. 可選上傳 **Background Image**

#### **Step 3：獎勵設定**
1. 選擇 **Reward Type**（Points/Coupon/Discount）
2. 設定 **Reward Value**

#### **Step 4：有效期和顯示**
1. 設定 **Start Date** 和 **End Date**
2. 設定 App 顯示範圍
3. 設定 **Status** 為 **Active**

#### **Step 5：保存**
1. 確認所有資料正確
2. 點擊 **Create** 按鈕

## 常見配置例子

### **飲品店印花卡**
- **Brand**：ABC Cafe
- **Stamp Name**：咖啡印花卡
- **Required Count**：10
- **Reward Type**：Points
- **Reward Value**：100
- **Status**：Active

## 注意事項

- Required Count 決定用戶需要收集幾多個印花
- Reward Type 需同實際獎勵一致
- 圖片建議大小 1MB 以內
- 創建後可以在 Stamps List 再做編輯修改