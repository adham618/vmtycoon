import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';

import '../styles/globals.css';

import Layout from '@/components/Layout';
import MouseCursor from '@/components/MouseCursor';
const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wow.js') : null;
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <>
      {/* <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
          key='viewport'
        />
      </Head> */}
      <ThemeProvider attribute='class' defaultTheme='system'>
        <Layout>
          <MouseCursor />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
