import React, { useEffect, useState } from 'react'
import Title from '~/components/title';
import Image from 'next/image';
import logo from '~/public/images/logo/logo-white.svg';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import { Profile } from '../Profile'
import { Header } from '../Header'
import { Wallet } from '../Wallet'

export const ProfileScreen = () => {
  return (
    <main className={`flex w-full flex-col justify-start items-center text-center`}>
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />
       
        <div className='w-full px-4 py-4 lg:px-12 lg:mt-3 mt-20 lg:mb-3'>
           <Header text="Profile" icon="IdentificationIcon"/>
        </div>

        <Profile/>
    </main>
  )
}

export const WalletScreen = () => {
  return (
    <main className={`flex w-full flex-col justify-start items-center text-center`}>
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />
       
        <div className='w-full px-4 py-4 lg:px-12 lg:mt-3 mt-20 lg:mb-3'>
           <Header text="Wallet" icon="WalletIcon"/>
        </div>

        <Wallet/>
    </main>
  )
}