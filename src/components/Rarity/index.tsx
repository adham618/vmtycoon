import * as React from 'react';

import Card from '@/components/Rarity/Card';
const Raritys = [
  {
    id: 0,
    title: 'Common',
    Rarity: '0.7',
    image: '/images/avax-logo.svg',
    altImage: 'avax',
  },
  {
    id: 1,
    title: 'Uncommon',
    Rarity: '0.7',
    image: '/images/avax-logo.svg',
    altImage: 'avax',
  },
  {
    id: 2,
    title: 'Rare',
    Rarity: '0.7',
    image: '/images/avax-logo.svg',
    altImage: 'avax',
  },
  {
    id: 3,
    title: 'Legendary',
    Rarity: '0.7',
    image: '/images/avax-logo.svg',
    altImage: 'avax',
  },
  {
    id: 4,
    title: 'Exotic',
    Rarity: '0.7',
    image: '/images/avax-logo.svg',
    altImage: 'avax',
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
              className={`${
                colors.find((el) => el.Rarity === Rarity.title) &&
                colors.find((el) => el.Rarity === Rarity.title)?.style
              }`}
              key={Rarity.id}
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
