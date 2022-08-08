import * as React from 'react';

export default function Hero() {
  return (
    <section className='relative h-auto bg-hero-gradient bg-cover bg-center bg-no-repeat pt-[120px] pb-20 dark:bg-black-900 dark:bg-none lg:h-[750px] lg:pt-[100px] lg:pb-[100px] 2xl:h-[100vh]'>
      <div className='container'>
        <div className='items-center lg:flex'>
          <div className='self-center lg:w-6/12'>
            <h1
              className='text-animation wow animate__animated animate__fadeInUp visible mb-[30px] bg-heading-gradient text-center font-poppins text-[30px] font-bold leading-[40px] delay-200 md:text-[38px] md:leading-[50px] lg:text-left lg:text-[45px] lg:leading-[57px] xl:text-[50px]'
              data-wow-delay='.2s'
            >
              Tycoon NFTs With Upgradable Metadata
            </h1>
            <p
              className='wow animate__animated animate__fadeInUp mb-[35px] text-center text-lg leading-7 text-slate-600 dark:text-gray-400 lg:text-left lg:text-xl lg:leading-[30px]'
              data-wow-delay='.4s'
            >
              10,000 Tycoons are headed to the metaverse after news of untapped
              business opportunities! Tycoons come in all shapes and sizes.
            </p>
            <a
              href='#'
              className='btn wow animate__animated animate__fadeInUp relative my-0 mx-auto flex w-max items-center overflow-hidden rounded-[100px] bg-blue-gradient py-4 px-8  text-center font-poppins text-[16px] font-normal text-white shadow-btn outline-none lg:inline-flex lg:items-center lg:justify-center lg:whitespace-nowrap'
              data-wow-delay='.6s'
            >
              Open App
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='absolute top-[-10%] right-[-130px] block h-[200px] w-[200px] rounded-[50%] bg-[rgb(255,255,255,.2)] transition-all duration-[1s]'></span>
            </a>
            <a
              href='#'
              className='btn wow animate__animated animate__fadeInUp relative mx-auto mt-4 flex w-max items-center overflow-hidden rounded-[100px] bg-red-gradient py-4 px-8  text-center font-poppins text-[16px] font-normal text-white shadow-btn outline-none lg:inline-flex lg:items-center lg:justify-center lg:whitespace-nowrap'
              data-wow-delay='.6s'
            >
              Mint Tycoon
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='absolute top-[-10%] right-[-130px] block h-[200px] w-[200px] rounded-[50%] bg-[rgb(255,255,255,.2)] transition-all duration-[1s]'></span>
            </a>
          </div>
          <div className='flex-auto self-center lg:w-6/12'>
            <div>
               {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className='mw-full w-full p-5'
                src='/images/hero-img.png'
                alt='Hero Image'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
