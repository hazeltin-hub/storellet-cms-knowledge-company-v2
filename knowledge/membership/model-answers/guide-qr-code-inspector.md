---
schema_version: 2
id: "GUIDE-MEMBERSHIP-QR-CODE-INSPECTOR"
title: "QR Code Inspector"
category: "Membership"
module: "QR Code Inspector"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "QR Code Inspector 係做咩，有咩欄位同注意事項？"
alternatives:
  - "QR Code Inspector 點用？"
  - "點樣設定 QR Code Inspector？"
  - "QR Code Inspector 有咩用途同注意事項？"
  - "What is QR Code Inspector used for?"
keywords:
  - "QR Code Inspector"
  - "Membership"
  - "QR"
  - "Code"
  - "Inspector"
  - "CMS"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "QR Code Inspector"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### QR Code Inspector

**這是什麼：** 診斷與產生交易 QR Code 的工程用工具。當會員或分機掃 QR Code 失敗時，把 QR 字串貼進來逐步看出哪一步出錯；也可反向用已知交易欄位產出預期 QR Code 比對。
**出現位置：** 純後台內部頁面；一般店舖職員不會使用，主要由技術／客服主管排查「掃碼無效」問題時操作。

兩個分頁：

**Decode & Diagnose（解碼與診斷）**
- **QR string / URL / s= value** — 貼上掃到的 QR 完整字串、網址，或單獨的 s= 參數值。
- **POS key override** — 指定用哪套 POS 系統的金鑰解碼，或保持 Auto-detect from string 自動判斷。
- **Decode & Diagnose** 按鈕 — 執行後逐步顯示每個檢查階段（綠色 OK / 紅色 Failed / 黃色 Warning），並比對 QR 與資料庫中的交易欄位差異。

**Encode & Match（編碼與比對）**
- **brandId / shopCode / invoiceNo / transactionDatetime** — 填入已知交易欄位。
- **POS** — 選擇對應 POS 系統。
- **QR domain** — QR 網址的網域。
- **Encode & Generate** 按鈕 — 產出 plaintext、Base64 (raw)、URL-encoded s= value、Full QR URL 與 QR 預覽圖。
- **Compare against the POS's actual QR (optional)** — 把實際掃到的 QR 貼進來，系統會比對是否符合預期，並診斷差異是內容、編碼還是金鑰問題。

**注意：** 此頁面僅供診斷，不會修改任何資料；金鑰不會離開伺服器，操作人員看到的只是產出結果。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
