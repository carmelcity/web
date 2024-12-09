import React from 'react';
import { Readex_Pro } from 'next/font/google';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-dark-indigo flex flex-col items-center justify-center">
      <h1 className={`${readexPro.className} text-5xl text-white font-bold mb-8 animate-pulse`}>Coming Soon</h1>
      <p className={`${readexPro.className} text-white text-lg mb-8`}>
        We're working hard to bring you something amazing. Stay tuned!
      </p>
    </div>
  );
};
