/**
 * Единственное место, где меняются данные о сайте: имя, ссылки, описание.
 * Всё остальное берёт их отсюда.
 */
export const site = {
  // Ник из Инстаграма — по нему сайт узнают те, кто пришёл оттуда
  name: 'elizaveta_kimmy',
  short: 'Лиза',
  role: 'маркетолог',
  // Показывается в поиске и при отправке ссылки в мессенджер
  description:
    'Лиза, маркетолог. Показываю, как перевела работу на нейронки — в клиентских проектах и в своём блоге. Инструкции, промпты, разборы и фейлы.',
  url: 'https://elizaveta-kimmy.pages.dev',
  links: {
    instagram: 'https://instagram.com/elizaveta_kimmy',
    telegram: 'https://t.me/kimmy_marketing',
    email: 'elizaveta.kimmy@gmail.com',
  },
};

export const nav = [
  { href: '/blog/', label: 'Статьи' },
  // Страницы «О себе» и «Интенсив» временно сняты — тексты ещё не вычитаны.
  // Вернуть: раскомментировать строки ниже и убрать «_» из имён файлов в src/pages/
  // { href: '/about/', label: 'О себе' },
  // { href: '/intensive/', label: 'Интенсив' },
];

const MONTHS = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
];

/** Дата в виде «15 августа 2026» — без хвоста «г.», который добавляет Intl */
export function formatDate(date: Date): string {
  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

/** Грубая оценка времени чтения — читателю полезнее точности */
export function readingTime(body: string): string {
  const words = body.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 180))} мин`;
}
