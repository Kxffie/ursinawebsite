// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCallouts from 'rehype-callouts'

import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

import AstroPWA from '@vite-pwa/astro'

import compressor from 'astro-compressor'
import compress from 'astro-compress'
import minify from "astro-min";

import opengraphImages, {presets} from "astro-opengraph-images";

export default defineConfig({
  site: "https://ursinawebsite.vercel.app/",
  prefetch: true,
  vite: { plugins: [tailwindcss()] },
  integrations: [AstroPWA(), react(), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), opengraphImages({
    options: {
      fonts: [{
        name: "Roboto",
        weight: 400,
        style: "normal",
        data: fs.readFileSync("node_modules/@fontsource/roboto/files/roboto-latin-400-normal.woff"),
      }]
    },
    render: presets.blackAndWhite,
  }), minify(), compress({
    CSS: false,
    HTML: false,
    Image: true,
    JavaScript: false,
    SVG: false
  }), compressor()],
  markdown: {
    rehypePlugins: [
      rehypeCallouts,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',                // wrap the whole heading
          properties: {
            className: ['header-anchor'],  // style hook
            ariaHidden: 'false'
          },
          // still inject the hash icon at the end
          content: {
            type: 'raw',
            value: `<svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-hash" 
                         fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" 
                         width="0.75em" height="0.75em">
                      <line x1="4" y1="9" x2="20" y2="9"/>
                      <line x1="4" y1="15" x2="20" y2="15"/>
                      <line x1="10" y1="3" x2="8" y2="21"/>
                      <line x1="16" y1="3" x2="14" y2="21"/>
                    </svg>`
          }
        }
      ]
    ]
  }
});