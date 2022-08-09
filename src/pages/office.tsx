import type { NextPage } from 'next';
import Head from 'next/head';

import Exchanges from '@/components/Exchanges';
import Wallets from '@/components/Wallets';
import YourNFTs from '@/components/YourNFTs';

const OfficePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Office</title>
      </Head>
      <Wallets />
      <YourNFTs />
      <Exchanges />
    </>
  );
};

export default OfficePage;
