import type { NextPage } from 'next';
import Head from 'next/head';

import Exchanges from '@/components/Exchanges';

const MarketplacePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marketplace</title>
      </Head>
      <Exchanges />
    </>
  );
};

export default MarketplacePage;
