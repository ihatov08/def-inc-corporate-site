// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 本番は独自ドメイン(de-f.net)で配信。サイトマップやOGPの絶対URL生成に使用。
export default defineConfig({
  site: 'https://de-f.net',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
