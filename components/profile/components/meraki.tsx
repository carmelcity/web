import { Orbitron } from 'next/font/google';
import React from 'react';
import { BiSolidWallet } from 'react-icons/bi';
import ReactPlaceholder from 'react-placeholder';
import { defaultPlaceholderStyles } from '~/utils/constants';

const orbitron = Orbitron({ subsets: ['latin'] });

const Meraki = ({ meraki, containerClasses, ready = true }: any) => {
  return (
    <div className={containerClasses}>
      <ReactPlaceholder
        showLoadingAnimation
        ready={ready}
        type="rect"
        style={{ width: 160, height: 40, ...defaultPlaceholderStyles }}>
        <div
          className={`py-2 px-4 flex items-center justify-center align-middle ${orbitron.className} text-primary bg-secondary`}>
          {meraki} MERAKI
        </div>
        <div className="p-2 text-secondary h-full bg-primary">
          <BiSolidWallet className="w-6 h-6" />
        </div>
      </ReactPlaceholder>
    </div>
  );
};

export default Meraki;
