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
  slogan: '在方块世界中，训练下一代智能体。',
  vision: '在方块世界中训练智能，在游戏环境中验证 AI。',
  description:
    '新世界网络（New World Network）是一家聚焦人工智能与游戏开发的独立工作室，运营《我的世界》服务器，并围绕服务器生态、游戏开发与 AI 智能体展开长期探索。',
  keywords: [
    '人工智能',
    '游戏开发',
    'Minecraft',
    '智能体',
    '开源',
    '模型',
    '实验日志',
  ],
  domain: 'nwbbs.cn',
  url: 'https://nwbbs.cn',
  github: 'https://github.com/caicaicat123',
  email: PLACEHOLDER,
  icp: PLACEHOLDER,

  // Minecraft 服务器信息（等待项目方提供）
  minecraft: {
    javaIp: PLACEHOLDER,
    bedrockIp: PLACEHOLDER,
    port: PLACEHOLDER,
    version: PLACEHOLDER,
    edition: 'Java 版 / 基岩版',
  },

  // 社区入口（等待项目方提供）
  community: {
    qq: PLACEHOLDER,
    discord: PLACEHOLDER,
  },
} as const;

export const nav = [
  { href: '/', label: '首页' },
  { href: '/minecraft', label: 'Minecraft' },
  { href: '/ai-lab', label: 'AI 实验室' },
  { href: '/projects', label: '项目' },
  { href: '/blog', label: '技术日志' },
  { href: '/roadmap', label: '路线图' },
  { href: '/about', label: '关于' },
  { href: '/contact', label: '联系' },
] as const;
