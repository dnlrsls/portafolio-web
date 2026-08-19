import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL || undefined;
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  output: 'static',
  site,
  base,
  build: {
    format: 'directory',
  },
});
