import React from 'react';
import { TabProps } from './props';
import { TabsPlaceholder } from '../placeholders/Tabs';
import { readexPro } from '~/components/fonts'

export const Tab = ({ description, value, onClick, selectedValue, isLoading }: TabProps) => {
  if (isLoading) {
    return <TabsPlaceholder />;
  }

  const selected = value === selectedValue;

  const selectedStyles = 'text-black bg-primary';
  const notSelectedStyles = 'text-white';

  return (
    <button
      className={`${readexPro.className} ${selected ? selectedStyles : notSelectedStyles} py-2 px-2 lg:px-4 text-sm lg:text-lg`}
      onClick={() => onClick(value)}>
      {description}
    </button>
  );
};
