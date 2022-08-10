import * as React from 'react';

export default function MouseCursor() {
  return (
    <>
      <div className='cursor point pointer-events-none fixed left-0 top-0 z-[9999] -ml-1 -mt-1 hidden h-2 w-2 rounded-[50%] bg-cursor-gradient opacity-90 transition-all duration-75 ease-in-out lg:block'></div>
      <div className='cursor cursor-border pointer-events-none fixed left-0 top-0 z-[9999] -ml-[18px] -mt-[19px] hidden h-[38px] w-[38px] rounded-[50%] border border-cursor opacity-90 transition-all duration-75 ease-in-out lg:block'></div>
    </>
  );
}
