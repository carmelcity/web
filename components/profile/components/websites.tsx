import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import { defaultPlaceholderStyles } from '~/utils/constants';

const Site = ({ icon, onClick, ready }: any) => {
  const Icon = icon;

  return (
    <ReactPlaceholder
      showLoadingAnimation
      ready={ready}
      type="rect"
      style={{ minWidth: 60, height: 60, ...defaultPlaceholderStyles }}>
      <div
        className="cursor-pointer p-4"
        style={{
          backgroundColor: '#8899B21C',
          clipPath: 'polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)',
        }}
        onClick={onClick}>
        <Icon style={{ width: 28, height: 28 }} className="text-grey" />
      </div>
    </ReactPlaceholder>
  );
};

const Websites = ({ sites, ready }: any) => {
  return (
    <div className="flex justify-center gap-6">
      {sites.map((site: any, index: number) => (
        <Site {...site} key={index} ready={ready} />
      ))}
    </div>
  );
};

export default Websites;
