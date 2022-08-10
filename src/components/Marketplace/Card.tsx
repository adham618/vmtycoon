import * as React from 'react';

import NextImage from '@/components/NextImage';

type CardProps = {
  CardImage: string;
  WorkerId: string;
  Level: string;
  Rarity: string;
  RarityType: string;
  Price: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function Card({
  CardImage,
  WorkerId,
  Level,
  Rarity,
  RarityType,
  Price,
}: CardProps) {
  return (
    <div className='mb-5 px-3 sm:w-1/2 md:w-4/12 lg:w-3/12'>
      <div className='overflow-hidden rounded-md border border-slate-400'>
        <NextImage
          priority
          width={285}
          height={360}
          src={CardImage}
          alt='cardImage'
        />
        <div className='bg-black-400 p-5 text-center'>
          <h4 className='mb-1 text-lg font-semibold text-white'>
            Worker #<span>{WorkerId}</span>
          </h4>
          <p className='mb-2 font-poppins text-[17px] font-normal text-white'>
            Level <span>{Level}</span>
          </p>
          <div className='mb-1 font-poppins text-[17px] font-normal text-white'>
            Rarity
            <span>{Rarity}</span>
            <span className='mb-2 rounded-md bg-common px-2 py-1 font-poppins text-[11px] font-semibold text-slate-400'>
              {RarityType}
            </span>
            <p className='mb-3 font-poppins text-[17px] font-normal text-white'>
              Price <span>{Price}</span>
            </p>
            <button
              className='rounded bg-[#0d6efd] px-2 py-1 text-sm text-white transition-all ease-in-out hover:bg-[#0b5ed7]'
              type='button'
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
