import React, { useState } from 'react';
import Tab from './tab';
import { defaultPlaceholderStyles } from '~/utils/constants';
import ReactPlaceholder from 'react-placeholder';

const Tabs = ({ tabs, ready }: any) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const getTabs = () =>
    tabs.map((tab: any, index: number) => (
      <Tab
        {...tab}
        key={tab.title}
        selected={selectedTab === index}
        onClick={tab.disabled ? () => {} : () => setSelectedTab(index)}
      />
    ));

  const getTabPanel = () => (tabs.length ? tabs.find((_: any, index: number) => index === selectedTab).panel : null);

  return (
    <>
      <ReactPlaceholder
        showLoadingAnimation
        ready={ready}
        type="rect"
        rows={4}
        style={{ minWidth: 30, height: 60, ...defaultPlaceholderStyles }}>
        <div className="w-full flex justify-between border-b-grey border-b-[1px] overflow-x-auto scrollbar-hide my-6">
          {getTabs()}
        </div>
      </ReactPlaceholder>
      <ReactPlaceholder
        showLoadingAnimation
        ready={ready}
        type="rect"
        rows={4}
        style={{ minWidth: 30, height: '30vh', marginTop: 36, ...defaultPlaceholderStyles }}>
        {getTabPanel()}
      </ReactPlaceholder>
    </>
  );
};

export default Tabs;
