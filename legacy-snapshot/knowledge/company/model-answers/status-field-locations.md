---
id: FIELD-STATUS-LOCATIONS
category: System
module: "Field Search"
intent: reference
status: confirmed
question: "Status field 係邊度有？"
alternatives:
  - "Status field 係邊個"
  - "Status field 位置"
  - "Status 係邊個 tab"
  - "所有 Status 欄位"
  - "Status field 用途"
  - "幾多個 Status field"
  - "狀態欄位"
  - "狀態 field 位置"
  - "搵 Status field"
  - "Status 有幾多個"
keywords:
  - "Status"
  - "Status field"
  - "狀態欄位"
  - "Active"
  - "Inactive"
  - "field location"
  - "所有 Status"
  - "Status 位置"
  - "係邊度"
  - "係邊個"
  - "有幾多個"
  - "所有"
source_title: "CMS Field Name Index（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

**Status field** 出現喺 CMS 嘅多個位置，每個都有不同用途。

### 所有 Status Field 位置

#### **1. Company Status**
- **路徑**：`company-status.md`
- **用途**：控制公司是否有效
- **選項**：Active / Inactive
- **影響**：選擇 Active 時公司其下的 Group/Brand 為有效；選擇 Inactive 時公司及其下所有結構不會顯示於 Dashboard 或 Frontend

#### **2. Company Group Status**
- **路徑**：`company-group-status.md`
- **用途**：控制集團狀態
- **選項**：Active / Inactive
- **影響**：影響該集團下的 Brands 和 Shops 顯示

#### **3. Brand Status**
- **路徑**：`brand-status-and-display.md`
- **用途**：控制品牌狀態和顯示設定
- **選項**：Active / Inactive
- **影響**：控制品牌是否在 App 顯示

#### **4. Shop Status**
- **路徑**：`shop-status.md`
- **用途**：控制分店狀態
- **選項**：Active / Inactive
- **影響**：控制分店是否上架/有效，影響分店在 App 顯示

#### **5. Assets Status（多種）**
- **Points Status**：`points-list.md` - 積分獎品狀態
- **Discount Cards Status**：`discount-cards-list.md` - 折扣卡狀態
- **Coupons Status**：`coupons-list.md` - 優惠券狀態
- **Stamps Status**：`stamps-list.md` - 印花狀態
- **Bingo Status**：`bingo-list.md` - 賓果遊戲狀態
- **Surveys Status**：`surveys-list.md` - 問卷狀態
- **用途**：控制各種 Assets 是否有效和顯示
- **選項**：Active / Inactive
- **影響**：Assets 只有在 Active 狀態下才會在 App 顯示和可使用

### Status Field 共同特點

#### **狀態選項**
- **Active**：生效中，會顯示在 App 和 Dashboard
- **Inactive**：未生效，不會顯示

#### **使用建議**
- 新建項目時通常設為 Active
- 暫停使用時改為 Inactive
- 刪除前可以先改為 Inactive 測試影響

#### **注意事項**
- Company Status 影響最大，會影響整個公司結構
- Brand 和 Shop Status 相對獨立
- Assets Status 只影響個別資產項目
- Status 改變會即時生效到 Frontend

## 搜索技巧

### **精確搜索**
- 「Company Status」→ 會直接找到公司狀態
- 「Brand Status」→ 會直接找到品牌狀態
- 「Shop Status」→ 會直接找到分店狀態

### **廣泛搜索**
- 「Status field」→ 會顯示所有 Status 位置
- 「Status 係邊度」→ 會列出所有用途

## 相關 Model Answers

- **Company Status**：`company-status.md`
- **Brand Status**：`brand-status-and-display.md`
- **Shop Status**：`shop-status.md`
- **Assets Status**：參考各 Assets List 文件