# 🔧 Chatbot 知識庫載入問題調試指南

## 問題：未能載入知識庫 - 所有知識庫來源均失敗

### 📋 快速診斷步驟

#### 方法 1：使用瀏覽器測試工具（推薦）

1. **打開測試頁面**
   ```
   在瀏覽器中打開：test-cf-access.html
   ```

2. **運行測試**
   - 點擊 "Test CF Access" - 測試 Cloudflare Access 認證
   - 點擊 "Test ZIP Download" - 測試 ZIP 下載和解壓
   - 點擊 "Test Full Process" - 測試完整載入流程

3. **查看結果**
   - 🟢 綠色 = 成功
   - 🔴 紅色 = 失敗
   - 🔵 藍色 = 信息

#### 方法 2：檢查 Chrome Extension Console

1. **開啟 Side Panel**
   - 點擊 Chrome Extension 圖標
   - 開啟 "Storellet CMS Chatroom"

2. **開啟 DevTools**
   - 在 Side Panel 內按 `F12` 或右鍵 → "檢查"
   - 切換到 "Console" 標籤

3. **重新載入知識庫**
   - 點擊 Side Panel 上的 ↻ (重新載入) 按鈕
   - 查看 Console 中的詳細日誌

4. **尋找錯誤信息**
   應該會看到類似這樣的日誌：
   ```
   📦 Loading knowledge from: https://...
   🔐 Using Cloudflare Access user session: Yes
   ⬇️  Starting download...
   ✅ Downloaded XXXX bytes
   📦 Starting unzip...
   ```

### 🚨 常見問題診斷

#### 問題 1：CF Access 認證失敗

**Console 錯誤：**
```
❌ CF Access authentication failed: 401
❌ CF Access authentication failed: 403
```

**解決方法：**
1. 確認登入閘門顯示「Cloudflare 已登入」
2. 檢查 `config.js` 中的 Cloudflare Access URLs：
   ```javascript
   cloudflareAccess: {
     enabled: true,
     identityUrl: "https://storellet-knowledge.storellet.com/cdn-cgi/access/get-identity",
     logoutUrl: "https://storellet-knowledge.storellet.com/cdn-cgi/access/logout"
   }
   ```
3. 直接開啟知識庫網址，確認公司帳戶符合 Cloudflare Access Allow policy
4. 不要在 Extension、文件或 repo 內儲存 Service Token secret

#### 問題 2：ZIP URL 不可訪問

**Console 錯誤：**
```
❌ Download failed: 404 Not Found
❌ Download failed: Connection refused
```

**解決方法：**
1. 確認 ZIP URLs 是否正確：
   - `https://storellet-knowledge.storellet.com/storellet-knowledge.zip`
   - `https://storellet-knowledge.storellet.com/knowledge.zip`
2. 直接在瀏覽器中訪問這些 URLs（可能需要登入）
3. 檢查 Cloudflare Access 規則

#### 問題 3：CORS 錯誤

**Console 錯誤：**
```
❌ Error: CORS policy: No 'Access-Control-Allow-Origin' header
```

**解決方法：**
1. 檢查 `manifest.json` 中的 host_permissions：
   ```json
   "host_permissions": [
     "https://storellet-knowledge.storellet.com/*"
   ]
   ```
2. 確認 Cloudflare Access 設定允許 CORS

#### 問題 4：不是 ZIP 格式

**Console 錯誤：**
```
❌ Not a ZIP file. First bytes: 3c21444f...
```

**解決方法：**
1. 確認下載的文件是 ZIP 格式
2. 檢查 URL 是否返回 HTML 錯誤頁面而非 ZIP 文件
3. 直接下載 ZIP 文件並驗證內容

#### 問題 5：ZIP 中沒有 index.json

**Console 錯誤：**
```
❌ ZIP 中未找到 index.json
❌ Available files: [some, files, listed]
```

**解決方法：**
1. 檢查 ZIP 文件結構：
   ```
   storellet-knowledge.zip/
   ├── knowledge/
   │   └── index.json  <-- 必須有這個文件
   ├── company/
   └── assets/
   ```
2. 確認 index.json 在正確位置
3. 驗證 index.json 格式正確

#### 問題 6：index.json 格式錯誤

**Console 錯誤：**
```
❌ index.json 缺少 files array
❌ Error: Unexpected token
```

**解決方法：**
1. 檢查 index.json 格式：
   ```json
   {
     "schemaVersion": 1,
     "updatedAt": "2026-07-24",
     "files": [
       {
         "path": "knowledge/company/model-answers/example.md",
         "enabled": true
       }
     ]
   }
   ```
2. 使用 JSON 驗證工具檢查語法
3. 確認 files 是數組

### 🧪 手動測試步驟

如果上述方法都無法解決，請執行手動測試：

1. **在瀏覽器中直接訪問 ZIP URL**
   - 打開 Chrome
   - 訪問：`https://storellet-knowledge.storellet.com/storellet-knowledge.zip`
   - 看是否會下載 ZIP 文件

2. **檢查下載的 ZIP**
   - 解壓下載的 ZIP
   - 確認結構正確
   - 檢查 index.json 存在且格式正確

3. **測試 Cloudflare Access**
   - 在普通 Chrome 分頁開啟知識庫網址
   - 使用 Account Team 公司帳戶完成 Cloudflare 登入
   - 返回 Chatroom，按「我已登入，重新檢查」

### 📞 獲取幫助

如果所有方法都失敗，請提供：
1. Console 中的完整錯誤日誌
2. test-cf-access.html 的測試結果
3. ZIP URL 的直接測試結果
4. manifest.json 和 config.js 的內容

## 🔍 調試檢查清單

- [ ] Account Team 公司帳戶可以通過 Cloudflare Access policy
- [ ] Extension 及 repo 內沒有 Service Token secret
- [ ] ZIP URLs 可以直接訪問
- [ ] ZIP 文件包含 index.json
- [ ] index.json 格式正確
- [ ] manifest.json 包含正確的 host_permissions
- [ ] JSZip 庫已加載
- [ ] 沒有 CORS 錯誤
- [ ] 網絡連接正常
- [ ] Chrome Extension 已重新載入

## 📝 預期的成功日誌

如果一切正常，Console 應該顯示：
```
📦 Loading knowledge from: https://storellet-knowledge.storellet.com/storellet-knowledge.zip
🔐 Using Cloudflare Access user session: Yes
⬇️  Starting download...
✅ Downloaded 123456 bytes
📦 Starting unzip...
📂 Extracted 314 files
📄 Found index.json at: knowledge/index.json
📋 Index contains 314 files
📝 Loading 314 markdown files...
✅ Loaded: 314, Skipped: 0, Total: 314
✅ Successfully loaded 314 model answers from https://...
```
