import React from 'react';
import Image from 'next/image';
import Title from '~/components/landing/title';
import { HexagonalCards } from '~/components/landing/HexagonalCards';
import spot from '~/images/spot3.png';
import wire from '~/images/Wire3.png';
import secondWire from '~/images/Wire4.png';
import wireXXS from '~/images/landing/Wire3_XXS.png';
import secondWireXXS from '~/images/landing/Wire4_XXS.png';
import wireXS from '~/images/landing/Wire3_XS.png';
import secondWireXS from '~/images/landing/Wire4_XS.png';
import wireLG from '~/images/landing/Wire4_LG.png';
import secondWireLG from '~/images/landing/Wire3_LG.png';
import { Readex_Pro } from 'next/font/google';
import Animation from '~/components/anim';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

const cards = [
  {
    id: 'educate',
    icon: '/images/GrowIcon.png',
    title: 'Connect in communities',
    tag: '',
    description: 'Connect with people who share your values and interests and advance a mission together',
  },
  {
    id: 'development',
    icon: '/images/EngageIcon.png',
    title: 'Create content you own',
    tag: '',
    description: 'Start your blog and publish posts that are always online with Carmel Forever™ permanent storage',
  },
  {
    id: 'sales',
    icon: '/images/MonetizeIcon.png',
    tag: '',
    title: 'Unlock access to products',
    description: 'Collect NFTs and use them to gain access to products and exclusive community experiences',
  },
];

export const SocialImpact = ({ text }: any) => {
  return (
    <div className="h-[1550px] xxs:h-[2000px] xs:h-[1900px] sm:h-[2050px] md:h-[1350px] lg:h-[1400px] xl:h-[1150px] max-w-[1920px] mt-20 xl:mt-0 overflow-x-hidden overflow-y-clip">
      <div className="mb- relative lg:mt-20">
        <Title text={text} />

        <div
          className={`${readexPro.className} text-white xxs:text-2xl font-normal mb-5 z-30 relative w-3/5 lg:w-3/5 mx-auto`}>
          {text.OVERVIEW_DESCRIPTION}
        </div>
        <div className="mx-auto max-w-[1580px] w-screen px-1 z-30 relative top-8 mb-0">
          <HexagonalCards data={cards} />
        </div>
        <div className="mx-auto max-w-[1580px] w-screen px-1 z-30 relative top-8 mb-0"></div>
        <Image src={wireXXS} alt="wire1" className="absolute xs:hidden top-[74%] z-20 w-screen animate-pulse" />
        <Image src={secondWireXXS} alt="wire2" className="absolute xs:hidden top-[70%] z-20 w-screen animate-pulse" />
        <Image
          src={wireXS}
          alt="wire3"
          className="absolute hidden xs:block sm:hidden top-[60%] z-20 w-screen animate-pulse"
        />
        <Image
          src={secondWireXS}
          alt="wire4"
          className="absolute hidden xs:block sm:hidden top-[66%] z-20 w-screen animate-pulse"
        />
        <Image
          src={wireXS}
          alt="wire3_SM"
          className="absolute hidden sm:block md:hidden top-[64%] z-20 w-screen animate-pulse"
        />
        <Image
          src={secondWireXS}
          alt="wire4_SM"
          className="absolute hidden sm:block md:hidden top-[66%] z-20 w-screen animate-pulse"
        />
        <Image
          src={wireXS}
          alt="wire3"
          className="absolute hidden md:block lg:hidden top-[56%] z-20 w-screen animate-pulse"
        />
        <Image
          src={secondWireXS}
          alt="wire4"
          className="absolute hidden md:block lg:hidden top-[62%] z-20 w-screen animate-pulse"
        />
        <Image
          src={wireLG}
          alt="wire3"
          className="absolute hidden lg:block xl:hidden top-[75%] z-20 w-screen animate-pulse"
        />
        <Image
          src={secondWireLG}
          alt="wire4"
          className="absolute hidden lg:block xl:hidden top-[70%] z-20 w-screen animate-pulse"
        />
        <Image src={wire} alt="wire" className="absolute hidden xl:block z-20 top-[70%] w-screen animate-pulse" />
        <Image
          src={secondWire}
          alt="wire2"
          className="absolute hidden xl:block z-20 top-[60%] w-screen animate-pulse"
        />

        <Image src={spot} alt="spot" className="hidden xl:block absolute top-[-15%]" />
        <Image src={spot} alt="spot" className="hidden md:block lg:hidden absolute top-[-10%]" />
        <Image src={spot} alt="spot" className="hidden sm:block md:hidden absolute top-[20%]" />
        <Image src={spot} alt="spot" className="xs:hidden absolute top-[20%]" />
        <Image src={spot} alt="spot" className="hidden xs:block sm:hidden absolute top-[25%]" />
      </div>
    </div>
  );
};
