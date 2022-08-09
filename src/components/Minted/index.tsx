/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

export default function Minted() {
  return (
    <section className='bg-section-gradient py-[60px] dark:bg-black-900 dark:bg-none sm:py-[80px] lg:py-[100px]'>
      <div className='container'>
        <div className='m-auto text-center xl:w-1/2'>
          <span className='mb-4 block font-openSans text-[16px] font-black uppercase leading-4 tracking-wider text-pink-600'>
            10000 of 10,000 Tycoons minted
          </span>
          <h2 className='mb-5 text-[26px] font-black leading-[26px] text-slate-900 dark:text-white sm:text-[34px] sm:leading-[44px] md:text-[40px]  md:leading-[52px]'>
            Mint Your Own VM Tycoon
          </h2>
          <div className='relative m-auto mt-10 mb-5 max-w-[400px]'>
            <img
              className='m-auto max-w-full'
              src='/images/minted.png'
              alt='MInted'
            />
          </div>
          <p className='text-lg font-normal leading-7'>
            Sold out. The VM Tycoon collection is limited to 10,000 unique
            NFT’s. Once all have been minted, you’ll have to purchase through
            the Marketplace.{' '}
          </p>
        </div>
      </div>
    </section>
  );
}
