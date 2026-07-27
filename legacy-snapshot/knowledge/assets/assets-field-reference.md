# Assets CMS Field Reference

資料來源：
最後確認：2026-07-24
有效資料：230 條

## 完整欄位

| Index | Section | Sub-section | Field / UI Item | Status | Suggested / Default | Purpose / Front-end Impact | Notes |
|---:|---|---|---|---|---|---|---|
| 1 | Assets | Points List | Points ID | 系統產生 | Auto | 顯示 point asset ID | 用作匯出 / 修改 reference |
| 2 | Assets | Points List | Group | 系統產生 | Auto | 顯示所屬 group | 可用 group filter |
| 3 | Assets | Points List | Point(s) | 系統產生 | Auto | 顯示 points value |  |
| 4 | Assets | Points List | Type | 系統產生 | Auto | 顯示 points type | 例如 Welcome Pack / Birthday Gift / Anniversary Gift / Push / Redeem Code |
| 5 | Assets | Points List | Start Date | 系統產生 | Auto | 顯示有效期開始日 | 用作 point item validity |
| 6 | Assets | Points List | End Date | 系統產生 | Auto | 顯示有效期完結日 | 用作 point item validity |
| 7 | Assets | Points List | White Label | 系統產生 | Auto | 顯示是否 White Label only | 按 app availability 判斷 |
| 8 | Assets | Points List | Status | 系統產生 | Auto | 顯示狀態 | Active / Inactive |
| 9 | Assets | Points List | Edit | 系統產生 | Auto | 操作按鈕 | 修改 points detail |
| 10 | Assets | Points List | Export | 系統產生 | Auto | 操作按鈕 | 匯出 points details JSON file |
| 11 | Assets | Create new Points | Import File | 選填 | Upload file if needed | 匯入 points config / image | 如無需匯入可留空 |
| 12 | Assets | Create new Points | Group | 必填 | Select Group | 指定 points 歸屬 group | 需選正確 merchant group |
| 13 | Assets | Create new Points | Point(s) | 必填 | Points value, e.g. 50 / 100 | 設定派發 points 數量 | 會員領取後會加到 wallet |
| 14 | Assets | Create new Points | Type | 必填 | Welcome Pack / Birthday Gift / Anniversary Gift / Push / Redeem Code | 決定 points 類型及顯示 section | 按活動用途選擇 |
| 15 | Assets | Create new Points | Start Date | 必填 | Campaign start date | 控制 point item 開始顯示 / 可領取時間 | 通常與 campaign start date 一致 |
| 16 | Assets | Create new Points | End Date | 必填 | Campaign end date / long-term date | 控制 point item 完結時間 | 需同 campaign validity 對齊 |
| 17 | Assets | Create new Points | Image | 必填 | Image file, recommended 1MB | 前台 App 顯示 points 圖片 | file size recommendation: 1MB |
| 18 | Assets | Create new Points | Available to White Label App Only | 選填 | Untick unless white label only | 限制只可於 Branded App 使用 | 按 app availability 決定 |
| 19 | Assets | Create new Points | Available to Storellet App Only | 選填 | Untick unless Storellet App only | 限制只可於 Storellet App 使用 | 按 app availability 決定 |
| 20 | Assets | Create new Points | Not Transferable | 選填 | Tick / Untick | 設定 points 是否可轉贈 | PPT 標示為 point transferable to other member or not |
| 21 | Assets | Create new Points | Status | 必填 | Active | 控制 points asset 是否有效 | 上線活動設 Active |
| 22 | Assets | Create new Points | Create Date | 必填 | Auto / CMS date | 建立紀錄 | 一般不用改 |
| 23 | Assets | Discount Cards List | Discount Card ID | 系統產生 | System display / Click action | 顯示 discount card ID | 用作 reference / export |
| 24 | Assets | Discount Cards List | Brand | 系統產生 | System display / Click action | 顯示所屬 brand | 可用 brand filter |
| 25 | Assets | Discount Cards List | Name | 系統產生 | System display / Click action | 顯示 card name | 例如 Basic / VIP / Tier card |
| 26 | Assets | Discount Cards List | Is Welcome Pack | 系統產生 | System display / Click action | 顯示是否 Welcome Pack | 所有 brand 至少需建立 1 個 Basic tier |
| 27 | Assets | Discount Cards List | Start Date | 系統產生 | System display / Click action | 顯示有效期開始日 | 控制 card validity |
| 28 | Assets | Discount Cards List | End Date | 系統產生 | System display / Click action | 顯示有效期完結日 | 控制 card validity |
| 29 | Assets | Discount Cards List | White Label | 系統產生 | System display / Click action | 顯示是否 White Label only | 按 app availability 判斷 |
| 30 | Assets | Discount Cards List | Status | 系統產生 | System display / Click action | 顯示狀態 | Active / Inactive |
| 31 | Assets | Discount Cards List | Edit | 系統產生 | System display / Click action | 操作按鈕 | 修改 discount card detail |
| 32 | Assets | Discount Cards List | Export | 系統產生 | System display / Click action | 操作按鈕 | 匯出 card details JSON file |
| 33 | Assets | Create Discount Cards | Import File | 選填 | Upload file if needed | 匯入 discount card config | 如無需匯入可留空 |
| 34 | Assets | Create Discount Cards | Brand | 必填 | Select Brand | 指定 card 所屬 brand | 每個 brand 至少要有 1 個 Basic tier / Welcome Pack |
| 35 | Assets | Create Discount Cards | DiscountCard Type | 必填 | Normal Tier | 指定 card / tier 類型 | 按 merchant tier structure 設定 |
| 36 | Assets | Create Discount Cards | Discount Level | 必填 | Basic=1, Silver=2, Gold=3, VIP=4 | 設定會員等級排序 | 需跟 Tier level 一致 |
| 37 | Assets | Create Discount Cards | Name (English) | 必填 | English tier/card name | 前台英文 card name | 例如 VIP Card |
| 38 | Assets | Create Discount Cards | Name (Local Language) | 必填 | Chinese/local tier/card name | 前台中文 card name | 例如 VIP 會員 |
| 39 | Assets | Create Discount Cards | Image (English) | 必填 | Card image, recommended 1MB | 前台英文 discount card 圖片 | PPT 註：seems not working；仍保留為圖像欄位 |
| 40 | Assets | Create Discount Cards | Image (Local Language) | 必填 | Card image, recommended 1MB | 前台中文 discount card 圖片 | 如中英文同圖可重用 |
| 41 | Assets | Create Discount Cards | Image 2 / 3 | 選填 | Leave blank unless special implementation | 額外 card image | 一般前台未必使用 |
| 42 | Assets | Create Discount Cards | Discount Rate | 必填 | e.g. 20 = 20% off | 設定 card 折扣率 | 需跟 merchant benefit 一致 |
| 43 | Assets | Create Discount Cards | Redemption Period | 必填 | Start date - End date | 控制 discount card 有效期 | valid period of discount card |
| 44 | Assets | Create Discount Cards | Redemption Point | 視乎需要 | Points required if redeemable | 設定用 points 兌換 card 所需分數 | 若非兌換型 tier 可留空 / default |
| 45 | Assets | Create Discount Cards | Terms & Conditions (English) | 建議必填 | HTML format | 前台 T&C section 顯示 | 需用 HTML format |
| 46 | Assets | Create Discount Cards | Terms & Conditions (Local Language) | 建議必填 | HTML format | 前台中文 T&C 顯示 | 需用 HTML format |
| 47 | Assets | Create Discount Cards | How To Use (English) | 建議必填 | HTML format | 前台使用說明 | PPT 指示會顯示於 front-end application |
| 48 | Assets | Create Discount Cards | How To Use (Local Language) | 建議必填 | HTML format | 前台中文使用說明 | 需用 HTML format |
| 49 | Assets | Create Discount Cards | Set As Welcome Pack | 必填 | Yes for Basic welcome card | 控制是否註冊後自動加入 wallet | Basic member card 建議 Yes |
| 50 | Assets | Create Discount Cards | Welcome Pack Period | 視乎需要 | Start date - End date | 控制 welcome pack 派發期間 | Set As Welcome Pack = Yes 時需設定 |
| 51 | Assets | Create Discount Cards | Upgrade From | 視乎 tier | Can't Upgrade by default | 指定可由哪張 card upgrade | 預設 Can't Upgrade |
| 52 | Assets | Create Discount Cards | Point For Upgrade | 視乎 tier | -1 if not applicable | 設定升級所需最低分數 | 不適用留 -1 |
| 53 | Assets | Create Discount Cards | Renew Type | 必填 | Basic level set as Auto | 設定 card renewal method | 按 tier renewal logic 設定 |
| 54 | Assets | Create Discount Cards | Expiry Date Pattern | 必填 | Basic: Current date + 1 year / closest next 1/4/7/10; Other tiers: Current date + 1 year | 控制 card 到期日 pattern | 需同 tier policy 一致 |
| 55 | Assets | Create Discount Cards | Coupon List | 選填 | Select coupons + quantity | 設定此 card 包含的 coupon(s) | 需輸入每張 coupon quantity |
| 56 | Assets | Create Discount Cards | Available to White Label App Only | 視乎需要 | Tick / Untick | 限制 White Label App 使用 | 按 app availability 決定 |
| 57 | Assets | Create Discount Cards | Available to Storellet App Only | 視乎需要 | Tick / Untick | 限制 Storellet App 使用 | 按 app availability 決定 |
| 58 | Assets | Create Discount Cards | Point Multiply Ratio | 必填 | 1.0 / merchant ratio | 會員持卡獲得 points 倍率 | 需同會員等級規則一致 |
| 59 | Assets | Create Discount Cards | Stamp Multiply Ratio | 必填 | 1.0 / merchant ratio | 會員持卡獲得 stamp 倍率 | actual stamp x rate = wallet stamp |
| 60 | Assets | Create Discount Cards | Not Transferable | 視乎需要 | Tick / Untick | 設定 card 是否可轉贈 | PPT 標示為 transferable to other member or not |
| 61 | Assets | Create Discount Cards | Share With Brands | 視乎 master brand | Select brands if needed | 跨品牌分享 card | Master brand / multi-brand 才用 |
| 62 | Assets | Create Discount Cards | Hidden | 視乎需要 | Untick by default | 控制是否隱藏 card | 需按前台展示需要 |
| 63 | Assets | Create Discount Cards | Event Tracking Submit Option | 視乎需要 | Default | event tracking submit 設定 | 如無特別需求用 default |
| 64 | Assets | Create Discount Cards | Status | 必填 | Active | 控制 card 是否有效 | 上線用 Active |
| 65 | Assets | Create Discount Cards | Colour Code | 視乎設計 | Hex / selected color | 前台 card 色系 | 按 UI 設計填 |
| 66 | Assets | Create Discount Cards | Highlighted Colour Code | 視乎設計 | Hex / selected color | 前台 highlight 色系 | 按 UI 設計填 |
| 67 | Assets | Create Discount Cards | Shopline Membership Tier ID | 視乎 Shopline | Enter 'null' for Shopline Basic Tier | Shopline tier mapping | 有 Shopline integration 先需要 |
| 68 | Assets | Bingo List | Bingo ID | 顯示 / 操作欄位 | System display / Click action | 顯示 Bingo ID | 用作 reference / export |
| 69 | Assets | Bingo List | Brand | 顯示 / 操作欄位 | System display / Click action | 顯示所屬 brand | 可用 brand filter |
| 70 | Assets | Bingo List | Name | 顯示 / 操作欄位 | System display / Click action | 顯示 Bingo name | CMS list 顯示 |
| 71 | Assets | Bingo List | Type | 顯示 / 操作欄位 | System display / Click action | 顯示 Bingo type | 例如 Day Part |
| 72 | Assets | Bingo List | Start Date | 顯示 / 操作欄位 | System display / Click action | 顯示有效期開始日 | validity |
| 73 | Assets | Bingo List | End Date | 顯示 / 操作欄位 | System display / Click action | 顯示有效期完結日 | validity |
| 74 | Assets | Bingo List | White Label | 顯示 / 操作欄位 | System display / Click action | 顯示是否 White Label only | 按 app availability 判斷 |
| 75 | Assets | Bingo List | Status | 顯示 / 操作欄位 | System display / Click action | 顯示狀態 | Active / Inactive |
| 76 | Assets | Bingo List | Edit | 顯示 / 操作欄位 | System display / Click action | 操作按鈕 | 修改 bingo detail |
| 77 | Assets | Bingo List | Export | 顯示 / 操作欄位 | System display / Click action | 操作按鈕 | 匯出 bingo details JSON file |
| 78 | Assets | Create new Bingo | Import File | 選填 | Upload file if needed | 匯入 Bingo config | PPT 未確認 file size restriction |
| 79 | Assets | Create new Bingo | Brand | 必填 | Select Brand | 指定 Bingo 所屬品牌 | 需選正確 brand |
| 80 | Assets | Create new Bingo | Name (English) | 必填 | English campaign name | 前台 / CMS 顯示 Bingo campaign name | PPT 指示輸入英文名稱 |
| 81 | Assets | Create new Bingo | Name (Local Language) | 必填 | Local campaign name | 前台中文 / 本地語言顯示 | PPT 指示輸入 local language name |
| 82 | Assets | Create new Bingo | Image | 建議必填 | Bingo card image, recommended 1MB | 前台顯示 Bingo card image | PPT 標示 file size recommendation: 1MB |
| 83 | Assets | Create new Bingo | Description (English) | 建議必填 | English description | 前台 Bingo description | 活動說明 |
| 84 | Assets | Create new Bingo | Description (Local Language) | 建議必填 | Local description | 前台中文 Bingo description | 活動說明 |
| 85 | Assets | Create new Bingo | Terms & Conditions (English) | 建議必填 | HTML format | 前台 T&C 顯示 | 需用 HTML format |
| 86 | Assets | Create new Bingo | Terms & Conditions (Local Language) | 建議必填 | HTML format | 前台中文 T&C 顯示 | 需用 HTML format |
| 87 | Assets | Create new Bingo | How To Use (English) | 建議必填 | HTML format | 前台 How to Use 顯示 | 需用 HTML format |
| 88 | Assets | Create new Bingo | How To Use (Local Language) | 建議必填 | HTML format | 前台中文使用說明 | 需用 HTML format |
| 89 | Assets | Create new Bingo | Day Period 1 / 2 / 3 | 視乎活動 | Tick weekdays | 設定 Bingo 有效星期 | Tick box indicate validity of Bingo |
| 90 | Assets | Create new Bingo | Type | 必填 | Day Part / selected type | 設定 Bingo type | 配合 daypart/time slot 設定 |
| 91 | Assets | Create new Bingo | Effective Period | 必填 | Start date - End date | Bingo 有效日期 | PPT 標示 enter the date to indicate validity |
| 92 | Assets | Create new Bingo | Daypart Time Slot 1 / 2 / 3 | 視乎活動 | Start time - End time | 設定有效時段 | 例如 09:00 - 13:00 |
| 93 | Assets | Create new Bingo | Daypart Slot Text EN/Local | 視乎活動 | Text form, e.g. 09:00-13:00 | 前台顯示時段文字 | PPT 指示 time slot in text form |
| 94 | Assets | Create new Bingo | Reward 1-8 | 必填 | Select reward for each pattern | 為對應 Bingo pattern 設定獎賞 | PPT 指示 choose reward for corresponding pattern |
| 95 | Assets | Create new Bingo | White Label Only | 視乎需要 | Tick / Untick | 限制 White Label App 使用 | 按 app availability 決定 |
| 96 | Assets | Create new Bingo | Not Transferable | 視乎需要 | Tick / Untick | 設定 Bingo 是否可轉贈 | PPT 標示 transferable to other member or not |
| 97 | Assets | Create new Bingo | Status | 必填 | Active | 控制 Bingo 是否有效 | 上線用 Active |
| 98 | Assets | Create new Bingo | Create Date | 系統欄位 | Auto / CMS date | 建立紀錄 | 一般不用改 |
| 99 | Assets | List all Stamps | Stamp ID | 顯示 / 操作欄位 | System display / Click action | 顯示 Stamp ID | 用作 reference / export |
| 100 | Assets | List all Stamps | Brand | 顯示 / 操作欄位 | System display / Click action | 顯示所屬 brand | 可用 brand filter |
| 101 | Assets | List all Stamps | Name | 顯示 / 操作欄位 | System display / Click action | 顯示 stamp name | CMS list 顯示 |
| 102 | Assets | List all Stamps | Start Date | 顯示 / 操作欄位 | System display / Click action | 顯示有效期開始日 | validity |
| 103 | Assets | List all Stamps | End Date | 顯示 / 操作欄位 | System display / Click action | 顯示有效期完結日 | validity |
| 104 | Assets | List all Stamps | Status | 顯示 / 操作欄位 | System display / Click action | 顯示狀態 | Active / Inactive |
| 105 | Assets | List all Stamps | Edit | 顯示 / 操作欄位 | System display / Click action | 操作按鈕 | 修改 stamp detail |
| 106 | Assets | List all Stamps | Export | 顯示 / 操作欄位 | System display / Click action | 操作按鈕 | 匯出 stamp details JSON file |
| 107 | Assets | Create new Stamp | Brand | 必填 | Select Brand | 指定 stamp 所屬 brand | 需選正確 brand |
| 108 | Assets | Create new Stamp | Required Discount Card Level | 視乎活動 | None / Select member level(s) | 限制可收取 stamp 的會員級別 | None 或選擇指定 discount card / member level |
| 109 | Assets | Create new Stamp | Name (English) | 必填 | English stamp name | 前台 / CMS stamp name | 例如 Stamp Card |
| 110 | Assets | Create new Stamp | Name (Local Language) | 必填 | Local stamp name | 前台中文 stamp name | 可與英文同名 |
| 111 | Assets | Create new Stamp | Description (English) | 建議必填 | English description | 前台 stamp descriptions | 活動說明 |
| 112 | Assets | Create new Stamp | Description (Local Language) | 建議必填 | Local description | 前台中文 stamp descriptions | 活動說明 |
| 113 | Assets | Create new Stamp | Terms & Conditions (English) | 建議必填 | HTML format | 前台 T&C 顯示 | 需用 HTML format |
| 114 | Assets | Create new Stamp | Terms & Conditions (Local Language) | 建議必填 | HTML format | 前台中文 T&C 顯示 | 需用 HTML format |
| 115 | Assets | Create new Stamp | Image (English) | 建議必填 | Stamp card image | 前台 stamp card 圖片 | PPT 未確認 stamp card file size restriction |
| 116 | Assets | Create new Stamp | Image (Local Language) | 建議必填 | Stamp card image | 前台中文 stamp card 圖片 | 如同圖可重用 |
| 117 | Assets | Create new Stamp | Campaign Period | 必填 | Start date - End date | 控制 stamp campaign validity | PPT 文字誤寫 bingo；此處為 stamp validity |
| 118 | Assets | Create new Stamp | Normal Stamp Image | 必填 | Image file, recommended 1MB, 1:1 | 普通 stamp 圖片 | 前台 stamp 顯示 |
| 119 | Assets | Create new Stamp | Welcome Pack | 視乎活動 | 0 / quantity | 控制 welcome pack stamp 數量 | 有迎新印花先填 |
| 120 | Assets | Create new Stamp | Special Stamp | 視乎活動 | Tick if applicable | 是否啟用 special stamp | 有特殊印花機率活動先 tick |
| 121 | Assets | Create new Stamp | Special Stamp Image | 視乎活動 | Image file, recommended 1MB, 1:1 | special stamp 圖片 | Special Stamp 啟用時需要 |
| 122 | Assets | Create new Stamp | Special Stamp Probability | 視乎活動 | Select probability | 控制 special stamp 出現機率 | 例如 5% |
| 123 | Assets | Create new Stamp | Special Stamp Daily Limit | 視乎活動 | Upper limit per day | 設定 special stamp 每日上限 | 防止過量派發 |
| 124 | Assets | Create new Stamp | Type | 必填 | By Transaction Amount / selected criteria | 選擇派發 stamp 條件 | PPT 指示 choose stamp giving criteria |
| 125 | Assets | Create new Stamp | Transaction Amount | 視乎 Type | Default amount / custom amount | 按交易金額派 stamp | 可 Add Custom Transaction Amount |
| 126 | Assets | Create new Stamp | Total Space | 必填 | Max stamp quantity | 會員 wallet 內 stamp 最大數量 | 控制 stamp card 空間 |
| 127 | Assets | Create new Stamp | Gift | 必填 / 視乎 redeem | Select gift + stamp quantity | 設定印花換領獎賞及所需 stamp 數 | 每個 gift 要輸入對應 stamp qty |
| 128 | Assets | Create new Stamp | Has Week Day And Time Criteria | 視乎活動 | Tick / Untick | 限制只於指定日期 / 時段使用 | Merchant 有時段限制先 tick |
| 129 | Assets | Create new Stamp | Auto Redeem | 視乎活動 | Tick / Untick | 控制是否自動兌換 | 需同 merchant redeem flow 一致 |
| 130 | Assets | Create new Stamp | Transferable | 視乎活動 | Tick / Untick | 設定 stamp 是否可轉贈 | PPT 文字誤寫 bingo；此處指 stamp |
| 131 | Assets | Create new Stamp | Status | 必填 | Active | 控制 stamp campaign 是否有效 | 上線用 Active |
| 132 | Assets | Coupons List | Coupon ID | 顯示 / 操作欄位 | System display / Click action | 顯示 Coupon ID | 用作 reference / export |
| 133 | Assets | Coupons List | Brand | 顯示 / 操作欄位 | System display / Click action | 顯示所屬 brand | 可用 brand filter |
| 134 | Assets | Coupons List | Name | 顯示 / 操作欄位 | System display / Click action | 顯示 coupon name | CMS list 顯示 |
| 135 | Assets | Coupons List | Type | 顯示 / 操作欄位 | System display / Click action | 顯示 coupon type | Freebie / Item Discount / Receipt Discount |
| 136 | Assets | Coupons List | Delivery Type | 顯示 / 操作欄位 | System display / Click action | 顯示派發方式 | Push / Purchase / Redeem / Welcome Pack 等 |
| 137 | Assets | Coupons List | Start Date | 顯示 / 操作欄位 | System display / Click action | 顯示有效期開始日 | validity |
| 138 | Assets | Coupons List | End Date | 顯示 / 操作欄位 | System display / Click action | 顯示有效期完結日 | validity |
| 139 | Assets | Coupons List | White Label | 顯示 / 操作欄位 | System display / Click action | 顯示是否 White Label only | 按 app availability 判斷 |
| 140 | Assets | Coupons List | Available to Storellet App Only | 顯示 / 操作欄位 | System display / Click action | 顯示 App availability | 限制 Storellet App 使用 |
| 141 | Assets | Coupons List | Status | 顯示 / 操作欄位 | System display / Click action | 顯示狀態 | Active / Inactive |
| 142 | Assets | Coupons List | Edit | 顯示 / 操作欄位 | System display / Click action | 操作按鈕 | 修改 coupon detail |
| 143 | Assets | Coupons List | Export | 顯示 / 操作欄位 | System display / Click action | 操作按鈕 | 匯出 coupon details JSON / Unix file |
| 144 | Assets | Create Coupon | Import File | 選填 | Upload file if needed | 匯入 coupon config | PPT 未確認 file size restriction |
| 145 | Assets | Create Coupon | Coupon ID | 系統欄位 | Auto / existing ID | Coupon config reference | 一般不用改 |
| 146 | Assets | Create Coupon | Brand | 必填 | Select Brand | 指定 coupon 所屬 brand | 需選正確 brand |
| 147 | Assets | Create Coupon | Required Discount Card Level | 視乎活動 | None / Select member level(s) | 限制可領取 coupon 的會員級別 | None 或選擇 discount card / member level |
| 148 | Assets | Create Coupon | Type | 必填 | Freebie / Item Discount / Receipt Discount | 設定 coupon 類型 | 需參考 POS preferences |
| 149 | Assets | Create Coupon | Item Code | 視乎 Type/POS | POS item code; can be multiple | 同步 POS items | POS 提供，Item Discount 常用 |
| 150 | Assets | Create Coupon | Item Discount Value | 視乎 POS | Value + $ / % | 設定 item discount value | 需參考 POS preferences |
| 151 | Assets | Create Coupon | Delivery Type | 必填 | Welcome Pack / Birthday Gift / Push / Redeem | 控制 coupon 派發方式 | 未確認前建議 set Push，避免前台提前顯示 |
| 152 | Assets | Create Coupon | Name (English) | 必填 | English coupon name | 前台 coupon name | 例如 $10 Cash Coupon |
| 153 | Assets | Create Coupon | Name (Local Language) | 必填 | Local coupon name | 前台中文 coupon name | 例如 $10 現金券 |
| 154 | Assets | Create Coupon | Is CouponLeaflet | 視乎需要 | Tick / Untick | 標記 leaflet coupon | 按活動用途決定 |
| 155 | Assets | Create Coupon | Image (English) | 建議必填 | English coupon image | 前台英文 coupon image | App / website 顯示 |
| 156 | Assets | Create Coupon | Image (Local Language) | 建議必填 | Local coupon image | 前台中文 coupon image | App / website 顯示 |
| 157 | Assets | Create Coupon | Image 2 / 3 | 選填 | Leave blank unless special implementation | 額外 coupon images | 一般前台會 ignore，除非有特殊 implementation |
| 158 | Assets | Create Coupon | Description (English) | 選填 | English description | 前台 coupon description | 可按 coupon detail 填寫 |
| 159 | Assets | Create Coupon | Description (Local Language) | 選填 | Local description | 前台中文 coupon description | 可按 coupon detail 填寫 |
| 160 | Assets | Create Coupon | Terms & Conditions (English) | 建議必填 | HTML format | 前台 T&C 顯示 | 需用 HTML format |
| 161 | Assets | Create Coupon | Terms & Conditions (Local Language) | 建議必填 | HTML format | 前台中文 T&C 顯示 | 需用 HTML format |
| 162 | Assets | Create Coupon | How To Use (English) | 建議必填 | HTML format | 前台 How to Use 顯示 | 需用 HTML format |
| 163 | Assets | Create Coupon | How To Use (Local Language) | 建議必填 | HTML format | 前台中文使用說明 | 需用 HTML format |
| 164 | Assets | Create Coupon | External URL Wordings | 選填 | Button / link title | coupon 內外部連結顯示文字 | 最多可按不同語言填寫 |
| 165 | Assets | Create Coupon | External URL | 選填 | URL | 點擊 coupon 後導向外部網頁 | 取決於前台是否支援 |
| 166 | Assets | Create Coupon | Coupon Extendable | 必填 | No by default | 控制 coupon 是否可延長 | PPT 指示 leave default to No |
| 167 | Assets | Create Coupon | Effective Period | 必填 | Start date - End date | 控制 coupon overall validity | 需同 campaign period 對齊 |
| 168 | Assets | Create Coupon | Expiry Type | 必填 | By exact date / By effective day | 控制會員收到 coupon 後的到期計算方式 | 可用 exact date 或 received date + effective days |
| 169 | Assets | Create Coupon | Effective Day | 視乎 Expiry Type | No. of days | 收到 coupon 後有效天數 | Expiry Type = By Effective Day 時填 |
| 170 | Assets | Create Coupon | Redemption Point | 視乎 redeem | Points required | 設定用 points 兌換所需分數 | 例如 10 points |
| 171 | Assets | Create Coupon | Quantity | 視乎活動 | 0 / quantity | 設定總數 / 派發數量 | 需確認 quota logic |
| 172 | Assets | Create Coupon | Entitlement | 視乎活動 | Number | 設定每位會員 entitlement | 需按活動規則 |
| 173 | Assets | Create Coupon | Coupon / Discount Card List | 選填 | Select coupons/cards + quantity | 設定 coupon 內包含的 coupon / discount card | package / bundle 類 coupon 先用 |
| 174 | Assets | Create Coupon | Not Transferable | 視乎活動 | Tick / Untick | 設定 coupon 是否可轉贈 | PPT 標示 transferable to other member or not |
| 175 | Assets | Create Coupon | Checked as always field | 必填 | Checked as always | PPT 指示必須 always checked | 實際欄位名需以 CMS 畫面為準 |
| 176 | Assets | Create Coupon | Frontend dependent function | 視乎前台 | Unchecked by default | 功能可用性取決於 front-end app | PPT 指示 unchecked by default |
| 177 | Assets | Coupon Packages List | Coupon Package ID | 顯示 / 操作欄位 | System display / Click action | 顯示 package ID | 用作 reference / export |
| 178 | Assets | Coupon Packages List | Coupon Package Name | 顯示 / 操作欄位 | System display / Click action | 顯示 package name | CMS list 顯示 |
| 179 | Assets | Coupon Packages List | Start Date | 顯示 / 操作欄位 | System display / Click action | 顯示有效期開始日 | validity |
| 180 | Assets | Coupon Packages List | End Date | 顯示 / 操作欄位 | System display / Click action | 顯示有效期完結日 | validity |
| 181 | Assets | Coupon Packages List | Status | 顯示 / 操作欄位 | System display / Click action | 顯示狀態 | Active / Inactive |
| 182 | Assets | Coupon Packages List | Edit | 顯示 / 操作欄位 | System display / Click action | 操作按鈕 | 修改 package detail |
| 183 | Assets | Coupon Packages List | Export | 顯示 / 操作欄位 | System display / Click action | 操作按鈕 | 匯出 package details JSON / Unix file |
| 184 | Assets | Create Coupon Package | Import File | 選填 | Upload file if needed | 匯入 coupon package config | PPT 未確認 file size restriction |
| 185 | Assets | Create Coupon Package | Brand | 必填 | Select Brand | 指定 package 所屬 brand | 需選正確 brand |
| 186 | Assets | Create Coupon Package | Coupon / Discount Card List | 必填 | Tick included coupons/cards + quantity | 設定 package 包含的 coupons / discount cards | 需輸入每項 quantity |
| 187 | Assets | Create Coupon Package | Delivery Type | 必填 | Select delivery type | 控制 package 派發方式 | 按 campaign use case 設定 |
| 188 | Assets | Create Coupon Package | Name (English) | 必填 | English package name | 前台 package name | CMS / App 顯示 |
| 189 | Assets | Create Coupon Package | Name (Local Language) | 必填 | Local package name | 前台中文 package name | CMS / App 顯示 |
| 190 | Assets | Create Coupon Package | Image | 建議必填 | Package image, recommended 1MB | 前台 package 圖片 | PPT 標示 file size recommendation: 1MB |
| 191 | Assets | Create Coupon Package | Description | 建議必填 | Package descriptions | 前台 package description | 活動說明 |
| 192 | Assets | Create Coupon Package | Terms & Conditions | 建議必填 | HTML format | 前台 T&C 顯示 | 需用 HTML format |
| 193 | Assets | Create Coupon Package | How To Use | 建議必填 | HTML format | 前台使用說明 | 需用 HTML format |
| 194 | Assets | Create Coupon Package | Effective Period | 必填 | Start date - End date | 控制 package 有效期 | PPT 指示 enter date to indicate validity |
| 195 | Assets | Create Coupon Package | Not Transferable | 視乎活動 | Tick / Untick | 設定 package 是否可轉贈 | PPT 標示 transferable to other member or not |
| 196 | Assets | Create Coupon Package | Status | 必填 | Active | 控制 package 是否有效 | 上線用 Active |
| 197 | Assets | Coupon Trigger Rules List | Type | 顯示 / 操作欄位 | System display / Click action | 顯示 trigger rule type | CMS list 顯示 |
| 198 | Assets | Coupon Trigger Rules List | Start Date | 顯示 / 操作欄位 | System display / Click action | 顯示有效期開始日 | validity |
| 199 | Assets | Coupon Trigger Rules List | End Date | 顯示 / 操作欄位 | System display / Click action | 顯示有效期完結日 | validity |
| 200 | Assets | Coupon Trigger Rules List | Status | 顯示 / 操作欄位 | System display / Click action | 顯示狀態 | Active / Inactive |
| 201 | Assets | Coupon Trigger Rules List | Edit | 顯示 / 操作欄位 | System display / Click action | 操作按鈕 | 修改 trigger rule detail |
| 202 | Assets | Create Coupon Trigger Rule | Brand | 必填 | Select Brand | 指定 trigger rule 所屬 brand | 需選正確 brand |
| 203 | Assets | Create Coupon Trigger Rule | Required Discount Card Level | 視乎活動 | None / Select member level(s) | 限制可收到 coupon 的會員級別 | None 或選擇 discount card / member level |
| 204 | Assets | Create Coupon Trigger Rule | Type | 必填 | Select trigger rule type | 設定 trigger rule 類型 | PPT 指示 select trigger rule type |
| 205 | Assets | Create Coupon Trigger Rule | Day of Month | 視乎 Type | 1 / 15 / selected day | 設定每月派發日期 | 例如 monthly coupon 於每月 1 或 15 號派發 |
| 206 | Assets | Create Coupon Trigger Rule | Effective Period | 必填 | Start date - End date | 控制 trigger rule 有效期 | PPT 指示 enter date to indicate validity |
| 207 | Assets | Create Coupon Trigger Rule | Coupon List | 必填 | Select coupon(s) + quantity | 設定 rule 觸發後派發的 coupon(s) | 需輸入 quantity |
| 208 | Assets | Create Coupon Trigger Rule | Status | 必填 | Active | 控制 trigger rule 是否有效 | 上線用 Active |
| 209 | Assets | Surveys List | Survey ID | 顯示 / 操作欄位 | System display / Click action | 顯示 survey ID | 用作 reference / export |
| 210 | Assets | Surveys List | Brand | 顯示 / 操作欄位 | System display / Click action | 顯示所屬 brand | 可用 brand filter |
| 211 | Assets | Surveys List | Name | 顯示 / 操作欄位 | System display / Click action | 顯示 survey name | CMS list 顯示 |
| 212 | Assets | Surveys List | Start Date | 顯示 / 操作欄位 | System display / Click action | 顯示有效期開始日 | validity |
| 213 | Assets | Surveys List | End Date | 顯示 / 操作欄位 | System display / Click action | 顯示有效期完結日 | validity |
| 214 | Assets | Surveys List | Status | 顯示 / 操作欄位 | System display / Click action | 顯示狀態 | Active / Inactive |
| 215 | Assets | Surveys List | Edit | 顯示 / 操作欄位 | System display / Click action | 操作按鈕 | 修改 survey detail |
| 216 | Assets | Surveys List | Export | 顯示 / 操作欄位 | System display / Click action | 操作按鈕 | 匯出 survey details JSON file |
| 217 | Assets | Create Survey | Import File | 選填 | Upload file if needed | 匯入 survey config | 如無需匯入可留空 |
| 218 | Assets | Create Survey | Brand | 必填 | Select Brand | 指定 survey 所屬 brand | 需選正確 brand |
| 219 | Assets | Create Survey | Name (English) | 必填 | English survey name | 前台 / CMS survey name | 活動名稱 |
| 220 | Assets | Create Survey | Name (Local Language) | 必填 | Local survey name | 前台中文 survey name | 活動名稱 |
| 221 | Assets | Create Survey | Description (English) | 建議必填 | English description | 前台 survey description | 活動說明 |
| 222 | Assets | Create Survey | Description (Local Language) | 建議必填 | Local description | 前台中文 survey description | 活動說明 |
| 223 | Assets | Create Survey | Terms & Conditions (English) | 建議必填 | HTML format | 前台 T&C 顯示 | 需用 HTML format |
| 224 | Assets | Create Survey | Terms & Conditions (Local Language) | 建議必填 | HTML format | 前台中文 T&C 顯示 | 需用 HTML format |
| 225 | Assets | Create Survey | How To Use (English) | 建議必填 | HTML format | 前台使用說明 | 需用 HTML format |
| 226 | Assets | Create Survey | How To Use (Local Language) | 建議必填 | HTML format | 前台中文使用說明 | 需用 HTML format |
| 227 | Assets | Create Survey | Questions / Answer Options | 視乎 survey | Add questions and options | 設定 survey 問題及答案 | 需按 survey design 填寫 |
| 228 | Assets | Create Survey | Effective Period | 必填 | Start date - End date | 控制 survey 有效期 | 需同 campaign period 對齊 |
| 229 | Assets | Create Survey | Reward / Coupon | 視乎活動 | Select reward if applicable | 完成 survey 後派發獎賞 | 需確認 campaign reward logic |
| 230 | Assets | Create Survey | Status | 必填 | Active | 控制 survey 是否有效 | 上線用 Active |
