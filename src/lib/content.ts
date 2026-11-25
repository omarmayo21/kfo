import { cache } from 'react';
import { projectId, dataset, apiVersion } from '@/sanity/env';
import type { Content, Project, SocialId } from './types';

/**
 * Single content gateway: every piece of site content comes from Sanity (GROQ over HTTP).
 * Cached with ISR (revalidate every 60s) and the "sanity" cache tag, so editors' changes
 * appear without a redeploy.
 */
const img = (f: string) => `${f}.asset->url`;

const QUERY = `{
  "settings": *[_id == "siteSettings"][0]{
    name, shortName, phone, whatsapp, email, address, city,
    "socials": socials[]{id, label, href},
    "logo": ${img('logo')},
    "pdf": companyProfilePdf.asset->url,
    "heroSlides": heroSlides[].asset->url,
    "about": ${img('aboutImage')}, "cta": ${img('ctaBackground')}, "map": ${img('mapImage')},
    "headers": pageHeaders{
      "about": ${img('about')}, "services": ${img('services')}, "projects": ${img('projects')},
      "clients": ${img('clients')}, "knowledge": ${img('knowledge')}, "events": ${img('events')}, "contact": ${img('contact')}
    }
  },
  "categories": *[_type == "category"] | order(order asc){ "slug": slug.current, title, caption, "image": ${img('image')}, emphasis },
  "projects": *[_type == "project"] | order(order asc){
    "slug": slug.current, title, "category": category->slug.current, location, year, client, area, services, status,
    excerpt, body, "images": images[].asset->url, featured
  },
  "clients": *[_type == "client"] | order(order asc){ "id": _id, name, "src": ${img('logo')} },
  "team": *[_type == "teamMember"] | order(order asc){ name, role, experience, certificate, projects, bio, previous, email },
  "articles": *[_type == "article"]{ "slug": slug.current, title, category, excerpt, date, readTime, type },
  "events": *[_type == "event"] | order(date desc){
    "slug": slug.current, title, excerpt, body, date, place, "image": ${img('image')}, "gallery": gallery[].asset->url
  },
  "services": *[_type == "homeService"] | order(order asc){ "id": itemId, number, title, description },
  "serviceList": *[_type == "service"] | order(order asc){ "id": itemId, number, title, description },
  "processSteps": *[_type == "processStep"] | order(order asc){ "id": itemId, number, title, description },
  "stats": *[_type == "stat"] | order(order asc){ "id": itemId, value, suffix, label, isOrdinal },
  "timeline": *[_type == "milestone"] | order(order asc){ year, title, text },
  "videos": *[_type == "knowledgeVideo"] | order(order asc){ title },
  "qualifications": *[_type == "qualification"] | order(order asc){ "id": _id, "image": ${img('image')}, title },
  "uiGroups": *[_type == "uiTextGroup"]{ items[]{key, en, ar} }
}`;

const dedupeOrder = <T,>(a?: T[] | null) => a ?? [];
const L = (v?: { en?: string; ar?: string } | null) => ({ en: v?.en ?? '', ar: v?.ar ?? '' });
const B = (v?: { en?: string[]; ar?: string[] } | null) => ({ en: v?.en ?? [], ar: v?.ar ?? [] });

function setPath(obj: Record<string, any>, path: string, value: string) {
  const parts = path.split('.');
  let cur = obj;
  parts.forEach((p, i) => {
    if (i === parts.length - 1) cur[p] = value;
    else cur = cur[p] ??= {};
  });
}

async function fetchRaw(): Promise<any> {
  const token = process.env.SANITY_API_READ_TOKEN;
  const host = token ? 'api.sanity.io' : 'apicdn.sanity.io';
  const url = `https://${projectId}.${host}/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(QUERY)}`;
  const res = await fetch(url, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    next: { revalidate: 60, tags: ['sanity'] }
  });
  if (!res.ok) throw new Error(`Sanity query failed: ${res.status} ${await res.text()}`);
  const { result } = await res.json();
  if (!result?.settings) throw new Error('Sanity dataset has no siteSettings document');
  return result;
}

