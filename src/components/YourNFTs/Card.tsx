/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

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
  return (
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
  );
}
