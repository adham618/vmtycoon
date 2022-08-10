import * as React from 'react';

export default function Modal() {
  return (
    <div
      id='modal-wrapper'
      className='fixed top-0 right-0 left-0 bottom-0 z-[9999] hidden bg-black-900/90 px-4'
    >
      <div
        id='modal'
        className='mx-auto mt-4 w-full max-w-[600px] rounded-lg border border-white bg-white p-7 dark:bg-black-900 '
      >
        <div className='mb-10 flex items-center justify-between'>
          <h4 className='text-xl font-semibold leading-7 text-slate-900 dark:text-white'>
            Setting
          </h4>
          <div
            id='close_modal'
            className='flex h-12 w-12 cursor-pointer items-center justify-center'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 fill-current hover:fill-black-900 dark:hover:fill-white'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
        <div className='content mb-4'>
          <p className='mb-2 text-lg font-bold'>
            Address: <span>0</span>
          </p>
          <p className='mb-2 text-lg font-bold'>
            Balance: <span>0</span>
          </p>
          <p className='mb-2 text-lg font-bold'>
            Username: <span>unknown</span>
          </p>
        </div>
        <form method='post'>
          <input
            className='w-full rounded-lg p-4 outline outline-2 outline-slate-200 dark:bg-black-900 dark:outline-[#404040]'
            type='email'
            name='email'
            id='email'
            placeholder='usernaame'
          />
          <button
            className='mt-4 w-full rounded-2xl bg-blue-gradient px-2 py-5 font-poppins text-[15px] font-normal text-white'
            type='button'
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}