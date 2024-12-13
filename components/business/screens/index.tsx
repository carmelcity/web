import React from 'react';
import { FirstSection } from '~/components/landing/FirstSection';
import { HOME_TEXT, BENEFIT_1_TEXT, BENEFIT_2_TEXT, BENEFIT_3_TEXT, BUSINESS_ACCESS } from '../../../text/home'
import { Section } from '~/components/landing/Section';
import { Hero } from '~/components/access/Hero';
import { Instructions } from '~/components/landing/Instructions';
import { SignUp } from '~/components/landing/Signup';

export const BusinessScreen = () => {
  return (
    <main className={`flex w-full flex-col justify-start items-center text-center`}>
      <div className="w-full mx-auto items-center flex justify-center bg-dark-indigo">
        <div className="flex flex-col gap-64 lg:gap-0">
          <FirstSection text={HOME_TEXT} />
          <Section {...BENEFIT_1_TEXT} />
          <Section {...BENEFIT_2_TEXT} />
          <Section {...BENEFIT_3_TEXT} />
          <Instructions text={HOME_TEXT} />
          <SignUp/>
        </div>
      </div>
    </main>
  );
};


export const BusinessAccessScreen = () => {
  return (
    <main className={`flex w-full flex-col justify-start items-center text-center`}>
      <div className="flex flex-col gap-4 w-full max-w-[1920px]">
        <Hero {...BUSINESS_ACCESS} />
      </div>
    </main>
  );
}