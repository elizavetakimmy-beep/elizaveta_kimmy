import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    // Короткая подводка: показывается в ленте и в описании для поисковиков
    lead: z.string(),
    date: z.coerce.date(),
    // Рубрика — она же метка-наклейка в ленте
    topic: z.string().default('заметки'),
    // Черновик не попадает на сайт при сборке
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
