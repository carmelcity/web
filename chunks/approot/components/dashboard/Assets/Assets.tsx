import React from 'react';
import { AssetsProps } from './props';
import Image from 'next/image';
import { Readex_Pro } from 'next/font/google';
import { AssetsPlaceholder } from '~/components/placeholders/Assets';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const Assets = ({ data, isLoading }: AssetsProps) => {
  if (isLoading) {
    return <AssetsPlaceholder />;
  }

  return (
    <div className="mb-9 lg:mb-0">
      {data?.map((item: any, index: number) => (
        <div className="my-8" key={index}>
          <div
            className={`${readexPro.className} text-xl w-full mr-auto pl-8 text-left flex items-center text-cyan mb-0`}>
            <Image src={item.icon} alt="category" className="mr-5 w-10 h-10" />
            {item.category}
          </div>
          <div className="flex flex-wrap pt-5 bg-transparent h-auto w-full pl-8">
            {item.apps?.map((app: any, key: number) => (
              <div
                className="block justify-center items-center mr-4 lg:mr-4 mb-4 lg:mb-5 w-[9.5rem] lg:w-52 h-68 bg-dark-green-secondary border border-cyan border-opacity-20"
                key={key}>
                <Image src={app.nftImage} alt="app" className="w-full h-42" />
                <div className="flex items-center p-1">
                  <span className={`${readexPro.className}`}>{item.category}</span>
                  <span className={`${readexPro.className} ml-auto`}>{app.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
