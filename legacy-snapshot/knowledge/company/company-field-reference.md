# Company CMS Field Reference

資料來源：`company_confirmed_fields.csv`  
最後確認：2026-07-24  
有效資料：181 條（原 CSV 有 16,384 欄，但實際內容只使用首 7 欄）

## Company 層級

`Company → Company Group → Brand → Shop`

Featured Item 需要選擇所屬 Brand，但不屬於以上四層架構。

## 已知資料衝突

- 來源第 164 列將 Shops > Create Shop > Create Date 列為「必填」。
- 來源第 165 列將同一欄位列為「系統產生」。
- 未確認前不可自行判斷，Chatroom 會以兩條相同問題、不同答案觸發 conflict fallback。

## 完整欄位

| CSV Row | Section | Screen / Context | Field | 是否必填 | 建議填寫 / Default | 用途 |
|---:|---|---|---|---|---|---|
| 2 | All Companies | Create Company | Company Name | 必填 | 公司註冊 / 內部公司名 | CMS 內部公司名稱 |
| 3 | All Companies | Create Company | Join Date | 必填 | 建立日期 / 合作開始日 | 記錄公司加入日期 |
| 4 | All Companies | Create Company | Status | 必填 | Active | 控制公司是否有效; 如選擇Active公司其下Group/Brand為有效；選擇Inactive公司為無效其下Group/Brand不會再顯示於Dashboard或Frontend |
| 5 | All Companies | All Companies List | Company ID | 系統產生 | Auto | 公司識別 ID |
| 6 | All Companies | All Companies List | Create Date | 系統產生 | Auto / 建立日 | 建立紀錄 |
| 7 | All Companies | All Companies List | Last Update Date | 系統產生 | Auto | 最近更新時間 |
| 8 | All Companies | All Companies List | Last Update By | 系統產生 | Auto | 最近更新人 |
| 9 | Company Groups | Create Company Group | Group Name (English) | 必填 | 英文集團名稱 | 用作前台/後台顯示 |
| 10 | Company Groups | Create Company Group | Group Name (Local Language) | 必填 | 中文集團名稱 | 用作前台/後台顯示 |
| 11 | Company Groups | Create Company Group | Company | 必填 | 選擇所屬公司 | 將 group 歸屬到所選Company |
| 12 | Company Groups | Create Company Group | Grade | 必填 | Standard | Group 等級 / 類型 |
| 13 | Company Groups | Create Company Group | Registration Image (English) | 選填 | 註冊 / group 背景圖 | 註冊 / group 背景圖 |
| 14 | Company Groups | Create Company Group | Registration Image (Local Language) | 選填 | 註冊 / group 背景圖 | 註冊 / group 背景圖 |
| 15 | Company Groups | Create Company Group | Group Logo | Branded APP必填 | Group Logo | Branded App 內顯示 |
| 16 | Company Groups | Create Company Group | Point Ratio | 必填 | 例如 $1 = 1 point(s) | 積分比例計算 |
| 17 | Company Groups | Create Company Group | Display Point Ratio | 選填 | 可留空 | 前台顯示用積分比例文字 |
| 18 | Company Groups | Create Company Group | Register Header Text (English) | 選填 | 留空 | 註冊頁 header text |
| 19 | Company Groups | Create Company Group | Register Header Text (Local Language) | 選填 | 留空 | 中文註冊頁 header text |
| 20 | Company Groups | Create Company Group | Registration Text (English) | 選填 | 留空 | 註冊頁說明文字 |
| 21 | Company Groups | Create Company Group | Registration Text (Local Language) | 選填 | 留空 | 中文註冊頁說明文字 |
| 22 | Company Groups | Create Company Group | Terms & Conditions (English) | 必填 | HTML/TXT 格式 | App 前台 T&C 顯示 |
| 23 | Company Groups | Create Company Group | Terms & Conditions (Local Language) | 必填 | HTML/TXT 格式 | App 中文 T&C 顯示 |
| 24 | Company Groups | Create Company Group | Member No. Limit | 必填 | -1 （-1 for unlimited） | 會員數量上限 |
| 25 | Company Groups | Create Company Group | CS App Point Limit | 必填 | -1 （-1 for unlimited） | App 內可累積會員積分上限 |
| 26 | Company Groups | Create Company Group | Enable Master Brand | 選填 | Tick / Untick | 啟用 master brand 架構 |
| 27 | Company Groups | Create Company Group | Email Needed | 選填 | Tick / Untick | 是否要求會員 email |
| 28 | Company Groups | Create Company Group | Unsubscribe when … | 選填 | DELETED | 退訂 / 刪除狀態邏輯 |
| 29 | Company Groups | Create Company Group | Enable TopUp Wallet | 選填 | Tick / Untick | 未有開通 |
| 30 | Company Groups | Create Company Group | TopUp Wallet Extend Year | 選填 | 未有開通 | 未有開通 |
| 31 | Company Groups | Create Company Group | TopUp Wallet Align Method | 選填 | 未有開通 | 未有開通 |
| 32 | Company Groups | Create Company Group | TopUp Wallet Max Balance | 選填 | 未有開通 | 未有開通 |
| 33 | Company Groups | Create Company Group | Override Share Group String (English) | 選填 | 未有開通 | 未有開通 |
| 34 | Company Groups | Create Company Group | Status | 必填 | Active | 控制 group 狀態； 如選擇Active公司其下Brand為有效；選擇Inactive公司為無效其下Brand不會再顯示於Dashboard或Frontend |
| 35 | Company Groups | Branded App | Background Image | Branded APP必填 | Group背景圖 | Branded App 餐廳頁面顯示 |
| 36 | Company Groups | Branded App | Group Description (English) | 選填 | 英文簡介 | App / Web 描述 |
| 37 | Company Groups | Branded App | Group Description (Local Language) | 選填 | 中文簡介 | App / Web 中文描述 |
| 38 | Company Groups | Branded App | Email | Branded APP必填 | CS / merchant email | 聯絡我們：聯絡email |
| 39 | Company Groups | Branded App | Facebook | 選填 | Facebook URL | 關於： social link |
| 40 | Company Groups | Branded App | Instagram | 選填 | Instagram URL | 關於： social link |
| 41 | Company Groups | Branded App | Url | 選填 | Website URL | 關於： website link |
| 42 | Company Groups | Branded App | About Us Url | 選填 | About Us URL | About Us 連結 |
| 43 | Company Groups | Branded App | How To Use Url | 選填 | How To Use URL | 教學連結 |
| 44 | Company Groups | Branded App | EStore Url | 選填 | E-shop URL | 導向網店 |
| 45 | Company Groups | Branded App | Branded App Terms and Conditions | Branded APP必填 | HTML/TXT 格式 | Branded App T&C |
| 46 | Company Groups | Create Company Group | Privacy Policy | Branded APP必填 | HTML/TXT 格式 | 私隱政策 |
| 47 | Company Groups | Create Company Group | Thumbnails | 選填 | 儲分示範圖 | 儲分示範 |
| 48 | Company Groups | Create Company Group | User Point Expiry Type | 必填 | User Point Dynamic Expire Every Quarter After 1 Year | 控制會員積分到期方式 |
| 49 | Company Groups | Create Company Group | Disabled Region Code | 選填 | 例如 86 / 853 | 禁用電話地區碼 |
| 50 | Company Groups | Create Company Group | Create Date | 系統產生 | Auto | 建立日期 |
| 51 | Company Groups | Create Company Group | Last Update Date | 系統產生 | Auto | 更新日期 |
| 52 | Company Groups | Create Company Group | Confirm / Last Update By | 系統產生 | Auto | 更新人 |
| 53 | Company Groups | Company Group List | ID | 系統產生 | Auto | Company Group 識別 ID |
| 54 | Company Groups | Company Group List | Group Name | 系統產生 | Auto | 找所create 的group |
| 55 | Company Groups | Company Group List | Point Rule | 系統產生 | Auto | 所輸入的point ratio |
| 56 | Company Groups | Company Group List | Company Name | 系統產生 | Auto | 公司名稱 |
| 57 | Company Groups | Company Group List | No. of Member | 系統產生 | Auto（每日更新） | 現時Member數量/總數 |
| 58 | Company Groups | Company Group List | Status | 系統產生 | Auto | 顯示group 狀態 |
| 59 | Brands | Create Brand | Brand Name (English) | 必填 | 英文品牌名 | 所有平台都會顯示 |
| 60 | Brands | Create Brand | Brand Name (Local Language) | 必填 | 中文品牌名 | 所有平台都會顯示 |
| 61 | Brands | Create Brand | Brand Code | 必填 | 商戶名英文首字母 | 品牌代碼 |
| 62 | Brands | Create Brand | Display Sequence | 必填 | 數字 | 控制APP/Web 顯示排序 |
| 63 | Brands | Create Brand | Group | 必填 | 選擇所屬 group | 品牌歸屬 |
| 64 | Brands | Create Brand | Restaurant Category | 必填 | 餐廳類別 | 搜尋 / 分類用 |
| 65 | Brands | Create Brand | Tag | 必填 | 品牌相關 keyword | APP search bar keywords |
| 66 | Brands | Create Brand | Geo Tag | 必填 | 地理 tag | APP 地區搜尋 / 分類 |
| 67 | Brands | Create Brand | Brand Logo | 必填 | 400 x 400 (1:1) preserve 20% padding for logo and text to avoid cropping；建議 1MB | 所有平台顯示 logo |
| 68 | Brands | Create Brand | Background Image on Dashboard | 必填 | 品牌背景圖 800 x 533 (1.5:1)，建議 1MB | App/Web 品牌頁 header 背景 |
| 69 | Brands | Create Brand | Website (English) | 選填 | Website URL | 前台網站連結 |
| 70 | Brands | Create Brand | Website (Local Language) | 選填 | 中文網站 URL | 中文前台網站連結 |
| 71 | Brands | Create Brand | Reservation Methods | 選填 | Storellet / Inline / Gulu 等 | 訂座入口，需與訂座平台integrate |
| 72 | Brands | Create Brand | External Links | 選填 | Key、Sort、Text、Type、URL、Icon | 前台 social / external link |
| 73 | Brands | Create Brand | Join Date | 必填 | 品牌開始日期 | 控制品牌有效期 / 顯示 |
| 74 | Brands | Create Brand | Expiry Date | 必填 | 品牌到期日 | 控制品牌有效期 |
| 75 | Brands | Create Brand | Customer Service Email | 建議必填 | CS email | 點擊後導向 email app |
| 76 | Brands | Create Brand | Max Point Earn Per Invoice | 必填 | 99999 / 按規則 | 每張單可賺最多積分 |
| 77 | Brands | Create Brand | Max. Time of Earn Point per Day | 必填 | 999 / 按規則 | 每日可賺積分次數上限 |
| 78 | Brands | Create Brand | Max. Time of Earn Point per Week | 必填 | 999 / 按規則 | 每週可賺積分次數上限 |
| 79 | Brands | Create Brand | Max. Time of Earn Point per Day For POS | 必填 | 999 / 按規則 | POS 每日賺分次數上限 |
| 80 | Brands | Create Brand | Max. Time of Earn Point per Week For POS | 必填 | 999 / 按規則 | POS 每週賺分次數上限 |
| 81 | Brands | Create Brand | QR Code Expired In Same Day | 選填 | Tick / Untick | 控制 QR code 是否為一日有效 |
| 82 | Brands | Create Brand | QR Code Expiry Day | 必填 | -1 default （7日） | QR code 到期日 |
| 83 | Brands | Create Brand | Background Colour 1 | 必填 | Brand color | App UI 色系 |
| 84 | Brands | Create Brand | Text Colour 1 | 必填 | Brand color | App UI 文字色 |
| 85 | Brands | Create Brand | Background Colour 2 | 必填 | Brand color | App UI 色系 |
| 86 | Brands | Create Brand | Text Colour 2 | 必填 | Brand color | App UI 文字色 |
| 87 | Brands | Create Brand | Background Colour 3 | 必填 | Brand color | App UI 色系 |
| 88 | Brands | Create Brand | Text Colour 3 | 必填 | Brand color | App UI 文字色 |
| 89 | Brands | Create Brand | By Passcode | 選填 | No | 是否用 passcode |
| 90 | Brands | Create Brand | Info URL (English) | 選填 | URL | 品牌資訊頁 |
| 91 | Brands | Create Brand | Info URL (Local Language) | 選填 | URL | 中文品牌資訊頁 |
| 92 | Brands | Create Brand | Short Description (English) | 選填 | 英文短描述 | 前台簡介 |
| 93 | Brands | Create Brand | Short Description (Local Language) | 選填 | 中文短描述 | 前台簡介 |
| 94 | Brands | Create Brand | Recommendation Dishes | 選填 | 推介菜式 | 顯示於 recommendation section |
| 95 | Brands | Create Brand | Message 1 / 2 / 3 | 選填 | 品牌介紹文字 | 顯示於 brand description section 和用作SEO Header |
| 96 | Brands | Create Brand | Close Transaction Message Above / Below QR | 選填 | / | POS / close transaction 顯示文案 |
| 97 | Brands | Create Brand | Coupon Code Display Type | 選填 | Member ID and Coupon ID | Coupon code 顯示邏輯 |
| 98 | Brands | Create Brand | Stamp Only | 選填 | No | 是否 stamp only brand |
| 99 | Brands | Create Brand | Highlighted Image | 選填 | 圖片，建議 1MB | 商店介紹圖片 |
| 100 | Brands | Create Brand | Highlighted Image Description | 選填 | 圖片描述 | 對應 highlighted image |
| 101 | Brands | Create Brand | Eshop Banner | 選填 | 建議 3.2:1 | eShop banner |
| 102 | Brands | Create Brand | Eshop Product ID | 選填 | Stripe / Product ID | 對應 eShop product |
| 103 | Brands | Create Brand | Show Point Or Stamp on App | 必填 | Yes | 控制App 顯示積分 / 印花 |
| 104 | Brands | Create Brand | Enable Brand Profile | Branded APP必填 | Tick | 啟用品牌profile，不跟Storellet profile |
| 105 | Brands | Create Brand | Require Same Email With Storellet Profile | 選填 | Tick | 要求 email 一致 |
| 106 | Brands | Create Brand | Show Redemption Page on App | 選填 | Yes | App 顯示兌換頁 |
| 107 | Brands | Create Brand | Promotion Message | 選填 | 推廣文案 | 前台推廣顯示 |
| 108 | Brands | Create Brand | Promoted | 選填 | Tick / Untick | 是否標記 promoted |
| 109 | Brands | Create Brand | Carousel | 選填 | YouTube / Image、Sort、URL | 品牌頁 carousel |
| 110 | Brands | Create Brand | Brand Promo Web URL | 系統產生 / 選填 | Auto URL | Merchant page URL |
| 111 | Brands | Branded App | Thumbnails | Branded APP必填 | 圖片 | Branded App 品牌圖 |
| 112 | Brands | Create Brand | Categories | 必填 | Category tags | Web Category tags；Branded APP Tag 顯示 |
| 113 | Brands | Create Brand | CusineTag | 必填 | Cusine Tag | Web Category tags |
| 114 | Brands | Create Brand | Lower Price | 必填 | 價格range （最低） | 價格range |
| 115 | Brands | Create Brand | Higher Price | 必填 | 價格range （最高） | 價格range |
| 116 | Brands | Create Brand | Is Show Bottom Bar | 選填 | Untick | App 是否顯示 bottom bar |
| 117 | Brands | Create Brand | Email | 選填 | CS / merchant email | 聯絡我們：聯絡email |
| 118 | Brands | Create Brand | Facebook | 選填 | Facebook URL | Brand social link |
| 119 | Brands | Create Brand | Instagram | 選填 | Instagram URL | Brand social link |
| 120 | Brands | Create Brand | URL | 選填 | URL | Brand website link |
| 121 | Brands | Create Brand | About Us | 選填 | About Us URL | About Us 連結 |
| 122 | Brands | Create Brand | How To Use | 選填 | How To Use URL | 教學連結 |
| 123 | Brands | Create Brand | Eshop URL | 選填 | Eshop URL | Eshop連結 |
| 124 | Brands | Create Brand | Enable Qonbay Integration | 選填 | Untick | / |
| 125 | Brands | Create Brand | Group Name | 選填 | Group Name | for grouping SOME brands within the same groupId |
| 126 | Brands | Create Brand | App Display Method | Branded APP必填 | Show on both | 控制brand是否在Storellet app出現 |
| 127 | Brands | Create Brand | Push Notification Method | Branded APP必填 | Push to both | push notification 是否push 到storellet和branded app |
| 128 | Brands | Create Brand | Push Notification To White Label App Ids Refer To Master Brand: | 選填 | Untick | / |
| 129 | Brands | Create Brand | Branded App App ID | Branded APP必填 | APP Config ID | 控制出現在iOS/AOS APP |
| 130 | Brands | Create Brand | Enable Shopline Integration | 選填 | Shopline eshop url＋Shopline API token | Shopline Integration |
| 131 | Brands | Create Brand | Inline Company Id | 選填 | Inline Company Id | Inline Integration |
| 132 | Brands | Create Brand | Status | 必填 | Active | 控制 brand 狀態 |
| 133 | Brands | Brands List | Sequence | 系統產生 | Auto | 顯示brand 排序 |
| 134 | Brands | Brands List | ID | 系統產生 | Auto | 顯示Brand ID |
| 135 | Brands | Brands List | Stamp Only | 系統產生 | Auto | 顯示是否stamp only |
| 136 | Brands | Brands List | Brand Name | 系統產生 | Auto | 顯示所屬Brand |
| 137 | Brands | Brands List | Group | 系統產生 | Auto | 顯示所屬Group |
| 138 | Brands | Brands List | Company | 系統產生 | Auto | 顯示所屬Company |
| 139 | Brands | Brands List | Join Date | 系統產生 | Auto | 顯示加入日期 |
| 140 | Brands | Brands List | Status | 系統產生 | Auto | 顯示Brand 狀態 |
| 141 | Shops | Create Shop | Shop Name (English) | 必填 | 英文分店名 | App 分店列表顯示 |
| 142 | Shops | Create Shop | Shop Name (Local Language) | 必填 | 中文分店名 | App 中文分店列表顯示 |
| 143 | Shops | Create Shop | Reference ID | 必填 | 與 merchant confirm / 由 001 開始 | POS 識別分店 ID |
| 144 | Shops | Create Shop | Brand | 必填 | 所屬 brand | 將分店歸屬到品牌 |
| 145 | Shops | Create Shop | Region (English) | 必填 | Hong Kong Island / Kowloon / New Territories | 分店區域 tab；WEB 區域 顯示 |
| 146 | Shops | Create Shop | Region (Local Language) | 必填 | 香港島 / 九龍 / 新界 | 中文分區 tab；WEB 區域 顯示 |
| 147 | Shops | Create Shop | District (English) | 必填 | 例如 Kwun Tong | 分店地區；WEB 地區顯示 |
| 148 | Shops | Create Shop | District (Local Language) | 必填 | 例如 觀塘 | 分店地區；WEB 地區顯示 |
| 149 | Shops | Create Shop | Geo Location | 必填 | Longitude - Latitude | Shop Map Pin位置顯示 |
| 150 | Shops | Create Shop | Address (English) | 必填 | 英文地址 | APP 分店資料顯示 |
| 151 | Shops | Create Shop | Address (Local Language) | 必填 | 中文地址 | APP 中文分店資料顯示 |
| 152 | Shops | Create Shop | Telephone | 必填 | 分店電話 | 分店資料顯示 |
| 153 | Shops | Create Shop | Fax | 選填 | Fax no. | 分店Fax no. |
| 154 | Shops | Create Shop | Opening Hours (English) | 必填 | 例如 10:00 - 22:00 | 分店營業時間 |
| 155 | Shops | Create Shop | Opening Hours (Local Language) | 必填 | 例如 10:00 - 22:00（星期一至日） | 中文營業時間 |
| 156 | Shops | Create Shop | Passcode | 選填 | 分店 passcode | 分店操作 / 驗證 |
| 157 | Shops | Create Shop | Passcode Remark Message | 選填 | passcode 備註 | 前台 / 內部提示 |
| 158 | Shops | Create Shop | Default Show | 選填 | Tick / Untick | 是否預設顯示 |
| 159 | Shops | Create Shop | Payment Methods | Branded APP必填 | Cash/Visa | 顯示分店付款方式 |
| 160 | Shops | Create Shop | Route English | 選填 | HTML/TXT 格式 | / |
| 161 | Shops | Create Shop | Route Traditional Chinese | 選填 | HTML/TXT 格式 | / |
| 162 | Shops | Create Shop | Route Simplified Chinese | 選填 | HTML/TXT 格式 | / |
| 163 | Shops | Create Shop | Status | 必填 | Active | 分店是否上架 / 有效 |
| 164 | Shops | Create Shop | Create Date | 必填 | Shop 加入日期 | Shop 加入日期 |
| 165 | Shops | Create Shop | Create Date | 系統產生 | Auto | 建立日期 |
| 166 | Shops | Create Shop | Last Update Date | 系統產生 | Auto | 更新日期 |
| 167 | Shops | Create Shop | Last Update By | 系統產生 | Auto | 更新人 |
| 168 | Shops | Shop List | Brand | 系統產生 | Auto | 顯示所屬Brand |
| 169 | Shops | Shop List | ID | 系統產生 | Auto | 顯示Shop ID |
| 170 | Shops | Shop List | Shop Name | 系統產生 | Auto | 顯示Shop name |
| 171 | Shops | Shop List | Address | 系統產生 | Auto | 顯示Shop address |
| 172 | Shops | Shop List | District | 系統產生 | Auto | 顯示Shop district |
| 173 | Shops | Shop List | Passcode | 系統產生 | Auto | 顯示Shop passcode |
| 174 | Shops | Shop List | Status | 系統產生 | Auto | 顯示Shop status |
| 175 | Featured Items | Create Featured Item | Campaign Name | 必填 | Campaign 名稱 | 未有開通 |
| 176 | Featured Items | Create Featured Item | Section | 必填 | 選擇出現 section | 未有開通 |
| 177 | Featured Items | Create Featured Item | Brand | 必填 | 所屬 brand | 未有開通 |
| 178 | Featured Items | Create Featured Item | Image (English) | 必填 | 英文圖片 | 未有開通 |
| 179 | Featured Items | Create Featured Item | Image (Local Language) | 必填 | 中文圖片 | 未有開通 |
| 180 | Featured Items | Create Featured Item | Start Date | 必填 | 顯示開始日 | 未有開通 |
| 181 | Featured Items | Create Featured Item | End Date | 必填 | 顯示結束日 | 未有開通 |
| 182 | Featured Items | Create Featured Item | Priority | 必填 | 數字，例如 -1 | 未有開通 |
