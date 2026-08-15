import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../site';

export async function GET(context) {
  const articles = (await getCollection('articles', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: site.name,
    description: site.description,
    site: context.site ?? site.url,
    customData: '<language>ru</language>',
    items: articles.map((entry) => ({
      title: entry.data.title,
      description: entry.data.lead,
      pubDate: entry.data.date,
      link: `/blog/${entry.id}/`,
    })),
  });
}
