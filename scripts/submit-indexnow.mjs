/**
 * 把线上 sitemap 里的所有 URL 提交给 IndexNow（Bing / Yandex / Seznam / Naver）。
 *
 * 用法： node scripts/submit-indexnow.mjs
 *
 * 注意：
 * - key 必须能在 https://nwbbs.cn/<key>.txt 访问到（文件在 public/ 下），否则各引擎会返回 403。
 * - 发新文章或改了页面后跑一次即可，**不要频繁重复提交同一批 URL**，会被当成垃圾提交。
 */

const HOST = 'nwbbs.cn';
const KEY = '17bd031de4c2063cae05b6adbe12b6e8';
const SITEMAP = `https://${HOST}/sitemap-0.xml`;

const ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
  'https://search.seznam.cz/indexnow',
  'https://searchadvisor.naver.com/indexnow',
];

const res = await fetch(SITEMAP);
if (!res.ok) throw new Error(`sitemap 拉取失败：${res.status}`);
const xml = await res.text();
const urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
console.log(`从 sitemap 取到 ${urlList.length} 个 URL`);

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList,
});

for (const endpoint of ENDPOINTS) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body,
    });
    const ok = response.status === 200 || response.status === 202;
    console.log(`${endpoint} → ${response.status}${ok ? ' 提交成功' : ' 提交失败'}`);
  } catch (error) {
    console.log(`${endpoint} → 请求失败：${error.message}`);
  }
}
