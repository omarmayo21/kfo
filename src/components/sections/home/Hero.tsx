'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { assets } from '@/data/assets';
import { Button } from '@/components/ui/Button';
import { easeOutExpo } from '@/lib/motion';

const slides = [assets.hero.slide1, assets.hero.slide2, assets.hero.slide3];

/**
 * Full-viewport hero: crossfade slideshow with slow Ken-Burns zoom,
 * dark navy overlay, line-by-line headline reveal (mask/slide-up),
 * animated thin line draw + scroll indicator + floating stat badge.
 */
export function Hero() {
  const t = useTranslations('hero');
  const reduce = useReducedMotion();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, [reduce]);

  const line = (delay: number) => ({
    initial: reduce ? {} : { y: '110%', opacity: 0 },
    animate: { y: '0%', opacity: 1 },
    transition: { duration: 0.9, ease: easeOutExpo, delay }
  });

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink pt-[var(--header-height)]">
      {/* Slideshow */}
      <div className="absolute inset-0" aria-hidden>
        {slides.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
              i === slide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={t('slideAlt', { name: String(i + 1) })}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover ${!reduce ? 'animate-kenburns' : ''}`}
            />
          </div>
        ))}
        <div className="overlay-ink absolute inset-0" />
        <div className="bg-blueprint-light absolute inset-0" />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 mt-auto pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14">
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-10">
          <div className="max-w-3xl">
            <div className="overflow-hidden">
              <motion.p className="label-eyebrow label-eyebrow-light" {...line(0.15)}>
                {t('eyebrow')}
              </motion.p>
            </div>

            <h1 className="mt-5 sm:mt-6">
              <span className="block overflow-hidden">
                <motion.span
                  className="block font-display text-[clamp(2.4rem,6.5vw,5rem)] font-medium leading-[1.04] tracking-tight text-white"
                  {...line(0.28)}
                >
                  {t('title1')}
                </motion.span>
              </span>
              <span className="mt-2.5 block overflow-hidden">
                <motion.span
                  className="block font-body text-[clamp(0.8rem,1.6vw,1.25rem)] font-light uppercase tracking-[0.26em] text-steel-tint"
                  {...line(0.42)}
                >
                  {t('title2')}
                </motion.span>
              </span>
            </h1>

            {/* Thin line draw */}
            <motion.div
              className="mt-7 h-px w-24 origin-left bg-gold rtl:origin-right"
              initial={reduce ? {} : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: easeOutExpo, delay: 0.75 }}
            />

            <div className="overflow-hidden">
              <motion.p
                className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl"
                {...line(0.6)}
              >
                {t('tagline')}
              </motion.p>
            </div>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4 sm:mt-9"
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.85 }}
            >
              <Button
                href="https://kfoco.com/wp-content/uploads/2025/02/KFO_2025.pdf"
                external
                download
                variant="primary"
              >
                {t('downloadProfile')}
              </Button>
              <Button href="/projects" variant="outline">
                {t('ourProjects')}
              </Button>
            </motion.div>
          </div>

          {/* Floating stat badge + caption */}
          <motion.aside
            className="hidden shrink-0 border border-white/20 bg-ink/45 p-7 backdrop-blur-md lg:block xl:p-8"
            initial={reduce ? {} : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: easeOutExpo, delay: 1 }}
          >
            <p className="font-display text-4xl font-medium text-white xl:text-5xl">{t('yearsBadge')}</p>
            <div className="mt-4 h-px w-12 bg-gold" />
            <p className="mt-4 text-[12px] uppercase tracking-label text-steel-tint">{t('caption')}</p>
          </motion.aside>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-10 flex items-center gap-4 sm:mt-12"
          initial={reduce ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
            <span className="h-1.5 w-[3px] animate-scrollhint rounded-full bg-white/80" />
          </span>
          <span className="text-[11px] uppercase tracking-label text-white/60">{t('scroll')}</span>
        </motion.div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-10 end-10 z-10 hidden flex-col gap-2 sm:flex">
        <AnimatePresence>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-px transition-all duration-500 ${
                i === slide ? 'w-10 bg-gold' : 'w-5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
