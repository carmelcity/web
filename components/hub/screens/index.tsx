import React from 'react';
import Image from 'next/image';
import { StoriesHero } from '~/components/stories/StoriesHero';
import { StoriesGrid } from '~/components/stories/story-grid';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import Title from '~/components/title';
import { useMemo, useState } from 'react';
import { useCarmelStories, useCarmelChallenges } from '~/sdk/hooks';
import DynamicIcon from '~/components/icons/Dynamic';
import { Tabs } from '~/components/tabs';

export * from './ChallengeScreen'

export const HubScreen = (props: any) => {
  const tabs = useMemo(
    () => [
      {
        description: 'Challenges',
        value: 'challenges',
      },
      {
        description: 'Tutorials',
        value: 'tutorials',
      },
      {
        description: 'Stories',
        value: 'stories',
      }
    ],
    [],
  );

  const [selectedTab, setSelectedTab] = useState(props.tab || 'challenges')

  const { data: stories = [], isLoading: isLoadingStories }: any = useCarmelStories();
  const challenges = useCarmelChallenges()

  const getHighlightedStory = (storiesData: any) => {
    return storiesData.find((story: any) => story.highlight);
  };

  const highlightedStory = getHighlightedStory(stories)
  
  const isLoading = () => {
    return false
  }

  const Content = () => {
    if (selectedTab === "stories") {
        return <div className='w-full flex flex-col items-center'>
            <StoriesHero data={highlightedStory || stories[0]} isLoading={isLoadingStories} />
            <StoriesGrid data={stories || []} isLoading={isLoadingStories} />
        </div>
    }

    if (selectedTab === "challenges") {
      return <ChallengesCollection data={challenges.all()} isLoading={challenges.isLoading} />
    }

    return <div/>
  }

  return (
    <div>
      <div className="bg-dark-indigo w-full flex justify-center m-auto -mt-24 lg:mt-4">
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />
        <div className="w-full mb-10 flex justify-center min-h-screen max-w-[1920px] relative z-30">
          <div className="flex flex-col justify-start items-center w-11/12 pb-32 pt-32 lg:pt-4 min-h-full">

          <DynamicIcon name={'RectangleGroupIcon'} width={64} height={64} className="text-primary mt-20 lg:mt-0 -ml-4" />
            <Title
              decription="Carmel"
              moreClasses={`text-center text-xl uppercase mb-0`}
              isLoading={isLoading()}
            />
            <Title
              decription="Creative Hub"
              moreClasses={`text-center lg:text-lg text-sm text-white uppercase`}
              isLoading={isLoading()}
            />
             <Tabs
              isLoading={isLoadingStories}
              tabs={tabs}
              selectedTab={selectedTab}
              onClickTab={(value: string) => {
                setSelectedTab(value);
              }}
            />
            <Content/>
          </div>
        </div>
      </div>
    </div>
  );
//   return (
//     <div className=''>
//       <div className="bg-dark-indigo w-full flex justify-center m-auto">
//         <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
//         <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
//         <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />
//         <div className="w-full mb-10 flex justify-center min-h-screen max-w-[1920px] relative z-30">
//           <div className="flex flex-col justify-center items-center w-11/12 pb-32 pt-40 min-h-full">
//             <Title
//               decription="Carmel"
//               moreClasses={`text-center text-[1.5rem] uppercase mb-0`}
//               isLoading={isLoadingStories}
//             />
//             <Title
//               decription="Stories"
//               moreClasses={`text-center text-2xl text-white uppercase mb-20`}
//               isLoading={isLoadingStories}
//             />
//             <StoriesHero data={highlightedStory || storiesData[0]} isLoading={isLoadingStories} />
//             {/* <Tabs
//               isLoading={isLoadingStories}
//               tabs={tabs}
//               selectedTab={selectedTab}
//               onClickTab={(value: string) => {
//                 setSelectedTab(value);
//               }}
//             /> */}
//             <StoriesGrid data={stories || []} isLoading={isLoadingStories} />
//             {/* {stories.length > 9 && stories.length > displayCounter + 9 && (
//               <button
//                 className={`bg-[#00FFFF] text-black p-4 ${readex_pro.className}`}
//                 onClick={() => setDisplayCounter(prev => prev + 6)}>
//                 More Articles
//               </button>
//             )}
//             {stories.length < displayCounter + 9 && (
//               <button
//                 className={`bg-[#00FFFF] text-black p-4 ${readex_pro.className}`}
//                 onClick={() => setDisplayCounter(0)}>
//                 Collapse
//               </button>
//             )} */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
};
