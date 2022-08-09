import type { NextPage } from 'next';
import Head from 'next/head';

import Exchanges from '@/components/Exchanges';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Minted from '@/components/Minted';
import Overview from '@/components/Overview';
import Roadmap from '@/components/Roadmap';
import Statistics from '@/components/Statistics';
import Vision from '@/components/Vision';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>VMTycoon</title>
      </Head>
      <Hero />
      <Statistics />
      <Overview />
      <Features />
      <Minted />
      <Vision />
      <Roadmap />
      <Exchanges />
    </>
  );
};

export default Home;
