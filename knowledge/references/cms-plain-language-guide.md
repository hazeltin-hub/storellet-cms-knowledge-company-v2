# Storellet CMS 操作指南（白話版）

這份指南用白話說明後台（CMS）每個頁面**做什麼、顧客在哪看得到、設定時要注意什麼**，給門市人員、行銷、營運與管理員使用。

## 怎麼讀這份指南

- 每個頁面都會說明三件事：**這是什麼**、**出現位置**（顧客 App ／ 收銀機 ／ 網店 ／ 電郵 ／ 僅後台內部）、**欄位與注意事項**。
- 畫面上的欄位名稱保留**英文原文**（與你在後台看到的完全一致），解釋用繁體中文。
- 你只會看到「自己帳號有權限」的選單項目。如果某個頁面在你的後台沒出現，代表你的帳號未開放該權限，請找管理員開通。
- 「出現位置」是最重要的欄位：改任何設定前，先確認它會影響哪個畫面。

本指南涵蓋以下六個分頁：**Assets、Membership、Push、Report、Application、CMS users**。

---

## Assets

Assets（資產）分頁管理所有發放給顧客的「價值載體」——積分、會員卡、印花、優惠券、問卷、電子錢包方案等，以及支撐這些價值的兌換碼、觸發自動化與網店商品。整個分頁以「品牌（Brand）」為單位建立資產，再透過派發規則、推播、收銀機或網店送到顧客手中。

### Points
**這是什麼：** 一筆可作為贈禮發放的積分額度，例如迎新禮、生日禮、週年禮。
**出現位置：** 純後台設定；設定後透過推播或系統派發到顧客 App 的積分錢包。
**欄位／設定：**
- **Group / Brand** — 選擇這筆積分所屬的品牌。
- **Points** — 要派發的積分數量（必填）。
- **Type** — 派發情境，例如 Welcome Pack、Birthday Gift、Anniversary Gift、Push、Redeem Code。決定顧客在什麼場合收到。
- **Start Date / End Date** — 這份積分禮的適用期間。
- **Image** — 上傳一張圖片（可裁切），顯示在派發通知與顧客 App。
- **White Label Only / Storellet Only / Not Transferable** — 限制只在白標 App、Storellet App 出現，或不可轉贈。
- **Status** — Active（生效）/ Inactive（停用）/ Suspended（暫停）。
**注意：** 頁面頂部可上傳檔案批次匯入多筆積分設定。

### Discount Card
**這是什麼：** 會員折扣卡（會員等級），持有者享特定折扣率與專屬優惠券。
**出現位置：** 顧客 App（會員卡區）、收銀機（結帳時套用折扣）。
**欄位／設定：**
- **Brand** — 所屬品牌。
- **Discount Card Type** — Normal（一般會員等級）或 Paid Tier（付費訂閱等級）。兩者可選的等級數字範圍不同。
- **Discount Level** — 等級編號。
- **Name（Primary / Secondary Language）** — 卡片名稱（中英文，必填）。
- **Image / Image 2 / Image 3 / Image Renew** — 多張卡片圖，各可分中英文版本；Renew 為續會時顯示的縮圖。
- **Discount Rate** — 折扣率（百分比）。
- **Redemption Period** — 卡片有效期間。
- **Redemption Point** — 開通此卡所需的積分。
- **Terms and Conditions / How To Use** — 條款與使用說明（支援 HTML，分中英文）。
- **Set As Welcome Pack / Welcome Pack Period** — 是否作為迎新禮自動派發，及其適用期間。
- **Upgrade From / Point For Upgrade** — 從哪張卡升等過來，以及升等所需積分（僅 Normal 類型顯示）。
- **Renew Type** — 續會方式：None（不續）、Auto（自動）、Acc Transaction Amount（累積消費滿額自動續）、File（上傳會員電話名單續）。不同選擇會帶出不同欄位（續會門檻、保留會籍金額、電話清單檔）。
- **Expiry Date Pattern** — 到期規則，例如 Align With Point Expiry、Next Expiry Period、One Year、Never End、Custom、Exact Date。
- **Coupon List / Renew Size** — 勾選此卡隨附的優惠券，並可分別設定「開通時」與「續會時」發放的數量。
- **Point Multiply Ratio / Stamp Multiply Ratio** — 持卡人賺取積分／印花的倍數。
- **Shared With Brands** — 主品牌專屬，可把此卡共享給集團內其他品牌。
- **Hidden** — 在 App 隱藏此卡（僅後台存在）。
- **Colour Code / Highlighted Colour Code** — 卡片在 App 的主色與高亮色。
- **Privileges** — 自訂會員特權列表，每項含英文標題、中文標題、圖示。
- **Shopline Member Tier ID** — 對接 Shopline 會員等級的識別碼。
- **White Label Only / Storellet Only / Not Transferable / Status** — 同上。
**注意：** Paid Tier 類型不適用升等與自動續會檔案功能；切換類型時相關欄位會自動隱藏。

### Bingo
**這是什麼：** 賓果活動（以印花集卡的遊戲化玩法），顧客在指定期間／金額範圍內集印花換獎。
**出現位置：** 顧客 App（賓果活動卡）；收銀機在符合條件時派發印花。
**欄位／設定：**
- **Brand** — 所屬品牌。
- **Name（Primary / Secondary Language）** — 活動名稱（必填）。
- **Image** — 活動印花圖。
- **Description / Terms and Conditions / How To Use** — 說明文字，分中英文。
- **Day Period 1 / 2 / 3** — 為每個時段勾選適用的星期（Mon–Sun）。
- **Type** — Day Part（時段制，需填時段）或 Amount Range（消費金額範圍制）。
- **Effective Period** — 活動有效期。
- **Day Part Time Slot 1 / 2 / 3** — 時段制的起止時間，僅 Day Part 顯示。
- **Day Part Slot 1 / 2 / 3** — 各時段名稱（中英文）。
- **Amount Range 1 / 2 / 3** — 金額範圍制的上下限。
- **Reward 1–8** — 集到第 N 個印花時派發的優惠券，每格對應一個印花計數器。
- **White Label Only / Storellet Only / Not Transferable / Status** — 同上。
**注意：** 選 Amount Range 時，時段欄位會隱藏，系統改用消費金額判定。

### Stamp
**這是什麼：** 集印活動（印花卡），顧客集滿指定格數可換禮物；支援特別印花與時段加倍。
**出現位置：** 顧客 App（印花卡）；收銀機在符合條件時派發印花。
**欄位／設定：**
- **Brand** — 所屬品牌（必選；會連動顯示此品牌的折扣卡清單）。
- **Required Discount Card Level** — 勾選哪些會員等級才能參與此活動。
- **Name / Description / Terms and Conditions（中英文）** — 活動文案。
- **Promotion Message（中英文）** — 推廣訊息，可插入 `{leftStampCount}`、`{totalStampCount}`、`{normalStampCount}`、`{specialStampCount}` 等變數顯示即時印花數。
- **Image（中英文）** — 活動主圖。
- **Campaign Period** — 活動期間。
- **Normal Stamp Image** — 一般印花的圖示。
- **Welcome Pack** — 迎新印花數量。
- **Special Stamp** — 是否啟用特別印花（勾選後展開下述欄位）。
- **Special Stamp Image** — 特別印花圖。
- **Special Stamp Probability** — 特別印花的出現機率（0–100%）。
- **Special Stamp Daily Limit** — 特別印花每日上限。
- **Type** — By Transaction Amount（依消費金額）或 By Purchased Item（依購買品項）。
- **Transaction Amount / Purchase Item Code** — 依 Type 切換：前者填最低金額與加碼金額；後者填品項代碼（以逗號分隔）。兩者都可加「自訂條件」，為特定分店或訂單類型設獨立門檻。
- **Total Space** — 印花卡總格數。
- **Gift** — 新增一個或多個禮物（優惠券），每個可指定位置（集到第幾格送）。
- **Has Week Day Time Criteria** — 勾選後可為星期日至星期六各自指定時段與印花倍數（例如週末加倍）。
- **Auto Redeem / Multiple Gift Auto Redeem** — 集滿自動兌換。兩者互斥，只能擇一。
- **Transferable / Status（Active / Inactive）** — 可轉贈與否、上下架。
**注意：** Auto Redeem 與 Multiple Gift Auto Redeem 互斥；勾選其一會自動取消另一個。

### Stamp Trigger Rule
**這是什麼：** 自動化規則：當顧客消費或符合條件時，額外派發印花或加碼。
**出現位置：** 僅後台自動化設定；觸發後結果會落到顧客 App。
**欄位／設定：**
- **Brand / Name / Status** — 基本資訊。
- **Stamp Trigger Rule Type** — 規則類型。
- **Stamp Campaign** — 套用至哪個集印活動。
- **Effective Period / Effective Week Day** — 生效期間與適用星期。
- **Available Shops** — 適用分店。
- **Amount Criteria / Item Map** — 消費金額條件或品項對應。
- **Criteria Condition** — 多條件之間的邏輯組合。
- **User Birthday Criteria** — 是否需要符合生日條件。
- **Stamp Bonus Type / Value / Threshold / Step Up / Maximum Stamp** — 加碼印花的計算方式（類型、數值、門檻、每滿 X 加碼、每日上限）。
- **Available Coupon** — 連動的優惠券。
- **Enable Notification** — 是否發通知。
- **Notification（中英文）/ Inbox Message（中英文）** — 自訂通知與收件匣訊息。
**注意：** 屬進階自動化，建議先備妥對應的集印活動再建立規則。

