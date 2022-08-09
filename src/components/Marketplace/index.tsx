import * as React from 'react';

export default function Marketplace() {
  return (
    <section className='bg-white py-16 dark:bg-black-900'>
      <div className='container'>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='relative'>
            <button
              type='button'
              className='flex items-center justify-between rounded-3xl bg-blue-gradient px-6 py-2 font-poppins text-[15px] font-normal text-slate-200'
              id='menu-button'
              aria-expanded='true'
              aria-haspopup='true'
            >
              Sort
              <svg
                className='pointer-events-none -mr-1 ml-2 h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>

            <div
              className='absolute left-0 mt-1 hidden min-w-max origin-top-right rounded bg-white py-4 shadow-dropdown dark:bg-[#191919] dark:shadow'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='menu-button'
              tabIndex={-1}
            >
              <div id='results'>
                <a
                  href='#'
                  className='block py-2 px-5  hover:bg-neutral-100 dark:hover:bg-[#232323]'
                >
                  <h5 className='text-[15px]  font-normal text-black-500 dark:text-slate-200'>
                    Number (low to high)
                  </h5>
                </a>
                <a
                  href='#'
                  className='block py-2 px-5  hover:bg-neutral-100 dark:hover:bg-[#232323]'
                >
                  <h5 className='text-[15px]  font-normal text-black-500 dark:text-slate-200'>
                    Number (high to low)
                  </h5>
                </a>
                <a
                  href='#'
                  className='block py-2 px-5  hover:bg-neutral-100 dark:hover:bg-[#232323]'
                >
                  <h5 className='text-[15px]  font-normal text-black-500 dark:text-slate-200'>
                    Level (low to high)
                  </h5>
                </a>
                <a
                  href='#'
                  className='block py-2 px-5  hover:bg-neutral-100 dark:hover:bg-[#232323]'
                >
                  <h5 className='text-[15px]  font-normal text-black-500 dark:text-slate-200'>
                    Level (high to low)
                  </h5>
                </a>
                <a
                  href='#'
                  className='block py-2 px-5  hover:bg-neutral-100 dark:hover:bg-[#232323]'
                >
                  <h5 className='text-[15px]  font-normal text-black-500 dark:text-slate-200'>
                    Price (low to high)
                  </h5>
                </a>
                <a
                  href='#'
                  className='block py-2 px-5  hover:bg-neutral-100 dark:hover:bg-[#232323]'
                >
                  <h5 className='text-[15px]  font-normal text-black-500 dark:text-slate-200'>
                    Price (high to low)
                  </h5>
                </a>
                <a
                  href='#'
                  className='block py-2 px-5  hover:bg-neutral-100 dark:hover:bg-[#232323]'
                >
                  <h5 className='text-[15px]  font-normal text-black-500 dark:text-slate-200'>
                    Rarity (low to high)
                  </h5>
                </a>
                <a
                  href='#'
                  className='block py-2 px-5  hover:bg-neutral-100 dark:hover:bg-[#232323]'
                >
                  <h5 className='text-[15px]  font-normal text-black-500 dark:text-slate-200'>
                    Rarity (high to low)
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <ul className='pagination flex'>
            <li className='prev flex'>
              <a
                aria-disabled='false'
                href='#'
                className='flex items-center rounded-tl-lg rounded-bl-lg border border-r-0 border-slate-200 bg-white px-3 py-1 text-black-500 dark:border-[#373737] dark:bg-[#191919] dark:text-slate-200 md:px-5 md:py-3'
              >
                <span className='hidden lg:block'>Previous</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 lg:hidden'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </li>
            <li className='active flex'>
              <a
                href='#'
                className='flex items-center border border-r-0 border-slate-200 bg-white px-3 py-1 text-black-500 hover:border-neutral-100 hover:bg-neutral-100 hover:text-blue-700 dark:border-[#373737] md:px-5 md:py-3'
              >
                1
              </a>
            </li>
            <li className='flex'>
              <a
                href='#'
                className='flex items-center border border-r-0 border-slate-200 bg-white px-3 py-1  text-black-500 hover:border-neutral-100 hover:bg-neutral-100  hover:text-blue-700 dark:border-[#373737] dark:bg-[#191919] dark:text-slate-200 dark:hover:bg-[#292929]  md:px-5 md:py-3'
              >
                2
              </a>
            </li>
            <li className='flex'>
              <a
                href='#'
                className='flex items-center border border-r-0 border-slate-200 bg-white px-3 py-1 text-black-500 hover:border-neutral-100 hover:bg-neutral-100  hover:text-blue-700 dark:border-[#373737] dark:bg-[#191919] dark:text-slate-200 dark:hover:bg-[#292929] md:px-5 md:py-3'
              >
                3
              </a>
            </li>
            <li className='next flex'>
              <a
                href='#'
                className=' flex items-center rounded-tr-lg rounded-br-lg border border-slate-200 bg-white px-3 py-1 text-black-500 hover:border-neutral-100 hover:bg-neutral-100 hover:text-blue-700 dark:border-[#373737] dark:bg-[#191919] dark:text-slate-200 dark:hover:bg-[#292929] md:px-5 md:py-3'
              >
                <span className='hidden lg:block'>Next</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 lg:hidden'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className='-mx-3 mt-5 flex-wrap items-center justify-between sm:flex'>
          <div className='mb-5 px-3 sm:w-1/2 md:w-4/12 lg:w-3/12'>
            <div className='overflow-hidden rounded-md border border-slate-400'>
              <img src='/images/1.png' alt='' />
              <div className='bg-black-400 p-5 text-center'>
                <h4 className='mb-1 text-lg font-semibold text-white'>
                  Worker #<span>1</span>
                </h4>
                <p className='mb-2 font-poppins text-[17px] font-normal text-white'>
                  Level <span>4</span>
                </p>
                <p className='mb-1 font-poppins text-[17px] font-normal text-white'>
                  Rarity
                  <span>64</span>
                  <span className='mb-2 rounded-md bg-common px-2 py-1 font-poppins text-[11px] font-semibold text-slate-400'>
                    Common
                  </span>
                  <p className='mb-3 font-poppins text-[17px] font-normal text-white'>
                    Price <span>100 AVAX</span>
                  </p>
                  <button
                    className='rounded bg-[#0d6efd] px-2 py-1 text-sm text-white transition-all ease-in-out hover:bg-[#0b5ed7]'
                    type='button'
                  >
                    Buy Now
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className='mb-5 px-3 sm:w-1/2 md:w-4/12 lg:w-3/12'>
            <div className='overflow-hidden rounded-md border border-slate-400'>
              <img src='/images/2.png' alt='' />
              <div className='bg-black-400 p-5 text-center'>
                <h4 className='mb-1 text-lg font-semibold text-white'>
                  Worker #<span>1</span>
                </h4>
                <p className='mb-2 font-poppins text-[17px] font-normal text-white'>
                  Level <span>4</span>
                </p>
                <p className='mb-1 font-poppins text-[17px] font-normal text-white'>
                  Rarity
                  <span>64</span>
                  <span className='mb-2 rounded-md bg-common px-2 py-1 font-poppins text-[11px] font-semibold text-slate-400'>
                    Common
                  </span>
                  <p className='mb-3 font-poppins text-[17px] font-normal text-white'>
                    Price <span>100 AVAX</span>
                  </p>
                  <button
                    className='rounded bg-[#0d6efd] px-2 py-1 text-sm text-white transition-all ease-in-out hover:bg-[#0b5ed7]'
                    type='button'
                  >
                    Buy Now
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className='mb-5 px-3 sm:w-1/2 md:w-4/12 lg:w-3/12'>
            <div className='overflow-hidden rounded-md border border-slate-400'>
              <img src='/images/3.png' alt='' />
              <div className='bg-black-400 p-5 text-center'>
                <h4 className='mb-1 text-lg font-semibold text-white'>
                  Worker #<span>1</span>
                </h4>
                <p className='mb-2 font-poppins text-[17px] font-normal text-white'>
                  Level <span>4</span>
                </p>
                <p className='mb-1 font-poppins text-[17px] font-normal text-white'>
                  Rarity
                  <span>64</span>
                  <span className='mb-2 rounded-md bg-common px-2 py-1 font-poppins text-[11px] font-semibold text-slate-400'>
                    Common
                  </span>
                  <p className='mb-3 font-poppins text-[17px] font-normal text-white'>
                    Price <span>100 AVAX</span>
                  </p>
                  <button
                    className='rounded bg-[#0d6efd] px-2 py-1 text-sm text-white transition-all ease-in-out hover:bg-[#0b5ed7]'
                    type='button'
                  >
                    Buy Now
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className='mb-5 px-3 sm:w-1/2 md:w-4/12 lg:w-3/12'>
            <div className='overflow-hidden rounded-md border border-slate-400'>
              <img src='/images/4.png' alt='' />
              <div className='bg-black-400 p-5 text-center'>
                <h4 className='mb-1 text-lg font-semibold text-white'>
                  Worker #<span>1</span>
                </h4>
                <p className='mb-2 font-poppins text-[17px] font-normal text-white'>
                  Level <span>4</span>
                </p>
                <p className='mb-1 font-poppins text-[17px] font-normal text-white'>
                  Rarity
                  <span>64</span>
                  <span className='mb-2 rounded-md bg-common px-2 py-1 font-poppins text-[11px] font-semibold text-slate-400'>
                    Common
                  </span>
                  <p className='mb-3 font-poppins text-[17px] font-normal text-white'>
                    Price <span>100 AVAX</span>
                  </p>
                  <button
                    className='rounded bg-[#0d6efd] px-2 py-1 text-sm text-white transition-all ease-in-out hover:bg-[#0b5ed7]'
                    type='button'
                  >
                    Buy Now
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className='mb-5 px-3 sm:w-1/2 md:w-4/12 lg:w-3/12'>
            <div className='overflow-hidden rounded-md border border-slate-400'>
              <img src='/images/5.png' alt='' />
              <div className='bg-black-400 p-5 text-center'>
                <h4 className='mb-1 text-lg font-semibold text-white'>
                  Worker #<span>1</span>
                </h4>
                <p className='mb-2 font-poppins text-[17px] font-normal text-white'>
                  Level <span>4</span>
                </p>
                <p className='mb-1 font-poppins text-[17px] font-normal text-white'>
                  Rarity
                  <span>64</span>
                  <span className='mb-2 rounded-md bg-common px-2 py-1 font-poppins text-[11px] font-semibold text-slate-400'>
                    Common
                  </span>
                  <p className='mb-3 font-poppins text-[17px] font-normal text-white'>
                    Price <span>100 AVAX</span>
                  </p>
                  <button
                    className='rounded bg-[#0d6efd] px-2 py-1 text-sm text-white transition-all ease-in-out hover:bg-[#0b5ed7]'
                    type='button'
                  >
                    Buy Now
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className='mb-5 px-3 sm:w-1/2 md:w-4/12 lg:w-3/12'>
            <div className='overflow-hidden rounded-md border border-slate-400'>
              <img src='/images/5.png' alt='' />
              <div className='bg-black-400 p-5 text-center'>
                <h4 className='mb-1 text-lg font-semibold text-white'>
                  Worker #<span>1</span>
                </h4>
                <p className='mb-2 font-poppins text-[17px] font-normal text-white'>
                  Level <span>4</span>
                </p>
                <p className='mb-1 font-poppins text-[17px] font-normal text-white'>
                  Rarity
                  <span>64</span>
                  <span className='mb-2 rounded-md bg-common px-2 py-1 font-poppins text-[11px] font-semibold text-slate-400'>
                    Common
                  </span>
                  <p className='mb-3 font-poppins text-[17px] font-normal text-white'>
                    Price <span>100 AVAX</span>
                  </p>
                  <button
                    className='rounded bg-[#0d6efd] px-2 py-1 text-sm text-white transition-all ease-in-out hover:bg-[#0b5ed7]'
                    type='button'
                  >
                    Buy Now
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className='mb-5 px-3 sm:w-1/2 md:w-4/12 lg:w-3/12'>
            <div className='overflow-hidden rounded-md border border-slate-400'>
              <img src='/images/7.png' alt='' />
              <div className='bg-black-400 p-5 text-center'>
                <h4 className='mb-1 text-lg font-semibold text-white'>
                  Worker #<span>1</span>
                </h4>
                <p className='mb-2 font-poppins text-[17px] font-normal text-white'>
                  Level <span>4</span>
                </p>
                <p className='mb-1 font-poppins text-[17px] font-normal text-white'>
                  Rarity
                  <span>64</span>
                  <span className='mb-2 rounded-md bg-common px-2 py-1 font-poppins text-[11px] font-semibold text-slate-400'>
                    Common
                  </span>
                  <p className='mb-3 font-poppins text-[17px] font-normal text-white'>
                    Price <span>100 AVAX</span>
                  </p>
                  <button
                    className='rounded bg-[#0d6efd] px-2 py-1 text-sm text-white transition-all ease-in-out hover:bg-[#0b5ed7]'
                    type='button'
                  >
                    Buy Now
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className='mb-5 px-3 sm:w-1/2 md:w-4/12 lg:w-3/12'>
            <div className='overflow-hidden rounded-md border border-slate-400'>
              <img src='/images/8.png' alt='image' />
              <div className='bg-black-400 p-5 text-center'>
                <h4 className='mb-1 text-lg font-semibold text-white'>
                  Worker #<span>1</span>
                </h4>
                <p className='mb-2 font-poppins text-[17px] font-normal text-white'>
                  Level <span>4</span>
                </p>
                <p className='mb-1 font-poppins text-[17px] font-normal text-white'>
                  Rarity
                  <span>64</span>
                  <span className='mb-2 rounded-md bg-common px-2 py-1 font-poppins text-[11px] font-semibold text-slate-400'>
                    Common
                  </span>
                  <p className='mb-3 font-poppins text-[17px] font-normal text-white'>
                    Price <span>100 AVAX</span>
                  </p>
                  <button
                    className='rounded bg-[#0d6efd] px-2 py-1 text-sm text-white transition-all ease-in-out hover:bg-[#0b5ed7]'
                    type='button'
                  >
                    Buy Now
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
