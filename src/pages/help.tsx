import type { NextPage } from 'next';
import Head from 'next/head';

import Exchanges from '@/components/Exchanges';
import NextImage from '@/components/NextImage';

const HelpPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Help</title>
      </Head>
      {/* <!-- Block Section --> */}
      <section className="relative bg-breadcrumb-img bg-cover bg-center bg-no-repeat pt-[250px]  before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-10 before:bg-breadcrumb before:opacity-80 before:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:z-10 after:bg-breadcrumb-shap after:bg-contain after:bg-right after:bg-no-repeat after:content-[''] dark:before:bg-[#101010] dark:before:bg-none  dark:before:opacity-90 "></section>
      {/* <!-- Secret of success --> */}
      <section className='bg-white-200 py-[60px] dark:bg-black-500 dark:bg-none sm:py-[80px] lg:py-[100px] '>
        <div className='container max-w-7xl'>
          <div className='m-auto text-center xl:w-1/2'>
            <span className='mb-4 block text-[16px] font-normal uppercase text-pink-600'>
              The secret to your success{' '}
            </span>
            <h2 className='mb-5 text-[26px] font-semibold leading-[26px] text-slate-900 dark:text-white sm:text-[34px] sm:leading-[44px] md:text-[40px]  md:leading-[52px]'>
              How to be a Tycoon
            </h2>
            <p className='mb-10 text-lg font-normal leading-7'>
              Being successful takes a lot of work! Follow these easy steps to
              get you started.
            </p>
          </div>
          <div className='row'>
            <div className='mb-[60px] items-center justify-between gap-16 md:flex'>
              <div className='md:w-5/12 lg:w-4/12'>
                <NextImage
                  className='mb-6  w-full rounded-lg shadow-image dark:shadow-sm lg:mb-0'
                  width={200}
                  height={200}
                  src='/images/process-1.png'
                  alt=''
                />
              </div>
              <div className='md:w-7/12 lg:w-8/12'>
                <span className='mb-5 block h-[100px] w-[100px] animate-borderTransform rounded-bubble border border-[#e8e8e8] bg-white-500 text-center font-poppins text-[60px] font-medium leading-[100px] text-slate-600 dark:border-[#2b2b7d] dark:bg-[#24213c] '>
                  1
                </span>
                <h3 className='mb-5 text-[24px] font-semibold leading-[34px] text-slate-900 dark:text-white-200 lg:text-[34px] lg:leading-[46px]'>
                  Buy A VM Tycoon NFT
                </h3>
                <p>
                  Not only are Tycoons highly desirable, collectible NFTs, they
                  learn the $BIZ. In short, when you stake your Tycoon at
                  vmtycoon.io they begin generating $BIZ.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='mb-[60px] items-center justify-between gap-16 md:flex'>
              <div className='md:w-7/12 lg:w-8/12'>
                <span className='mb-5 block h-[100px] w-[100px] animate-borderTransform rounded-bubble border border-[#e8e8e8] bg-white-500 text-center font-poppins text-[60px] font-medium leading-[100px] text-slate-600 dark:border-[#2b2b7d] dark:bg-[#24213c] '>
                  2
                </span>
                <h3 className='mb-5 text-[24px] font-semibold leading-[34px] text-slate-900 dark:text-white-200 lg:text-[34px] lg:leading-[46px]'>
                  Start Your Business
                </h3>
                <p>
                  $BIZ, the native governance & utility token of VM Tycoons, is
                  the fuel of the VM Tycoon ecosystem. ALL 10,000 VM Tycoons can
                  generate $BIZ, so stake your Tycoon in the office, and he will
                  start working!
                </p>
              </div>
              <div className='md:w-5/12 lg:w-4/12'>
                <NextImage
                  width={200}
                  height={215}
                  className='mt-6  w-full rounded-lg shadow-image dark:shadow-sm lg:mt-0'
                  src='/images/process-2.png'
                  alt='process'
                />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='mb-[60px] items-center justify-between gap-16 md:flex'>
              <div className='md:w-5/12 lg:w-4/12'>
                <NextImage
                  width={200}
                  height={215}
                  className='mb-6  w-full rounded-lg shadow-image dark:shadow-sm lg:mb-0'
                  src='/images/process-3.png'
                  alt='process'
                />
              </div>
              <div className='md:w-7/12 lg:w-8/12'>
                <span className='mb-5 block h-[100px] w-[100px] animate-borderTransform rounded-bubble border border-[#e8e8e8] bg-white-500 text-center font-poppins text-[60px] font-medium leading-[100px] text-slate-600 dark:border-[#2b2b7d] dark:bg-[#24213c] '>
                  3
                </span>
                <h3 className='mb-5 text-[24px] font-semibold leading-[34px] text-slate-900 dark:text-white-200 lg:text-[34px] lg:leading-[46px]'>
                  Earn The Mighty $DOLLA
                </h3>
                <p>
                  $DOLLA, the initial utility & marketing reward token of all
                  Tycoons, is the product of hard work! All 10,000 Tycoons can
                  be upgraded using $DOLLA to learn $BIZ faster. $DOLLA is
                  earned by marketing (staking) your $BIZ on vmtycoon.io
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='items-center justify-between gap-16 md:flex'>
              <div className='md:w-7/12 lg:w-8/12'>
                <span className='mb-5 block h-[100px] w-[100px] animate-borderTransform rounded-bubble border border-[#e8e8e8] bg-white-500 text-center font-poppins text-[60px] font-medium leading-[100px] text-slate-600 dark:border-[#2b2b7d] dark:bg-[#24213c] '>
                  4
                </span>
                <h3 className='mb-5 text-[24px] font-semibold leading-[34px] text-slate-900 dark:text-white-200 lg:text-[34px] lg:leading-[46px]'>
                  Earn The Mighty $DOLLA
                </h3>
                <p>
                  $DOLLA, the initial utility & marketing reward token of all
                  Tycoons, is the product of hard work! All 10,000 Tycoons can
                  be upgraded using $DOLLA to learn $BIZ faster. $DOLLA is
                  earned by marketing (staking) your $BIZ on vmtycoon.io
                </p>
              </div>
              <div className='md:w-5/12 lg:w-4/12'>
                <NextImage
                  width={200}
                  height={215}
                  className='mt-6  w-full rounded-lg shadow-image dark:shadow-sm lg:mt-0'
                  src='/images/process-4.png'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Exchanges />
    </>
  );
};

export default HelpPage;
