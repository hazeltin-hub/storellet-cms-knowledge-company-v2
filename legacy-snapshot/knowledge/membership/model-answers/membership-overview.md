---
id: MEMBERSHIP-OVERVIEW
category: Membership
module: "Membership"
intent: reference
status: confirmed
question: "Membership tab 係做咩嘅？"
alternatives:
  - "Membership 用途"
  - "Membership 係做咩"
  - "Membership tab 有咩功能"
  - "CMS Membership 點樣用"
  - "會員管理 tab"
keywords:
  - "Membership"
  - "Membership tab"
  - "會員管理"
  - "Member"
  - "Verification Code"
  - "Invoice"
  - "會員資料"
  - "驗證碼"
  - "發票"
source_title: "Membership Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

**Membership tab** 係 CMS 用嚟管理會員資料、驗證碼和發票嘅主要功能區。

### Membership tab 功能概覽

#### 1. **Member（會員管理）**
- **Member Search**：會員搜索功能
- **Member Display**：會員資料顯示和編輯
- **Storellet Profile**：Storellet 會員資料管理
- **Status Management**：會員狀態操作

#### 2. **Verification Code（驗證碼管理）**
- **Verification Code List**：顯示所有驗證碼
- **Verification Code Display**：驗證碼詳細資料
- **Create Verification Code**：創建新驗證碼

#### 3. **Invoice（發票管理）**
- **Invoice List**：顯示所有發票記錄
- **Invoice Display**：發票詳細資料
- **Invoice Status**：發票狀態管理

### 主要用途

#### **1. 會員資料管理**
- 查詢會員資料（Member No. / Phone No. / Email / Facebook ID）
- 顯示和編輯會員基本資料
- 管理會員狀態（Active / Inactive）
- 查看會員安全碼和別名

#### **2. Storellet Profile 管理**
- 更新會員聯絡資料（電話、Email）
- 管理會員社交帳號（Facebook ID）
- 編輯會員顯示名稱和個人資料
- 設定會員新聞接收偏好

#### **3. 驗證碼管理**
- 查看所有有效驗證碼
- 創建新的驗證碼
- 管理驗證碼狀態

#### **4. 發票管理**
- 查看會員發票記錄
- 追蹤發票狀態
- 管理發票資料

### Member 搜索方式

#### **四種搜索方式**（四選一）
- **Member No.**：會員編號搜尋
- **Phone No.**：電話號碼搜尋
- **Email**：Email 搜尋
- **Facebook ID**：Facebook ID 搜尋

### 可操作欄位類型

#### **查詢條件**
- Member No. / Phone No. / Email / Facebook ID
- 輸入其中一個即可搜索

#### **顯示欄位**
- Member No.（系統顯示）
- Alias no.（系統顯示）
- Security Code（系統顯示）
- Country Code（系統顯示）
- First Name / Last Name（視乎資料）

#### **顯示 / 可編輯欄位**
- Storellet Profile：Phone No.
- Storellet Profile：Email
- Storellet Profile：Facebook ID
- Storellet Profile：Display Name
- Storellet Profile：Gender
- Storellet Profile：Birthday

#### **可操作 / 顯示欄位**
- Status（Active / Inactive）
- Receive News - Global（可切換）

## 注意事項

- Member 搜索只需要輸入四種參數之一
- 大部分 Storellet Profile 欄位可以編輯更新
- Status 涉及會員狀態，操作前需要確認
- Security Code 用於前台 QR 和會員識別

## 相關 Model Answers

- **Member Search**：參考 Member 相關 model answers
- **Verification Code**：參考 Verification Code model answers
- **Invoice**：參考 Invoice model answers