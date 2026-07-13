import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().or(z.array(z.string())).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
    image: z.string().optional(),
    toc: z.array(z.object({id: z.string(), text: z.string(), level: z.string(),})).optional(),
  }),
});

const imprint = defineCollection({
  loader: glob({ base: './src/content/imprint', pattern: '**/*.{md,mdx}' }),
  schema: z.object({}),
});

export const collections = { blog, imprint };
