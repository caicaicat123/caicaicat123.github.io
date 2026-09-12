/**
 * AI 实验室内容。
 * 当前目标：构建 nAI（new AI），对标 ChatGPT 3.5 的多轮对话与基础推理能力。
 * 长期目标：探索实现 AI 技术的新路径（方向待定）。
 */

export const labMission = {
  title: 'nAI：从零构建一个能对话、能推理的模型',
  body: 'nAI 是 new AI 的缩写，也是我们正在做的事：不依赖现成大模型套壳，从数据、训练到评测完整走一遍，先追平 ChatGPT 3.5 当年的多轮对话与基础推理水平。更远的目标是探索实现 AI 的新路径——方向待定，但过程会全部公开。',
} as const;

export const directions = [
  {
    icon: '◆',
    title: '自研模型训练',
    desc: '从语料清洗到训练与微调，把整条管线自己搭一遍，而不是只调用别人的接口。',
  },
  {
    icon: '▲',
    title: '对话能力',
    desc: '多轮对话的连贯性与指令遵循，目标是追平 ChatGPT 3.5 的日常使用体验。',
  },
  {
    icon: '●',
    title: '基础推理',
    desc: '短链逻辑、数学与代码理解，建立可复现的评测集，用数据说话。',
  },
  {
    icon: '■',
    title: '新路径探索',
    desc: '长期目标：寻找不同于当前主流范式的实现路径。方向待定，先做出基础能力再谈突破。',
  },
] as const;

/**
 * nAI 路线图。
 * status 取值：planned（规划中）/ in-progress（进行中）/ done（已完成）
 */
export const modelRoadmap = [
  {
    code: 'M1',
    name: '数据与训练管线',
    status: 'in-progress' as const,
    goal: '构建中文语料清洗流程，跑通从数据到模型权重的完整训练管线。',
    deliverables: ['语料清洗脚本', '训练管线跑通', '小规模基线模型'],
  },
  {
    code: 'M2',
    name: '对话基座',
    status: 'planned' as const,
    goal: '完成指令微调，具备稳定的多轮对话能力，对标 ChatGPT 3.5 的对话水准。',
    deliverables: ['指令微调数据集', '多轮对话评测', '模型卡 v1'],
  },
  {
    code: 'M3',
    name: '基础推理',
    status: 'planned' as const,
    goal: '在数学、逻辑与代码理解上具备短链推理能力，并建立可复现的评测标准。',
    deliverables: ['推理评测集', '对比报告', '公开实验日志'],
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
    title: 'nAI 项目启动：目标与边界',
    summary:
      '确定第一阶段目标——追平 ChatGPT 3.5 的多轮对话与基础推理，并划清「不套壳」的边界。',
    status: '进行中',
  },
  {
    code: 'EXP-001',
    date: '待定',
    title: '语料清洗与训练管线搭建',
    summary: '跑通从原始语料到可训练数据集的流程，产出第一版清洗脚本与数据统计。',
    status: '规划中',
  },
] as const;
