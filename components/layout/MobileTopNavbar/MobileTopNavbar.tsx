import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { topNavbarRoutes } from './routes';
import Link from 'next/link';
import { AccessButton } from '~/components/access/AccessButton'
import { readexPro } from '~/elements/fonts';

export const MobileTopNavbar = ({ env }: any) => {
  const [navbarElements, setNavbarElemens] = useState(topNavbarRoutes);
  const router = useRouter();

  useEffect(() => {
    const currentPath = router.pathname;
    const updatedNavData = navbarElements.map((item: any) => ({
      ...item,
      current: item.href === currentPath,
    }));
    setNavbarElemens(updatedNavData);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full items-center justify-center">
      <nav className="flex items-center w-full bg-dark-green border-b border-primary/50">    
          <AccessButton/>
          <div className='w-full'>
          </div>
          <div className="border border-cyan border-opacity-20 bg-black h-12 p-2 items-center flex mr-4">
            <Link
              href="/"
              className={`${readexPro.className} font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green no-wrap text-sm text-center`}>
            The&nbsp;Carmel&nbsp;Way
            </Link>
          </div>
      </nav>
    </div>
  );
};
