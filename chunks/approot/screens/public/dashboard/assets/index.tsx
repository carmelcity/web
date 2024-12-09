import React from 'react';
import { Readex_Pro } from 'next/font/google';

import { useCarmelAssetsStats, useCarmelAssets } from '~/sdk';

import { Stats } from '~/components/dashboard/Stats';
import { Assets } from '~/components/dashboard/Assets';
import Container from '~/containers/main';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const MyAssets = () => {
  const { data: assetsStatsData = [], isLoading: isLoadingAssetsStats } = useCarmelAssetsStats();
  const { data: assetsData = [], isLoading: isLoadingAssets } = useCarmelAssets();

  return (
    <>
      <Stats data={assetsStatsData} isLoading={isLoadingAssetsStats} sectionTitle="My Stats" />
      <div className={`${readexPro.className} text-4xl mr-auto ml-8`}>My Collections</div>
      <Assets data={assetsData} isLoading={isLoadingAssets} />
    </>
  );
};
