import React, { Suspense } from 'react';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'] });

interface TitleProps {
  text: string;
  moreClasses?: string;
}

const Fallback = () => {
    return (<div className="w-60 h-7 animate-pulse bg-cyan bg-opacity-20 mb-2"/>)
}

export default ({ text, moreClasses }: TitleProps) => {
  return <Suspense fallback={<Fallback />}>
    <div
      className={`${orbitron.className} w-full text-center tracking-[0.4em] text-4xl text-[#00FFFF] ${
        moreClasses ?? ''
      }`}>
      {text}
    </div>
    </Suspense>
};