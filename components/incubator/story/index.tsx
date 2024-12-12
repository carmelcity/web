import React from 'react';
import Title from './title';
import Main from './main';
import Assets from './assets';
import { Readex_Pro } from 'next/font/google';
import Apps from './apps';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

const Story = ({ story, assets, upperTitle, appsTitle, apps, hideTags, hideHeader, reverse }: any) => {
  return (
    <div className="mb-20 flex flex-col gap-4 z-50">
      {/* <Title title={story.header} upperTitle={upperTitle} src={story.logo} /> */}
      <Main {...story} reverse={reverse} hideTags={hideTags} hideHeader={hideHeader} />
      {/* <Assets assets={assets} header="Assets" /> */}
      {/* <div className={`${readex_pro.className} text-3xl font-light text-primary mt-14 mb-4`}>{appsTitle}</div> */}
      {/* <Apps apps={apps} /> */}
    </div>
  );
};

export default Story;
