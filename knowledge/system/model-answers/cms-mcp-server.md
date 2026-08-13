---
schema_version: 2
id: "CMS-MCP-SERVER-0.14.0"
title: "Storellet CMS MCP Server 功能及權限"
category: "System"
module: "CMS MCP Server"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Storellet CMS MCP Server 係咩，可以做到啲咩？"
alternatives:
  - "Storellet CMS MCP Server"
  - "CMS MCP 有咩功能？"
  - "邊個可以開通 MCP？"
  - "Can an AI assistant manage Storellet CMS through MCP?"
keywords:
  - "Storellet CMS MCP Server"
  - "MCP"
  - "AI assistant"
  - "CMS AI 助理"
  - "MCP 權限"
  - "MCP 圖片上傳"
source_title: "Storellet CMS 0.14.0 release notes"
source_path: "private release notes — not committed"
source_anchor: "Storellet CMS MCP Server"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### 係咩？

Storellet CMS MCP Server 係畀獲授權 AI 助理協助處理 CMS 工作嘅服務。0.14.0 已擴充公司、集團、品牌、店舖、會員、優惠同 App Config 等功能。

### 主要工具範圍

- **公司**：查看、新增及更新。
- **集團**：搜尋、查看、新增及更新。
- **品牌**：搜尋、查看、新增及更新。
- **店舖**：搜尋、查看、新增及更新。
- **會員（唯讀）**：搜尋會員、查看個人資料、積分、商戶關係、優惠券、折扣卡、印花卡、印花及積分歷史。
- **優惠及資產**：搜尋、查看、新增及更新優惠、優惠券、折扣卡同積分獎賞。
- **App Config**：搜尋、查看及新增；系統會檢查重複設定及版本格式。
- **圖片上傳**：可經受控流程上傳圖片並取得可用網址。

### 權限及安全限制

- **只有 Storellet 管理員可以開通 MCP 存取**。
- MCP 會跟現有 CMS 權限限制可查看及可修改範圍；開通 MCP 唔代表自動擁有全部權限。
- 帳戶只可以處理獲授權嘅集團、品牌、店舖、會員及優惠資料。
- 存取資料只會顯示必要預覽，敏感內容唔應貼入公開 issue、chat 或 repository。

### 建議操作方式

1. 先確認目前環境、目標公司／集團／品牌／店舖，同執行帳戶嘅實際權限。
2. 涉及新增或更新前，先查看現況及確認目標資料。
3. 對品牌、優惠、App Config 或圖片等寫入操作，先預覽輸入，再由獲授權人員確認。
4. 完成後重新讀取相關實體，核對變更結果同權限範圍。
5. 如果畫面顯示冇權限或無法存取，唔好改用其他帳戶繞過；應由管理員檢查權限。

### 注意事項

- MCP Server 係受控 CMS 操作入口，唔係繞過 CMS 權限嘅後門。
- App Config、優惠、會員權益同正式環境設定屬高風險範圍；任何寫入都要有明確授權及審計紀錄。
- 實際可用功能可能按環境或版本調整，操作前應以目前畫面同權限為準。

## Internal Notes

- 呢條答案整理 0.14.0 UAT 已確認嘅 MCP 工具及安全邊界，不包含 token、部署設定或客戶資料。
