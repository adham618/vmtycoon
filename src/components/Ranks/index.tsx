import * as React from 'react';

import Rank from '@/components/Ranks/Rank';
const ranks = [
  {
    id: 1,
    Rank: '1',
    Username: 'meta mogul',
    Tycoon: 'Bruvv',
    Rarity: 'Rare',
    background: 'bg-rare',
    color: 'text-slate-400',
    Level: '43',
    Address: '0x1978fF6F1c0A3760696169B001647f7f7D9600C8',
  },
  {
    id: 2,
    Rank: '2',
    Username: 'meta mogul',
    Tycoon: 'NOT THE IRS',
    Rarity: 'Rare',
    background: 'bg-rare',
    color: 'text-slate-400',
    Level: '40',
    Address: '0x1978fF6F1c0A3760696169B001647f7f7D9600C8',
  },
  {
    id: 3,
    Rank: '3',
    Username: 'meta mogul',
    Tycoon: 'charlesbronson',
    Rarity: 'Exotic',
    background: 'bg-exotic',
    color: 'text-black-500',
    Level: '50',
    Address: '0x1978fF6F1c0A3760696169B001647f7f7D9600C8',
  },
  {
    id: 4,
    Rank: '4',
    Username: 'meta mogul',
    Tycoon: 'charlesbronson',
    Rarity: 'Exotic',
    background: 'bg-exotic',
    color: 'text-black-500',
    Level: '50',
    Address: '0x1978fF6F1c0A3760696169B001647f7f7D9600C8',
  },
  {
    id: 5,
    Rank: '5',
    Username: 'meta mogul',
    Tycoon: 'charlesbronson',
    Rarity: 'Legendary',
    background: 'bg-legendary',
    color: 'text-white',
    Level: '50',
    Address: '0x1978fF6F1c0A3760696169B001647f7f7D9600C8',
  },
  {
    id: 6,
    Rank: '6',
    Username: 'meta mogul',
    Tycoon: 'charlesbronson',
    Rarity: 'Legendary',
    background: 'bg-legendary',
    color: 'text-white',
    Level: '50',
    Address: '0x1978fF6F1c0A3760696169B001647f7f7D9600C8',
  },
  {
    id: 7,
    Rank: '7',
    Username: 'meta mogul',
    Tycoon: 'charlesbronson',
    Rarity: 'Common	',
    background: 'bg-common',
    color: 'text-slate-400',
    Level: '50',
    Address: '0x1978fF6F1c0A3760696169B001647f7f7D9600C8',
  },
  {
    id: 8,
    Rank: '8',
    Username: 'meta mogul',
    Tycoon: 'charlesbronson',
    Rarity: 'Common	',
    background: 'bg-common',
    color: 'text-slate-400',
    Level: '50',
    Address: '0x1978fF6F1c0A3760696169B001647f7f7D9600C8',
  },
];
export default function Ranks() {
  return (
    <section className='py-16 dark:bg-black-900'>
      <div className='container'>
        <div className='m-auto text-center xl:w-3/4'>
          <h2 className='mb-5 text-[32px] font-semibold leading-[26px] text-slate-900 dark:text-white sm:text-[36px] sm:leading-[44px] md:text-[45px]  md:leading-[52px]'>
            TOP TYCOONS
          </h2>
          <p className='mb-7 text-[17px] font-normal leading-7'>
            How do you rank compared to other entrepreneurs? You might not see
            yourself here yet, but don’t get discouraged.
            <br />
            You can be at the bottom today, and at the top tomorrow.
            <br />
            Placement is determined by level, credits added and rarity score, in
            that order.
          </p>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='table-wrapper overflow-x-auto'>
              <table className='mx-auto mb-4 w-full  max-w-7xl text-left align-middle text-black-table dark:text-white-200 '>
                <thead className=' border-b-2 border-solid border-b-black dark:border-black-table'>
                  <tr className=''>
                    <th className='p-4' scope='col'>
                      #
                    </th>
                    <th className='p-4' scope='col'>
                      Username
                    </th>
                    <th className='p-4' scope='col'>
                      Tycoon
                    </th>
                    <th className='p-4' scope='col'>
                      Rarity
                    </th>
                    <th className='p-4' scope='col'>
                      Level
                    </th>
                    <th className='p-4' scope='col'>
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody className='text-sm'>
                  {ranks.map((rank) => (
                    <Rank
                      key={rank.id}
                      Rank={rank.Rank}
                      Username={rank.Username}
                      Tycoon={rank.Tycoon}
                      Rarity={rank.Rarity}
                      Level={rank.Level}
                      Address={rank.Address}
                      background={rank.background}
                      color={rank.color}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
