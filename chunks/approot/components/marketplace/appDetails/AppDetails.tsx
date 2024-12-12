import React from 'react';
import { AppDetailsProps } from './props';
import { AppCard } from './AppCard';
import { AppDetailsPlaceholder } from '~/components/placeholders/AppDetails';
import { AssetCard } from './AssetCard';
import { Readex_Pro } from 'next/font/google';
import { ArrowLeft } from '~/components/icons';
import { useRouter } from 'next/router';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const AppDetails = ({ data, isLoading }: AppDetailsProps) => {
  const router = useRouter();
  if (isLoading) {
    return <AppDetailsPlaceholder />;
  }

  const { app, assets } = data;
  const assetCards = assets.map((item: any, index: number) => {
    return (
      <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 py-3 sm:px-3">
        <AssetCard data={item} />
      </div>
    );
  });

  return (
    <div className="flex flex-col lg:flex-row mt-16 sm:mt-5 z-10 p-5">
      <div className="flex lg:hidden mt-2 sm:mt-12 mb-5">
        <div
          className={`${readexPro.className} flex items-center text-lg ml-3 hover:cursor-pointer`}
          onClick={() => router.push('/marketplace')}>
          <div className="mr-2">
            <ArrowLeft />
          </div>
          Assets
        </div>
        <div className={`${readexPro.className} flex text-lg ml-auto`}>Stories / Landing Page</div>
      </div>
      <div className="md:w-[640px] mx-auto">
        <AppCard data={app} />
      </div>
      <div className="flex flex-col w-full ">
        <div className="flex hidden lg:flex">
          <div
            className={`${readexPro.className} flex items-center text-lg ml-3 hover:cursor-pointer`}
            onClick={() => router.push('/marketplace')}>
            <div className="mr-2">
              <ArrowLeft />
            </div>
            Assets
          </div>
          <div className={`${readexPro.className} flex text-lg ml-auto`}>Stories / Landing Page</div>
        </div>
        <div className="flex flex-wrap w-full sm:px-2 py-2">{assetCards}</div>
      </div>
    </div>
  );
};
