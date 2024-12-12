import React from 'react';
import Banner from '../banner';
import Title from '~/components/title';
import DynamicIcon from '~/components/icons/Dynamic';

export const CommunitiesScreen = () => {
  return (
    <div className='flex w-full flex-col justify-start items-center text-center '>
      <div className="w-full mx-auto items-center flex justify-center bg-black ">
        <div
          className="flex flex-col items-center 3xl:max-w-1/3 gap-4 mb-32 pt-20 5xl:w-1/2 bg-black w-full"
          style={{
            backgroundImage: "url('/images/background-carmel-universe.webp')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
            <DynamicIcon name={'UserGroupIcon'} width={64} height={64} className="text-primary mt-20 lg:mt-0" />
            <Title
              decription="CARMEL"
              moreClasses={`text-center text-xl uppercase`}
              isLoading={false}
            />
            <Title
              decription="Communities"
              moreClasses={`text-center lg:text-3xl text-xl text-white uppercase mb-10`}
              isLoading={false}
            />
           <Banner img={`/images/banner-carmel-universe.webp`}/>
        </div>
      </div>
      </div>
  );
};

export const ProjectsScreen = () => {
  return (
    <div className='flex w-full flex-col justify-start items-center text-center '>
      <div className="w-full mx-auto items-center flex justify-center bg-black ">
        <div
          className="flex flex-col items-center 3xl:max-w-1/3 gap-4 mb-32 pt-20 5xl:w-1/2 bg-black w-full"
          style={{
            backgroundImage: "url('/images/background-carmel-universe.webp')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
            <DynamicIcon name={'FireIcon'} width={64} height={64} className="text-primary mt-20 lg:mt-0" />
            <Title
              decription="CARMEL"
              moreClasses={`text-center text-xl uppercase`}
              isLoading={false}
            />
            <Title
              decription="Projects"
              moreClasses={`text-center lg:text-3xl text-xl text-white uppercase mb-10`}
              isLoading={false}
            />
           <Banner img={`/images/banner-carmel-universe.webp`}/>
        </div>
      </div>
      </div>
  );
};


export const StoreScreen = () => {
  return (
    <div className='flex w-full flex-col justify-start items-center text-center '>
      <div className="w-full mx-auto items-center flex justify-center bg-black ">
        <div
          className="flex flex-col items-center 3xl:max-w-1/3 gap-4 mb-32 pt-20 5xl:w-1/2 bg-black w-full"
          style={{
            backgroundImage: "url('/images/background-carmel-universe.webp')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
            <DynamicIcon name={'CurrencyDollarIcon'} width={64} height={64} className="text-primary mt-20 lg:mt-0" />
            <Title
              decription="CARMEL"
              moreClasses={`text-center text-xl uppercase`}
              isLoading={false}
            />
            <Title
              decription="Store"
              moreClasses={`text-center lg:text-3xl text-xl text-white uppercase mb-10`}
              isLoading={false}
            />
           <Banner img={`/images/banner-carmel-universe.webp`}/>
        </div>
      </div>
      </div>
  );
};