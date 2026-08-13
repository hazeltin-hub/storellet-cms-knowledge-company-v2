---
schema_version: 2
id: "LUBUDS-SHOPLINE-SSO-ACCOUNT-MATCHING"
title: "LUBUDS Shopline SSO 帳戶配對及登入排查"
category: "LUBUDS Operations"
module: "Shopline Integration"
intent: "troubleshooting"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "LUBUDS 會員 Shopline SSO 登入或帳戶配對失敗，應該點查？"
alternatives:
  - "撳 Shopline login 無 redirect"
  - "App 電話會員同 Shopline email account 對唔到"
  - "Shopline SSO not working"
  - "Shopline account binding problem"
keywords:
  - "LUBUDS"
  - "Shopline"
  - "SSO"
  - "login"
  - "account binding"
  - "phone"
  - "email"
  - "redirect"
source_title: "Private LUBUDS project conversations"
source_path: "private source — not committed"
source_anchor: "2024-03 onward"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### SSO 要先確認身份 key 同既有帳戶資料

LUBUDS App 主要以電話識別會員，但 Shopline 舊帳戶可能只用 email。兩邊電話／email 不一致時，系統未必可以自動判斷係同一個人，可能建立另一帳戶或配對失敗。唔可以用猜測方式合併。

### 排查步驟

1. 確認問題係無 redirect、登入失敗，定登入後配對錯帳戶。
2. 記錄 App／瀏覽器版本、環境、發生時間及去識別化畫面。
3. 確認目前 SSO 規格使用電話、email，定兩者其中之一作 login key。
4. 經安全渠道核對 Storellet 與 Shopline 帳戶嘅 verified phone／email 是否一致。
5. 無 redirect：檢查 SSO 服務、callback URL、Shopline login module 及帳戶權限有無被修改。
6. 有 redirect 但配對失敗：檢查身份 key、verified 狀態及重複帳戶。
7. 修復後測試三種情況：新電話會員、既有 Shopline email-only 會員、電話與 email 都一致嘅會員。

### 注意事項

- 已驗證 email 未必可以任意更改；改動前要確認對兩邊帳戶嘅影響。
- 唔好自行把兩個帳戶資料合併或搬移權益。
- 如果服務原本正常後突然無 redirect，要先查服務／權限變更，唔好叫全部會員重註冊。

## Internal Notes

- SSO 實作曾隨專案演進，當前 login key 及 callback 設定應以正式技術規格為準。
