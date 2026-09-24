// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// 仓库为 caicaicat123.github.io（用户主页仓库），站点位于域名根路径，base 必须为 '/'。
// 将来若迁移到子目录仓库（形如 caicaicat123/nwn-site），需同步改成对应仓库名。

const BLOG_DIR = fileURLToPath(new URL('./src/content/blog/', import.meta.url));

/**
 * 从 Markdown frontmatter 读 pubDate / updatedDate，给 sitemap 补 lastmod。
 * 构建期同步读取，读不到就整体跳过 —— 不影响构建。
 */
function readBlogLastmod() {
  /** @type {Map<string, string>} */
  const map = new Map();
  try {
    for (const file of readdirSync(BLOG_DIR)) {
      if (!/\.(md|mdx)$/i.test(file)) continue;
      const source = readFileSync(join(BLOG_DIR, file), 'utf8');
      const end = source.indexOf('\n---', 3);
      const frontmatter = source.startsWith('---') && end > 0 ? source.slice(3, end) : '';
      const value = (/** @type {string} */ key) =>
        new RegExp(`^${key}:\\s*(.+)$`, 'm')
          .exec(frontmatter)?.[1]
          ?.trim()
          .replace(/^['"]|['"]$/g, '');
      const date = new Date(value('updatedDate') ?? value('pubDate') ?? '');
      if (!Number.isNaN(date.valueOf())) {
        map.set(`/blog/${file.replace(/\.(md|mdx)$/i, '')}/`, date.toISOString());
      }
    }
  } catch {
    /* 目录不存在或读不动：不加 lastmod 即可 */
  }
  return map;
}

const lastmod = readBlogLastmod();

export default defineConfig({
  site: 'https://nwbbs.cn',
  base: '/',
  // 产物是 about/index.html，正式地址本来就带尾斜杠（canonical 也是）。
  // 设成 always 后站内链接同样带尾斜杠，可省掉 GitHub Pages 每次点击的那次 301。
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        const value = lastmod.get(new URL(item.url).pathname);
        return value ? { ...item, lastmod: value } : item;
      },
    }),
  ],
  // CSS 只有 30 余 KB，直接内联进 HTML：省一次渲染阻塞请求，也根治
  // 「发布后约 10 分钟页面无样式」（旧 HTML 去请求已删除的哈希 CSS 文件）。
  build: {
    inlineStylesheets: 'always',
  },
  // 静态站导航预取：悬停即取，成本近零。
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  // 根目录的 vite 与 astro 内嵌的 vite 是两个副本，Plugin 类型互不兼容 ——
  // 属于类型层面的噪音（构建本身正常），所以宽转掉，免得 astro check 一直报错。
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: true,
    },
  },
});
