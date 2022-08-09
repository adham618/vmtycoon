import * as React from 'react';

import NextImage from '@/components/NextImage';

type indexProps = {
  background: string;
  textColor: string;
  title: string;
  Rarity: string;
  image: string;
  altImage: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function Card({
  background,
  textColor,
  title,
  Rarity,
  image,
  altImage,
}: indexProps) {
  return (
    <div>
      <span
        className={`${background} ${textColor} mb-2 block rounded-md px-2 py-1 font-poppins text-[11px] font-semibold `}
      >
        {title}
      </span>
      <div className='flex items-center justify-center gap-1'>
        <span className='font-poppins text-[17px] font-normal text-slate-900 dark:text-slate-200'>
          {Rarity}
        </span>
        <NextImage
          width={50}
          height={50}
          className='h-[18px] w-[18px]'
          src={image}
          alt={altImage}
        />
      </div>
    </div>
  );
}
