import type { NextPage } from 'next';
import Head from 'next/head';

import Exchanges from '@/components/Exchanges';

const OfficePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Office</title>
      </Head>
      <Exchanges />
    </>
  );
};

export default OfficePage;
