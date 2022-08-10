import Link from 'next/link';
import * as React from 'react';

import Modal from '@/components/Modal';
import ThemeToggle from '@/components/ThemeToggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/office', label: 'Office' },
  { href: '/toplist', label: 'Toplist' },
  { href: '/help', label: 'Help' },
];

export default function Header() {
  const [onTop, setOnTop] = React.useState(true);
  const [menuToggler, setMenuToggler] = React.useState(false);

  const toggleClass = () => {
    setMenuToggler(!menuToggler);
  };

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
          onTop ? '' : 'sticky'
        } fixed top-0 right-0 left-0 z-50 flex h-[85px] items-center border-b border-white/10 transition-all duration-[1s]`}
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
                  <ThemeToggle />
                </li>
                <li className='inline-flex'>
                  <Modal />
                </li>
                <li
                  id='menu-toggler'
                  onClick={toggleClass}
                  className={`${
                    menuToggler ? 'active' : ''
                  } relative ml-3 h-[30px] w-[30px] cursor-pointer lg:hidden`}
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
      <div
        onClick={toggleClass}
        className={`${
          menuToggler ? 'show' : ''
        } nav-wrapper after:bg lg:hidden' fixed top-0 left-0 z-[9998] box-border h-[100vh] w-[0px] transition-transform after:fixed after:top-0 after:left-0 after:right-0 after:bottom-0 after:hidden  after:h-full after:w-full after:bg-black-900/50 after:content-['']`}
      >
        <div className='nav  fixed top-0 left-0 z-[9999] h-full w-[280px] translate-x-[-300px] bg-black-900 transition-transform duration-300'>
          <h2 className='bg-white px-5 py-4 font-poppins text-xl font-normal text-black-900'>
            Mobile Menu
          </h2>
          <ul className='nav-links'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href}>
                  <a className='block p-4 text-sm text-white '>{label}</a>
                </Link>
              </li>
            ))}
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
