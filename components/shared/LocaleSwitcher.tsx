import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Switch from '@/shared/Switch';

export default function LocaleSwitcher({
  isHeader = false,
}: {
  isHeader?: boolean;
}) {
  const router = useRouter();
  const { locales, locale: activeLocale, pathname, asPath, query } = router;
  const otherLocales = locales!.filter((locale) => locale !== activeLocale);

  const localeTxt = React.useMemo(() => {
    return activeLocale === 'en' ? 'Ver en Español' : 'See in English';
  }, [activeLocale]);

  const onToggleLanguageClick = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  if (isHeader) {
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
  } else {
    return (
      <ul className="flex items-center gap-5">
        <div className="tooltip" data-tip="English">
          <Image
            src={`/assets/flags/gb.svg`}
            alt="English"
            width={24}
            height={24}
          />
        </div>
        <Switch
          fn={() => {
            onToggleLanguageClick(activeLocale === 'es' ? 'en' : 'es');
          }}
          checked={activeLocale === 'es'}
          trackDimensions="h-5 w-12"
          thumbDimensions="w-4 h-4"
          thumbTranslate="translate-x-7"
        />
        <div className="tooltip" data-tip="Español">
          <Image
            src={`/assets/flags/es.svg`}
            alt="Español"
            width={24}
            height={24}
          />
        </div>
      </ul>
    );
  }
}
