/** 博客分类。新增分类后会自动生成对应的分类页。 */

export const blogCategories = [
  {
    slug: 'tech',
    name: '技术日志',
    desc: '搭建过程、选型取舍、踩坑记录与实验细节。',
  },
  {
    slug: 'ai-lab',
    name: 'AI 实验室',
    desc: '稷下（Jixia）项目的进展、实验记录与阶段性结论。',
  },
  {
    slug: 'humanities',
    name: '人文社科',
    desc: '技术之外：社会、历史、文化与思考。',
  },
  {
    slug: 'studio',
    name: '工作室动态',
    desc: '公告、进度与项目相关的说明。',
  },
] as const;

export function findCategory(name: string) {
  return blogCategories.find((item) => item.name === name);
}

export function findCategoryBySlug(slug: string) {
  return blogCategories.find((item) => item.slug === slug);
}
