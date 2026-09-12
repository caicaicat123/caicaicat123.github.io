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
    items: ['官网上线与域名解析', '服务器信息与规则公开', '稷下项目立项'],
  },
  {
    phase: '阶段三',
    period: '2027 起',
    title: '稷下 Jixia-1.0 成型',
    status: 'planned',
    items: ['知识底座与数据管线（M1）', '领域推理基座（M2）', '政治经济推演与预测（M3）'],
  },
  {
    phase: '阶段四',
    period: '待定',
    title: '探索 AI 的新路径',
    status: 'planned',
    items: ['方向论证（M4）', '原型验证', '结论公开'],
  },
] as const;
