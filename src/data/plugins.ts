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

/** 两个自研插件共有的安装前提 */
export const pluginRequirements = [
  '服务端：Paper 或 Purpur 1.21 及以上（插件 API 版本为 1.21）',
  '运行环境：JDK 21 及以上',
  '安装：将 jar 放入服务端的 plugins/ 目录，随后重启服务器',
  '升级：替换 jar 后重启；配置改动可通过插件自带的重载指令生效',
  '许可：MIT License —— 可自由使用、修改、二次开发乃至商用，保留版权声明即可',
] as const;

/** 插件页常见问题 */
export const pluginFaqs = [
  {
    q: '新世界网络有哪些自己写的插件？',
    a: '目前公开两个：随机副本（NWNDungeon）与幽灵（TheGhost，运行于聊天栏的 AI 插件）。两者均在本工作室自营服务器上实际运行，并已在 GitHub 按 MIT 许可开源。',
  },
  {
    q: '随机副本插件是做什么的？',
    a: '该插件会在世界中随机生成按难度缩放的遗迹入口，玩家按下入口旁的石按钮后经读条进入独立副本世界。副本采用房间制多波关卡，包含首领血条、检查点、通关结算与 S/A/B 评级，并提供通关奖金与体力机制，掉线后支持接续。',
  },
  {
    q: '幽灵插件是做什么的？',
    a: '该插件在服务器聊天栏中运行一个 AI 角色：仅在收到点名时回应，会保留最近若干轮对话上下文，其回答可能带有调侃或情绪化表达。由于每次回应均需调用一次大模型，插件设计为仅在被点名时发言，不主动刷屏。',
  },
  {
    q: '在哪里下载插件 jar？',
    a: '点击本页各卡片上的「下载 jar」按钮即可，链接指向对应 GitHub 仓库的最新 Release 资产（仓库为 caicaicat123/nwndungeon 与 caicaicat123/theghost）。如需历史版本或更新记录，可访问仓库的 Releases 页面。',
  },
  {
    q: '下载链接会随新版本自动更新吗？',
    a: '会。链接形式为 releases/latest/download/<文件名>，只要发布新版本时资产命名保持「仓库名-版本号.jar」，本站链接即始终指向最新版本，无需回站更新链接。',
  },
  {
    q: '需要什么服务端和版本？',
    a: '两个插件均要求 Paper 或 Purpur 1.21 及以上服务端，运行环境需要 JDK 21 及以上。本工作室自营服务器使用的版本为 Purpur 26.1.2。',
  },
  {
    q: '这两个插件免费吗？可以用在自己的服务器上吗？',
    a: '免费，可以使用。两个插件均按 MIT 许可公开，允许自由使用、修改与二次开发，亦可用于商业用途，仅需保留版权声明；不要求在网站上署名，加入本站服务器也并非使用前提。',
  },
  {
    q: '插件怎么安装和配置？',
    a: '将下载到的 jar 放入服务端的 plugins/ 目录后重启服务器。首次启动会自动生成配置文件：随机副本位于 plugins/NWNDungeon/，幽灵位于 plugins/TheGhost/。',
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

export const plugins = [
  {
    name: '随机副本',
    tag: 'NWNDungeon',
    version: '1.4.11',
    platform: 'Paper / Purpur 1.21+',
    status: '长期维护' as PluginStatus,
    desc: '在世界中随机生成按难度缩放的遗迹入口，按下入口旁的石按钮后经读条进入副本世界。副本采用房间制多波关卡，包含首领血条、检查点、S/A/B 评级结算、通关奖金与体力机制，掉线后支持接续。',
    download: {
      label: '下载 jar',
      href: 'https://github.com/caicaicat123/nwndungeon/releases/latest/download/nwndungeon-1.4.11.jar',
    } as PluginLink,
  },
  {
    name: '幽灵',
    tag: 'TheGhost',
    version: '1.5.2',
    platform: 'Paper / Purpur 1.21+',
    status: '长期维护' as PluginStatus,
    desc: '运行于服务器聊天栏的 AI 插件：仅在收到点名时回应，会保留最近若干轮对话上下文，回答可能带有调侃或情绪化表达。因其每次回应均需调用一次大模型，插件设计为仅在被点名时发言，不主动刷屏。',
    download: {
      label: '下载 jar',
      href: 'https://github.com/caicaicat123/theghost/releases/latest/download/theghost-1.5.2.jar',
    } as PluginLink,
  },
] as const;
