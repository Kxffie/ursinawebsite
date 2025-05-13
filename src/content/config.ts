// src/content/config.ts
import { defineCollection, z } from 'astro:content';

export const collections = {
  samples: defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        image: z.string(),
        description: z.string(),
        pubDate: z.string().transform((str) => new Date(str)),
        source: z.string(),
        author: z.string(),
        authorImg: z.string(),
        officialSample: z.boolean().optional(),
    }),
  }),
    blog: defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
        }),
      }),
    assets: defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
        }),
      }),
    docs: defineCollection({
      type: 'content',
      schema: z.object({
          title: z.string(),
          image: z.string().optional(),
          description: z.string(),
          sort: z.number(),
          pubDate: z.string().transform((str) => new Date(str)),
          source: z.string().optional(),
          category: z.string().optional(),
      }),
    }),
    api: defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            image: z.string().optional(),
            description: z.string(),
            sort: z.number(),
            pubDate: z.string().transform((str) => new Date(str)),
            source: z.string().optional(),
            category: z.string().optional(),
        }),
    }),

};
