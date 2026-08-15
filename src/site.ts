/**
 * Единственное место, где меняются данные о сайте: имя, ссылки, описание.
 * Всё остальное берёт их отсюда.
 */
export const site = {
  name: 'Лиза Кимми',
  short: 'Лиза',
  role: 'маркетолог',
  // Показывается в поиске и при отправке ссылки в мессенджер
  description:
    'Маркетолог. Помогаю экспертам получать продажи через блог без сторис 24/7. Статьи о продвижении, нейросетях и работе без выгорания.',
  // TODO: подставить рабочий адрес после деплоя
  url: 'https://example.com',
  links: {
    instagram: 'https://instagram.com/elizaveta_kimmy',
    // TODO: заменить на реальный адрес канала
    telegram: 'https://t.me/elizaveta_kimmy',
    email: 'elizaveta.kimmy@gmail.com',
  },
};

export const nav = [
  { href: '/blog/', label: 'Статьи' },
  { href: '/about/', label: 'О себе' },
  { href: '/intensive/', label: 'Интенсив' },
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
