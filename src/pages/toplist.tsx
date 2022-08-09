import type { NextPage } from 'next';
import Head from 'next/head';

import Exchanges from '@/components/Exchanges';

const TopListPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>TopListPage</title>
      </Head>
      <Exchanges />
    </>
  );
};

export default TopListPage;
