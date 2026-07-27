# Storellet CMS Knowledge Base

呢個版本已為私人 Cloudflare R2 及 AI Search／RAG 整理。

## 正式內容

- `index.json`：69 條 curated answers。
  - Company：16 條由 135 個 confirmed workbook rows 重寫嘅主題式答案。
  - Assets、Membership、Push、Report、Application、CMS users：53 條由白話指南拆分嘅答案。
- `index.legacy.json`：整理前 315 條 index，只供離線覆核。
- `legacy-snapshot/`：舊知識庫完整副本，唔好上載到正式 AI Search data source。
- `r2-upload-manifest.json`：正式 objects、metadata 同 SHA-256 checksum。

## 正式 R2 prefix

```text
knowledge/index.json
knowledge/company/model-answers/*.md
knowledge/assets/model-answers/*.md
knowledge/membership/model-answers/*.md
knowledge/push/model-answers/*.md
knowledge/report/model-answers/*.md
knowledge/application/model-answers/*.md
knowledge/cms-users/model-answers/*.md
```

只索引 `knowledge/**/model-answers/*.md`。唔好索引 `review/`、`_templates/`、`system/`、`references/` 或 `legacy-snapshot/`。

## 狀態

- `confirmed`：已由指定來源確認，可以加入正式 index。
- `draft`：仍待內容負責人覆核，不加入正式 index。
- `disabled`：已停用或過期，不加入正式 index。

## 安全

- R2 bucket 保持 private。
- Browser 唔可以保存 R2／Cloudflare credential。
- CMS 讀寫經 Worker binding 或短效 presigned URL。
- 密碼、API key、token、Passcode、會員資料及真實交易資料唔可以寫入知識庫。
