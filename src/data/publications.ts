// 出版実績（書籍）とオンライン講座（Udemy）のデータ。
// ここに1件追加すれば /publications ページに反映されます。

export interface Book {
  title: string;
  volume?: string; // 篇・巻
  series?: string;
  author: string;
  format?: string;
  year?: number; // 分かる場合のみ
  link: string;
  image?: string; // 表紙画像のパス（無い場合はアクセント色のプレースホルダー表示）
  accent?: string;
}

export interface Course {
  title: string;
  category: string; // 表示用タグ（AI / Docker / Linux / Ruby / Next.js など）
  platform?: string;
  link: string;
  image?: string; // サムネイル画像のパス（無い場合はアクセント色のプレースホルダー表示）
  accent?: string;
}

export interface OssContribution {
  repo: string; // owner/name
  description: string; // プロジェクトの説明
  tag: string; // 主要言語・分類
  link: string; // 貢献（PR一覧など）へのリンク
}

// 書籍（新しい順・重要な順に並べてください）
export const books: Book[] = [
  {
    title: 'ChatGPTクローン開発で学ぶモダンAIアプリケーション構築',
    volume: 'Next.js篇',
    series: '技術の泉シリーズ',
    author: '吉田 智哉',
    format: 'ペーパーバック / Kindle',
    link: 'https://www.amazon.co.jp/dp/4295604011',
    image: '/images/publications/chatgpt-clone-nextjs.webp',
    accent: '#212529',
  },
  {
    title: 'ChatGPTクローン開発で学ぶモダンAIアプリケーション構築',
    volume: 'Ruby on Rails篇',
    series: '技術の泉シリーズ',
    author: '吉田 智哉',
    format: 'Kindle版',
    link: 'https://www.amazon.co.jp/dp/B0H27HBXT5',
    image: '/images/publications/chatgpt-clone-rails.webp',
    accent: '#a5221f',
  },
  {
    title: 'メルカリクローンを作りながら学ぶ Ruby on Rails実践ガイド',
    series: '技術書典',
    author: 'def合同会社',
    format: '電子版',
    link: 'https://techbookfest.org/product/98Xb7gpkCrTagGUVj6tQiU',
    image: '/images/publications/mercari-rails.webp',
    accent: '#c92a2a',
  },
  {
    title: 'Next.jsで作るChatGPTクローンチュートリアル',
    series: '技術書典',
    author: 'def合同会社',
    format: '電子版',
    link: 'https://techbookfest.org/product/rmnKamq0hypGJ7tzzJT3tS',
    image: '/images/publications/chatgpt-clone-nextjs-tbf.webp',
    accent: '#212529',
  },
  {
    title: 'Ruby on Railsで作るChatGPTクローンチュートリアル',
    series: '技術書典',
    author: 'def合同会社',
    format: '電子版',
    link: 'https://techbookfest.org/product/rCLTRwqjvb3JqnUcYG2V0h',
    image: '/images/publications/chatgpt-clone-rails-tbf.webp',
    accent: '#c2255c',
  },
  {
    title: 'Ruby on Rails8入門！',
    series: '技術書典',
    author: 'def合同会社',
    format: '電子版',
    link: 'https://techbookfest.org/product/41bEtMuRb2xADJH5E0WWVC',
    image: '/images/publications/rails8.webp',
    accent: '#a5221f',
  },
  {
    title: 'Hotwire入門 JavaScriptを書かずにReact, Vueに負けないUI/UXを実現する',
    series: '技術書典',
    author: 'def合同会社',
    format: '電子版',
    link: 'https://techbookfest.org/product/u110KY7b47TKMg4KGxmX7T',
    image: '/images/publications/hotwire.webp',
    accent: '#e8590c',
  },
  {
    title: 'コンテナデプロイツールKamal入門',
    series: '技術書典',
    author: 'def合同会社',
    format: '電子版',
    link: 'https://techbookfest.org/product/mrsMgZgK4tpWe379QdKCFt',
    image: '/images/publications/kamal.webp',
    accent: '#1c7ed6',
  },
];

