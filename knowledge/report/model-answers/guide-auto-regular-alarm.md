---
schema_version: 2
id: "GUIDE-REPORT-AUTO-REGULAR-ALARM"
title: "Auto Regular Alarm"
category: "Report"
module: "Auto Regular Alarm"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Auto Regular Alarm 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Auto Regular Alarm 點用？"
  - "點樣設定 Auto Regular Alarm？"
  - "Auto Regular Alarm 有咩用途同注意事項？"
  - "What is Auto Regular Alarm used for?"
keywords:
  - "Auto Regular Alarm"
  - "Report"
  - "Auto"
  - "Regular"
  - "Alarm"
  - "CMS"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "Auto Regular Alarm"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

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

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
