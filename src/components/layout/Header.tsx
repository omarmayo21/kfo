'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { mainNav } from '@/data/nav';
import { assets } from '@/data/assets';
import { site } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';

/**
 * Sticky header: transparent over the hero → solid/blurred after scroll.
 * Hides on scroll down, reveals on scroll up.
 */
export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const { scrollY } = useScroll();

  // Home hero is dark → header starts transparent with light content
  const isHome = pathname === '/';
  const overHero = isHome && !solid;

  useMotionValueEvent(scrollY, 'change', (y) => {
    setSolid(y > 28);
    // Hide on scroll down (past 140px), show on scroll up
    if (y > 140 && y > lastY.current + 5) setHidden(true);
    else if (y < lastY.current - 5 || y <= 140) setHidden(false);
    lastY.current = y;
  });

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Keep root <html> lang and dir synchronized with the active locale
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className={cn(
          'fixed inset-x-0 top-0 z-[60] border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300',
          overHero
            ? 'border-white/10 bg-gradient-to-b from-ink/85 via-ink/55 to-ink/15 text-white backdrop-blur-[2px]'
            : 'border-ink/8 bg-white/95 text-ink shadow-header backdrop-blur-md'
        )}
        animate={{ y: hidden && !menuOpen ? '-100%' : '0%' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-[72px] lg:gap-6">
          {/* Logo — compact responsive sizing; white treatment over dark hero */}
          <Link
            href="/"
            className="flex shrink-0 items-center py-1"
            aria-label={locale === 'ar' ? site.name.ar : site.name.en}
          >
            <Image
              src={assets.logo}
              alt={locale === 'ar' ? site.name.ar : site.name.en}
              width={140}
              height={42}
              priority
              sizes="(min-width: 1280px) 140px, (min-width: 640px) 120px, 108px"
              className={cn(
                'h-8 w-auto max-w-[108px] object-contain transition-[filter,opacity] duration-300 sm:h-9 sm:max-w-[120px] lg:h-[38px] lg:max-w-[132px] xl:h-10 xl:max-w-[140px]',
                overHero && 'logo-on-dark'
              )}
            />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label={t('menu')}
            className="hidden items-center justify-center lg:flex lg:gap-4 xl:gap-6 2xl:gap-7"
          >
            {mainNav.map((item) => {
              const active =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={cn(
                    'group relative whitespace-nowrap py-1.5 text-[11.5px] font-medium uppercase tracking-[0.08em] transition-colors xl:text-[12.5px] xl:tracking-[0.11em]',
                    overHero
                      ? 'text-white/90 drop-shadow-[0_1px_2px_rgba(11,31,51,0.45)] hover:text-white'
                      : 'text-textc hover:text-steel-shade',
                    active && (overHero ? 'text-white' : 'text-ink')
                  )}
                >
                  {t(item.key as never)}
                  <span
                    className={cn(
                      'absolute inset-x-0 bottom-0 h-[1.5px] origin-center scale-x-0 bg-gold transition-transform duration-300 ease-out-expo group-hover:scale-x-100',
                      active && 'scale-x-100'
                    )}
                    aria-hidden
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5 sm:gap-3.5 xl:gap-4">
            <LanguageSwitcher variant={overHero ? 'topbar' : 'header'} />
            <span
              className={cn(
                'hidden h-4 w-px sm:block',
                overHero ? 'bg-white/20' : 'bg-ink/12'
              )}
              aria-hidden
            />
            <Button
              href="/contact"
              variant="primary"
              arrow={false}
              className="hidden whitespace-nowrap px-4 py-2 text-[11.5px] tracking-[0.12em] sm:inline-flex xl:px-5 xl:py-2.5 xl:text-[12px] xl:tracking-[0.14em]"
            >
              {t('getQuote')}
            </Button>
            <button
              type="button"
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-[3px] border transition-colors lg:hidden',
                overHero
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-ink/12 text-ink hover:bg-ink/5'
              )}
              onClick={() => setMenuOpen(true)}
              aria-label={t('openMenu')}
              aria-expanded={menuOpen}
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
