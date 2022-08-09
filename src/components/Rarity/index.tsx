import * as React from 'react';

import Card from '@/components/Rarity/Card';
const Raritys = [
  {
    id: 0,
    background: 'bg-common',
    textColor: 'text-slate-400',
    title: 'Common',
    Rarity: '0.7',
    image: '/images/avax-logo.svg',
    altImage: 'avax',
  },
  {
    id: 1,
    background: 'bg-uncommon',
    textColor: 'text-black-500',
    title: 'Uncommon',
    Rarity: '0.7',
    image: '/images/avax-logo.svg',
    altImage: 'avax',
  },
  {
    id: 2,
    background: 'bg-rare',
    textColor: 'text-slate-400',
    title: 'Rare',
    Rarity: '0.7',
    image: '/images/avax-logo.svg',
    altImage: 'avax',
  },
  {
    id: 3,
    background: 'bg-legendary',
    textColor: 'text-white',
    title: 'Legendary',
    Rarity: '0.7',
    image: '/images/avax-logo.svg',
    altImage: 'avax',
  },
  {
    id: 4,
    background: 'bg-exotic',
    textColor: 'text-black-500',
    title: 'Exotic',
    Rarity: '0.7',
    image: '/images/avax-logo.svg',
    altImage: 'avax',
  },
];
export default function Rarity() {
  return (
    <section className='bg-rarity-gradient pt-[100px] pb-10 dark:bg-black-900 dark:bg-none'>
      <div className='container'>
        <div className='text-center lg:text-left'>
          <h5 className='mb-5 text-[16px] font-semibold text-slate-900 dark:text-slate-200'>
            Rarity Legand
          </h5>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-10 lg:w-3/4 lg:justify-start'>
          {Raritys.map((Rarity) => (
            <Card
              key={Rarity.id}
              background={Rarity.background}
              textColor={Rarity.textColor}
              title={Rarity.title}
              Rarity={Rarity.Rarity}
              image={Rarity.image}
              altImage={Rarity.altImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
