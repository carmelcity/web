import React, { useState, useCallback } from 'react';
import { useDebounce } from '~/sdk/hooks/useDebounce';
import { Tab } from '.';
import { TabsProps } from './props';

export const Tabs = ({ tabs, selectedTab, onClickTab, isLoading }: TabsProps) => {
  const [scrollXValue, setScrollXValue] = useState(0);
  const debouncedValue = useDebounce<number>(scrollXValue);

  const handleScrollPosition = (newValue: string) => {
    setTimeout(() => {
      const container = document.getElementById('scrollContainer');
      if (container) {
        container.scrollLeft = scrollXValue;
      }
    });
  };

  const handleClick = (newValue: string) => {
    onClickTab(newValue);
    handleScrollPosition(newValue);
  };

  const getTabs = () =>
    tabs.map((button: any, index: number) => (
      <Tab isLoading={isLoading} selectedValue={selectedTab} onClick={handleClick} key={index} {...button} />
    ));

  const onScroll = useCallback(
    (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      setScrollXValue(e.currentTarget.scrollLeft);
    },
    [debouncedValue],
  );

  return (
    <div
      id="scrollContainer"
      className={`py-5 flex items-center justify-center whitespace-nowrap overflow-x-auto w-full gap-2`}
      onScroll={onScroll}>
      {getTabs()}
    </div>
  );
};
