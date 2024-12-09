import React from 'react';
import Icon from './icon';
import font from './font';
import Link from 'next/link';
import { DataItem } from '../types/data';

/**
 *
 * @param data
 * @returns
 */
export const Actions = ({ data }: { data: DataItem }) => {
  return (
    <div className="flex flex-row items-center w-full px-4 py-3 border-b border-cyan/10 align-center bg-black/50">
      {data.downvotes && data.upvotes ? (
        [
          <Link
            href={data.simple ? '#' : `/${data.id}`}
            key={'x1'}
            className={`flex justify-center items-center font-thin ${font} px-2 py-1 text-cyan btn btn-sm bg-primary/10`}>
            <Icon name="HandThumbUpIcon" width={16} height={16} className="text-cyan" /> {data.upvotes}
          </Link>,
          <Link
            href={data.simple ? '#' : `/${data.id}`}
            key={'x2'}
            className={`flex justify-center items-center font-thin ${font} px-2 py-1 text-cyan btn btn-sm bg-primary/10`}>
            <Icon name="HandThumbDownIcon" width={16} height={16} className="text-cyan" /> {data.downvotes}
          </Link>,
        ]
      ) : (
        <Link
          href={data.simple ? '#' : `/${data.id}`}
          key={'x1'}
          className={`flex justify-center items-center font-thin ${font} px-2 py-1 text-cyan btn btn-sm bg-primary/10`}>
          <Icon name="UserGroupIcon" width={16} height={16} className="text-cyan" /> {data.people}{' '}
          {`${data.who}${data.people > 1 ? 's' : ''}`}
        </Link>
      )}

      <div className="w-full" />
      <Link
        href={data.simple ? '#' : `/${data.id}`}
        key={'x3'}
        className={`flex justify-center items-center font-thin ${font} px-2 py-1 text-cyan btn btn-sm bg-primary/10`}>
        <Icon name="HeartIcon" width={16} height={16} className="text-[#F44336]" /> {data.likes}
      </Link>
      <Link
        href={data.simple ? '#' : `/${data.id}`}
        key={'x4'}
        className={`flex justify-center items-center font-thin ${font} px-2 py-1 text-cyan btn btn-sm bg-primary/10`}>
        <Icon name="FireIcon" width={16} height={16} className="text-[#FDD835]" /> {data.boosts}
      </Link>
    </div>
  );
};

export default Actions;
