import type { NextPage } from 'next';
import Head from 'next/head';

import Exchanges from '@/components/Exchanges';

const BudgetPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Budget</title>
      </Head>
      <Exchanges />
    </>
  );
};

export default BudgetPage;
