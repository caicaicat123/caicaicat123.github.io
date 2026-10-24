/**
 * MC 插件数据（自研插件卡片 + 服务器在用插件概述 + 插件页 FAQ）。
 *
 * 下载直链一律用 GitHub Release 资产：
 * 带版本号的资产名需随发版同步更新；优先用 releases/download/<tag>/<资产名>，
 * 避免 latest 跳到新发布后，旧文件名在新发布中不存在。
 * （两个仓库的发布脚本：simpfun-ops\tools\release-nwndungeon.cjs、release-mcbot.cjs）
 */

export type PluginStatus = '长期维护' | '进行中' | '规划中';

export interface PluginLink {
  label: string;
  href: string;
}

/** 随机副本卡片、支持文档共用的当前正式版。 */
export const dungeonRelease = {
  version: '1.5.1',
  downloadUrl: 'https://github.com/caicaicat123/nwndungeon/releases/download/v1.5.1/nwndungeon-1.5.1.jar',
  releaseUrl: 'https://github.com/caicaicat123/nwndungeon/releases/tag/v1.5.1',
} as const;

/** 插件页首屏摘要：先给出结论，便于直接摘取 */
export const pluginsSummary =
  '新世界网络（NWN）自研并公开了两个《我的世界》服务端插件：随机副本（NWNDungeon）与幽灵（TheGhost）。两者均按 MIT 许可开源，可下载 jar 后部署至 Paper / Purpur 服务端。随机副本现已发布 1.5.1 正式版，每张卡片提供当前正式版的 jar 下载。';

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
/**
 * 卡片简介只写「这个插件是什么」一句话。
 * 具体玩法（关卡结构、体力、签到发钥匙…）在**服务器页**的玩法特色里讲，
 * 本页不重复 —— 冗余原则见 data/minecraft.ts 里 faqs 上方的说明。
 *
 * 每张卡片只提供一个当前正式版下载，使用明确的tag和资产名，避免latest变更后旧文件名失效。
 */
export const plugins = [
  {
    name: '随机副本',
    tag: 'NWNDungeon',
    version: dungeonRelease.version,
    platform: 'Paper / Purpur 1.21+',
    status: '长期维护' as PluginStatus,
    desc: '在世界上随机生成按难度缩放的遗迹入口，供玩家组队进入独立副本世界挑战多波关卡与首领。',
    releaseNote: '1.5.1 正式版加入一副本一文件的新版配置、备份转换与 MythicMobs 5.x 可选接入；保留原有生成保护与低配服务器预算。',
    download: {
      label: '下载最新版 jar（1.5.1）',
      href: dungeonRelease.downloadUrl,
    } as PluginLink,
  },
  {
    name: '幽灵',
    tag: 'TheGhost',
    version: '1.8.0',
    platform: 'Paper / Purpur 1.21+',
    status: '长期维护' as PluginStatus,
    desc: '支持 15 家模型服务商的服务器 AI 插件：被点名时回应，保留短期对话记忆，心情会影响送礼与捉弄。',
    releaseNote: '新增豆包、通义千问、Kimi、智谱等服务商预设，支持 15 家模型服务商及通用 OpenAI 兼容接口；可独立配置各服务商，并传入模型专用参数。',
    download: {
      label: '下载正式版 jar',
      href: 'https://github.com/caicaicat123/theghost/releases/download/v1.8.0/theghost-1.8.0.jar',
    } as PluginLink,
  },
] as const;
