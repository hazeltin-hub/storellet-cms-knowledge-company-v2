---
id: ASSETS-CREATE-POINTS
category: Assets
module: "Assets"
intent: reference
status: confirmed
question: "點樣 create new Points？"
alternatives:
  - "如何創建積分獎品"
  - "Points 係點樣 create"
  - "Create new Points 步驟"
  - "新增積分獎品步驟"
  - "Welcome Pack 點樣創建"
keywords:
  - "Create new Points"
  - "創建積分獎品"
  - "Points"
  - "Welcome Pack"
  - "Birthday Gift"
  - "積分獎品創建"
source_title: "Assets Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

**Create new Points** 係創建新積分獎品嘅功能頁面。

### Create new Points 欄位說明

#### 1. **Import File**（選填）
- **用途**：批量上傳積分獎品
- **建議填寫**：Upload file if needed
- **注意**：一般單個創建留空，批量導入先用此欄位

#### 2. **Group**（必填）
- **用途**：選擇所屬 Company Group
- **建議填寫**：Select Group
- **注意**：此 points 將會對該 group 嘅會員顯示

#### 3. **Point(s)**（必填）
- **用途**：設定積分數量
- **建議填寫**：Points value，例如 50、100
- **例子**：50 points、100 points

#### 4. **Type**（必填）
- **用途**：選擇積分獎品類型
- **可選類型**：
  - **Welcome Pack**：新會員註冊獎勵
  - **Birthday Gift**：生日禮物
  - **Anniversary Gift**：週年紀念禮物
  - **Push**：推送獎勵
  - **Redeem Code**：兌換碼獎勵

#### 5. **Start Date**（必填）
- **用途**：設定活動開始日期
- **建議填寫**：Campaign start date
- **例子**：2026-08-01

#### 6. **End Date**（必填）
- **用途**：設定活動結束日期
- **建議填寫**：Campaign end date / long-term date
- **例子**：2026-12-31 或設置未來日期做長期活動

#### 7. **Image**（必填）
- **用途**：積分獎品顯示圖片
- **建議填寫**：Image file，建議 1MB
- **格式要求**：JPG/PNG，適合 App 顯示尺寸

#### 8. **Available to White Label App Only**（選填）
- **用途**：限制只係 White Label App 顯示
- **建議填寫**：Untick unless white label only
- **預設**：不勾選（所有 App 都顯示）

#### 9. **Available to Storellet App Only**（選填）
- **用途**：限制只係 Storellet App 顯示
- **建議填寫**：Untick unless Storellet App only
- **預設**：不勾選（所有 App 都顯示）

#### 10. **Not Transferable**（選填）
- **用途**：設定積分是否可轉讓
- **建議填寫**：Tick / Untick
- **勾選**：積分不可轉讓給其他會員

#### 11. **Status**（必填）
- **用途**：設定積分狀態
- **可選狀態**：
  - **Active**：生效中
  - **Inactive**：未生效
- **建議填寫**：Active

#### 12. **Create Date**（必填）
- **用途**：記錄創建日期
- **建議填寫**：Auto / CMS date
- **注意**：系統自動填寫當前日期

### Create new Points 步驟

#### **Step 1：選擇 Group**
1. 點擊 **Group** 下拉選單
2. 選擇目標 Company Group
3. 確認該 group 係正確嘅群組

#### **Step 2：設定積分數量和類型**
1. 輸入 **Point(s)** 數量（例如：50）
2. 選擇 **Type**（例如：Welcome Pack）
3. 確認積分用途和類型匹配

#### **Step 3：設定有效期**
1. 選擇 **Start Date**（例如：2026-08-01）
2. 選擇 **End Date**（例如：2026-12-31）
3. 確認有效期範圍合理

#### **Step 4：上傳圖片**
1. 點擊 **Image** 上傳區域
2. 選擇準備好嘅圖片檔案
3. 確認圖片大小適中（建議 1MB 以內）
4. 確認圖片顯示正確

#### **Step 5：設定 App 顯示範圍（可選）**
1. 如需限制 **White Label App Only**，勾選該選項
2. 如需限制 **Storellet App Only**，勾選該選項
3. 如需設定 **Not Transferable**，勾選該選項
4. 一般情況下全部不勾選，讓所有 App 顯示

#### **Step 6：設定狀態**
1. 確認 **Status** 設定為 **Active**
2. 檢查 **Create Date** 係正確日期
3. 最後檢查所有必填欄位

#### **Step 7：保存創建**
1. 確認所有資料正確
2. 點擊 **Create** 或 **Save** 按鈕
3. 等待系統確認創建成功
4. 喺 Points List 查看新創建嘅 points

## 常見配置例子

### **Welcome Pack 配置**
- **Group**：選擇目標 Group
- **Point(s)**：50
- **Type**：Welcome Pack
- **Start Date**：2026-08-01
- **End Date**：2027-12-31（長期有效）
- **Image**：Welcome Pack 圖片
- **Status**：Active

### **Birthday Gift 配置**
- **Group**：選擇目標 Group
- **Point(s)**：100
- **Type**：Birthday Gift
- **Start Date**：2026-08-01
- **End Date**：2027-12-31
- **Image**：生日禮物圖片
- **Status**：Active

## 注意事項

- 必填欄位一定要填寫，否則無法創建
- Image 檔案大小建議控制喺 1MB 以內
- 有效期（Start Date 和 End Date）設定要合理
- 創建後可以喺 Points List 再做編輯修改
- 刪除或重新創建前建議先 Export 做備份