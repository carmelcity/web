import React from 'react';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import Title from '~/components/title';
import { useMemo, useState } from 'react';
import { useCarmels } from '~/sdk/hooks/carmels';
import logo from '~/public/images/logo/logo-white.svg';
import { Collection } from '../data/Collection'

export const CarmelsScreen = () => {
  const tabs = useMemo(
    () => [
      {
        description: 'All Carmels',
        value: '*',
      },
      {
        description: 'Philosophy',
        value: 'philosophy',
      },
      {
        description: 'Education',
        value: 'education',
      },
      {
        description: 'Technology',
        value: 'technology',
      },
      {
        description: 'Politics',
        value: 'politics',
      },
      {
        description: 'Economics',
        value: 'economics',
      },
      {
        description: 'Culture',
        value: 'culture',
      },
    ],
    [],
  );

  const [selectedTab, setSelectedTab] = useState('*');
  const [displayCounter, setDisplayCounter] = useState(0);

  const { data: storiesData = [], isLoading: isLoadingStories }: any = useCarmels();

  const getHighlightedStory = (storiesData: any) => {
    return storiesData.find((story: any) => story.highlight);
  };

  const highlightedStory = getHighlightedStory(storiesData);
  const stories = useMemo(() => {
    return (selectedTab !== '*'
      ? storiesData.filter((post: any) => post.tags.includes(selectedTab))
      : storiesData).filter((post: any) => {
        return post.id !== highlightedStory.id
      })
  }, [selectedTab, storiesData]);

  return (
    <div>
      <div className="bg-dark-indigo w-full flex justify-center m-auto">
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />
        <div className="w-full mb-10 flex justify-center min-h-screen max-w-[1920px] relative z-30">
          <div className="flex flex-col justify-center items-center w-11/12 pb-32 pt-32 lg:pt-4 min-h-full">
              <Image
                    src={logo}
                    alt="card"
                    className={`object-fit w-24 h-24`}
                />
            <Title
              decription="Carmels"
              moreClasses={`text-center text-xl uppercase mb-0`}
              isLoading={isLoadingStories}
            />
            <Title
              decription="Forever Conversations"
              moreClasses={`text-center lg:text-lg text-sm text-white uppercase mb-10`}
              isLoading={isLoadingStories}
            />
          <Collection data={storiesData} isLoading={isLoadingStories} />
          </div>
        </div>
      </div>
    </div>
  );
};
