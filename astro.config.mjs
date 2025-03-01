import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(),
    react(),
  ],
  devOptions: {
    open: 'none',
  },
  server:{
    host: true,
    port:4321,
  },
  vite: {
    ssr: {
      noExternal: ['@fontsource-variable/onest']
    }
  }
});