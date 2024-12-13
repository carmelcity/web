import React from 'react';
import { useMemo, useState } from 'react';
import { AppCard } from './AppCard';
import { AppDetailsPlaceholder } from '~/components/placeholders/AppDetails';
import { AssetCard } from './AssetCard';
import { useRouter } from 'next/router';

export const AppDetails = ({ data, isLoading }: any) => {  
  const tabs = useMemo(
    () => [
      {
        description: 'Posts',
        value: 'posts',
      },
      {
        description: 'Stories',
        value: 'stories',
      },
      {
        description: 'Challenges',
        value: 'challenges',
      },
      {
        description: 'Tutorials',
        value: 'tutorials',
      },
      {
        description: 'Assets',
        value: 'asset',
      }
    ],
    [],
  );
  if (isLoading) {
    return <AppDetailsPlaceholder />;
  }

  const { app, assets } = data;


  const assetCards = assets.map((item: any, index: number) => {
    return (
      <div key={index} className="w-full items-center justify-center align-center flex flex-col">
        <AssetCard data={item} />
      </div>
    );
  });

  return (
    <div className="flex flex-col lg:flex-row mt-16 sm:mt-5 z-10 p-5">
      <div className="md:w-[640px] mx-auto">
        <AppCard data={app} />
      </div>
      <div className="flex flex-col w-full lg:ml-4 lg:mt-0 mt-4">
        <div className="flex flex-wrap w-full sm:px-2 py-2">{assetCards}</div>
      </div>
    </div>
  );
};
