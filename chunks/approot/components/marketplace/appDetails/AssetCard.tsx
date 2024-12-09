import React from 'react';
import { AssetCardProps } from './props';
import Image from 'next/image';
import { Readex_Pro } from 'next/font/google';
import { ShoppingCart } from '~/components/icons';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const AssetCard = ({ data }: AssetCardProps) => {
  const { id, title, image, price } = data;

  return (
    <div className="flex flex-col h-[380px] border border-cyan/10 bg-dark-green/80">
      <Image src={image} alt="banner" className="w-full max-h-52" />
      <div className="flex flex-col p-4">
        <div className={`${readexPro.className}`}>{title}</div>
        <div className="flex mt-5">
          <div className={`${readexPro.className} text-cyan`}>{price}</div>
          <div className={`${readexPro.className}`}></div>
        </div>
        <div className="flex mt-7">
          <div className={`hover:cursor-pointer`}>
            <ShoppingCart />
          </div>
          <button className={`${readexPro.className} w-full text-black bg-cyan rounded-sm ml-2`} onClick={() => {}}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};
