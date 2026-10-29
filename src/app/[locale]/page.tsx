import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/home/Hero';
import { AboutIntro } from '@/components/sections/home/AboutIntro';
import { CategoryTiles } from '@/components/sections/home/CategoryTiles';
import { FeaturedProjects } from '@/components/sections/home/FeaturedProjects';
import { ServicesSection } from '@/components/sections/home/ServicesSection';
import { CtaBanner } from '@/components/sections/home/CtaBanner';
import { StatsSection } from '@/components/sections/home/StatsSection';
import { ClientsMarquee } from '@/components/sections/home/ClientsMarquee';

/** HOME — Hero -> Statistics -> Client Logos -> About -> Categories -> Featured Projects -> Services -> CTA. */
export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <StatsSection />
      <ClientsMarquee />
      <AboutIntro />
      <CategoryTiles />
      <FeaturedProjects />
      <ServicesSection />
      <CtaBanner />
    </>
  );
}
