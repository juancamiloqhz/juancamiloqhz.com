import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

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
                title={localeTxt}
                className="btn btn-primary btn-outline text-sm flex items-center gap-2"
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