### Trigger Flow
**這是什麼：** 一個視覺化檢查工具，把單一交易套用所有印花規則的過程畫成流程圖，顯示每個條件「通過／未通過」。
**出現位置：** 僅後台，診斷用途，不直接影響顧客。
**欄位／設定：**
- **Shop / Amount ($) / Date / Time** — 模擬一筆交易的分店、金額、日期、時間。
- **POS Items** — 模擬交易包含的品項。
- **Coupon ID** — 模擬使用的優惠券。
- **User Birthday** — 模擬顧客生日條件。
**注意：** 純檢視頁，填入模擬條件後系統會繪出哪條規則被觸發、哪條被跳過，用來排查「為什麼顧客沒收到印花」。

### Coupon
**這是什麼：** 單張優惠券，可作迎新、生日、兌換、推播、購買、替換等多種用途；支援電子優惠券（Leaflet）進階版型。
**出現位置：** 顧客 App、收銀機、網店（視 Delivery Type 而定）。
**欄位／設定：**
- **Coupon ID** — 系統編號（唯讀）。
- **Brand** — 所屬品牌（必選；會連動顯示折扣卡清單）。
- **Required Discount Card Level** — 勾選哪些會員等級才領得到。
- **Type** — Freebie（贈品）、Item Discount（品項折扣）、Receipt Discount（整單折扣）。
- **Item Code** — 適用品項代碼（可加多筆）。
- **Item Discount Value** — 折扣數值，單位 $ 或 %。
- **Delivery Type** — 派發方式：Welcome Pack、Birthday Gift、Anniversary Gift、Redeem、Push、Stamp、Replacement、Purchase。不同選擇會帶出不同欄位。
- **Name（中英文，必填）/ Description / Terms and Conditions / How To Use** — 文案（條款與使用說明支援 HTML）。
- **Tags En / Tags Zh** — 標籤，方便分類搜尋。
- **Is Coupon Leaflet** — 勾選後展開「電子優惠券版型」整套欄位（如下）。
- **Is Eshop Coupon** — 是否為網店專用券。
- **Image / Image 2 / Image 3（中英文）** — 多張圖，可裁切；Image 各可設 Click Redirection 點擊跳轉網址。
- **Effective Period** — 券的有效期（精確到分鐘）。
- **Expiry Type** — By Effective Day（領取後 N 天有效）或 By Expiry Date（固定到期日）。
- **Purchase Amount / Purchase Add Point Amount** — Delivery Type 為 Purchase 時顯示：售價與加購積分。
- **Redemption Point / Quantity / Entitlement** — 依 Delivery Type 顯示：兌換所需積分、數量、每人限領次數。
- **Coupon Extendable** — 到期後是否可延期。
- **External Url（中英文）** — 「立即使用」外連網址與顯示文字。
- **Coupon List（Replacement）** — Replacement 類型時，選擇被替換的券與數量。
- **Control Shop / Control Time** — 限制只能在指定分店、指定時段使用。
- **Shared With Brands** — 主品牌專屬，共享給集團其他品牌。
- **Event Tracking Submit Option** — 事件追蹤回報對象（預設／非 Storellet／僅 Storellet）。
- **Status** — Active / Inactive / Suspended。
**注意：** 勾選 Is Coupon Leaflet 會展開大量進階欄位，包含自訂有效期標題、使用說明、隱藏會員 QR 碼、Leaflet 按鈕（可分 Android／iOS 連結）、External Code 綁定、兌換前後提示、兌換詳情頁標題與內文等；非 Leaflet 模式不需要動這些。

### Coupon Package
**這是什麼：** 優惠券組合包，一次派發內含多張券／會員卡的套裝。
**出現位置：** 顧客 App、收銀機（依 Delivery Type）。
**欄位／設定：**
- **Brand** — 所屬品牌。選後會列出可勾選的券／會員卡清單。
- **Coupon Or Discount Card List** — 勾選包內含的項目，並指定各自的數量。
- **Delivery Type** — 派發方式（同 Coupon 的選項）。
- **Name / Description / Terms and Conditions / How To Use（中英文）** — 文案。
- **Image / Image 2 / Image 3（中英文）** — 圖片。
- **Effective Period / Expiry** — 依 Delivery Type 帶出：有效天數或固定到期日。
- **Redemption Point / Quantity / Entitlement / Coupon Replacement** — 依 Delivery Type 顯示對應欄位。
- **White Label Only / Storellet Only / Not Transferable / Status** — 同上。
**注意：** 選擇 Push 等不同 Delivery Type 時，數量、限領、兌換點數欄位會動態切換。

### Coupon Trigger Rule
**這是什麼：** 自動化規則：當顧客消費、生日、或符合條件時自動派發優惠券。
**出現位置：** 僅後台自動化設定；觸發後券會落入顧客 App。
**欄位／設定：**
- **Brand / Name / Status** — 基本資訊。
- **Coupon Trigger Rule Type** — 規則類型。
- **Trigger Coupon / Coupon Or Discount Card List** — 要派發的券與數量。
- **Effective Period / Effective Week Day / Effective Time** — 生效期間、星期、時段。
- **Available Shops** — 適用分店。
- **Min Amount / Max Amount / Step Up Amount** — 消費金額門檻與累進。
- **Transaction Count** — 交易次數條件。
- **POS Item Code** — 指定品項。
- **Lapse Period** — 顧客多久沒消費才觸發（回流喚醒）。
- **Dispatch Day / Dispatch Once A Day** — 派發日期與每日限發一次。
- **Max Quantity** — 每人可領上限。
- **Exclude Discount Card** — 排除特定會員等級。
- **Point Bonus Ratio / Point Bonus Cap** — 加碼回贈積分的比例與上限。
- **Push Notification / Push User Message（中英文）** — 自訂推播與收件匣訊息。
- **Required Discount Card Level** — 限定哪些會員等級才適用。
**注意：** 條件之間為 AND 邏輯；Lapse Period 適合做「久未光顧」召回。

### Coupon External Code Group
**這是什麼：** 一組外部兌換碼（第三方平台用的序號池），可綁定到優惠券，讓顧客在第三方通路兌換。
**出現位置：** 顧客 App（券詳情顯示序號或 QR）；外部平台憑碼兌換。
**欄位／設定：**
- **Name** — 組合名稱。
- **Allow Code Duplication / Allow Url Duplication** — 是否允許多張券共用同一碼／同一連結。
- **Copy Enabled / Copy Text（中英文）** — 是否顯示「複製碼」按鈕及其文字。
- **Url Enabled / Copy Text（中英文）** — 是否顯示外連按鈕及其文字。
- **Qrcode Enabled** — 是否顯示 QR Code。
- **Email List** — 要匯出的收件者清單。
**注意：** 建好群組後，到個別優惠券的 Leaflet 進階選項裡「Enable Coupon External Code」並選擇此群組，才算綁定。

### Survey
**這是什麼：** 顧客問卷，可自訂多個選擇題或開放題，收集回覆後可在後台查看。
**出現位置：** 顧客 App（以圖文卡片呈現，含加入與提交按鈕）。
**欄位／設定：**
- **Brand** — 所屬品牌。
- **Name（中英文，必填）** — 問卷標題。
- **Image（中英文）** — 問卷主圖。
- **Description（中英文）** — 問卷簡介。
- **Thank You Message / Finished Message（中英文）** — 提交後的感謝訊息與完成訊息。
- **Join Button / Submit Button（中英文）** — 「加入」與「提交」按鈕的顯示文字。
- **Question（可新增多題）** — 每題含：
  - **Type** — Multiple Choice 或 Open Question。
  - **Sequence** — 題目排序。
  - **Title（中英文）** — 題目。
  - **Min And Max** — 選擇題的最少／最多勾選數。
  - **Option（可新增多個）** — 每個選項含 Sequence、Code、Answer（中英文）。
- **Effective Period / White Label Only / Status** — 同上。
**注意：** 題目類型切成 Open Question 時，選項區塊會自動隱藏。

### Coupon Code
**這是什麼：** 優惠兌換碼產生器，批次產出一組序號綁到某張券，可發給非會員或特定名單兌換。
**出現位置：** 顧客 App（會員或非會員輸入碼兌換）；序號可匯出後經任何管道發送。
**欄位／設定：**
- **Brand** — 所屬品牌。
- **Coupon** — 要綁定的優惠券。
- **Name** — 這批序號的名稱。
- **Expiry Date** — 序號有效期限（必填，會自動帶入券的有效期上限）。
- **Quantity** — 要產生幾組（建立後不可改）。
- **Type** — Individual（每碼一人用）、Shared（共用碼）、System（系統配發）。
- **Generate Option** — 字元組合：Both（數字＋字母）、A-Za-z（純字母）、0-9（純數字）。
- **Prefix Option** — 序號前綴：None、By Brand Code、Custom（自訂，最多 5 碼）。
- **Length** — 序號總長度（8–50）。
- **Life Time Limit / Week Limit / Day Limit** — 每碼的終身、每週、每日兌換次數上限。
- **Auto Expand / Expand Message** — 序號用罄是否自動加發，及提示訊息。
- **Force Join / Force Dispatch / In-App Force Join / In-App Force Dispatch** — 是否強制加入會員、強制派發等行為。
- **Is Redeem With Virtual User** — 勾選後展開 Virtual User List 與 Redeem Expiry Time，用於把碼綁定到虛擬會員作限時兌換。
**注意：** 系統會即時檢查「長度＋字元組合」可產生的不重複序號數是否足夠，不足會提示加長。Shared 類型的共用碼需填 Unique Key 並檢查是否重複。

