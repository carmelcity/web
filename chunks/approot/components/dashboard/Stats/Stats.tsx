import React from 'react';
import { Readex_Pro } from 'next/font/google';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import { StatsProps } from './props';
import { StatsPlaceholder } from '~/components/placeholders/Stats';
import arrowUp from '~/images/ArrowUp.svg';
import useWindowSize from '~/sdk/hooks/windowSize';
import { LG_WIDTH } from '~/utils/constants';
import { UsersSvg } from '~/images/Users';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const Stats = ({ data, isLoading, sectionTitle }: StatsProps) => {
  const { width } = useWindowSize();
  if (isLoading) {
    return <StatsPlaceholder />;
  }

  const getStats = () =>
    data.map((item: any, index: any) => {
      return (
        <div
          key={index}
          className="flex p-5 lg:w-80 h-24 bg-dark-green-secondary bg-opacity-20 border border-cyan border-opacity-20 border-solid border-1 lg:mr-4">
          <div className="bg-cyan rounded w-1/5 h-full mr-5 flex items-center">
            <div className="m-auto">
              <UsersSvg />
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`${readexPro.className} mr-auto font-light`}>{item.title}</span>
            <div className="mr-auto flex">
              <span className={`${readexPro.className} mr-auto text-xl font-bold`}>{item.value}</span>
              {item.increasing && (
                <span className={`${readexPro.className} ml-2 text-cyan text-sm font-normal mt-auto flex`}>
                  <Image src={arrowUp} alt="icon" className="m-auto"></Image>
                  {item.increasing}
                </span>
              )}
              <span className={`${readexPro.className} ml-2 text-cyan text-sm font-normal mt-auto`}>{item.amount}</span>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div className="mb-8 mt-28 sm:w-full ml-8">
      <span
        className={`${readexPro.className} w-full lg:font-normal flex items-start text-md font-light lg:text-lg mb-5`}>
        {sectionTitle}
      </span>
      <div className="flex flex-wrap">
        {!width ? (
          getStats()
        ) : width <= LG_WIDTH ? (
          <Carousel
            infiniteLoop
            autoPlay
            showStatus={false}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            className="w-full">
            {getStats()}
          </Carousel>
        ) : (
          getStats()
        )}
      </div>
    </div>
  );
};
