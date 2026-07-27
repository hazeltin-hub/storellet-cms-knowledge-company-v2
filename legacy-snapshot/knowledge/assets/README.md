# Assets Knowledge Base

資料來源：`assets_confirmed_fields.xlsx`
最後確認：2026-07-24
有效資料：230 條

## 內容結構

```
knowledge/assets/
├── assets-field-reference.md          # Assets 欄位參考文檔
├── assets-field-reference.json        # Assets 欄位 JSON 數據
└── model-answers/                      # Assets Model Answers
    ├── assets-overview.md              # Assets 概覽
    ├── assets-creation-guide.md        # 創建指南總覽
    ├── points-list.md                  # Points List 說明
    ├── create-new-points.md            # Create Points 步驟
    ├── discount-cards-list.md         # Discount Cards List 說明
    ├── create-discount-cards.md        # Create Discount Cards 步驟
    ├── bingo-list.md                   # Bingo List 說明
    ├── create-bingo.md                 # Create Bingo 步驟
    ├── stamps-list.md                  # Stamps List 說明
    ├── create-stamp.md                 # Create Stamp 步驟
    ├── coupons-list.md                 # Coupons List 說明
    ├── create-coupon.md                # Create Coupon 步驟
    ├── coupon-packages-list.md         # Coupon Packages List 說明
    ├── coupon-trigger-rules-list.md    # Coupon Trigger Rules List 說明
    ├── coupon-trigger-type.md          # Coupon Trigger Type 說明
    ├── surveys-list.md                 # Surveys List 說明
    ├── coupon-tab-location.md          # Coupon Tab 位置
    ├── discount-card-tab-location.md   # Discount Card Tab 位置
    ├── points-tab-location.md          # Points Tab 位置
    ├── bingo-tab-location.md           # Bingo Tab 位置
    ├── stamps-tab-location.md          # Stamps Tab 位置
    └── surveys-tab-location.md         # Surveys Tab 位置
```

## Assets 資產類型

### 1. Points（積分獎品）
- Points List（10 個顯示欄位）
- Create new Points（12 個創建欄位）

### 2. Discount Cards（折扣卡）
- Discount Cards List（10 個顯示欄位）
- Create Discount Cards（35 個創建欄位）

### 3. Bingo（賓果遊戲）
- Bingo List（10 個顯示欄位）
- Create new Bingo（21 個創建欄位）

### 4. Stamps（印花卡）
- List all Stamps（8 個顯示欄位）
- Create new Stamp（25 個創建欄位）

### 5. Coupons（優惠券）
- Coupons List（12 個顯示欄位）
- Create Coupon（33 個創建欄位）

### 6. Coupon Packages（優惠券套裝）
- Coupon Packages List（7 個顯示欄位）
- Create Coupon Package（13 個創建欄位）

### 7. Coupon Trigger Rules（優惠券觸發規則）
- Coupon Trigger Rules List（5 個顯示欄位）
- Create Coupon Trigger Rule（7 個創建欄位）

### 8. Surveys（問卷調查）
- Surveys List（8 個顯示欄位）
- Create Survey（14 個創建欄位）

## 使用指南

### 查找資料
1. 查看資產類型概覽：`assets-overview.md`
2. 查看具體創建步驟：`create-[資產類型].md`
3. 參考欄位詳細說明：`assets-field-reference.md`

### 創建 Assets 步驟
1. 閱讀 `assets-creation-guide.md` 了解整體流程
2. 參考具體資產類型嘅創建指南
3. 按照步驟填寫必填欄位
4. 設定有效期和顯示範圍
5. 保存並測試資產運作

### 常見問題
- 所有資產都需要設定 Brand 或 Group
- 大部分資產需要上傳圖片（建議 1MB 以內）
- 有效期（Start Date 和 End Date）係必填欄位
- Status 通常設為 Active 才會正常顯示

## 資料更新

- 2026-07-24：創建 Assets Knowledge Base
- 基於 `assets_confirmed_fields.xlsx`（230 條資料）
- 涵蓋 8 種資產類型嘅完整說明

## 相關文檔

- Company Knowledge Base：`knowledge/company/`
- Model Answers 格式指南：參考 Company 結構
- Assets 欄位參考：`assets-field-reference.md`