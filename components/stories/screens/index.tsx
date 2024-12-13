import React from 'react';
import Image from 'next/image';
import { StoriesHero } from '~/components/stories/StoriesHero';
import { StoriesGrid } from '~/components/stories/story-grid';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import Title from '~/components/title';
import { useMemo, useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import { useCarmelStories } from '~/sdk/hooks/stories';
import { Tabs } from '~/components/tabs';
// import Container from '~/containers/main';
// import { useCarmelPosts } from '~/sdk'

const readex_pro = Readex_Pro({ subsets: ['latin'] });

export const StoriesScreen = () => {
  // const router = useRouter()
  // const username: any = router.query.id

  // const slug: any = router.query.slug
  const tabs = useMemo(
    () => [
      {
        description: 'All Articles',
        value: 'all',
      },
      {
        description: 'NFT Update',
        value: 'NFT Update',
      },
      {
        description: 'Crypto World',
        value: 'Crypto World',
      },
      {
        description: 'Collector Stories',
        value: 'Collector Stories',
      },
      {
        description: 'Tips & Tricks',
        value: 'Tips & Tricks',
      },
      {
        description: 'Community',
        value: 'Community',
      },
      {
        description: 'Community2',
        value: 'Community',
      },
      {
        description: 'Community3',
        value: 'Community',
      },
      {
        description: 'Community4',
        value: 'Community',
      },
      {
        description: 'Community5',
        value: 'Community',
      },
      {
        description: 'Community6',
        value: 'Community',
      },
    ],
    [],
  );

  const [selectedTab, setSelectedTab] = useState('all');
  const [displayCounter, setDisplayCounter] = useState(0);

  const { data: storiesData = [], isLoading: isLoadingStories }: any = useCarmelStories();

  const getHighlightedStory = (storiesData: any) => {
    return storiesData.find((story: any) => story.highlight);
  };

  const highlightedStory = getHighlightedStory(storiesData);

  const stories = useMemo(() => {
    return selectedTab !== 'all'
      ? storiesData.filter((post: any) => post.data.tags.includes(selectedTab))
      : storiesData;
  }, [selectedTab, storiesData]);

  return (
    <div>
      <div className="bg-dark-indigo w-full flex justify-center m-auto">
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />
        <div className="w-full mb-10 flex justify-center min-h-screen max-w-[1920px] relative z-30">
          <div className="flex flex-col justify-center items-center w-11/12 pb-32 pt-40 min-h-full">
            <Title
              decription="Carmel"
              moreClasses={`text-center text-[1.5rem] uppercase mb-0`}
              isLoading={isLoadingStories}
            />
            <Title
              decription="Stories"
              moreClasses={`text-center text-2xl text-white uppercase mb-20`}
              isLoading={isLoadingStories}
            />
            <StoriesHero data={highlightedStory || storiesData[0]} isLoading={isLoadingStories} />
            {/* <Tabs
              isLoading={isLoadingStories}
              tabs={tabs}
              selectedTab={selectedTab}
              onClickTab={(value: string) => {
                setSelectedTab(value);
              }}
            /> */}
            <StoriesGrid data={stories || []} isLoading={isLoadingStories} />
            {/* {stories.length > 9 && stories.length > displayCounter + 9 && (
              <button
                className={`bg-[#00FFFF] text-black p-4 ${readex_pro.className}`}
                onClick={() => setDisplayCounter(prev => prev + 6)}>
                More Articles
              </button>
            )}
            {stories.length < displayCounter + 9 && (
              <button
                className={`bg-[#00FFFF] text-black p-4 ${readex_pro.className}`}
                onClick={() => setDisplayCounter(0)}>
                Collapse
              </button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};
