# Storellet CMS Knowledge Company V2

Storellet CMS 知識庫及 Chrome Extension 整合項目。

## 項目結構

```text
storellet-cms-knowledge-company-v2/
├── knowledge/           # CMS 知識庫內容
├── extension/           # Chrome Extension 源代碼
└── legacy-snapshot/    # 舊版知識庫備份
```

## 知識庫 (`/knowledge/`)

Storellet CMS 的正式知識庫，為 Cloudflare R2 及 AI Search/RAG 系統整理。

### 內容概覽

- **95 個正式索引檔案**：涵蓋 CMS 主要模組、工作流程及 LUBUDS 專案支援
  - Company：16 條主題式答案
  - Assets、Membership、Push、Report、Application、CMS users：54 條操作指南
  - LUBUDS：12 條匿名化專案支援答案
- **多語言支援**：主要為繁體中文 (zh-HK)，針對香港用戶
- **嚴格格式**：所有內容遵循統一的 front matter schema

### 主要文件

- `knowledge/index.json`：正式知識庫索引 (95 個檔案)
- `knowledge/index.legacy.json`：舊版索引 (315 條，僅供離線覆核)
- `r2-upload-manifest.json`：R2 上載清單及 SHA-256 checksums

詳細說明請參閱 [`knowledge/README.md`](knowledge/README.md)。

## Chrome Extension (`/extension/`)

Storellet CMS Chatroom - Chrome 瀏覽器擴展功能，提供即時 CMS 知識搜尋及 AI 輔助。

### 功能特點

- **即時知識搜尋**：直接搜尋已確認的 CMS Model Answers
- **AI 輔助回應**：支援 Claude API 整合 (可選)
- **離線運作**：本機快取，無需網絡亦可使用基本功能
- **Side Panel 設計**：不干擾原有 CMS 操作介面

### 安裝方法

1. 克隆此 repository 到本地
2. 在 Chrome 開啟 `chrome://extensions`
3. 開啟右上角 **Developer mode**
4. 選擇 **Load unpacked**
5. 選擇此 repository 的 `extension/` 目錄
6. 將 Extension pin 到工具列即可使用

### Extension 文件

- [`extension/README.md`](extension/docs/extension-README.md) - Extension 使用說明
- [`extension/docs/AI_SETUP_GUIDE.md`](extension/docs/AI_SETUP_GUIDE.md) - AI 功能設置
- [`extension/docs/SETTINGS_PANEL_GUIDE.md`](extension/docs/SETTINGS_PANEL_GUIDE.md) - 設定面板說明

## 安全及隱私

- ✅ 知識庫不包含任何密碼、API key 或敏感資料
- ✅ LUBUDS WhatsApp 原始對話及附件不會提交，只保留去識別化處理流程
- ✅ Extension 不儲存用戶憑證或 CMS 登入資訊
- ✅ 所有 AI 功能均為可選，須用戶主動啟用
- ✅ R2 bucket 保持私有，不公開訪問

## 版本資訊

- **Knowledge Base**：v2.1 (2026-08-13)
- **Chrome Extension**：v1.3.0

## 貢獻及維護

此項目由 Storellet 團隊維護，供內部 Account Servicing、Product 及 Tech Team 使用。

如有問題或建議，請聯絡項目維護團隊。