### User Activation Key
**這是什麼：** 實體會員啟動卡的查詢與管理清單（例如店舖販售的 activation card）。
**出現位置：** 後台查詢為主；顧客在 App 輸入卡上的 Code 完成註冊。
**欄位／設定（皆為搜尋／檢視欄位）：**
- **ID / Code / Member ID** — 用卡號、卡密或已綁會員查詢。
- **Shop** — 在哪間分店售出。
- **Sold Date** — 銷售日期。
- 清單顯示每張卡的狀態（Used / Sold / Not Sold）、售出日、使用日、綁定會員。
**注意：** 此頁為查詢用途，不在此直接產生或編輯卡；產卡由其他流程處理。

### Co-Brand Purchase
**這是什麼：** 聯名購買的會員啟動碼清單，通常與外部夥伴合作販售，以顧客電話作識別。
**出現位置：** 後台管理；顧客憑電話與碼在 App 開通。
**欄位／設定：**
- **Phone / Shop / Sold Date** — 以電話、分店、銷售日搜尋。
- 清單顯示狀態（Active / Inactive）、分店、發票號、銷售日、電話、使用日、會員編號、備註。
- 每筆可 **Edit**（編輯電話）或 **Void**（作廢，需填原因，限 250 字）。
**注意：** 作廢後該序號無法再被使用，且會記錄作廢原因。

### Food Menu
**這是什麼：** 電子餐牌管理，可上傳 PDF 或逐項建立餐點，產出品牌／分店專屬的掃碼點餐連結。
**出現位置：** 顧客 App（掃 QR 或點連結瀏覽餐牌）。
**欄位／設定：**
- **Brand** — 所屬品牌。
- **Name（En / Zh / Cn）** — 餐牌名稱（英、繁中、簡中）。
- **PDF Url / Upload PDF** — 直接填入 PDF 連結或上傳 PDF。
- **Current PDF** — 已上傳的 PDF 預覽連結。
- **Food Menu Item** — 逐項建立餐點（含名稱、價格、圖片、分類、選項）。
- **Priority** — 多份餐牌間的排序。
- 清單檢視顯示品牌、各語言名稱、PDF 連結、狀態、優先序。
**注意：** 餐牌內亦可設定多語系、分類與品項選項（例如規格、加料）；完成後可發佈到正式環境供顧客瀏覽。

### Operation Access Code
**這是什麼：** 營運存取碼，給店舖人員或特定群組用的兌換／操作碼，可綁定優惠券並設使用限制。
**出現位置：** 收銀機／店舖人員端；顧客通常看不到。
**欄位／設定：**
- **Brand** — 所屬品牌。
- **Coupon** — 綁定的優惠券。
- **Expiry Date** — 碼的有效期限。
- **Type** — Individual（個別）、Public（公開共用）、Closed Group（封閉群組）。
- **Closed Group Type** — 封閉群組的識別方式：User ID 或 Phone。
- **Import File** — 匯入群組成員清單。
- **Quantity** — 產生數量。
- **Life Time Limit / Week Limit / Day Limit** — 每碼的兌換次數上限。
- **With Deep Link** — 是否產生深層連結直接打開 App 對應頁面。
**注意：** Closed Type 才需指定成員清單；Public 則任何持有者皆可使用。

### Cross Brand Automation
**這是什麼：** 跨品牌自動化規則，讓顧客在 A 品牌的行為觸發 B 品牌的優惠或動作。
**出現位置：** 僅後台自動化設定；結果會在顧客 App 跨品牌顯示。
**欄位／設定：**
- **Name / Brand / Type / Status** — 基本資訊。
- **Action Brand** — 被觸發動作的目標品牌。
- **Use Coupon Pre Action** — 是否在派券前先執行前置動作。
- **Transaction Day Criteria** — 依交易日期設定的觸發條件。
**注意：** 屬於集團多品牌聯動的進階功能，需集團層級權限才能編輯。

### Eshop Products
**這是什麼：** 網店商品管理，設定可在網店販售的實體或電子商品，含交付方式與對接平台的商品識別碼。
**出現位置：** 網店。
**欄位／設定：**
- **Brand** — 所屬品牌。
- **Delivery Type** — Direct（直接交付）或 Coupon Code（憑兌換碼交付）。
- **Product Type** — Default（一般商品）、Wallet（電子錢包）、Sub Item（子品項）。
- **Coupon / Coupon Code Group** — 依 Delivery Type 顯示：要綁定的券或兌換碼組。
- **Name（中英文）** — 商品名稱。
- **Image（中英文）** — 商品圖。
- **Point Ratio** — 購買時的積分回贈比例。
- **Exclude From Accu Sales** — 是否排除在累計消費額外。
- **Purchase Quantity Min / Max** — 每次購買數量上下限。
- **Product Reference ID / STL Reference ID** — 對接 Stripe／Shopline 等外部平台的商品編號（附 tooltip 說明用途）。
- **Type / Status** — 商品類型與上下架狀態。
**注意：** Product Type 為 Wallet 時，商品本身會化作電子錢包充值方案；Sub Item 則作為其他商品的下拉加購項。

### Speedy Scanner Config
**這是什麼：** 收銀機「快速掃描」功能的設定，為特定分店預設一組常用品項捷徑與結單方式，加快結帳。
**出現位置：** 收銀機。
**欄位／設定：**
- **Brand / Shop Id** — 套用至哪個品牌的哪間分店。
- **Items** — 快速品項清單（每項含 Id、Name、Amount），可新增／刪除。
- **Close Transaction Type** — 結單方式。
- **Status** — 啟用／停用。
**注意：** 每間分店可獨立設定一份；未設定的分店不會出現快速掃描功能。

### User Top Up Deposit Plan
**這是什麼：** 電子錢包「儲值」方案，顧客付費購買後金額進入錢包，可額外附送積分或商品。
**出現位置：** 顧客 App（錢包儲值頁）。
**欄位／設定：**
- **Brand** — 所屬品牌。
- **Name（中英文）** — 方案名稱。
- **Top Up Amount** — 實際儲值入錢包的金額。
- **Listed Price** — 顧客支付的售價（可不同於儲值額，做優惠）。
- **Earn Points** — 購買時附送的積分。
- **Eshop Product ID** — 對應的網店商品（若透過網店販售）。
- **Expiry Date / Status** — 方案效期與上下架。
**注意：** Listed Price 與 Top Up Amount 分開，可做「付 $500 儲 $550」這類優惠儲值。

### User Top Up Consumer Plan
**這是什麼：** 電子錢包「消費／扣款」方案，定義某些消費項目從錢包扣款時的顯示金額與實際扣款金額。
**出現位置：** 顧客 App（錢包交易紀錄）；收銀機結帳時套用。
**欄位／設定：**
- **Brand** — 所屬品牌。
- **Name（中英文）** — 方案名稱。
- **Display Consume Amount** — 顧客看到的扣款金額。
- **Actual Consume Amount** — 實際從錢包扣除的金額（可與顯示額不同，做補貼或折扣）。
- **Expiry Date / Status** — 方案效期與上下架。
**注意：** Display 與 Actual 分開，可做「顯示扣 $100，實際只扣 $80」的內部補貼方案，差額由品牌吸收。

---

## Membership

這個分頁是「會員客服與營運」的工作台：查詢與維護個別會員資料、處理一次性驗證碼、查帳與補救交易、診斷掃碼問題，以及管理被封鎖的號碼。

### Member
**這是什麼：** 會員資料總檔。用會員編號、電話、電郵或 Facebook 編號搜尋會員，檢視與更新個人資料、品牌會員卡、優惠券、印花、電子錢包餘額，以及手動調整點數／重設密碼等售後動作。
**出現位置：** 純後台內部頁面，操作人員（客服／營運）使用；會員本人在 App 看到的個人檔案內容即由這裡的資料構成，但會員不會看到此後台畫面。

**欄位／設定：**

搜尋區（在會員列表上方）：
- **Member No** — 會員編號，最直接的查找方式。
- **Phone** — 會員註冊的手機號碼。
- **Email** — 會員註冊的電郵。
- **Fb Id** — Facebook 連動編號；當會員用 Facebook 登入時用此查找。

會員基本資訊區（搜尋後展開）：
- **Member No** — 會員編號，後方括號可能顯示啟動碼。後方常見連結：Forget Password（發送重設密碼）、Send Sms（發送簡訊）。
- **Status** — 帳號狀態：Active（正常）、Inactive（停用）、Pending Delete（待刪除）、Deleted（已刪除）。可用後方文字連結切換為 Inactive 或重新啟用；狀態為 Inactive / Pending Delete 時另會出現 **Delete** 連結，執行永久刪除。
- **Alias No** — 別名編號（系統內部識別用）。
- **Security Code** — 會員安全碼（唯讀）。

