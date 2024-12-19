import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { topNavbarRoutes } from './routes';
import Link from 'next/link';
import { MobileTopNavbarProps } from './props';
import { updateNavbarElements } from '../utils';
import { AccessButton } from '~/components/access/AccessButton'
import { readexPro } from '~/components/fonts';

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
      {/* <div className="border-t border-cyan border-opacity-20 bg-black h-14 items-center flex">
        <Link
          href="/business"
          className={`${readexPro.className} font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green ml-3`}>
          Start a Carmel Community for your business
        </Link>
        <Image src={arrow} alt="arrow" className="ml-auto mr-3" />
      </div> */}
    </div>
  );
};
