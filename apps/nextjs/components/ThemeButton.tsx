import React from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

export default function ThemeButton({ withText = false }) {
  const [mounted, setMounted] = React.useState(false);
  const { locale } = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      className="flex items-center p-1 justify-center border-0 gap-2 m-0 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full h-8 w-8"
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      title={locale === 'en' ? 'Change theme' : 'Cambiar tema'}
    >
      {mounted && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 nav-link"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {resolvedTheme === 'dark' ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            )}
          </svg>
          {withText && 'Light Mode'}
        </>
      )}
    </button>
  );
}
