import React, { useEffect, useState } from 'react';
import { publicRoutes } from './routes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LogoSmall from '~/images/carmel.webp';
import Logo from '~/images/logo/logo-white-with-white-text.svg'
import Image from 'next/image';
import { readexPro } from '~/elements/fonts';

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const hideMenu = () => setShowMenu(false);

  useEffect(() => {
    router.events.on('routeChangeComplete', hideMenu);

    return () => {
      router.events.off('routeChangeComplete', hideMenu);
    };
  }),
    [];

  const renderNonLinks = () => {
    return publicRoutes
      .filter(r => r.type === 'button' || r.type === 'inverted_link')
      .map((route, index) => (
        <Link href={route.path} key={index}>
          <button
            className={`${readexPro.className} text-sm md:text-md shrink-0 hover:opacity-80 ${
              route.type === 'button' &&
              'border-cyan font-medium border text-white  py-3 w-[200px] shadow-early-access-button shrink-0'
            } ${route.type === 'inverted_link' && 'text-cyan font-light '}`}>
            {route.name}
          </button>
        </Link>
      ));
  };

  const renderBurgerMenu = () => (
    <button className="text-white cursor-pointer w-10 h-10 bg-cyan" onClick={() => setShowMenu(!showMenu)}>
      <div className="w-[16px] h-[0.18rem] bg-black m-auto"></div>
      <div className="w-[16px] h-[0.18rem] bg-black m-auto mt-1"></div>
    </button>
  );

  const renderLogo = () => (
    <div className="flex h-16 items-center hover:opacity-80">
      <Link href="/" className='lg:flex hidden'>
      <Image src={Logo} alt="card" className="w-48 ml-3" />
      </Link>
      <Link href="/" className='lg:hidden'>
          <Image src={LogoSmall} alt="card" className="h-10 w-10" />
      </Link>
    </div>
  );

  return (
    <div className="flex fixed w-screen top-0 z-50">
      <nav
        className={`lg:h-20 h-auto ${
          'bg-transparent  border-b border-b-cyan/50'
        } px-6 w-full backdrop-blur-md`}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust the opacity value (0.8) as needed
          zIndex: 1000, // Adjust the zIndex value as needed
        }}>
          <div className="mx-auto w-full items-center flex justify-between h-full lg:flex-row">
            <div className="flex lg:flex-1 justify-between items-center h-full w-full md:w-full">
              {renderLogo()}
            </div>
            {/* <ul className="flex-2 gap-x-4  hidden lg:flex items-center">{renderLinks()}</ul> */}
            <div className="gap-x-6 justify-end items-center  flex-1 lg:flex">{renderNonLinks()}</div>           
          </div>
      </nav>
    </div>
  );
};
