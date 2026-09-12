/** AI 实验室相关内容：使命、实验方向、模型路线图、实验日志入口。 */

export const labMission = {
  title: '让智能体在可验证的世界里长大',
  body: '游戏世界同时具备规则明确、状态可观测、反馈即时三个特点，是训练与评估智能体的理想场地。我们把《我的世界》当作实验台，把每一次实验过程与结论公开记录。',
} as const;

export const directions = [
  {
    icon: '◆',
    title: '智能体决策',
    desc: '在有限观测下做长程规划：采集、建造、协作等复合任务的分解与执行。',
  },
  {
    icon: '▲',
    title: '模型训练与微调',
    desc: '围绕小规模专用模型，探索低成本训练、指令微调与效果评测流程。',
  },
  {
    icon: '●',
    title: '工具调用与自动化',
    desc: '让模型可靠地操作外部工具，把「会说话」变成「能干活」。',
  },
  {
    icon: '■',
    title: '评测与开源',
    desc: '建立可复现的评测基准，实验数据与代码尽量开源，接受外部检验。',
  },
] as const;

/**
 * M1–M4 模型路线图。
 * status 取值：planned（规划中）/ in-progress（进行中）/ done（已完成）
 */
export const modelRoadmap = [
  {
    code: 'M1',
    name: '感知基线',
    status: 'planned',
    goal: '完成游戏状态的结构化感知，把原始画面与日志转成模型可用的观测。',
    deliverables: ['观测格式定义', '数据采集管线', '基线回放工具'],
  },
  {
    code: 'M2',
    name: '任务执行器',
    status: 'planned',
    goal: '在固定场景下稳定完成指定任务，例如采集、寻路与基础建造。',
    deliverables: ['任务描述规范', '执行成功率评测', '失败样本库'],
  },
  {
    code: 'M3',
    name: '协作智能体',
    status: 'planned',
    goal: '支持多智能体分工协作，处理需要配合才能完成的复合目标。',
    deliverables: ['协作协议', '多体评测场景', '成本与效率报告'],
  },
  {
    code: 'M4',
    name: '开放世界泛化',
    status: 'planned',
    goal: '把实验结论推广到未见过的新场景，验证泛化能力而非死记硬背。',
    deliverables: ['泛化评测集', '模型卡', '开源发布'],
  },
] as const;

export const experimentLogs = [
  {
    code: 'EXP-000',
    date: '2026-09-12',
    title: '实验环境搭建：观测格式 v0',
    summary:
      '确定第一版观测字段与采样频率，跑通从服务器到采集脚本的最小闭环。',
    status: '进行中',
  },
  {
    code: 'EXP-001',
    date: '待定',
    title: '基线模型选型对比',
    summary: '对比候选模型在指令遵循与工具调用上的表现，形成选型结论。',
    status: '规划中',
  },
] as const;