Storellet Profile 區（平台層級的會員資料）：
- **Phone** — 主手機號碼；後方顯示 Verified / Unverified 標章表示是否已驗證。
- **Alternative Phone** — 歷史備用號碼（如有）。
- **Country Code** — 電話國碼。
- **Email** — 電郵；後方顯示 Verified / Unverified 標章。未驗證時可按 Send Verification Email 寄驗證信，或按 Toggle User Email Verify Status 直接切換驗證狀態。
- **Fb Id** — Facebook 編號。
- **Display Name / First Name / Last Name** — 顯示名稱、姓氏、名字。
- **Gender** — 性別：Male / Female / N/A。
- **Birthday** — 生日。
- **Join Date** — 加入日期。
- **Membership Group** — 目前檢視的品牌會員體系下拉選單；切換後下方品牌檔案區會同步切換。後方 **Join New Merchant** 連結可把此會員加入其他品牌。
- **Brands** — 此會員已加入的品牌清單，旁有 **User Extra Tag View/Edit** 連結可管理自訂標籤。

Brand Profile 區（單一品牌層級的會員資料，切換 Membership Group 或 Brands 後顯示）：
- **Password** — 顯示 Forget Password 連結，可為該品牌檔案重設密碼。
- **Display Name / First Name / Last Name / Gender / Birthday** — 此品牌專用的資料（可與平台層級不同）。
- **Email** — 此品牌聯絡電郵，含 Verified / Unverified 標章與驗證操作連結。
- **Status** — 此品牌會員狀態：Active / Inactive / Pending Delete / Deleted，可切換。

下方分頁標籤（會員活躍紀錄總覽）：
- **Card** — 各品牌會員卡：Member Level（會員等級）、Discount Rate（折扣）、有效期、狀態等。
- **Coupon Summary** — 持有優惠券統計：Active / Used / Expired 數量。
- **Coupon Card** — 個別優惠券明細，含 Serial No、延長有效期、作廢等動作。
- **Stamp / Stamp Card** — 印花收集與印花卡兌換紀錄，含 Add Stamp 手動加印。
- **Bingo** — Bingo 活動紀錄，含 Adjust 調整。
- **History** — 點數異動歷史（交易時間、點數增減、商店、描述）。
- **Cs Remark** — 客服備註，可新增內部留言（會員看不到）。
- **User Wallet / User Wallet History** — 電子錢包餘額與交易明細（存入、扣款、結餘）。

**注意：** Status 切換為 Pending Delete 或 Deleted 後，會員在 App 將無法正常使用；操作前請先確認。Forget Password 與 Send Sms 會真的發送簡訊／電郵給會員，請避免誤觸。在 Inactive / Pending Delete 狀態下出現的 **Delete** 連結為永久刪除，請格外小心。

### Verification Code
**這是什麼：** 查詢某支手機或電郵收過的一次性驗證碼，必要時延長其有效期。客服在會員反映「收不到碼」或「碼過期了」時常用。
**出現位置：** 純後台內部頁面；驗證碼本身是簡訊／電郵發到會員手機或信箱的，這裡只是後台查看與延期。
**欄位／設定：**
- **Phone** — 篩選某手機號碼收過的驗證碼。
- **Email** — 篩選某電郵收過的驗證碼。
- 表格欄位：Phone、Email、Verification Code（驗證碼內容）、Expiry Date（失效時間）、Status（Active 可用 / Used 已使用 / Expired 已過期）。
- **Edit** 按鈕（只出現在 Active 或 Expired 紀錄上）— 開啟小視窗，可修改 **Expiry Date** 延長該驗證碼的可用時間；按 Confirm 送出。
**注意：** 已 Used 的驗證碼不能再次編輯延期。延期後請提醒會員用新的有效期再試一次。

### Invoice
**這是什麼：** 依發票編號、品牌、分店或交易日期搜尋交易紀錄，檢視金額、付款方式、使用優惠券、關聯會員等詳情；可把漏掉會員歸屬的交易手動掛到某會員帳下。
**出現位置：** 純後台內部頁面；交易本身發生在收銀機／網店結帳，這裡是後台查詢與補救介面。
**欄位／設定：**
- **Invoice No** — 想查找的發票編號。
- **Brand** — 篩選品牌（或 Show All 全部）。
- **Shop** — 篩選分店。
- **Transaction Date** — 交易日期區間（起 - 迄）。

表格欄位：
- **Invoice No** — 發票編號（後方括號顯示關聯參考編號）。
- **Brand / Shop** — 交易品牌與分店。
- **Purchase Time** — 實際交易時間。
- **Info** — 展開資訊：Status（Normal 正常 / Reversed 已沖退）、Invoice Amount（發票金額）、Net Amount（實收金額）、Order Type（訂單類型）、Payment Method（付款方式）、Items（項目）、Discount（折扣）、Coupons（使用優惠券）、Member No（會員編號）、Used Promo Code（使用的促銷碼）。
- **Redeem** — 兌換時間。

**Add Transaction To Member**（在 Member No 欄位為空且該交易未沖退時出現）：
- 在會員編號輸入框填入要歸屬的會員編號，按 Add。系統會彈出小視窗顯示該會員目前點數、今日／本週獲點次數等，供操作人員核對後再按 Confirm 完成歸屬。可填寫 **Remark** 說明（最多 250 字）。

**注意：** Add Transaction To Member 會回溯變更會員點數與紀錄，請先核對小視窗中的點數與次數預覽無誤再確認。已 Reversed（沖退）的交易不能再掛會員。

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

### Coupon Payment
**這是什麼：** 查詢會員購買付費優惠券的交易紀錄（線上付款買券的訂單），核對付款狀態、退款編號與失敗原因。
**出現位置：** 純後台內部頁面；付款發生在顧客 App 結帳時，這裡是後台查詢與對帳介面。
**欄位／設定：**
- **Ref Id** — 訂單參考編號。
- **Brand** — 篩選品牌（只列出有啟用付費優惠券的品牌）。
- **Member No** — 篩選某會員編號。
- **Create Date** — 訂單建立日期區間。

表格欄位：
- **Ref Id** — 訂單參考編號。
- **Brand / Coupon** — 品牌與購買的優惠券名稱。
- **Member No** — 購買會員編號。
- **Create Date** — 訂單時間。
- **Status** — Fail（失敗）/ Success（成功）/ Processing（處理中）/ Void（作廢）。
- **Remark** — 若有退款會顯示 Refund Id；若付款失敗會顯示 Payment Fail 並附 Error Code 與 Reason。

**注意：** Status 為 Processing 不代表最終成功，需等系統更新為 Success 或 Fail。Fail 的訂單可在 Remark 欄看到失敗原因代碼，方便回報金流服務商。

### Blocked Number
**這是什麼：** 顯示被系統封鎖的手機號碼清單，可手動解除封鎖。被封鎖的號碼無法收到驗證碼簡訊。
**出現位置：** 純後台內部頁面；封鎖與解封只影響簡訊發送，會員端看不到這份清單。
**欄位／設定：**
- 表格欄位：Phone（被封鎖號碼）、Block Date（封鎖日期時間）。
- **Unblock** 按鈕（每列後方）— 解除該號碼的封鎖；按後系統回到列表頁，該號碼即可重新收到驗證碼。
**注意：** 解封前請先確認該號碼並非惡意濫發，以免再次觸發系統封鎖。

### Member（台灣專用版本）
**這是什麼：** 台灣部署專用的會員資料查看頁面，功能比標準 Member 陽春，僅供查詢，沒有品牌多檔案、點數調整、印花、Bingo 等分頁。
**出現位置：** 純後台內部頁面；只有台灣區部署且具備對應權限的帳號才看得到此選項（與標準 Member 擇一顯示）。
**欄位／設定：**
- 搜尋區：**Member No / Phone / Email**。

會員資訊區（唯讀顯示，無 Edit 按鈕）：
- **Member No / Security Code** — 會員編號與安全碼。
- **Phone** — 主號碼；下方 **Alternative Phone** 列出其他歷史號碼。
- **Country Code** — 國碼。
- **Email** — 電郵。
- **Fb Id / Gmail Id / Line Id / Apple Id** — 各第三方登入綁定編號；已綁定者後方有 **Unbind** 連結可解綁。
- **Display Name** — 顯示名稱。
- **Verified** — 手機是否已驗證（Yes / No）。
- **Gender** — Male / Female / N/A。
- **eInvoice Id** — 台灣電子發票載具編號。
- **Payment Token** — 信用卡付款金鑰；有綁定時顯示 **View** 連結，點入可查看各品牌（如 Pizza Hut、KFC、CoBrand）的金鑰並可逐筆 **remove**。
- **Birthday / Join Date** — 生日與加入日期。

**注意：** Unbind 與 remove 為不可逆操作，解綁第三方登入後會員將無法用該帳號登入，移除 Payment Token 後該卡別需重新綁定才能再付款。

---

## Push

這個分頁用來「主動接觸顧客」——排程派發優惠券、推播通知與最新消息，以及對大批會員執行點數／優惠券的一次性批次操作。

