import React from 'react';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import { Title } from '~/elements';
import logo from '~/public/images/logo/logo-white.svg';

export const WaitScreen = () => {
  return (
    <div>
      <div className="bg-dark-indigo w-full flex justify-center m-auto">
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="z-0 bottom-[5%] absolute" />
        <Image src={wire2} alt="wire2" className="z-0 bottom-[5%] absolute" />
        <div className="w-full mb-10 flex justify-center min-h-screen relative z-30">
          <div className="flex flex-col justify-center items-center lg:h-1/2 h-screen">
            <Image
                src={logo}
                alt="card"
                className={`object-fit w-48 h-48`}
            />
            <Title
              decription="Carmel"
              moreClasses={`uppercase text-2xl ml-4`}
              isLoading={false}
            />
            <Title
              decription="Coming Soon"
              moreClasses={`uppercase text-white ml-2 text-xl`}
              isLoading={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
