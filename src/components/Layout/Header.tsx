import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/office', label: 'Office' },
  { href: '/toplist', label: 'Toplist' },
  { href: '/budget', label: 'Budget' },
  { href: '/help', label: 'Help' },
];

export default function Header() {
  // const [open, setopen] = React.useState(false);
  const [onTop, setOnTop] = React.useState(true);
  const router = useRouter();
  const handleScroll = () => {
    if (onTop !== (window.pageYOffset === 0)) {
      setOnTop(window.pageYOffset === 0);
    }
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <>
      <header
        className={`${
          onTop ? 'bg-none' : 'bg-white'
        } fixed top-0 right-0 left-0 z-50 flex h-[85px] items-center border-b border-white/10 transition-all duration-[1s] `}
      >
        <div className='container'>
          <div className='flex items-center justify-between gap-4'>
            <div className='logo'></div>
            <div className='items-cente flex items-stretch justify-between'>
              <ul className='items-cente hidden items-stretch font-poppins lg:flex'>
                {links.map(({ href, label }) => (
                  <li key={`${href}${label}`} className='inline-flex'>
                    <Link href={href}>
                      <a className='text-md relative px-4 font-medium uppercase leading-[50px] text-slate-900 dark:text-slate-200'>
                        {label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className='flex items-center gap-1'>
                <li className='flex items-center' id='mode-toggler'>
                  <div className='relative z-50 m-2 flex items-center'>
                    <label
                      htmlFor='switch'
                      className='relative inline-block h-[35px] w-[35px]'
                    >
                      <input type='checkbox' id='switch' className='hidden' />
                      <span className="absolute right-0 left-0 bottom-0 top-0 cursor-pointer rounded-[50px] border border-solid border-[#e2e2e2] bg-white shadow-lg duration-[400ms] before:absolute before:left-[4px] before:bottom-[4px] before:h-[24px] before:w-[24px] before:rounded-[50%] before:bg-[#ffc400] before:bg-sun before:bg-center before:bg-no-repeat before:content-[''] dark:border-white/30 dark:bg-[#242424] dark:before:bg-blue-600 dark:before:bg-moon"></span>
                    </label>
                  </div>
                </li>
                <li className='inline-flex'>
                  <a
                    href='#'
                    id='connect_wallet'
                    className='relative overflow-clip rounded-[100px] bg-blue-gradient px-5 font-openSans text-sm font-normal leading-9 text-white shadow-btn'
                  >
                    Connect Wallet
                    <span className='absolute top-[-10%] right-[-130px] block h-[200px] w-[200px] rounded-[50%] bg-[rgb(255,255,255,.2)] transition-all duration-[1s]'></span>
                  </a>
                </li>
                <li
                  id='menu-toggler'
                  className='relative ml-3 h-[30px] w-[30px] cursor-pointer lg:hidden'
                >
                  <span className='top absolute top-[20%] h-[3px] w-[25px] bg-black-900 transition-all duration-300 dark:bg-white '></span>
                  <span className='middle absolute top-[50%] h-[3px] w-[25px] bg-black-900 transition-all duration-300 dark:bg-white'></span>
                  <span className='bottom absolute top-[80%] h-[3px] w-[25px] bg-black-900 transition-all duration-300 dark:bg-white'></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Nav */}
      <div className="nav-wrapper after:bg fixed top-0 left-0 z-[9998] box-border h-[100vh] w-[0px] transition-transform after:fixed after:top-0 after:left-0 after:right-0 after:bottom-0 after:hidden after:h-full  after:w-full after:bg-black-900/50 after:content-[''] lg:hidden">
        <div className='nav  fixed top-0 left-0 z-[9999] h-full w-[280px] translate-x-[-300px] bg-black-900 transition-transform duration-300'>
          <h2 className='bg-white px-5 py-4 font-poppins text-xl font-normal text-black-900'>
            Mobile Menu
          </h2>
          <ul className='nav-links'>
            <li>
              <a href='#' className='block p-4 text-sm text-white '>
                Home
              </a>
            </li>
            <li>
              <a
                href='./marketplace.html'
                className='block p-4 text-sm text-white '
              >
                Marketplace
              </a>
            </li>
            <li>
              <a href='./office.html' className='block p-4 text-sm text-white '>
                Office
              </a>
            </li>
            <li>
              <a
                href='./toplist.html'
                className='block p-4 text-sm text-white '
              >
                Toplist
              </a>
            </li>
            <li>
              <a href='#' className='block p-4 text-sm text-white '>
                Budget
              </a>
            </li>
            <li>
              <a href='./help.html' className='block p-4 text-sm text-white '>
                Help
              </a>
            </li>
          </ul>
          <div
            id='close'
            className='absolute top-0 right-0 flex h-[60px] w-[60px] cursor-pointer items-center justify-center text-black-900 hover:bg-black-900 hover:text-white'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
