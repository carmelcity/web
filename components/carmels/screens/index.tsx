import React from 'react';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import Title from '~/components/title';
import { useMemo, useState } from 'react';
import { useCarmels } from '~/sdk/hooks/carmels';
import logo from '~/public/images/logo/logo-white.svg';
import { Collection } from '../data/Collection'

export const CarmelsScreen = () => {
  const carmels = useCarmels();

  return (
    <div>
      <div className="bg-dark-indigo w-full flex justify-center m-auto">
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />
        <div className="w-full mb-10 flex justify-center min-h-screen max-w-[1920px] relative z-30">
          <div className="flex flex-col justify-center items-center w-11/12 pb-32 pt-32 lg:pt-4 min-h-full">
              <Image
                    src={logo}
                    alt="card"
                    className={`object-fit w-24 h-24`}
                />
            <Title
              decription="Carmels"
              moreClasses={`text-center text-xl uppercase mb-0`}
              isLoading={carmels.isLoading}
            />
            <Title
              decription="Forever Conversations"
              moreClasses={`text-center lg:text-lg text-sm text-white uppercase mb-10`}
              isLoading={carmels.isLoading}
            />
          <Collection data={carmels.all()} isLoading={carmels.isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};
