import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { topNavbarRoutes } from './routes';
import { Readex_Pro } from 'next/font/google';
import Link from 'next/link';
import carmelLogo from '~/images/carmel.webp';
import rocket from '~/images/dashboard/Rocket.webp';
import arrow from '~/images/dashboard/ArrowRight.webp';
import profile_placeholder from '~/images/profile_placeholder.webp';
import { MobileTopNavbarProps } from './props';
import { updateNavbarElements } from '../utils';
import turnOff from '~/images/TurnOff.svg';
import DynamicIcon from '~/components/icons/Dynamic';
import { AccessButton } from '~/components/access/AccessButton'

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const MobileTopNavbar = ({ data, user }: MobileTopNavbarProps) => {
  const [navbarElements, setNavbarElemens] = useState(topNavbarRoutes);
  const router = useRouter();

  const handleNavClick = (targetHref: string) => {
    const updatedNavData = updateNavbarElements(navbarElements, targetHref);
    setNavbarElemens(updatedNavData);
  };

  useEffect(() => {
    const currentPath = router.pathname;
    const updatedNavData = navbarElements.map((item: any) => ({
      ...item,
      current: item.href === currentPath,
    }));
    setNavbarElemens(updatedNavData);
  }, []);

  const handleLogin = () => {
    // user.auth.clearAccount();
    // window.location.reload();
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full items-center justify-center">
      <nav className="flex items-center w-full py-3 bg-dark-green">
      
        <div className="bg-black h-12 p-2 items-center flex">
        <AccessButton/>
        </div>
          <div className='w-full'>
          </div>
        <div className="border border-cyan border-opacity-20 bg-black h-12 p-2 items-center flex mr-2">
          <Link
            href="/"
            className={`${readexPro.className} font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green no-wrap text-sm text-center`}>
           The&nbsp;Carmel&nbsp;Way
          </Link>
        </div>
      </nav>
      <div className="border-t border-cyan border-opacity-20 bg-black h-14 items-center flex">
        <Link
          href="/business"
          className={`${readexPro.className} font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green ml-3`}>
          Start a Carmel Community for your business
        </Link>
        <Image src={arrow} alt="arrow" className="ml-auto mr-3" />
      </div>
    </div>
  );
};
