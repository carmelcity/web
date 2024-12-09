import { Readex_Pro } from 'next/font/google';
import React from 'react';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

const Title = () => {
  return (
    <div className="flex justify-center items-center flex-row mt-4 md:mt-0  md:flex-col lg:w-[66vw]">
      <div className="flex flex-col w-fit items-center md:items-start gap-1 z-10">
        <div className={`${readex_pro.className} text-primary font-light text-xl`}>EXPLORE</div>
        <div className="flex flex-col items-center md:items-start">
          <div className={`${readex_pro.className} font-bold text-4xl lg:text-[56px] -mb-4`}>Welcome to</div>
          <div className={`${readex_pro.className} font-bold text-4xl lg:text-[56px] xl:text-[72px]`}>
            Carmel Universe
          </div>
        </div>
        <div className={`${readex_pro.className} text-primary text-2xl lg:text-3xl font-light md:text-left`}>
          Enjoy the Web3 space like never before
        </div>
      </div>
    </div>
  );
};

const Banner = ({ moreClasses }: any) => {
  return (
    <div
      className={`relative mt-10 md:mt-0 flex flex-col w-full mb-20 md:flex-row gap-6 md:gap-0 items-center justify-center px-0 md:px-10 ${
        moreClasses ?? ''
      }`}>
      <Title />
      <div className="w-full md:w-2/3 z-10">
        <img
          src={'/images/banner-carmel-universe.webp'}
          className="inline-block h-[50vh] md:h-[90vh] w-auto object-contain"
        />
      </div>
      <img src={'/images/vector-1.webp'} className="inline-block w-full h-auto object-contain absolute top-[50%] z-1" />
      <img src={'/images/vector-2.webp'} className="inline-block w-full h-auto object-contain absolute top-[50%] z-1" />
    </div>
  );
};

export default Banner;
