---
id: ASSETS-CREATE-DISCOUNT-CARDS
category: Assets
module: "Assets"
intent: reference
status: confirmed
question: "點樣 create Discount Cards？"
alternatives:
  - "如何創建折扣卡"
  - "Discount Cards 係點樣 create"
  - "Create Discount Cards 步驟"
  - "新增折扣卡步驟"
  - "會員等級卡點樣創建"
keywords:
  - "Create Discount Cards"
  - "創建折扣卡"
  - "Discount Cards"
  - "會員等級"
  - "VIP Card"
  - "Tier card"
source_title: "Assets Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

**Create Discount Cards** 係創建會員等級折扣卡嘅功能頁面。

### Create Discount Cards 欄位說明

#### **基本設定**

##### 1. **Import File**（選填）
- **用途**：批量匯入折扣卡配置
- **建議填寫**：Upload file if needed
- **備註**：如無需匯入可留空

##### 2. **Brand**（必填）
- **用途**：指定 card 所屬 brand
- **建議填寫**：Select Brand
- **重要**：每個 brand 至少要有 1 個 Basic tier / Welcome Pack

##### 3. **DiscountCard Type**（必填）
- **用途**：指定 card / tier 類型
- **建議填寫**：Normal Tier
- **備註**：按 merchant tier structure 設定

##### 4. **Discount Level**（必填）
- **用途**：設定會員等級排序
- **建議填寫**：Basic=1, Silver=2, Gold=3, VIP=4
- **重要**：需跟 Tier level 一致

#### **卡片名稱和圖片**

##### 5. **Name (English)**（必填）
- **用途**：前台英文 card name
- **建議填寫**：English tier/card name
- **例子**：VIP Card

##### 6. **Name (Local Language)**（必填）
- **用途**：前台中文 card name
- **建議填寫**：Chinese/local tier/card name
- **例子**：VIP 會員

##### 7. **Image (English)**（必填）
- **用途**：前台英文 discount card 圖片
- **建議填寫**：Card image，建議 1MB
- **備註**：PPT 註：seems not working；仍保留為圖像欄位

##### 8. **Image (Local Language)**（必填）
- **用途**：前台中文 discount card 圖片
- **建議填寫**：Card image，建議 1MB
- **備註**：如中英文同圖可重用

##### 9. **Image 2 / 3**（選填）
- **用途**：額外 card image
- **建議填寫**：Leave blank unless special implementation
- **備註**：一般前台未必使用

#### **折扣和有效期**

##### 10. **Discount Rate**（必填）
- **用途**：設定 card 折扣率
- **建議填寫**：例如 20 = 20% off
- **重要**：需跟 merchant benefit 一致

##### 11. **Redemption Period**（必填）
- **用途**：控制 discount card 有效期
- **建議填寫**：Start date - End date
- **備註**：valid period of discount card

##### 12. **Redemption Point**（視乎需要）
- **用途**：設定用 points 兌換 card 所需分數
- **建議填寫**：Points required if redeemable
- **備註**：若非兌換型 tier 可留空 / default

#### **內容說明**

##### 13. **Terms & Conditions (English)**（建議必填）
- **用途**：前台 T&C section 顯示
- **建議填寫**：HTML format
- **重要**：需用 HTML format

##### 14. **Terms & Conditions (Local Language)**（建議必填）
- **用途**：前台中文 T&C 顯示
- **建議填寫**：HTML format
- **重要**：需用 HTML format

##### 15. **How To Use (English)**（建議必填）
- **用途**：前台使用說明
- **建議填寫**：HTML format
- **備註**：PPT 指示會顯示於 front-end application

##### 16. **How To Use (Local Language)**（建議必填）
- **用途**：前台中文使用說明
- **建議填寫**：HTML format
- **重要**：需用 HTML format

#### **Welcome Pack 設定**

##### 17. **Set As Welcome Pack**（必填）
- **用途**：控制是否註冊後自動加入 wallet
- **建議填寫**：Yes for Basic welcome card
- **重要**：Basic member card 建議 Yes

##### 18. **Welcome Pack Period**（視乎需要）
- **用途**：控制 welcome pack 派發期間
- **建議填寫**：Start date - End date
- **重要**：Set As Welcome Pack = Yes 時需設定

#### **升級和續期**

##### 19. **Upgrade From**（視乎 tier）
- **用途**：指定可由哪張 card upgrade
- **建議填寫**：Can't Upgrade by default
- **備註**：預設 Can't Upgrade

##### 20. **Point For Upgrade**（視乎 tier）
- **用途**：設定升級所需最低分數
- **建議填寫**：-1 if not applicable
- **備註**：不適用留 -1

##### 21. **Renew Type**（必填）
- **用途**：設定 card renewal method
- **建議填寫**：Basic level set as Auto
- **備註**：按 tier renewal logic 設定

##### 22. **Expiry Date Pattern**（必填）
- **用途**：控制 card 到期日 pattern
- **建議填寫**：Basic: Current date + 1 year / closest next 1/4/7/10；Other tiers: Current date + 1 year
- **重要**：需同 tier policy 一致

#### **其他設定**

##### 23. **Coupon List**（選填）
- **用途**：設定此 card 包含的 coupon(s)
- **建議填寫**：Select coupons + quantity
- **備註**：需輸入每張 coupon quantity

##### 24. **Available to White Label App Only**（視乎需要）
- **用途**：限制 White Label App 使用
- **建議填寫**：Tick / Untick
- **備註**：按 app availability 決定

##### 25. **Available to Storellet App Only**（視乎需要）
- **用途**：限制 Storellet App 使用
- **建議填寫**：Tick / Untick
- **備註**：按 app availability 決定

