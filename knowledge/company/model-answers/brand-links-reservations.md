---
schema_version: 2
id: "COMPANY-V2-BRAND-LINKS-RESERVATIONS"
title: "Brand：網站、訂座、外部連結與客服聯絡"
category: "Company"
module: "Brands"
screen: "Create Brand"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Brand 嘅網站、訂座、外部連結同客服電郵點設定？"
alternatives:
  - "Brands 入面 Create Brand 點用？"
  - "Brand：網站、訂座、外部連結與客服聯絡 有咩欄位？"
  - "Website (English) 用途係咩？"
  - "Website (English) 點設定？"
  - "Website (Local Language) 用途係咩？"
  - "Website (Local Language) 點設定？"
  - "Reservation Methods 用途係咩？"
  - "Reservation Methods 點設定？"
  - "External Links 用途係咩？"
  - "External Links 點設定？"
  - "Customer Service Email 用途係咩？"
  - "Customer Service Email 點設定？"
  - "Info URL (English) 用途係咩？"
  - "Info URL (English) 點設定？"
  - "Info URL (Local Language) 用途係咩？"
  - "Info URL (Local Language) 點設定？"
  - "Brand Promo Web URL 用途係咩？"
  - "Brand Promo Web URL 點設定？"
keywords:
  - "Company"
  - "Brands"
  - "Create Brand"
  - "Website (English)"
  - "Website (Local Language)"
  - "Reservation Methods"
  - "External Links"
  - "Customer Service Email"
  - "Info URL (English)"
  - "Info URL (Local Language)"
  - "Brand Promo Web URL"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### 直接答案

呢組欄位管理中英文網站、訂座入口、External Links、客服電郵、品牌資訊頁同系統產生嘅 Merchant page URL。

**出現位置：** CMS → Company → Brands → Create Brand；連結會喺 App／Web 品牌頁或聯絡入口顯示。

### 已確認欄位

| Field | 必填程度 | 建議填寫／Default | 用途／影響 | 操作注意事項 | 來源頁 |
|---|---|---|---|---|---|
| **Website (English)** | 選填 | Website URL | 前台網站連結 | 需完整 URL | P.14 |
| **Website (Local Language)** | 選填 | 中文網站 URL | 中文前台網站連結 | 可與英文相同 | P.14 |
| **Reservation Methods** | 選填 | Storellet / Inline / Gulu 等 | 訂座入口 | 視乎 merchant 有無訂座平台 | P.14 |
| **External Links** | 選填 | Key、Sort、Text、Type、URL、Icon | 前台 social / external link | Icon 建議 50×50；可排序 | P.14 |
| **Customer Service Email** | 建議必填 | CS email | 點擊後導向 email app | PPT 指出 tap 後會開 email application | P.15 |
| **Info URL (English)** | 選填 | URL | 品牌資訊頁 | 可用 static shop page | P.16 |
| **Info URL (Local Language)** | 選填 | URL | 中文品牌資訊頁 | 可用 static shop page | P.16 |
| **Brand Promo Web URL** | 系統產生 / 選填 | Auto URL | Merchant page URL | 通常系統生成 / 只讀 | P.22 |

### 操作前注意

- Reservation Methods 要同實際已接駁嘅訂座平台一致。
- External Links 應核對 Key、Sort、Text、Type、URL 同 Icon。
- 所有 URL 上線前要測試；Customer Service Email 建議提供正式客服地址。
- 如果實際 CMS 畫面同呢份已確認資料不一致，停止推斷並交由內容負責人覆核。

## Internal Notes

- 來源：Company Confirmed Fields workbook，Company Confirmed Fields sheet rows 60-63, 66, 81-82, 103。
- 舊 Company 單欄位答案已由呢份主題式答案取代。
