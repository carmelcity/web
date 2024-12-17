import React from 'react';
import { InfiniteScrollComponent } from '../../infiniteScroll';

export const Badge = ({ imgSrc }: any) => {
  return (
    <div className="p-4 hover:cursor-pointer bg-secondary">
      <img src={imgSrc} className=" max-h-[160px] max-w-[160px] object-cover " />
    </div>
  );
};

const Badges = ({ badges }: any) => {
  return (
    <InfiniteScrollComponent
      renderItem={Object.keys(badges).map((badge: any, index: number) => (
        <Badge imgSrc={badge.imgSrc} key={index} />
      ))}
      containerClasses="flex flex-wrap justify-around gap-3"
      elementsNumber={12}
    />
  );
};

export default Badges;
