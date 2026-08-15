// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: заменить на реальный адрес после первого деплоя —
  // от него зависят карта сайта, RSS и ссылки для поисковиков.
  site: 'https://example.com',
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
