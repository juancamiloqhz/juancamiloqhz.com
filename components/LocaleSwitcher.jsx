import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);

  const localeTxt = useMemo(() => {
    return activeLocale === 'en' ? 'Español' : 'English';
  }, [activeLocale]);

  return (
    <div className="mr-4">
      <ul className="flex">
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <li key={locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <a
                  title={localeTxt}
                  className="rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 p-2 py-[10px] items-center justify-center text-sm w-full h-full"
                >
                  {locale.toUpperCase()}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