### Coupon
**這是什麼：** 排程把一張優惠券派發給指定會員，每位會員可收到指定數量，於指定日期時間落入他們的優惠券錢包。
**出現位置：** 顧客 App 的優惠券錢包。純後台排程設定，畫面上不會對操作人員顯示任何東西。
**欄位／設定：**
- **Brand** — 要派發的品牌。選擇後系統會載入該品牌下的優惠券清單。
- **Coupon** — 從下拉選單挑選要派發的那一張優惠券（會顯示優惠券名稱與目前狀態）。
- **Quantity** — 每位符合資格的會員要收到幾張，限 1–20。
- **Push Target** — 對象範圍：Brand Members（該品牌全部會員）或 Custom Brand Members（自訂名單）。
- **Required Discount Card Level** — 只派給持有指定會員等級的會員；可勾多個。僅在 Push Target 為 Brand Members 時出現。
- **Exclude Discount Card** — 反過來排除指定會員等級。僅在 Push Target 為 Brand Members 時出現。
- **Required Has All Discount Card** — 勾起來時，會員必須「同時」持有所有勾選的等級才符合資格；不勾則為「任一」即可。
- **Receivers** — 上載 CSV 名單。僅在 Push Target 為 Custom Brand Members 時出現，上限 40 萬筆。
- **Member Join Date Before** — 只派給在這個日期之前加入的會員。用來排除新加入的會員。
- **Bypass Internal Third Party Event Tracking (ex:Braze)** — 勾起來時，這次派發不會回報給第三方行銷系統（例如 Braze）。除非你有特別原因，通常不勾。
- **Enable Priority Blast** — 啟用優先發送，用於大型或急件的派發。
- **Push Date / Push Time** — 派發的日期與時間。系統會在這個時間把優惠券送進會員錢包。
- **Create Date** — 紀錄建立日期。
**注意：** 派發一旦完成就無法在列表上刪除；只有「尚未派發」的紀錄可按 Delete。若所選品牌尚未設定任何會員等級，系統會提示這次派發會送到該品牌全部會員。

### Batch Point Adjustment
**這是什麼：** 上載一份 CSV，排程在某個時間大量調整一批會員的點數結餘（例如補發、扣減）。
**出現位置：** 顧客 App 的點數結餘（顧客只看到結餘變化，不會看到「這是一筆批次調整」）。純後台作業。
**欄位／設定：**
- **Brand** — 要調整的品牌。
- **Scheduled Date / Scheduled Time** — 排程執行的日期與時間。系統會在這個時間才套用調整，不是按下 Confirm 就立即生效。
- **CSV** — 上載包含調整明細的檔案。
**注意：** 列表上的 Status 會依序顯示 Pending → Sending → Sent，代表整批調整的進度。實際點數變化以排程時間為準，建立後無法在這個畫面編輯或取消。

### Notification
**這是什麼：** 對會員發送一則推播通知與（或）App 收件匣訊息，可排程，可指定點擊後打開 App 內某個畫面。
**出現位置：** 顧客 App 的推播通知 ＋ App 內收件匣（兩者可獨立開關）。
**欄位／設定：**
- **Push Target** — All Members（全部會員）、Brand Members（某品牌會員）或 Custom (Upload File)（自訂名單，上載 CSV）。
- **Brand** — 對象品牌。僅在 Push Target 為 Brand Members 時出現。
- **Receivers** — 上載 CSV 收件人清單。僅在 Push Target 為 Custom 時出現。
- **Title (Eng) / Title (Chi)** — 推播標題的英文與中文版本。
- **Message (Eng) / Message (Chi)** — 推播內文的英文與中文版本。中英文皆為必填。
- **Same Inbox Message** — 勾起來時，App 收件匣裡的標題與內文直接沿用上面的推播文字（此時下面的收件匣欄位會隱藏）。不勾時可為收件匣另外寫一套文字。
- **Inbox Title (Eng/Chi) / Inbox Message (Eng/Chi)** — App 收件匣訊息的標題與內文。僅在 Same Inbox Message 未勾選時填寫。
- **Image** — 附在訊息上的圖片。
- **Notification Type** — 決定會員點擊推播後被打開的 App 畫面，例如 Home、Promotion、Merchant（各種品牌頁）、Tag Group、Popup Webview、Story、Eshop Item、Merchant (Specific Coupon／Specific Redeemable) 等。不同類型會帶出不同的額外欄位。
- **Push Date / Push Time** — 發送日期與時間。
- **Push to device: Storellet App / Branded App** — 要推到主 Storellet App 還是品牌專屬 App。僅在 Push Target 為 Brand Members 時出現，且兩者至少須勾一個。
- **Push Needed** — 勾起來才會發送推播通知到裝置。不勾則完全不發推播。
- **Inbox Needed** — 勾起來才會把訊息寫進 App 收件匣。
- **Highlighted Message Needed** — 勾起來會在 App 內把這則訊息標示為「精選／高亮」，並需設定結束日期。
- **Highlighted Message End Date** — 高亮訊息的顯示截止日。
- **Deep Link** — 系統自動產生的深層連結（僅在已存在時顯示，可預覽），供行銷用途複製使用。
**注意：** Push Needed 與 Inbox Needed 是兩個獨立開關——可以「只發推播不進收件匣」「只進收件匣不推播」或「兩者都做」，看你的活動設計。發送完成的訊息無法在列表上刪除，只有尚未發送的可以刪。

### News
**這是什麼：** 發佈一則最新消息／資訊文章到 App 的消息專區，會員進入專區時可看到圖文內容。
**出現位置：** 顧客 App 的最新消息／資訊專區。不是推播通知。
**欄位／設定：**
- **Brand** — 所屬品牌。
- **News Title (Eng) / News Title (Chi)** — 標題英文與中文版本。英文標題為必填。
- **Description (Eng) / Description (Chi)** — 內文英文與中文版本。
- **Image (Eng) / Image (Chi)** — 中英文版可各自搭配一張圖片。
- **Publish Date / Publish Time** — 文章上線的日期與時間。
- **Status** — Active（上架，會員看得到）、Inactive（下架）、Suspended（暫停顯示）。只有 Active 的文章會出現在 App 中。
**注意：** 這裡不會主動發推播，只是把文章放進消息專區；若要通知會員，請另外到 Notification 建一則推播。

### User Favour Batch Operation
**這是什麼：** 針對已派發到會員手中的優惠券，進行大量一次性操作：補派、改效期、強制到期或標記為已使用。主要用於修正資料或活動補救。
**出現位置：** 顧客 App 的優惠券（顧客只會看到結果——券的數量／效期改變）。純後台批次作業。
**欄位／設定：**
- **Name** — 這次批次操作的名稱，方便日後辨識。
- **Brand** — 所屬品牌。先選品牌、上載名單後按 Initialize，系統才會載入下面的欄位。
- **Upload CSV** — 要處理的會員名單。
- **Coupon** — 要操作的是哪一張優惠券。
- **Type** — 操作類型：Dispatch（補派新的券）、Update（改現有券的日期）、Expire（強制把現有券設為到期）、Use（標記為已使用）。
- **Active On / Create After / Create Before / Expire After / Expire Before** — 篩選條件，用來限定「只處理在某段時間內有效／建立／到期的券」。Update／Expire／Use 類型才會用到。
- **Max Qty Per User** — 每位會員最多處理幾張券的上限。
- **Quantity** — Dispatch 時要補派幾張。
- **New Start Date / New Expiry Date** — Update 時要改成的新的起訖日期。
- **Remark** — 內部備註。
- **Status** — Awaiting Processing（排隊處理中）、Finished（完成）、Error（發生錯誤）。
- **Results** — 執行後顯示每位會員的處理結果（影響幾張、實際處理幾張、訊息）。
- **Created By / Created At** — 操作人員與時間紀錄。
**注意：** Dispatch／Update 需要按 Execute 直接執行；Update／Expire／Use 類型建議先按 Pre-execute 預覽「會影響多少張券」再正式執行，避免誤改大量資料。建立後無法編輯，只能檢視結果。

### User Point Batch Operation
**這是什麼：** 把一批會員的點數「有效期」往後延長。用於點數到期補救或活動延長。
**出現位置：** 顧客 App 的點數（顧客看到的是點數到期日往後延）。純後台批次作業。
**欄位／設定：**
- **Name** — 這次批次操作的名稱。
- **Brand** — 所屬品牌。
- **User IDs (comma-separated)** — 要處理的會員編號，以逗號分隔。**留空代表套用到該品牌全部會員**，請特別小心。
- **Type** — 操作類型，目前提供 Extend（延長效期）。
- **Extend Point** — 要延長的點數上限。系統只會延長到「該會員目前實際持有的點數」，例如填 99999 但會員只有 1 點，就只延長 1 點；會員 0 點則什麼都不做。
- **Remark** — 內部備註，會寫入會員的活動紀錄方便日後查閱。
- **Status** — Awaiting Processing、Finished、Error。
- **Results** — 每位會員的處理結果。
- **Created By / Created At** — 操作人員與時間紀錄。
**注意：** 這裡的「延長」是延後點數的到期日，不是增加點數結餘。User IDs 留空會影響全品牌會員，務必再次確認。建立後僅能檢視，不能修改。

---

## Report

報表分頁提供三個功能，全部都是後台檢視，僅能由具備權限的管理員進入。並非每個帳號都看得到全部三個項目，側邊欄只會顯示您有權限開啟的功能。（其他如 Overview、Member、Point 等舊版報表目前已停用。）

