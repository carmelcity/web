import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { readexPro } from '~/components/fonts'

export const AppCard = ({ data }: any) => {
  const { banner, profile, name, description, twitter, telegram, discord, assets, followers } = data;

  const handleIconClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="relative flex flex-col border border-primary/20 bg-dark-green/80 h-auto items-center">
      <Image src={banner} alt="banner" className="w-full p-[3px] rounded-md" />
      <Image
        src={profile}
        alt="profile"
        className="absolute w-32 h-32 rounded-md border border-dark-green/80 top-56"
      />
      <div className={`${readexPro.className} text-2xl mx-auto mt-16`}>{name}</div>
      <div className={`${readexPro.className} font-thin text-grey mx-auto mt-3 text-center px-5`}>{description}</div>
      <div className="flex mx-auto space-x-8 my-5">
        {/* <div onClick={() => handleIconClick(twitter)} className="hover:cursor-pointer">
          <Twitter />
        </div>
        <div onClick={() => handleIconClick(telegram)} className="hover:cursor-pointer">
          <Telegram />
        </div>
        <div onClick={() => handleIconClick(discord)} className="hover:cursor-pointer">
          <Discord />
        </div> */}
        <Link href={"/"}>
            <div className="ml-2 flex flex-col justify-center text-primary items-center cursor-pointer mt-1 bg-dark-green-secondary p-8 mask mask-hexagon w-24">
              <span className='text-primary p-1 text-lg'>$195</span>
              <span className='text-xs text-gray-400'>funds</span>
            </div>
        </Link>   
        <Link href={"/"}>
            <div className="ml-2 flex flex-col justify-center text-primary items-center cursor-pointer mt-1 bg-dark-green-secondary p-8 mask mask-hexagon w-24">
              <span className='text-primary p-1 text-lg'>12</span>
              <span className='text-xs text-gray-400'>stakeholders</span>
            </div>
        </Link>   
        <Link href={"/"}>
            <div className="ml-2 flex flex-col justify-center text-primary items-center cursor-pointer mt-1 bg-dark-green-secondary p-8 mask mask-hexagon w-24">
              <span className='text-primary p-1 text-lg'>49</span>
              <span className='text-xs text-gray-400'>followers</span>
            </div>
        </Link>
      </div>
      <div className='flex flex-col items-center'>
      
      <Image
        width={300}
        height={300}
        src={`https://storage.googleapis.com/carmelstorage/assets/shields.logo.png`}
        alt="logo"
        className="w-48 h-48 border border-primary/30 object-fit"
      />
        <span className='text-gray-400 mt-4 text-sm'>governed by:</span>
              <div className='flex flex-row mb-4'>
              <span className='text-primary pr-1 text-lg'>Carmel Shield</span>
              <span className='text-white text-lg'> #492</span>
            </div>
      </div>
      {/* <div className="flex flex-col mt-20 mb-2 px-8 w-full">
        <div className="flex">
          <div className={`${readexPro.className} font-light text-lg`}>Assets</div>
          <div className={`${readexPro.className} font-light text-lg text-cyan ml-auto`}>{assets}</div>
        </div>
        <div className="flex">
          <div className={`${readexPro.className} font-light text-lg`}>Followers</div>
          <div className={`${readexPro.className} font-light text-lg text-cyan ml-auto`}>{followers}</div>
        </div>
      </div> */}
      {/* <button
        className={`${readexPro.className} font-light h-10 w-[87%] mx-8 my-5 bg-dark-green-secondary border border-cyan/50 text-center`}>
        Follow
      </button> */}
    </div>
  );
};
