---
schema_version: 2
id: "COMPANY-V2-GROUP-CONTROLS-COMPLIANCE"
title: "Company Group：條款、狀態、Master Brand 與合規設定"
category: "Company"
module: "Company Groups"
screen: "Create Company Group"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Company Group 嘅條款、狀態同合規欄位點處理？"
alternatives:
  - "Company Groups 入面 Create Company Group 點用？"
  - "Company Group：條款、狀態、Master Brand 與合規設定 有咩欄位？"
  - "Terms & Conditions (English) 用途係咩？"
  - "Terms & Conditions (English) 點設定？"
  - "Terms & Conditions (Local Language) 用途係咩？"
  - "Terms & Conditions (Local Language) 點設定？"
  - "Enable Master Brand 用途係咩？"
  - "Enable Master Brand 點設定？"
  - "Email Needed 用途係咩？"
  - "Email Needed 點設定？"
  - "Unsubscribe when … 用途係咩？"
  - "Unsubscribe when … 點設定？"
  - "Status 用途係咩？"
  - "Status 點設定？"
  - "Privacy Policy 用途係咩？"
  - "Privacy Policy 點設定？"
  - "Disabled Region Code 用途係咩？"
  - "Disabled Region Code 點設定？"
  - "Create Date 用途係咩？"
  - "Create Date 點設定？"
  - "Last Update Date 用途係咩？"
  - "Last Update Date 點設定？"
  - "Confirm / Last Update By 用途係咩？"
  - "Confirm / Last Update By 點設定？"
keywords:
  - "Company"
  - "Company Groups"
  - "Create Company Group"
  - "Terms & Conditions (English)"
  - "Terms & Conditions (Local Language)"
  - "Enable Master Brand"
  - "Email Needed"
  - "Unsubscribe when …"
  - "Status"
  - "Privacy Policy"
  - "Disabled Region Code"
  - "Create Date"
  - "Last Update Date"
  - "Confirm / Last Update By"
source_title: "Company Confirmed Fields workbook"
source_path: "knowledge/references/company-confirmed-fields.xlsx"
source_anchor: "Company Confirmed Fields sheet; rows 22-23, 26-29, 42, 45-48"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### 直接答案

呢組欄位管理中英文條款、私隱政策、Master Brand、電郵要求、退訂邏輯、地區限制、狀態及系統更新紀錄。

**出現位置：** CMS → Company → Company Groups → Create Company Group；條款及私隱內容可影響 App／Web，狀態會影響旗下 Brand。

### 已確認欄位

| Field | 必填程度 | 建議填寫／Default | 用途／影響 | 操作注意事項 | 來源頁 |
|---|---|---|---|---|---|
| **Terms & Conditions (English)** | 必填 / 視乎上架 | HTML 格式 | App 前台 T&C 顯示 | PPT 指示以 HTML format 輸入 | P.9 |
| **Terms & Conditions (Local Language)** | 必填 / 視乎上架 | HTML 格式 | App 中文 T&C 顯示 | 適用於同一 group 下所有 brands | P.9 |
| **Enable Master Brand** | 視乎需要 | Untick / Tick | 啟用 master brand 架構 | 多品牌共用 tier card / coupon 時先考慮 | P.9, P.23 |
| **Email Needed** | 視乎需要 | Tick / Untick | 是否要求會員 email | 需按 merchant 註冊要求決定 | P.9 |
| **Unsubscribe when …** | 視乎需要 | DELETED | 退訂 / 刪除狀態邏輯 | 建議沿用既定設定 | P.9 |
| **Status** | 必填 | Active | 控制 group 狀態 | 上線用 Active | P.9 |
| **Privacy Policy** | 視乎需要 | HTML 格式 | 私隱政策 | 如 app / web 需要顯示則必填 | P.11 |
| **Disabled Region Code** | 選填 | 例如 86 / 853 | 禁用電話地區碼 | 如不接受某些地區電話先填 | P.11 |
| **Create Date** | 系統產生 | Auto | 建立日期 | 不用改 | P.11 |
| **Last Update Date** | 系統產生 | Auto | 更新日期 | 不用填 | P.11 |
| **Confirm / Last Update By** | 系統產生 | Auto | 更新人 | 不用填 | P.11 |

### 操作前注意

- Enable Master Brand 只應喺多品牌共用會員等級、卡或券嘅情況考慮。
- Unsubscribe when… 應沿用已確認流程，唔好自行改變刪除邏輯。
- Create Date、Last Update Date、Confirm / Last Update By 由系統記錄。
- 如果實際 CMS 畫面同呢份已確認資料不一致，停止推斷並交由內容負責人覆核。

## Internal Notes

- 來源：Company Confirmed Fields workbook，Company Confirmed Fields sheet rows 22-23, 26-29, 42, 45-48。
- 舊 Company 單欄位答案已由呢份主題式答案取代。
