/**
 * 友链。
 *
 * 新增一条就在这里加一行：`name` 用对方站点的正式名称（照其 `<title>` 或 `og:site_name` 写，
 * 不要自己编），`url` 用 https。
 * 页脚「相关」列只显示名称（一条细链接，不铺卡片）；`desc` 不显示，作为鼠标悬停时的 title 提示。
 * 渲染位置是页脚（`components/Footer.astro`），改这里即可，不需要动页面。
 */
export interface FriendLink {
  /** 站点正式名称 */
  name: string;
  /** 完整地址（含 https://） */
  url: string;
  /** 一句话介绍（只用于 title 提示） */
  desc: string;
}

export const friends: readonly FriendLink[] = [
  {
    name: 'yxzx.online',
    url: 'https://thisisaforum.dpdns.org',
    desc: '校园论坛：主吧讨论、自建吧、个人空间、经验成长与开发者后台。',
  },
];
