// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// 本番は独自ドメイン(de-f.net)で配信。サイトマップやOGPの絶対URL生成に使用。
export default defineConfig({
  site: 'https://de-f.net',
  trailingSlash: 'ignore',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
