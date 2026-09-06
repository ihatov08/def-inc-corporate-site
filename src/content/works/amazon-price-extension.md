---
title: Amazon価格収集ツール（Chrome拡張機能）
summary: Amazon商品ページの価格情報を、ブラウザ操作だけで手軽に収集・記録できるChrome拡張機能です。
category: ツール
type: client
client: EC事業者様
role: 設計・開発
tags:
  - JavaScript
  - Chrome Extension
  - HTML
date: 2021-01-21
accent: "#f08c00"
draft: false
---

## 背景・課題

Amazonの商品価格を継続的にチェック・記録するには、手作業でのコピーや転記が発生し、手間がかかっていました。

## 取り組み

- Chrome拡張機能として、商品ページから価格情報を取得する仕組みを実装
- コンテキストメニュー（右クリック）やオプション画面から操作できるUIを用意
- 取得した情報を外部へPOST送信し、記録・蓄積できる構成に
- ストレージAPIで設定を保存

## 成果

- ブラウザ操作だけで価格情報を収集できるように
- 定期的な価格チェックの手間を削減
