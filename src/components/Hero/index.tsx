import * as React from 'react';

import ButtonArrow from '@/components/buttons/ButtonArrow';

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
            <ButtonArrow content='Open App' href='#' wowDelay='.6s' />{' '}
            <ButtonArrow
              className='bg-red-gradient'
              content='Mint Tycoon'
              href='#'
              wowDelay='.6s'
            />
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
