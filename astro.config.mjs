// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({

    vite: {
        plugins: [tailwindcss()],
    },
    prefetch: {
        prefetchAll: true
    },
    site: 'https://ehor.jp',
    integrations: [sitemap()],
});