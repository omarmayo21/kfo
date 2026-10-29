'use client';

import type { MouseEvent } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, getPathname, usePathname, useRouter } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

/**
 * Strips any leading `/en` or `/ar` locale segment from a pathname so
 * `next-intl` navigation helpers always receive a clean internal route
 * (e.g. `/`, `/about`, `/projects/dallah-namar-hospital`, `/architecture`).
 */
function normalizeInternalPathname(rawPathname: string | null | undefined): string {
  if (!rawPathname) return '/';
  const stripped = rawPathname.replace(/^\/(en|ar)(?=\/|$)/, '');
  if (!stripped) return '/';
  return stripped.startsWith('/') ? stripped : `/${stripped}`;
}

/**
 * EN ⇄ AR switcher. Keeps the current path when switching locales and
 * points to the hreflang alternate.
 */
export function LanguageSwitcher({
  variant = 'header',
  onSelect
}: {
  variant?: 'header' | 'topbar' | 'menu';
  onSelect?: () => void;
}) {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const target: 'en' | 'ar' = locale === 'en' ? 'ar' : 'en';
  const cleanPathname = normalizeInternalPathname(pathname);

  const handleSwitch = (event: MouseEvent<HTMLAnchorElement>) => {
    // Allow standard browser behavior for modified clicks (new tab / window)
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();

    const activeRoute =
      typeof window !== 'undefined'
        ? normalizeInternalPathname(window.location.pathname || pathname)
        : cleanPathname;

    const targetPathname = getPathname({
      href: activeRoute,
      locale: target
    });

    if (typeof document !== 'undefined') {
      // Clear any stale path-scoped NEXT_LOCALE cookies (e.g. path=/ar) and set root cookie
      // before navigation so middleware resolves the target locale on unprefixed default-locale routes.
      document.cookie = 'NEXT_LOCALE=; path=/ar; max-age=0; SameSite=Lax';
      document.cookie = 'NEXT_LOCALE=; path=/en; max-age=0; SameSite=Lax';
      if (typeof window !== 'undefined' && window.location.pathname !== '/') {
        document.cookie = `NEXT_LOCALE=; path=${window.location.pathname}; max-age=0; SameSite=Lax`;
      }
      document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=31536000; SameSite=Lax`;

      document.documentElement.lang = target;
      document.documentElement.dir = target === 'ar' ? 'rtl' : 'ltr';
    }

    onSelect?.();

    if (typeof window !== 'undefined') {
      const search = window.location.search || '';
      const hash = window.location.hash || '';
      const destination = `${targetPathname}${search}${hash}`;
      window.location.assign(destination);
    } else {
      router.replace(activeRoute, { locale: target });
    }
  };

  return (
    <Link
      href={cleanPathname}
      locale={target}
      onClick={handleSwitch}
      lang={target}
      dir={target === 'ar' ? 'rtl' : 'ltr'}
      aria-label={`Switch language to ${target === 'ar' ? 'Arabic' : 'English'}`}
      className={cn(
        'relative z-10 inline-flex shrink-0 cursor-pointer select-none items-center gap-1.5 whitespace-nowrap rounded-[3px] px-2.5 py-1.5 font-medium pointer-events-auto transition-colors',
        variant === 'topbar' &&
          'text-[12.5px] text-white/90 drop-shadow-[0_1px_2px_rgba(11,31,51,0.4)] hover:bg-white/10 hover:text-white',
        variant === 'menu' && 'px-0 text-lg text-white/90 hover:text-gold',
        variant === 'header' && 'text-[12.5px] text-ink hover:bg-ink/5 hover:text-steel-shade'
      )}
    >
      {t('language')}
    </Link>
  );
}
