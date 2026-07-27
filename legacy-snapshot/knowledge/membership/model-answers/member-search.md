---
id: MEMBERSHIP-MEMBER-SEARCH
category: Membership
module: "Membership"
intent: reference
status: confirmed
question: "點樣搵會員資料？"
alternatives:
  - "如何搜索會員"
  - "Member 係點樣搵"
  - "會員搜索方法"
  - "Member Search 點樣用"
  - "搵唔到會員"
  - "會員編號搜尋"
keywords:
  - "Member Search"
  - "會員搜索"
  - "Member No."
  - "Phone No."
  - "Email"
  - "Facebook ID"
  - "搜尋會員"
  - "查詢條件"
  - "四選一"
source_title: "Membership Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

**Member Search** 功能提供四種方式來搵會員資料。

### Member Search 方式

#### **四種搜索方式**（四選一）

##### **1. Member No. 搜索**
- **欄位名稱**：Member No.
- **搜索條件**：查詢條件
- **輸入要求**：Enter either one search parameter
- **用途**：用會員編號搜尋會員資料
- **說明**：輸入 Storellet 會員編號

##### **2. Phone No. 搜索**
- **欄位名稱**：Phone No.
- **搜索條件**：查詢條件
- **輸入要求**：Enter either one search parameter
- **用途**：用電話號碼搜尋會員資料
- **說明**：輸入會員註冊電話號碼

##### **3. Email 搜索**
- **欄位名稱**：Email
- **搜索條件**：查詢條件
- **輸入要求**：Enter either one search parameter
- **用途**：用 Email 搜尋會員資料
- **說明**：輸入會員註冊 Email

##### **4. Facebook ID 搜索**
- **欄位名稱**：Facebook ID
- **搜索條件**：查詢條件
- **輸入要求**：Enter either one search parameter
- **用途**：用 Facebook ID 搜尋會員資料
- **說明**：輸入會員綁定的 Facebook ID

### 使用步驟

#### **Step 1：選擇搜索方式**
1. 進入 Membership tab → Member
2. 選擇四種搜索方式之一

#### **Step 2：輸入搜索參數**
1. 根據選擇的方式輸入對應資料
2. **Member No.**：輸入會員編號
3. **Phone No.**：輸入電話號碼
4. **Email**：輸入 Email 地址
5. **Facebook ID**：輸入 Facebook ID

#### **Step 3：執行搜索**
1. 確認輸入資料正確
2. 點擊搜索按鈕
3. 等待系統查找會員資料

#### **Step 4：查看結果**
1. 系統顯示找到的會員資料
2. 如有多個結果，會列出所有匹配會員
3. 如無結果，會顯示找不到會員

### 搜索建議

#### **最快方式**
- **Member No.**：最直接和準確
- **Phone No.**：如果知道電話號碼

#### **常用方式**
- **Email**：會員通常記得 Email
- **Phone No.**：手機號碼容易記得

#### **備用方式**
- **Facebook ID**：用戶可能不記得

#### **注意事項**
- 四種搜索方式**四選一**，只需輸入一種
- 輸入的資料必須準確才能找到會員
- 部分搜索方式可能不適用所有會員
- 搜索結果會顯示會員的詳細資料

### 顯示的會員資料

#### **基本資料**
- **Member No.**：Storellet 會員編號及 security code
- **Alias no.**：會員別名編號
- **Status**：會員目前狀態（Active / Inactive）
- **Security Code**：安全碼

#### **Storellet Profile**
- **Phone No.**：會員電話
- **Email**：會員 Email
- **Facebook ID**：會員 Facebook ID
- **Display Name**：會員顯示名稱
- **First Name / Last Name**：會員姓名
- **Gender**：性別
- **Birthday**：生日
- **Join Date**：加入日期

## 故障排除

#### **找不到會員**
- ❌ 確認輸入資料是否正確
- ❌ 嘗試其他搜索方式
- ❌ 確認會員是否存在於系統
- ❌ 檢查會員狀態是否為 Inactive

#### **顯示錯誤資料**
- ❌ 確認搜索參數是否輸入正確
- ❌ 檢查會員資料是否已更新

## 相關 Model Answers

- **Membership Overview**：`membership-overview.md`
- **Member Status**：參考 Status 相關 model answers