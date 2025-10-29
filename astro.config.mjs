// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";
// https://astro.build/config
export default defineConfig({

    vite: {
        plugins: [tailwindcss()],
    },
    prefetch: {
        prefetchAll: true
    },
    site: 'https://ehor.jp',
    integrations: [sitemap(), icon()],
});