import { defineConfig } from "astro/config";
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';



// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'dracula' },
    
   
    remarkRehype: { footnoteLabel: 'Footnotes' },
    gfm: false,
  })]
});