// トップページ・サービスページ・パンフレットで共有する掲載内容。
// 文言やアイコン（SVGパス）をここに集約し、各ページから import して使う。

export interface IconItem {
  title: string;
  desc: string;
  icon: string;
}

// トップの「できること」向け要約
export const servicesSummary: IconItem[] = [
  {
    title: 'Webアプリ開発',
    desc: '要件定義から設計・開発・運用まで一貫対応。スピーディーかつ保守性の高いWebアプリケーションを構築します。',
    icon: 'M4 5h16v11H4zM2 20h20M9 9l2 2-2 2m4 0h3',
  },
  {
    title: 'スマホアプリ開発',
    desc: 'iOS / Android 両対応。クロスプラットフォーム開発で、コストを抑えながら高品質なアプリを提供します。',
    icon: 'M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM10 18h4',
  },
  {
    title: '保守・運用',
    desc: 'リリースして終わりではなく、公開後の改善・機能追加・保守まで継続的に伴走します。',
    icon: 'M12 3v2m0 14v2m9-9h-2M5 12H3m14.5-6.5-1.4 1.4M7.9 16.1l-1.4 1.4m11 0-1.4-1.4M7.9 7.9 6.5 6.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  },
];

// 技術スキル・実務経験を、非エンジニアにも伝わる「価値」として言い換えたもの
export const strengths: IconItem[] = [
  {
    title: '「重い・遅い」を解消します',
    desc: '3時間かかっていた処理を10分以下に短縮した実績も。表示や処理のスピードを改善し、使う人のストレスとサーバー費用の両方を減らします。',
    icon: 'M13 2 3 14h7l-1 8 10-12h-7l1-8Z',
  },
  {
    title: '他社が作ったシステムも引き継げます',
    desc: '複雑で分かりにくいコードでも丁寧に読み解き、不具合の原因を特定して修正します。「作った人と連絡が取れない」システムの改修・保守もお任せください。',
    icon: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm5.5 11.5 4.5 4.5',
  },
  {
    title: 'アクセスが増えても止まらない設計',
    desc: '10以上の機能が連携する大規模システムの構築・運用経験があります。クラウド(AWS)を活用し、利用者が増えても安定して動く仕組みをつくります。',
    icon: 'M5 4h14v5H5zM5 15h14v5H5zM8 6.5h.01M8 17.5h.01',
  },
  {
    title: '古くなったシステムの作り替え',
    desc: '長年使われてきたシステムの刷新や、WordPressから本格的なシステムへの移行など、"作り直し"を数多く手がけてきました。今の課題に合わせて生まれ変わらせます。',
    icon: 'M21 12a9 9 0 1 1-3-6.7L21 8m0-5v5h-5',
  },
  {
    title: '目的に合った技術を選びます',
    desc: 'Ruby・Go・React・Next.js・Vue など幅広い技術を使い分けられます。流行っているからではなく、お客様の目的に本当に合った方法を選びます。',
    icon: 'M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5',
  },
  {
    title: '技術力の裏付けは、世界への貢献',
    desc: '世界中で使われるソフトウェア(devise ほか)の改善に貢献しています。日々技術と向き合い続けているからこそ、確かな品質でお応えできます。',
    icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20',
  },
];

// これまで携わってきた業界・領域
export const fields: IconItem[] = [
  {
    title: '教育・オンライン学習',
    desc: '日本最大級のオンラインスクールやeラーニングシステム、プログラミング講座の教材制作・講師まで。',
    icon: 'M22 10 12 5 2 10l10 5 10-5ZM6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5',
  },
  {
    title: '金融・証券',
    desc: '証券会社の基幹システム開発など、高い正確性と信頼性が求められる領域。',
    icon: 'M4 20V10m5 10V4m5 16v-7m5 7V8',
  },
  {
    title: 'EC・ショッピング',
    desc: 'お買い物SNSや産直ECサイトなど、購入体験を支える裏側の仕組みづくり。',
    icon: 'M6 6h15l-1.6 9H7.5zM6 6 5.2 3H2m5 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
  },
  {
    title: '不動産',
    desc: 'VRで物件を内覧できるサービスのサーバーサイド開発。',
    icon: 'M3 11 12 4l9 7M5 10v10h14V10',
  },
  {
    title: '介護・福祉',
    desc: '介護事業者向けの集客・顧客管理(CRM)システムやコミュニティサイト。',
    icon: 'M12 21s-7-4.35-9.5-8.5C1 9 3 5 6.5 5 9 5 12 8 12 8s3-3 5.5-3C21 5 23 9 21.5 12.5 19 16.65 12 21 12 21Z',
  },
  {
    title: '会員・コミュニティ',
    desc: '退職者向け会員サイトのリニューアルなど、人がつながる場のシステム。',
    icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11',
  },
];

// 使用可能なプログラミング言語・主要技術。会社概要ページとパンフレットで共有。
export interface TechItem {
  name: string;
  /** public/logos/ 配下のロゴ画像 */
  logo: string;
}

export interface TechGroup {
  label: string;
  items: TechItem[];
}

export const techStack: TechGroup[] = [
  {
    label: '言語',
    items: [
      { name: 'Ruby', logo: '/logos/ruby.svg' },
      { name: 'Go', logo: '/logos/go.svg' },
      { name: 'TypeScript', logo: '/logos/typescript.svg' },
      { name: 'JavaScript', logo: '/logos/javascript.svg' },
      { name: 'Dart', logo: '/logos/dart.svg' },
      { name: 'HTML', logo: '/logos/html5.svg' },
      { name: 'CSS', logo: '/logos/css3.svg' },
    ],
  },
  {
    label: 'フレームワーク',
    items: [
      { name: 'Ruby on Rails', logo: '/logos/rails.svg' },
      { name: 'React', logo: '/logos/react.svg' },
      { name: 'Next.js', logo: '/logos/nextjs.svg' },
      { name: 'Vue.js', logo: '/logos/vuejs.svg' },
      { name: 'NestJS', logo: '/logos/nestjs.svg' },
      { name: 'React Native', logo: '/logos/reactnative.svg' },
      { name: 'Flutter', logo: '/logos/flutter.svg' },
    ],
  },
  {
    label: 'データベース',
    items: [
      { name: 'PostgreSQL', logo: '/logos/postgresql.svg' },
      { name: 'MySQL', logo: '/logos/mysql.svg' },
      { name: 'SQLite', logo: '/logos/sqlite.svg' },
    ],
  },
  {
    label: 'インフラ・運用',
    items: [
      { name: 'AWS', logo: '/logos/aws.svg' },
      { name: 'Docker', logo: '/logos/docker.svg' },
      { name: 'Terraform', logo: '/logos/terraform.svg' },
    ],
  },
];

// 上記以外の言語・技術にも対応できることを示す補足。サイトとパンフレットで共有。
export const techNote =
  '上記は一例です。ご要望に応じて、その他の言語・技術にも柔軟に対応します。';

// 「こんな連携や相談をお待ちしております」の例。お問い合わせページとパンフレットで共有。
export const collaborations: string[] = [
  '業務のDX推進・Webシステム開発',
  '定型業務の自動化・効率化システムの構築',
  'スマートフォンアプリ（iOS / Android）の開発',
  '既存システムの改修・保守、レガシーシステムの刷新',
  'システム改善によるコスト削減・生産性向上',
  '売上・集客につながるWebサービス開発',
  '生成AIを活用した業務効率化・自動化',
  '技術選定・設計のご相談、開発チームへの参画',
];

// /services の詳細表示（リード文＋箇条書き）
export interface ServiceDetail {
  title: string;
  lead: string;
  points: string[];
  icon: string;
}

export const services: ServiceDetail[] = [
  {
    title: 'Webアプリケーション開発',
    lead: '業務システムから顧客向けサービスまで、Web上で動くプロダクトを設計・開発します。',
    points: [
      '要件定義・仕様策定からの伴走',
      'モダンなフロントエンド / バックエンド構成',
      '保守・運用を見据えた設計',
    ],
    icon: 'M4 5h16v11H4zM2 20h20M9 9l2 2-2 2m4 0h3',
  },
  {
    title: 'スマートフォンアプリ開発',
    lead: 'iOS / Android 双方に対応したモバイルアプリを開発します。',
    points: [
      'クロスプラットフォーム開発でコスト最適化',
      'プッシュ通知・カメラ等の端末機能連携',
      'ストア申請・公開までサポート',
    ],
    icon: 'M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM10 18h4',
  },
  {
    title: '保守・運用',
    lead: 'リリース後も継続的に。改善・機能追加・障害対応まで長期的に支援します。',
    points: [
      '公開後の機能追加・改善',
      'バグ修正・障害対応',
      '長期的な運用サポート',
    ],
    icon: 'M12 3v2m0 14v2m9-9h-2M5 12H3m14.5-6.5-1.4 1.4M7.9 16.1l-1.4 1.4m11 0-1.4-1.4M7.9 7.9 6.5 6.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  },
];

// お仕事の進め方
export interface FlowStep {
  step: string;
  title: string;
  desc: string;
}

export const flow: FlowStep[] = [
  { step: '01', title: 'ヒアリング', desc: '課題や実現したいことをお聞きし、本質的な要件を一緒に「定義」します。' },
  { step: '02', title: 'ご提案・お見積り', desc: '実現方法・スケジュール・費用感をご提示します。' },
  { step: '03', title: '設計・開発', desc: '小さく作って確認しながら進め、認識のズレを防ぎます。' },
  { step: '04', title: 'リリース・運用', desc: '公開して終わりではなく、運用・改善まで継続的に支援します。' },
];
