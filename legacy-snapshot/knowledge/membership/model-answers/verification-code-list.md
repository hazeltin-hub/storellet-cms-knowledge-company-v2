---
id: MEMBERSHIP-VERIFICATION-CODE-LIST
category: Membership
module: "Membership"
intent: reference
status: confirmed
question: "Verification Code List 顯示咩資料？"
alternatives:
  - "Verification Code List 有咩用途"
  - "驗證碼列表顯示咩"
  - "Verification Code List page 顯示咩"
  - "所有驗證碼"
  - "搵驗證碼"
keywords:
  - "Verification Code List"
  - "Verification Code"
  - "驗證碼"
  - "Verification Code 功能"
  - "驗證碼管理"
  - "會員驗證"
source_title: "Membership Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

**Verification Code List** 顯示所有驗證碼嘅列表資料。

### 顯示欄位

#### **主要欄位**
1. **Verification Code ID** - 驗證碼唯一識別碼
2. **Member** - 關聯的會員
3. **Code** - 驗證碼內容
4. **Status** - 驗證碼狀態
5. **Created At** - 創建時間
6. **Expires At** - 到期時間
7. **Used At** - 使用時間
8. **Edit** - 編輯驗證碼
9. **Delete** - 刪除驗證碼

### 頁面用途

#### **1. 查看現有驗證碼**
- 一目了然所有創建的驗證碼
- 顯示驗證碼的使用狀態
- 查看驗證碼的有效期限

#### **2. 驗證碼管理**
- 編輯現有驗證碼
- 刪除無效的驗證碼
- 查看驗證碼使用記錄

#### **3. 狀態監控**
- 檢查哪些驗證碼已過期
- 查看哪些驗證碼已被使用
- 追蹤驗證碼的使用時間

### Verification Code 狀態

#### **可能狀態**
- **Active**：有效且未使用的驗證碼
- **Used**：已經被使用的驗證碼
- **Expired**：已經過期的驗證碼
- **Inactive**：手動停用的驗證碼

### 使用場景

#### **會員註冊驗證**
- 新會員註冊時需要輸入驗證碼
- 確認會員身份真實性
- 防止虚假註冊

#### **會員操作驗證**
- 重要操作需要驗證碼確認
- 提升帳號安全性
- 防止未授權操作

#### **活動參與驗證**
- 特殊活動需要驗證碼參與資格
- 控制活動參與人數
- 確保參與者身份

## 注意事項

- 驗證碼通常有有效期限制
- 使用後的驗證碼不能重複使用
- 過期的驗證碼需要清理
- 可以刪除不再需要的驗證碼
- 驗證碼通常關聯到特定會員

## 相關 Model Answers

- **Membership Overview**：`membership-overview.md`
- **Create Verification Code**：參考創建功能相關文件