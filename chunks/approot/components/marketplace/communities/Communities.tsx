import React from 'react';
import { Readex_Pro } from 'next/font/google';
import { CommunitiesProps } from './props';
import { CommunitiesCard } from './CommunitiesCard';
import { MarketplaceCommunities } from '~/components/placeholders/MarketplaceCommunities';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const Communities = ({ data, isLoading }: CommunitiesProps) => {
  if (isLoading) {
    return <MarketplaceCommunities />;
  }

  const { communities } = data;

  const cards = communities.map((item: any, index: number) => {
    return (
      <div key={index}>
        <CommunitiesCard data={item} />
      </div>
    );
  });

  return (
    <div className="flex flex-col relative z-10 p-5">
      <div className="flex">
        <div className={`${readexPro.className} `}>Communities</div>
      </div>
      <div className="flex flex-col sm:flex-row mt-5">{cards}</div>
    </div>
  );
};
