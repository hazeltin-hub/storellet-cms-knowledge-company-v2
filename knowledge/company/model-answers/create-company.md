---
schema_version: 2
id: "COMPANY-V2-CREATE-COMPANY"
title: "建立 Company：基本資料、狀態與系統欄位"
category: "Company"
module: "All Companies"
screen: "Create Company"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "點樣建立 Company，同埋各欄位有咩影響？"
alternatives:
  - "All Companies 入面 Create Company 點用？"
  - "建立 Company：基本資料、狀態與系統欄位 有咩欄位？"
  - "Company Name 用途係咩？"
  - "Company Name 點設定？"
  - "Join Date 用途係咩？"
  - "Join Date 點設定？"
  - "Status 用途係咩？"
  - "Status 點設定？"
  - "Company ID 用途係咩？"
  - "Company ID 點設定？"
  - "Create Date 用途係咩？"
  - "Create Date 點設定？"
  - "Last Update Date 用途係咩？"
  - "Last Update Date 點設定？"
  - "Last Update By 用途係咩？"
  - "Last Update By 點設定？"
keywords:
  - "Company"
  - "All Companies"
  - "Create Company"
  - "Company Name"
  - "Join Date"
  - "Status"
  - "Company ID"
  - "Create Date"
  - "Last Update Date"
  - "Last Update By"
source_title: "Company Confirmed Fields workbook"
source_path: "knowledge/references/company-confirmed-fields.xlsx"
source_anchor: "Company Confirmed Fields sheet; rows 2-8"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### 直接答案

Create Company 用嚟建立最頂層公司記錄。Company Name、Join Date 同 Status 由操作人員確認；Company ID、建立及更新資料由系統產生。

**出現位置：** CMS → Company → All Companies → Create Company；只限後台。Status 會影響旗下 Company Group／Brand 嘅有效及顯示狀態。

### 已確認欄位

| Field | 必填程度 | 建議填寫／Default | 用途／影響 | 操作注意事項 | 來源頁 |
|---|---|---|---|---|---|
| **Company Name** | 必填 | 公司註冊 / 內部公司名 | CMS 內部公司名稱 | 例如 Crozz Limited | P.6 |
| **Join Date** | 必填 | 建立日期 / 合作開始日 | 記錄公司加入日期 | 日期格式跟 CMS | P.6 |
| **Status** | 必填 | Active | 控制公司是否有效 | 正常使用設 Active | P.6 |
| **Company ID** | 系統產生 | Auto | 公司識別 ID | 一般不用手動改 | P.6 |
| **Create Date** | 系統產生 | Auto / 建立日 | 建立紀錄 | 一般不用改 | P.6 |
| **Last Update Date** | 系統產生 | Auto | 最近更新時間 | 不用填 | P.6 |
| **Last Update By** | 系統產生 | Auto | 最近更新人 | 不用填 | P.6 |

### 操作前注意

- 正式使用一般設定為 Active；改成 Inactive 前要先確認旗下 Group／Brand 嘅影響。
- Company ID、Create Date、Last Update Date、Last Update By 屬系統資料，唔需要手動填寫。
- 如果實際 CMS 畫面同呢份已確認資料不一致，停止推斷並交由內容負責人覆核。

## Internal Notes

- 來源：Company Confirmed Fields workbook，Company Confirmed Fields sheet rows 2-8。
- 舊 Company 單欄位答案已由呢份主題式答案取代。
