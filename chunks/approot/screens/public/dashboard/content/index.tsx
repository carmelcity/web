import React from 'react';
import { Readex_Pro } from 'next/font/google';

import { useCarmelStats, useCarmelContent } from '~/sdk';
import { Stats } from '~/components/dashboard/Stats';
import { Content } from '~/components/dashboard/Content';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const MyContent = () => {
  const { data: statsData = [], isLoading: isLoadingStats } = useCarmelStats();
  const { data: contentData = [], isLoading: isLoadingContent } = useCarmelContent();

  return (
    <>
      <Stats data={statsData} isLoading={isLoadingStats} sectionTitle="Article stats" />
      <div className={`${readexPro.className} text-lg mt-5 lg:mt-0 lg:text-4xl mr-auto ml-8`}>My Content</div>
      <Content data={contentData} isLoading={isLoadingContent} />
    </>
  );
};
