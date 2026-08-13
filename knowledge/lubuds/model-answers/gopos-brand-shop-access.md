---
schema_version: 2
id: "LUBUDS-GOPOS-BRAND-SHOP-ACCESS"
title: "LUBUDS GoPOS Brand／Shop Access 排查"
category: "LUBUDS Operations"
module: "GoPOS Integration"
intent: "troubleshooting"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "GoPOS 顯示 Brand is not accessible by this POS 或 Shop is not correct，點處理？"
alternatives:
  - "新店 POS 讀唔到會員"
  - "新增 brand 後 GoPOS 無權限"
  - "Shop Code 同 Brand ID 點核對？"
  - "Brand is not accessible by this POS"
keywords:
  - "LUBUDS"
  - "GoPOS"
  - "Brand is not accessible"
  - "Shop is not correct"
  - "Brand ID"
  - "Shop Code"
  - "access grant"
source_title: "Private LUBUDS and GoPOS project conversations"
source_path: "private source — not committed"
source_anchor: "2024-06 onward"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### 常見原因

呢類錯誤通常係 POS key 未獲授權使用該 Brand ID、Shop Code 與 Brand 配對錯誤、或者用錯 UAT／Production 設定。新品牌或新店唔會自動保證現有 POS key 已有權限。

### 排查步驟

1. 確認目前係 UAT 定 Production，唔好混用兩邊 ID 或 key。
2. 由 CMS／正式設定核對 Brand ID、Shop Code 及店舖名稱。
3. 確認 POS 使用緊邊個 key，並檢查該 key 嘅 allowed Brand IDs。
4. 如果係新正式品牌／店舖，由獲授權人員加 access grant；測試用途應優先使用 UAT。
5. 設定更新後等配置生效，再用同一店測試 member enquiry 及一張測試交易。
6. 測試成功後，再確認其他店舖無被錯誤影響。

### 建議回覆

「呢個訊息通常代表 POS key、Brand ID 或 Shop Code 配對未完成。我哋需要先確認環境、Shop Code、Brand ID 同目前 POS key，核對授權後再測試。」

### 注意事項

- 唔好為求暫時成功而改用另一品牌 ID；交易可能會入錯品牌。
- POS key、完整配置及 allowed Brand ID 清單屬內部資料，唔好放入公開 repository。

## Internal Notes

- 多個歷史新店個案均涉及 brand access grant 或配置配對問題。
