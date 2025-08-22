import { defineCollection, z } from 'astro:content';

const chapters = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    order: z.number().optional(),
    date: z.string().optional(),
    footnotes: z.array(z.string()).optional()
  })
});

const people = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    birth: z.string().optional(),
    death: z.string().optional()
  })
});

// Timeline uses markdown content entries for simplicity
const timeline = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),
    title: z.string(),
    link: z.string().optional()
  })
});

export const collections = { chapters, people, timeline };
