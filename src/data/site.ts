/**
 * 站点级信息。所有需要项目方确认的内容统一放这里，
 * 值为「待填写」的字段会在页面上以提示样式呈现，不会被当成真实内容展示。
 */

export const PLACEHOLDER = '待填写';

export function isPlaceholder(value: string | undefined | null): boolean {
  return !value || value.trim() === '' || value.trim() === PLACEHOLDER;
}

export const site = {
  name: '新世界网络',
  nameEn: 'New World Network',
  shortName: 'NWN',
  slogan: '把游戏，当成可以亲手改写的世界。',
  vision: '一边运营《我的世界》服务器，一边开发《钢铁雄心 4》Mod。',
  description:
    '新世界网络（New World Network，简称 NWN）是一家独立工作室：运营一台 2024 年开服的《我的世界》插件生存服「新世界服务器」（NewWorldMC，简称 NWM），同时正在筹备《钢铁雄心 4》Mod 开发。',
  keywords: [
    'Minecraft',
    '我的世界',
    '钢铁雄心4',
    'Hearts of Iron IV',
    'HOI4',
    'Mod',
    '游戏开发',
    '游戏服务器',
    '插件',
  ],
  domain: 'nwbbs.cn',
  url: 'https://nwbbs.cn',
  github: 'https://github.com/caicaicat123',
  email: 'caicaicat123@gmail.com',
  author: '断了一只爪子的招财猫',
  startedAt: '2024',

  // 服务器命名：新世界服务器 · NewWorldMC · NWM
  server: {
    name: '新世界服务器',
    nameEn: 'NewWorldMC',
    shortName: 'NWM',
  },

  // Minecraft 服务器连接信息（Java 版插件生存服，离线模式 + 登录插件）
  minecraft: {
    javaIp: 'play.simpfun.cn',
    port: '25570',
    version: '26.1.2',
    clients: '1.7 至 26.1 均可进入',
    mode: '离线模式 · 带登录插件',
    openedAt: '2024 年开服，长期运营至今',
  },

  // 社区入口
  community: {
    qq: '884036851',
  },
} as const;

export const nav = [
  { href: '/', label: '首页' },
  { href: '/minecraft', label: 'Minecraft' },
  { href: '/mod', label: '钢铁雄心4' },
  { href: '/projects', label: '项目' },
  { href: '/roadmap', label: '路线图' },
  { href: '/about', label: '关于' },
  { href: '/contact', label: '联系' },
] as const;
