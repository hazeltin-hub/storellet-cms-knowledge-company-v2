# Membership Knowledge Base

資料來源：`Membership Confirmed Fields.csv`
最後確認：2026-07-24
有效資料：106 條

## 內容結構

```
knowledge/membership/
├── membership-field-reference.md          # Membership 欄位參考文檔
├── membership-field-reference.json        # Membership 欄位 JSON 數據
└── model-answers/                         # Membership Model Answers
    ├── membership-overview.md              # Membership 概覽
    ├── member-search.md                     # Member 搜索功能
    ├── member-status.md                      # Member 狀態管理
    ├── verification-code-list.md            # Verification Code List 說明
    ├── invoice-list.md                        # Invoice List 說明
    └── fields/                                 # 106 個專門欄位 Model Answers
        ├── member-*.md                       # Member 相關欄位 (94個)
        ├── verification-code-*.md           # Verification Code 欄位 (5個)
        └── invoice-*.md                       # Invoice 欄位 (7個)
```

## Membership 功能模組

### 1. Member（會員管理）- 94 個欄位 ✅ **100% 覆蓋**
- **搜索欄位**：Member No., Phone No., Email, Facebook ID
- **顯示欄位**：Alias no., Security Code, Status
- **Storellet Profile**：Phone, Email, Facebook ID, Display Name, Gender, Birthday, Join Date
- **新聞偏好**：Receive News in Storellet, Receive News - Global, by Email, by App Push, by Sms, by Communication Platform, by Website
- **會員關係**：Membership Group, Brands
- **Group 欄位**：Status, Bound Member No., Point(s), Deliver Coupon, Expiry Date, Sales Amount, News preferences
- **資產表格**：Discount Card Table, Coupon Summary Table, Coupon Card Table, Stamp Table, Stamp Card Table, Bingo Table, History Table

### 2. Verification Code（驗證碼管理）- 5 個欄位 ✅ **100% 覆蓋**
- **搜索欄位**：Phone No., Email
- **驗證碼欄位**：Verification Code, Expiry Date, Status

### 3. Invoice（發票管理）- 7 個欄位 ✅ **100% 覆蓋**
- **搜索欄位**：Complete Invoice No., Brand, Shop, Transaction Date
- **發票欄位**：Purchase Time, Info, Redeem

## 📊 覆蓋率統計

| 功能模組 | 欄位數量 | Model Answers | 覆蓋率 |
|---|---|---|---|
| **Member** | 94 | 94 | ✅ **100%** |
| **Verification Code** | 5 | 5 | ✅ **100%** |
| **Invoice** | 7 | 7 | ✅ **100%** |
| **總計** | **106** | **106** | ✅ **100%** |

## 欄位分類詳情

### Member 搜索欄位（4 個）
- `member-member-no-001.md` - Member No. 搜索
- `member-phone-no-002.md` - Phone No. 搜索
- `member-email-003.md` - Email 搜索
- `member-facebook-id-004.md` - Facebook ID 搜索

### Member 基本顯示欄位（3 個）
- `member-member-no-005.md` - Member No. 顯示
- `member-alias-no-007.md` - Alias no.
- `member-security-code-008.md` - Security Code

### Member Status 欄位（1 個）
- `member-status-006.md` - Status 管理

### Storellet Profile 欄位（12 個）
- `member-storellet-profilephone-no-009.md` - Phone No.
- `member-storellet-profilecountry-code-010.md` - Country Code
- `member-storellet-profileemail-011.md` - Email
- `member-storellet-profilefacebook-id-012.md` - Facebook ID
- `member-storellet-profiledisplay-name-013.md` - Display Name
- `member-storellet-profilefirst-name-014.md` - First Name
- `member-storellet-profilelast-name-015.md` - Last Name
- `member-storellet-profilegender-016.md` - Gender
- `member-storellet-profilebirthday-017.md` - Birthday
- `member-storellet-profilejoin-date-018.md` - Join Date
- `member-storellet-profilereceive-news-in-storellet-019.md` - Receive News in Storellet
- `member-storellet-profilereceive-news-global-020.md` - Receive News - Global
- `member-storellet-profilereceive-news-by-email-021.md` - Receive News - by Email
- `member-storellet-profilereceive-news-by-app-push-022.md` - Receive News - by App Push
- `member-storellet-profilereceive-news-by-sms-023.md` - Receive News - by Sms
- `member-storellet-profilereceive-news-by-communication-platform-024.md` - Receive News - by Communication Platform
- `member-storellet-profilereceive-news-by-website-025.md` - Receive News - by Website

