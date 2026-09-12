// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 仓库为 caicaicat123.github.io（用户主页仓库），站点位于域名根路径，base 必须为 '/'。
// 将来若迁移到子目录仓库（形如 caicaicat123/nwn-site），需同步改成对应仓库名。
export default defineConfig({
  site: 'https://nwbbs.cn',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: true,
    },
  },
});
