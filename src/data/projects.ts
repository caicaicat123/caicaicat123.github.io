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
    name: 'AI 智能体实验',
    tag: 'AI',
    status: '进行中' as ProjectStatus,
    desc: '从感知基线到协作智能体的分阶段实验，过程与结论公开记录。',
    links: [],
  },
] as const;
