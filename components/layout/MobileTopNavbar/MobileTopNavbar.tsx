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
        <Link href="/access" className="w-auto bg-dark-green-secondary ml-2 flex items-center border border-primary/20">
              <div
          className="w-8 h-8 m-auto z-10 ml-3 mr-3"
          style={{
            clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
          }}>
            <Image
              src={data?.user?.avatarImage || profile_placeholder}
              width={100}
              height={100}
              alt="card"
              className="object-cover w-full h-full"
              />
            </div>

            <div className={`${readexPro.className} ml-2 px-4 py-2 text-primary bg-dark-green/50`}>{data?.username}
              <DynamicIcon name={"ArrowLeftOnRectangleIcon"} width={24} height={24} />
            </div>
          </Link>
       
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
