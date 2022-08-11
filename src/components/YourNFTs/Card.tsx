/* eslint-disable @next/next/no-img-element */
import { Slider } from '@reach/slider';
import * as React from 'react';

import '@reach/slider/styles.css';

import NextImage from '@/components/NextImage';
type CardProps = {
  image: string;
  TycoonID: string;
  state: string;
  level: string;
  Pending: string;
  Dolla: string;
  Rarity: string;
  RarityBtn: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function Card({
  image,
  TycoonID,
  state,
  level,
  Pending,
  Dolla,
  Rarity,
  RarityBtn,
}: CardProps) {
  const [showModal, setShowModal] = React.useState(false);
  const [Range, setRange] = React.useState(11993);

  const handleDOLLA = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className='mb-5 px-3 transition-all duration-1000 ease-in-out hover:-translate-y-2 sm:w-1/2 md:w-4/12 lg:w-3/12'>
        <div className='rounded-lg'>
          <a href='#' className='block overflow-hidden rounded-lg'>
            <img src={image} alt='cardImage' />
          </a>
          <div className='m-auto w-[95%] -translate-y-10 rounded-lg rounded-tl-[40px] bg-white p-5 text-center shadow-NFT-body dark:bg-black-500'>
            <h4 className='mb-1 text-xl font-semibold text-slate-900 dark:text-slate-200 lg:text-2xl'>
              Tycoon ID #<span>{TycoonID}</span>
            </h4>
            <span className='rounded-md bg-uncommon px-2 py-1 font-poppins text-[12px] font-semibold text-white'>
              {state}
            </span>
            <p className='my-2 font-poppins text-[17px] font-normal text-slate-600 dark:text-gray-400'>
              Level <span className='font-semibold'>{level}</span>
            </p>
            <p className='mb-1 font-poppins text-[17px] font-normal text-slate-600  dark:text-gray-400'>
              Pending BIZ: <span className='font-semibold'>{Pending}</span>
            </p>
            <p className='mb-1 font-poppins text-[17px] font-normal text-slate-600  dark:text-gray-400'>
              Dolla: <span className='font-semibold'>{Dolla} </span>
            </p>
            <p className='mb-1 font-poppins text-[17px] font-normal text-slate-600  dark:text-gray-400'>
              Rarity: <span>{Rarity} </span>
              <span className='mb-2 rounded-md bg-common px-2 py-1 font-poppins text-[11px] font-semibold text-black-400'>
                {RarityBtn}
              </span>
            </p>
            <div className='mt-2 flex flex-wrap justify-center'>
              <button
                className='mr-2 mb-2 rounded bg-[#0d6efd] px-2 py-1 text-sm text-white transition-all ease-in-out hover:bg-[#0b5ed7]'
                type='button'
              >
                List
              </button>
              <button
                className='mr-2 mb-2 rounded bg-[#0d6efd] px-2 py-1 text-sm text-white transition-all ease-in-out hover:bg-[#0b5ed7]'
                type='button'
              >
                Claim BIZ
              </button>
              <button
                onClick={() => setShowModal(true)}
                className='mr-2 mb-2 rounded bg-[#0d6efd] px-2 py-1 text-sm text-white transition-all ease-in-out hover:bg-[#0b5ed7]'
                type='button'
              >
                Add dolla
              </button>
              <button
                className='mr-2 mb-2 rounded bg-[#0d6efd] px-2 py-1 text-sm text-white transition-all ease-in-out hover:bg-[#0b5ed7]'
                type='button'
              >
                Change Name
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <>
          <div className='fixed inset-0 z-[9999] mx-auto flex w-auto max-w-[360px] overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
            <div className='relative my-6 mx-auto flex w-auto max-w-[360px] items-center justify-center'>
              <div className='relative flex w-full max-w-[90%] flex-col items-center gap-3 rounded-md border border-white bg-white p-7 text-center shadow-lg outline-none focus:outline-none dark:bg-black-900 sm:max-w-[600px]'>
                <NextImage
                  width={60}
                  height={60}
                  src='/images/businesses-head.png'
                  alt='image-header'
                  className='rounded-full border-2 border-solid border-black'
                />
                <div className='flex items-center justify-between'>
                  <h4 className='text-xl font-semibold leading-10 text-black dark:text-white'>
                    How many Dolla would you like to invest into your upgrade?
                  </h4>
                </div>
                <div className='content mb-4'>
                  <p className='font-poppins text-[13px] font-normal leading-7 text-[#646364] dark:text-gray-400'>
                    Avaliable DOLLA:{' '}
                    <span className='font-semibold'>11993</span>
                  </p>
                  <p className='font-poppins text-[13px] font-normal leading-7 text-[#646364] dark:text-gray-400'>
                    Dolla needed for next level:{' '}
                    <span className='font-semibold'>34225</span>
                  </p>
                </div>
                <div className='grid w-full grid-cols-10 items-center gap-1'>
                  <Slider
                    name='range'
                    className='col-span-8'
                    value={Range}
                    onChange={(value) => setRange(value)}
                    min={0}
                    max={11993}
                    step={10}
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
                    onClick={handleDOLLA}
                    className='mb-2 rounded-md bg-[#FFB700] px-4 py-2 text-xs text-black transition-all ease-in-out hover:bg-[#ffc021]'
                  >
                    Add DOLLA!
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
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
            onClick={() => setShowModal(false)}
            className='fixed inset-0 z-50 cursor-pointer bg-black opacity-25'
          ></div>
        </>
      )}
    </>
  );
}
//  mx-auto  w-full
