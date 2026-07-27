# Cloudflare R2 Migration Checklist

## 正式版本

- 正式 index：`knowledge/index.json`
- 正式答案：69 條
- Upload metadata／checksum：`r2-upload-manifest.json`
- Legacy：`legacy-snapshot/`，只供離線保存，唔好上載到 AI Search data source

## 上載

1. Bucket 保持 private，停用 `r2.dev`。
2. 依 manifest 上載 69 份 Markdown answers。
3. 設定五個 metadata：`status`、`module`、`locale`、`risk`、`source`。
4. 上載後重新下載並核對 SHA-256。
5. 最後先更新 `knowledge/index.json`，令新版本一次生效。

## AI Search

- Include：`knowledge/**/model-answers/*.md`
- Exclude：draft、review、reference、system、legacy
- Retrieval：Hybrid Search
- Filter：`status = confirmed`、`locale = zh-HK`，再按使用者 module 權限限制
- 高內容量時啟用 reranking
- Low confidence 使用 system prompt 指定嘅 fallback，唔好俾模型估答案
