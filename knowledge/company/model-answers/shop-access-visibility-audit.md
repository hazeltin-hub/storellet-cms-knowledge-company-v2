---
schema_version: 2
id: "COMPANY-V2-SHOP-ACCESS-VISIBILITY-AUDIT"
title: "Shop：Passcode、預設顯示、狀態與系統紀錄"
category: "Company"
module: "Shops"
screen: "Create Shop"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Shop 嘅 Passcode、Default Show、Status 同日期欄位點處理？"
alternatives:
  - "Shops 入面 Create Shop 點用？"
  - "Shop：Passcode、預設顯示、狀態與系統紀錄 有咩欄位？"
  - "Passcode 用途係咩？"
  - "Passcode 點設定？"
  - "Passcode Remark Message 用途係咩？"
  - "Passcode Remark Message 點設定？"
  - "Default Show 用途係咩？"
  - "Default Show 點設定？"
  - "Status 用途係咩？"
  - "Status 點設定？"
  - "Create Date 用途係咩？"
  - "Create Date 點設定？"
  - "Last Update Date 用途係咩？"
  - "Last Update Date 點設定？"
  - "Last Update By 用途係咩？"
  - "Last Update By 點設定？"
keywords:
  - "Company"
  - "Shops"
  - "Create Shop"
  - "Passcode"
  - "Passcode Remark Message"
  - "Default Show"
  - "Status"
  - "Create Date"
  - "Last Update Date"
  - "Last Update By"
source_title: "Company Confirmed Fields workbook"
source_path: "knowledge/references/company-confirmed-fields.xlsx"
source_anchor: "Company Confirmed Fields sheet; rows 122-128"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### 直接答案

呢組欄位控制 Shop Passcode、提示文字、預設顯示、上架狀態，以及建立及更新紀錄。

**出現位置：** CMS → Company → Shops → Create Shop；Default Show／Status 會影響分店顯示，Passcode 涉及操作或驗證。

### 已確認欄位

| Field | 必填程度 | 建議填寫／Default | 用途／影響 | 操作注意事項 | 來源頁 |
|---|---|---|---|---|---|
| **Passcode** | 視乎操作 | 分店 passcode | 分店操作 / 驗證 | 需跟 merchant / operation flow 確認 | P.26 |
| **Passcode Remark Message** | 選填 | passcode 備註 | 前台 / 內部提示 | 視乎使用情境 | P.26 |
| **Default Show** | 視乎需要 | Tick / Untick | 是否預設顯示 | 需按前台策略 | P.26 |
| **Status** | 必填 | Active | 分店是否上架 / 有效 | 上線分店設 Active | P.26 |
| **Create Date** | 系統產生 | Auto | 建立日期 | 不用改 | P.26 |
| **Last Update Date** | 系統產生 | Auto | 更新日期 | 不用填 | P.26 |
| **Last Update By** | 系統產生 | Auto | 更新人 | 不用填 | P.26 |

### 操作前注意

- Passcode 屬敏感資料，唔可以寫入知識庫、ticket 或聊天記錄。
- Status 改動前要確認分店上架及有效狀態。
- Last Update Date／Last Update By 由系統產生；Create Date 以來源 workbook 定義為準。
- 如果實際 CMS 畫面同呢份已確認資料不一致，停止推斷並交由內容負責人覆核。

## Internal Notes

- 來源：Company Confirmed Fields workbook，Company Confirmed Fields sheet rows 122-128。
- 舊 Company 單欄位答案已由呢份主題式答案取代。
