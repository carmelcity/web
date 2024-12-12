import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Readex_Pro } from 'next/font/google';
import { SidebarNavigationProps } from './props';
import { SidebarNavigationPlaceholder } from '~/components/placeholders/SidebarNavigation';
import { sidebarRoutes } from './routes';
import profile_placeholder from '~/images/profile_placeholder.webp';
import DynamicIcon from '~/components/icons/Dynamic';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const SidebarNavigation = ({ data, isLoading, user }: SidebarNavigationProps) => {
  const router = useRouter();

  const [navbarElements, setNavbarElemens] = useState(sidebarRoutes);

  const handleLogin = () => {
    // user.auth.clearAccount();
    // window.location.reload();
    router.push('/access')
  };

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
      current: normalizePath(item.href) === normalizePath(currentPath),
    }));

    setNavbarElemens(updatedNavData);
  }, []);

  const normalizePath = (path: string) => path.replace(/\/+$/, '');

  if (isLoading) {
    return <SidebarNavigationPlaceholder />;
  }

  const UserButton = () => {
    return  <div onClick={handleLogin} className="cursor-pointer h-9 w-full bg-cyan bg-opacity-20 mb-5 flex items-center border border-primary/20">
    <div className="mr-auto ml-1 bg-transparent flex justify-center items-center">
      <div className="flex items-center">
        <div
          className="w-7 h-7 m-auto z-10 bg-transparent"
          style={{
            clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
          }}>
          <Image
            src={data?.user?.avatarImage || profile_placeholder}
            width={100}
            height={100}
            alt={'profile'}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex items-center justify-center ml-3">
          <span className={`${readexPro.className} text-cyan text-s font-extralight`}>{'Login'}</span>
        </div>
      </div>
    </div>
    <div
      className="w-9 h-full ml-auto bg-dark-green-secondary flex justify-center items-center cursor-pointer text-primary"
      onClick={handleLogin}>
      <DynamicIcon name={"ArrowLeftOnRectangleIcon"} width={20} height={20} />
    </div>
  </div>
  }

  return (
    <div className="flex z-10 grow sticky top-0 relative flex-col gap-y-5 overflow-y-auto bg-gradient-to-br from-dark-green to-dark-green min-w-[300px] px-6 w-full mr-auto md:h-screen border-r border-cyan/10">
      <div className="flex h-16 shrink-0 items-center mt-4 border-b border-primary/20">
      <UserButton/>
      </div>
      <nav className="flex flex-1 flex-col mt-4">
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
          <li className="-mx-6 mt-auto"></li>
        </ul>
      </nav>
     
    </div>
  );
};
