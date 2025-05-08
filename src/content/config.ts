// src/content/config.ts
import { defineCollection, z } from 'astro:content';

export const collections = {
  projects: defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        image: z.string(),
        description: z.string(),
        // slug: z.string(),  <-- remove this line
        pubDate: z.string().transform((str) => new Date(str)),
        source: z.string(),
        author: z.string(),
        authorImg: z.string(),
    }),
  }),
    blog: defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            image: z.string(),
            description: z.string(),
            // slug: z.string(),  <-- remove this line
            pubDate: z.string().transform((str) => new Date(str)),
            source: z.string(),
            author: z.string(),
            authorImg: z.string(),
        }),
      }),
    assets: defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            image: z.string(),
            description: z.string(),
            // slug: z.string(),  <-- remove this line
            pubDate: z.string().transform((str) => new Date(str)),
            source: z.string(),
            author: z.string(),
            authorImg: z.string(),
        }),
      }),
    docs: defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            image: z.string().optional(),
            description: z.string(),
            // slug: z.string(),  <-- remove this line
            pubDate: z.string().transform((str) => new Date(str)),
            source: z.string(),
            category: z.string().optional(),
        }),
    }),
    api: defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            image: z.string().optional(),
            description: z.string(),
            // slug: z.string(),  <-- remove this line
            pubDate: z.string().transform((str) => new Date(str)),
            source: z.string().optional(),
            category: z.string().optional(),
        }),
    }),

};
