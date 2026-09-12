/** Minecraft 服务器相关数据。连接信息统一由 site.minecraft 提供。 */

export const serverFeatures = [
  {
    title: '2024 年开服至今',
    desc: '世界长期运营、不轻易换周目，你的建筑和进度会被保留。',
  },
  {
    title: '插件生存',
    desc: '在原版生存的基础上加入实用插件，玩法更顺手，内核仍是生存。',
  },
  {
    title: '离线可进',
    desc: '没有正版账号也能玩，服务器用登录插件保护你的账号与财产。',
  },
  {
    title: 'AI 实验场',
    desc: '服务器同时是智能体实验环境，部分玩法会由 AI 参与驱动。',
  },
] as const;

export const rules = [
  '禁止使用任何形式的作弊客户端、外挂或自动化脚本。',
  '禁止恶意破坏他人建筑与容器，包括未经允许的拆改。',
  '禁止利用游戏漏洞获取不正当收益，发现漏洞请上报。',
  '禁止在公共频道发布广告、人身攻击与违法内容。',
  '尊重他人劳动成果，公共区域施工前请先在群里沟通。',
] as const;

export const joinSteps = [
  {
    title: '确认游戏版本',
    desc: '服务器版本为 1.21.1，版本不一致会无法连接。',
  },
  {
    title: '添加服务器',
    desc: '在「多人游戏 → 添加服务器」中填入 play.simpfun.cn:25570。',
  },
  {
    title: '进服先注册',
    desc: '第一次进入需要用 /register 密码 密码 注册，之后每次进服用 /login 密码 登录。',
  },
  {
    title: '阅读规则',
    desc: '出生点有告示与规则说明，动手之前先看一眼，避免误踩红线。',
  },
] as const;

export const announcements = [
  {
    date: '2024 年起',
    title: '服务器长期开放',
    body: 'Java 版 1.21.1，离线模式（带登录插件），地址 play.simpfun.cn:25570，随时可以进来。',
  },
] as const;
