import Slider from '@reach/slider';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import ButtonArrow from '@/components/buttons/ButtonArrow';
import NextImage from '@/components/NextImage';

type WalletProps = {
  className?: string;
  image: string;
  title: string;
  YourBalance: string;
  PendingBalance: string;
  BusinessesActive: string;
  perDay: string;
  firstBtn: string;
  secondBtn: string;
  thirdBtn?: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function Wallet({
  className,
  image,
  title,
  YourBalance,
  PendingBalance,
  BusinessesActive,
  perDay,
  firstBtn,
  secondBtn,
  thirdBtn,
}: WalletProps) {
  const [showTradeModal, setShowTradeModal] = React.useState(false);
  const [Range, setRange] = React.useState(83);

  const handleSwap = () => {
    setShowTradeModal(false);
  };
  return (
    <>
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
            src={image}
            alt='business'
          />
        </div>
        <div>
          <h4 className='mb-4 mt-5 text-xl font-semibold text-slate-900 dark:text-white md:mt-0 md:text-[22px]'>
            {title}
          </h4>
          <p className='text-[17px]'>
            Your Balance: <span>{YourBalance}</span>
          </p>
          <p className='text-[17px]'>
            Pending Balance: <span>{PendingBalance}</span>
          </p>
          <p className='text-[17px]'>
            Businesses Active: <span>{BusinessesActive}</span>
          </p>
          <p className='text-[17px]'>
            Est. $BIZ per Day: <span> {perDay}</span>
          </p>
        </div>
        <ul className='flex flex-wrap justify-center '>
          <li className='px-2'>
            <ButtonArrow
              className='mt-4 py-2 px-4'
              content={firstBtn}
              href='#'
            />
          </li>
          <li className='px-2'>
            <ButtonArrow
              onClick={() => setShowTradeModal(true)}
              className='mt-4 py-2 px-4'
              content={secondBtn}
              href='#'
            />
          </li>
          <li className={clsxm('px-2', className)}>
            <ButtonArrow
              onClick={() => setShowTradeModal(true)}
              className='mt-4 py-2 px-4'
              content={thirdBtn}
              href='#'
            />
          </li>
        </ul>
      </div>
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
                  <h4 className='text-xl font-semibold leading-10 text-black dark:text-white'>
                    Swap BIZ for DOLLA
                  </h4>
                </div>
                <div className='content mb-4'>
                  <p className='font-poppins text-[13px] font-normal leading-5 text-[#646364] dark:text-gray-400'>
                    You have:{' '}
                    <span className='font-semibold'>{YourBalance}</span> BIZ.
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
