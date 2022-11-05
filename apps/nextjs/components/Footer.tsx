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
            <p className="font-bold">
              &copy; 2016 - {new Date().getFullYear()}
            </p>
            <Link href="/" className="link">
              JuanCamiloQHz
            </Link>
          </div>
          <div className="mb-6">
            <p className="font-bold">{t('footer:subscribe')}</p>
            <Link href="/newsletter" className="link">
              {t('footer:newsletter')}
            </Link>
          </div>
          <div className="mb-6">
            <p className="font-bold">{t('footer:guestbookTitle')}</p>
            <Link href="/guestbook" className="link">
              {t('footer:guestbook')}
            </Link>
          </div>
          <div className="mb-6">
            <p className="font-bold">Social</p>
            <div className="flex items-center">
              <a
                href="https://twitter.com/juancamiloqhz"
                className="link"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              /
              <a
                href="https://github.com/juancamiloqhz"
                className="link"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="mb-6">
            <p className="font-bold">Legal</p>
            <Link href="/privacy-policy" className="link">
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
