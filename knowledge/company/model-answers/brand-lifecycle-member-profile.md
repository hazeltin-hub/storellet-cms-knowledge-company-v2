---
schema_version: 2
id: "COMPANY-V2-BRAND-LIFECYCLE-MEMBER-PROFILE"
title: "Brand：有效期、會員 Profile、迎新禮與兌換頁"
category: "Company"
module: "Brands"
screen: "Create Brand"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Brand 有效期、會員 Profile、迎新禮同兌換頁點設定？"
alternatives:
  - "Brands 入面 Create Brand 點用？"
  - "Brand：有效期、會員 Profile、迎新禮與兌換頁 有咩欄位？"
  - "Join Date 用途係咩？"
  - "Join Date 點設定？"
  - "Expiry Date 用途係咩？"
  - "Expiry Date 點設定？"
  - "Show Point Or Stamp on App 用途係咩？"
  - "Show Point Or Stamp on App 點設定？"
  - "Enable Brand Profile 用途係咩？"
  - "Enable Brand Profile 點設定？"
  - "Allow recreate brand profile after … days 用途係咩？"
  - "Allow recreate brand profile after … days 點設定？"
  - "Allow to get welcome gift again 用途係咩？"
  - "Allow to get welcome gift again 點設定？"
  - "Require Same Email With Storellet Profile 用途係咩？"
  - "Require Same Email With Storellet Profile 點設定？"
  - "Show Redemption Page on App 用途係咩？"
  - "Show Redemption Page on App 點設定？"
keywords:
  - "Company"
  - "Brands"
  - "Create Brand"
  - "Join Date"
  - "Expiry Date"
  - "Show Point Or Stamp on App"
  - "Enable Brand Profile"
  - "Allow recreate brand profile after … days"
  - "Allow to get welcome gift again"
  - "Require Same Email With Storellet Profile"
  - "Show Redemption Page on App"
source_title: "Company Confirmed Fields workbook"
source_path: "knowledge/references/company-confirmed-fields.xlsx"
source_anchor: "Company Confirmed Fields sheet; rows 64-65, 94-99"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### 直接答案

呢組欄位控制 Brand 生效期間、App 顯示積分／印花、Brand Profile、刪除後重建間隔、再次領迎新禮、電郵一致性及兌換頁。

**出現位置：** CMS → Company → Brands → Create Brand；會直接影響會員加入、重建 Profile、迎新禮及 App 兌換體驗。

### 已確認欄位

| Field | 必填程度 | 建議填寫／Default | 用途／影響 | 操作注意事項 | 來源頁 |
|---|---|---|---|---|---|
| **Join Date** | 必填 | 品牌開始日期 | 控制品牌有效期 / 顯示 | 需配合上線時間 | P.15 |
| **Expiry Date** | 必填 | 品牌到期日 | 控制品牌有效期 | 長期可設遠期日期 | P.15 |
| **Show Point Or Stamp on App** | 建議必填 | Yes | App 顯示積分 / 印花 | PPT 指示 set as Yes | P.19 |
| **Enable Brand Profile** | 建議必填 | Tick | 啟用品牌頁 | 如 app / web 要見 brand profile，需啟用 | P.19 |
| **Allow recreate brand profile after … days** | 視乎需要 | 365 | 重新建立 profile 間隔 | 需按 account deletion / rejoin flow | P.19 |
| **Allow to get welcome gift again** | 視乎需要 | Untick | 是否可再次拎迎新禮 | 一般不建議開 | P.19 |
| **Require Same Email With Storellet Profile** | 視乎需要 | Tick | 要求 email 一致 | 需配合會員資料邏輯 | P.19 |
| **Show Redemption Page on App** | 視乎需要 | Yes | App 顯示兌換頁 | 有 coupon / redemption 先開 | P.19 |

### 操作前注意

- Join Date／Expiry Date 要同品牌正式生效期一致。
- Allow to get welcome gift again 來源一般建議保持 Untick。
- 重建 Profile、電郵一致性及兌換頁設定要配合 account deletion、rejoin 同 coupon flow。
- 如果實際 CMS 畫面同呢份已確認資料不一致，停止推斷並交由內容負責人覆核。

## Internal Notes

- 來源：Company Confirmed Fields workbook，Company Confirmed Fields sheet rows 64-65, 94-99。
- 舊 Company 單欄位答案已由呢份主題式答案取代。
