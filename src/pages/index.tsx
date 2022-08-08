import type { NextPage } from 'next';
import Head from 'next/head';

import Hero from '@/components/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>VMTycoon</title>
      </Head>
      <Hero />
    </>
  );
};

export default Home;
