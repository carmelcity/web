import React from 'react';
import { FirstSection } from '~/components/landing/FirstSection';
import { HOME_TEXT, BENEFIT_1_TEXT, BENEFIT_2_TEXT, BENEFIT_3_TEXT, BUSINESS_ACCESS, ACCESS } from '../../../text/home'
import { Section } from '~/components/landing/Section';
import { Hero } from '~/components/access/Hero';
import { Instructions } from '~/components/landing/Instructions';
import { SignUp } from '~/components/landing/Signup';
import * as access from '~/components/access'

export const AccessScreen = () => {
  const Main: any = (access as any)['register'] || (access as any).early
  return (
    <main className={`flex w-full flex-col justify-start items-center text-center`}>
      <div className="flex flex-col gap-4 w-full max-w-[1920px]">
        <Hero {...ACCESS} />
      </div>
    </main>
  );
}