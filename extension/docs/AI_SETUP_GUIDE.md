# 🤖 AI Integration Setup Guide

## 概述

Chatroom 現在支援 AI fallback 功能，當找不到 model answer 時會自動使用 Claude AI 搜索 knowledge base。

## 工作流程

```
用戶問題
  ↓
搜索 Model Answer
  ↓
找到？ → 顯示 Model Answer ✅
  ↓ 沒找到
搜索 AI Knowledge Base
  ↓
AI 找到？ → 顯示 AI 答案 ✅
  ↓ AI 都找不到
顯示 "Hazel 會跟進" ⚠️
```

## 設置步驟

### 1. 獲取 Claude API Key

1. 訪問 [Anthropic Console](https://console.anthropic.com/)
2. 登入或創建帳戶
3. 前往 "API Keys" 頁面
4. 點擊 "Create API Key"
5. 複製生成的 API Key

### 2. 配置 Extension

1. 打開 `config.js`
2. 找到 `ai` 配置部分：
   ```javascript
   ai: {
     enabled: true,
     provider: "claude",
     apiKey: "YOUR_CLAUDE_API_KEY", // 在這裡填入你的 API Key
     model: "claude-3-5-sonnet-20241022",
     maxTokens: 1000,
     temperature: 0.7
   }
   ```
3. 將 `YOUR_CLAUDE_API_KEY` 替換為你的實際 API Key

### 3. 重新載入 Extension

1. 在 Chrome 中前往 `chrome://extensions/`
2. 找到 "Storellet CMS Chatroom"
3. 點擊 "重新載入" 按鈕
4. 重新開啟 Side Panel

## 配置選項

### Model 選擇

```javascript
model: "claude-3-5-sonnet-20241022"     // 推薦 - 最佳質量
// 或
model: "claude-3-5-haiku-20241022"      // 經濟版 - 較低成本
```

**選擇建議：**
- **Sonnet**：最佳回答質量，適合生產環境
- **Haiku**：成本更低，速度更快，適合測試

### Max Tokens

```javascript
maxTokens: 1000  // 答案最大長度（token 數）
```

- `500`：簡短答案
- `1000`：標準答案（推薦）
- `2000`：詳細答案

### Temperature

```javascript
temperature: 0.7  // 創造性程度
```

- `0.3`：更保守，答案更一致
- `0.7`：平衡（推薦）
- `1.0`：更有創造性，但可能不穩定

## 測試 AI 功能

### 測試問題（應該找不到 model answer）

1. **測試 AI 能找到的答案：**
   ```
   "CMS 係用咩語言寫？"
   "點樣提升 CMS 性能？"
   "Storellet 有邊啲技術優勢？"
   ```

2. **測試 AI 都找不到的答案：**
   ```
   "CMS 支持咩程式語言？"
   "點樣集成第三方 API？"
   ```

### 預期結果

**情況 1：找到 Model Answer**
```
CMS 助手：[顯示完整的 Model Answer]
資料來源：knowledge/company/model-answers/xxx.md
```

**情況 2：AI 找到答案**
```
🤖 AI 正在搜索知識庫...
CMS 助手：[AI 生成的答案基於 knowledge base]
🤖 AI 基於知識庫生成的答案
```

**情況 3：都找不到**
```
🤖 AI 正在搜索知識庫...
CMS 助手：Hazel 會跟進
```

## AI 知識庫構建

AI 使用現有的 knowledge base，函數會：
1. 從所有 model answers 構建 context
2. 每個 entry 包含：問題、類別、模組、答案摘要
3. 發送到 Claude API 搜索相關資訊

### Context 範例

```
問題：Image Field 係邊個？
類別：Company | Company Config
答案：Image Field 係 Company Config 嘅一個欄位...

---

問題：Security Code 用途？
類別：Membership | Member
答案：Security Code 用嚟識別會員身份...
```

## 故障排除

### 問題：AI 沒有啟動

**檢查：**
1. API Key 是否正確配置
2. `config.js` 中的 `ai.enabled` 是否為 `true`
3. Console 是否有錯誤訊息

**解決方法：**
- 確認 API Key 格式：`sk-ant-xxxxx`
- 檢查 API Key 是否有足夠權限

### 問題：AI 總是返回 "Hazel 會跟進"

**可能原因：**
1. Knowledge base context 不夠詳細
2. 問題真的與 knowledge base 無關
3. AI model 選擇過於保守

**解決方法：**
- 增加 `maxTokens` 到 1500
- 使用 Sonnet model 而非 Haiku
- 優化 knowledge base 內容

### 問題：AI 答案質量不佳

**解決方法：**
1. 升級到 Sonnet model
2. 增加 `maxTokens`
3. 調整 `temperature` 到 0.5-0.7
4. 優化 knowledge base 內容

## 成本估算

### Claude API 定價（參考）

**Sonnet:**
- Input: $3.00 / 1M tokens
- Output: $15.00 / 1M tokens

**Haiku:**
- Input: $0.25 / 1M tokens
- Output: $1.25 / 1M tokens

### 估算成本

假設：
- 每次搜索使用 ~50 個 model answers
- 每次 input tokens: ~2,000
- 每次 output tokens: ~500

**每 100 次 AI 搜索成本：**
- Sonnet: ~$1.35
- Haiku: ~$0.11

## 安全建議

1. **保護 API Key：**
   - 不要將 API Key 提交到公共 GitHub
   - 使用環境變量（如可能）
   - 定期輪換 API Key

2. **限額控制：**
   - 設置 API 使用限額
   - 監控使用量
   - 考虑使用 Haiku 降低成本

3. **內容過濾：**
   - AI 只搜索 knowledge base
   - 不會訪問外部網站
   - 答案基於已確認資料

## 後續優化

可以考慮的改進：
1. 添加 AI 使用統計
2. 優化 knowledge base context 構建
3. 添加 AI 答案質量評分
4. 支持多輪對話
5. 添加 AI 答案反饋機制

## 配置檢查清單

- [ ] 獲取 Claude API Key
- [ ] 更新 config.js 中的 apiKey
- [ ] 選擇合適的 model（Sonnet/Haiku）
- [ ] 設置 maxTokens 和 temperature
- [ ] 重新載入 Chrome Extension
- [ ] 測試 AI fallback 功能
- [ ] 檢查 Console 日誌
- [ ] 驗證 AI 答案質量