### Member 關係和 Group 欄位（13 個）
- `member-membership-group-026.md` - Membership Group
- `member-brands-027.md` - Brands
- `member-groupstatus-028.md` - Group：Status
- `member-groupbound-member-no-029.md` - Group：Bound Member No.
- `member-grouppoints-030.md` - Group：Point(s)
- `member-groupdelivey-coupon-031.md` - Group：Delivey Coupon
- `member-groupexpiry-date-032.md` - Group：Expiry Date
- `member-groupactual-accu-sales-amount-033.md` - Group：Actual Accu. Sales Amount
- `member-groupreceive-news-global-034.md` - Group：Receive News - Global
- `member-groupreceive-news-by-email-035.md` - Group：Receive News - by Email
- `member-groupreceive-news-by-app-push-036.md` - Group：Receive News - by App Push
- `member-groupreceive-news-by-sms-037.md` - Group：Receive News - by Sms
- `member-groupreceive-news-by-communication-platform-038.md` - Group：Receive News - by Communication Platform
- `member-groupreceive-news-by-website-039.md` - Group：Receive News - by Website

### Discount Card Table 欄位（9 個）
- `member-discount-card-tablebrand-040.md` - Brand
- `member-discount-card-tablemembership-level-041.md` - Membership Level
- `member-discount-card-tablediscount-rate-042.md` - Discount Rate
- `member-discount-card-tableexpiry-date-043.md` - Expiry Date
- `member-discount-card-tablestart-date-044.md` - Start Date
- `member-discount-card-tablestatus-045.md` - Status
- `member-discount-card-tableremark-046.md` - Remark
- `member-discount-card-tabledetail-047.md` - Detail 操作
- `member-discount-card-tableexpire-048.md` - Expire 操作
- `member-discount-card-tableedit-049.md` - Edit 操作

### Coupon Summary Table 欄位（7 個）
- `member-coupon-summary-tablebrand-050.md` - Brand
- `member-coupon-summary-tablecoupon-id-051.md` - Coupon ID
- `member-coupon-summary-tablecoupon-052.md` - Coupon
- `member-coupon-summary-tableactive-count-053.md` - Active Count
- `member-coupon-summary-tableused-count-054.md` - Used Count
- `member-coupon-summary-tableexpired-count-055.md` - Expired Count
- `member-coupon-summary-tablestatus-056.md` - Status
- `member-coupon-summary-tabledetail-057.md` - Detail 操作

### Coupon Card Table 欄位（10 個）
- `member-coupon-card-tablebrand-058.md` - Brand
- `member-coupon-card-tablecoupon-059.md` - Coupon
- `member-coupon-card-tablestart-date-060.md` - Start Date
- `member-coupon-card-tableexpiry-date-061.md` - Expiry Date
- `member-coupon-card-tableextended-expiry-date-062.md` - Extended Expiry Date
- `member-coupon-card-tableserial-no-063.md` - Serial No.
- `member-coupon-card-tablestatus-064.md` - Status
- `member-coupon-card-tableremark-065.md` - Remark
- `member-coupon-card-tabledetail-066.md` - Detail 操作
- `member-coupon-card-tableexpire-067.md` - Expire 操作
- `member-coupon-card-tableuse-068.md` - Use 操作

