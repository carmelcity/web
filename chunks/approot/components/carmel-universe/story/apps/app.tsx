import { Readex_Pro } from 'next/font/google';
import React from 'react';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

const App = ({ src, description }: any) => {
  return (
    <div className="inline-block items-end border-8 border-[#00BCD414] ml-4 w-[40%] relative">
      <img src={src} className="inline-block object-contain brightness-75 w-full" />
      <div
        className={`${readex_pro.className} font-bold text-lg md:text-3xl lg:text-[40px] absolute bottom-0 left-1 md:left-4`}>
        {description}
      </div>
    </div>
  );
};

export default App;
