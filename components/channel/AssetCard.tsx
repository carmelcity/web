import React from 'react';
import Image from 'next/image';
import DynamicIcon from '~/components/icons/Dynamic';
import Link from 'next/link';
import HexagonalAvatar from '~/components/avatars/HexagonalAvatar';
import { readexPro } from '~/components/fonts'

export const AssetCard = ({ data }: any) => {
  const { id, title, image, price } = data;

  const HexagonalAvatarTag = (props: any) => {
    return (
      <div className="flex">
        <HexagonalAvatar {...props} />
        <div className="flex items-center justify-center ml-3 mt-1">
          <span className="text-cyan text-s font-bold">@</span>
          {props.nameTag}
        </div>
      </div>
    );
  };
  
  const Stats = () => {
    return  <div className="flex flex-row mt-auto m-4 items-start">
         <Link href={"/"}>
            <div className="ml-2 flex justify-center text-primary items-center cursor-pointer mt-1">
              <DynamicIcon name={"ChatBubbleOvalLeftEllipsisIcon"} width={24} height={24} />
              <span className='text-primary p-1'>12</span>
            </div>
        </Link>            
        <Link href={"/"}>
            <div className="ml-2 flex justify-center text-primary items-center cursor-pointer mt-1">
              <DynamicIcon name={"HandThumbUpIcon"} width={24} height={24} />
              <span className='text-primary p-1'>42</span>
            </div>
        </Link>  
        <Link href={"/"}>
            <div className="ml-2 flex justify-center text-primary items-center cursor-pointer mt-1">
              <DynamicIcon name={"HandThumbDownIcon"} width={24} height={24} />
              <span className='text-primary p-1'>3</span>
            </div>
        </Link>            
  </div>
  }

  const message = "asdfasd fas df asd fasd fas df asd fas df asd fas df asdf asd fas df asd fas dfa sdf"

  return (
    <div className="flex flex-col border border-primary/20 bg-dark-green/50 mt-8 lg:w-2/3 w-full px-0 py-0">
      <div className='flex flex-row p-4'>
          <HexagonalAvatar src={`https://storage.googleapis.com/carmelstorage/accounts/julia.avatar.png`}/>
          <div className='flex flex-col pl-2'>
          <span className='text-md ml-2 text-primary'>Dan</span>
          <span className='text-sm ml-2 text-gray-400'>19 sec ago</span>
          </div>
      </div>
      <Image src={image} alt="banner" className="object-cover w-full max-h-64" />
      <p className={`${readexPro.className} text-lg font-thin text-gray-400 p-4`}>
          {message.length > 200
            ? message.substring(0, 200) + '...'
            : message}
        </p>
      <Stats/>
      {/* <div className="flex flex-col p-4">
        <div className={`${readexPro.className}`}>{title}</div>
        <div className="flex mt-5">
          <div className={`${readexPro.className} text-cyan`}>{price}</div>
          <div className={`${readexPro.className}`}></div>
        </div>
        <div className="flex mt-7">
        </div>
      </div> */}
    </div>
  );
};
