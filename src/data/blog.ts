/** 博客分类。新增分类后会自动生成对应的分类页。 */

export const blogCategories = [
  {
    slug: 'server',
    name: '服务器动态',
    desc: '新世界服务器的开服、维护、活动与公告。',
  },
  {
    slug: 'dev',
    name: '开发记录',
    desc: '插件、网站与 Mod 的开发过程和踩坑记录。',
  },
  {
    slug: 'notes',
    name: '随笔',
    desc: '技术之外的想法与记录。',
  },
] as const;

export function findCategory(name: string) {
  return blogCategories.find((item) => item.name === name);
}

export function findCategoryBySlug(slug: string) {
  return blogCategories.find((item) => item.slug === slug);
}
