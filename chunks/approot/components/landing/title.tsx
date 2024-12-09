import React from 'react';
import { Readex_Pro } from 'next/font/google';

const readexPro = Readex_Pro({ subsets: ['latin'] });

const Title = ({ text }: any) => {
  return (
    <div className="relative flex flex-col z-20 m-5">
      <div
        className={`${readexPro.className} xxs:text-xl font-normal text-black bg-gradient-to-r from-cyan to-light-green uppercase mt-5 py-2 px-3 mx-auto`}>
        {text.OVERVIEW_TITLE}
      </div>
      {/* <div
        className={`${readexPro.className} xxs:text-2xl w-auto font-extralight text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green uppercase`}>
        The Micro-Startup Launchpad
      </div> */}

      <div className={`${readexPro.className} text-xl xxs:text-3xl md:text-5xl font-bold sm:mt-2 pt-4`}>
        {text.OVERVIEW_SUBTITLE}
      </div>
      {/* <div
        className={`${readexPro.className} xxs:text-2xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green mb-5`}>
        Create apps, stories and customers and get unlimited access to development, marketing and sales services.
      </div> */}
    </div>
  );
};

export default Title;
