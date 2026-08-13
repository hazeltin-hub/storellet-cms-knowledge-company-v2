---
schema_version: 2
id: "CMS-MEMBER-MIGRATION-TOOL-V1"
title: "CMS 會員遷移工具 v1 操作指南"
category: "Membership"
module: "Member Migration"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "CMS 會員遷移工具點樣用？"
alternatives:
  - "會員 Migration 工具教學"
  - "點樣用 CSV 批量導入會員？"
  - "CMS Membership Migration 有咩關卡？"
  - "Member Migration permission 喺邊度開？"
keywords:
  - "Member Migration"
  - "會員遷移工具"
  - "Migration Task"
  - "CSV"
  - "dry run"
  - "multi-gate"
  - "conflict"
  - "result report"
  - "Member Migration permission"
source_title: "會員 Migration 工具使用手冊 v1"
source_path: "private HTML manual — not committed"
source_anchor: "G0–G6"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### 入口及權限

- 位置：**CMS → Membership → Migration**。
- CMS 帳戶必須獲授權 **Member Migration** permission；所有帳戶預設都冇，包括原有 admin。
- 見唔到選單時，由管理員到 **Admin 管理 → 編輯帳戶 → Membership → Member Migration** 開權限，然後重新登入。

### 完整流程

1. **G0 格式檢查**：上傳 CSV；任何格式錯誤會整份退回並產生 Excel 錯誤報告，唔會部分接受。
2. **G1 開 Task**：CSV 全部通過驗證先建立 Migration Task；同一品牌同時間只可以有一個進行中 task。
3. **G2 決策表格**：由 PO 回答現有會員、0 分會員、積分上限、到期政策、重複 email、consent 等政策問題。
4. **G3 Dry Run**：系統逐行模擬，產生前後對照，**唔會改真實資料**。
5. **G4 處理問題行**：逐行 Bypass 或 Override；全部 conflict 清除後先可以繼續。
6. **G5 Re-check**：執行前重新核對，防止 dry run 後有會員剛好用相同電話／email 註冊。
7. **G5.5 最後確認**：確認 Braze、迎新禮、email、push、discount card、執行時間，並親手輸入預計執行行數。
8. **G6 執行及 Report**：系統背景分批執行；完成後下載 Excel result report。

### CSV 固定欄位

欄位名稱同次序必須跟工具提供嘅 `member_migration_template.csv`：

- `phone`：必填；純數字連國碼，冇 `+`、冇空格，全份不可重複。
- `email`：選填；有效 email 或留空，唔可以用 `---` 等 placeholder。
- `name`：必填；最多 50 字，不可有 emoji。
- `birth_month`：選填；1–12。
- `points`：必填；非負整數，小數要先處理。
- `points_expiry`：選填；格式 `YYYY-MM-DD`。
- `receive_push`／`receive_marketing`：必填；只接受 `0` 或 `1`。
- `tier`：v1 必須留空，有值會 reject。

常見退回原因包括多餘首行、錯誤日期格式、電話含空格／`+`、email placeholder、重複電話。應按錯誤報告一次過在原始 CSV 修正，再重新上傳。

### G2 決策重點

- 現有 Storellet 會員係加入新品牌，定全部跳過。
- 0 分會員係咪一併導入。
- 有冇單人積分警戒上限。
- 到期全清品牌嘅積分到期政策，以及過期但有分嘅行點處理。
- Bucket 滾動品牌係咪接受以導入日套用滾動規則；CSV 到期日無法原樣照搬。
- File 內重複 email 點處理。
- 確認 consent mapping。

改任何決策都會令之前嘅 dry run 作廢並重跑，確保預覽同最終政策一致。

### 固定規則

- 已經係本品牌會員嘅行會跳過並寫入 report。
- 電話永遠唔會由工具修改。
- 工具唔會寫入已過去嘅到期日。
- 只有出生月份時，系統會以該月 1 號保存。
- 新會員密碼隨機產生，會員其後用「忘記密碼」取回。
- 現有 Storellet 會員嘅 email、生日及全局訂閱等本體資料唔會被 CSV 覆寫；差異會列入 report。

### Dry Run 分類及 Conflict

- `MATCHED_NEW`：全新會員，將建立帳戶。
- `MATCHED_EXISTING`：現有 Storellet 會員，將加入品牌及入分。
- `ALREADY_IN_BRAND`：已屬該品牌，跳過。
- `CONFLICT`：必須逐行處理。
- `RESOLVED_BYPASS`：按政策或人手決定跳過。

Conflict 可選 **Bypass**（唔導入並記錄原因）或 **Override**。Override 只可以清空 email、修改積分，或改成未來到期日；電話錯誤必須回到源頭 CSV 修正，唔可以在工具內改。

### 最後確認及執行

- 建議大型 task 安排喺非繁忙時段；手冊參考約 11,000 行需時約 1–2 小時，實際時間視環境而定。
- 最後防呆要求人手輸入執行行數：`MATCHED_NEW + MATCHED_EXISTING + READY`。
- 背景執行中斷後可以接力，設計上避免重複入分。
- Report 包括 Summary、成功／失敗／Bypass 明細，以及「資料落差（以 Storellet 為準）」。
- 入分請求後斷線而結果不明時，系統唔會自動重試，以防雙倍入分；要由工程同事用 UserActivity 核對。

### 重要限制

- v1 **冇自動 rollback**；執行前必須完成 dry run、re-check 同最後確認。
- 如果 EXECUTING 超過 15 分鐘完全冇進度，交工程同事檢查及按需要 Requeue。
- 會員 CSV、電話、email、積分及 report 都屬敏感資料，只可以經批准嘅內部渠道處理，唔可以上載到公開 repository 或 issue。

## Internal Notes

- 呢條答案面向操作同事，整理 HTML 手冊嘅正式入口、G0–G6、CSV、決策、conflict、執行及 report 流程；部署附錄不納入一般操作指引。
