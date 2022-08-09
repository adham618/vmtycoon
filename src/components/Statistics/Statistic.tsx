import * as React from 'react';

import NextImage from '@/components/NextImage';

type indexProps = {
  image: string;
  altImage: string;
  symbol?: string;
  coloredSymbol?: string;
  price: string;
  title: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function Statistic({
  image,
  altImage,
  symbol,
  coloredSymbol,
  price,
  title,
}: indexProps) {
  return (
    <div className='mb-7 flex items-center justify-start sm:w-1/2 lg:mb-0 lg:w-3/12'>
      <div className='h-[80px] w-[80px] rounded-tl-[8px] rounded-tr-[40px] rounded-br-[8px] rounded-bl-[40px] bg-white p-4'>
        <NextImage width={50} height={50} src={image} alt={altImage} />
      </div>
      <div className='ml-5'>
        <h4 className='font-poppins text-[30px]  font-bold text-slate-900 dark:text-slate-200 md:text-[35px]'>
          {symbol}{' '}
          <span className='text-[30px] text-green-700  md:text-[35px]'>
            {coloredSymbol}{' '}
          </span>
          <span>{price}</span>
        </h4>
        <p className='text-lg font-medium leading-6'>{title}</p>
      </div>
    </div>
  );
}
