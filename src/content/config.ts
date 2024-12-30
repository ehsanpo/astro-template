import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      date: z.string(),
      permalink: z.string(),
      client: z.string(),
      agency: z.string(),
      category: z.array(z.string()),
      tag: z.array(z.string()),
      case_link_url: z.string().optional(),
      background_image: image(),
      logo: image().optional(),
      images: z.array(image()),
      onHome: z.boolean().optional(),
    }),
});

export const collections = {
  portfolio,
};
