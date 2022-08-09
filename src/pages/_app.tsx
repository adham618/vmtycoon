import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';

import '../styles/globals.css';

import Layout from '@/components/Layout';
const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wow.js') : null;
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
