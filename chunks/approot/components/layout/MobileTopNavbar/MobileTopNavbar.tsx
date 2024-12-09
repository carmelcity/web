import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { topNavbarRoutes } from './routes';
import { Readex_Pro } from 'next/font/google';
import Link from 'next/link';
import carmelLogo from '../../../images/carmel.webp';
import rocket from '../../../images/dashboard/Rocket.webp';
import arrow from '../../../images/dashboard/ArrowRight.webp';
import profile_placeholder from '../../../images/profile_placeholder.webp';
import { MobileTopNavbarProps } from './props';
import { updateNavbarElements } from '../utils';
import turnOff from '../../../images/TurnOff.svg';

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

  const handleLogOut = () => {
    user.auth.clearAccount();
    window.location.reload();
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full items-center justify-center">
      <nav className="flex items-center w-full py-3 bg-dark-green">
        <Link href="/">
          <Image src={carmelLogo} alt="card" className="h-10 w-10 ml-3" />
        </Link>

        <ul role="list" className="flex ml-auto items-center px-4">
          {navbarElements.map((item, index) => (
            <li key={item.id} className="flex-grow">
              <Link href={item.href} onClick={() => handleNavClick(item.href)}>
                <div className="ml-3">{item.icon}</div>
              </Link>
            </li>
          ))}
          <div
            className="w-11 h-11 ml-3 bg-dark-green-secondary flex justify-center items-center border border-cyan border-opacity-20 cursor-pointer"
            onClick={handleLogOut}>
            <Image src={turnOff} alt="card" />
          </div>
          <Link href="/">
            <Image
              src={data?.user?.avatarImage || profile_placeholder}
              width={100}
              height={100}
              alt="card"
              className="h-11 w-11 ml-3"
            />
          </Link>
        </ul>
      </nav>
      <div className="border-t border-cyan border-opacity-20 bg-black h-14 items-center flex">
        <Image src={rocket} alt="rocket" className="ml-3" />
        <Link
          href="/"
          className={`${readexPro.className} font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green ml-3`}>
          Get Carmel Studio!
        </Link>
        <Image src={arrow} alt="arrow" className="ml-auto mr-3" />
      </div>
    </div>
  );
};
