import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import useWindowSize from '~/sdk/hooks/windowSize';
import { Readex_Pro } from 'next/font/google';
import { IoMdImages } from 'react-icons/io';
import { getShowableImages } from '~/utils/helper';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

const Header = ({ header }: any) => {
  return (
    <div className="flex justify-between gap-4">
      <div className="flex justify-between gap-3">
        <IoMdImages className="w-6 h-6 text-primary" />
        <div className={readex_pro.className}>{header}</div>
      </div>
      <div className="flex justify-end items-center gap-1 hover:cursor-pointer">
        <div className={`flex items-center ${readex_pro.className}`}>View All</div>
        <ChevronRightIcon className="text-primary font-bold" width={24} height={24} />
      </div>
    </div>
  );
};

const Asset = ({ src, moreAssets }: any) => {
  return (
    <div
      className="
			flex justify-center items-center 
			hover:cursor-pointer min-h-[160px] h-full relative
 			bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${src})` }}>
      {moreAssets && (
        <div className="absolute w-full h-full bg-gradient-to-b from-primary to-secondary backdrop-blur-sm opacity-75" />
      )}
      <div className="absolute w-full h-full z-10 flex justify-center text-2xl items-center">{moreAssets}</div>
    </div>
  );
};

const Assets = ({ assets, header }: any) => {
  const { width = 0 } = useWindowSize();

  const showableImages = getShowableImages(width);

  const moreAssets = assets.length - showableImages - 1;

  return (
    <div className="flex flex-col px-4 py-5 bg-secondary gap-4 mb-10">
      <Header header={header} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
        {assets.slice(0, showableImages).map((asset: any, index: number) => (
          <Asset key={index} src={asset.src} />
        ))}
        <Asset src={assets[showableImages].src} moreAssets={moreAssets ? '+ ' + moreAssets : ''} />
      </div>
    </div>
  );
};

export default Assets;
