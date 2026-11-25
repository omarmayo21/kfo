import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { getContent } from '@/lib/content';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as 'en' | 'ar')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await getContent()).messages[locale as 'en' | 'ar'] as any
  };
});
