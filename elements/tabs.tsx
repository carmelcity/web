import React, { useState, useCallback } from 'react';
import { useDebounce } from '~/sdk/hooks/useDebounce';
import { TabsPlaceholder } from '~/components/placeholders/Tabs';
import { readexPro } from '~/elements/fonts'
import { DynamicIcon } from '~/elements'

export const Tab = ({ description, icon, value, onClick, selectedValue, isLoading }: any) => {
    if (isLoading) {
      return <TabsPlaceholder />;
    }
  
    const selected = value === selectedValue;
  
    const selectedStyles = 'text-black bg-primary';
    const notSelectedStyles = 'text-white';
  
    return (
      <button
        className={`${readexPro.className} ${selected ? selectedStyles : notSelectedStyles} py-2 px-2 lg:px-4 text-sm lg:text-lg flex flex-row`}
        onClick={() => onClick(value)}>
              { icon && <DynamicIcon name={icon} width={24} height={24} className='mr-2'/>}
              {description}
      </button>
    );
};
  
export const Tabs = ({ tabs, selectedTab, onClickTab, isLoading }: any) => {
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
      className={`py-5 flex items-center justify-start whitespace-nowrap overflow-x-auto w-full gap-2`}
      onScroll={onScroll}>
      {getTabs()}
    </div>
  );
};
