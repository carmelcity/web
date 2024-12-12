import { Readex_Pro } from 'next/font/google';
import React from 'react';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

const Title = () => {
  return (
    <div className="flex justify-center items-center flex-row mt-4 md:mt-0  md:flex-col lg:w-[66vw]">
      <div className="flex flex-col w-fit items-center md:items-start gap-1 z-10">
        {/* <div className={`${readex_pro.className} text-primary font-light text-xl`}>DO MEANINGFUL WORK</div> */}
        <div className="flex flex-col items-center md:items-start">
          {/* <div className={`${readex_pro.className} font-bold text-4xl lg:text-[56px] -mb-4`}>CONTRIBUTE</div> */}
          {/* <div className={`${readex_pro.className} font-bold text-4xl lg:text-[56px] xl:text-[72px]`}>
            Carmel Incubator
          </div> */}
        </div>
       {/* <div className={`${readex_pro.className} text-primary text-xl lg:text-2xl font-light md:text-left mt-4`}>
          Complete challenges and collect points.
        </div> */}
      </div>
    </div>
  );
};

const Banner = ({ moreClasses, img }: any) => {
  return (
    <div
      className={`relative flex flex-col w-full mb-10 gap-6 items-center justify-center px-0 z-50 ${
        moreClasses ?? ''
      }`}>
      
      <img src={'/images/vector-1.webp'} className="inline-block w-full h-auto object-contain absolute top-0 z-1" />
      <img src={'/images/vector-2.webp'} className="inline-block w-full h-auto object-contain absolute top-0 z-1" />

      <Title />
      <div className="w-full z-10">
        <img
          src={img}
          className="inline-block object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
