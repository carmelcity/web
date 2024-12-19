import React from 'react';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import Title from '~/components/title';
import { useMemo, useState } from 'react';
import { useIncubator } from '~/sdk/hooks/incubator';
import { Tabs } from '~/components/tabs';
import { Collection } from '../data/Collection'
import DynamicIcon from '~/components/icons/Dynamic';

export const IncubatorScreen = () => {
  const tabs = useMemo(
    () => [
      {
        description: 'Communities',
        value: 'community',
      },
      {
        description: 'Projects',
        value: 'project',
      },
      {
        description: 'Challenges',
        value: 'challenge',
      },
      {
        description: 'Tutorials',
        value: 'tutorial',
      }
    ],
    [],
  );

  const [selectedTab, setSelectedTab] = useState('community');
  const [displayCounter, setDisplayCounter] = useState(0);

  const { data: stories = [], isLoading: isLoadingStories }: any = useIncubator();

  return (
    <div>
      <div className="bg-dark-indigo w-full flex justify-center m-auto -mt-24 lg:mt-4">
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />
        <div className="w-full mb-10 flex justify-center min-h-screen max-w-[1920px] relative z-30">
          <div className="flex flex-col justify-start items-center w-11/12 pb-32 pt-32 lg:pt-4 min-h-full">

          <DynamicIcon name={'BeakerIcon'} width={64} height={64} className="text-primary mt-20 lg:mt-0 -ml-4" />

            <Title
              decription="Carmel"
              moreClasses={`text-center text-xl uppercase mb-0`}
              isLoading={isLoadingStories}
            />
            <Title
              decription="Incubator"
              moreClasses={`text-center lg:text-lg text-sm text-white uppercase mb-10`}
              isLoading={isLoadingStories}
            />
            <div className='w-full'>
            <Tabs
              isLoading={isLoadingStories}
              tabs={tabs}
              selectedTab={selectedTab}
              onClickTab={(value: string) => {
                setSelectedTab(value);
              }}
            />
            </div>
            <Collection data={stories} filter={selectedTab} isLoading={isLoadingStories} />
          </div>
        </div>
      </div>
    </div>
  );
};
