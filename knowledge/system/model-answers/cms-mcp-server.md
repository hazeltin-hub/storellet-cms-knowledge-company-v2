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
  - "CMS MCP 有咩 tools？"
  - "邊個可以開 MCP token？"
  - "Can an AI assistant manage Storellet CMS through MCP?"
keywords:
  - "Storellet CMS MCP Server"
  - "MCP"
  - "Model Context Protocol"
  - "AI assistant"
  - "access token"
  - "fine-grained permissions"
  - "GroupAuthority"
  - "presigned upload"
source_title: "Storellet CMS 0.14.0 release notes"
source_path: "private release notes — not committed"
source_anchor: "Storellet CMS MCP Server"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### 係咩？

Storellet CMS MCP Server 係自建嘅 Model Context Protocol 服務，畀獲授權 AI 助理透過受控工具讀取或管理 CMS 實體。0.14.0 UAT 已擴充公司、集團、品牌、店舖、會員、優惠同 App Config 等工具。

### 主要工具範圍

- **公司**：read／create／update。
- **集團**：list／read／create／update。
- **品牌**：list／read／create／update，包括 `brandDisplayMethod`。
- **店舖**：list／read／create／update。
- **會員（唯讀）**：搜尋會員、查看個人資料、積分、商戶關係、優惠券、折扣卡、印花卡、印花及積分歷史。
- **優惠及資產**：Favour list／read／create／update，以及建立／更新優惠券、折扣卡同 point bonus。
- **App Config**：list／get／create，附 ID 碰撞、appId 重疊及版本格式防護。
- **圖片上傳**：用 `/mcp/image/sign` 取得預簽名上傳資料，直接上傳到 bucket，再取得 CDN URL；服務亦會檢查圖片 URL 域名。

### 權限及安全限制

- **只有 Storellet 管理員可以產生 MCP token**。
- 每個 MCP 工具都會跟 CMS fine-grained permissions 對齊；有 token 唔代表自動擁有全部權限。
- 集團工具以 `GroupAuthority` 限制可操作範圍。
- 會員及優惠工具會阻止跨租戶存取。
- Token 頁支援 self-serve 管理，清單只顯示 token 前綴預覽。
- 輸入驗證及敏感欄位遮罩已收緊；唔應將完整 token、會員敏感資料或正式環境 payload 貼入公開 issue、chat 或 repository。

### 建議操作方式

1. 先確認目前環境、目標公司／集團／品牌／店舖，同執行帳戶嘅實際權限。
2. 涉及 create／update 前，先用 read／list 工具確認現況及目標 ID。
3. 對品牌、優惠、App Config 或圖片等寫入操作，先預覽輸入，再由獲授權人員確認。
4. 完成後重新讀取相關實體，核對變更結果同權限範圍。
5. 如果收到 permission denied 或跨租戶錯誤，唔好換 ID 繞過；應由管理員檢查權限。

### 注意事項

- MCP Server 係受控 CMS 操作入口，唔係繞過 CMS 權限嘅後門。
- App Config、優惠、會員權益同正式環境設定屬高風險範圍；任何寫入都要有明確授權及審計紀錄。
- 實際可用工具及參數可能按環境或版本調整，執行前應以當前 MCP tool schema 為準。

## Internal Notes

- 呢條答案整理 0.14.0 UAT 已確認嘅 MCP 工具及安全邊界，不包含 token、部署設定或客戶資料。
