import * as React from 'react';

type indexProps = {
  title: string;
  contractNumber: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function Contract({ title, contractNumber }: indexProps) {
  return (
    <p className='mb-4 flex flex-wrap items-center justify-center gap-1 break-all md:mb-1'>
      {title}:
      <a href='#' className='text-[12px] sm:text-[16px]'>
        {contractNumber}
      </a>
      <a href='#'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 animate-none'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z' />
          <path d='M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z' />
        </svg>
      </a>
    </p>
  );
}
