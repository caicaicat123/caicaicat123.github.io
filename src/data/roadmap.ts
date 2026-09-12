/** 发展路线图。时间点待项目方确认后可细化。 */

export const roadmap = [
  {
    phase: '阶段一',
    period: '2026 Q3–Q4',
    title: '把门立起来',
    status: 'in-progress',
    items: ['官网上线与域名解析', '服务器信息与规则公开', '技术日志开始更新'],
  },
  {
    phase: '阶段二',
    period: '2027 Q1',
    title: '把实验室跑起来',
    status: 'planned',
    items: ['M1 感知基线完成', '实验日志形成稳定节奏', '评测流程可复现'],
  },
  {
    phase: '阶段三',
    period: '2027 Q2–Q3',
    title: '让智能体干活',
    status: 'planned',
    items: ['M2 任务执行器上线', '玩家可见的 AI 玩法试点', '数据与代码开源'],
  },
  {
    phase: '阶段四',
    period: '待定',
    title: '走向开放世界',
    status: 'planned',
    items: ['M3 协作智能体验证', 'M4 泛化评测', '社区共建机制成型'],
  },
] as const;
