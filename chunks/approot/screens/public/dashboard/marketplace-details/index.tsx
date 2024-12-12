import React from 'react';
import { useCarmelApp } from '~/sdk';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import { TopNavbar } from '~/components/layout/TopNavbar';
import { AppDetails } from '~/components/marketplace/appDetails';
import { useRouter } from 'next/router';

export const MarketplaceDetails = ({ user }: any) => {
  const router = useRouter();
  const slug: any = router.query.slug;

  const { data: appData = [], isLoading: isLoadingApp }: any = useCarmelApp(slug);

  return (
    <div className="flex flex-col">
      <TopNavbar data={user} />
      <Image src={spot} alt="spot" className="z-0 ml-auto absolute -top-10 -left-10" />
      <AppDetails data={appData} isLoading={isLoadingApp} />
    </div>
  );
};
