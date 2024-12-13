import React from 'react';
import { Assets } from '../Assets';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import Title from '~/components/title';
import { useMemo, useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import { useCarmelAssets } from '~/sdk/hooks/assets';
import { Tabs } from '~/components/tabs';
import DynamicIcon from '~/components/icons/Dynamic';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

export const StoreScreen = () => {
  const tabs = useMemo(
    () => [
      {
        description: 'Network Assets',
        value: 'network',
      },
      {
        description: 'Community Assets',
        value: 'community',
      },
      {
        description: 'Project Assets',
        value: 'project',
      }
    ],
    [],
  );

  const [selectedTab, setSelectedTab] = useState('network');

  const { data: stories = [], isLoading: isLoadingStories }: any = useCarmelAssets()
  
  return (
    <div>
      <div className="bg-dark-indigo w-full flex justify-center m-auto -mt-24 lg:mt-4">
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />
        <div className="w-full mb-10 flex justify-center min-h-screen max-w-[1920px] relative z-30">
          <div className="flex flex-col justify-start items-center w-11/12 pb-32 pt-32 lg:pt-4 min-h-full">

          <DynamicIcon name={'CurrencyDollarIcon'} width={64} height={64} className="text-primary mt-20 lg:mt-0 -ml-4" />
            <Title
              decription="Carmel"
              moreClasses={`text-center text-xl uppercase mb-0`}
              isLoading={isLoadingStories}
            />
            <Title
              decription="Store"
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
              <Assets data={stories} filter={selectedTab} isLoading={isLoadingStories} />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}