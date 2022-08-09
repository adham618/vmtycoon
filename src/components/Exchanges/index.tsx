/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Exchange from '@/components/Exchanges/Exchange';
const exchanges = [
  {
    id: '0',
    image: '/images/pangolin.png',
    altImage: 'pangolin',
    title: 'Pangolin Exchange',
  },
  {
    id: '1',
    image: '/images/joe.png',
    altImage: 'Joi',
    title: 'TraderJoe Exchange',
  },
  {
    id: '2',
    image: '/images/lyd.png',
    altImage: 'Lydia Exchange',
    title: 'Lydia Exchange',
  },
];
export default function Exchanges() {
  return (
    <section className='bg-white-200 py-[60px] dark:bg-black-500 dark:bg-none sm:py-[80px] lg:py-[100px]'>
      <div className='container'>
        <div className='m-auto text-center xl:w-1/2'>
          <span className='mb-4 block text-[16px] font-normal uppercase text-pink-600'>
            Our Exchanges{' '}
          </span>
          <h2 className='mb-5 text-[26px] font-semibold leading-[26px] text-slate-900 dark:text-white sm:text-[34px] sm:leading-[44px] md:text-[40px]  md:leading-[52px]'>
            Biz & Dolla
          </h2>
          <p className='text-lg font-normal leading-7'>
            Click at the images to visit the exchanges for $biz and $dolla.
          </p>
        </div>
        <div className='mt-14 justify-between gap-9 text-center md:flex'>
          {exchanges.map((exchange) => (
            <Exchange
              key={exchange.id}
              image={exchange.image}
              altImage={exchange.altImage}
              title={exchange.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
