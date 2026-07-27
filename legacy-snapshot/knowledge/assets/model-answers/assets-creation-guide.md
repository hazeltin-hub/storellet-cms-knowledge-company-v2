---
id: ASSETS-CREATION-GUIDE
category: Assets
module: "Assets"
intent: reference
status: confirmed
question: "Assets 創建步驟總覽？"
alternatives:
  - "Assets 點樣創建"
  - "如何創建各種 Assets"
  - "CMS Assets 創建指南"
  - "Assets tab 使用步驟"
keywords:
  - "Assets 創建"
  - "Assets 步驟"
  - "Assets 指南"
  - "創建指南"
  - "Assets 總覽"
source_title: "Assets Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

**Assets 創建步驟總覽** 提供 CMS 中所有資產類型嘅創建指引。

### Assets 資產類型總覽

CMS Assets tab 包含 8 種主要資產類型：

#### 1. **Points（積分獎品）**
- **用途**：管理會員積分獎勵
- **常見類型**：Welcome Pack、Birthday Gift、Anniversary Gift
- **創建頁面**：Create new Points
- **詳細步驟**：參考 `create-new-points.md`

#### 2. **Discount Cards（折扣卡）**
- **用途**：管理會員等級折扣卡
- **常見等級**：Basic、Silver、Gold、VIP
- **創建頁面**：Create Discount Cards
- **詳細步驟**：參考 `create-discount-cards.md`

#### 3. **Bingo（賓果遊戲）**
- **用途**：管理賓果遊戲活動
- **常見用途**：收集式遊戲活動
- **創建頁面**：Create new Bingo
- **詳細步驟**：參考 `create-bingo.md`

#### 4. **Stamps（印花卡）**
- **用途**：管理印花收集活動
- **常見用途**：飲品店印花卡、購物印花
- **創建頁面**：Create new Stamp
- **詳細步驟**：參考 `create-stamp.md`

#### 5. **Coupons（優惠券）**
- **用途**：管理優惠券活動
- **常見類型**：折扣優惠、固定金額、買一送一
- **創建頁面**：Create Coupon
- **詳細步驟**：參考 `create-coupon.md`

#### 6. **Coupon Packages（優惠券套裝）**
- **用途**：管理優惠券組合套裝
- **常見用途**：多張優惠券打包銷售
- **創建頁面**：Create Coupon Package

#### 7. **Coupon Trigger Rules（優惠券觸發規則）**
- **用途**：設置自動發放優惠券規則
- **常見觸發**：註冊、生日、消費達標
- **創建頁面**：Create Coupon Trigger Rule

#### 8. **Surveys（問卷調查）**
- **用途**：管理問卷調查
- **常見用途**：會員意見調查、滿意度調查
- **創建頁面**：Create Survey

### 一般創建步驟流程

#### **Step 1：選擇資產類型**
1. 進入 Assets tab
2. 選擇要創建嘅資產類型
3. 點擊對應嘅 Create 頁面

#### **Step 2：基本設定**
1. 選擇 Brand 或 Group
2. 填寫名稱和類型
3. 設定基本參數

#### **Step 3：內容設定**
1. 上傳所需圖片
2. 填寫描述和說明文字
3. 設定獎勵或折扣數值

#### **Step 4：有效期和顯示**
1. 設定 Start Date 和 End Date
2. 設定 App 顯示範圍
3. 設定狀態為 Active

#### **Step 5：確認和保存**
1. 檢查所有必填欄位
2. 確認資料正確性
3. 點擊 Create 按鈕保存

### 創建注意事項

#### **通用注意事項**
- ✅ 必填欄位一定要填寫
- ✅ 圖片大小建議控制在 1MB 以內
- ✅ 有效期設定要合理
- ✅ Status 通常設為 Active
- ✅ HTML 內容要用正確格式

#### **各類型特別注意**
- **Points**：確認 Group 選擇正確，Type 分類要準確
- **Discount Cards**：Discount Level 要等級一致，Welcome Pack 設定要明確
- **Bingo**：Grid Size 要符合遊戲設計
- **Stamps**：Required Count 要合理，Reward Type 要明確
- **Coupons**：Discount Value 要正確，Total Quantity 要足夠
- **Survey**：問題設計要清晰，回應選項要完整

### 常見配置建議

#### **新品牌上架流程**
1. **創建 Basic Welcome Pack Card**（Discount Cards）
2. **創建 Welcome Pack Points**（Points）
3. **創建開業優惠券**（Coupons）
4. **設置印花收集活動**（Stamps）

#### **會員等級系統**
1. **Basic Card**（等級 1）：10% off，Welcome Pack = Yes
2. **Silver Card**（等級 2）：15% off，Upgrade From = Basic
3. **Gold Card**（等級 3）：20% off，Upgrade From = Silver
4. **VIP Card**（等級 4）：25% off，Upgrade From = Gold

#### **促銷活動組合**
1. **優惠券**：短期促銷優惠
2. **印花卡**：長期客戶留存
3. **賓果遊戲**：互動式活動
4. **積分獎勵**：會員激勵

### 故障排除

#### **創建失敗常見原因**
- ❌ 必填欄位未填寫
- ❌ 圖片檔案過大
- ❌ 有效期設定不合理
- ❌ Brand 或 Group 選擇錯誤
- ❌ 數值格式不正確

#### **顯示問題常見原因**
- ❌ Status 未設為 Active
- ❌ 有效期已過或未開始
- ❌ App 顯示範圍設定錯誤
- ❌ Brand 權限設定問題

## 相關 Model Answers

- **Assets 概覽**：`assets-overview.md`
- **Points 創建**：`create-new-points.md`
- **Discount Cards 創建**：`create-discount-cards.md`
- **Bingo 創建**：`create-bingo.md`
- **Stamps 創建**：`create-stamp.md`
- **Coupons 創建**：`create-coupon.md`

## 注意事項

- 創建前建議先規劃好資產結構和等級系統
- 建議按順序創建（先 Points 再 Discount Cards 再其他）
- 創建後可以在對應 List 頁面查看和管理
- 如需批量創建，可使用 Import File 功能
- 定期檢查有效期和狀態，確保資產正常運作