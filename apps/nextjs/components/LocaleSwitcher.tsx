import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales!.filter((locale) => locale !== activeLocale);

  const localeTxt = React.useMemo(() => {
    return activeLocale === 'en' ? 'Español' : 'English';
  }, [activeLocale]);

  return (
    <div className="mr-4">
      <ul className="flex">
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <li key={locale}>
              <Link
                href={{ pathname, query }}
                as={asPath}
                locale={locale}
                title={localeTxt}
                className="rounded-full flex items-center justify-center text-sm w-8 h-8 bg-base-200 hover:bg-base-300"
              >
                {locale.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