export const getContent = cache(async (): Promise<Content> => {
  const r = await fetchRaw();
  const s = r.settings;
  const whatsapp: string = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || s.whatsapp || '';
  const phoneDigits = (s.phone || '').replace(/[^\d+]/g, '');

  const messages = { en: {}, ar: {} } as Content['messages'];
  for (const g of r.uiGroups ?? [])
    for (const it of g.items ?? []) {
      setPath(messages.en as any, it.key, it.en ?? '');
      setPath(messages.ar as any, it.key, it.ar ?? it.en ?? '');
    }

  const clients = dedupeOrder(r.clients) as Content['clients'];
  return {
    site: {
      name: L(s.name), shortName: L(s.shortName), phone: s.phone, phoneHref: `tel:${phoneDigits}`,
      whatsapp, whatsappHref: `https://wa.me/${whatsapp.replace(/\D/g, '')}`,
      email: s.email, emailHref: `mailto:${s.email}`, address: L(s.address), city: L(s.city),
      socials: (s.socials ?? []) as { id: SocialId; label: string; href: string }[]
    },
    assets: {
      logo: s.logo, companyProfilePdf: s.pdf,
      hero: { slide1: s.heroSlides?.[0], slide2: s.heroSlides?.[1], slide3: s.heroSlides?.[2] },
      about: { main: s.about }, cta: { background: s.cta }, map: { placeholder: s.map },
      pageHeaders: s.headers
    },
    categories: dedupeOrder(r.categories).map((c: any) => ({ ...c, title: L(c.title), caption: L(c.caption) })),
    projects: dedupeOrder(r.projects).map((p: any): Project => ({
      slug: p.slug, category: p.category, featured: !!p.featured, images: p.images ?? [],
      title: L(p.title), location: L(p.location), year: L(p.year), client: L(p.client), area: L(p.area),
      services: L(p.services), status: L(p.status), excerpt: L(p.excerpt), body: B(p.body)
    })),
    clients,
    clientsRowA: clients.filter((_, i) => i % 2 === 0),
    clientsRowB: clients.filter((_, i) => i % 2 === 1),
    team: dedupeOrder(r.team).map((m: any) => ({
      name: m.name, role: m.role, email: m.email, experience: m.experience ?? undefined,
      certificate: m.certificate ?? undefined, projects: m.projects ?? undefined, bio: m.bio ?? undefined,
      previous: m.previous ?? undefined
    })),
    articles: dedupeOrder(r.articles).map((a: any) => ({
      ...a, title: L(a.title), category: L(a.category), excerpt: L(a.excerpt), readTime: L(a.readTime)
    })),
    events: dedupeOrder(r.events).map((e: any) => ({
      ...e, title: L(e.title), excerpt: L(e.excerpt), body: B(e.body), place: L(e.place), gallery: e.gallery ?? []
    })),
    services: dedupeOrder(r.services).map((x: any) => ({ ...x, title: L(x.title), description: L(x.description) })),
    serviceList: dedupeOrder(r.serviceList).map((x: any) => ({ ...x, title: L(x.title), description: L(x.description) })),
    processSteps: dedupeOrder(r.processSteps).map((x: any) => ({ ...x, title: L(x.title), description: L(x.description) })),
    stats: dedupeOrder(r.stats).map((x: any) => ({ ...x, suffix: L(x.suffix), label: L(x.label), isOrdinal: !!x.isOrdinal })),
    timeline: dedupeOrder(r.timeline).map((x: any) => ({ ...x, title: L(x.title), text: L(x.text) })),
    knowledgeVideos: dedupeOrder(r.videos).map((v: any) => v.title),
    qualifications: dedupeOrder(r.qualifications).map((q: any) => ({ ...q, title: L(q.title) })),
    messages
  };
});

/* ---- pure helpers (replace the old helpers that lived in src/data/*) ---- */
export const getCategory = (c: Content | { categories: Content['categories'] }, slug: string) =>
  c.categories.find((x) => x.slug === slug);
export const getProject = (c: Pick<Content, 'projects'>, slug: string) => c.projects.find((p) => p.slug === slug);
export const getFeaturedProjects = (c: Pick<Content, 'projects'>) => c.projects.filter((p) => p.featured);
export const getProjectsByCategory = (c: Pick<Content, 'projects'>, cat: string) =>
  c.projects.filter((p) => p.category === cat);
export const getAdjacentProjects = (c: Pick<Content, 'projects'>, slug: string) => {
  const list = c.projects;
  const i = list.findIndex((p) => p.slug === slug);
  return { prev: i > 0 ? list[i - 1] : list[list.length - 1], next: i < list.length - 1 ? list[i + 1] : list[0] };
};
export const getArticle = (c: Pick<Content, 'articles'>, slug: string) => c.articles.find((a) => a.slug === slug);
export const getEvent = (c: Pick<Content, 'events'>, slug: string) => c.events.find((e) => e.slug === slug);
