import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { Tags, ComplexAvatar } from '~/elements';
import { StoriesGridItemProps } from './props';
import { StoryItemPlaceholder } from '~/components/placeholders/StoryItem';
import { readex_pro } from '~/elements/fonts';

export const StoryGridItem = ({
  date,
  isLoading,
  title,
  slug,
  appName,
  appLogo,
  tags,
  imageLink,
  userPhoto,
  username,
  description,
  communityName,
}: StoriesGridItemProps) => {
  if (isLoading) {
    return <StoryItemPlaceholder />;
  }

  return (
    <div className="flex flex-col justify-end relative group hover:brightness-100">
      <div className="border border-primary-background-blend border-2">
        <Image
          className="w-full h-[300px] block brightness-75 object-fit group-hover:brightness-100"
          src={imageLink}
          alt="articleImage"
        />
      </div>
      <Tags tags={tags || []} containerClass="absolute ml-2 mb-2 z-30 bottom-[48%]" toggleEnabled />
      <span
        className={`${readex_pro.className} font-normal text-cyan py-2 px-4 absolute bg-[#091D22] opacity-80 top-0 right-0`}>
        {<p className={`m-0 font-thin ${readex_pro.className}`}>{moment(date).format('MMMM D, YYYY')}</p>}
      </span>
      <div className="flex flex-col justify-end relative">
        <div className="block h-56 mx-auto bg-primary-background-blend mb-5 flex flex-col">
          <Link href={`/stories/${slug}`}>
            <div className="flex flex-col p-4 leading-normal text-left flex-grow">
              <h4 className={`${readex_pro.className} line-clamp-2 md:text-xl tracking-tight dark:text-white`}>
                {title}
              </h4>
              <p className={`${readex_pro.className} line-clamp-2 mb-3 text-sm font-thin text-gray-400`}>
                {description}
              </p>
            </div>
          </Link>
          <div className="flex mx-5 mb-5">
            <ComplexAvatar
              username={username}
              appLogo={appLogo}
              appName={appName}
              alt="img"
              profileImage={userPhoto}
              communityName={communityName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