##### 26. **Point Multiply Ratio**（必填）
- **用途**：會員持卡獲得 points 倍率
- **建議填寫**：1.0 / merchant ratio
- **重要**：需同會員等級規則一致

##### 27. **Stamp Multiply Ratio**（必填）
- **用途**：會員持卡獲得 stamp 倍率
- **建議填寫**：1.0 / merchant ratio
- **備註**：actual stamp x rate = wallet stamp

##### 28. **Not Transferable**（視乎需要）
- **用途**：設定 card 是否可轉贈
- **建議填寫**：Tick / Untick
- **備註**：PPT 標示為 transferable to other member or not

##### 29. **Share With Brands**（視乎 master brand）
- **用途**：跨品牌分享 card
- **建議填寫**：Select brands if needed
- **備註**：Master brand / multi-brand 才用

##### 30. **Hidden**（視乎需要）
- **用途**：控制是否隱藏 card
- **建議填寫**：Untick by default
- **備註**：需按前台展示需要

##### 31. **Event Tracking Submit Option**（視乎需要）
- **用途**：event tracking submit 設定
- **建議填寫**：Default
- **備註**：如無特別需求用 default

##### 32. **Status**（必填）
- **用途**：控制 card 是否有效
- **建議填寫**：Active
- **重要**：上線用 Active

##### 33. **Colour Code**（視乎設計）
- **用途**：前台 card 色系
- **建議填寫**：Hex / selected color
- **備註**：按 UI 設計填

##### 34. **Highlighted Colour Code**（視乎設計）
- **用途**：前台 highlight 色系
- **建議填寫**：Hex / selected color
- **備註**：按 UI 設計填

##### 35. **Shopline Membership Tier ID**（視乎 Shopline）
- **用途**：Shopline tier mapping
- **建議填寫**：Enter 'null' for Shopline Basic Tier
- **備註**：有 Shopline integration 先需要

### Create Discount Cards 步驟

#### **Step 1：基本設定**
1. 選擇 **Brand**（例如：ABC Brand）
2. 設定 **DiscountCard Type**（Normal Tier）
3. 設定 **Discount Level**（Basic=1, Silver=2, Gold=3, VIP=4）

#### **Step 2：卡片名稱和圖片**
1. 填寫 **Name (English)**（例如：VIP Card）
2. 填寫 **Name (Local Language)**（例如：VIP 會員）
3. 上傳 **Image (English)**（建議 1MB）
4. 上傳 **Image (Local Language)**（如中英文同圖可重用）

#### **Step 3：折扣和有效期**
1. 設定 **Discount Rate**（例如：20 代表 20% off）
2. 設定 **Redemption Period**（Start date - End date）
3. 如需 points 兌換，設定 **Redemption Point**

#### **Step 4：內容說明**
1. 填寫 **Terms & Conditions (English)** - 使用 HTML format
2. 填寫 **Terms & Conditions (Local Language)** - 使用 HTML format
3. 填寫 **How To Use (English)** - 使用 HTML format
4. 填寫 **How To Use (Local Language)** - 使用 HTML format

#### **Step 5：Welcome Pack 設定（如適用）**
1. 設定 **Set As Welcome Pack**（Basic card 設為 Yes）
2. 設定 **Welcome Pack Period**（Start date - End date）

#### **Step 6：升級和續期設定**
1. 設定 **Upgrade From**（預設 Can't Upgrade）
2. 設定 **Point For Upgrade**（不適用填 -1）
3. 設定 **Renew Type**（Basic level 設為 Auto）
4. 設定 **Expiry Date Pattern**（按 tier policy）

#### **Step 7：倍率和限制**
1. 設定 **Point Multiply Ratio**（例如：1.0）
2. 設定 **Stamp Multiply Ratio**（例如：1.0）
3. 設定 **Not Transferable**（如需禁止轉贈則勾選）
4. 設定 App 顯示限制（White Label / Storellet App Only）

#### **Step 8：最後設定**
1. 設定 **Status** 為 **Active**
2. 設定 **Colour Code** 和 **Highlighted Colour Code**（按 UI 設計）
3. 如需 Shopline integration，設定 **Shopline Membership Tier ID**
4. 確認所有資料正確

#### **Step 9：保存創建**
1. 點擊 **Create** 或 **Save** 按鈕
2. 等待系統確認創建成功
3. 在 Discount Cards List 查看新創建嘅 card

## 常見配置例子

### **Basic Welcome Pack Card**
- **Brand**：ABC Brand
- **Discount Level**：1（Basic）
- **Name**：Basic Card / 基本會員卡
- **Discount Rate**：10（10% off）
- **Set As Welcome Pack**：Yes
- **Welcome Pack Period**：2026-08-01 至 2027-12-31
- **Status**：Active

### **VIP Card**
- **Brand**：ABC Brand
- **Discount Level**：4（VIP）
- **Name**：VIP Card / VIP 會員卡
- **Discount Rate**：25（25% off）
- **Set As Welcome Pack**：No
- **Upgrade From**：Gold Card
- **Point For Upgrade**：5000
- **Status**：Active

## 注意事項

- 每個 Brand 至少要有 1 個 Basic tier / Welcome Pack
- Discount Level 需跟 Tier level 一致（1, 2, 3, 4）
- Terms & Conditions 和 How To Use 必須用 HTML format
- Set As Welcome Pack = Yes 時必須設定 Welcome Pack Period
- Expiry Date Pattern 需同 tier policy 一致
- 創建後可以在 Discount Cards List 再做編輯修改