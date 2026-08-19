import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const bilingualText = z.object({
  es: z.string(),
  en: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    order: z.number().int().positive(),
    client: z.string(),
    url: z.url(),
    service: bilingualText,
    summary: bilingualText,
    delivery: z.array(bilingualText),
  }),
});

const contributions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/contributions' }),
  schema: z.object({
    order: z.number().int().positive(),
    repository: z.enum(['Gentleman-Programming/gentle-ai', 'Gentleman-Programming/engram']),
    pullRequest: z.number().int().positive(),
    title: z.string(),
    url: z.url(),
    mergedAt: z.coerce.date(),
    summary: bilingualText,
  }),
});

export const collections = { projects, contributions };
