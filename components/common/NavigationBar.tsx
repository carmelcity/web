"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo-white-with-white-text.svg'
import logoSmall from '@/public/images/logo-white.svg'
// import UserAvatar from '@/components/profiles/UserAvatar';

const ActionLoginButton = ({ myProfile }: any) => {
    return <Link href={"/login"}>
             <div className='mr-2'>
                {/* <UserAvatar myProfile={myProfile}/> */}
           </div>
        </Link>
}

const ActionAvatarButton = ({ myProfile }: any) => {
    return <Link href={"/profile"}>
            <div className='mr-2'>
           {/* <UserAvatar myProfile={myProfile}/> */}
           </div>
        </Link>
}

const ActionButtons = ({ myProfile }: any) => {
    return <div className='flex justify-center items-center gap-4 mr-4'>
        <ActionLoginButton/>
    </div>
}

export default ({ myProfile }: any) => {
    return (<div className="z-10 flex border fixed w-screen top-0 h-20 bg-gradient-to-br from-dark-green to-dark-green z-50 border-b border-cyan/20 flex">
         <div className="flex h-16 shrink-0 items-center ml-4 mt-2">
            <Link href="/">
                <Image
                    src={logo}
                    alt="logo"
                    width={250}
                    height={50}
                    className="hidden lg:block"
                />
                 <Image
                        src={logoSmall}
                        alt="logoSmall"
                        width={80}
                        height={80}
                        className="lg:hidden block"
                    />
            </Link>
        </div>
        <div className="flex h-16 w-full">
        </div>
        {/* { myProfile.loggedIn ? <ActionAvatarButton/> : <ActionButtons/> } */}
    </div>
    )
}