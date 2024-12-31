import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://ehsanpo.github.io",
  base: "astro-template",
  vite: {
    ssr: {
      noExternal: ["gsap"],
    },
  },
  integrations: [tailwind(), mdx(), react()],
});
