import React from 'react';
import Title from '~/components/landing/title';
import { HexagonalCards } from '~/components/landing/HexagonalCards';

const cards = [
  {
    id: 'educate',
    icon: '/images/GrowIcon.png',
    title: 'LAUNCH YOUR Community',
    tag: 'Learn',
    description:
      `Attract people who are passionate about your mission and are excited to help you grow your business.`,
  },
  {
    id: 'development',
    icon: '/images/EngageIcon.png',
    title: 'WORK TOGETHER',
    tag: 'Build',
    description:
    `Work together with your community on innovation initiatives that help your business thrive.`
  },
  {
    id: 'sales',
    icon: '/images/MonetizeIcon.png',
    tag: 'Own',
    title: 'GROW DIGITAL ASSETS',
    description:
    `Create a new digital economy around your business, unlocking new revenue streams and customer loyalty.`
  },
];

export const Instructions = ({ text }: any) => {
  return (
    <div className="max-w-[1920px] overflow-x-hidden overflow-y-clip lg:mt-40">
      <div className="relative ">
        <Title text={text} />
        <div className="mx-auto max-w-[1580px] w-screen px-1 z-30 relative top-8 mb-0">
          <HexagonalCards data={cards} />
        </div>
      </div>
    </div>
  );
};
