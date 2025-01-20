import React from 'react';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import { useRouter } from 'next/router'
import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
import { BaseCard } from '~/components/cards'

export const Intro = ({ isLoading, item }:  any) => {    
    if (isLoading || !item) {
      return <ProfileHeaderPlaceholder/>
    }

    return <BaseCard {...item} noAction/>
}

export const ItemScreen = ({ name, noIntro, children}: any) => {
    const router = useRouter()
    const itemId: any = router.query.id
    
    return (
      <div>
        <div className="bg-dark-indigo w-full flex justify-center m-auto -mt-24 lg:mt-4">
          <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
          <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
          <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />
          <div className="w-full mb-10 flex justify-center min-h-screen max-w-[1920px] relative z-30">
            <div className="flex flex-col justify-start items-center w-11/12 pb-32 pt-32 lg:pt-4 min-h-full">
                { children }
            </div>
          </div>
        </div>
      </div>
    )
  }