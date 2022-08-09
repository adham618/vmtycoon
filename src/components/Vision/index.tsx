/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

export default function Vision() {
  return (
    <section className='overflow-clip bg-white py-[60px] dark:bg-black-900 dark:bg-none sm:py-[80px] lg:py-[100px]'>
      <div className='container'>
        <div className='justify-between gap-16 lg:flex'>
          <div className='text-center lg:w-8/12 lg:text-left'>
            <span className='mb-4 block text-[16px] font-normal uppercase text-pink-600'>
              Vision
            </span>
            <h2 className='mb-5 text-[26px] font-semibold leading-[26px] text-slate-900 dark:text-white sm:text-[34px] sm:leading-[44px] md:text-[40px]  md:leading-[52px]'>
              Our Vision
            </h2>
            <p className='text-lg leading-7'>
              Our inspiration for this project was Chikn. The well thought out
              ecosystem and balance was inspirational in our vision. We wanted
              to duplicate that success and bring the same experience to people
              that might have missed the boat. VM Tycoon is just the beginning.
            </p>
            <h5 className='my-5 text-lg font-semibold leading-7 text-slate-900 dark:text-white md:text-xl'>
              Vision Statement
            </h5>
            <ul className='mb-16 ml-4 list-[circle] text-left lg:mb-0'>
              <li className='leading-8'>
                Create a tri-token foundation for future utility
              </li>
              <li className='leading-8'>
                Transparency and honesty at all levels of the game
              </li>
              <li className='leading-8'>Provide the best community support</li>
              <li className='leading-8'>
                Fund liquidity to stabilize project volatility
              </li>
              <li className='leading-8'>
                Create a fun environment to play, chat and relax
              </li>
            </ul>
          </div>
          <div
            className="wow animate__animated animate__fadeInUp relative mx-auto mb-8 max-w-[512px] before:absolute before:right-[-55px] before:bottom-[-55px] before:z-0 before:h-[150px] before:w-[150px] before:bg-shape-2 before:bg-auto before:bg-no-repeat before:content-[''] after:absolute after:left-[-55px] after:top-[-55px] after:z-0 after:h-[150px] after:w-[150px] after:bg-shape-1 after:bg-auto after:bg-no-repeat after:content-[''] dark:before:opacity-30 dark:after:opacity-30 lg:mb-0 lg:w-4/12"
            data-wow-offset='10'
          >
            <img
              className='relative z-10 m-auto h-full w-full rounded-lg object-cover shadow-image dark:shadow-none'
              src='/images/vision.png'
              alt='Vision'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
