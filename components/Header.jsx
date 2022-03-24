import Link from 'next/link';
import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

export default function Header() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <header className="w-full border-b">
      <div className="max-w-6xl h-20 px-2 md:px-4 lg:px-8 flex justify-between items-center mx-auto">
        <Link href="/">
          <a className="nav-link">JuanCamiloQhz</a>
        </Link>
        <div className="flex gap-4 dark:text-gray-100">
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
          {colorTheme === 'light' ? (
            <svg
              onClick={() => setTheme('light')}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 nav-link"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setTheme('dark')}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 nav-link"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                // className="dark:text-red-600"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </div>
      </div>
    </header>
  );
}
