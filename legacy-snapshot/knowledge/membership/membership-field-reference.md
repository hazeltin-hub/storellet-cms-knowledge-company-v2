# Membership CMS Field Reference

資料來源：
最後確認：2026-07-24
有效資料：106 條

## 完整欄位

| Tab | Config | Field / UI Item | Status | Suggested / Default | Purpose / Front-end Impact | Notes |
|---|---|---|---|---|---|---|
| Membership | Member | Member No. | 查詢條件 | Enter either one search parameter | 用會員編號搜尋會員資料 | 四選一輸入即可：Member No. / Phone No. / Email / Facebook ID |
| Membership | Member | Phone No. | 查詢條件 | Enter either one search parameter | 用電話號碼搜尋會員資料 | 四選一輸入即可 |
| Membership | Member | Email | 查詢條件 | Enter either one search parameter | 用 Email 搜尋會員資料 | 四選一輸入即可 |
| Membership | Member | Facebook ID | 查詢條件 | Enter either one search parameter | 用 Facebook ID 搜尋會員資料 | 四選一輸入即可 |
| Membership | Member | Member No. | 顯示欄位 | System display | 顯示 Storellet 會員編號及 security code | 一般不需手動修改 |
| Membership | Member | Status | 可操作 / 顯示欄位 | Active / Inactive | 顯示會員目前狀態；可停用 membership | 涉及會員狀態，操作前需確認 |
| Membership | Member | Alias no | 顯示欄位 | System display | 顯示會員 alias no. | 一般不需手動修改 |
| Membership | Member | Security Code | 顯示欄位 | System display | 顯示安全碼 | 前台 QR / 會員識別有機會使用 |
| Membership | Member | Storellet Profile：Phone No. | 顯示 / 可編輯 | Member phone number | 顯示及更新會員電話 | 可編輯 |
| Membership | Member | Storellet Profile：Country Code | 顯示欄位 | System display | 顯示電話國家 / 地區碼 | 例：HK |
| Membership | Member | Storellet Profile：Email | 顯示 / 可編輯 | Member email | 顯示及更新會員 Email | 支援 Send verification email / Toggle User Email Verify Status |
| Membership | Member | Storellet Profile：Facebook ID | 顯示 / 可編輯 | Member Facebook ID | 顯示及更新會員 Facebook ID | 如會員無綁定可留空 |
| Membership | Member | Storellet Profile：Display Name | 顯示 / 可編輯 | Member display name | 前台 / CMS 顯示會員名稱 | User Profile popup 可編輯 |
| Membership | Member | Storellet Profile：First Name | 顯示欄位 | System / member profile | 顯示會員 First Name | 視乎會員資料是否有填 |
| Membership | Member | Storellet Profile：Last Name | 顯示欄位 | System / member profile | 顯示會員 Last Name | 視乎會員資料是否有填 |
| Membership | Member | Storellet Profile：Gender | 顯示 / 可編輯 | Male / Female / other available option | 顯示會員性別 | User Profile popup 可編輯 |
| Membership | Member | Storellet Profile：Birthday | 顯示 / 可編輯 | YYYY/MM/DD or YYYYMMDD | 顯示會員生日 | User Profile popup 標示 Birthday (YYYYMMDD) |
| Membership | Member | Storellet Profile：Join Date | 顯示欄位 | System display | 顯示會員加入日期 | 不建議手動修改 |
| Membership | Member | Storellet Profile：Receive News in Storellet
 | 顯示欄位 | System display | 推廣同意狀態 | 屬會員推廣同意紀錄 |
