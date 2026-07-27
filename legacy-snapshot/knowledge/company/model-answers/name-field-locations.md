---
id: FIELD-NAME-LOCATIONS
category: System
module: "Field Search"
intent: reference
status: confirmed
question: "Name field 係邊度有？"
alternatives:
  - "Name field 係邊個"
  - "Name field 位置"
  - "Name 係邊個 tab"
  - "所有 Name 欄位"
  - "Name field 用途"
  - "幾多個 Name field"
  - "名稱欄位"
  - "名稱 field 位置"
  - "搵 Name field"
  - "Name 有幾多個"
keywords:
  - "Name"
  - "Name field"
  - "名稱欄位"
  - "Company Name"
  - "Brand Name"
  - "Shop Name"
  - "field location"
  - "所有 Name"
  - "Name 位置"
  - "名稱位置"
  - "係邊度"
  - "係邊個"
  - "有幾多個"
  - "所有"
source_title: "CMS Field Name Index（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

**Name field** 出現喺 CMS 嘅多個位置，每個都有不同用途。

### 所有 Name Field 位置

#### **1. Company Name**
- **路徑**：`company-name.md`
- **層級**：All Companies → Create Company
- **用途**：CMS 內部公司名稱
- **填寫**：必填，公司註冊名稱或內部公司名
- **顯示**：用於 CMS 內部識別

#### **2. Company Group Name**
- **路徑**：`group-name.md`
- **層級**：Company Groups → Create Company Group
- **用途**：集團名稱，用作前台/後台顯示
- **填寫**：必填，分為英文和本地語言版本
- **顯示**：Group Name (English) + Group Name (Local Language)

#### **3. Brand Name**
- **路徑**：`brand-name.md`
- **層級**：Brands → Create Brand
- **用途**：品牌名稱，App 顯示用
- **填寫**：必填，分為英文和本地語言版本
- **顯示**：Brand Name (English) + Brand Name (Local Language)

#### **4. Shop Name**
- **路徑**：`shop-name.md`
- **層級**：Shops → Create Shop
- **用途**：分店名稱，App 分店資料顯示
- **填寫**：必填，分為英文和本地語言版本
- **顯示**：Shop Name (English) + Shop Name (Local Language)

#### **5. Assets Name Fields**
- **Points**：積分獎品名稱（無專用 model answer，參考 Create new Points）
- **Discount Cards**：折扣卡名稱（參考 `create-discount-cards.md`）
- **Coupons**：優惠券名稱（參考 `create-coupon.md`）
- **Bingo**：賓果遊戲名稱（參考 `create-bingo.md`）
- **Stamps**：印花名稱（參考 `create-stamp.md`）
- **Surveys**：問卷名稱（參考 Surveys）
- **用途**：各種 Assets 的識別名稱
- **填寫**：通常為必填
- **顯示**：App 顯示和 CMS 管理

### Name Field 共同特點

#### **語言版本**
- **English Version**：英文版名稱
- **Local Language Version**：中文/本地語言版本
- 大部分 Name 欄位都支援雙語言

#### **填寫要求**
- 大部分為**必填欄位**
- 需要提供準確的名稱用於識別
- 建議使用官方或正式名稱

#### **顯示位置**
- **CMS Dashboard**：內部管理用
- **Frontend App**：用戶看到的顯示
- **Reports**：報表和匯出文件

## 搜索技巧

### **精確搜索**
- 「Company Name」→ 會直接找到公司名稱用途
- 「Brand Name」→ 會直接找到品牌名稱用途
- 「Shop Name」→ 會直接找到分店名稱用途

### **廣泛搜索**
- 「Name field」→ 會顯示所有 Name 位置
- 「Name 係邊度」→ 會列出所有用途

## 相關 Model Answers

- **Company Name**：`company-name.md`
- **Group Name**：`group-name.md`
- **Brand Name**：`brand-name.md`
- **Shop Name**：`shop-name.md`
- **Assets Names**：參考各 Assets Create 文件