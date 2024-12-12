import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { sidebarRoutes } from '../SidebarNavigation/routes';
import { Readex_Pro } from 'next/font/google';
import Link from 'next/link';
import DynamicIcon from '~/components/icons/Dynamic';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const MobileNavigation = () => {
  const [navbarElements, setNavbarElemens] = useState(sidebarRoutes);

  const handleNavClick = (targetHref: string) => {
    const updatedNavData = navbarElements.map((item: any) => ({
      ...item,
      current: item.href === targetHref,
    }));
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
    <div className="fixed bottom-0 left-0 z-50 w-full h-16  border-t border-cyan border-opacity-20 backdrop-blur-lg">
      <nav className="flex justify-center">
        <ul role="list" className="flex justify-between w-full h-full items-center px-4">
          {navbarElements.map((item, index) => (
            <li key={item.name} className="flex-grow w-1/5">
              <Link
                href={item.href}
                className={
                  `${item.current ? `text-cyan` : `text-gray-400`} ` +
                  `${readexPro.className} font-thin h-16 text-xs flex flex-col gap-x-3 gap-y-2 rounded-md p-2 text-sm leading-3 font-semibold items-center cursor-pointer`
                }
                onClick={() => handleNavClick(item.href)}>
                {/* <Image src={item.current ? item.iconActive : item.icon} alt="card" className={`${item.href === '/' ? 'w-10 h-10' : 'w-8 h-8 m-1'}`}/> */}
                {item.img ? (
                  <DynamicIcon name={item.img} width={40} height={40} className={`-m-1`} />
                ) : (
                  <Image
                    src={item.current ? item.iconActive : item.icon}
                    alt="card"
                    className={`object-fit w-11 h-11 -m-2`}
                  />
                )}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
