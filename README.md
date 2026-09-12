# 新世界网络 官方网站

`nwbbs.cn` 的站点源码。Astro 静态构建，部署在 GitHub Pages。

## 技术栈

| 层 | 方案 |
|---|---|
| 框架 | Astro 5 + TypeScript |
| 样式 | Tailwind CSS v4（经 `@tailwindcss/vite` 接入） |
| 内容 | Markdown / MDX + Content Collections |
| 订阅 | `@astrojs/rss` 生成 `/rss.xml` |
| 站点地图 | `@astrojs/sitemap` 生成 `sitemap-index.xml` |
| 部署 | GitHub Actions → GitHub Pages |

字体全部使用系统字体栈，不引入任何外部 CDN 依赖，保证国内访问速度。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 产物输出到 dist/
npm run preview  # 预览 dist/
```

## 目录结构

```text
├─ .github/workflows/deploy.yml   # 部署流水线
├─ public/
│  ├─ CNAME                       # 自定义域名，内容必须为 nwbbs.cn
│  ├─ favicon.svg
│  ├─ og-default.png              # 社交分享图（由脚本生成）
│  └─ robots.txt
├─ scripts/generate-og.mjs        # 重新生成分享图
└─ src/
   ├─ components/                 # 页面组件
   ├─ content/blog/               # 技术日志（Markdown / MDX）
   ├─ data/                       # 站点信息、服务器、AI 实验室、项目、路线图
   ├─ layouts/                    # 基础布局与日志布局
   ├─ pages/                      # 路由
   ├─ styles/global.css           # 设计令牌与通用样式
   └─ content.config.ts           # 内容集合定义
```

## 更新内容

### 发一篇技术日志

在 `src/content/blog/` 新建 `.md` 或 `.mdx` 文件，文件名即 URL 路径：

```markdown
---
title: 标题
description: 一句话摘要，会显示在列表和搜索结果里
pubDate: 2026-09-12
category: 技术日志
tags: [标签一, 标签二]
draft: false
---

正文……
```

`draft: true` 的文章不会进入构建产物。`assets/` 的图片可直接引用。

### 补全站点信息

所有待确认信息集中在 `src/data/`，搜索「待填写」即可定位：

| 文件 | 内容 |
|---|---|
| `src/data/site.ts` | 站点名、域名、邮箱、服务器地址与版本、社区入口 |
| `src/data/minecraft.ts` | 服务器特点、规则、加入教程、公告 |
| `src/data/ai.ts` | 实验室使命、实验方向、M1–M4 路线图、实验日志 |
| `src/data/projects.ts` | 项目卡片 |
| `src/data/roadmap.ts` | 发展路线图 |

服务器地址填入 `src/data/site.ts` 后，「服务器状态」组件会自动通过 mcsrvstat 查询并显示实时在线状态；留空则显示「待填写」且不发起请求。

### 重新生成分享图

```bash
node scripts/generate-og.mjs
```

## 部署

推送到 `main` 分支后，GitHub Actions 自动构建并发布到 GitHub Pages。

**注意部署顺序**（详情见交接文档第 6.3 节）：

1. 仓库 Settings → Pages → Source 必须是 **GitHub Actions**（不能是 `Deploy from a branch`）。
2. 自定义域名 `nwbbs.cn` 与 Enforce HTTPS 已在 Pages 设置中启用，无需在本仓库重复配置。
3. 推送后到 Actions 页面确认运行成功，再访问 `https://nwbbs.cn` 验证。

## 验收要点

- `npm run build` 无错误。
- 所有路由可访问：`/`、`/minecraft`、`/ai-lab`、`/projects`、`/blog`、`/blog/<slug>`、`/roadmap`、`/about`、`/contact`、`/404`。
- 移动端 375px 宽度无横向滚动。
- `public/CNAME` 内容为 `nwbbs.cn`，`astro.config.mjs` 的 `site` 为 `https://nwbbs.cn`，`base` 为 `/`。
