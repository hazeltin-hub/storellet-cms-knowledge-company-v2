---
id: GROUP-006
category: Company
module: "Company Groups"
intent: definition
status: confirmed
question: "Company Group 的 Active 和 Inactive 有咩影響？"
alternatives:
  - "Group status 點設定？"
  - "停用 Company Group 會點？"
  - "Inactive Group 旗下 Brand 會唔會顯示？"
keywords:
  - "Company Group Status"
  - "Group Active Inactive"
  - "停用Group"
  - "Brand Dashboard Frontend"
source_title: "Company Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

Company Group Status 係必填，建議預設為 **Active**。

- 選擇 **Active**：Group 及其下 Brand 為有效。
- 選擇 **Inactive**：Group 變成無效，其下 Brand 唔會再顯示於 Dashboard 或 Frontend。

## 注意事項

- 更改 Group Status 前，要先確認會否影響其下全部 Brand。
