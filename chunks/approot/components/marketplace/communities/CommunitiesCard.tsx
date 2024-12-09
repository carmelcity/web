import React from 'react';
import { CommunitiesCardProps } from './props';
import Image from 'next/image';
import { Readex_Pro } from 'next/font/google';
import { Calendar } from '~/components/icons';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const CommunitiesCard = ({ data }: CommunitiesCardProps) => {
  const { image, title } = data;

  return (
    <div className="flex flex-col relative sm:w-96 mt-5 sm:mt-0 sm:mr-5 h-52 bg-dark-green/80 hover:cursor-pointer hover:bg-dark-green/70 group hover:brightness-100">
      <Image src={image} alt="app" className="p-[0.7px] h-full brightness-75 group-hover:brightness-100" />
      <div className="absolute p-2 bottom-2 z-10">
        <div className={`${readexPro.className} font-light text-md truncate`}>{title}</div>
      </div>
      <div className="bg-gradient-to-t from-black to-[#052F3500] absolute w-full h-32 bottom-0"></div>
    </div>
  );
};
