import * as React from 'react';

type RankProps = {
  Rank: string;
  Username: string;
  Tycoon: string;
  Rarity: string;
  background: string;
  color: string;
  Level: string;
  Address: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function Rank({
  Rank,
  Username,
  Tycoon,
  Rarity,
  background,
  color,
  Level,
  Address,
}: RankProps) {
  return (
    <tr className='border-b border-b-t-border hover:bg-[#fbfbfb]/80 hover:text-black-900'>
      <th className='p-4' scope='row'>
        {Rank}
      </th>
      <td className='p-4'>{Username}</td>
      <td className='p-4'>{Tycoon}</td>
      <td className='p-4'>
        <span
          className={`${background} ${color} rounded-md  px-2 py-1 font-poppins text-[11px] font-semibold`}
        >
          {Rarity}
        </span>
      </td>
      <td className='p-4'>{Level}</td>
      <td className='p-4'>
        <a href='#' className='text-active hover:text-rare'>
          {Address}
        </a>
      </td>
    </tr>
  );
}
