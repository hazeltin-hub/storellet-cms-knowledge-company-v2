---
id: MEMBERSHIP-INVOICE-LIST
category: Membership
module: "Membership"
intent: reference
status: confirmed
question: "Invoice List 顯示咩資料？"
alternatives:
  - "Invoice List 有咩用途"
  - "發票列表顯示咩"
  - "Invoice List page 顯示咩"
  - "所有發票"
  - "搵發票"
  - "會員發票"
keywords:
  - "Invoice List"
  - "Invoice"
  - "發票"
  - "會員發票"
  - "發票記錄"
  - "Invoice 狀態"
  - "發票管理"
source_title: "Membership Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

**Invoice List** 顯示所有會員發票嘅列表資料。

### 顯示欄位

#### **主要欄位**
1. **Invoice ID** - 發票唯一識別碼
2. **Member** - 關聯的會員
3. **Invoice Date** - 發票日期
4. **Amount** - 發票金額
5. **Status** - 發票狀態
6. **Type** - 發票類型
7. **Created At** - 創建時間
8. **View Details** - 查看詳細資料
9. **Download** - 下載發票文件

### 頁面用途

#### **1. 查看發票記錄**
- 顯示會員的所有發票記錄
- 查看發票的基本資訊
- 追蹤發票處理狀態

#### **2. 發票管理**
- 下載發票文件
- 查看發票詳細內容
- 追蹤發票處理進度

#### **3. 狀態監控**
- 檢查發票處理狀態
- 查看哪些發票待處理
- 追蹤已完成發票

### Invoice 狀態

#### **可能狀態**
- **Pending**：待處理的發票
- **Processing**：處理中的發票
- **Completed**：已完成的發票
- **Cancelled**：已取消的發票
- **Failed**：處理失敗的發票

### 發票類型

#### **常見類型**
- **會員註冊費**：新會員註冊費用
- **服務費**：各種服務收費
- **商品購買**：商品或服務購買
- **會費**：定期會員費用

### 使用場景

#### **會員管理**
- 查看會員的消費記錄
- 追蹤會員的付款狀態
- 處理會員退費申請

#### **財務管理**
- 統計發票金額
- 分析收入來源
- 追蹤未收款項

#### **客戶服務**
- 協助會員查詢發票
- 處理發票相關問題
- 提供發票副本

## 注意事項

- 發票記錄會永久保存
- 發票金額不可修改
- 已完成的發票不能取消
- 可以下載發票文件作記錄
- 發票通常關聯到特定會員

## 相關 Model Answers

- **Membership Overview**：`membership-overview.md`
- **Member Search**：`member-search.md`