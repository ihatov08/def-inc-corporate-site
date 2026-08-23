// サイト全体で使い回す会社情報・メタ情報。ここを直せば全ページに反映されます。
export const site = {
  name: 'def合同会社',
  brand: 'def.inc',
  domain: 'de-f.net',
  url: 'https://de-f.net',
  tagline: 'def（define：定義する）',
  catch: '市場のニーズに密着した、多くの人の役に立つサービスを。',
  description:
    'def合同会社は、岩手県八幡平市を拠点にWebシステム・スマートフォンアプリの企画・開発・保守運用を行う開発会社です。お客様のビジネスに寄り添い、課題を「定義」するところから伴走します。',
  contactFormUrl: 'https://forms.gle/swa8kjGTCskRL2gv9',
  // 代表の技術ブログ（/qr などの外部リンクで使用）
  blogUrl: 'https://blog.tomoyayoshida.com',
  copyrightSince: 2019,
} as const;

export const company = {
  name: 'def合同会社',
  representative: '吉田 智哉',
  established: '令和元年10月（2019年10月）',
  capital: '50万円',
  business: 'Webシステム・スマートフォンアプリの開発・保守・運用',
  postalCode: '028-7111',
  address: '岩手県八幡平市大更25地割113番地 八幡平市起業家支援センター',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.675707443051!2d141.0928112512863!3d39.926272893143626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f85143eb02b9ea7%3A0x21afa7c8ea25aa24!2z5YWr5bmh5bmz5biC6LW35qWt5a625pSv5o-044K744Oz44K_44O877yIU3RhcnR1cCBDb3Jl77yJ!5e0!3m2!1sja!2sjp!4v1582722114480!5m2!1sja!2sjp',
} as const;

// グローバルナビゲーション
export const nav = [
  { label: 'ホーム', href: '/' },
  { label: 'サービス', href: '/services' },
  { label: '開発実績', href: '/works' },
  { label: '出版実績', href: '/publications' },
  { label: '講座', href: '/courses' },
  { label: 'OSS', href: '/oss' },
  { label: '会社概要', href: '/company' },
  { label: 'お問い合わせ', href: '/contact' },
] as const;
