import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/seo';
import { getContent } from '@/lib/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { projects, categories, events, articles } = await getContent();
  const base = getSiteUrl();
  const now = new Date();

  const staticPaths = [
    '',
    '/about',
    '/services',
    '/projects',
    '/our-clients',
    '/knowledge-center',
    '/events',
    '/contact'
  ];

  const entry = (path: string, priority = 0.7): MetadataRoute.Sitemap[number] => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority,
    alternates: {
      languages: {
        en: `${base}${path}`,
        ar: `${base}/ar${path}`
      }
    }
  });

  return [
    ...staticPaths.map((p) => entry(p, p === '' ? 1 : 0.8)),
    ...categories.map((c) => entry(`/${c.slug}`, 0.7)),
    ...projects.map((p) => entry(`/projects/${p.slug}`, 0.6)),
    ...events.map((e) => entry(`/events/${e.slug}`, 0.5)),
    ...articles.map((a) => entry(`/knowledge-center/${a.slug}`, 0.5))
  ];
}
