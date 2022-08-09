/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

export default function Statistics() {
  return (
    <section className='bg-section-gradient py-7 dark:bg-[#151515] dark:bg-none'>
      <div className='container'>
        <div className='flex-wrap items-center justify-between sm:flex'>
          <div className='mb-7 flex items-center justify-start sm:w-1/2 lg:mb-0 lg:w-3/12'>
            <div className='h-[80px] w-[80px] rounded-tl-[8px] rounded-tr-[40px] rounded-br-[8px] rounded-bl-[40px] bg-white p-4'>
              <img src='/images/businesses-head.png' alt='business' />
            </div>
            <div className='ml-5'>
              <h4 className='font-poppins text-[30px]  font-bold text-slate-900 dark:text-slate-200 md:text-[35px]'>
                $<span>0.14</span>
              </h4>
              <p className='text-lg font-medium leading-6'>Biz Price</p>
            </div>
          </div>
          <div className='mb-7 flex items-center justify-start sm:w-1/2 lg:mb-0 lg:w-3/12'>
            <div className='h-[80px] w-[80px] rounded-tl-[8px] rounded-tr-[40px] rounded-br-[8px] rounded-bl-[40px] bg-white p-4'>
              <img src='/images/dollar-head.png' alt='dollar' />
            </div>
            <div className='ml-5'>
              <h4 className='font-poppins text-[30px]  font-bold text-slate-900 dark:text-slate-200 md:text-[35px]'>
                $<span>0.001</span>
              </h4>
              <p className='text-lg font-medium leading-6'>Dollar Price</p>
            </div>
          </div>
          <div className='mb-7 flex items-center justify-start sm:mb-0 sm:w-1/2 lg:w-3/12'>
            <div className='h-[80px] w-[80px] rounded-tl-[8px] rounded-tr-[40px] rounded-br-[8px] rounded-bl-[40px] bg-white p-4'>
              <img src='/images/network.svg' alt='network' />
            </div>
            <div className='ml-5'>
              <h4 className='font-poppins text-[30px]  font-bold text-slate-900 dark:text-slate-200 md:text-[35px]'>
                <span className='text-[30px] text-green-700  md:text-[35px]'>
                  ●
                </span>
                <span>50</span>
              </h4>
              <p className='text-lg font-medium leading-6'>Network Fees</p>
            </div>
          </div>
          <div className='flex items-center justify-start sm:w-1/2 lg:w-3/12'>
            <div className='h-[80px] w-[80px] rounded-tl-[8px] rounded-tr-[40px] rounded-br-[8px] rounded-bl-[40px] bg-white p-4'>
              <img src='/images/avax-logo.svg' alt='avax' />
            </div>
            <div className='ml-5'>
              <h4 className='font-poppins text-[30px] font-bold text-slate-900 dark:text-slate-200 md:text-[35px]'>
                $<span>85.18</span>
              </h4>
              <p className='text-lg font-medium leading-6'>Avalanche Price</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
