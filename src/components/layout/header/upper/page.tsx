import React from 'react';
import Link from 'next/link';
import style from './HeaderUpper.module.css';

export default function HeaderUpper() {
  return (
    <div className={style.firstpart}>
      <div className={`${style.inner}`}>
        Announcing our next round of funding.{' '}
        <Link href='/' className='font-semibold text-indigo-600'>
          <span aria-hidden='true' className='absolute inset-0' />
          Read more
        </Link>
      </div>
    </div>
  );
}
