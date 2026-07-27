---
schema_version: 2
id: "COMPANY-V2-BRAND-POINTS-QR-POS"
title: "Brand：積分上限、QR、POS、Passcode 與 Coupon Code"
category: "Company"
module: "Brands"
screen: "Create Brand"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Brand 嘅積分上限、QR、POS 同 Passcode 點設定？"
alternatives:
  - "Brands 入面 Create Brand 點用？"
  - "Brand：積分上限、QR、POS、Passcode 與 Coupon Code 有咩欄位？"
  - "Max Point Earn Per Invoice 用途係咩？"
  - "Max Point Earn Per Invoice 點設定？"
  - "Max. Time of Earn Point per Day 用途係咩？"
  - "Max. Time of Earn Point per Day 點設定？"
  - "Max. Time of Earn Point per Week 用途係咩？"
  - "Max. Time of Earn Point per Week 點設定？"
  - "Max. Time of Earn Point per Day For POS 用途係咩？"
  - "Max. Time of Earn Point per Day For POS 點設定？"
  - "Max. Time of Earn Point per Week For POS 用途係咩？"
  - "Max. Time of Earn Point per Week For POS 點設定？"
  - "QR Code Expired In Same Day 用途係咩？"
  - "QR Code Expired In Same Day 點設定？"
  - "QR Code Expiry Day 用途係咩？"
  - "QR Code Expiry Day 點設定？"
  - "By Passcode 用途係咩？"
  - "By Passcode 點設定？"
  - "Close Transaction Message Above / Below QR 用途係咩？"
  - "Close Transaction Message Above / Below QR 點設定？"
  - "Coupon Code Display Type 用途係咩？"
  - "Coupon Code Display Type 點設定？"
  - "Stamp Only 用途係咩？"
  - "Stamp Only 點設定？"
keywords:
  - "Company"
  - "Brands"
  - "Create Brand"
  - "Max Point Earn Per Invoice"
  - "Max. Time of Earn Point per Day"
  - "Max. Time of Earn Point per Week"
  - "Max. Time of Earn Point per Day For POS"
  - "Max. Time of Earn Point per Week For POS"
  - "QR Code Expired In Same Day"
  - "QR Code Expiry Day"
  - "By Passcode"
  - "Close Transaction Message Above / Below QR"
  - "Coupon Code Display Type"
  - "Stamp Only"
source_title: "Company Confirmed Fields workbook"
source_path: "knowledge/references/company-confirmed-fields.xlsx"
source_anchor: "Company Confirmed Fields sheet; rows 67-73, 80, 87-89"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### 直接答案

呢組高風險欄位控制每張單及每日／每週賺分上限、POS 賺分次數、QR 有效期、Passcode、交易提示、Coupon Code 顯示及 Stamp-only 模式。

**出現位置：** CMS → Company → Brands → Create Brand；設定會直接影響 POS、會員儲分、QR 及兌換流程。

### 已確認欄位

| Field | 必填程度 | 建議填寫／Default | 用途／影響 | 操作注意事項 | 來源頁 |
|---|---|---|---|---|---|
| **Max Point Earn Per Invoice** | 必填 | 99999 / 按規則 | 每張單可賺最多積分 | 需同會員規則一致 | P.15 |
| **Max. Time of Earn Point per Day** | 必填 | 999 | 每日可賺積分次數上限 | PPT 建議正常設 999 | P.15 |
| **Max. Time of Earn Point per Week** | 必填 | 999 | 每週可賺積分次數上限 | PPT 建議正常設 999 | P.15 |
| **Max. Time of Earn Point per Day For POS** | 必填 | 1 / 按 merchant 要求 | POS 每日賺分次數上限 | 會影響 POS 儲分 | P.15 |
| **Max. Time of Earn Point per Week For POS** | 必填 | 1 / 按 merchant 要求 | POS 每週賺分次數上限 | 會影響 POS 儲分 | P.15 |
| **QR Code Expired In Same Day** | 視乎需要 | Tick / Untick | 控制 QR code 有效期 | 需配合 POS / app flow | P.15 |
| **QR Code Expiry Day** | 必填 | -1 default | QR code 到期日 | -1 為 default | P.15 |
| **By Passcode** | 視乎需要 | Yes / No | 是否用 passcode | 需跟註冊 / join flow 一致 | P.16 |
| **Close Transaction Message Above / Below QR** | 視乎 POS | Default | POS / close transaction 顯示文案 | 無特別需求建議 default | P.17-P.18 |
| **Coupon Code Display Type** | 視乎 POS | Member ID and Coupon ID | Coupon code 顯示邏輯 | 需跟 POS redeem flow 一致 | P.18 |
| **Stamp Only** | 視乎需要 | No | 是否 stamp only brand | 特定 stamp flow 先用 | P.18 |

### 操作前注意

- 積分上限必須同會員規則一致；POS 每日／每週次數要按商戶要求確認。
- QR Code Expired In Same Day 同 QR Code Expiry Day 要配合 POS／App flow。
- Coupon Code Display Type 要同 POS redeem flow 一致；Passcode 不可放入知識庫或聊天記錄。
- 如果實際 CMS 畫面同呢份已確認資料不一致，停止推斷並交由內容負責人覆核。

## Internal Notes

- 來源：Company Confirmed Fields workbook，Company Confirmed Fields sheet rows 67-73, 80, 87-89。
- 舊 Company 單欄位答案已由呢份主題式答案取代。
