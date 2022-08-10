import * as React from 'react';

import NextImage from '@/components/NextImage';

type ExchangeProps = {
  image: string;
  altImage: string;
  title: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function Exchange({ image, altImage, title }: ExchangeProps) {
  return (
    <div
      className='wow animate__animated animate__fadeInUp mb-8 rounded-lg border border-transparent bg-white p-6 dark:border-[#252525] dark:bg-[#191919] md:mb-0 md:w-4/12'
      data-wow-delay='.2s'
      data-wow-offset='10'
    >
      <div className='m-auto max-w-[130px]'>
        <NextImage
          priority
          className='m-auto w-full'
          width={100}
          height={100}
          src={image}
          alt={altImage}
        />
      </div>
      <p className='text-lg font-normal leading-7'>{title}</p>
    </div>
  );
}
