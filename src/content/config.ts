import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    date: z.string(),
    permalink: z.string(),
    client: z.string(),
    agency: z.string(),
    category: z.array(z.string()),
    tag: z.array(z.string()),
    case_link_url: z.string().optional(),
    background_image: z.string(),
    logo: z.string().optional(),
    images: z.array(z.string())
  })
});

export const collections = {
  portfolio
};