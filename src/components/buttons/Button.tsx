import Link from 'next/link';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

type indexProps = {
  content: React.ReactNode;
  className?: string;
  href: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function Button({
  className,
  content,
  href,
  ...rest
}: indexProps) {
  return (
    <Link href={href} {...rest}>
      <a
        className={clsxm(
          'relative overflow-clip rounded-[100px] bg-blue-gradient px-5 font-openSans text-sm font-normal leading-9 text-white shadow-btn',
          className
        )}
        {...rest}
      >
        {content}
        <span className='absolute top-[-10%] right-[-130px] block h-[200px] w-[200px] rounded-[50%] bg-[rgb(255,255,255,.2)] transition-all duration-[1s]'></span>
      </a>
    </Link>
  );
}
