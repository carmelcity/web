import React from 'react';
import { TitlePlaceholder } from '../placeholders/Title';
import { orbitron } from '~/components/fonts';

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
