import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    // Короткая подводка: показывается в ленте и в описании для поисковиков
    lead: z.string(),
    date: z.coerce.date(),
    // Рубрика — она же метка в ленте
    topic: z.string().default('заметки'),
    // Черновик не попадает на сайт при сборке
    draft: z.boolean().default(false),
  }),
});

/* Юридические документы: оферта, политика, согласия.
   Исходники в docx лежат в «Личный блог/Юридическое», сюда конвертированы. */
const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    updated: z.coerce.date(),
  }),
});

export const collections = { articles, docs };
