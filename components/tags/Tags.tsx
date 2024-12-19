import React, { useState } from 'react';
import { TagsProps } from './props';
import { readex_pro } from '~/components/fonts'

export const Tags = ({ tags, tagClass, containerClass, toggleEnabled = false }: TagsProps) => {
  const [showAllTags, setShowAllTags] = useState(false);

  const toggleTags = () => {
    setShowAllTags(prev => !prev);
  };

  let displayedTags = tags;

  if (toggleEnabled && !showAllTags && tags.length > 2) {
    displayedTags = tags.slice(0, 2);
  }

  return (
    <div className={`${containerClass ?? ''} flex flex-wrap items-center gap-3 mb-2`}>
      {displayedTags.map((tag: string, index: number) => (
        <span
          key={tag}
          className={`${tagClass ?? ''} flex justify-center items-center font-thin cursor-pointer hover:bg-dark-green-secondary  ${
            readex_pro.className
          } px-3 py-1 bg-[#0B6F6F] bg-opacity-25 text-white border border-light-primary border-[0.5px] border-opacity-50 backdrop-blur-sm`}>
          {tag}
        </span>
      ))}
      {/* {toggleEnabled && tags.length > 2 && (
        <span
          onClick={toggleTags}
          className={`${tagClass ?? ''} flex justify-center items-center font-thin ${
            readex_pro.className
          } px-3 py-1 bg-[#0B6F6F] bg-opacity-25 text-white border border-light-primary border-[0.5px] cursor-pointer backdrop-blur-sm`}>
          {showAllTags ? '- Show Less' : `+${tags.length - 2} more tags`}
        </span>
      )} */}
    </div>
  );
};
