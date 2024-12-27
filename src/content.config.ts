import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
  ramen: defineCollection({
    loader: glob({ base: './src/content/ramen', pattern: '**/*.md' }),
    schema: z.object({
      taste: z.string(),
    }),
  }),
};
