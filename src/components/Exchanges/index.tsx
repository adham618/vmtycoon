/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

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
        {/* <!-- row --> */}
        <div className='mt-14 justify-between gap-9 text-center md:flex'>
          {/* <!-- card --> */}
          <div
            className='wow animate__animated animate__fadeInUp mb-8 rounded-lg border border-transparent bg-white p-6 dark:border-[#252525] dark:bg-[#191919] md:mb-0 md:w-4/12'
            data-wow-delay='.2s'
            data-wow-offset='10'
          >
            <div className='m-auto max-w-[130px]'>
              <img
                className='m-auto w-full'
                src='/images/pangolin.png'
                alt='pangolin'
              />
            </div>
            <p className='text-lg font-normal leading-7'>Pangolin Exchange</p>
          </div>
          {/* <!-- card --> */}
          <div
            className='wow animate__animated animate__fadeInUp mb-8 rounded-lg border border-transparent bg-white p-6 dark:border-[#252525]  dark:bg-[#191919] md:mb-0 md:w-4/12'
            data-wow-delay='.4s'
            data-wow-offset='10'
          >
            <div className='m-auto max-w-[130px]'>
              <img className='m-auto w-full' src='/images/joe.png' alt='Joi' />
            </div>
            <p className='text-lg font-normal leading-7'>TraderJoe Exchange</p>
          </div>
          {/* <!-- card --> */}
          <div
            className='wow animate__animated animate__fadeInUp mb-8 rounded-lg border border-transparent bg-white p-6 dark:border-[#252525] dark:bg-[#191919] md:mb-0 md:w-4/12'
            data-wow-delay='.6s'
            data-wow-offset='10'
          >
            <div className='m-auto max-w-[130px] '>
              <img
                className='m-auto w-full'
                src='/images/lyd.png'
                alt='Lydia Exchange'
              />
            </div>
            <p className='text-lg font-normal leading-7'>Lydia Exchange</p>
          </div>
        </div>
      </div>
    </section>
  );
}
