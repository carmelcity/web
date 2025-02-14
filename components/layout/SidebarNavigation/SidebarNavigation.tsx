import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SidebarNavigationPlaceholder } from '~/components/placeholders/SidebarNavigation';
import { sidebarRoutes } from './routes';
import { AccessButton } from '~/components/access/AccessButton'
import { DynamicIcon, readexPro } from '~/elements';
import logo from '~/images/logo/logo-white-with-white-text.svg'
import logoSM from '~/images/logo/logo-white.svg'

export const SidebarNavigation = ({ isLoading, auth }: any) => {
  const router = useRouter();

  const [navbarElements, setNavbarElemens] = useState(sidebarRoutes);

  const handleNavClick = (targetHref: string) => {
    const updatedNavData = navbarElements.map((item: any) => ({
      ...item,
      current: item.href === targetHref,
    }));
    setNavbarElemens(updatedNavData);
  };

  useEffect(() => {
    const currentPath = router.asPath;
    const updatedNavData = navbarElements.map((item: any) => ({
      ...item,
      current: normalizePath(currentPath) === normalizePath(item.href)
    }));

    setNavbarElemens(updatedNavData);
  }, []);

  const normalizePath = (path: string) => path.replace(/\/+$/, '');

  if (isLoading) {
    return <SidebarNavigationPlaceholder />;
  }

  return (
    <div className="flex z-10 grow sticky top-0 relative flex-col gap-y-5 overflow-y-auto bg-gradient-to-br from-dark-green to-dark-green min-w-[300px] px-6 w-full mr-auto md:h-screen border-r border-cyan/10">
       <a href="/" className='cursor-pointer mt-4'>
          <Image src={logoSM} width={60} height={60} alt='logo' className='lg:hidden ml-2'/>
          <Image src={logo} width={200} height={60} alt='logo' className='hidden lg:block'/>
        </a>
        <nav className="flex flex-1 flex-col border-t border-primary/20 pt-4">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navbarElements.map((item, index) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`${
                      item.current
                        ? 'bg-dark-green-secondary text-cyan'
                        : 'text-gray-400 hover:text-white hover:bg-dark-green-secondary'
                    } ${
                      readexPro.className
                    } font-normal group flex gap-x-3 rounded-md p-2 text-sm leading-6 items-center cursor-pointer`}
                    onClick={() => handleNavClick(item.href)}>
                    {item.img ? (
                      <DynamicIcon name={item.img} width={24} height={24} />
                    ) : (
                      <Image
                        src={item.current ? item.iconActive : item.icon}
                        alt="card"
                        className={`object-fit w-8 h-8 -m-1`}
                      />
                    )}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {/* <li className="-mx-6 mt-auto">
            
          </li> */}
        </ul>
      </nav>
     
    </div>
  );
};
