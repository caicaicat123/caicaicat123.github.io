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
    name: '新世界服务器',
    tag: 'Minecraft',
    status: '长期维护' as ProjectStatus,
    desc: '2024 年开服、长期运营的《我的世界》插件生存服，全版本客户端可进。',
    links: [],
  },
  {
    name: '钢铁雄心 4 Mod',
    tag: 'MOD',
    status: '规划中' as ProjectStatus,
    desc: '正在筹备的《钢铁雄心 4》Mod。方向已定，具体方案制定中，确定后会在这里更新。',
    links: [],
  },
] as const;
