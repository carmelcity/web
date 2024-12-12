import React, { useEffect, useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import { publicRoutes } from './routes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavbarProps } from './props';

// TODO:
// 1. Add active class to the current route - DONE
// 2. Add "Button styling" to the navbar item request access
// 3. mobile responsive mode
// 4. merge with Nav component

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const Navbar = ({ isDashboard, notNeeded }: NavbarProps) => {
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

  const renderLinks = () => {
    return publicRoutes
      .filter(r => r.type === 'link')
      .map((route, index) => (
        <li key={index} className="mr-2 text-sm md:text-md shrink-0">
          <Link
            href={route.path}
            className={`${readexPro.className} cursor-pointer font-normal ${
              router.pathname === route.path ? 'text-cyan' : 'text-white'
            } hover:opacity-80`}>
            {route.name}
          </Link>
        </li>
      ));
  };

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
      <Link href="/">
        <img src="/images/logo/logo-white-with-white-text.svg" alt="logo" className="h-12 block" />
      </Link>
    </div>
  );

  if (isDashboard || notNeeded) {
    return null;
  }

  return (
    <div className="flex fixed w-screen top-0 z-50">
      <nav
        className={`lg:h-20 h-auto ${
          isDashboard
            ? 'bg-dark-green bg-gradient-to-br lg:from-dark-green-secondary lg:to-transparent'
            : 'bg-transparent  border-b border-b-cyan/50'
        } px-6 w-full backdrop-blur-md`}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust the opacity value (0.8) as needed
          zIndex: 1000, // Adjust the zIndex value as needed
        }}>
        {!isDashboard ? (
          <div className="md:max-w-[1740px] mx-auto w-full items-center flex justify-between h-full flex-col lg:flex-row">
            <div className="flex lg:flex-1 justify-between items-center h-full w-full md:w-full">
              {renderLogo()}
              <div className="lg:hidden ">{renderBurgerMenu()}</div>
            </div>
            <ul className="flex-2 gap-x-4  hidden lg:flex items-center">{renderLinks()}</ul>
            <div className="hidden gap-x-6 justify-end items-center  flex-1 lg:flex">{renderNonLinks()}</div>
            {showMenu && (
              <ul className="mt-2 my-8 lg:hidden text-center">
                <div className="flex gap-y-4 mb-10 flex-col">{renderLinks()}</div>
                <div className="flex gap-y-4 flex-col">{renderNonLinks()}</div>
              </ul>
            )}
          </div>
        ) : (
          <div className="flex h-full items-center justify-between w-full ">
            <div className={`${isDashboard && 'lg:hidden'}`}>{renderLogo()}</div>
            <div className="flex justify-end w-full items-center flex h-full">
              {publicRoutes.find(r => r.path === '/carmel-universe') && (
                <Link href="/carmel-universe">
                  <button className="text-cyan cursor-pointer text-sm md:text-md font-normal hover:opacity-80">
                    Carmel Universe
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
