import * as React from 'react';

export default function Copyright() {
  return (
    <p className='break-word mt-10'>
      Copyright {new Date().getFullYear()} by vmtycoon.io ·
      <a className='underline' href='mailto:contact@vmtycoon.io'>
        contact@vmtycoon.io{' '}
      </a>
      · A{' '}
      <a className='underline' href='https://minerjoe.com/'>
        MinerJoe
      </a>{' '}
      Collaboration
    </p>
  );
}
