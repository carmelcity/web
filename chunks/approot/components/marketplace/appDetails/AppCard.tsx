import React from 'react';
import { AppCardProps } from './props';
import Image from 'next/image';
import { Readex_Pro } from 'next/font/google';
import { Discord, Telegram, Twitter } from '~/components/icons';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const AppCard = ({ data }: AppCardProps) => {
  const { banner, profile, name, description, twitter, telegram, discord, assets, followers } = data;

  const handleIconClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="relative flex flex-col border border-cyan/10 bg-dark-green/80 h-auto rounded-md items-center">
      <Image src={banner} alt="banner" className="w-full max-h-72 p-[3px] rounded-md" />
      <Image
        src={profile}
        alt="profile"
        className="absolute w-32 h-32 rounded-md border border-dark-green/80 top-40 sm:top-56"
      />
      <div className={`${readexPro.className} text-lg mx-auto mt-20`}>{name}</div>
      <div className={`${readexPro.className} font-thin text-grey mx-auto mt-3 text-center px-5`}>{description}</div>
      <div className="flex mx-auto space-x-8 my-5">
        <div onClick={() => handleIconClick(twitter)} className="hover:cursor-pointer">
          <Twitter />
        </div>
        <div onClick={() => handleIconClick(telegram)} className="hover:cursor-pointer">
          <Telegram />
        </div>
        <div onClick={() => handleIconClick(discord)} className="hover:cursor-pointer">
          <Discord />
        </div>
      </div>
      <div className="flex flex-col mt-20 mb-2 px-8 w-full">
        <div className="flex">
          <div className={`${readexPro.className} font-light text-lg`}>Assets</div>
          <div className={`${readexPro.className} font-light text-lg text-cyan ml-auto`}>{assets}</div>
        </div>
        <div className="flex">
          <div className={`${readexPro.className} font-light text-lg`}>Followers</div>
          <div className={`${readexPro.className} font-light text-lg text-cyan ml-auto`}>{followers}</div>
        </div>
      </div>
      <button
        className={`${readexPro.className} font-light h-10 w-[87%] mx-8 my-5 bg-dark-green-secondary border border-cyan/50 text-center`}>
        Follow
      </button>
    </div>
  );
};
