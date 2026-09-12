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
  slogan: '在百家争鸣中，推演世界的走向。',
  vision: '以哲学的追问、心理学的洞察、经济学的推演，理解世界政治经济的走向。',
  description:
    '新世界网络（New World Network）是一家聚焦人工智能与游戏开发的独立工作室，运营一台《我的世界》Java 版插件生存服务器，并正在构建自研人文社科模型稷下（Jixia）——聚焦哲学、心理学、经济学，为世界政治经济提供预测指南。',
  keywords: [
    '人工智能',
    '稷下',
    'Jixia',
    '哲学',
    '心理学',
    '经济学',
    '预测',
    'Minecraft',
    '开源',
    '模型',
  ],
  domain: 'nwbbs.cn',
  url: 'https://nwbbs.cn',
  github: 'https://github.com/caicaicat123',
  email: 'caicaicat123@gmail.com',
  author: '断了一只爪子的招财猫',
  startedAt: '2024',

  // Minecraft 服务器（Java 版插件生存服，离线模式 + 登录插件）
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
  { href: '/ai-lab', label: 'AI 实验室' },
  { href: '/projects', label: '项目' },
  { href: '/blog', label: '博客' },
  { href: '/roadmap', label: '路线图' },
  { href: '/about', label: '关于' },
  { href: '/contact', label: '联系' },
] as const;
