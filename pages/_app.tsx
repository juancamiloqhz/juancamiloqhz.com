import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import cx from 'classnames';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import 'styles/globals.css';

const satoshi = localFont({
  src: '../styles/Satoshi-Variable.woff2',
  variable: '--font-satoshi',
  weight: '300 900',
  display: 'swap',
  style: 'normal',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider defaultTheme="night">
        <main className={cx(satoshi.variable, inter.variable)} id="main">
          {<Component {...pageProps} />}
        </main>
        <Analytics />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
