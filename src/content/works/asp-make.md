---
title: アフィリエイト運用SaaS「asp-make」
summary: 広告主が自社のアフィリエイトプログラムを作成・運用できるマルチテナント型のSaaS。AWS上にインフラをコード化して構築しました。
category: SaaS
type: inhouse
role: 設計・開発・インフラ構築
tags:
  - Ruby on Rails
  - Devise
  - AWS
  - Terraform
  - CircleCI
  - Docker
date: 2020-03-17
accent: "#1c7ed6"
draft: false
---

## 背景・課題

アフィリエイト広告を自社で運用するには、成果計測・パートナー管理・レポートなど多くの仕組みが必要です。これらをテナントごとに提供できるSaaSとして構築しました。

## 取り組み

- Ruby on Rails でマルチテナント構成のASP（アフィリエイト・サービス・プロバイダ）を構築
- 広告主ごとの管理画面・成果計測タグの発行・管理機能を実装
- AWS（CloudFront / ELB など）上に、Terraform でインフラをコード化
- CircleCI による継続的インテグレーションを整備

## 成果

- 広告主が自社でアフィリエイトプログラムを運用できるSaaSを提供
- インフラをコード化し、再現性のある構築・運用を実現
