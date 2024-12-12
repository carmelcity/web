import React from 'react';
import Banner from '../banner';
import { apps1, assets1, assets2, stories } from '../mockData';
import Story from '../story';
import Points from '../points';
import Stories from '../featured/stories';
import Challenges from '../featured/challenges';
import Quests from '../featured/quests';
import Creators from '../featured/creators';
import Title from '~/components/title';
import DynamicIcon from '~/components/icons/Dynamic';

export const IncubatorScreen = () => {
  return (
    <div className='flex w-full flex-col justify-start items-center text-center '>
      <div className="w-full mx-auto items-center flex justify-center bg-black">
        <div
          className="flex flex-col items-center 3xl:max-w-1/3 gap-4 mb-32 pt-20 5xl:w-1/2 bg-black w-full"
          style={{
            backgroundImage: "url('/images/background-carmel-universe.webp')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
            <DynamicIcon name={'FlagIcon'} width={64} height={64} className="text-primary mt-20 lg:mt-0" />
            <Banner img={`/images/TradingCards_XS.png`}/>

            <Title
              decription="CARMEL"
              moreClasses={`text-center text-xl uppercase`}
              isLoading={false}
            />
            <Title
              decription="CHALLENGES"
              moreClasses={`text-center lg:text-3xl text-xl text-white uppercase mb-10`}
              isLoading={false}
            />
           {/* <Points /> */}
           <Banner img={`/images/banner-carmel-universe.webp`}/>
           <Story
            reverse
            story={stories[0]}
            assets={assets1}
            upperTitle="FEATURED COMMUNITY"
            appsTitle="TOP COMMUNITIES"
            apps={apps1}
            hideTags
            hideHeader
          />
      
          <Banner img={`/images/CustomerPortal.webp`}/>

          <Story
            story={stories[1]}
            assets={assets2}
            upperTitle="FEATURED INITIATIVE"
            appsTitle="TOP INITIATIVES"
            apps={apps1}
            hideTags
          />
          
          <Banner img={`/images/Hero_XXS.webp`}/>
          {/* <Quests /> */}
          <Challenges />
          {/* <Stories /> */}
          {/* <Creators /> */}
        </div>
      </div>
      </div>
  );
};