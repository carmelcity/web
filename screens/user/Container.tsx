import React from 'react';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';

import { readex_pro, DynamicIcon } from '~/elements';

const Header = ({ text, icon }: any) => {
  return <div className={`${readex_pro.className} text-left flex flex-row mb-8 mt-28 lg:mt-0`}>
    <DynamicIcon name={icon} width={32} height={32} className='text-primary mr-3'/>
    <span className='font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green text-2xl'>
        { text }
    </span>
  </div>
}

export const Container = ({ name, children, icon }: any) => {
    return (
      <div className="bg-dark-indigo w-full flex justify-center m-auto -mt-24 lg:mt-4 w-full">
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />

         <div className='w-full px-4 py-4 lg:px-12 lg:mt-3 mt-20 lg:mb-3 flex flex-col'>
              <Header text={name} icon={icon} />
              <div className="flex flex-col justify-start items-center w-full">
                { children }
              </div>
          </div>
      </div>
  )
}