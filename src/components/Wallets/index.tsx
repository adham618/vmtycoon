import * as React from 'react';

import Wallet from '@/components/Wallets/Wallet';
const wallets = [
  {
    id: 0,
    image: '/images/businesses-head.png',
    title: '$BIZ',
    YourBalance: '48.0466',
    PendingBalance: '11.1609',
    BusinessesActive: '964.02',
    perDay: '405',
    firstBtn: 'Claim All',
    secondBtn: 'Deposit',
    thirdBtn: 'Withdraw',
  },
  {
    id: 1,
    image: '/images/dollar-head.png',
    title: '$DOLLA',
    YourBalance: '48.0466',
    PendingBalance: '11.1609',
    BusinessesActive: '964.02',
    perDay: '405',
    firstBtn: 'Claim',
    secondBtn: 'Trade',
    thirdBtn: '',
  },
];
export default function Wallets() {
  return (
    <section className='bg-white py-[60px] dark:bg-black-900 dark:bg-none sm:py-[80px] lg:py-[100px]'>
      <div className='container'>
        <div className='mt-14 justify-between gap-9 text-center md:flex'>
          {wallets.map((wallet) => (
            <Wallet
              key={wallet.id}
              image={wallet.image}
              title={wallet.title}
              YourBalance={wallet.YourBalance}
              PendingBalance={wallet.PendingBalance}
              BusinessesActive={wallet.BusinessesActive}
              perDay={wallet.perDay}
              firstBtn={wallet.firstBtn}
              secondBtn={wallet.secondBtn}
              thirdBtn={wallet.thirdBtn}
              className={`${wallet.thirdBtn === '' && 'hidden'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
