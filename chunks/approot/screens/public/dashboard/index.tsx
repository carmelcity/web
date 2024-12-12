import React from 'react';
import { Readex_Pro } from 'next/font/google';

import { useAppsList } from '~/sdk';
import { Banner } from '~/components/dashboard/Banner/Banner';
import { AppsList } from '~/components/dashboard/AppList/AppsList';
import Container from '~/containers/main';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const Dashboard = () => {
  const { data: appListData = [], isLoading: isLoadingAppList } = useAppsList();

  return (
    <Container>
      <Banner />
      <div className={`${readexPro.className} text-lg mt-5 lg:mt-0 lg:text-4xl mr-auto ml-8`}>My Apps</div>
      <AppsList data={appListData} isLoading={isLoadingAppList} />
    </Container>
  );
};
