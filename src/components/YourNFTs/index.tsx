import * as React from 'react';

import Card from '@/components/YourNFTs/Card';

const NFTS = [
  {
    id: 0,
    image: '/images/9.png',
    TycoonID: '1',
    state: 'Working',
    level: '4',
    Pending: '0.1584',
    Dolla: '0/1000',
    Rarity: '64',
    RarityBtn: 'Common',
  },
  {
    id: 1,
    image: '/images/10.png',
    TycoonID: '1',
    state: 'Working',
    level: '4',
    Pending: '0.1584',
    Dolla: '0/1000',
    Rarity: '64',
    RarityBtn: 'Common',
  },
  {
    id: 2,
    image: '/images/11.png',
    TycoonID: '1',
    state: 'Working',
    level: '4',
    Pending: '0.1584',
    Dolla: '0/1000',
    Rarity: '64',
    RarityBtn: 'Common',
  },
  {
    id: 3,
    image: '/images/12.png',
    TycoonID: '1',
    state: 'Working',
    level: '4',
    Pending: '0.1584',
    Dolla: '0/1000',
    Rarity: '64',
    RarityBtn: 'Common',
  },
  {
    id: 4,
    image: '/images/13.png',
    TycoonID: '1',
    state: 'Working',
    level: '4',
    Pending: '0.1584',
    Dolla: '0/1000',
    Rarity: '64',
    RarityBtn: 'Common',
  },
  {
    id: 5,
    image: '/images/14.png',
    TycoonID: '1',
    state: 'Working',
    level: '4',
    Pending: '0.1584',
    Dolla: '0/1000',
    Rarity: '64',
    RarityBtn: 'Common',
  },
  {
    id: 6,
    image: '/images/15.png',
    TycoonID: '1',
    state: 'Working',
    level: '4',
    Pending: '0.1584',
    Dolla: '0/1000',
    Rarity: '64',
    RarityBtn: 'Common',
  },
  {
    id: 7,
    image: '/images/16.png',
    TycoonID: '1',
    state: 'Working',
    level: '4',
    Pending: '0.1584',
    Dolla: '0/1000',
    Rarity: '64',
    RarityBtn: 'Common',
  },
];
export default function YourNFTs() {
  return (
    <section className='bg-white py-16 dark:bg-black-900'>
      <div className='container'>
        <div className='-mx-3 mt-5 flex-wrap items-center justify-between sm:flex'>
          {NFTS.map((nft) => (
            <Card
              key={nft.id}
              image={nft.image}
              TycoonID={nft.TycoonID}
              state={nft.state}
              level={nft.level}
              Pending={nft.Pending}
              Dolla={nft.Dolla}
              Rarity={nft.Rarity}
              RarityBtn={nft.RarityBtn}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
