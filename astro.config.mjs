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
      enabled: true,
    },
  }),

  vite: {
    plugins: [tailwindcss()],
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    },
  },

  integrations: [
    clerk({
      afterSignInUrl: '/installers/projects',
      afterSignUpUrl: '/installers/projects',
      signInUrl: '/installers/login',
      signUpUrl: '/installers/register',
    }),
    react(),
    sitemap(),
    partytown(),
  ],

  // Cloudflare Pages with SSR (required for Clerk)
  output: 'server',
});
