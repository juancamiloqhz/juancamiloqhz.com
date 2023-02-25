import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { FiGitBranch, FiStar } from 'react-icons/fi';
import { GitHub, Rss } from './Icons';

export default function Footer() {
  const { t } = useTranslation('footer');
  // get current year

  return (
    <footer className="flex w-full items-center justify-center pb-2">
      <a
        href="https://github.com/juancamiloqhz"
        target="_blank"
        rel="noreferrer noopener"
        className="text-center text-sm hover:text-primary"
      >
        Design and Built by JuanCamiloQHz <br />
        {/* <div className="flex items-center justify-center gap-4 mt-2">
          <span className="flex items-center gap-2 text-sm">
            <FiStar size={20} className="inline" /> 600
          </span>
          <span className="flex items-center gap-2">
            <FiGitBranch size={20} className="inline" /> 600
          </span>
        </div> */}
      </a>
      {/* <div className="gap-3 py-3 md:py-8 max-w-3xl mx-auto">
        <div className="my-8">
          <div className="mb-6">
            <p className="font-bold">
              &copy; 2016 - {new Date().getFullYear()}
            </p>
            <Link href="/" className="link link-primary">
              JuanCamiloQHz
            </Link>
          </div>
          <div className="mb-6">
            <p className="font-bold">{t('footer:subscribe')}</p>
            <Link href="/mailinglist" className="link link-primary">
              {t('footer:mailinglist')}
            </Link>
          </div>
          <div className="mb-6">
            <p className="font-bold">{t('footer:guestbookTitle')}</p>
            <Link href="/guestbook" className="link link-primary">
              {t('footer:guestbook')}
            </Link>
          </div>
          <div className="mb-6">
            <p className="font-bold">Social</p>
            <div className="flex items-center">
              <a
                href="https://twitter.com/juancamiloqhz"
                className="link link-primary"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              /
              <a
                href="https://github.com/juancamiloqhz"
                className="link link-primary"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="mb-6">
            <p className="font-bold">Legal</p>
            <Link href="/privacy-policy" className="link link-primary">
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
      </div> */}
    </footer>
  );
}
