"use client";

import React from 'react';
import { Readex_Pro } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { TabBarItems } from '@/components/common/menus';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

const Item = (item: any) => {
  const Icon = item.icon 

  return <li key={item.name} className="flex-grow">
              <Link
                href={item.path}
                className={
                  `${item.active ? `text-cyan` : `text-gray-400`} ` +
                  `${readexPro.className} font-thin h-16 text-xs flex flex-col gap-x-3 gap-y-2 rounded-md p-2 text-sm leading-3 font-semibold items-center cursor-pointer`
                }
                >
                { item.icon ? <Icon className={`h-6 w-6`} /> : <img src={item.image} className='w-6 h-6'/> }            
                {item.name}
            </Link>
      </li>
}


export default () => {
  const pathname = usePathname()

  return (
    <div className="lg:hidden md:hidden fixed bottom-0 left-0 z-20 w-full h-16  border-t border-cyan border-opacity-20 backdrop-blur-lg">
      <nav className="flex justify-center">
        <ul role="list" className="flex justify-between w-full h-full items-center px-4">
          {TabBarItems.map((item : any, i: number) => <Item key={i} {...item} active={pathname === item.path}/>)}
        </ul>
      </nav>
    </div>
  );
};