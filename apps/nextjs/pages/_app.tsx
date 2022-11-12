import 'styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from '@next/font/google';
import { ContextProvider } from 'context/ContextProvider';

const inter = Inter({ subsets: ['latin'] });

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppProps) {
  // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider defaultTheme="night">
        <ContextProvider>
          <main className={inter.className}>
            {<Component {...pageProps} />}
          </main>
          <Analytics />
        </ContextProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
