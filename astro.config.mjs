import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://ehsanpo.github.io",
  base: process.env.NODE_ENV !== "development" ? "astro-template" : undefined,
  vite: {
    ssr: {
      noExternal: ["gsap"],
    },
  },
  integrations: [tailwind(), mdx(), react()],
});