### Auto Regular Alarm
**這是什麼：** 排程「自動定期報表」的設定清單。您可設定讓系統每日／每週／每月自動產生會員相關報表，並在指定時間以電郵寄給各門市的收件人，管理層與行銷人員不用進後台也能定期收到摘要。
**出現位置：** 後台檢視；設定完成後，報表會依排程寄到您填入的電郵地址（通常為 Excel 附件）。主要使用者為品牌管理層、行銷與門市營運負責人。需要相應權限才能看見此選單。
**篩選／欄位：**
清單頁可用的篩選與欄位：
- **Brand** — 只顯示某品牌的排程；預設 Show All 顯示全部。
- **Type** — 篩選排程週期（Monthly / Weekly / Daily Auto Report）。
- **Name** / **Type** / **Start Date** / **End Date** / **Status** — 每個排程的名稱、週期、有效期間與是否生效。
- **Add New** — 新增一筆排程；點清單上的 Edit 修改現有排程。

新增／編輯排程的表單欄位：
- **Type** — 報表週期：Monthly Auto Report（每月）、Weekly Auto Report（每週）、Daily Auto Report（每日）。
- **Name** — 此排程的名稱，方便辨識。
- **Group** / **Brand** — 選擇這份排程涵蓋哪個集團與品牌（Brand 可選 All Brand In Group）。
- **Coown Alarm Report**（勾選後才出現以下三個門檻）— 跨店高活躍會員警示：當會員在有效期間內同時符合下列三個門檻時，會列入警示名單。
  - **Earnpoints Count** — 累計獲得點數下限。
  - **Shop Count** — 涉及的門市數目下限。
  - **Trx Amt** — 交易金額下限。
- 以下六個勾選項目是報表要附帶的章節，可多選：**New Member Report**（新會員）、**Coupon Issued**（已派發優惠券）、**Coupon Used**（已使用優惠券）、**Point Earn Report**（點數累積）、**Ecommerce Transaction Report**（電商交易）、**Wallet History**（錢包儲值／扣點紀錄）。
- **With User Email** — 報表內附上會員的電郵欄位。
- **With Password** — 為匯出檔加上密碼保護；勾選後可在 **Password Value** 手填，或按 Generate Password 自動產生一組密碼。
- **Effective Period**（Start Date – End Date）— 這份排程的有效日期區間。
- **Status** — Active（生效）或 Inactive（暫停）。
- **Email List** — 收件人對照：左邊是 Shop Code（門市代碼），右邊是該門市的收件電郵（可填多個）。第一行 `*` 代表「所有門市」的預設收件人；可按 `+` 新增其他門市的專屬收件人。
- **Execution Time** — 系統每日執行寄送的時間（整點，例如 22:00、01:00）。
**注意：** 排程只有在 Status 為 Active 且目前日期落在 Effective Period 內，才會如期寄送。修改收件人時請確認電郵格式正確（系統會拒絕格式不正確的電郵）。

### Storellet Report
**這是什麼：** 後台營運監察排程的清單，用來設定「系統異常通知」——目前可配置兩種：Payment Gateway Service Error（支付閘道服務異常）與 SMS Flooding（簡訊大量發送異常）。當異常達到設定的門檻時，系統會寄電郵通知指定的收件人。屬於技術／營運監控用途，非業務報表。
**出現位置：** 後台檢視；異常通知會寄到您配置的電郵。僅開放給具備「編輯支付閘道服務報表」權限的營運／系統管理員，一般行銷或門市帳號看不到此選單。
**篩選／欄位：**
清單頁：
- **Report Type** — 篩選要看的監察類型（All / Payment Gateway Service Error / SMS Flooding）。
- **Name** / **Type** / **Report Type** / **Config** / **Start Date** / **End Date** / **Status** — 每筆排程的識別與摘要。
- **Add New** — 新增一筆監察排程；點 View 開啟該筆的詳細設定。

新增／編輯表單共通欄位：
- **Type** — 排程週期。
- **Name** — 此監察排程的名稱。
- **Report Type** — 選擇 Payment Gateway Service Error 或 SMS Flooding；選擇後下方欄位會自動切換。
- **Threshold** — 觸發通知的數量門檻（超過此值才寄出警告）。
- **Effective Period**（Start Date – End Date）— 監察的有效日期區間。
- **Status** — Active（生效）／Inactive（停用）。
- **Email List** — 接收警告電郵的收件人（可填多個）。

當 Report Type 為 **Payment Gateway Service Error** 時，額外欄位：
- **Table** — 要監察的支付閘道資料來源。
- **Provider** — 支付服務供應商。
- **Status** — 要監察的交易狀態。

當 Report Type 為 **SMS Flooding** 時，額外欄位：
- **App Ids** — 要監察的應用程式（可多選）。
- **Provider Types**／**Providers** — 簡訊供應商類型與供應商（可多選）。

**注意：** 修改後請按 Confirm 儲存；刪除請按 Delete，系統會再次確認後才移除。

### Count Coupon
**這是什麼：** 單次優惠券數量查詢工具。選擇某張優惠券、查詢基準與一個時間點，按下按鈕即可得到「截至該時間為止，符合條件的券數量」。查詢結果以彈窗顯示一個數字，不會列出明細，也無法匯出。
**出現位置：** 後台檢視；結果只在畫面上以彈窗顯示，不提供 Excel 或其他匯出。適合行銷／管理層做快速點算（例如確認某券迄今已派發多少張），需要正式報表時請改用 Auto Regular Alarm 排程。需具備特定權限才看得到此選單。
**篩選／欄位：**
- **Brand** — 選擇品牌；切換後 Coupon 下拉選單會重新載入該品牌的優惠券。
- **Coupon** — 選擇要查詢的優惠券（清單包含已停用、已過期、尚未生效的券，並會顯示每張券的編號與狀態方便辨識）。
- **Request Type** — 數量的計算基準，有五種：
  - Issue After Request Date — 於指定時間「之後」發出的數量。
  - Used After Request Date — 於指定時間「之後」被使用的數量。
  - Expired After Request Date — 於指定時間「之後」過期的數量。
  - Used After Issue On Request Date — 發出後、於指定時間使用掉的數量。
  - Expired After Issue On Request Date — 發出後、於指定時間已過期的數量。
- **Request Date Time** — 查詢的基準日期與時間（預設帶入現在時間，可手動修改）。
- **Request** — 執行查詢；系統會顯示載入動畫，完成後以彈窗顯示數量。
**注意：** 每次查詢只回傳一個總數，不會列出會員或券號明細。若需要名單或可匯出的版本，請使用 Auto Regular Alarm 排程並勾選 Coupon Issued 或 Coupon Used。

---

## Application

這個分頁管理顧客 App、網店、收銀機、簡訊等所有對外表面的整體設定。側邊欄順序如下：Configure → Locale → Region → Tag Group → Front Page Setting → View Pos Keys → PMS Records → Queuing System → Region Code Config → App Banner → Image → Merchant Web Config → SMS Service Config。

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

### Locale
**這是什麼：** 管理顧客 App 支援的語言，包含顯示名稱、iOS 與 Android 各自的語言字串檔。
**出現位置：** 顧客 App 全機的在地化文字（依顧客手機語言切換）。
**欄位／設定：**
- **Identifier** — 語言代碼（例如 zh-Hant、en）。新建時可填，建立後不可改。
- **Display Name** — 在後台清單與顧客端切換語言時顯示的名稱。
- **Strings Name / Strings File** — iOS 用的字串檔名稱與檔案（可下載既有檔再上傳新版本）。
- **Android Strings File** — Android 用的字串檔（可下載既有檔再上傳新版本）。
- **Default Locale Identifier** — 此語言在 iOS／Android 系統中的預設地區代碼。
**注意：** 所有欄位都是必填，未填會在按 Confirm 時被擋下。

### Region
**這是什麼：** 管理顧客 App 可選擇的地區（例如 HK、TW、MO、CN），每個地區帶有電話國碼、可用語言、貨幣、聯絡管道與教學影片。
**出現位置：** 顧客 App 註冊／登入時的「選擇地區」、App 設定頁的聯絡信箱與社群連結、各教學影片播放處，以及顧客切換地區時可用的語言清單。
**欄位／設定：**
- **Identifier** — 地區代碼（新建時可填，建立後不可改）。
- **API Prefix** — 此地區使用的後端服務位置（由技術團隊填寫）。
- **Name** — 地區顯示名稱。
- **Country Phone Prefix** — 此地區的電話國碼（例如 852、886）。
- **Available Phone Prefix List For Login** — 顧客登入時可選擇的電話國碼清單，可多選。
- **Currency Locale Identifier** — 此地區使用的貨幣格式代碼。
- **Official Web Link / Facebook Link** — 顧客 App 設定頁中的官方網站與 Facebook 連結。
- **CS Email / Support Email** — 顧客 App 設定頁顯示的客服信箱與技術支援信箱。
- **How To Use Video / Stamp Combo Video / Main Video / Bingo Game Video / Point Earn Video** — 顧客 App 中各教學／宣傳影片的網址。
- **Priority** — 地區在選擇清單中的排列先後（數字小的在前）。
- **Available Locale Group** — 此地區提供哪些語言；每個語言可單獨設定此語言下的條款、隱私政策、註冊備註、年齡層與性別選項。
**注意：** 每個地區的 Available Locale 都必須填齊條款與隱私政策，否則按 Confirm 會被擋下。

