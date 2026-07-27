---
id: ASSETS-DISCOUNT-CARDS-LIST
category: Assets
module: "Assets"
intent: reference
status: confirmed
question: "Discount Cards List 顯示咩資料？"
alternatives:
  - "Discount Cards List 有咩用途"
  - "折扣卡列表顯示咩"
  - "Discount Cards List page 顯示咩"
  - "Discount Cards 有咩功能"
keywords:
  - "Discount Cards List"
  - "Discount Cards"
  - "折扣卡"
  - "折扣卡列表"
  - "Assets"
source_title: "Assets Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

**Discount Cards List** 顯示所有折扣卡（Discount Cards）嘅列表資料。

### 顯示欄位

#### 1. **Discount Card ID**（系統產生）
- **用途**：顯示折扣卡唯一識別碼
- **功能**：System display / Click action
- **應用**：用於記錄和修改參考

#### 2. **Brand**（系統產生）
- **用途**：顯示所屬品牌
- **功能**：System display / Click action
- **應用**：用於品牌篩選和識別

#### 3. **Name**（系統產生）
- **用途**：顯示折扣卡名稱
- **功能**：System display / Click action
- **內容**：顯示英文或本地語言名稱

#### 4. **Is Welcome Pack**（系統產生）
- **用途**：顯示係咪 Welcome Pack 卡
- **功能**：System display / Click action
- **狀態**：Yes / No

#### 5. **Start Date**（系統產生）
- **用途**：顯示有效期開始日
- **功能**：System display / Click action
- **應用**：監控活動開始時間

#### 6. **End Date**（系統產生）
- **用途**：顯示有效期結束日
- **功能**：System display / Click action
- **應用**：監控活動結束時間

#### 7. **White Label**（系統產生）
- **用途**：顯示是否只限 White Label App
- **功能**：System display / Click action
- **狀態**：Yes / No

#### 8. **Status**（系統產生）
- **用途**：顯示當前狀態
- **功能**：System display / Click action
- **狀態**：Active / Inactive

#### 9. **Edit**（操作按鈕）
- **用途**：編輯折扣卡詳細資料
- **功能**：開啟編輯頁面
- **應用**：修改現有折扣卡設定

#### 10. **Export**（操作按鈕）
- **用途**：匯出折扣卡資料
- **功能**：下載 JSON 檔案
- **應用**：資料備份和分析

### 頁面用途

1. **查看現有折扣卡**：一目了然所有創建嘅折扣卡
2. **品牌管理**：以 Brand 為單位管理折扣卡
3. **狀態監控**：檢查折扣卡有效性和運作狀態
4. **資料匯出**：下載折扣卡詳細資料做分析
5. **快速編輯**：直接點擊 Edit 修改設定

## 注意事項

- 所有顯示欄位都係由 Create Discount Cards 頁面嘅設定決定
- Discount Card ID 係唯一識別碼，用於記錄和參考
- Is Welcome Pack 標識該卡係咪用於新會員歡迎包
- 可以按 Brand、Status 等條件篩選顯示
- Export 功能可以下載完整嘅折扣卡配置資料