import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 開発実績（Works）コレクション。
// src/content/works/ に Markdown を1ファイル追加するだけで
// 一覧ページ・詳細ページに自動で反映されます。
const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    // 案件名（例: 予約管理システム）
    title: z.string(),
    // カード・一覧に出る短い概要
    summary: z.string(),
    // 業種・カテゴリ（例: 飲食 / 医療 / 社内業務）
    category: z.string(),
    // 案件の種別。client=お客様からのご依頼、inhouse=自社で企画・開発したもの
    type: z.enum(['client', 'inhouse']).default('inhouse'),
    // 取引先の表記（任意。type: client のときだけ表示される）
    // 実名を出す許諾があれば社名を、なければ「都内の美容サロン様」のように抽象化して書く
    client: z.string().optional(),
    // 担当した役割（例: 設計・開発・運用）
    role: z.string().optional(),
    // 使用技術のタグ
    tags: z.array(z.string()).default([]),
    // 公開日（一覧の並び順に使用。新しい順で表示）
    date: z.coerce.date(),
    // 一覧やヒーローで使うアクセント色（任意。未指定はブランドカラー）
    accent: z.string().optional(),
    // 実績公開URL（任意。あれば「サイトを見る」リンクを表示）
    link: z.string().url().optional(),
    // リンクのラベル（任意。未指定は「サイトを見る」）
    linkLabel: z.string().optional(),
    // 一覧に大きく表示するピックアップ実績にするか
    featured: z.boolean().default(false),
    // 一覧・詳細に出さず下書きにする場合 true
    draft: z.boolean().default(false),
  }),
});

export const collections = { works };
