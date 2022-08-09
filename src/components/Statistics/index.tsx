/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Statistic from '@/components/Statistics/Statistic';
const statistics = [
  {
    id: '0',
    image: '/images/businesses-head.png',
    altImage: 'business',
    symbol: '$',
    coloredSymbol: '',
    price: '0.14',
    title: 'Biz Price',
  },
  {
    id: '1',
    image: '/images/dollar-head.png',
    altImage: 'dollar',
    symbol: '$',
    coloredSymbol: '',
    price: '0.001',
    title: 'Dollar Price',
  },
  {
    id: '2',
    image: '/images/network.svg',
    altImage: 'network',
    symbol: '',
    coloredSymbol: '●',
    price: '50',
    title: 'Network Fees',
  },
  {
    id: '3',
    image: '/images/avax-logo.svg',
    altImage: 'avax',
    symbol: '$',
    coloredSymbol: '',
    price: '85.18',
    title: 'Avalanche Price',
  },
];
export default function Statistics() {
  return (
    <section className='bg-section-gradient py-7 dark:bg-[#151515] dark:bg-none'>
      <div className='container'>
        <div className='flex-wrap items-center justify-between sm:flex'>
          {statistics.map((statistic) => (
            <Statistic
              key={statistic.id}
              image={statistic.image}
              altImage={statistic.altImage}
              symbol={statistic.symbol}
              coloredSymbol={statistic.coloredSymbol}
              price={statistic.price}
              title={statistic.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
