import * as React from 'react';

import ScrollTop from '@/components/ScrollTop';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <ScrollTop />
      <Footer />
    </>
  );
}
