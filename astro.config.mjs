import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = (() => {
  try {
    const candidate = new URL(process.env.SITE_URL ?? '');
    return candidate.protocol === 'http:' || candidate.protocol === 'https:' ? candidate.href : undefined;
  } catch {
    return undefined;
  }
})();
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  output: 'static',
  site,
  base,
  integrations: site ? [sitemap({ filter: (page) => page.endsWith('/') })] : [],
  build: {
    format: 'directory',
  },
});
