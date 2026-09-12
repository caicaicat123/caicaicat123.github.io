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
    items: ['官网上线与域名解析', '服务器信息与规则公开', 'nAI 项目启动'],
  },
  {
    phase: '阶段三',
    period: '2027 起',
    title: 'nAI 追平 ChatGPT 3.5',
    status: 'planned',
    items: ['训练管线跑通（M1）', '多轮对话达标（M2）', '基础推理与评测（M3）'],
  },
  {
    phase: '阶段四',
    period: '待定',
    title: '寻找 AI 的新路径',
    status: 'planned',
    items: ['方向论证（M4）', '原型验证', '结论公开'],
  },
] as const;
