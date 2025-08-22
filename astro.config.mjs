import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://rolandasd.github.io/SamogitianChronicle',
  output: 'static',
  build: { format: 'directory' }
});
