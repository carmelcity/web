import React from 'react';
import { Orbitron } from 'next/font/google';
import { TitlePlaceholder } from '../placeholders/Title';

const orbitron = Orbitron({ subsets: ['latin'] });

interface TitleProps {
  decription: string;
  moreClasses?: string;
  isLoading?: boolean;
}

const Title = ({ decription, moreClasses, isLoading }: TitleProps) => {
  if (isLoading) {
    return <TitlePlaceholder />;
  }

  return (
    <div
      className={`${orbitron.className} w-full align-middle tracking-[0.4em] text-4xl text-[#00FFFF] ${
        moreClasses ?? ''
      }`}>
      {decription}
    </div>
  );
};
export default Title;
