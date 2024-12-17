import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const Container = ({ children, classes }: any) =>
  classes ? <div className={classes}>{children}</div> : <>{children}</>;

export const InfiniteScrollComponent = ({ renderItem, elementsNumber, containerClasses, loader }: any) => {
  const [displayedItems, setDisplayedItems] = useState(renderItem?.slice(0, elementsNumber));

  const fetchData = () => {
    // Simulating data fetching delay until we have real data
    setTimeout(() => {
      const currentLength = displayedItems.length;
      const newData = renderItem.slice(currentLength, currentLength + elementsNumber);
      setDisplayedItems((prevItems: any) => [...prevItems, ...newData]);
    }, 500);
  };

  return (
    <InfiniteScroll
      dataLength={displayedItems?.length || 0}
      next={fetchData}
      hasMore={displayedItems?.length < renderItem?.length}
      loader={loader}
      className="scrollbar-hide">
      <Container classes={containerClasses}>
        {displayedItems?.map((item: any, index: number) => <React.Fragment key={index}>{item}</React.Fragment>)}
      </Container>
    </InfiniteScroll>
  );
};
