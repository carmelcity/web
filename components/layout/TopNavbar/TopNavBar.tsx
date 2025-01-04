import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { topNavbarRoutes } from './routes';
import Link from 'next/link';
import { updateNavbarElements } from '../utils';
import arrow from '~/images/dashboard/ArrowRight.webp';
import { readexPro } from '~/elements/fonts';

export const TopNavBar = ({ data }: any) => {
  const [navbarElements, setNavbarElemens] = useState(topNavbarRoutes);

  const handleNavClick = (targetHref: string) => {
    const updatedNavData: any = updateNavbarElements(navbarElements, targetHref);
    setNavbarElemens(updatedNavData);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    const updatedNavData: any = navbarElements.map((item: any) => ({
      ...item,
      current: item.href === currentPath,
    }));
    setNavbarElemens(updatedNavData);
  }, []);

  return (
    <div className='flex flex-col'>
    <div className="hidden lg:flex z-50 w-full items-center justify-end sticky top-0 bg-dark-green">
      <nav className="flex items-center align-center flex-row py-3">
        <div className="border border-cyan border-opacity-20 bg-black h-14 items-center flex mr-4">
          <Link
            href="/way"
            className={`${readexPro.className} font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green m-3`}>
           The&nbsp;Carmel&nbsp;Way
          </Link>
        </div>
      </nav>
    </div>
    <div className="border-b cursor-pointer border-t border-cyan border-opacity-20 bg-black h-14 flex flex-col align-center items-center">
        <Link
            href="/business"
            className={`${readexPro.className} h-full items-center font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green ml-3 text-lg text-center mr-2 flex flex-row`}>
              Start a Carmel Community for your business and tap into the wisdom of the crowd
            <Image src={arrow} alt="arrow" className="ml-4" />
         </Link>
      </div>
  </div>
  );
};
