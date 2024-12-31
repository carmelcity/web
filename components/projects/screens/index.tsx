import React from 'react';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import Title from '~/components/title';
import { useCarmelProjects } from '~/sdk/hooks';
import { Collection } from '../Collection'
import DynamicIcon from '~/components/icons/Dynamic';

export const ProjectsScreen = () => {
  const projects = useCarmelProjects()

  const list = () => {
    if (projects.isLoading) {
      return []
    }

    return projects.all()
  }

  const isLoading = () => {
    return projects.isLoading
  }

  return (
    <div>
      <div className="bg-dark-indigo w-full flex justify-center m-auto -mt-24 lg:mt-4">
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />
        <div className="w-full mb-10 flex justify-center min-h-screen max-w-[1920px] relative z-30">
          <div className="flex flex-col justify-start items-center w-11/12 pb-32 pt-32 lg:pt-4 min-h-full">

          <DynamicIcon name={'SparklesIcon'} width={64} height={64} className="text-primary mt-20 lg:mt-0 -ml-4" />
            <Title
              decription="Carmel"
              moreClasses={`text-center text-xl uppercase mb-0`}
              isLoading={isLoading()}
            />
            <Title
              decription="Projects"
              moreClasses={`text-center lg:text-lg text-sm text-white uppercase`}
              isLoading={isLoading()}
            />
            <Collection data={list()} isLoading={isLoading()} />
          </div>
        </div>
      </div>
    </div>
  );
};
