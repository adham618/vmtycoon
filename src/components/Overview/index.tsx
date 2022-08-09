/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

export default function Overview() {
  return (
    <section className='bg-section-gradient py-[60px] dark:bg-black-900 dark:bg-none sm:py-[80px] lg:py-[100px]'>
      <div className='container'>
        <div className='justify-between gap-16 lg:flex'>
          <div
            className="wow animate__animated animate__fadeInUp relative mb-8 before:absolute before:bottom-[-10px] before:left-[-10px] before:z-0 before:h-[50%] before:w-[50%] before:rounded-bl-[8px] before:bg-pseudo-gradient before:content-[''] after:absolute after:top-[-10px] after:right-[-10px] after:z-0 after:h-[50%] after:w-[50%] after:rounded-tr-[8px] after:bg-pseudo-gradient after:content-[''] lg:mb-0 lg:w-4/12"
            data-wow-offset='10'
          >
            <img
              className='relative z-10 m-auto h-full w-full rounded-lg object-cover'
              src='/images/graphic-design.png'
              alt='graphic-design'
            />
          </div>
          <div className='text-center lg:w-8/12 lg:text-left'>
            <span className='mb-4 block text-[16px] font-normal uppercase text-pink-600'>
              Overview
            </span>
            <h2 className='mb-5 text-[26px] font-semibold leading-[26px] text-slate-900 dark:text-white sm:text-[34px] sm:leading-[44px] md:text-[40px]  md:leading-[52px]'>
              About Us
            </h2>
            <p className='text-lg leading-7'>
              Our goal is to change the narrative in NFT space from just a
              profile picture, to a multi-utility asset that evolves with
              strategy and complexity as the game plays on. From our roots with
              Vending Machines we maintain an honest and fair system with
              holders first on our minds.
              <br />
              <br />
              As we are building this community, it&apos;s establishing itself
              as an umbrella to many more NFT projects to come. An NFT
              collection by the community for the community!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
