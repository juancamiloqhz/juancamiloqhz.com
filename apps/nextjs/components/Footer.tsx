import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { GitHub, Rss } from './Icons';

export default function Footer() {
  const { t } = useTranslation('footer');
  // get current year

  return (
    <footer className="w-full border-t">
      <div className="gap-3 py-3 md:py-8 max-w-3xl mx-auto">
        <div className="my-8">
          <div className="mb-6">
            <p className="font-bold text-base">
              &copy; 2016 - {new Date().getFullYear()}
            </p>
            <Link href="/" className="decoration-gray-700 text-base">
              JuanCamiloQHz
            </Link>
          </div>
          <div className="mb-6">
            <p className="font-bold text-base">{t('footer:subscribe')}</p>
            <Link href="/newsletter" className="decoration-gray-700 text-base">
              {t('footer:newsletter')}
            </Link>
          </div>
          <div className="mb-6">
            <p className="font-bold text-base">{t('footer:guestbookTitle')}</p>
            <Link href="/guestbook" className="decoration-gray-700 text-base">
              {t('footer:guestbook')}
            </Link>
          </div>
          <div className="mb-6">
            <p className="font-bold text-base">Social</p>
            <div className="flex items-center">
              <a
                href="https://twitter.com/juancamiloqhz"
                className="decoration-gray-700 text-base"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              /
              <a
                href="https://github.com/juancamiloqhz"
                className="decoration-gray-700 text-base"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="mb-6">
            <p className="font-bold text-base">Legal</p>
            <Link
              href="/privacy-policy"
              className="decoration-gray-700 text-base"
            >
              {t('privacy-policy')}
            </Link>
          </div>
        </div>
        <div className="grid grid-flow-col justify-start gap-3 sm:gap-5 items-center my-7">
          <a
            href="https://github.com/juancamiloqhz"
            className="decoration-none text-base"
            rel="noopener noreferrer"
          >
            <GitHub size={25} />
          </a>

          <Link href="/feed.xml" className="decoration-none text-base">
            <Rss size="1.5rem" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
