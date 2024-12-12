import React from 'react';
import { MerakiPointsCardProps } from './props';
import { Readex_Pro } from 'next/font/google';
import { AchievementsCupIcon, WalletIcon } from '~/components/icons';
import { Orbitron } from 'next/font/google';
import { MerakiPointsCardPlaceholder } from '~/components/placeholders/MerakiPointsCard';

const orbitron = Orbitron({
  subsets: ['latin'],
});

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const MerakiPointsCard = ({ data, isLoading }: MerakiPointsCardProps) => {
  if (isLoading) {
    return <MerakiPointsCardPlaceholder />;
  }

  return (
    <div className="block">
      <span className={`block ${readexPro.className} font-light text-xl mb-3 text-left`}>My Meraki Points</span>
      <div className="lg:w-80 h-48 bg-primary-background-blend">
        <div className="p-5">
          <AchievementsCupIcon />
        </div>
        <div className="block">
          <span className={`block ${readexPro.className} font-thin text-lg text-cyan text-opacity-40 ml-5 text-left`}>
            Meraki Points
          </span>
          <div className="flex">
            <span className={`block ${orbitron.className} font-thin text-4xl text-cyan ml-5 text-left`}>
              {data[0]?.meraki}
            </span>
            <div className="mt-auto ml-auto mb-3 mr-3">
              <WalletIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
