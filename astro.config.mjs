import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'https://elirizk.me',
  integrations: [mdx(), sitemap(), tailwind()],
  adapter: netlify(),
  redirects: {
    '/': {
      status: 302,
      destination: '/resume'
    }
  }
});