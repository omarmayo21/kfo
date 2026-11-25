import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { getContent, getCategory, getProjectsByCategory } from '@/lib/content';
import { PageHeader } from '@/components/ui/PageHeader';
import { ProjectsGrid } from '@/components/sections/shared/ProjectsGrid';
import { CtaBanner } from '@/components/sections/home/CtaBanner';

/** Category pages: /healthcare, /education, /residential, … (8 total) */

export async function generateStaticParams() {
  const { categories } = await getContent();
  return categories.map((c) => c.slug).map((category) => ({ category }));
}

export async function generateMetadata({
  params: { locale, category }
}: {
  params: { locale: string; category: string };
}): Promise<Metadata> {
  const content = await getContent();
  const cat = getCategory(content, category);
  if (!cat) return {};
  const t = await getTranslations({ locale, namespace: 'meta.category' });
  return buildMetadata({
    locale,
    title: `${t('title')} — ${locale === 'ar' ? cat.title.ar : cat.title.en}`,
    description: t('description'),
    path: `/${category}`,
    image: cat.image
  });
}

export default async function CategoryPage({
  params: { locale, category }
}: {
  params: { locale: string; category: string };
}) {
  const content = await getContent();
  const { categories } = content;
  const cat = getCategory(content, category);
  if (!cat) notFound();

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'categories' });
  const tp = await getTranslations({ locale, namespace: 'pages.projects' });
  const projects = getProjectsByCategory(content, category);

  return (
    <>
      <PageHeader
        image={cat.image}
        label={t('label')}
        title={locale === 'ar' ? cat.title.ar : cat.title.en}
        text={locale === 'ar' ? cat.caption.ar : cat.caption.en}
        crumbs={[{ label: tp('heading'), href: '/projects' }, { label: locale === 'ar' ? cat.title.ar : cat.title.en }]}
      />
      <ProjectsGrid projects={projects} categories={categories} activeCategory={category} />
      <CtaBanner />
    </>
  );
}
