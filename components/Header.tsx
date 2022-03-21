import Link from 'next/link';
import React from 'react';
import pages from '../lib/pages';

export const Header = () => {
  return (
    <header className='header'>
      {pages.map((page) => {
        return (
          <Link href={page.href} key={page.name}>
            <a>{page.name}</a>
          </Link>
        );
      })}
    </header>
  );
};
