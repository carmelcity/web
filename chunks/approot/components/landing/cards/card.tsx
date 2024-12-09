import { Readex_Pro } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

const readexPro = Readex_Pro({ subsets: ['latin'] });

const Card = ({ title, description }: any) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full max-w-64 h-80 m-auto p-6">
      <Image src="/images/dollar-bitcoin.png" alt="icon" width={120} height={120} />
      <div className={`${readexPro.className} text-2xl font-semibold`}>{title}</div>
      <div className={`${readexPro.className} text-primary`}>{description}</div>
    </div>
  );
};

export default Card;
