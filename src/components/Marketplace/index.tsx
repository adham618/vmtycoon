import * as React from 'react';

import Card from '@/components/Marketplace/Card';
import Dropdown from '@/components/Marketplace/Dropdown';
const items = [
  {
    id: 0,
    CardImage: '/images/1.png',
    WorkerId: '1',
    Level: '4',
    Rarity: '64',
    RarityType: 'Common',
    Price: '100 AVAX',
  },
  {
    id: 1,
    CardImage: '/images/2.png',
    WorkerId: '1',
    Level: '4',
    Rarity: '64',
    RarityType: 'Common',
    Price: '100 AVAX',
  },
  {
    id: 2,
    CardImage: '/images/3.png',
    WorkerId: '1',
    Level: '4',
    Rarity: '64',
    RarityType: 'Common',
    Price: '100 AVAX',
  },
  {
    id: 3,
    CardImage: '/images/4.png',
    WorkerId: '1',
    Level: '4',
    Rarity: '64',
    RarityType: 'Common',
    Price: '100 AVAX',
  },
  {
    id: 4,
    CardImage: '/images/5.png',
    WorkerId: '1',
    Level: '4',
    Rarity: '64',
    RarityType: 'Common',
    Price: '100 AVAX',
  },
  {
    id: 5,
    CardImage: '/images/6.png',
    WorkerId: '1',
    Level: '4',
    Rarity: '64',
    RarityType: 'Common',
    Price: '100 AVAX',
  },
  {
    id: 6,
    CardImage: '/images/7.png',
    WorkerId: '1',
    Level: '4',
    Rarity: '64',
    RarityType: 'Common',
    Price: '100 AVAX',
  },
  {
    id: 7,
    CardImage: '/images/8.png',
    WorkerId: '1',
    Level: '4',
    Rarity: '64',
    RarityType: 'Common',
    Price: '100 AVAX',
  },
];
const colors = [
  {
    Rarity: 'Common',
    style: 'bg-common text-slate-400',
  },
  {
    Rarity: 'Uncommon',
    style: 'bg-uncommon text-black-500',
  },
  {
    Rarity: 'Rare',
    style: 'bg-rare text-slate-400',
  },
  {
    Rarity: 'Legendary',
    style: 'bg-legendary text-white',
  },
  {
    Rarity: 'Exotic',
    style: 'bg-exotic text-black-500',
  },
];
export default function Marketplace() {
  return (
    <section className='bg-white py-16 dark:bg-black-900'>
      <div className='container'>
        <div className='flex flex-wrap items-center justify-between'>
          <Dropdown />
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
          {items.map((item) => (
            <Card
              className={`${
                colors.find((el) => el.Rarity === item.RarityType) &&
                colors.find((el) => el.Rarity === item.RarityType)?.style
              }`}
              key={item.id}
              CardImage={item.CardImage}
              WorkerId={item.WorkerId}
              Level={item.Level}
              Rarity={item.Rarity}
              RarityType={item.RarityType}
              Price={item.Price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
