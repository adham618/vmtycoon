import * as React from 'react';

import ButtonArrow from '@/components/buttons/ButtonArrow';
import NextImage from '@/components/NextImage';

type WalletProps = {
  image: string;
  title: string;
  YourBalance: string;
  PendingBalance: string;
  BusinessesActive: string;
  perDay: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function Wallet({
  image,
  title,
  YourBalance,
  PendingBalance,
  BusinessesActive,
  perDay,
}: WalletProps) {
  return (
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
            content='Claim ALL'
            href='#'
          />
        </li>
        <li className='px-2'>
          <ButtonArrow className='mt-4 py-2 px-4' content='Deposit' href='#' />
        </li>
        <li className='px-2'>
          <ButtonArrow className='mt-4 py-2 px-4' content='Withdraw' href='#' />
        </li>
      </ul>
    </div>
  );
}
