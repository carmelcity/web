import { ReactElement } from 'react';
import { StoriesHeroProps } from './props';
import Link from 'next/link';
import { Tags } from '~/components/tags';
import moment from 'moment';
import { HexagonalAvatarWithProperty } from '~/components/quests/HexagonalAvatarWithProperty';
import Image from 'next/image';
import { StoriesHeroPlaceholder } from '~/components/placeholders/StoriesHero';
import { readex_pro } from '~/components/fonts';

export const StoriesHero = ({ data, isLoading }: StoriesHeroProps): ReactElement => {
  if (isLoading) {
    return <StoriesHeroPlaceholder />;
  }

  return (
    <div className="lg:w-4/5 mb-20 group hover:brightness-100">
      <div className="flex flex-col justify-end relative">
        <Image
          className="w-full h-[600px] block brightness-75 group-hover:brightness-100 object-fit"
          src={data.imageLink}
          alt="heroImage"
        />
        <div
          className={`h-auto justify-between p-2 sm:p-5 lg:p-10 flex w-full flex-col absolute bg-gradient-to-t from-[#052F35] to-[#052F3500]`}>
          <Tags tags={data.data.tags || []} />
          <Link href={`/stories/${data.slug}`}>
            <h2
              className={`line-clamp-3 sm:line-clamp-2 text-3xl sm:text-4xl tracking-wide text-left m-0 md:w-3/5 font-bold mb-2 ${readex_pro.className}`}>
              {data.data.title}
            </h2>{' '}
          </Link>
          <div className="flex flex-row gap-2 items-center justify-between">
            <p className={`m-0 font-thin ${readex_pro.className}`}>{moment(data.date).format('MMMM D, YYYY')}</p>
            <HexagonalAvatarWithProperty
              appLogo={data.appLogo}
              alt="hero"
              profileImage={data.userPhoto}
              username={data.username}
              appName={data.appName}
              communityName={data.communityName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