### Tag Group
**這是什麼：** 管理顧客 App 瀏覽頁的分類群組，分為「品牌分類」與「地理分類」兩種。
**出現位置：** 顧客 App 首頁的瀏覽／篩選分類，以及 Front Page Setting 中可挑選的分類區塊。
**欄位／設定：**
- **Type** — 選擇 Geo Location 或 Brand（Asset 為系統用，不能選）。
- **Name** — 後台辨識用名稱。
- **Title (Eng / Chi)** — 顧客 App 上顯示的分類標題（英／繁中）。
- **Icon with Title** — 是否在 App 中連同圖示一起顯示標題。
- **Headline (Eng / Chi) / Description (Eng / Chi)** — 分類頁頂部的標語與說明文字。
- **Detail Url (Eng / Chi) / Detail Url Wordings (Eng / Chi)** — 在 App 點入分類詳情頁時前往的網址，與按鈕文字。
- **Background Image (Eng / Chi) / Icon Image (Eng / Chi)** — 分類的背景圖與圖示（英／繁中），可上傳。
- **Icon with Fade Color** — 圖示是否套用淡色效果。
- **Background Color / Text Color** — 分類卡的背景色與文字色（附色盤）。
- **Tag Wordings / Geo Location Tag Wordings** — 這個分類底下要包含哪些標籤（可多選；Brand 類顯示前者，Geo 類顯示後者）。
- **Geo Location / Distance (in meter)** — 當類型為 Geo 時，用互動地圖指定中心點與涵蓋半徑（公尺）。
- **Priority** — 在 App 上的排列先後。
- **Status** — Active 顧客可見；Inactive 顧客看不到。
**注意：** 切換 Type 時會自動清空另一類的標籤與地理位置，務必先選好 Type 再填內容。

### Front Page Setting
**這是什麼：** 編排顧客 App 首頁由上而下要出現哪些內容區塊，以及每個區塊的內容來源。
**出現位置：** 顧客 App 首頁的整體版面。
**欄位／設定：**
- **Add Top Content** — 點下後跳出「Select Content Type」對話框，可選擇下列五種區塊類型。
- **Spot Light** — 醒目輪播區。Display Type 可設為 Geo（依地理位置）或 Tag Group（依指定分類）；選 Tag Group 時再指定一個分類作為內容來源。
- **Horizon** — 橫向陳列區。Display Type 可選 Recent（最近）、New Arrival（新品）、Popular（熱門）或 Tag Group（指定分類）。
- **Bundles** — 主題組合區，可挑多個 Feature 商品或分類放進同一組。
- **Category** — 分類頁籤區，可挑多個分類並以頁籤方式呈現。
- **Advertisement** — 廣告版位（單純佔位，內部另由廣告系統填充）。
- 每個區塊可用「+」往下再加一層區塊、用「−」刪除該區塊；整頁編輯完按 **Update** 儲存。
**注意：** 區塊順序即為顧客看到的由上而下順序；Tag Group 與 Featured 來源都來自 Tag Group 頁面，請先在那邊建立好分類再到這裡挑選。

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

### PMS Records
**這是什麼：** 維護每間分店對應到外部 PMS（付款管理／飯店管理）系統的合作夥伴代碼、商家代碼、門市代碼、範本代碼與標籤。
**出現位置：** 僅後台與 PMS 夥伴系統之間；顧客看不到。
**欄位／設定：**
- **Brand** — 篩選／指定品牌（list 頁可用 All 看全部）。
- **Shop** — 選擇分店；選好後系統會帶入該分店既有的 PMS 設定。
- **Shop Name / Partner ID / Merchant ID / Secondary Merchant ID / Store ID / Template ID / PMS Label** — 對應到 PMS 夥伴系統中的各種識別碼；預設唯讀，勾選旁邊的 Edit 才能改。
- **Last Update Date / Last Update By** — 系統紀錄。
- **Save / Cancel / Delete** — 按 Save 前會跳確認；Delete 同樣會跳確認。
**注意：** Partner ID、Merchant ID、Store ID 一旦寫錯，會直接影響付款或訂單對帳，改動前務必與 PMS 夥伴確認。

### Queuing System
**這是什麼：** 為每個品牌設定要使用哪一套外部排隊／候位系統，並指定旗下哪些分店要走這套系統，以及哪些候位標籤可對應發送哪張折扣卡。
**出現位置：** 顧客 App 的候位／抽籤／排隊功能（背後串接外部系統）；網店或收銀機場景看不到。
**欄位／設定：**
- **Brand** — 列表頁的篩選器；編輯頁為必選。
- **Queue System** — 選擇要串接的候位系統（目前僅 WebOn）。
- **Internal Shop Codes** — 這個品牌底下哪些分店要走此候位系統，可多選。
- **Queue Group Rules** — 可新增多筆規則，每筆指定一個 Tag（標籤）並選擇要發給哪些折扣卡。
- **Status** — Active 或 Inactive；Inactive 時此設定不生效。
**注意：** 切換品牌時 Internal Shop Codes 與 Queue Group Rules 會重置，請先選好品牌再繼續操作。

### Region Code Config
**這是什麼：** 維護地區電話區號的參考資料，包含電話區號、ISO 國碼、手機號碼長度、中英文名稱。
**出現位置：** 顧客 App 註冊與登入時的「國家區號選擇」，以及 Configure 頁 Available Region Codes 的選項來源。
**欄位／設定：**
- **Region Code** — 電話區號（例如 852）。新建時可填，建立後不可改。
- **Country Code** — ISO 國碼（例如 HK）。唯讀，由系統帶入。
- **Number Of Digit** — 此區號標準的手機號碼位數。唯讀，由系統帶入。
- **Name Zh / Name En** — 此區號在後台與切換清單上的繁中／英文名稱，可編輯。
**注意：** Region Code 與 Country Code 是配對的參考資料，不要任意新建非正規區號，否則會誤導顧客選錯國碼導致收不到驗證碼。

### App Banner
**這是什麼：** 顧客 App 頂部的橫幅訊息，可依「所有顧客」或「已加入某品牌的顧客」分別顯示不同文案與按鈕，並可設定上下檔期間。
**出現位置：** 顧客 App 首頁最上方的橫幅。
**欄位／設定：**
- **App Ids** — 這則橫幅要出現在哪些 App，可多選。
- **Criteria** — 觸發條件類型；選 Joined 表示「只顯示給已加入某品牌的顧客」，此時需再選 Brand Id。其他類型為不區分對象的全員橫幅。
- **Criteria Meet（符合條件時顯示）** — Header Zh/En、Body Zh/EN、Button Wording Zh/EN、Button Action（Deeplink，顧客點按鈕時前往的 App 頁或網址），以及背景色、文字色、按鈕底色、按鈕文字色。
- **Criteria Not Meet（未符合條件時顯示，僅 Joined 才會出現這一整區）** — 同上四組文案加四組顏色，給「還沒加入這個品牌」的顧客看。
- **Active** — 勾選才會上線。
- **Start Time / End Time** — 橫幅的有效上下檔時間，未填會被擋下。
- 文案欄支援三種站位：`{{brand.name}}`（品牌名稱）、`{{userPoint.point}}`（顧客點數），以及在 Image 頁上傳圖片後取得的 `{{image.編號}}` 圖片站位；圖片建議高度 21 pixel 或使用 SVG。
- **Created By / At / Updated By / At** — 系統紀錄。
**注意：** 填完 Meet 區所有必填（中英 Header、Body、Button Wording、Button Action）才能儲存；若選 Joined，Not Meet 區的 Header／Body 同樣不能留空。

### Image
**這是什麼：** 橫幅／訊息可重用的圖片資料庫；每張圖上傳後會產生一個站位，可在 App Banner 的 Header／Body 內嵌入。
**出現位置：** 圖片本身不單獨顯示在 App 上，只會透過站位出現在 App Banner（以及任何支援站位的地方）。
**欄位／設定：**
- **Image Alias** — 這張圖在後台辨識用的名稱，必填。
- **Image Source** — 二選一：Upload Image（從本機上傳，可預覽）或 External URL（貼外部圖址，可預覽）。
- **Upload Image / External URL** — 依上面選擇顯示對應輸入。
- **Current Image** — 進入編輯時顯示目前圖、可複製的 Image URL，以及可複製的 Image Placeholder（長得像 `{{image.編號}}`），把這段貼到 App Banner 文案中即可顯示該圖。
- **Created By / At / Updated By / At** — 系統紀錄。
**注意：** 進入編輯模式後無法再切換圖片來源或重新上傳，要換圖請回到列表用 Add New 重建。

### Merchant Web Config
**這是什麼：** 編排商家專用網站（merchant web）的主題、自訂標頭、橫幅、任務群組與排列順序，可指定上下檔期間。
**出現位置：** 商家登入的網店後台／導引網頁；顧客 App 完全看不到。
**欄位／設定：**
- **Brand Id** — 這組設定要套用到哪個品牌。
- **Theme** — 網店後台的主題風格。
- **Custom Header Zh / En** — 整個商家網頁最上方的自訂標頭（繁中／英文）。
- **Custom Session Order** — 商家網頁各區段（Banner、ItemGroup 與系統預設區段）的排列順序，用拖曳調整。
- **Banner（可新增多個）** — 每組含 Image Url 與 Action（點擊前往的網址）。
- **Item Group（可新增多組，每組內可再新增多個 Task）** — 群組有 Header Zh/En 與 Task Order（拖曳排序）；每個 Task 有 Icon Url、Header Zh/En、Body Zh/En、Button Wording Zh/En、Button Action。
- **Active** — 勾選才會上線。
- **Start Time / End Time** — 設定的有效上下檔時間。
- **Created By / At / Updated By / At** — 系統紀錄。
**注意：** Custom Session Order 中的區段順序就是商家看到的順序；若刪掉某個 Banner 或 ItemGroup，它會自動從 Session Order 移除。

