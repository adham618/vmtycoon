import Slider from '@reach/slider';
import * as React from 'react';

import ButtonArrow from '@/components/buttons/ButtonArrow';
import NextImage from '@/components/NextImage';
const wallets = [
  {
    id: 0,
    image: '/images/businesses-head.png',
    title: '$BIZ',
    YourBalance: '1054.33',
    PendingBalance: '11.1609',
    BusinessesActive: '964.02',
    perDay: '405',
    firstBtn: 'Claim All',
    secondBtn: 'Deposit',
    thirdBtn: 'Withdraw',
  },
  {
    id: 1,
    image: '/images/dollar-head.png',
    title: '$DOLLA',
    YourBalance: '48.0466',
    PendingBalance: '11.1609',
    BusinessesActive: '964.02',
    perDay: '405',
    firstBtn: 'Claim',
    secondBtn: 'Trade',
    thirdBtn: '',
  },
];
export default function Wallets() {
  const [showTradeModal, setShowTradeModal] = React.useState(false);
  const [Range, setRange] = React.useState(83);

  const handleSwap = () => {
    setShowTradeModal(false);
  };
  return (
    <>
      <section className='bg-white py-[60px] dark:bg-black-900 dark:bg-none sm:py-[80px] lg:py-[100px]'>
        <div className='container'>
          <div className='mt-14 justify-between gap-9 text-center md:flex'>
            <div
              className="wow animate__animated animate__fadeInUp relative mb-8 gap-5 overflow-hidden rounded-lg border border-[#d4f0ff] bg-white px-5 py-7 shadow-card transition-transform duration-[1s] ease-in-out after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-card-progress after:transition-all after:duration-[1.2s] after:content-[''] hover:-translate-y-1 hover:after:w-full dark:border-[#191919] dark:bg-[#191919] md:mb-0 md:w-1/2 md:px-4 md:py-12"
              data-wow-delay='.2s'
              data-wow-offset='10'
            >
              <div className='m-auto mb-5 max-w-[80px]'>
                <NextImage
                  width={80}
                  height={80}
                  className='m-auto w-full'
                  src={wallets[0].image}
                  alt='business'
                />
              </div>
              <div>
                <h4 className='mb-4 mt-5 text-xl font-semibold text-slate-900 dark:text-white md:mt-0 md:text-[22px]'>
                  {wallets[0].title}
                </h4>
                <p className='text-[17px]'>
                  Your Balance: <span>{wallets[0].YourBalance}</span>
                </p>
                <p className='text-[17px]'>
                  Pending Balance: <span>{wallets[0].PendingBalance}</span>
                </p>
                <p className='text-[17px]'>
                  Businesses Active: <span>{wallets[0].BusinessesActive}</span>
                </p>
                <p className='text-[17px]'>
                  Est. $BIZ per Day: <span> {wallets[0].perDay}</span>
                </p>
              </div>
              <ul className='flex flex-wrap justify-center '>
                <li className='px-2'>
                  <ButtonArrow
                    className='mt-4 py-2 px-4'
                    content={wallets[0].firstBtn}
                    href='#'
                  />
                </li>
                <li className='px-2'>
                  <ButtonArrow
                    className='mt-4 py-2 px-4'
                    content={wallets[0].secondBtn}
                    href='#'
                  />
                </li>
                <li className='px-2'>
                  <ButtonArrow
                    className='mt-4 py-2 px-4'
                    content={wallets[0].thirdBtn}
                    href='#'
                  />
                </li>
              </ul>
            </div>
            <div
              className="wow animate__animated animate__fadeInUp relative mb-8 gap-5 overflow-hidden rounded-lg border border-[#d4f0ff] bg-white px-5 py-7 shadow-card transition-transform duration-[1s] ease-in-out after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-card-progress after:transition-all after:duration-[1.2s] after:content-[''] hover:-translate-y-1 hover:after:w-full dark:border-[#191919] dark:bg-[#191919] md:mb-0 md:w-1/2 md:px-4 md:py-12"
              data-wow-delay='.2s'
              data-wow-offset='10'
            >
              <div className='m-auto mb-5 max-w-[80px]'>
                <NextImage
                  width={80}
                  height={80}
                  className='m-auto w-full'
                  src={wallets[1].image}
                  alt='business'
                />
              </div>
              <div>
                <h4 className='mb-4 mt-5 text-xl font-semibold text-slate-900 dark:text-white md:mt-0 md:text-[22px]'>
                  {wallets[0].title}
                </h4>
                <p className='text-[17px]'>
                  Your Balance: <span>{wallets[1].YourBalance}</span>
                </p>
                <p className='text-[17px]'>
                  Pending Balance: <span>{wallets[1].PendingBalance}</span>
                </p>
                <p className='text-[17px]'>
                  Businesses Active: <span>{wallets[1].BusinessesActive}</span>
                </p>
                <p className='text-[17px]'>
                  Est. $BIZ per Day: <span> {wallets[1].perDay}</span>
                </p>
              </div>
              <ul className='flex flex-wrap justify-center '>
                <li className='px-2'>
                  <ButtonArrow
                    className='mt-4 py-2 px-4'
                    content={wallets[1].firstBtn}
                    href='#'
                  />
                </li>
                <li className='px-2'>
                  <ButtonArrow
                    onClick={() => setShowTradeModal(true)}
                    className='mt-4 py-2 px-4'
                    content={wallets[1].secondBtn}
                    href='#'
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {showTradeModal && (
        <>
          <div className='fixed inset-0 z-[9999] mx-auto flex w-auto max-w-[360px]  overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
            <div className='relative my-6 mx-auto flex w-auto max-w-[360px] items-center justify-center'>
              <div className='relative flex w-full min-w-[18rem] max-w-[90%] flex-col items-center gap-3 rounded-md bg-white p-7 text-center shadow-lg outline-none focus:outline-none dark:bg-black-900 sm:min-w-[360px] sm:max-w-[600px]'>
                <NextImage
                  width={60}
                  height={60}
                  src='/images/businesses-head.png'
                  alt='image-header'
                  className='rounded-full border-2 border-solid border-black'
                />
                <div className='flex items-center justify-between'>
                  <h4 className='mt-4 text-xl font-semibold leading-10 text-black dark:text-white'>
                    Swap BIZ for DOLLA
                  </h4>
                </div>
                <div className='content mb-4'>
                  <p className='font-poppins text-[13px] font-normal leading-5 text-[#646364] dark:text-gray-400'>
                    You have:{' '}
                    <span className='font-semibold'>
                      {wallets[0].YourBalance}
                    </span>{' '}
                    BIZ.
                  </p>
                  <p className='font-poppins text-[13px] font-normal leading-5 text-[#646364] dark:text-gray-400'>
                    How much do you like to swap?
                    <br />
                    The swap rate ratio is{' '}
                    <span className='font-semibold'>1:450</span>.
                  </p>
                </div>
                <div className='grid w-full grid-cols-10 items-center gap-1'>
                  <Slider
                    name='range'
                    className='col-span-8'
                    value={Range}
                    onChange={(value) => setRange(value)}
                    min={0}
                    max={83}
                  />
                  <label
                    htmlFor='range'
                    className='col-span-2 text-[13px] text-gray-600 '
                  >
                    {Range}
                  </label>
                </div>
                <div className='mt-4 flex gap-2'>
                  <button
                    onClick={handleSwap}
                    className='mb-2 rounded-md bg-[#FFB700] px-4 py-2 text-xs text-black transition-all ease-in-out hover:bg-[#ffc021]'
                  >
                    Swap!
                  </button>
                  <button
                    onClick={() => setShowTradeModal(false)}
                    className='mb-2 rounded-md
                    bg-[#DF3438]  px-4 py-2 text-xs text-white  transition-all ease-in-out hover:bg-[#ee3033]'
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => setShowTradeModal(false)}
            className='fixed inset-0 z-50 cursor-pointer bg-black opacity-25'
          ></div>
        </>
      )}
    </>
  );
}
