import Link from 'next/link';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

type indexProps = {
  content: React.ReactNode;
  className?: string;
  href: string;
  wowDelay?: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function ButtonArrow({
  className,
  content,
  href,
  wowDelay,
  ...rest
}: indexProps) {
  return (
    <Link href={href} {...rest}>
      <a
        className={clsxm(
          'btn wow animate__animated animate__fadeInUp relative my-0 mx-auto flex w-max items-center overflow-x-hidden rounded-[100px] bg-blue-gradient py-4  px-8 text-center font-poppins text-[16px] font-normal text-white shadow-btn outline-none lg:inline-flex lg:items-center lg:justify-center lg:whitespace-nowrap',
          className
        )}
        data-wow-delay={wowDelay}
        {...rest}
      >
        {content}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
            clipRule='evenodd'
          />
        </svg>
        <span className='absolute top-[-10%] right-[-130px] block h-[200px] w-[200px] overflow-hidden rounded-[50%] bg-[rgb(255,255,255,.2)] transition-all duration-[1s]'></span>
      </a>
    </Link>
  );
}