### SMS Service Config
**這是什麼：** 決定哪一家簡訊供應商負責哪一類簡訊、配送到哪些 App、支援哪些行動電話國碼（MCC），並以優先順序決定備援。
**出現位置：** 顧客 App 註冊／登入／忘記密碼等流程收到的驗證碼簡訊；顧客看到的不是設定本身，而是「有沒有收到、從哪一家業者收到」。
**欄位／設定：**
- **Name** — 這組設定在後台的名稱。
- **Provider Name** — 實際發送的簡訊業者，從系統已接入的清單中挑選。
- **Type** — 這組設定負責的簡訊類型（可多選），例如註冊、忘記密碼、刪除帳號、一般驗證、OTP 登入等。
- **App Ids** — 套用到哪些 App（可多選）。
- **Support MCC** — 支援的行動電話國碼清單（可多選）；不在清單中的國碼不會走這家供應商。
- **Only First Time** — 勾選後，這條規則只在顧客首次收到該類簡訊時生效。
- **Order** — 優先順序，數字愈大優先級愈高；同一條件下會依此排序選擇供應商。
- **Status** — 勾選代表啟用。
- **Last Update** — 系統紀錄。
**注意：** 改動前先確認新供應商已在系統中接入且帳號有效；若把某個 Type 的所有規則都停用，該類簡訊將完全發不出去，直接卡住顧客註冊。

---

## CMS users

側邊欄選單「CMS users」分頁下共有三個子項目，依序為 CMS Users、Staff、Boss App Account。整個分頁僅會出現在本身已具備「CMS Users」管理權限的帳號上。這三個頁面共同決定「誰可以登入系統」以及「登入後能做什麼」。

### CMS Users
**這是什麼：** 管理可登入後台（CMS）的最高層級帳號，並精細指派每個帳號在後台能看見與操作的模組。
**出現位置：** 僅後台內部使用。這些帳號登入後會進入完整 CMS，依您勾選的權限看見並操作對應的後台模組（例如優惠券、會員、推播、報表、應用程式設定等），也可以再管理下一層的 CMS 帳號。
**欄位／設定**（只列管理員真正會設的）：
- **Username** — 登入帳號名稱，必填。
- **Password** — 密碼。留白代表不變更原密碼；若有輸入需符合系統密碼格式，否則無法儲存。
- **Email** — 帳號聯絡電郵。
- **Contact No** — 帳號聯絡電話。
- **Name** — 顯示名稱（人員姓名）。
- **Title** — 職稱，僅供辨識。
- **Department** — 部門，僅供辨識。
- **Permissions** — 一整棵權限勾選樹，決定該帳號登入後能看見哪些後台模組。主分類如下：
  - **CMS** — 後台總開關，勾選才視為後台使用者。其下可再展開：
    - **Dashboard** — 觀看後台首頁儀表板。
    - **Company**（下含 Company / Group / Brand / Shop / Featured Item）— 管理多租戶結構：公司、群組、品牌、商店、精選項目。
    - **Assets**（下含 Points / Discount Card / Bingo / Stamp / Coupon / Coupon Package / Coupon Trigger Rule / Survey / Coupon Code / User Activation Key / Edit Cross Brand Automation / EShop / User Wallet Top Up Plan）— 管理各類會員資產。
    - **Membership**（下含 View Detail / Edit Detail / Invoice / Qr Code Inspector / Blocked Number / Coupon Payment / Unsubscribe Merchant / Membership (Simple) / User Wallet Modification）— 檢視／編輯會員資料、開立發票、掃碼查驗、封鎖號碼等。
    - **Push**（下含 Coupon / Notification / News / User Favour Batch Operation / User Point Batch Operation）— 發送推播與批次操作。
    - **Application**（下含 Configure / Locale / Region / Tag Group / Front Page Setting / View Pos Key / Generate Pos Key / Rotate Pos Key / Promote Pos Key (destructive) / Edit Pms Records / Edit Queuing System）— 應用程式設定與 POS 金鑰管理（其中 Promote 為破壞性操作）。
    - **CMS Users** — 可看見並管理此「CMS users」分頁（也就是本頁所屬的權限）。勾選後才能新增／編輯其他 CMS 帳號。
    - **Report** / **Edit Payment Gateway Service Report** — 檢視報表；後者進一步可編輯支付閘道服務報表。
  - **CS App** — 客服 App 總開關。勾選後此帳號也可使用客服 App，其下可再細分：
    - **Add Point** — 客服 App 中可手動為會員加點。
    - **Use Coupon** — 客服 App 中可代為使用優惠券。
- **Companies** — 多選，限制此帳號能管理哪些公司（多租戶範圍）。
- **Groups** — 依所選公司連動載入，限制可管理的群組。
- **App Ids** — 多選，限制此帳號對哪些應用程式（App ID）有權限。
- **Show White Label Assets** — 勾選後該帳號只會看到白標（White Label）資產。
- **Is storellet admin** — 只有當您自己已是 Storellet 平台管理員時才會出現此選項。勾選後該帳號成為平台級超級管理員，擁有跨所有客戶的完整權限，請審慎使用。
- **Status** — Active（啟用）或 Inactive（停用）。
- **Create Date / Last Login Date** — 唯讀，僅供檢視。
**注意：**
- 清單頁只顯示 Status 為 Active 的帳號；一旦設為 Inactive，該帳號不會出現在清單，也無法登入。
- 權限是「勾了才有」。例如沒勾 Company 下的 Shop，該帳號就完全看不到商店管理頁面。本頁所屬的「CMS Users」權限也要勾選，該帳號登入後才看得到這個分頁。
- Is storellet admin 一旦勾選等同超級管理員，請只配發給內部平台人員。
- 按 Confirm 儲存；密碼欄留白即保留原密碼。

### Staff
**這是什麼：** 管理門店員工帳號。與 CMS Users 不同，這些是「現場操作人員」用的帳號（例如門市職員），權限聚焦在門店、結帳、客服相關功能，而非整個後台。
**出現位置：** 僅後台內部設定。這些帳號登入後可使用對應的前台工具（例如門店結帳、客服 App、收據列印、Boss App 等），視所勾選的權限而定。
**欄位／設定**（只列管理員真正會設的）：
- **Display Name** — 員工顯示名稱。
- **Username** — 登入帳號名稱。
- **Password** — 密碼。留白代表不變更原密碼。
- **Phone (with Country Code Prefix)** — 聯絡電話，需含國碼（例如 +852）。
- **Permissions** — 勾選該員工可使用的功能：
  - **CMS** — 可登入後台（門店層級）。
  - **Coupon Delivery** — 可發送優惠券給會員。
  - **Master Card Direct Pay** — 可直接使用 MasterCard 扣款。
  - **Checkout** — 可操作結帳。
  - **Connect Printer** — 可連接收據／發票列表機。
  - **Boss App** — 可使用 Boss App（老闆查看營運資訊的 App）。
  - **JP Unsubscribe Member** — 可執行日本市場的退訂會員作業（法規需求）。
  - **Speedy Scanner Web** — 可使用 Speedy Scanner 網頁版掃碼工具。
- **Brand** — 選擇該員工隸屬的品牌；選擇後下面的 Shop 清單會連動刷新。
- **Shop** — 該員工所屬門店。
- **Status** — Active（啟用）或 Inactive（停用）。
- **Setting** — 進階設定，內容為 JSON 格式。一般管理員無需更動；若要填寫，必須是合法的 JSON，否則按 Confirm 時會被擋下。
- **Create Date / Last Login Date** — 唯讀，僅供檢視。
**注意：**
- 一個 Staff 帳號只綁定一個 Brand 與一個 Shop，不像 CMS Users 可同時跨多家公司／群組。
- Staff 清單會同時列出 Active 與 Inactive 的帳號（與 CMS Users 不同）；但設為 Inactive 的帳號無法登入。
- 按 Confirm 儲存。

### Boss App Account
**這是什麼：** 管理 Boss App（老闆／店主專用 App）的登入帳號，讓品牌負責人或店主能從手機 App 查看授權給他們的品牌營運資料。
**出現位置：** 僅後台內部設定。帳號建立後，負責人可用 Username／Password 登入 Boss App，看到您授權給他們的品牌資訊。
**欄位／設定**（只列管理員真正會設的）：
- **Display Name** — 顯示名稱（例如老闆姓名）。
- **Username** — 登入 Boss App 的帳號名稱。
- **Password** — 密碼。留白代表不變更原密碼。
- **Permissions — Boss App** — 此欄固定勾選且無法取消，因為這個分頁建立的就是 Boss App 帳號。
- **Brand** — 依群組分類的品牌清單，勾選該帳號能在 Boss App 中查看的品牌，可跨群組多選。
- **Status** — Active（啟用）或 Inactive（停用）。
- **Create Date / Last Login Date** — 唯讀，僅供檢視。
**注意：**
- Boss App 權限是鎖定的——本頁建立的每個帳號都必然具備 Boss App 存取權，您無法在此關閉它。
- 透過 Brand 勾選控制該帳號能看見的品牌範圍；沒勾選的品牌在 App 中完全不會出現。
- Status 設為 Inactive 即無法登入 Boss App。
- 按 Confirm 儲存。
