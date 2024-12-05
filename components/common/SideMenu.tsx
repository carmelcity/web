"use client";

import React from 'react';
import Link from 'next/link';
import { Readex_Pro } from 'next/font/google';
import { usePathname } from 'next/navigation'
import { SideMenuItems } from '@/components/common/menus';

const readexPro = Readex_Pro({
    subsets: ['latin'],
});

const Item = (item: any) => {
    const Icon = item.icon 
    return <Link
            href={item.path}
            className={`${
            item.active
                ? 'text-cyan bg-dark-green-secondary '
                : 'text-gray-400'
            } ${
            readexPro.className
            } font-normal group hover:bg-dark-green-secondary hover:text-white flex gap-x-3 rounded-md p-2 text-sm leading-6 items-center cursor-pointer`}
            >            
            { item.icon ? <Icon className={`h-6 w-6`} /> : <img src={item.image} className='w-6 h-6'/> }            
            {item.name}
        </Link>
}

export default () => {
    const pathname = usePathname()

    return (<nav className="flex flex-1 flex-col mt-2 w-full">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
                <ul role="list" className="-mx-2 space-y-1">
                {   SideMenuItems.map((item: any, i: number) => <Item key={i} {...item} active={pathname === item.path}/>) }
                </ul>
            </li>
            </ul>
    </nav>)
}