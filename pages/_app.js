import { appWithTranslation } from 'next-i18next';
import { ContextProvider } from '../context/ContextProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ContextProvider>{getLayout(<Component {...pageProps} />)}</ContextProvider>
  );
}

export default appWithTranslation(MyApp);
