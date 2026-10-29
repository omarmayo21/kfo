import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { clientsRowA, clientsRowB } from '@/data/clients';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowLink } from '@/components/ui/ArrowLink';

/**
 * Clients marquee — 2 rows scrolling in opposite directions, pausing on hover,
 * grayscale → color on hover. Logo JPGs have white backgrounds → mix-blend-multiply
 * inside framed white architectural tiles. Directions flip automatically in RTL.
 */
export function ClientsMarquee() {
  const t = useTranslations('clients');

  const row = (items: typeof clientsRowA, reverse: boolean) => (
    <div className="marquee-row overflow-hidden py-1" dir="ltr">
      <div
        className={`marquee-track gap-5 pe-5 sm:gap-6 sm:pe-6 lg:gap-7 lg:pe-7 ${
          reverse ? 'marquee-track-slow' : ''
        }`}
      >
        {/* Duplicate the set for a seamless loop */}
        {[...items, ...items].map((client, i) => (
          <div
            key={`${client.id}-${i}`}
            className="group flex h-24 w-44 shrink-0 items-center justify-center rounded-[3px] border border-ink/8 bg-white px-5 py-3.5 shadow-card transition-all duration-500 hover:-translate-y-0.5 hover:border-steel/45 hover:shadow-lift sm:h-28 sm:w-56 sm:px-6 sm:py-4 lg:h-32 lg:w-64 lg:px-7 lg:py-5"
          >
            <Image
              src={client.src}
              alt={client.name}
              width={220}
              height={96}
              sizes="(min-width: 1024px) 256px, (min-width: 640px) 224px, 176px"
              className="logo-blend max-h-16 w-auto max-w-full object-contain opacity-85 grayscale transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-20 lg:max-h-[88px]"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden border-b border-ink/8 bg-offwhite py-20 lg:py-24">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Reveal>
              <SectionLabel>{t('label')}</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <SectionHeading className="mt-4">{t('title')}</SectionHeading>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-textc-muted">
                {t('text')}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <ArrowLink href="/our-clients">{t('button')}</ArrowLink>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-12 space-y-4 sm:mt-14 sm:space-y-5">
        {/* Fade edges matching offwhite surface */}
        <div
          className="pointer-events-none absolute inset-y-0 start-0 z-10 w-12 bg-gradient-to-r from-offwhite via-offwhite/80 to-transparent sm:w-24 lg:w-32"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 end-0 z-10 w-12 bg-gradient-to-l from-offwhite via-offwhite/80 to-transparent sm:w-24 lg:w-32"
          aria-hidden
        />

        {row(clientsRowA, false)}
        {row(clientsRowB, true)}
      </div>
    </section>
  );
}
