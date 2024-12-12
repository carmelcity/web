import React from 'react';
import { StoryGridItem } from './StoryGridItem';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { StoriesGridProps } from './props';

export const StoriesGrid = ({ data, isLoading }: StoriesGridProps) => {
  const getStoryGridList = () =>
    data.map((post: any, index: number) => (
      <StoryGridItem isLoading={isLoading} {...post} {...post.data} key={index} />
    ));

  return (
    <div className={`w-full grid md:grid-cols-2 xl:grid-cols-3 md:gap-4 mb-4 mt-4 lg:w-4/5`}>{getStoryGridList()}</div>
  );
};
