import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { assets } from '@/data/assets';
import { serviceList } from '@/data/services';
import { PageHeader } from '@/components/ui/PageHeader';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ServicesSection } from '@/components/sections/home/ServicesSection';
import { ProcessSteps } from '@/components/sections/shared/ProcessSteps';
import { CtaBanner } from '@/components/sections/home/CtaBanner';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta.services' });
  return buildMetadata({ locale, title: t('title'), description: t('description'), path: '/services' });
}

export default async function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'pages.services' });
  const ts = await getTranslations({ locale, namespace: 'services' });

  return (
    <>
      <PageHeader
        image={assets.pageHeaders.services}
        label={t('label')}
        title={t('heading')}
        text={t('text')}
        crumbs={[{ label: t('label') }]}
      />

      <section className="bg-white py-24">
        <div className="container-x">
          <Reveal>
            <SectionLabel>{t('label')}</SectionLabel>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceList.map((s, i) => (
              <Reveal key={s.id} delay={(i % 4) * 0.08}>
                <div className="h-full border border-ink/10 bg-offwhite p-8">
                  <p className="font-display text-2xl text-steel">{s.number}</p>
                  <h3 className="mt-4 font-display text-xl font-medium text-ink">
                    {locale === 'ar' ? s.title.ar : s.title.en}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-textc-muted">
                    {locale === 'ar' ? s.description.ar : s.description.en}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse the services grid (dark section) */}
      <ServicesSection />
      <ProcessSteps />

      {/* Closing CTA */}
      <section className="bg-offwhite py-24 text-center">
        <div className="container-x">
          <Reveal>
            <SectionHeading className="mx-auto max-w-2xl">{ts('ctaHeading')}</SectionHeading>
          </Reveal>
          <Reveal delay={0.12} className="mt-8">
            <Button href="/contact" variant="primary">
              {ts('exploreAll')}
            </Button>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
