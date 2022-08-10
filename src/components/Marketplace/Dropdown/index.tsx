import * as React from 'react';

const DropdownItems = [
  {
    id: 0,
    item: 'Number (low to high)',
    link: '#',
  },
  {
    id: 1,
    item: 'Number (high to low)',
    link: '#',
  },
  {
    id: 2,
    item: 'Level (low to high)',
    link: '#',
  },
  {
    id: 3,
    item: 'Level (high to low)',
    link: '#',
  },
  {
    id: 4,
    item: 'Price (low to high)',
    link: '#',
  },
  {
    id: 4,
    item: 'Price (high to low)',
    link: '#',
  },
  {
    id: 6,
    item: 'Rarity (low to high)',
    link: '#',
  },
  {
    id: 7,
    item: 'Rarity (high to low)',
    link: '#',
  },
];
export default function Dropdown() {
  const [DropdownToggle, setDropdownToggle] = React.useState(false);
  const toggleClass = () => {
    setDropdownToggle(!DropdownToggle);
  };

  return (
    <div className='relative'>
      <button
        onClick={toggleClass}
        className={`${
          DropdownToggle ? 'focused' : ''
        } flex items-center justify-between rounded-3xl bg-blue-gradient px-6 py-2 font-poppins text-[15px] font-normal text-slate-200`}
        type='button'
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
        className={`${
          !DropdownToggle ? 'block' : 'hidden'
        } absolute left-0 z-10 mt-1  min-w-max origin-top-right rounded bg-white py-4 shadow-dropdown dark:bg-[#191919] dark:shadow`}
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='menu-button'
        tabIndex={-1}
      >
        <div id='results'>
          {DropdownItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className='block py-2 px-5  hover:bg-neutral-100 dark:hover:bg-[#232323]'
            >
              <h5 className='text-[15px]  font-normal text-black-500 dark:text-slate-200'>
                {item.item}
              </h5>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
