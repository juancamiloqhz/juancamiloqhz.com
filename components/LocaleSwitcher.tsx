import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales!.filter((locale) => locale !== activeLocale);

  const localeTxt = React.useMemo(() => {
    return activeLocale === 'en' ? 'Ver en Español' : 'See in English';
  }, [activeLocale]);

  return (
    <ul className="flex">
      {otherLocales.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <li key={locale}>
            <div className="tooltip tooltip-bottom" data-tip={localeTxt}>
              <Link
                href={{ pathname, query }}
                as={asPath}
                locale={locale}
                // title={localeTxt}
                className="btn-outline btn-primary btn flex items-center gap-2 text-sm"
              >
                <Image
                  src={`/assets/flags/${locale === 'en' ? 'gb' : locale}.svg`}
                  alt={localeTxt}
                  width={20}
                  height={20}
                />
                {locale.toUpperCase()}
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
