/**
 * Единственное место, где меняются данные о сайте: имя, ссылки, реквизиты.
 * Всё остальное берёт их отсюда.
 */
export const site = {
  // Ник из Инстаграма — по нему сайт узнают те, кто пришёл оттуда
  name: 'elizaveta_kimmy',
  short: 'Лиза',
  role: 'маркетолог',
  // Показывается в поиске и при отправке ссылки в мессенджер
  description:
    'Лиза Ким, маркетолог. Показываю, как перевела работу на нейронки — в клиентских проектах и в своём блоге. Интенсив по Клоду в записи, промпты, разборы.',
  url: 'https://elizaveta-kimmy.pages.dev',
  links: {
    instagram: 'https://instagram.com/elizaveta_kimmy',
    // Канал: промпты, разборы, цифры
    telegram: 'https://t.me/kimmy_marketing',
    // Личка: сюда ведут все кнопки «Получить доступ»
    telegramPersonal: 'https://t.me/elizaveta_kimmy',
    email: 'elizaveta.kimmy@ya.ru',
  },
  /** Реквизиты для футера и юридических страниц */
  legal: {
    fio: 'Ким Елизавета Викторовна',
    inn: '616713218910',
    status: 'самозанятая, налог на профессиональный доход',
    phone: '+7 919 882-51-00',
    phoneHref: 'tel:+79198825100',
  },
};

/** Кнопка «Получить доступ»: личка в Телеграме с готовым сообщением */
export const ctaIntensive =
  site.links.telegramPersonal + '?text=' + encodeURIComponent('Хочу получить доступ к интенсиву');

export const nav = [
  { href: '/blog/', label: 'Статьи' },
  { href: '/intensive/', label: 'Интенсив' },
  // Страница «О себе» временно снята — тексты ещё не вычитаны.
  // Вернуть: раскомментировать строку ниже и убрать «_» из имени файла в src/pages/
  // { href: '/about/', label: 'О себе' },
];

/** Юридические документы в футере. Страницы собираются из src/content/docs */
export const legalDocs = [
  { href: '/dokumenty/oferta/', label: 'Договор-оферта' },
  { href: '/dokumenty/politika/', label: 'Политика обработки персональных данных' },
  { href: '/dokumenty/soglasie-pd/', label: 'Согласие на обработку персональных данных' },
  { href: '/dokumenty/soglasie-rassylka/', label: 'Согласие на рассылку' },
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
