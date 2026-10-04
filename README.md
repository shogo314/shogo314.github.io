# shogo314.github.io

https://shogo314.github.io の ソースです。[Astro](https://astro.build) + [Starlight](https://starlight.astro.build) で作っています。

## 更新のしかた

| 変更したいもの | 編集するファイル |
| --- | --- |
| 戦績・受賞 | `src/data/results.yaml` |
| アカウント | `src/data/accounts.yaml` |
| トップページ | `src/content/docs/index.mdx` |
| 作ったもの | `src/content/docs/projects.mdx` |

`main` に push すると GitHub Actions でビルドされ、GitHub Pages に公開されます。

## ローカルで確認する

```sh
npm install
npm run dev    # http://localhost:4321 でプレビュー
npm run build  # dist/ にビルド
```
