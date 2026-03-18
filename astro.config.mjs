import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://LiliyaShahbazian.github.io',
  integrations: [tailwind()],
  output: 'static',
});
