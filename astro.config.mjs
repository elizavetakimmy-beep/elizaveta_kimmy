// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // От этого адреса считаются карта сайта, RSS и ссылки для поисковиков.
  // Поменять, когда появится свой домен.
  site: 'https://elizaveta-kimmy.pages.dev',
  integrations: [sitemap()],
  build: {
    // Адреса вида /blog/название/ — с завершающим слэшем
    format: 'directory',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
