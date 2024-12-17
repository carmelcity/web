import React, { useEffect, useState } from 'react'
import Title from '~/components/title';
import Image from 'next/image';
import logo from '~/public/images/logo/logo-white.svg';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import { Profile } from '../Profile'

export const MeScreen = () => {

  return (
    <main className={`flex w-full flex-col justify-start items-center text-center`}>
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />
       
        <Profile/>
    </main>
  )
}

// <div className="flex flex-col gap-4 m-8 items-center w-full lg:max-w-[700px] border border-primary/20 bg-dark-green z-50 p-8">
// <Image
//         src={logo}
//         alt="card"
//         className={`object-fit w-24 h-24`}
//     />
// <Title
//   decription={`${auth.session.email}`}
//   moreClasses={`text-center lg:text-lg text-sm text-white uppercase mb-10`}
//   isLoading={false}
// />
// </div>