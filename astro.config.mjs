import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://beep.beelogik.com",
  output: "static",
  trailingSlash: "never",
  compressHTML: true,
  build: { inlineStylesheets: "auto" },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date()
    })
  ]
});
