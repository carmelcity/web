import React from 'react';
import Image from 'next/image';
import { Readex_Pro } from 'next/font/google';
import { AssetsPlaceholder } from '~/components/placeholders/Assets';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const Assets = ({ data, filter, isLoading }: any) => {
  if (isLoading) {
    return <AssetsPlaceholder />;
  }

  return (
    <div className="mb-9 lg:mb-0 items-center justify-center align-center flex flex-col w-full">
      {data?.filter((p: any) => p.type === filter).map((item: any, index: number) => (
        <div className="my-8 w-full" key={index}>
          <div
            className={`${readexPro.className} lg:text-4xl text-xl border-b border-primary/50 pb-4 w-full mr-auto pl-8 text-left flex items-center text-cyan mb-0 w-full`}>
            <Image src={item.icon}  width={300} height={300} alt="category" className="mr-5 lg:w-20 lg:h-20 w-12 h-12 mask mask-hexagon" />
            {item.category}
          </div>
          <div className="flex flex-wrap pt-5 bg-transparent h-auto w-full lg:justify-start justify-center pl-8">
            {item.apps?.map((app: any, key: number) => (
              <div
                className="block justify-center items-center mr-4 lg:mr-4 mb-4 lg:mb-5 w-[9.5rem] lg:w-52 h-68 bg-dark-green-secondary border border-cyan border-opacity-20"
                key={key}>
                <Image src={item.icon} alt="app" width={300} height={300} className="w-full h-42" />
                <div className="flex items-center p-1">
                  <span className={`${readexPro.className} ml-auto w-full text-xs`}>{app.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
