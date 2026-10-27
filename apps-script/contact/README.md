# Contact form Apps Script

CLIで新しいGoogleフォームを作成・管理するためのApps Scriptです。

## 初回セットアップ

```bash
npm install -g @google/clasp
clasp login
clasp create --type standalone --title "def contact form"
clasp push
clasp run setupContactForm
```

`clasp create` が生成した `.clasp.json` はこのディレクトリに保存してください。
`clasp run` の実行には、Google Apps Script APIの有効化とApps Script側のAPI実行設定が必要です。

実行ログに表示される `Embed URL` を `src/data/site.ts` の `contactFormEmbedUrl` に設定し、
`Edit URL` はフォームの管理用に保管してください。

## 更新

フォームの項目を変更した場合は、コードを編集してから次を実行します。

```bash
clasp push
```

`setupContactForm` は初回にフォームを作成し、2回目以降は保存済みのフォームIDを表示するだけです。
