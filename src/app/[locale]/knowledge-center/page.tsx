import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/ui/PageHeader';
import { KnowledgeExplorer } from '@/components/sections/shared/KnowledgeExplorer';
import { getContent } from '@/lib/content';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta.knowledge' });
  return buildMetadata({ locale, title: t('title'), description: t('description'), path: '/knowledge-center' });
}

export default async function KnowledgePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const { assets, knowledgeVideos, articles } = await getContent();
  const t = await getTranslations({ locale, namespace: 'pages.knowledge' });

  return (
    <>
      <PageHeader
        image={assets.pageHeaders.knowledge}
        label={t('label')}
        title={t('heading')}
        text={t('text')}
        crumbs={[{ label: t('heading') }]}
      />
      <KnowledgeExplorer articles={articles} />

      <section className="bg-offwhite py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-medium text-ink">{t('videosHeading')}</h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {knowledgeVideos.map((title) => (
              <li key={title} className="border border-ink/10 bg-white p-5 text-sm leading-relaxed text-textc-muted">
                {title}
              </li>
            ))}
          </ul>
          <a
            href="https://www.youtube.com/@kfoffices"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border-b border-ink/20 pb-1.5 text-[12px] font-medium uppercase tracking-widest text-ink hover:border-gold"
          >
            {t('videosCta')}
          </a>
        </div>
      </section>
    </>
  );
}
