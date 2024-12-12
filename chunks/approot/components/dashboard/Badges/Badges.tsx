import React from 'react';
import { BadgesProps } from './props';
import { Readex_Pro } from 'next/font/google';
import { HeraldIcon } from '~/components/icons';
import useWindowSize from '~/sdk/hooks/windowSize';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { LG_WIDTH } from '~/utils/constants';
import { BadgesPlaceholder } from '~/components/placeholders/Badges';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const Badges = ({ data, isLoading }: BadgesProps) => {
  const { width } = useWindowSize();

  if (isLoading) {
    return <BadgesPlaceholder />;
  }

  const getBadges = () =>
    data[0]?.badges?.map((item: any, index: number) => {
      return (
        <div
          key={item.id + index}
          className="block w-48 h-48 bg-primary-background-blend flex flex-col justify-center border border-cyan border-opacity-40 border-2 ml-2">
          <div className="flex items-center justify-center h-full">
            <HeraldIcon />
          </div>
          <div className="flex-grow w-auto h-8 bg-orange-500 bg-opacity-30 border border-orange-500 border-opacity-10 mx-auto flex items-end justify-center">
            <span className={`${readexPro.className} font-bold px-2 uppercase text-orange-500`}>{item.name}</span>
          </div>
        </div>
      );
    });

  return (
    <div className="block 2xl:ml-10 2xl:mt-0 mt-5">
      <span className={`block ${readexPro.className} font-light text-xl mb-3 ml-2 text-left`}>My Badges</span>
      <div className="flex">
        {!width ? (
          getBadges()
        ) : width <= LG_WIDTH ? (
          <Carousel
            infiniteLoop
            autoPlay
            showStatus={false}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            className="w-full">
            {getBadges()}
          </Carousel>
        ) : (
          getBadges()
        )}
      </div>
    </div>
  );
};
