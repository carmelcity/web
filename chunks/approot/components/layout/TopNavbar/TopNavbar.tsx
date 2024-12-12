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

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const TopNavbar = ({ data }: TopNavbarProps) => {
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
    <div className="hidden lg:flex z-50 w-full items-center justify-center">
      <nav className="flex items-center w-full py-3 bg-dark-green">
        <ul role="list" className="flex ml-auto items-center px-4">
          {navbarElements.map((item, index) => (
            <li key={item.id} className="flex-grow">
              <Link href={item.href} onClick={() => handleNavClick(item.href)}>
                <div className="ml-3">{item.icon}</div>
              </Link>
            </li>
          ))}
          <Link href="/" className="w-auto bg-dark-green-secondary ml-3 flex items-center">
            <Image
              src={data?.user?.avatarImage || profile_placeholder}
              width={100}
              height={100}
              alt="card"
              className="h-11 w-11"
            />
            <div className={`${readexPro.className} mx-3`}>{data?.username}</div>
            <Image src={dropdown} alt="card" className="ml-auto mr-3" />
          </Link>
        </ul>
      </nav>
    </div>
  );
};
