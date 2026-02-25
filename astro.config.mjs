import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";


import vercel from '@astrojs/vercel';


export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  image: {
      domains: ["images.unsplash.com"],
    },

  vite: {
    plugins: [tailwindcss()],
  },

  // https://astro.build/config
  // ← replace with your domain
  site: "https://your-construction-site.com",

  integrations: [
    react()
    ,mdx({
      // MDX options — allows importing .astro components inside .mdx files
      extendMarkdownConfig: true,
      optimize: true,
    }),
    sitemap(),
  ],

  adapter: vercel(),
});