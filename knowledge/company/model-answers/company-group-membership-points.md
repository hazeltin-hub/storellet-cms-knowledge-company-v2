---
schema_version: 2
id: "COMPANY-V2-GROUP-MEMBERSHIP-POINTS"
title: "Company Group：會員上限、積分比例與到期規則"
category: "Company"
module: "Company Groups"
screen: "Create Company Group"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Company Group 嘅會員上限同積分規則點設定？"
alternatives:
  - "Company Groups 入面 Create Company Group 點用？"
  - "Company Group：會員上限、積分比例與到期規則 有咩欄位？"
  - "Point Ratio 用途係咩？"
  - "Point Ratio 點設定？"
  - "Display Point Ratio 用途係咩？"
  - "Display Point Ratio 點設定？"
  - "Member No. Limit 用途係咩？"
  - "Member No. Limit 點設定？"
  - "CS App Point Limit 用途係咩？"
  - "CS App Point Limit 點設定？"
  - "User Point Expiry Type 用途係咩？"
  - "User Point Expiry Type 點設定？"
keywords:
  - "Company"
  - "Company Groups"
  - "Create Company Group"
  - "Point Ratio"
  - "Display Point Ratio"
  - "Member No. Limit"
  - "CS App Point Limit"
  - "User Point Expiry Type"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### 直接答案

呢組欄位控制積分計算、前台積分比例文字、會員數量上限、CS App 積分上限及會員積分到期方式。

**出現位置：** CMS → Company → Company Groups → Create Company Group；設定會影響會員積分及前台顯示。

### 已確認欄位

| Field | 必填程度 | 建議填寫／Default | 用途／影響 | 操作注意事項 | 來源頁 |
|---|---|---|---|---|---|
| **Point Ratio** | 必填 | 例如 $1 = 1 point(s) | 積分比例計算 | PPT 指示需以文字 / 數值形式輸入 | P.8 |
| **Display Point Ratio** | 選填 | 可留空 | 前台顯示用積分比例文字 | PPT 指示 Keep Blank | P.8 |
| **Member No. Limit** | 必填 | -1 | 會員數量上限 | -1 代表 unlimited，PPT 建議正常用 -1 | P.9 |
| **CS App Point Limit** | 必填 | -1 | App 內可累積會員積分上限 | -1 代表 unlimited | P.9 |
| **User Point Expiry Type** | 必填 | 選擇 expiry type | 控制會員積分到期方式 | 需同 merchant 會員條款一致 | P.11 |

### 操作前注意

- Point Ratio 同 User Point Expiry Type 必須同商戶會員條款一致。
- 來源以 -1 表示 Member No. Limit／CS App Point Limit 不設上限。
- Display Point Ratio 只係前台文字，唔應代替實際 Point Ratio。
- 如果實際 CMS 畫面同呢份已確認資料不一致，停止推斷並交由內容負責人覆核。

## Internal Notes

- 來源：Company Confirmed Fields workbook，Company Confirmed Fields sheet rows 16-17, 24-25, 44。
- 舊 Company 單欄位答案已由呢份主題式答案取代。
