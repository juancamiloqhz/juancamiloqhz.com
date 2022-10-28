import type { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import { ContextProvider } from '../context/ContextProvider';
import { SessionProvider } from 'next-auth/react';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <ContextProvider>
          {getLayout(<Component {...pageProps} />)}
        </ContextProvider>
        <Analytics />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
