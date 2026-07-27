---
id: FIELD-DATE-LOCATIONS
category: System
module: "Field Search"
intent: reference
status: confirmed
question: "Date field 係邊度有？"
alternatives:
  - "Date field 係邊個"
  - "Date field 位置"
  - "Date 係邊個 tab"
  - "所有 Date 欄位"
  - "Date field 用途"
  - "幾多個 Date field"
  - "日期欄位"
  - "日期 field 位置"
  - "搵 Date field"
  - "Start Date 係邊度"
  - "End Date 係邊度"
keywords:
  - "Date"
  - "Date field"
  - "日期欄位"
  - "Start Date"
  - "End Date"
  - "Join Date"
  - "Create Date"
  - "Expiry Date"
  - "field location"
  - "所有 Date"
  - "Date 位置"
  - "日期位置"
  - "係邊度"
  - "係邊個"
  - "有幾多個"
  - "所有"
source_title: "CMS Field Name Index（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

**Date field** 出現喺 CMS 嘅多個位置，每個都有不同用途。

### 所有 Date Field 位置

#### **1. Company Dates**
- **Join Date**：`company-join-date.md` - 公司加入日期（必填）
- **Create Date**：`create-date.md` - 建立日期（系統產生）
- **Last Update Date**：最近更新時間（系統產生）

#### **2. Company Group Dates**
- 大部分跟隨 Company 層級設定

#### **3. Brand Dates**
- **Join Date**：`brand-join-date.md` - 品牌加入日期（必填）
- **Create Date**：建立日期（系統產生）

#### **4. Shop Dates**
- **Create Date (System)**：`shop-create-date-system-source.md` - 系統產生，建立日期
- **Create Date (Required)**：`shop-create-date-required-source.md` - 必填，Shop 加入日期

#### **5. Assets Dates（多種）**

**Points Dates**：
- **Start Date**：`create-new-points.md` - 活動開始日期（必填）
- **End Date**：活動結束日期/長期日期（必填）
- 用途：控制積分獎品有效期

**Discount Cards Dates**：
- **Redemption Period**：`create-discount-cards.md` - Start date - End date（必填）
- **Welcome Pack Period**：Welcome Pack 派發期間（視乎需要）
- 用途：控制折扣卡有效期和派發期

**Coupons Dates**：
- **Start Date**：`create-coupon.md` - 開始日期（必填）
- **End Date**：結束日期（必填）
- **Valid Period**：領取後有效期（選填）
- 用途：控制優惠券有效期

**Stamps Dates**：
- **Start Date**：`create-stamp.md` - 活動開始日期（必填）
- **End Date**：活動結束日期（必填）
- 用途：控制印花活動有效期

**Bingo Dates**：
- **Start Date**：`create-bingo.md` - 活動開始日期（必填）
- **End Date**：活動結束日期（必填）
- 用途：控制賓果遊戲有效期

**Surveys Dates**：
- **Start Date**：問卷開始日期（必填）
- **End Date**：問卷結束日期（必填）
- 用途：控制問卷調查有效期

### Date Field 共同特點

#### **日期類型**

**1. Join Date（加入日期）**
- 用途：記錄合作開始日
- 層級：Company、Brand
- 填寫：必填，建立日期/合作開始日

**2. Create Date（建立日期）**
- 用途：記錄建立時間
- 來源：系統產生/Auto
- 顯示：List 頁面顯示

**3. Start Date（開始日期）**
- 用途：活動/項目開始日期
- 填寫：必填（Assets 類型）
- 影響：控制何時開始生效

**4. End Date（結束日期）**
- 用途：活動/項目結束日期
- 填寫：必填（Assets 類型）
- 影響：控制何時結束失效

**5. Valid Period（有效期）**
- 用途：領取後有效期
- 填寫：選填（部分 Assets）
- 影響：用戶領取後可用期限

#### **填寫建議**
- **格式**：YYYY-MM-DD 或 CMS 日期選擇器
- **時區**：通常跟隨 CMS 系統設定
- **邏輯**：Start Date 應該早於 End Date

#### **顯示和影響**
- **CMS Dashboard**：顯示日期資訊
- **Frontend App**：控制有效期顯示
- **系統邏輯**：到期自動失效

## 特別日期設定

#### **長期活動**
- **End Date**：可設定為未來日期（如 2030-12-31）
- **用途**：長期有效的資產或活動

#### **Welcome Pack**
- **Welcome Pack Period**：控制新會員派發期間
- **設定**：Start Date - End Date
- **影響**：只在期間內新註冊會員獲得

#### **系統產生 vs 手動填寫**
- **系統產生**：Create Date、Last Update Date
- **手動填寫**：Join Date、Start Date、End Date

## 搜索技巧

### **精確搜索**
- 「Join Date」→ 會直接找到加入日期說明
- 「Start Date」→ 會顯示所有開始日期用途
- 「End Date」→ 會顯示所有結束日期用途

### **廣泛搜索**
- 「Date field」→ 會顯示所有 Date 位置
- 「日期欄位」→ 會列出所有用途

## 相關 Model Answers

- **Company Join Date**：`company-join-date.md`
- **Brand Join Date**：`brand-join-date.md`
- **Shop Create Date**：`shop-create-date-system-source.md`
- **Assets Dates**：參考各 Assets Create 文件