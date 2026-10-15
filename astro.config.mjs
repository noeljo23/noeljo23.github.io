// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Switch to "https://noeljohn.dev" once the domain is pointed at GitHub Pages.
export default defineConfig({
  site: "https://noeljo23.github.io",
  integrations: [sitemap()],
  build: { inlineStylesheets: "always" },
  vite: { plugins: [tailwindcss()] },
});
