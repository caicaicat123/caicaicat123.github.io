/** 项目卡片数据。仓库链接在项目方确认后补充。 */

export type ProjectStatus = '进行中' | '规划中' | '长期维护';

export const projects = [
  {
    name: 'NWN 官方网站',
    tag: 'Web',
    status: '进行中' as ProjectStatus,
    desc: '就是你正在看的这个站点。Astro 静态构建，部署在 GitHub Pages。',
    links: [{ label: '源码仓库', href: 'https://github.com/caicaicat123/caicaicat123.github.io' }],
  },
  {
    name: 'Minecraft 服务器',
    tag: 'Game',
    status: '长期维护' as ProjectStatus,
    desc: '工作室的核心业务载体，也是 AI 实验的真实运行环境。',
    links: [],
  },
  {
    name: '稷下 Jixia',
    tag: 'AI',
    status: '进行中' as ProjectStatus,
    desc: '自研人文社科模型，聚焦哲学、心理学、经济学，为世界政治经济提供预测指南。当前版本 Jixia-1.0（开发中）。',
    links: [],
  },
] as const;
