import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { topNavbarRoutes } from './routes';
import { Readex_Pro } from 'next/font/google';
import Link from 'next/link';
import { TopNavbarProps } from './props';
import dropdown from '~/images/dashboard/Dropdown.webp';
import { updateNavbarElements } from '../utils';
import profile_placeholder from '~/images/profile_placeholder.webp';
import rocket from '~/images/dashboard/Rocket.webp';
import arrow from '~/images/dashboard/ArrowRight.webp';
import logo from '~/public/images/logo/logo-white.svg';
import DynamicIcon from '~/components/icons/Dynamic';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const TopNavBar = ({ data }: TopNavbarProps) => {
  const [navbarElements, setNavbarElemens] = useState(topNavbarRoutes);

  const handleNavClick = (targetHref: string) => {
    const updatedNavData = updateNavbarElements(navbarElements, targetHref);
    setNavbarElemens(updatedNavData);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    const updatedNavData = navbarElements.map((item: any) => ({
      ...item,
      current: item.href === currentPath,
    }));
    setNavbarElemens(updatedNavData);
  }, []);

  return (
    <div className='flex flex-col'>
    <div className="hidden lg:flex z-50 w-full items-center justify-end sticky top-0 bg-dark-green">
      <nav className="flex items-center align-center flex-row py-3">
      <div className='flex flex-row mr-8'>
        <Link href={"/"} onClick={() => handleNavClick("/")}>
            <div className="flex justify-center text-primary items-center cursor-pointer gap-2 p-2 ml-4 border border-cyan hovee:border-opacity-20 border-opacity-0 hover:bg-dark-green-secondary">
              <DynamicIcon name={"AcademicCapIcon"} width={20} height={20}/> 
              <span className='mt-1 text-primary'>Tutorials</span>
            </div>
        </Link>
        <Link href={"/"} onClick={() => handleNavClick("/")}>
        <div className="flex justify-center items-center text-primary cursor-pointer gap-2 p-2 ml-4 border border-cyan hovee:border-opacity-20 border-opacity-0 hover:bg-dark-green-secondary">
        <DynamicIcon name={"TrophyIcon"} width={20} height={20}/> 
              <span className='mt-1 text-primary'>Challenges</span>
            </div>
        </Link>
        <Link href={"/"} onClick={() => handleNavClick("/")}>
        <div className="flex justify-center items-center text-primary cursor-pointer gap-2 p-2 ml-4 border border-cyan hovee:border-opacity-20 border-opacity-0 hover:bg-dark-green-secondary">
        <DynamicIcon name={"NewspaperIcon"} width={20} height={20}/> 
              <span className='mt-1 text-primary'>Stories</span>
            </div>
        </Link>
        </div>
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
