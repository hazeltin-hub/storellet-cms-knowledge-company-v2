---
id: ASSETS-POINTS-LIST
category: Assets
module: "Assets"
intent: reference
status: confirmed
question: "Points List 顯示咩資料？"
alternatives:
  - "Points List 有咩用途"
  - "Points List show 咩"
  - "Points List page 顯示咩"
  - "積分獎品列表顯示咩"
keywords:
  - "Points List"
  - "Points"
  - "積分獎品"
  - "Points ID"
  - "Assets"
source_title: "Assets Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

**Points List** 顯示所有積分獎品（Points）嘅列表資料。

### 顯示欄位

#### 1. **Points ID**（系統產生）
- **用途**：顯示 point asset ID
- **功能**：用作匯出 / 修改 reference

#### 2. **Group**（系統產生）
- **用途**：顯示所屬 group
- **功能**：可用 group filter

#### 3. **Point(s)**（系統產生）
- **用途**：顯示 points value
- **例子**：50 points、100 points

#### 4. **Type**（系統產生）
- **用途**：顯示 points type
- **類型例子**：
  - Welcome Pack
  - Birthday Gift
  - Anniversary Gift
  - Push
  - Redeem Code

#### 5. **Start Date**（系統產生）
- **用途**：顯示有效期開始日
- **功能**：用作 point item validity

#### 6. **End Date**（系統產生）
- **用途**：顯示有效期完結日
- **功能**：用作 point item validity

#### 7. **White Label**（系統產生）
- **用途**：顯示是否 White Label only
- **功能**：按 app availability 判斷

#### 8. **Status**（系統產生）
- **用途**：顯示狀態
- **狀態**：Active / Inactive

#### 9. **Edit**（操作按鈕）
- **用途**：修改 points detail
- **功能**：開啟編輯頁面

#### 10. **Export**（操作按鈕）
- **用途**：匯出 points details
- **功能**：下載 JSON file

### 頁面用途

1. **查看現有積分獎品**：一目了然所有創建嘅 points
2. **資產管理**：編輯或修改現有 points
3. **資料匯出**：下載 points 詳細資料做分析
4. **狀態監控**：檢查 points 有效期和運作狀態

## 注意事項

- 所有顯示欄位都係系統產生，由 Create new Points 頁面嘅設定決定
- Points ID 係唯一識別碼，用於記錄和參考
- 可以用 Group 來篩選顯示特定 group 嘅 points