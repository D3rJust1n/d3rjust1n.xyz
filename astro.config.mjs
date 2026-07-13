import { defineConfig } from 'astro/config';
import rehypePrettyCode from 'rehype-pretty-code';
import { siteConfig } from './src/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify';
import { remarkExtractTOC } from './src/utils/remark-extract-toc.ts';

export default defineConfig({
  site: siteConfig.site,

  integrations: [sitemap(),
    react(), icon({ include: { lucide: ['*'], cib: ['*'] } }), mdx(), keystatic()],

  markdown: {
    processor: unified({
      remarkPlugins: [remarkExtractTOC],
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: 'github-dark',
            onVisitLine(node) {
              if (node.children.length === 0) {
                node.children = [{ type: 'text', value: ' ' }];
              }
            },
          },
        ],
      ],
    }),
  },

  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  adapter: netlify(),
});