| Membership | Member | Storellet Profile：Receive News - Global | 顯示 / 操作欄位 | Checkbox | 顯示會員是否同意接收該 group 推廣訊息 | 當會員不同意推廣，對應 box 會被 ticked / 更新狀態需小心 |
| Membership | Member | Storellet Profile：Receive News - by Email | 顯示 / 操作欄位 | Checkbox | Email 推廣同意狀態 | 屬會員推廣同意紀錄 |
| Membership | Member | Storellet Profile：Receive News - by App Push | 顯示 / 操作欄位 | Checkbox | App Push 推廣同意狀態 | 屬會員推廣同意紀錄 |
| Membership | Member | Storellet Profile：Receive News - by Sms | 顯示 / 操作欄位 | Checkbox | SMS 推廣同意狀態 | 屬會員推廣同意紀錄 |
| Membership | Member | Storellet Profile：Receive News - by Communication Platform | 顯示 / 操作欄位 | Checkbox | Communication Platform 推廣同意狀態 | 屬會員推廣同意紀錄 |
| Membership | Member | Storellet Profile：Receive News - by Website | 顯示 / 操作欄位 | Checkbox | Website 推廣同意狀態 | 屬會員推廣同意紀錄 |
| Membership | Member | Membership Group | 操作欄位 | Select company group | 選擇會員加入的 company group | PPT 標示 select the company group of the membership |
| Membership | Member | Brands | 操作欄位 | Select brand | 顯示 / 篩選會員 brand profile | User Brand Profile will be shown if exists |
| Membership | Member | Group：Status | 顯示 / 操作欄位 | System display | 顯示會員於group的狀態；可停用 group membership | 涉及會員狀態，操作前需確認 |
| Membership | Member | Group：Bound Member No | 顯示欄位 | System display | 未開通 | 未開通 |
| Membership | Member | Group：Point(s) | 顯示 / 可操作 | System display / Point Adjustment | 顯示會員現有積分；可進入 point adjustment | 加減分操作需內部確認 |
| Membership | Member | Group：Delivey Coupon | 操作欄位 | Select coupon | 選擇要派發的 coupon | 需設定 coupon |
| Membership | Member | Group：Expiry Date | 顯示 / 可編輯 | Set expiry date if needed | 顯示 membership expiry date | 可按 Edit 修改；需跟會員條款一致 |
| Membership | Member | Group：Actual Accu. Sales Amount | 查詢 / 顯示欄位 | Select date range + Check | 根據 Brand ID / 日期區間顯示累積消費金額 | 可勾選 Use Net Amount When Calculating Accumulated Sales |
| Membership | Member | Group：Receive News - Global | 顯示 / 操作欄位 | Checkbox | 顯示會員是否同意接收該 group 推廣訊息 | 當會員不同意推廣，對應 box 會被 ticked / 更新狀態需小心 |
| Membership | Member | Group：Receive News - by Email | 顯示 / 操作欄位 | Checkbox | Email 推廣同意狀態 | 屬會員推廣同意紀錄 |
| Membership | Member | Group：Receive News - by App Push | 顯示 / 操作欄位 | Checkbox | App Push 推廣同意狀態 | 屬會員推廣同意紀錄 |
| Membership | Member | Group：Receive News - by Sms | 顯示 / 操作欄位 | Checkbox | SMS 推廣同意狀態 | 屬會員推廣同意紀錄 |
| Membership | Member | Group：Receive News - by Communication Platform | 顯示 / 操作欄位 | Checkbox | Communication Platform 推廣同意狀態 | 屬會員推廣同意紀錄 |
| Membership | Member | Group：Receive News - by Website | 顯示 / 操作欄位 | Checkbox | Website 推廣同意狀態 | 屬會員推廣同意紀錄 |
| Membership | Member | Discount card Table:Brand | 顯示欄位 | System display | 顯示 discount card 所屬 brand | 會員所有 discount cards 會被列出 |
| Membership | Member | Discount card Table:Membership Level | 顯示欄位 | System display | 顯示會員 membership level；前台亦會顯示 | 例如 Paid TIER 3 MEMBER |
| Membership | Member | Discount card Table:Discount Rate | 顯示欄位 | System display | 顯示該 card 提供折扣率 | 例如 10 代表 10% off |
| Membership | Member | Discount card Table:Expiry Date | 顯示 / 可編輯 | Edit expiry date if needed | 顯示 discount card 有效期 | 可按 Edit 修改 expiry date |
| Membership | Member | Discount card Table:Start Date | 顯示欄位 | System display | 顯示 discount card 開始日期 | 前台有效期依此顯示 |
| Membership | Member | Discount card Table:Status | 顯示欄位 | active / expired | 顯示 discount card 當前狀態 | 狀態會是 active / expired |
| Membership | Member | Discount card Table:Remark | 顯示欄位 | System display | 顯示 discount card 備註 | 如無備註可為空 |
| Membership | Member | Discount card Table:Detail | 操作按鈕 | Click Detail | 查看 / 修改 discount card 詳細設定 | 會切換到 Assets > Discount Card section |
| Membership | Member | Discount card Table:Expire | 操作按鈕 | Click Expire | 手動令 discount card 過期 | 操作前需確認 |
| Membership | Member | Discount card Table:Edit | 操作按鈕 | Click Edit | 修改 discount card expiry date | 會影響會員前台卡有效期 |
| Membership | Member | Coupon Summary Table:Brand | 顯示欄位 | System display | 顯示 coupon 所屬 brand | 會員所有 coupon summary 會列出 |
| Membership | Member | Coupon Summary Table:Coupon ID | 顯示欄位 | System display | 顯示 coupon ID | 用作 coupon config reference |
| Membership | Member | Coupon Summary Table:Coupon | 顯示欄位 | System display | 顯示 coupon name | 會員 wallet coupon summary |
| Membership | Member | Coupon Summary Table:Active Count | 顯示欄位 | System display | 顯示 active coupon 數量 | PPT 指出 current status quantity 會顯示 |
| Membership | Member | Coupon Summary Table:Used Count | 顯示欄位 | System display | 顯示已使用 coupon 數量 | 會員 coupon 狀態統計 |
| Membership | Member | Coupon Summary Table:Expired Count | 顯示欄位 | System display | 顯示已過期 coupon 數量 | 會員 coupon 狀態統計 |
| Membership | Member | Coupon Summary Table:Status | 顯示欄位 | active / expired | 顯示 coupon config 狀態 | 狀態會是 active / expired |
| Membership | Member | Coupon Summary Table:Detail | 操作按鈕 | Click Detail | 查看 coupon card details | 會切換到 Assets > Coupon section |
| Membership | Member | Coupon Card Table:Brand | 顯示欄位 | System display | 顯示 coupon card 所屬 brand | 會員所有 coupon cards 會列出 |
| Membership | Member | Coupon Card Table:Coupon | 顯示欄位 | System display | 顯示 coupon name / coupon ID | 會顯示於前台 coupon card |
| Membership | Member | Coupon Card Table:Start Date | 顯示欄位 | System display | 顯示 coupon card 開始有效日期 | 前台顯示優惠券有效日期 |
| Membership | Member | Coupon Card Table:Expiry Date | 顯示欄位 | System display | 顯示 coupon card 到期日 | 前台顯示優惠券有效日期 |
| Membership | Member | Coupon Card Table:Extended Expiry Date | 顯示欄位 | System display | 顯示延長後到期日 | 如未延長會顯示 / |
| Membership | Member | Coupon Card Table:Serial No. | 顯示欄位 | System display | 顯示 coupon 識別號碼 | PPT 指出為 coupon identification number |
| Membership | Member | Coupon Card Table:Status | 顯示欄位 | active / used / expired | 顯示 coupon card 當前狀態 | PPT 指出 active / expired；畫面亦有 used |
| Membership | Member | Coupon Card Table:Remark | 顯示欄位 | System display | 顯示 coupon card 備註 | 如無備註可為 --- |
| Membership | Member | Coupon Card Table:Detail | 操作按鈕 | Click Detail | 查看 / 修改 coupon card detail | 會切換到 Assets > Coupon section |
| Membership | Member | Coupon Card Table:Expire | 操作按鈕 | Click Expire | 手動令 coupon card 過期 | 操作前需確認 |
| Membership | Member | Coupon Card Table:Use | 操作按鈕 | Click Use | 手動標記 coupon 使用 | 操作前需確認，會影響會員 wallet |
| Membership | Member | Stamp Table:Brand | 顯示欄位 | System display | 顯示 stamp 所屬 brand | 會員所有 stamps 會列出 |
| Membership | Member | Stamp Table:Brand | 顯示欄位 | System display | 顯示 stamp record 建立日期 | 用於追蹤印花取得時間 |
| Membership | Member | Stamp Table:Brand | 顯示欄位 | System display | 顯示 stamp campaign / stamp name | 例如 Stamp Card |
| Membership | Member | Stamp Table:Brand | 顯示欄位 | normal / special | 顯示印花類型 | PPT 指出 type will be either normal or special |
| Membership | Member | Stamp Table:Brand | 顯示欄位 | Active / Expired | 顯示 stamp record 狀態 | PPT 指出 active / expired |
| Membership | Member | Stamp Table:Brand | 顯示欄位 | System display | 顯示相關 invoice details | 包括 invoice no., shop code, net amount, order type, payment method |
| Membership | Member | Stamp Table:Brand | 操作按鈕 | Click Show Summary | 查看 stamp summary | 不是資料欄位 |
| Membership | Member | Stamp Table:Brand | 操作按鈕 | Click Add Stamp | 手動新增 stamp | 操作前需確認活動及會員資格 |
| Membership | Member | Stamp Table:Brand | 操作按鈕 | Click Void | 取消 / 作廢 stamp record | 操作前需確認 |
| Membership | Member | Stamp Card Table:Brand | 顯示欄位 | System display | 顯示 stamp card 所屬 brand | 會員所有 stamp cards 會列出 |
| Membership | Member | Stamp Card Table:Create Date | 顯示欄位 | System display | 顯示 stamp card record 建立日期 | 用作追蹤兌換紀錄 |
| Membership | Member | Stamp Card Table:No. of Stamp used | 顯示欄位 | System display | 顯示會員兌換 coupon 所使用的 stamp 數量 | PPT 第 ① 點 |
| Membership | Member | Stamp Card Table:Stamp Card Table:Redeemed Coupon | 顯示欄位 | System display | 顯示會員已兌換 coupon 類型 | PPT 第 ② 點 |
| Membership | Member | Bingo Table:Brand | 顯示欄位 | System display | 顯示 Bingo 所屬 brand | 會員所有 Bingo 會列出 |
| Membership | Member | Bingo Table:Name | 顯示欄位 | System display | 顯示 Bingo name | 如無資料會顯示 No data available |
| Membership | Member | Bingo Table:Start Date | 顯示欄位 | System display | 顯示 Bingo start date | Bingo validity reference |
| Membership | Member | Bingo Table:Expiry Date | 顯示欄位 | System display | 顯示 Bingo expiry date | Bingo validity reference |
| Membership | Member | Bingo Table:Serial No. | 顯示欄位 | System display | 顯示 Bingo identification number | PPT 第 ② 點 |
| Membership | Member | Bingo Table:Status | 顯示欄位 | active / expired | 顯示 Bingo 當前狀態 | PPT 第 ③ 點 |
| Membership | Member | History Table:Brand | 顯示欄位 | System display | 顯示 record 所屬 brand | 會員詳細紀錄 summary table |
| Membership | Member | History Table:Create Date | 顯示欄位 | System display | 顯示 record 建立日期及時間 | PPT 第 ① 點 |
| Membership | Member | History Table:Transaction Time | 顯示欄位 | System display if transaction type | 顯示交易紀錄時間 | 只有 transaction type record 會有資料 |
| Membership | Member | History Table:Point Change | 顯示欄位 | System display | 顯示會員積分變動 | 例如 +8 / +200 / -20 |
| Membership | Member | History Table:Type | 顯示欄位 | coupon / coupon collect / coupon purchase / discount card / transaction / adjustment | 顯示 record 類型 | PPT 列明可見 record types |
| Membership | Member | History Table:Shop | 顯示欄位 | System display | 顯示相關 shop no. | 如無相關 shop 會顯示 --- |
| Membership | Member | History Table:Description | 顯示欄位 | System display | 顯示 record details | 例如 coupon details、payment reference、membership details、invoice details 等 |
| Membership | Verification Code | Phone No. | 查詢條件 | Enter phone no. | 搜尋該電話號碼對應 verification code | 會員註冊時驗證碼會發送到 mobile device |
| Membership | Verification Code | Email | 查詢條件 | Enter email | 用 Email 搜尋 verification code | 視乎系統有否以 Email 查詢 |
| Membership | Verification Code | Verification Code | 顯示欄位 | System display | 顯示對應電話 / Email 的 verification code | Result table 欄位 |
| Membership | Verification Code | Expiry Date | 顯示欄位 | System display | 顯示 verification code 到期日 | Result table 欄位 |
| Membership | Verification Code | Status | 顯示欄位 | System display | 顯示 verification code 狀態 | Result table 欄位 |
| Membership | Invoice | Complete Invoice No. | 查詢條件 / 顯示欄位 | Enter complete invoice no. if available | 搜尋 / 顯示完整 invoice no. | Invoice section 出現於 Membership menu |
| Membership | Invoice | Brand | 查詢條件 / 顯示欄位 | Select brand | 按 brand 搜尋 invoice / 顯示 invoice brand | 例：Storellet cafe |
| Membership | Invoice | Shop | 查詢條件 / 顯示欄位 | Enter / select shop | 按 shop 搜尋 invoice / 顯示 invoice shop | 例：(STRIPE) |
| Membership | Invoice | Transaction Date | 查詢條件 | Select date range | 按交易日期搜尋 invoice | 需輸入 start date / end date |
| Membership | Invoice | Purchase Time | 顯示欄位 | System display | 顯示購買時間 | Invoice result table 欄位 |
| Membership | Invoice | Info | 顯示欄位 | System display | 顯示 invoice details | 包含 Status、Invoice Amount、Net Amount、Order Type、Payment Method、Items、Discount、Coupons、Member No.、Used Promo Code |
| Membership | Invoice | Redeem | 顯示欄位 | System display | 顯示 redeem 時間 / 狀態 | Invoice result table 欄位 |
