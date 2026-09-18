/** 发展路线图。 */

export const roadmap = [
  {
    phase: '阶段一',
    period: '2024 年',
    title: '服务器开起来',
    status: 'done',
    items: ['Java 版插件生存服上线', '社区群建立', '世界长期运营'],
  },
  {
    phase: '阶段二',
    period: '2026 Q3–Q4',
    title: '把门立起来',
    status: 'in-progress',
    items: ['官网上线与域名解析', '服务器信息与规则公开', '官网改版与内容整理'],
  },
  {
    phase: '阶段三',
    period: '待定',
    title: '钢铁雄心 4 Mod',
    status: 'planned',
    items: ['确定 Mod 内容方向', '制定开发计划', '发布第一个版本'],
  },
  {
    phase: '阶段四',
    period: '待定',
    title: '再往后的方向',
    status: 'planned',
    items: ['暂不预设，先把前面三阶段走完'],
  },
] as const;
