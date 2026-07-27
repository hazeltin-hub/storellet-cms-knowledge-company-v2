---
id: COMPANY-003
category: Company
module: "All Companies"
intent: definition
status: confirmed
question: "Company 的 Active 和 Inactive 有咩影響？"
alternatives:
  - "Company status 點設定？"
  - "Company inactive 會點？"
  - "停用 Company 會唔會影響 Group 同 Brand？"
keywords:
  - "Company Status"
  - "Active Inactive"
  - "停用公司"
  - "Dashboard Frontend"
  - "Group Brand"
source_title: "Company Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

Company Status 係必填，建議預設為 **Active**。

- 選擇 **Active**：Company 及其下 Group／Brand 為有效。
- 選擇 **Inactive**：Company 變成無效，其下 Group／Brand 唔會再顯示於 Dashboard 或 Frontend。

## 注意事項

- 更改 Company Status 前，要先確認會否影響其下全部 Group／Brand。
