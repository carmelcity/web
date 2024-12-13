import { Readex_Pro } from 'next/font/google';
import React from 'react';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

const Header = ({ title, description }: any) => {
  return (
    <div className="flex flex-col items-center">
      {title && (
        <div
          className={`${readex_pro.className} font-light text-[32px] text-primary`}
          style={{
            backgroundImage: 'linear-gradient(45deg, #00FFFF, #03664E)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
          {title}
        </div>
      )}
      {description && (
        <div className={`${readex_pro.className} text-secondary-grey font-light text-2xl xl:w-4/5 2xl:w-3/5`}>
          {description}
        </div>
      )}
    </div>
  );
};

export default Header;
