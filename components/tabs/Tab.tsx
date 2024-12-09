import React from 'react';
import { Readex_Pro } from 'next/font/google';
import { TabProps } from './props';
import { TabsPlaceholder } from '../placeholders/Tabs';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

export const Tab = ({ description, value, onClick, selectedValue, isLoading }: TabProps) => {
  if (isLoading) {
    return <TabsPlaceholder />;
  }

  const selected = value === selectedValue;

  const selectedStyles = 'text-black bg-primary';
  const notSelectedStyles = 'text-white';

  return (
    <button
      className={`${readex_pro.className} ${selected ? selectedStyles : notSelectedStyles} py-2 px-4 text-lg`}
      onClick={() => onClick(value)}>
      {description}
    </button>
  );
};
