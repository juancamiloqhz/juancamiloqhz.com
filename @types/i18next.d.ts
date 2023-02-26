/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next';
import type aboutPage from '../public/locales/en/about-page.json';
import type blogArchive from '../public/locales/en/blog-archive.json';
import type categoryArchive from '../public/locales/en/category-archive.json';
import type common from '../public/locales/en/common.json';
import type contactPage from '../public/locales/en/contact-page.json';
import type dashboardPage from '../public/locales/en/dashboard-page.json';
import type developmentPage from '../public/locales/en/development-page.json';
import type footer from '../public/locales/en/footer.json';
import type guestbookPage from '../public/locales/en/guestbook-page.json';
import type header from '../public/locales/en/header.json';
import type indexPage from '../public/locales/en/index-page.json';
import type mailinglistPage from '../public/locales/en/mailinglist-page.json';
import type mailinglist from '../public/locales/en/mailinglist.json';
import type privacyPolicy from '../public/locales/en/privacy-policy.json';
import type singlePost from '../public/locales/en/single-post.json';
import type tagArchive from '../public/locales/en/tag-archive.json';
import type work from '../public/locales/en/work.json';

interface I18nNamespaces {
  common: typeof common;
  header: typeof header;
  footer: typeof footer;
  'index-page': typeof indexPage;
  'about-page': typeof aboutPage;
  'blog-archive': typeof blogArchive;
  'category-archive': typeof categoryArchive;
  'contact-page': typeof contactPage;
  'dashboard-page': typeof dashboardPage;
  'development-page': typeof developmentPage;
  'guestbook-page': typeof guestbookPage;
  'mailinglist-page': typeof mailinglistPage;
  mailinglist: typeof mailinglist;
  'privacy-policy': typeof privacyPolicy;
  'single-post': typeof singlePost;
  'tag-archive': typeof tagArchive;
  work: typeof work;
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: I18nNamespaces;
  }
}
