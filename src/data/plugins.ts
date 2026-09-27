/**
 * MC 插件卡片数据。
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
