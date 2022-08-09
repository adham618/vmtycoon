import * as React from 'react';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

type CardProps = {
  className: string;
  title: string;
  Rarity: string;
  image: string;
  altImage: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function Card({
  className,
  title,
  Rarity,
  image,
  altImage,
}: CardProps) {
  return (
    <div>
      <span
        className={clsxm(
          'mb-2 block rounded-md px-2 py-1 font-poppins text-[11px] font-semibold ',
          className
        )}
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
