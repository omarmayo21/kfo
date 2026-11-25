import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/ui/PageHeader';
import { ProjectsGrid } from '@/components/sections/shared/ProjectsGrid';
import { getContent } from '@/lib/content';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta.projects' });
  return buildMetadata({ locale, title: t('title'), description: t('description'), path: '/projects' });
}

export default async function ProjectsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const { assets, projects, categories } = await getContent();
  const t = await getTranslations({ locale, namespace: 'pages.projects' });

  return (
    <>
      <PageHeader
        image={assets.pageHeaders.projects}
        label={t('label')}
        title={t('heading')}
        text={t('text')}
        crumbs={[{ label: t('heading') }]}
      />
      <ProjectsGrid projects={projects} categories={categories} />
    </>
  );
}
