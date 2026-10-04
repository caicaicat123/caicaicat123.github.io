/**
 * MC 插件数据（自研插件卡片 + 服务器在用插件概述 + 插件页 FAQ）。
 *
 * 下载直链一律用 GitHub Release 资产：
 * `releases/latest/download/<资产名>` —— 只要资产名保持 `<仓库>-<版本>.jar` 的命名规则，
 * 以后发新 Release **不需要回来改站点**；版本号只在卡片上显示，发版时同步改 `version` 字段。
 * （两个仓库的发布脚本：simpfun-ops\tools\release-nwndungeon.cjs、release-mcbot.cjs）
 */

export type PluginStatus = '长期维护' | '进行中' | '规划中';

export interface PluginLink {
  label: string;
  href: string;
}

/** 插件页首屏摘要：先给出结论，便于直接摘取 */
export const pluginsSummary =
  '新世界网络（NWN）自研并公开了两个《我的世界》服务端插件：随机副本（NWNDungeon）与幽灵（TheGhost）。两者均按 MIT 许可开源，可下载 jar 后部署至 Paper / Purpur 1.21 及以上服务端；页面上每个「下载 jar」按钮均指向对应 GitHub 仓库的最新 Release 资产。';

/**
 * 两个自研插件共有的安装前提。
 * **许可那一条不在这里** —— 它由页面下方的「这些插件开源吗？」一节负责，
 * 这件事在插件页只出现一次（2026-10-04 冗余清理）。
 */
export const pluginRequirements = [
  '服务端：Paper 或 Purpur 1.21 及以上（插件 API 版本为 1.21）',
  '运行环境：JDK 21 及以上',
  '安装：将 jar 放入服务端的 plugins/ 目录，随后重启服务器',
  '升级：替换 jar 后重启；配置改动可通过插件自带的重载指令生效',
] as const;

/**
 * 插件页常见问题。
 * 冗余原则：卡片（是什么 / 版本 / 适用服务端 / 下载）、部署条件（装的条件与步骤）、
 * 开源许可（MIT 与权利）三节已经回答过的，不再在这里重复提问。
 * 原先 10 问里有 7 问属于这种重复，已删；只留卡片与正文答不了的。
 */
export const pluginFaqs = [
  {
    q: '这两个插件可以用在自己的服务器上吗？可以商用吗？',
    a: '可以。两个插件均按 MIT 许可公开，允许自由使用、修改与二次开发，亦可用于商业用途，仅需保留版权声明；不要求在网站上署名，加入本站服务器也并非使用前提。',
  },
  {
    q: '插件支持哪些服务端版本，会跟着游戏更新吗？',
    a: '插件按 1.21 的 API 编写，可在 1.21 及以上版本运行。当《我的世界》发布新版本并出现不兼容情况时，我们会跟进修复；更新与修复记录均写入各仓库的 CHANGELOG。',
  },
  {
    q: '插件的中文说明和指令表在哪里？',
    a: '各仓库的 README 中均包含完整的指令表、权限节点与配置说明；本页也提供了两个插件的功能概述。如需反馈问题，可在 GitHub 提交 Issue，或在 QQ 群中告知我们。',
  },
] as const;

/** 服务器上在用的其他插件（第三方，分类概述） */
export const serverPluginCategories = [
  {
    title: '保护与回滚',
    desc: '领地保护（Residence）用于圈定自有区域并逐项设置成员权限；方块记录（CoreProtect）记录方块的放置与破坏，被破坏的建筑可按时间点回滚还原。',
  },
  {
    title: '经济与交易',
    desc: '统一货币（Vault）对接箱子商店（QuickShop-Hikari）与全球市场（SweetPlayerMarket），玩家间的买卖无需在公共频道议价。',
  },
  {
    title: '成长与奖励',
    desc: '每日签到（LiteSignIn）发放抽奖箱钥匙，六个抽奖箱（CrazyCrates）提供长期目标；奖励内容与中奖概率均由配置文件定义，可自行核算。',
  },
  {
    title: '体验与兼容',
    desc: '跨版本兼容（ViaVersion / ViaBackwards / ViaRewind）、聊天与计分板（TAB）、皮肤同步（SkinsRestorer）、坐下与表情（GSit）、离线登录（AuthMe）、菜单（DeluxeMenus）、状态与占位符（PlaceholderAPI）、性能诊断（spark）等。',
  },
] as const;

/**
 * 卡片简介只写「这个插件是什么」一句话。
 * 具体玩法（关卡结构、体力、签到发钥匙…）在**服务器页**的玩法特色里讲，
 * 本页不重复 —— 冗余原则见 data/minecraft.ts 里 faqs 上方的说明。
 */
export const plugins = [
  {
    name: '随机副本',
    tag: 'NWNDungeon',
    version: '1.4.12',
    platform: 'Paper / Purpur 1.21+',
    status: '长期维护' as PluginStatus,
    desc: '在世界上随机生成按难度缩放的遗迹入口，供玩家组队进入独立副本世界挑战多波关卡与首领。',
    download: {
      label: '下载 jar',
      href: 'https://github.com/caicaicat123/nwndungeon/releases/latest/download/nwndungeon-1.4.12.jar',
    } as PluginLink,
  },
  {
    name: '幽灵',
    tag: 'TheGhost',
    version: '1.5.2',
    platform: 'Paper / Purpur 1.21+',
    status: '长期维护' as PluginStatus,
    desc: '运行于服务器聊天栏的 AI 插件：仅在收到点名时回应，会保留最近若干轮对话上下文。',
    download: {
      label: '下载 jar',
      href: 'https://github.com/caicaicat123/theghost/releases/latest/download/theghost-1.5.2.jar',
    } as PluginLink,
  },
] as const;
