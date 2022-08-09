import type { NextPage } from 'next';
import Head from 'next/head';

import Exchanges from '@/components/Exchanges';
import Marketplace from '@/components/Marketplace';
import Rarity from '@/components/Rarity';

const MarketplacePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marketplace</title>
      </Head>
      <Rarity />
      <Marketplace />
      <Exchanges />
    </>
  );
};

export default MarketplacePage;
