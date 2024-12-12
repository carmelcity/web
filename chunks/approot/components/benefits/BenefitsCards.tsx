import React from 'react';
import { HexagonalCard } from '../landing/HexagonalCard';

const data = [
  {
    id: '1',
    icon: '/images/benefits/PeerToPeer.png',
    subtitle: 'Peer-to-Peer Infrastructure',
    description:
      'Carmel Apps run on the Carmel Network owned and operated by the Carmel Community. No central servers. No middlemen.',
  },
  {
    id: '2',
    icon: '/images/benefits/AlwaysOnline.png',
    subtitle: 'Always Online',
    description:
      'As long as the Carmel Network keeps operating, Carmel Apps will always be up and running. There is no single point of failure.',
  },
  {
    id: '3',
    icon: '/images/benefits/UserOwnedData.png',
    subtitle: 'User-Owned Data',
    description: 'Only users have access to control their personal data and the content they generate. No one else.',
  },
  {
    id: '4',
    icon: '/images/benefits/DigitalWallet.png',
    subtitle: 'Digital Wallet',
    description: 'Every Carmel Account comes with a secure Digital Wallet attached to their profile.',
  },
  {
    id: '5',
    icon: '/images/benefits/DigitalAssets.png',
    subtitle: 'Digital Assets',
    description: 'Users own, buy, sell and trade Carmel Assets that can be used inside Carmel Apps.',
  },
  {
    id: '6',
    icon: '/images/benefits/DigitalPayments.png',
    subtitle: 'Digital Payments',
    description: 'Carmel members can receive and send payments to other members of the Carmel Network.',
  },
  {
    id: '7',
    icon: '/images/benefits/HighSecurity.png',
    subtitle: 'High-Grade Security',
    description: 'User data is protected with the highest level of encryption and cryptographic algorithms.',
  },
  {
    id: '8',
    icon: '/images/benefits/CensorshipFree.png',
    subtitle: 'Censorship-Free Content',
    description: 'Only users have access to control their personal data and the content they generate. No one else.',
  },
  {
    id: '9',
    icon: '/images/benefits/PrivateMessaging.png',
    subtitle: 'Truly Private Messaging',
    description:
      'The Carmel Network allows users to communicate with one another directly and priavtely. Without a central database.',
  },
];

export const BenefitsCards = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:gap-14 lg:gap-8 xl:gap-2 z-10">
        {/* First two cards */}
        {data.slice(0, 2).map((cardItem: any, index: number) => (
          <div key={index} className="md:col-span-1 lg:col-span-1 xl:col-span-1 md:-mb-36 xl:mb-0">
            <HexagonalCard
              title=""
              subtitle={cardItem.subtitle}
              description=""
              moreDetails={cardItem.description}
              icon={cardItem.icon}
              id={cardItem.id}
              flippingCard={true}
            />
          </div>
        ))}

        {/* Centered third */}
        <div className="md:col-span-2 xl:col-span-1 mx-auto md:-mb-36">
          {data.slice(2, 3).map((cardItem: any, index: number) => (
            <HexagonalCard
              key={index}
              title=""
              subtitle={cardItem.subtitle}
              description=""
              moreDetails={cardItem.description}
              icon={cardItem.icon}
              id={cardItem.id}
              flippingCard={true}
            />
          ))}
        </div>
        {/* 4 & 5 cards */}
        {data.slice(3, 5).map((cardItem: any, index: number) => (
          <div key={index} className="md:col-span-1 lg:col-span-1 xl:col-span-1 md:-mb-36 xl:mb-0">
            <HexagonalCard
              title=""
              subtitle={cardItem.subtitle}
              description=""
              moreDetails={cardItem.description}
              icon={cardItem.icon}
              id={cardItem.id}
              flippingCard={true}
            />
          </div>
        ))}

        {/* Centered sixth card*/}
        <div className="md:col-span-2 xl:col-span-1 mx-auto md:-mb-36">
          {data.slice(5, 6).map((cardItem: any, index: number) => (
            <HexagonalCard
              key={index}
              title=""
              subtitle={cardItem.subtitle}
              description=""
              moreDetails={cardItem.description}
              icon={cardItem.icon}
              id={cardItem.id}
              flippingCard={true}
            />
          ))}
        </div>
        {/* 7 & 8 cards */}
        {data.slice(6, 8).map((cardItem: any, index: number) => (
          <div key={index} className="md:col-span-1 lg:col-span-1 xl:col-span-1 md:-mb-36 xl:mb-0">
            <HexagonalCard
              title=""
              subtitle={cardItem.subtitle}
              description=""
              moreDetails={cardItem.description}
              icon={cardItem.icon}
              id={cardItem.id}
              flippingCard={true}
            />
          </div>
        ))}

        {/* Centered last card */}
        <div className="md:col-span-2 xl:col-span-1 mx-auto ">
          {data.slice(8, 9).map((cardItem: any, index: number) => (
            <HexagonalCard
              key={index}
              title=""
              subtitle={cardItem.subtitle}
              description=""
              moreDetails={cardItem.description}
              icon={cardItem.icon}
              id={cardItem.id}
              flippingCard={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
