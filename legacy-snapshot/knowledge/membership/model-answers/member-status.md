---
id: MEMBERSHIP-MEMBER-STATUS
category: Membership
module: "Membership"
intent: reference
status: confirmed
question: "Member Status 係做咩用途？"
alternatives:
  - "會員狀態"
  - "Member Status 點樣用"
  - "Active Inactive 會員"
  - "停用會員"
  - "會員狀態管理"
  - "Status 係咩"
keywords:
  - "Member Status"
  - "會員狀態"
  - "Active"
  - "Inactive"
  - "停用"
  - "啟用"
  - "會員管理"
  - "Status 操作"
source_title: "Membership Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

**Member Status** 係用嚟管理會員狀態嘅功能，可以控制會員帳號是否有效。

### Member Status 說明

#### **欄位資訊**
- **欄位名稱**：Status
- **欄位類型**：可操作 / 顯示欄位
- **狀態選項**：Active / Inactive
- **操作影響**：顯示會員目前狀態；可停用 membership

#### **狀態說明**

##### **Active（啟用）**
- **用途**：會員帳號正常運作
- **影響**：會員可以正常使用所有功能
- **前台顯示**：會員資料會顯示在 App
- **功能限制**：無限制

##### **Inactive（停用）**
- **用途**：停用會員帳號
- **影響**：會員無法使用大部分功能
- **前台顯示**：會員資料不會顯示在 App
- **功能限制**：限制會員登入和使用

### Status 操作注意事項

#### **重要提醒**
- ⚠️ **涉及會員狀態，操作前需確認**
- ⚠️ 設為 Inactive 前應通知相關人員
- ⚠️ 停用會員會影響其所有功能
- ⚠️ 操作建議記錄原因和時間

#### **何時使用 Inactive**
- 會員要求刪除帳號
- 發現會員違規行為
- 會員長期不活躍需要清理
- 測試或暫時帳號需要停用

#### **何時使用 Active**
- 新會員註冊完成
- 重新啟用已停用會員
- 恢復會員帳號使用權

### 操作步驟

#### **停用會員（設為 Inactive）**
1. 搜索到目標會員
2. 確認會員身份和資料
3. 將 Status 改為 Inactive
4. 確認操作
5. 記錄停用原因和時間

#### **啟用會員（設為 Active）**
1. 搜索到目標會員
2. 確認會員身份和資料
3. 將 Status 改為 Active
4. 確認操作
5. 通知會員帳號已恢復

### Status 影響範圍

#### **會員功能影響**
- **登入功能**：Inactive 會員無法登入
- **資料顯示**：Inactive 會員資料不顯示
- **優惠券使用**：Inactive 會員無法使用優惠券
- **積分系統**：Inactive 會員無法累積和使用積分

#### **前台影響**
- **App 顯示**：Inactive 會員不出現於 App
- **會員列表**：Inactive 會員不會被其他用戶看到
- **搜索功能**：Inactive 會員可能無法被搜尋

#### **數據保留**
- **歷史記錄**：Inactive 會員的歷史記錄會保留
- **交易記錄**：過往的發票和交易記錄會保存
- **個人資料**：會員基本資料會保留

### 常見使用場景

#### **客戶服務場景**
- 會員投訴需要暫時停用帳號
- 會員要求暫停服務
- 處理會員違規問題

#### **系統管理場景**
- 清理長期不活躍會員
- 測試帳號管理
- 數據清理和維護

#### **法律合規場景**
- 會員行使刪除權利
- GDPR 合規要求
- 用戶數據保護要求

## 注意事項

- Status 改變會即時生效
- 建議在操作前備份相關資料
- 應記錄 Status 改變的原因和時間
- Inactive 狀態可能影響會員的所有功能
- 重新啟用時應通知會員

## 相關 Model Answers

- **Member Search**：`member-search.md`
- **Membership Overview**：`membership-overview.md`