import React from 'react';
import { Readex_Pro } from 'next/font/google';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

const Title = ({ upperTitle, title, src }: any) => {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className={`${readex_pro.className} font-light text-2xl text-primary`}>{upperTitle}</div>
      <div className="relative flex items-center justify-center gap-2">
        <img
          src={src}
          className="absolute rounded-[20px] -left-[48px] h-[40px] w-[40px] md:-left-[80px] md:h-[64px] md:w-[64px]"
        />
        <div className={`${readex_pro.className} font-bold text-4xl md:text-[56px]`}>{title}</div>
      </div>
    </div>
  );
};

export default Title;
