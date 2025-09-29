// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import clerk from '@clerk/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://xolar.ca',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    clerk(),
    react(),
    sitemap(),
    partytown()
  ],

  // Cloudflare Pages with SSR (required for Clerk)
  output: 'server'
});