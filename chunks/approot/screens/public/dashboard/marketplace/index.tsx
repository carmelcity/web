import React from 'react';
import { useCarmelApps } from '~/sdk';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import { TopNavbar } from '~/components/layout/TopNavbar';
import { Apps } from '~/components/marketplace/apps';
import { Communities } from '~/components/marketplace/communities';

export const Marketplace = ({ user }: any) => {
  const { data: appsData = [], isLoading: isLoadingApps }: any = useCarmelApps();

  return (
    <div className="flex flex-col">
      <TopNavbar data={user} />
      <Image src={spot} alt="spot" className="z-0 ml-auto absolute -top-10 -left-10" />
      <Apps data={appsData} isLoading={isLoadingApps} />
      <Communities data={appsData} isLoading={isLoadingApps} />
    </div>
  );
};
