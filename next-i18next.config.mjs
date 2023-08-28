// @ts-check
import { resolve } from 'path';

/**
 * @type {import('next-i18next').UserConfig}
 */
export const i18n = {
  // debug: process.env.NODE_ENV === 'development',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  /** To avoid issues when deploying to some PaaS (vercel...) */
  localePath:
    typeof window === 'undefined'
      ? resolve('./public/locales')
      : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
