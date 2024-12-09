import React from 'react';
import { HexagonalCard } from '~/components/landing/HexagonalCard';

const data = [
  {
    id: '1',
    icon: '/images/benefits/PeerToPeer.png',
    title: 'Carmel App Builder',
    moreDetails:
      'Begin with our intelligent no-code platform and tailor your product to your unique vision, while always having access to unlimited development services at your fingertips. ',
  },
  {
    id: '2',
    icon: '/images/benefits/AlwaysOnline.png',
    title: 'Carmel Marketing Engine',
    moreDetails:
      'Connect deeply with your audience. Our intelligent writing prompts help you craft impactful content that fosters genuine connection with your audience. ',
  },
  {
    id: '3',
    icon: '/images/benefits/UserOwnedData.png',
    title: 'Carmel Sales Engine',
    moreDetails:
      'Tap into insights to optimize your sales process, nurture and grow your customer base, without losing the human touch.',
  },
];

export const FeaturesCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:gap-20 lg:gap-0 2xl:gap-36 z-10">
      {/* First two cards */}
      {data.slice(0, 2).map((cardItem: any, index: number) => (
        <div key={index} className="col-span-1 md:-mb-36 xl:mb-0 mx-auto">
          <HexagonalCard
            title={cardItem.title}
            description=""
            moreDetails={cardItem.moreDetails}
            icon={cardItem.icon}
            id={cardItem.id}
            flippingCard
          />
        </div>
      ))}

      {/* Centered card on MD screens */}
      <div className="md:col-span-2 xl:col-span-1 mx-auto">
        {data.slice(2, 3).map((cardItem: any, index: number) => (
          <HexagonalCard
            key={index}
            title={cardItem.title}
            description=""
            moreDetails={cardItem.moreDetails}
            icon={cardItem.icon}
            id={cardItem.id}
            flippingCard
          />
        ))}
      </div>
    </div>
  );
};
