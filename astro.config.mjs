import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()
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