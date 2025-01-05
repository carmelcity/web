import React from 'react';
import { TitlePlaceholder } from '~/components/placeholders/Title';
import { orbitron } from '~/elements/fonts';

interface TitleProps {
  decription: string;
  moreClasses?: string;
  isLoading?: boolean;
}

export const Title = ({ decription, moreClasses, isLoading }: TitleProps) => {
  if (isLoading) {
    return <TitlePlaceholder />;
  }

  return (
    <div
      className={`${orbitron.className} tracking-[0.4em] text-4xl text-[#00FFFF] justify-center flex flex-col ${
        moreClasses ?? ''
      }`}>
      {decription}
    </div>
  );
}