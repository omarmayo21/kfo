import { useLocale, useTranslations } from 'next-intl';
import { stats } from '@/data/stats';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CountUp } from '@/components/ui/CountUp';
import { QualificationsGallery } from './QualificationsGallery';

/**
 * Stats — "Our Achievements & Story in numbers" with count-up on enter,
 * followed by the qualifications ("Updated Profile") gallery strip.
 */
export function StatsSection() {
  const t = useTranslations('stats');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden border-b border-ink/8 bg-white py-20 lg:py-24">
      <div className="bg-blueprint absolute inset-0" aria-hidden />

      <div className="container-x relative">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>{t('label')}</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading className="mt-4">{t('title')}</SectionHeading>
          </Reveal>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-px border border-ink/10 bg-ink/10 lg:mt-14 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 0.08} className="bg-white p-6 sm:p-8 lg:p-10">
              <div className="relative flex h-full flex-col justify-between">
                {/* Thin rule above each figure */}
                <div className="h-px w-10 bg-gold" aria-hidden />
                <dt className="sr-only">{locale === 'ar' ? stat.label.ar : stat.label.en}</dt>
                <dd className="mt-6">
                  <p className="font-display text-[clamp(2.4rem,5vw,4rem)] font-medium leading-none tracking-tight text-ink tabular-nums">
                    {stat.isOrdinal ? (
                      <span dir="ltr">
                        <CountUp value={stat.value} />
                        <span className="text-steel">{locale === 'ar' ? stat.suffix.ar : stat.suffix.en}</span>
                      </span>
                    ) : (
                      <span dir="ltr">
                        <CountUp value={stat.value} />
                        <span className="text-steel">{stat.suffix.en}</span>
                      </span>
                    )}
                  </p>
                  <p className="mt-3.5 text-[11.5px] font-medium uppercase tracking-label text-textc-muted">
                    {locale === 'ar' ? stat.label.ar : stat.label.en}
                  </p>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <div className="mt-16 lg:mt-20">
          <QualificationsGallery />
        </div>
      </div>
    </section>
  );
}
