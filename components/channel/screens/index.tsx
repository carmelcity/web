import React, { useEffect, useState } from 'react';
import { useCarmelApp } from '~/sdk';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import { AppDetails } from '../AppDetails';
import { useRouter } from 'next/router';
import Title from '~/components/title';
import logo from '~/public/images/logo/logo-white.svg';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import { Intro } from '~/components/me/Intro'
import { CarmelIntro } from '~/components/carmels/CarmelIntro'
import { useCarmelAccount, useCarmel } from '~/sdk';
import { Spinner } from '~/components/spinner';

const BANNER_PLACEHOLDER = `/images/bg-1.png`
const PROFILE_PLACEHOLDER = `/images/profile_placeholder.webp`

const AccountProfile = ({ username }: any) => {
  const { isLoading, error, account } = useCarmelAccount({ username })

    return <main className={`flex w-full flex-col justify-start items-center text-center mt-24 lg:mt-4`}>
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />
      
        <div className={`flex flex-col justify-start relative w-full px-2 lg:px-12 mb-20`}>
            <Intro
              isLoading={isLoading}
              bannerImage={account ? account.banner : BANNER_PLACEHOLDER} 
              profileImage={account ? account.profile : PROFILE_PLACEHOLDER} 
              bio={account ? account.bio : ''} 
              email={account ? "" : 'This profile does not exist yet'} 
              username={account ? account.username : 'Not an account'} 
            />
          </div>
    </main>
}

const Carmel = ({ id }: any) => {
    const { isLoading, error, item } = useCarmel(id)

    return <main className={`flex w-full flex-col justify-start items-center text-center mt-24 lg:mt-4`}>
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />
      
        <div className={`flex flex-col justify-start relative w-full px-2 lg:px-12 mb-20`}>
        <CarmelIntro
              isLoading={isLoading}
              carmel={item}
          />
          </div>
    </main>
}

export const ChannelScreen = ({ env }: any) => {
  const router = useRouter()
  const slug: any = router.query.slug

  if (!slug) {
    return <div/>
  }

  if (isNaN(parseInt(slug))) {
    return <AccountProfile username={slug}/>
  }

  return <Carmel id={parseInt(slug)}/>
}