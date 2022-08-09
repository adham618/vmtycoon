import type { NextPage } from 'next';
import Head from 'next/head';

import Exchanges from '@/components/Exchanges';
import Rarity from '@/components/Rarity';

const MarketplacePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marketplace</title>
      </Head>
      <Rarity />
      <Exchanges />
    </>
  );
};

export default MarketplacePage;
