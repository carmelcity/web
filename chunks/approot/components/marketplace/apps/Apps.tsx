import React from 'react';
import { Readex_Pro } from 'next/font/google';
import { AppsProps } from './props';
import { AppCard } from './AppCard';
import { MarketplaceApps } from '~/components/placeholders/MarketplaceApps';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const Apps = ({ data, isLoading }: AppsProps) => {
  if (isLoading) {
    return <MarketplaceApps />;
  }

  const { apps } = data;

  const cards = apps.map((item: any, index: number) => {
    return (
      <div key={index}>
        <AppCard data={item} />
      </div>
    );
  });

  return (
    <div className="flex flex-col relative z-10 p-5 mt-32 lg:mt-0">
      <div className="flex">
        <div className={`${readexPro.className} `}>Apps</div>
        <div className={`${readexPro.className} font-light ml-auto hover:cursor-pointer`}>Create Assets</div>
      </div>
      <div className="flex flex-col sm:flex-row mt-5">{cards}</div>
    </div>
  );
};
