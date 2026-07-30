---
schema_version: 2
id: "GUIDE-APPLICATION-VIEW-POS-KEYS"
title: "View Pos Keys"
category: "Application"
module: "View Pos Keys"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "View Pos Keys 係做咩，有咩欄位同注意事項？"
alternatives:
  - "View Pos Keys 點用？"
  - "點樣設定 View Pos Keys？"
  - "View Pos Keys 有咩用途同注意事項？"
  - "What is View Pos Keys used for?"
keywords:
  - "View Pos Keys"
  - "Application"
  - "View"
  - "Pos"
  - "Keys"
  - "收銀機"
  - "POS"
  - "CMS"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### View Pos Keys

**這是什麼：** 管理每台收銀機（POS）用來與伺服器簽章驗證的金鑰對，支援漸進式輪換。
**出現位置：** 僅後台與收銀機之間的通訊；顧客完全看不到。
**欄位／設定：**
- **Pos Id** — 收銀機識別碼。
- **Web Service Key / QR Code Key / Dynamic Member Id Checksum Key** — 目前主要金鑰對的相關識別碼（唯讀）。
- **Active Brand** — 這台收銀機可服務的品牌清單，可多選。
- **Last Update** — 最近一次異動的時間與操作者。
- **Signature Health (24h)** — 過去 24 小時的簽章驗證健康狀況，供判斷是否可推進金鑰輪換。
- **PRIMARY KEYPAIR (active)** — 目前生效中的主要金鑰對，含公私鑰、曲線、指紋、建立時間與建立者。
- **SECONDARY KEYPAIR (pending rotation)** — 準備接班的新金鑰對；可在此 Generate New Secondary Keypair，等到收銀機實際以新私鑰簽出過一次請求（First Used At 有值）後才能 Promote。
- **Promote Secondary → Primary** — 把次要金鑰升為主要，舊主要金鑰會在寬限期後失效。按鈕會跳出三步驟確認對話框，需勾兩項聲明並輸入 Pos Id 才會啟用。
- **Rollback (discard secondary)** — 在尚未 Promote 前，可丟棄次要金鑰回到原狀。
- **PREVIOUS KEYPAIR (post-promotion grace)** — 剛 Promote 完的舊主要金鑰，會在寬限期內繼續接受驗證；可用 Retire Now 立即終止。
**注意：** Promote 是不可逆動作，會讓還在用舊私鑰的收銀機在寬限期後完全無法簽章；執行前必須確認技術團隊與 POS 夥伴都已部署並測試新私鑰。所有動作都會被稽核。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
