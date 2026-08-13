---
schema_version: 2
id: "GUIDE-APPLICATION-CONFIGURE"
title: "Configure"
category: "Application"
module: "Configure"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Configure 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Configure 點用？"
  - "點樣設定 Configure？"
  - "Configure 有咩用途同注意事項？"
  - "App Config 權限點樣控制？"
  - "點解睇唔到 App Config？"
  - "App Config 可以睇邊啲 App？"
  - "What is Configure used for?"
keywords:
  - "Configure"
  - "Application"
  - "CMS"
  - "App Config"
  - "App Config 權限"
  - "App ID 權限"
  - "全部 App 權限"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### Configure

**這是什麼：** 每個 App（品牌群組）的總設定檔，決定 App 的強制更新版本、條款與隱私政策、簡訊驗證碼時效、品牌 App 的視覺風格，以及快速入頁的圖文等。
**出現位置：** 設定檔內容會出現在「顧客 App 設定頁」（條款、隱私政策、FAQ、教學影片）、「顧客 App 註冊／忘記密碼／刪除帳號流程」（簡訊驗證碼時效）、「顧客 App 強制更新提示」（版本門檻）、「品牌化顧客 App」整體配色與圖示，以及「顧客 App 首次入頁」的歡迎圖文。
**欄位／設定：**
- **App Name** — 這個設定檔對應的 App 識別碼（可多選）。決定以上所有設定要套用到哪一個 App 上。必填。
- **Group ID / Group Name** — 這個 App 所屬的品牌群組代碼與名稱，必填。
- **IOS Force Update Version / Android Force Update Version** — 低於這個版本的 App 會在開啟時彈出「請更新」提示，顧客必須更新才能繼續使用。
- **Settings - TNC (Eng / Chi)** — 顧客 App 設定頁「條款及細則」的英文與繁中內容。
- **Settings - Data Policy (Eng / Chi)** — 顧客 App 設定頁「資料政策」的英文與繁中內容。
- **Youtube** — 以「名稱,網址」格式填入，會在 App 設定頁產生對應的 YouTube 連結。
- **Backend - Register / Forgot Password / Delete Account / General / OTP Sms TTL** — 各類驗證碼簡訊的有效期限（秒）。出現在註冊、忘記密碼、刪除帳號、一般驗證、OTP 登入流程。
- **Backend - Sms Retry Timeout / Sms Blacklist count** — 在多少秒內忽略重複發送要求；超過幾次錯誤後封鎖該號碼。
- **Backend - … Email TTL / Email Retry Timeout / Email Blacklist count** — 同上，但套用到電郵驗證碼。
- **Backend - Enable Check SMS OTP By Api** — 偏開發／除錯用途，正式環境應關閉。
- **Backend - Twilio Only Enable For Storellet App / Twilio Disable** — 控制是否僅 Storellet 主 App 使用 Twilio，或完全停用 Twilio。
- **Backend - Delete Storellet Account When Deleting Brand Profile** — 勾選後，當顧客只加入一個品牌並刪除該品牌會籍時，會連帶刪除其 Storellet 主帳號。
- **Backend - Use Strong Password** — 勾選後，顧客密碼必須長度 12 以上且含特殊字元。
- **Fast Onboarding - Image / Image Zh** — 顧客首次入頁時顯示的歡迎圖（英／繁中），可上傳後預覽並移除。
- **Fast Onboarding - Image Redirect Url / Image Redirect Url Zh** — 點擊歡迎圖時前往的網址（英／繁中）。
- **Fast Onboarding - Image Message / Image Message Zh** — 歡迎圖旁顯示的短文字（英／繁中）。
- **FAQ** — 顧客 App 設定頁的常見問答，可新增多組，每組含中英文問題與答案，可拖曳排序。
- **Age Range** — 顧客註冊時可選擇的年齡層標籤。
  - **天書建議分組：** 12-17、18-25、26-30、31-35、36-40、41-50、51-64、65-100
- **Branded App Config - Enable Brand Profile** — 設置品牌要勾選此項才有 branded profile 功能
- **Branded App Config - FAQ** — 必填內容，需要在 Application > Config 中撰寫 FAQ
- **Branded App Config - App IDs** — Branded App 需要在品牌頁面加入對應的 AOS 和 IOS app ID
- **Available Region Codes** — 顧客可用於註冊的地區電話區號白名單。
- **Token Thresholds** — 各類代幣門檻（鍵／值），供 App 內兌換或升等判斷使用。
- **Partnership Link (Name / Icon Url / Register Url / Login Url / Renew Url / Merchandise Url / History Url)** — 與第三方會籍計劃串接的入口，會在顧客 App 的「合作會籍」區塊顯示圖示與按鈕。
- **Eshop partnership type / Membership partnership type / Join membership Ref ID / Membership renew Ref ID** — 選擇合作的網店／會籍平台類型，並填入對應商品編號，供顧客在 App 內完成會籍購買或續會。
- **Sms Daily Limit (Country Code / Limit)** — 每個國家代碼每日可發送的簡訊上限。
- **Qonbay Membership Discount Card** — 指定 Qonbay 會籍要套用的折扣卡。
- **Pdf (Key / Value)** — 上傳 PDF 或指定 PDF 網址，鍵值供 App 內抓取（例如條款附件）。
- **BrandId Pos Map** — 將品牌對應到特定的 POS 識別字串。
- **Register eshop account on user merchant register** — 勾選後，顧客註冊品牌會籍時會自動為他們建立網店帳號。
- **Password Pattern Type** — 顧客密碼複雜度規則。
- **Branded App Config - Primary Color 1 / 2、Secondary Color 1 / 2、Text Color** — 品牌化顧客 App 的主色、副色與文字色。
- **Branded App Config - Icon Shape** — 品牌化顧客 App 內圖示的形狀。
- **Branded App Config - ODO Listing** — 控制 App 在 ODO（品牌 App 目錄）中的顯示方式。
- **Branded App Config - Show Add To Wallet Button** — 是否在顧客 App 顯示「加入錢包」按鈕。
- **Branded App Config - Point Display** — 顧客 App 中積分的顯示方式。
- **Branded App Config - Scanner Order** — 顧客 App 掃碼功能內，掃碼類型的排列先後。
- **Last Update Date / Last Update By** — 系統紀錄，最近一次修改的日期與操作者。
**注意：** 這是影響層面最廣的頁面，改動前應與技術團隊確認；尤其 Force Update Version 一旦填錯，可能會把所有舊版顧客擋在 App 外。

### 0.14.0 App Config 權限改善

- App Config 嘅清單、查看及編輯都會按帳戶獲授權嘅 App ID 控制。
- 一般管理員只會見到自己有權管理嘅 App；有全部 App 權限嘅管理員亦可以查看未指定 App ID 嘅設定。
- 如果 Configure 清單缺少某個 App、開頁被拒絕或儲存失敗，先由管理員核對帳戶嘅 App Config／App ID 權限，更新後重新登入再試；唔好用其他 App ID 或帳戶繞過權限。
- 權限檢查適用於讀取同寫入；之前可以睇到嘅設定，升級後亦可能因權限收緊而消失。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
