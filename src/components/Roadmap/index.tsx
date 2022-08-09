import * as React from 'react';

export default function Roadmap() {
  return (
    <section className='bg-white py-[60px] dark:bg-black-900 dark:bg-none sm:py-[80px] lg:py-[100px]'>
      <div className='container'>
        <div className='m-auto text-center xl:w-1/2'>
          <span className='mb-4 block text-[16px] font-normal uppercase text-pink-600'>
            As time goes by
          </span>
          <h2 className='mb-14 text-[26px] font-semibold leading-[26px] text-slate-900 dark:text-white sm:text-[34px] sm:leading-[44px] md:text-[40px]  md:leading-[52px]'>
            Our Roadmap
          </h2>
        </div>
        {/* <!-- timeline --> */}
        <div className="relative after:absolute after:top-0 after:right-[50%] after:ml-[-2px] after:hidden after:h-full after:border-r-2 after:border-dashed after:border-blue-600 after:content-[''] lg:after:block">
          {/* <!-- row 1--> */}
          <div className='relative mb-8 pl-0 lg:pr-[50%]'>
            {/* <!-- name --> */}
            <div className='mr-0 mb-3 text-[22px] font-semibold text-slate-900 dark:text-white lg:absolute lg:top-4 lg:right-auto lg:left-[50%] lg:ml-6 lg:mb-0'>
              <h5 className=''>Project Development</h5>
              <span className='block font-poppins text-[15px]'>Q1 2022</span>
            </div>
            {/* <!-- Content --> */}
            <div className="relative rounded-lg border border-slate-200 bg-white py-5 px-7 shadow-card before:absolute before:top-5 before:right-[-49px] before:z-10 before:hidden before:h-5 before:w-5 before:rounded-full before:border-2 before:border-dashed before:border-blue-600 before:bg-white before:content-[''] after:absolute after:top-5 after:right-[-8px] after:hidden after:h-4 after:w-4 after:rotate-45 after:border after:border-l-0 after:border-b-0 after:border-slate-200 after:bg-white after:content-[''] dark:border-[#151515] dark:bg-[#151515] dark:before:bg-black-900 dark:after:border-[#151515] dark:after:bg-[#151515] lg:mr-10 lg:before:block lg:after:block">
              <p>
                • Development and testing of contracts <br />
                • Art development for NFT’s, Website & Social Media <br />
                • Website Development <br />• Establish Social Media
              </p>
            </div>
          </div>
          {/* <!-- row 2--> */}
          <div className='relative mb-8 pr-0 lg:pl-[50%]'>
            {/* <!-- name --> */}
            <div className='mr-0 mb-3 text-[22px] font-semibold text-slate-900 dark:text-white lg:absolute lg:top-4 lg:left-auto lg:right-[50%] lg:mr-6 lg:mb-0'>
              <h5 className=''>Project Launch</h5>
              <span className='block font-poppins text-[15px]'>Q1 2022</span>
            </div>
            {/* <!-- Content --> */}
            <div className="relative rounded-lg border border-slate-200 bg-white py-5 px-7 shadow-card before:absolute before:top-5 before:left-[-52px] before:z-10 before:hidden before:h-5 before:w-5 before:rounded-full before:border-2 before:border-dashed before:border-blue-600 before:bg-white before:content-[''] after:absolute after:top-5 after:left-[-8px] after:hidden after:h-4 after:w-4 after:rotate-45 after:border after:border-r-0 after:border-t-0 after:border-slate-200 after:bg-white after:content-[''] dark:border-[#151515] dark:bg-[#151515] dark:before:bg-black-900 dark:after:border-[#151515] dark:after:bg-[#151515] lg:ml-10 lg:before:block lg:after:block">
              <p>
                • Mining NFT’s for sale on the Avalanche ecosystem
                <br />
                • $BIZ and $DOLLA liquidity established
                <br />• Post launch marketing campaign begins
              </p>
            </div>
          </div>
          {/* <!-- row 3--> */}
          <div className='relative mb-8 pl-0 lg:pr-[50%]'>
            {/* <!-- name --> */}
            <div className='mr-0 mb-3 text-[22px] font-semibold text-slate-900 dark:text-white lg:absolute lg:top-4 lg:right-auto lg:left-[50%] lg:ml-6 lg:mb-0'>
              <h5 className=''>Post Launch</h5>
              <span className='block font-poppins text-[15px]'>Q1 2022</span>
            </div>
            {/* <!-- Content --> */}
            <div className="relative rounded-lg border border-slate-200 bg-white py-5 px-7 shadow-card before:absolute before:top-5 before:right-[-49px] before:z-10 before:hidden before:h-5 before:w-5 before:rounded-full before:border-2 before:border-dashed before:border-blue-600 before:bg-white before:content-[''] after:absolute after:top-5 after:right-[-8px] after:hidden after:h-4 after:w-4 after:rotate-45 after:border after:border-l-0 after:border-b-0 after:border-slate-200 after:bg-white after:content-[''] dark:border-[#151515] dark:bg-[#151515] dark:before:bg-black-900 dark:after:border-[#151515] dark:after:bg-[#151515] lg:mr-10 lg:before:block lg:after:block">
              <p>
                • Partnerships & Collaborations
                <br />
                • Expand to other chains
                <br />
                • Establish VMDao
                <br />
                • CoinMarketCap listing
                <br />• CoinGecko Listing
              </p>
            </div>
          </div>
          {/* <!-- row 4--> */}
          <div className='relative mb-8 pr-0 lg:pl-[50%]'>
            {/* <!-- name --> */}
            <div className='mr-0 mb-3 text-[22px] font-semibold text-slate-900 dark:text-white lg:absolute lg:top-4 lg:left-auto lg:right-[50%] lg:mr-6 lg:mb-0'>
              <h5 className=''>Even More Post Launch</h5>
              <span className='block font-poppins text-[15px]'>Q1 2022</span>
            </div>
            {/* <!-- Content --> */}
            <div className="relative rounded-lg border border-slate-200 bg-white py-5 px-7 shadow-card before:absolute before:top-5 before:left-[-52px] before:z-10 before:hidden before:h-5 before:w-5 before:rounded-full before:border-2 before:border-dashed before:border-blue-600 before:bg-white before:content-[''] after:absolute after:top-5 after:left-[-8px] after:hidden after:h-4 after:w-4 after:rotate-45 after:border after:border-r-0 after:border-t-0 after:border-slate-200 after:bg-white after:content-[''] dark:border-[#151515] dark:bg-[#151515] dark:before:bg-black-900 dark:after:border-[#151515] dark:after:bg-[#151515] lg:ml-10 lg:before:block lg:after:block">
              <p>
                • Gen 2 development <br />• More Partnerships & Collaborations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
