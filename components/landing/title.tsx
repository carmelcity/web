import React from 'react';
import { Readex_Pro } from 'next/font/google';

const readexPro = Readex_Pro({ subsets: ['latin'] });

const Title = ({ text }: any) => {
  return (
    <div className="relative flex flex-col z-20 m-5">
      <div
        className={`${readexPro.className} xxs:text-xl font-normal text-black bg-gradient-to-r from-cyan to-light-green uppercase mt-5 py-2 px-3 mx-auto`}>
        { text.OVERVIEW_TITLE }
      </div>
      <div className={`${readexPro.className} text-2xl lg:text-5xl font-bold mt-4`}>
      { text.OVERVIEW_SUBTITLE }
      </div>
    </div>
  );
};

export default Title;
