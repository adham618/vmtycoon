/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

export default function Features() {
  return (
    <section className='bg-section-gradient py-[60px] dark:bg-black-900 dark:bg-none sm:py-[80px] lg:py-[100px]'>
      <div className='container'>
        <div className='m-auto text-center xl:w-1/2'>
          <span className='mb-4 block text-[16px] font-normal uppercase text-pink-600'>
            Thats so cool
          </span>
          <h2 className='mb-5 text-[26px] font-semibold leading-[26px] text-slate-900 dark:text-white sm:text-[34px] sm:leading-[44px] md:text-[40px]  md:leading-[52px]'>
            Our Features
          </h2>
          <p className='text-lg font-normal leading-7'>
            Our tri-token ecosystem has been tested time and time again to
            provide a fun spin on the boring DeFi experience. You might even
            learn a little about economics on your journey.
          </p>
        </div>
        <div className='mt-14 justify-between gap-9 text-center md:flex md:text-left'>
          {/* <!-- card --> */}
          <div
            className='wow animate__animated animate__fadeInUp mb-8 gap-5 rounded-lg border border-[#d4f0ff] bg-white px-5 py-7 shadow-card dark:border-[#191919] dark:bg-[#191919] md:mb-0 md:flex md:w-1/2 md:px-4 md:py-12'
            data-wow-delay='.2s'
            data-wow-offset='10'
          >
            <div className='m-auto max-w-[150px] md:m-0 '>
              <img
                className='m-auto w-full'
                src='/images/globe.png'
                alt='Globe'
              />
            </div>
            <div>
              <h4 className='mb-4text-slate-900 mt-5 text-xl font-semibold dark:text-white md:mt-0 md:text-[22px]'>
                MarketPlace
              </h4>
              <p className='text-lg font-normal leading-7'>
                Mint sold out? You are not too late! Our NFT marketplace makes
                VM Tycoon a one-stop shop for your playing needs. Get that Epic
                you deserve.
              </p>
            </div>
          </div>
          {/* <!-- card --> */}
          <div
            className='wow animate__animated animate__fadeInUp mb-8 gap-5 rounded-lg border border-[#d4f0ff] bg-white px-5 py-7 shadow-card dark:border-[#191919] dark:bg-[#191919] md:mb-0 md:flex md:w-1/2 md:px-4 md:py-12'
            data-wow-delay='.4s'
            data-wow-offset='10'
          >
            <div className='m-auto max-w-[150px] md:m-0 '>
              <img
                className='m-auto w-full'
                src='/images/community.png'
                alt='community'
              />
            </div>
            <div>
              <h4 className='mb-4text-slate-900 mt-5 text-xl font-semibold dark:text-white md:mt-0 md:text-[22px]'>
                Community
              </h4>
              <p className='text-lg font-normal leading-7'>
                The Vending Machine community is a collection of great people
                that love to chat about all things crypto. Come join us on
                Discord!
              </p>
            </div>
          </div>
        </div>
        {/* <!-- row --> */}
        <div className='mt-9 justify-between gap-9 text-center md:flex md:text-left'>
          {/* <!-- card --> */}
          <div
            className='wow animate__animated animate__fadeInUp mb-8 gap-5 rounded-lg border border-[#d4f0ff] bg-white px-5 py-7 shadow-card dark:border-[#191919] dark:bg-[#191919] md:mb-0 md:flex md:w-1/2 md:px-4 md:py-12'
            data-wow-delay='.6s'
            data-wow-offset='10'
          >
            <div className='m-auto max-w-[150px] md:m-0 '>
              <img
                className='m-auto w-full'
                src='/images/marketplace.png'
                alt='marketplace'
              />
            </div>
            <div>
              <h4 className='mb-4 mt-5 text-xl font-semibold text-slate-900 dark:text-white md:mt-0 md:text-[22px]'>
                Marketplace
              </h4>
              <p className='text-lg font-normal leading-7'>
                Mint sold out? You are not too late! Our NFT marketplace makes
                VM Tycoon a one-stop shop for your playing needs. Get that Epic
                you deserve.
              </p>
            </div>
          </div>
          {/* <!-- card --> */}
          <div
            className='wow animate__animated animate__fadeInUp gap-5 rounded-lg border border-[#d4f0ff] bg-white px-5 py-7 shadow-card dark:border-[#191919] dark:bg-[#191919] md:flex md:w-1/2 md:px-4 md:py-12'
            data-wow-delay='.8s'
            data-wow-offset='10'
          >
            <div className='m-auto max-w-[150px] md:m-0 '>
              <img
                className='m-auto w-full'
                src='/images/uniqe.png'
                alt='uniqe'
              />
            </div>
            <div>
              <h4 className='mb-4 mt-5 text-xl font-semibold text-slate-900 dark:text-white md:mt-0 md:text-[22px]'>
                Uniqe NFTs
              </h4>
              <p className='text-lg font-normal leading-7'>
                Our 10,000 algorithmically generated, unique Tycoon NFT’s are no
                ordinary high rollers. They’re upgradable!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
