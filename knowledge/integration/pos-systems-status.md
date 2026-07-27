---
schema_version: 2
id: "POS-SYSTEMS-STATUS"
title: "POS 系統整合狀態"
category: "Integration"
module: "POS Systems"
intent: "reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "我地有咩POS系統？"
alternatives:
  - "有咩POS？"
  - "POS list"
  - "支援咩POS系統？"
  - "可以用邊個POS？"
  - "POS整合狀態"
  - "Seito 7點樣？"
  - "Pointsoft有咩問題？"
keywords:
  - "POS"
  - "Pointsoft"
  - "Seito"
  - "Eats 365"
  - "Everyware"
  - "QuickTime"
  - "現代"
  - "寶雅"
  - "POS master"
  - "永富"
  - "Dimorder"
  - "整合"
  - "集成"
  - "invoice"
  - "發票"
source_title: "Storellet POS 系統整合狀態"
source_path: "knowledge/integration/pos-systems-status.md"
source_anchor: "POS_Systems_Status"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Storellet POS 系統整合狀態

**目前整合的 POS 系統：** Seito 7, Seito 8, Eats 365, Pointsoft, POS Master, QuickTime, Everyware, 寶雅, 現代

**待整合系統：** 永富, Dimorder

#### 📋 各 POS 系統詳細資訊

---

### Seito 7

**整合狀態：** ✅ 已整合

**CMS 顯示資訊：**
- **Invoice 格式：** invoice no. + two zero behind
- **顯示內容：** Only provide invoice amount on CMS

**重要限制：**
- ❌ **Not able for a Cash coupon**（不支援現金券）
- ⚠️ **QR code hard to scan**（QR碼難以掃描）
- ⚠️ **Only provide invoice amount**（只顯示發票金額）

**適用場景：** 基本發票記錄，但不支援現金券和 QR 掃描

---

### Seito 8

**整合狀態：** ✅ 已整合

**CMS 顯示資訊：**
- ✅ **Full information on CMS**（完整資訊）
- ✅ **Able for changes**（可進行更改）

**適用場景：** 完整功能，推薦使用

---

### Eats 365

**整合狀態：** ✅ 已整合

**CMS 顯示資訊：**
- **Invoice 格式：** Date + invoice time + invoice number
- ⚠️ **Only provide invoice amount to CMS**（只顯示發票金額）

**重要限制：**
- ❌ **Invoice No. is difficult to search on CMS**
- ❌ **We can't confirm the invoice time**
- ⚠️ 搜尋發票號碼困難

**適用場景：** 基本發票記錄，但搜尋功能有限

---

### Pointsoft

**整合狀態：** ✅ 已整合

**CMS 顯示資訊：**
- ✅ **Full information on CMS**（完整資訊）

**重要限制：**
- ⚠️ **Lack of technical support**（缺乏技術支援）
- ⚠️ **Limited on coupon number**
  - 如果會員錢包超過 **30 張 coupons**，Pointsoft 將無法載入會員資料
- ⚠️ **May cause reversed case**
  - 如果發票號碼每日重置，可能造成反向問題

**適用場景：** 功能完整但有限制，需注意 coupon 數量和發票號碼重置問題

---

### POS Master

**整合狀態：** ✅ 已整合

**CMS 顯示資訊：**
- ✅ **Full information on CMS**（完整資訊）

**適用場景：** 完整功能，穩定運作

---

### QuickTime

**整合狀態：** ✅ 已整合

**CMS 顯示資訊：**
- ✅ **Full information on CMS**（完整資訊）

**待完成：**
- ⏳ **Pending for ODO integrate**（等待 ODO 整合）

**適用場景：** 基本功能完整，等待 ODO 整合

---

### Everyware

**整合狀態：** ✅ 已整合

**CMS 顯示資訊：**
- ✅ **Full information on CMS**（完整資訊）

**重要限制：**
- ⚠️ **New functions seems not acceptable for Storellet**
- ⚠️ **Need to add shop code for items**（需要為品項添加店舖代碼）
- ❌ **When cancel coupon, some case seems not able to reverse to member wallet**
  - 取消優惠券時，某些情況無法退回會員錢包
- ❌ **Free item seems not able free more than 1 item**
  - 免費品項似乎只能免費 1 件

**適用場景：** 基本功能，但有限制和不穩定因素

---

### 寶雅

**整合狀態：** ✅ 已整合

**CMS 顯示資訊：**
- ✅ **Invoice amount + item code on CMS**

**適用場景：** 顯示發票金額和品項代碼

---

### 現代

**整合狀態：** ✅ 已整合

**CMS 顯示資訊：**
- ✅ **Full information on CMS**（完整資訊）

**技術要求：**
- ⚠️ **Item code need POS support**（品項代碼需要 POS 支援）

**適用場景：** 完整功能，需確認 POS 品項代碼支援

---

### 永富

**整合狀態：** ❌ Not yet onboard（尚未整合）

---

### Dimorder

**整合狀態：** ❌ Not yet onboard（尚未整合）

---

## Internal Notes

- 呢份文件記錄各 POS 系統嘅整合狀態和已知問題
- 用戶詢問特定 POS 時，只顯示該 POS 相關資訊
- 用戶詢問「有咩POS」時，顯示完整清單
- 高風險限制（如 Pointsoft 嘅 30 張 coupon 限制）需要特別提醒
- 技術支援問題（如 Pointsoft、Everyware）需要記錄以便跟進