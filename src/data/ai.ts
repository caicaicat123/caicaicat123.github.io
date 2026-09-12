/**
 * AI 实验室内容：稷下（Jixia）项目。
 *
 * 定位：人文社科，聚焦哲学、心理学、经济学。
 * 用途：为世界政治经济提供预测指南——给依据、给情景、标注不确定性，而不是抛结论。
 * 当前版本：Jixia-1.0（开发中）
 */

export const labMission = {
  title: '稷下 Jixia：为世界政治经济提供预测指南',
  body: '稷下取自战国时期齐国的稷下学宫——百家争鸣的学术中心。我们把哲学、心理学、经济学的解释框架放在一起，让模型在多种视角下审视同一个问题。它不给武断结论，而是给出推演过程、依据来源，以及不同情景下的可能走向。',
} as const;

export const projectFacts = {
  name: '稷下',
  nameEn: 'Jixia',
  version: 'Jixia-1.0',
  versionNote: '开发中',
  domains: ['哲学', '心理学', '经济学'],
  purpose: '为世界政治经济提供预测指南',
  principles: [
    '给依据，不给断言：每条判断都能追溯到来源与推理链。',
    '给情景，不给答案：说明在什么条件下可能走向哪几种局面。',
    '标注不确定性：信息不足时明确说不知道，而不是编一个合理的故事。',
  ],
} as const;

export const directions = [
  {
    icon: '◆',
    title: '哲学',
    desc: '概念辨析、论证结构拆解、思想史脉络追踪——先把话说清楚，再谈对错。',
  },
  {
    icon: '▲',
    title: '心理学',
    desc: '个体与群体的决策偏差、动机与情绪如何影响判断，尤其是集体非理性的形成。',
  },
  {
    icon: '●',
    title: '经济学',
    desc: '激励结构、周期与政策传导，理清变量之间的因果链而不是相关性堆砌。',
  },
  {
    icon: '■',
    title: '预测指南',
    desc: '把三个领域的视角合成一份推演：依据、情景分支、触发条件与不确定性标识。',
  },
] as const;

/**
 * 稷下路线图。
 * status 取值：planned（规划中）/ in-progress（进行中）/ done（已完成）
 */
export const modelRoadmap = [
  {
    code: 'M1',
    name: '知识底座与数据管线',
    status: 'in-progress' as const,
    goal: '建立哲学、心理学、经济学三大领域的语料与知识底座，跑通数据处理管线。',
    deliverables: ['领域语料库', '清洗与构造脚本', '数据统计报告'],
  },
  {
    code: 'M2',
    name: '领域推理基座',
    status: 'planned' as const,
    goal: '在开源基座上完成领域微调，掌握概念辨析与论证结构分析，形成 Jixia-1.0 权重。',
    deliverables: ['领域指令数据集', '论证分析评测集', '模型卡 v1'],
  },
  {
    code: 'M3',
    name: '政治经济推演与预测',
    status: 'planned' as const,
    goal: '把领域知识用于世界政治经济的形势推演，输出可追溯、可检验的分析。',
    deliverables: ['情景推演框架', '预测评测方法', '公开推演案例'],
  },
  {
    code: 'M4',
    name: '新路径探索',
    status: 'planned' as const,
    goal: '长期目标：探索实现 AI 技术的新途径。方向待定，取决于前三阶段的实验结论。',
    deliverables: ['方向论证', '原型验证', '结论公开'],
  },
] as const;

export const experimentLogs = [
  {
    code: 'EXP-000',
    date: '2026-09-12',
    title: '稷下项目立项：命名、定位与边界',
    summary:
      '确定模型名为稷下（Jixia），版本基线 Jixia-1.0；锁定哲学、心理学、经济学三大领域，并确立「给依据、给情景、标不确定性」的输出原则。',
    status: '进行中',
  },
  {
    code: 'EXP-001',
    date: '待定',
    title: '三大领域语料范围界定',
    summary: '明确哲学、心理学、经济学各要收录哪些来源，产出第一版语料清单与统计报告。',
    status: '规划中',
  },
] as const;