// Udemy講座（クーポンコードは期限切れになるため、素のコースURLを掲載）
export const courses: Course[] = [
  {
    title: '完全自律型AIエージェント「Devin」完全入門！AIエンジニアを雇い生成AIを活用した次世代の開発手法を学ぼう！',
    category: 'AI',
    link: 'https://www.udemy.com/course/devin-ai/',
    image: '/images/courses/devin-ai.webp',
    accent: '#4c6ef5',
  },
  {
    title: '次世代エンジニア向け｜GitHub Copilot・Cursorでプログラミングが3倍速に！AIネイティブ開発を実演解説',
    category: 'AI',
    link: 'https://www.udemy.com/course/ai-native-development-for-engineers/',
    image: '/images/courses/ai-native-development-for-engineers.webp',
    accent: '#7048e8',
  },
  {
    title: 'Next.jsで作るChatGPTクローン開発！本格的な生成AIアプリケーションを開発して実践的なスキルをつけよう！',
    category: 'Next.js',
    link: 'https://www.udemy.com/course/nextjs-chatgpt-ai/',
    image: '/images/courses/nextjs-chatgpt-ai.webp',
    accent: '#212529',
  },
  {
    title: 'Ruby on Railsで作るChatGPTクローン開発！生成AIアプリケーションを開発して実践的なスキルをつけよう！',
    category: 'Ruby on Rails',
    link: 'https://www.udemy.com/course/ruby-on-rails-chatgptai/',
    image: '/images/courses/ruby-on-rails-chatgptai.webp',
    accent: '#c92a2a',
  },
  {
    title: 'プログラミング言語Ruby入門！未経験・文系でもOK！基礎からChatGPT AI LINE botアプリ開発まで学ぶ！',
    category: 'Ruby',
    link: 'https://www.udemy.com/course/ruby-programming-basics/',
    image: '/images/courses/ruby-programming-basics.webp',
    accent: '#e8590c',
  },
  {
    title: '2026最新！Dockerをゼロから学び、開発環境構築からデプロイを自動化！即戦力になるためのDocker入門！',
    category: 'Docker',
    link: 'https://www.udemy.com/course/dockernize/',
    image: '/images/courses/dockernize.webp',
    accent: '#1c7ed6',
  },
  {
    title: '2026最新！Linuxコマンドラインを基礎から学びXクローン公開まで学ぶ！即戦力Web系エンジニアになるLinux入門',
    category: 'Linux',
    link: 'https://www.udemy.com/course/linux-for-web-engineers/',
    image: '/images/courses/linux-for-web-engineers.webp',
    accent: '#0ca678',
  },
  {
    title: '未経験からエンジニアになるためのLinuxコマンドライン入門！ターミナルを使って高速にパソコンを操作する方法を学ぼう！',
    category: 'Linux',
    link: 'https://www.udemy.com/course/linux-command-line-basic/',
    image: '/images/courses/linux-command-line-basic.webp',
    accent: '#087f5b',
  },
];

// OSSコントリビュート（外部の公開プロジェクトへのマージ済みPR。スター数の多い順）
export const ossContributions: OssContribution[] = [
  {
    repo: 'heartcombo/devise',
    description: 'Ruby on Rails の定番認証ライブラリ',
    tag: 'Rails',
    link: 'https://github.com/heartcombo/devise/pulls?q=is%3Apr+author%3Aihatov08',
  },
  {
    repo: 'sqlc-dev/sqlc',
    description: 'SQLからタイプセーフなコードを生成するツール（Go）',
    tag: 'Go',
    link: 'https://github.com/sqlc-dev/sqlc/pulls?q=is%3Apr+author%3Aihatov08',
  },
  {
    repo: 'tabulapdf/tabula',
    description: 'PDF内の表データを抽出するツール',
    tag: 'Ruby',
    link: 'https://github.com/tabulapdf/tabula/pulls?q=is%3Apr+author%3Aihatov08',
  },
  {
    repo: 'lynndylanhurley/devise_token_auth',
    description: 'Rails製JSON API向けのトークン認証ライブラリ',
    tag: 'Rails',
    link: 'https://github.com/lynndylanhurley/devise_token_auth/pulls?q=is%3Apr+author%3Aihatov08',
  },
  {
    repo: 'active-hash/active_hash',
    description: '定数データをActiveRecordのように扱えるRails向けライブラリ',
    tag: 'Rails',
    link: 'https://github.com/active-hash/active_hash/pulls?q=is%3Apr+author%3Aihatov08',
  },
  {
    repo: 'fgrehm/letter_opener_web',
    description: '開発環境で送信メールをブラウザで確認できるRailsライブラリ',
    tag: 'Rails',
    link: 'https://github.com/fgrehm/letter_opener_web/pulls?q=is%3Apr+author%3Aihatov08',
  },
  {
    repo: 'TechBooster/ReVIEW-Template',
    description: '技術書の執筆・組版に使われる Re:VIEW のテンプレート',
    tag: 'Re:VIEW',
    link: 'https://github.com/TechBooster/ReVIEW-Template/pulls?q=is%3Apr+author%3Aihatov08',
  },
  {
    repo: 'coderdojo-japan/coderdojo.jp',
    description: '子ども向けプログラミング道場 CoderDojo Japan の公式サイト',
    tag: 'Rails',
    link: 'https://github.com/coderdojo-japan/coderdojo.jp/pulls?q=is%3Apr+author%3Aihatov08',
  },
];

