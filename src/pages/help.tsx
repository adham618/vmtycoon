import type { NextPage } from 'next';
import Head from 'next/head';

import Exchanges from '@/components/Exchanges';

const HelpPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Help</title>
      </Head>
      <Exchanges />
    </>
  );
};

export default HelpPage;
