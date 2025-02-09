import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ehsan-pourhadi.com/",
  base: "",
  vite: {
    ssr: {
      noExternal: ["gsap"],
    },
  },
  integrations: [tailwind(), mdx(), react(), sitemap()],
});
