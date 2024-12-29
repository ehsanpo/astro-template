import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

export default defineConfig({
  vite: {
    ssr: {
      noExternal: ["gsap"],
    },
  },
  integrations: [tailwind(), mdx(), react()],
});
