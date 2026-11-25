/**
 * One-time (re-runnable) content migration: pushes everything from a JSON dump
 * of the old static data into Sanity, uploading every image as a Sanity asset.
 * Usage: SANITY_API_WRITE_TOKEN=... node scripts/migrate-content.mjs data.json messages-dir
 * Documents use deterministic _ids, so re-running updates in place.
 */
import { createClient } from '@sanity/client';
import fs from 'node:fs';
import path from 'node:path';

const [dataFile, msgDir] = process.argv.slice(2);
const token = process.env.SANITY_API_WRITE_TOKEN;
if (!token) throw new Error('SANITY_API_WRITE_TOKEN missing');
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'mrjotrl0',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-10-01',
  token,
  useCdn: false
});
const d = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
const cacheFile = '/tmp/kfo-asset-cache.json';
const cache = fs.existsSync(cacheFile) ? JSON.parse(fs.readFileSync(cacheFile, 'utf8')) : {};
const FALLBACK = {
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80':
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80'
};

async function upload(url, kind = 'image') {
  const real = FALLBACK[url] || url;
  if (cache[real]) return cache[real];
  const res = await fetch(real);
  if (!res.ok) throw new Error(`download ${res.status} ${real}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const filename = decodeURIComponent(path.basename(new URL(real).pathname)) || 'file';
  const asset = await client.assets.upload(kind, buf, {
    filename: /\.[a-z0-9]+$/i.test(filename) ? filename : filename + (kind === 'image' ? '.jpg' : '')
  });
  cache[real] = asset._id;
  fs.writeFileSync(cacheFile, JSON.stringify(cache));
  return asset._id;
}
async function pool(items, n, fn) {
  let i = 0;
  await Promise.all(
    Array.from({ length: n }, async () => {
      while (i < items.length) {
        const my = i++;
        for (let t = 0; ; t++) {
          try { await fn(items[my]); break; } catch (e) { if (t >= 3) throw e; await new Promise((r) => setTimeout(r, 1500)); }
        }
      }
    })
  );
}
// 1. upload all unique image URLs
const urls = new Set();
const pdf = d.assets.companyProfilePdf;
(function walk(o) {
  if (Array.isArray(o)) o.forEach(walk);
  else if (o && typeof o === 'object') Object.values(o).forEach(walk);
  else if (typeof o === 'string' && /^https:\/\/(kfoco\.com|images\.unsplash\.com)\//.test(o) && o !== pdf) urls.add(o);
})(d);
await pool([...urls], 6, (u) => upload(u));
await upload(pdf, 'file');
console.log('assets uploaded:', Object.keys(cache).length);

const ref = (u) => ({ _type: 'image', asset: { _type: 'reference', _ref: cache[FALLBACK[u] || u] } });
const refs = (arr) => arr.map((u, i) => ({ ...ref(u), _key: 'i' + i }));
const keyed = (arr) => arr.map((v, i) => ({ _key: 'k' + i, ...v }));
const docs = [];
const add = (doc) => docs.push(doc);
const a = d.assets;
const slugOf = (s) => ({ _type: 'slug', current: s });

add({
  _id: 'siteSettings', _type: 'siteSettings',
  name: d.site.name, shortName: d.site.shortName, phone: d.site.phone,
  whatsapp: d.site.whatsapp, email: d.site.email, address: d.site.address, city: d.site.city,
  socials: d.site.socials.map((s, i) => ({ _key: 's' + i, ...s })),
  logo: ref(a.logo),
  companyProfilePdf: { _type: 'file', asset: { _type: 'reference', _ref: cache[pdf] } },
  heroSlides: refs([a.hero.slide1, a.hero.slide2, a.hero.slide3]),
  aboutImage: ref(a.about.main), ctaBackground: ref(a.cta.background), mapImage: ref(a.map.placeholder),
  pageHeaders: Object.fromEntries(Object.entries(a.pageHeaders).map(([k, v]) => [k, ref(v)]))
});
d.categories.forEach((c, i) =>
  add({ _id: `category-${c.slug}`, _type: 'category', slug: slugOf(c.slug), title: c.title, caption: c.caption, image: ref(c.image), emphasis: !!c.emphasis, order: i })
);
d.projects.forEach((p, i) =>
  add({
    _id: `project-${p.slug}`.slice(0, 120), _type: 'project', slug: slugOf(p.slug), title: p.title,
    category: { _type: 'reference', _ref: `category-${p.category}` },
    location: p.location, year: p.year, client: p.client, area: p.area, services: p.services, status: p.status,
    excerpt: p.excerpt, body: p.body, images: refs(p.images), featured: !!p.featured, order: i
  })
);
const withId = (type, list) => list.forEach((s, i) => add({ _id: `${type}-${s.id}`, _type: type, itemId: s.id, number: s.number, title: s.title, description: s.description, order: i }));
withId('homeService', d.services);
withId('service', d.serviceList);
withId('processStep', d.processSteps);
d.events.forEach((e, i) =>
  add({ _id: `event-${e.slug}`.slice(0, 120), _type: 'event', slug: slugOf(e.slug), title: e.title, excerpt: e.excerpt, body: e.body, date: e.date, place: e.place, image: ref(e.image), gallery: refs(e.gallery) })
);
d.articles.forEach((x) =>
  add({ _id: `article-${x.slug}`, _type: 'article', slug: slugOf(x.slug), title: x.title, category: x.category, excerpt: x.excerpt, date: x.date, readTime: x.readTime, type: x.type })
);
d.knowledgeVideos.forEach((t, i) => add({ _id: `knowledgeVideo-${i + 1}`, _type: 'knowledgeVideo', title: t, order: i }));
d.team.forEach((m, i) => add({ _id: `teamMember-${i + 1}`, _type: 'teamMember', ...m, order: i }));
d.clients.forEach((c, i) => add({ _id: `client-${i + 1}`, _type: 'client', name: c.name, logo: ref(c.src), order: i }));
d.qualifications.forEach((q, i) => add({ _id: `qualification-${i + 1}`, _type: 'qualification', title: q.title, image: ref(q.image), order: i }));
d.stats.forEach((s, i) => add({ _id: `stat-${s.id}`, _type: 'stat', itemId: s.id, value: s.value, suffix: s.suffix, label: s.label, isOrdinal: !!s.isOrdinal, order: i }));
d.timeline.forEach((m, i) => add({ _id: `milestone-${i + 1}`, _type: 'milestone', year: m.year, title: m.title, text: m.text, order: i }));

// UI text groups from messages/{en,ar}.json
const en = JSON.parse(fs.readFileSync(path.join(msgDir, 'en.json'), 'utf8'));
const ar = JSON.parse(fs.readFileSync(path.join(msgDir, 'ar.json'), 'utf8'));
const flat = (o, p = '', out = {}) => { for (const [k, v] of Object.entries(o)) typeof v === 'object' ? flat(v, p + k + '.', out) : (out[p + k] = v); return out; };
const fe = flat(en), fa = flat(ar);
const groups = {};
for (const key of Object.keys(fe)) {
  const parts = key.split('.');
  const nested = parts.length > 2 && (parts[0] === 'pages' || parts[0] === 'meta');
  const g = nested ? parts.slice(0, 2).join('.') : parts[0];
  const rest = key.slice(g.length + 1) || parts[0];
  (groups[g] ||= []).push({ _key: 't' + (groups[g]?.length ?? 0), _type: 'uiText', key: key, en: fe[key], ar: fa[key] ?? '' });
}
const missingAr = Object.keys(fe).filter((k) => !(k in fa));
const extraAr = Object.keys(fa).filter((k) => !(k in fe));
console.log('ui keys', Object.keys(fe).length, 'missing ar', missingAr, 'extra ar', extraAr);
for (const [g, items] of Object.entries(groups)) add({ _id: `uiTextGroup-${g.replace(/\./g, '-')}`, _type: 'uiTextGroup', group: g, items });

let tx = client.transaction(), n = 0;
for (const doc of docs) { tx = tx.createOrReplace(doc); if (++n % 40 === 0) { await tx.commit(); tx = client.transaction(); } }
await tx.commit();
console.log('documents written:', docs.length);
