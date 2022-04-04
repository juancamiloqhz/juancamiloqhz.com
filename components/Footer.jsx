import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { GitHub, Rss } from './Icons';

export default function Footer() {
  const { t } = useTranslation('footer');
  // get current year

  return (
    <footer className="w-full border-t bg-white dark:bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-[auto,auto] gap-3 justify-between items-center py-3 md:py-8 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mt-5 sm:mt-0 grid grid-cols-[auto_auto] sm:grid-flow-col gap-8 sm:gap-14 justify-start sm:justify-between items-center">
          <div>
            <p className="font-bold text-sm">
              &copy; 2016 - {new Date().getFullYear()}
            </p>
            <Link href="/">
              <a className="decoration-gray-700 text-sm">JuanCamiloQHz</a>
            </Link>
          </div>
          <div>
            <p className="font-bold text-sm">{t('footer:subscribe')}</p>
            <Link href="/mailing-list">
              <a className="decoration-gray-700 text-sm">
                {t('footer:mailing-list')}
              </a>
            </Link>
          </div>
          <div>
            <p className="font-bold text-sm">Social</p>
            <div className="flex items-center">
              <a
                href="https://twitter.com/juancamiloqhz"
                className="decoration-gray-700 text-sm"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              /
              <a
                href="https://github.com/juancamiloqhz"
                className="decoration-gray-700 text-sm"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div>
            <p className="font-bold text-sm">Legal</p>
            <Link href="/privacy-policy">
              <a className="decoration-gray-700 text-sm">
                {t('privacy-policy')}
              </a>
            </Link>
          </div>
        </div>
        <div className="grid grid-flow-col justify-start gap-3 sm:gap-5 items-center my-5 sm:my-0">
          <a
            href="https://github.com/juancamiloqhz"
            className="decoration-none text-sm"
            rel="noopener noreferrer"
          >
            <GitHub size="1.5rem" />
          </a>

          <Link href="/rss.xml">
            <a className="decoration-none text-sm">
              <Rss size="1.5rem" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