### Stamp Table 欄位（8 個）
- `member-stamp-tablebrand-069.md` - Brand (multiple)
- `member-stamp-tablebrand-070.md` - Brand (multiple)
- `member-stamp-tablebrand-071.md` - Brand (multiple)
- `member-stamp-tablebrand-072.md` - Brand (multiple)
- `member-stamp-tablebrand-073.md` - Brand (multiple)
- `member-stamp-tablebrand-074.md` - Brand (multiple)
- `member-stamp-tablebrand-075.md` - Brand (multiple)
- `member-stamp-tablebrand-076.md` - Brand (multiple)
- `member-stamp-tablebrand-077.md` - 操作按鈕

### Stamp Card Table 欄位（3 個）
- `member-stamp-card-tablebrand-078.md` - Brand
- `member-stamp-card-tablecreate-date-079.md` - Create Date
- `member-stamp-card-tableno-of-stamp-used-080.md` - No. of Stamp used
- `member-stamp-card-tablestamp-card-tableredeemed-coupon-081.md` - Redeemed Coupon

### Bingo Table 欄位（6 個）
- `member-bingo-tablebrand-082.md` - Brand
- `member-bingo-tablename-083.md` - Name
- `member-bingo-tablestart-date-084.md` - Start Date
- `member-bingo-tableexpiry-date-085.md` - Expiry Date
- `member-bingo-tableserial-no-086.md` - Serial No.
- `member-bingo-tablestatus-087.md` - Status

### History Table 欄位（7 個）
- `member-history-tablebrand-088.md` - Brand
- `member-history-tablecreate-date-089.md` - Create Date
- `member-history-tabletransaction-time-090.md` - Transaction Time
- `member-history-tablepoint-change-091.md` - Point Change
- `member-history-tabletype-092.md` - Type
- `member-history-tableshop-093.md` - Shop
- `member-history-tabledescription-094.md` - Description

### Verification Code 欄位（5 個）
- `verification-code-phone-no-095.md` - Phone No. 搜索
- `verification-code-email-096.md` - Email 搜索
- `verification-code-verification-code-097.md` - Verification Code
- `verification-code-expiry-date-098.md` - Expiry Date
- `verification-code-status-099.md` - Status

### Invoice 欄位（7 個）
- `invoice-complete-invoice-no-100.md` - Complete Invoice No.
- `invoice-brand-101.md` - Brand
- `invoice-shop-102.md` - Shop
- `invoice-transaction-date-103.md` - Transaction Date
- `invoice-purchase-time-104.md` - Purchase Time
- `invoice-info-105.md` - Info
- `invoice-redeem-106.md` - Redeem

## 使用指南

### 查找特定欄位
1. 所有 106 個欄位都有專門 model answer
2. 文件命名格式：`config-field_name-index.md`
3. 每個欄位都有完整的用途說明和使用場景

### 搜索測試示例
- ✅ 「Security Code 係做咩用途？」→ `member-security-code-008.md`
- ✅ 「Display Name 點樣用？」→ `member-storellet-profiledisplay-name-013.md`
- ✅ 「Group Point(s) 係咩？」→ `member-grouppoints-030.md`
- ✅ 「Coupon Card Table Status 係邊個？」→ `member-coupon-card-tablestatus-064.md`

## 資料更新

- 2026-07-24：創建 Membership Knowledge Base
- 基於 `Membership Confirmed Fields.csv`（106 條資料）
- **✅ 100% 覆蓋率**：所有 106 個欄位都有專門 model answer
- 涵蓋 3 個主要功能：Member (94), Verification Code (5), Invoice (7)

## 相關文檔

- Company Knowledge Base：`knowledge/company/`
- Assets Knowledge Base：`knowledge/assets/`
- Membership 欄位參考：`membership-field-reference.md`

## 🎯 100% 覆蓋率完成

**✅ Membership tab 的所有 106 個欄位都有對應的 model answer**
**✅ 每個欄位都有詳細的用途說明、使用場景和注意事項**
**✅ 與 Company knowledge base 一樣的完整覆蓋率**