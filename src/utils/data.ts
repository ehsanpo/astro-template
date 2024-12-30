import portfolioData from "../data/portfolio.json";
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export const getPortfolioData = async () => {
  return portfolioData;
};

export const getPortfolioItems = async () => {
  const portfolioEntries = await getCollection("portfolio");

  return portfolioEntries.map((entry: CollectionEntry<"portfolio">) => ({
    ...entry.data,
    slug: entry.slug,
    background_image: entry.data.background_image,
    logo: entry.data.logo,
    bilder: entry.data.images,
    content: entry,
  }));
};
