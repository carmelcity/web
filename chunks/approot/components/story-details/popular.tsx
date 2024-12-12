import React from 'react';
import { ShareIcon, HeartIcon } from '@heroicons/react/24/outline';
import { Action } from './details';
import { Readex_Pro } from 'next/font/google';
import { Tags } from '../tags';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

const Popular = ({ tags, likesCount, onClickLike, onClickShare }: any) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className={`m-0 ${readex_pro.className}`}>Popular Tags</h2>
        <div className="flex items-center gap-2">
          <Action description={likesCount} icon={HeartIcon} onClick={onClickLike} />
          <Action icon={ShareIcon} onClick={onClickShare} />
        </div>
      </div>
      <div className="flex justify-between items-center py-5 border-y border-[#00FFFF66]">
        <Tags tags={tags} tagClass="!text-primary bg-secondary border-[#00FFFF3D] border-[1px]" />
      </div>
    </div>
  );
};

export default Popular;
