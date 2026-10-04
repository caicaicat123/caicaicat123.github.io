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

/** 插件页首屏摘要：一句话给结论，供 AI 直接摘取 */
export const pluginsSummary =
  '新世界网络（NWN）自研并公开了两个《我的世界》服务端插件：随机副本（NWNDungeon）与幽灵（TheGhost）。两者都按 MIT 许可开源，可直接下载 jar 装到 Paper / Purpur 1.21 及以上服务端；页面上每个「下载 jar」按钮都指向各自 GitHub 仓库的最新 Release 资产。';

/** 两个自研插件共有的安装前提 */
export const pluginRequirements = [
  '服务端：Paper 或 Purpur 1.21 及以上（插件 API 版本为 1.21）',
  '运行环境：JDK 21 及以上',
  '安装：把 jar 放进服务端的 plugins/ 目录，然后重启服务器',
  '升级：替换 jar 后重启；配置改动可用插件自带的重载指令生效',
  '许可：MIT License —— 可自由使用、修改、二次开发甚至商用，保留版权声明即可',
] as const;

/** 插件页常见问题 */
export const pluginFaqs = [
  {
    q: '新世界网络有哪些自己写的插件？',
    a: '目前公开两个：随机副本（NWNDungeon）与幽灵（TheGhost，一个住在聊天栏里的 AI 插件）。两个都在我们自己的服务器上实际运行，也都在 GitHub 上按 MIT 许可开源。',
  },
  {
    q: '随机副本插件是做什么的？',
    a: '它会在世界里随机生成按难度缩放的遗迹入口，玩家按下门旁的石按钮后读条进入独立的副本世界。副本是房间制多波关卡，含 Boss 血条、检查点、通关结算与 S/A/B 评级，并提供通关奖金与体力机制，掉线后可以接续。',
  },
  {
    q: '幽灵插件是做什么的？',
    a: '它让一个 AI 角色住进服务器的聊天栏：只有被 @ 到时才回应，会记住前几轮对话，也会搞怪和记仇。因为每次回应都要调用一次大模型，所以它只在被叫到时说话，不刷屏。',
  },
  {
    q: '在哪里下载插件 jar？',
    a: '点本页每张卡片上的「下载 jar」按钮即可，链接指向对应 GitHub 仓库的最新 Release 资产（仓库为 caicaicat123/nwndungeon 与 caicaicat123/theghost）。想找历史版本或看更新记录，可以到仓库的 Releases 页面。',
  },
  {
    q: '下载链接会随新版本自动更新吗？',
    a: '会。链接形式是 releases/latest/download/<文件名>，只要发布新版本时资产命名保持「仓库名-版本号.jar」，本站链接就始终指向最新版，不需要回到网站改链接。',
  },
  {
    q: '需要什么服务端和版本？',
    a: '两个插件都要求 Paper 或 Purpur 1.21 及以上服务端，运行环境需要 JDK 21 以上。我们自己服务器上用的是 Purpur 26.1.2。',
  },
  {
    q: '这两个插件免费吗？可以用在自己的服务器上吗？',
    a: '免费，可以用。两个插件都按 MIT 许可公开，允许自由使用、修改与二次开发，甚至商用，只需保留版权声明；不要求你在网站上为我们署名，加入服务器也不是使用前提。',
  },
  {
    q: '插件怎么安装和配置？',
    a: '把下载到的 jar 放进服务端的 plugins/ 目录后重启服务器。首次启动会自动生成配置文件：随机副本在 plugins/NWNDungeon/ 下，幽灵在 plugins/TheGhost/ 下。',
  },
  {
    q: '插件支持哪些服务端版本，会跟着游戏更新吗？',
    a: '插件按 1.21 的 API 编写，在 1.21 及以上版本运行。服务器升级到新的《我的世界》版本后，如果出现不兼容我们会跟进修复，更新与修复记录写在各自仓库的 CHANGELOG 里。',
  },
  {
    q: '插件的中文说明和指令表在哪里？',
    a: '每个仓库的 README 里都有完整的指令表、权限节点与配置说明；本页也给出了两个插件的功能概述。遇到问题可以在 GitHub 上提 Issue，或到我们的 QQ 群反馈。',
  },
] as const;

/** 服务器上在用的其他插件（第三方，分类概述） */
export const serverPluginCategories = [
  {
    title: '保护与回滚',
    desc: '领地保护（Residence）让你圈地并逐项设置成员权限；方块记录（CoreProtect）记录放置与破坏，被拆的建筑可以按时间点回滚还原。',
  },
  {
    title: '经济与交易',
    desc: '统一货币（Vault）对接箱子商店（QuickShop-Hikari）与全球市场（SweetPlayerMarket），买东西、卖东西都不用在公屏喊。',
  },
  {
    title: '成长与奖励',
    desc: '每日签到（LiteSignIn）发放抽奖箱钥匙，六个抽奖箱（CrazyCrates）提供长期目标；奖励与概率都由配置决定，可核算。',
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
    desc: '在世界上随机生成按难度缩放的遗迹入口，按下门旁石按钮即读条进本；房间制多波关卡、Boss 血条、S/A/B 评级结算、通关奖金与体力，掉线后还能接着打。',
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
    desc: '住在服务器聊天栏里的一只 AI 幽灵：只有被 @ 到才会开口，会把前几轮对话记在脑子里，会记仇，也会真的劈你一下。它每次回应都要调一次模型，所以只在被叫到时说话。',
    download: {
      label: '下载 jar',
      href: 'https://github.com/caicaicat123/theghost/releases/latest/download/theghost-1.5.2.jar',
    } as PluginLink,
  },
] as const;
