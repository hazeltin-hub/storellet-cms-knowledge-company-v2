---
id: FIELD-IMAGE-LOCATIONS
category: System
module: "Field Search"
intent: reference
status: confirmed
question: "Image field 係邊度有？"
alternatives:
  - "Image field 位置"
  - "Image field 係邊個"
  - "Image 係邊個 tab"
  - "所有 Image 欄位"
  - "Image field 用途"
  - "幾多個 Image field"
  - "圖片欄位"
  - "圖片 field 位置"
  - "搵 Image field"
  - "Image 有幾多種"
keywords:
  - "Image"
  - "Image field"
  - "圖片欄位"
  - "Logo"
  - "Thumbnail"
  - "Background Image"
  - "field location"
  - "所有 Image"
  - "Image 位置"
  - "圖片位置"
  - "係邊度"
  - "係邊個"
  - "有幾多個"
source_title: "CMS Field Name Index（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

**Image field** 出現喺 CMS 嘅多個位置，每個都有不同用途。

### 所有 Image Field 位置

#### **1. Company Group Images**
- **Group Logo**：`group-logo.md` - Branded App 必填，Group Logo 顯示
- **Registration Image (English)**：註冊/Group 背景圖
- **Registration Image (Local Language)**：註冊/Group 背景圖

#### **2. Brand Images**
- **Brand Logo**：`brand-logo.md` - 品牌 Logo
- **Thumbnails**：`thumbnails.md` - Branded App 品牌圖
- **Highlighted Image**：`highlighted-image.md` - 商店介紹圖片
- **Background Image**：`background-image.md` - 背景圖片
- **Background Image on Dashboard**：`background-image-on-dashboard.md` - Dashboard 背景圖

#### **3. Shop Images**
- Shop 背景圖片和介紹圖片
- 分店相關圖像資源

#### **4. Assets Images**
- **Points Image**：`create-new-points.md` - 積分獎品圖片（建議 1MB）
- **Discount Cards Images**：
  - `create-discount-cards.md` - Card Image (English/Local)
  - Image 2/3（額外 card image）
- **Coupons Images**：`create-coupon.md` - 優惠券圖片
- **Stamps Images**：`create-stamp.md` - 印花圖片
- **Bingo Images**：`create-bingo.md` - 遊戲圖片和獎勵圖片

### Image Field 共同特點

#### **檔案要求**
- **建議大小**：通常建議 1MB 以內
- **格式**：JPG、PNG 常見格式
- **解析度**：按具體用途有所不同

#### **語言版本**
- **English Version**：英文版圖片
- **Local Language Version**：中文/本地語言版圖片
- 部分支援中英同圖（可重用）

#### **顯示位置**
- **CMS Dashboard**：管理介面顯示
- **Frontend App**：用戶 App 顯示
- **Branded App**：品牌 App 顯示

#### **上傳方式**
- CMS 內直接上傳
- 支援拖放上傳
- 可預覽和確認

## 圖片用途分類

#### **Logo 類**
- Group Logo、Brand Logo
- 用於品牌識別和 App 顯示

#### **背景圖類**
- Background Image、Registration Image
- 用於介面背景和視覺效果

#### **功能圖類**
- Points Image、Stamp Image、Coupon Image
- 用於顯示獎勵和資產

#### **介紹圖類**
- Highlighted Image、Thumbnail
- 用於介紹和預覽

## 搜索技巧

### **精確搜索**
- 「Brand Logo」→ 會直接找到品牌 Logo 說明
- 「Group Logo」→ 會直接找到集團 Logo 說明
- 「Points Image」→ 會直接找到積分圖片說明

### **廣泛搜索**
- 「Image field」→ 會顯示所有 Image 位置
- 「圖片欄位」→ 會列出所有用途

## 相關 Model Answers

- **Brand Images**：`brand-image-specifications.md`
- **Group Logo**：`group-logo.md`
- **Thumbnails**：`thumbnails.md`
- **Assets Images**：參考各 Assets Create 文件