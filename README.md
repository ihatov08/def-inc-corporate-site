# def合同会社 コーポレートサイト

[Astro](https://astro.build/) で構築した def合同会社（[de-f.net](https://de-f.net)）のコーポレートサイトです。
Web / スマホアプリ開発の**開発実績（Works）**の掲載に対応しています。

## 技術構成

- **Astro** … 静的サイトジェネレーター
- **Tailwind CSS v4** … `@tailwindcss/vite` 経由（トークンは [`src/styles/global.css`](src/styles/global.css) に集約）
- **Content Collections** … 開発実績を Markdown で管理
- ライト / ダークモード対応（右上のトグル・OSの設定に追従）

## セットアップ

```bash
npm install       # 依存関係のインストール
npm run dev       # 開発サーバー（http://localhost:4321）
npm run build     # 本番ビルド（dist/ に出力）
npm run preview   # ビルド結果のプレビュー
```

## ページ構成

| パス | 内容 |
| --- | --- |
| `/` | トップ（Home） |
| `/services` | サービス紹介 |
| `/works` | 開発実績の一覧（カテゴリ絞り込み付き） |
| `/works/<slug>` | 開発実績の詳細 |
| `/publications` | 出版実績（書籍） |
| `/courses` | オンライン講座（Udemy） |
| `/oss` | OSSコントリビュート |
| `/company` | 会社概要 |
| `/contact` | お問い合わせ |
| `/sales-email-policy` | 営業目的のご連絡に関するポリシー |

## 開発実績（Works）の追加方法

実績は [`src/content/works/`](src/content/works/) に Markdown を1ファイル置くだけで追加できます。
ファイル名（拡張子なし）がそのまま URL のスラッグになります。
（例：`reservation-system.md` → `/works/reservation-system`）

1. [`src/content/works/_template.md`](src/content/works/_template.md) をコピーして新しいファイルを作る
2. フロントマターを編集する
3. 本文（Markdown）で背景・取り組み・成果などを書く
4. 公開するときは `draft: false` にする

### フロントマターの項目

| キー | 必須 | 説明 |
| --- | --- | --- |
| `title` | ✅ | 案件名 |
| `summary` | ✅ | 一覧カードに出る概要（1〜2文） |
| `category` | ✅ | カテゴリ（例：飲食 / 医療 / 社内業務）。一覧の絞り込みにも使用 |
| `date` | ✅ | 公開日。一覧は新しい順に並びます |
| `role` | | 担当範囲（例：要件定義・設計・開発） |
| `tags` | | 使用技術のタグ（配列） |
| `accent` | | カード・詳細ヒーローのアクセント色（例：`"#e8590c"`） |
| `link` | | 公開URL。あれば「サイトを見る」リンクを表示 |
| `featured` | | `true` で一覧で大きく表示 |
| `draft` | | `true` の間は公開されません |

スキーマの定義は [`src/content.config.ts`](src/content.config.ts) にあります。

## 出版・講座・OSS の編集

書籍・Udemy講座・OSSコントリビュートは [`src/data/publications.ts`](src/data/publications.ts) の
配列（`books` / `courses` / `ossContributions`）を編集すれば、各ページとトップページに反映されます。

## 画像の配置

以下の画像を `public/images/` に置くと表示されます（未配置でもレイアウトは崩れません）。

| パス | 用途 |
| --- | --- |
| `public/images/representative.jpg` | 会社概要ページの代表写真（未配置時は「Y」モノグラム表示） |
| `public/images/hero.jpg` | トップのヒーロー背景に重ねる岩手の風景写真（任意。未配置時は山並みSVGのみ） |

## 会社情報の編集

会社名・住所・お問い合わせフォームURL・ナビゲーションなどは
[`src/data/site.ts`](src/data/site.ts) にまとまっています。ここを編集すれば全ページに反映されます。

## デプロイ

`main` ブランチへの push で GitHub Actions（[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)）が
自動ビルドし、GitHub Pages へデプロイします。独自ドメインは [`public/CNAME`](public/CNAME)（`de-f.net`）で維持されます。

> **初回のみ**：リポジトリの Settings → Pages → *Build and deployment* の Source を
> **「GitHub Actions」** に変更してください。
