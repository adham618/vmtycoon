import type { NextPage } from 'next';
import Head from 'next/head';

import BlockSection from '@/components/BlockSection/BlockSection';
import Exchanges from '@/components/Exchanges';
import Ranks from '@/components/Ranks';

const TopListPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>TopListPage</title>
      </Head>
      <BlockSection />
      <Ranks />
      <Exchanges />
    </>
  );
};

export default TopListPage;
