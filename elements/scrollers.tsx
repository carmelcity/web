import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const Container = ({ children, classes }: any) =>
  classes ? <div className={classes}>{children}</div> : <>{children}</>;

export const InfiniteScrollComponent = ({ renderItem, elementsNumber, containerClasses, loader }: any) => {
  const [displayedItems, setDisplayedItems] = useState(renderItem?.slice(0, elementsNumber));

  const showAll = () => {
    return displayedItems?.map((item: any, index: number) => <React.Fragment key={index}>{item}</React.Fragment>)
  }

  // const fetchData = () => {
  // };

  return (<Container classes={containerClasses} >
        { renderItem }
    </Container>)

  // return (
  //   <InfiniteScroll
  //     dataLength={displayedItems?.length || 0}
  //     next={fetchData}
  //     hasMore={displayedItems?.length < renderItem?.length}
  //     loader={loader}
  //     className="scrollbar-hide">
  //     <Container classes={containerClasses}>
  //       { showAll() }
  //     </Container>
  //   </InfiniteScroll>
  // );
};
