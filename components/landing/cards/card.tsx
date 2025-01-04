import React from 'react';
import Image from 'next/image';
import { readexPro } from '~/elements/fonts';

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
