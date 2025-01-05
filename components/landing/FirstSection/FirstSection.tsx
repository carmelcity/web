import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import hero from '~/images/landing/Hero.webp';
import heroXXS from '~/images/landing/Hero_XXS.webp';
import heroSpot from '~/images/landing/HeroSpot.webp';
import heroSpotXS from '~/images/landing/HeroSpot_XS.webp';
import { motion } from 'framer-motion';
import { rightBottomCorner_SLOW_Variants, imageFadeInVariants } from '~/utils/animations';
import { readexPro } from '~/elements/fonts';

export const FirstSection = ({ text }: any) => {
  const router = useRouter();

  const handleEarlyAccessClick = () => {
    router.push('/access/reserve');
  };

  return (
    <div className="lg:w-screen max-w-[1920px] -mt-20 mb-40">
      <div className="flex flex-col relative pt-16">
        <div className="z-30 md:max-w-[1580px] w-full sm:px-6 lg:px-14 xl:px-20 lg:pt-32">
          <div className="flex flex-col lg:items-start items-center gap-3 m-5 lg:w-3/5 mt-48 lg:m-0 z-30 mr-auto">
            <span
              className={`${readexPro.className} text-start text-sm xxs:text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green uppercase w-full`}>
              { text.INTRO_TOP }
            </span>
            <div className={`${readexPro.className} text-xl xxs:text-4xl md:text-5xl text-left font-bold`}>
              { text.INTRO_HEADER }
            </div>
            <div
              className={`${readexPro.className} text-left text-xs xxs:text-2xl font-light text-cyan md:w-4/5 leading-7 xxs:leading-10 5xl:leading-[80px] mt-2 pr-4`}>
              { text.INTRO_SUBHEADER }
            </div>
            <div className="flex flex-col items-center mt-6">
              <button
                className={`${readexPro.className} text-xs xxs:text-lg py-3 px-20 bg-cyan  text-black font-normal`}
                onClick={handleEarlyAccessClick}>
                { text.INTRO_ACTION }
              </button>
              <div className={`${readexPro.className} text-xs xxs:text-lg font-thin md:font-light text-cyan sm:mt-2`}>
                { text.INTRO_SUBACTION }
              </div>
            </div>
          </div>
        </div>
        {/* --- XL SCREEN --- */}
        <motion.div
          variants={rightBottomCorner_SLOW_Variants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="hidden xl:block top-0 ml-auto z-20 absolute h-full ">
          <Image src={hero} alt="familyXL" />
        </motion.div>
        <motion.div
          variants={rightBottomCorner_SLOW_Variants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="hidden xl:block top-0 right-0 ml-auto z-10 absolute w-screen">
          <Image src={heroSpot} alt="spotXL" className="ml-auto filter brightness-75" />
        </motion.div>
        {/* --- LG SCREEN --- */}
        <motion.div
          variants={rightBottomCorner_SLOW_Variants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="hidden lg:block xl:hidden top-72 ml-auto z-20 absolute">
          <Image src={hero} alt="familyLG" />
        </motion.div>
        <motion.div
          variants={rightBottomCorner_SLOW_Variants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="hidden lg:block xl:hidden top-0 right-0 ml-auto z-10 absolute w-screen ">
          <Image src={heroSpot} alt="spotLG" className="ml-auto brightness-50" />
        </motion.div>
        {/* --- MD SCREEN --- */}
        <motion.div
          variants={rightBottomCorner_SLOW_Variants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="hidden md:block lg:hidden top-96 ml-auto z-20 absolute">
          <Image src={hero} alt="familyMD" />
        </motion.div>
        <motion.div
          variants={rightBottomCorner_SLOW_Variants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="hidden md:block lg:hidden top-0 right-0 ml-auto z-10 absolute">
          <Image src={heroSpot} alt="spotMD" className="ml-auto brightness-50" />
        </motion.div>
        {/* --- SM SCREEN --- */}
        <motion.div
          variants={rightBottomCorner_SLOW_Variants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="hidden sm:block md:hidden top-[75%] ml-auto z-20 absolute">
          <Image src={hero} alt="familySM" />
        </motion.div>
        <motion.div
          variants={rightBottomCorner_SLOW_Variants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="hidden sm:block md:hidden top-0 right-0 ml-auto z-10 absolute">
          <Image src={heroSpot} alt="spotSM" className="ml-auto brightness-50" />
        </motion.div>
        {/* --- XS SCREEN --- */}
        <motion.div
          variants={rightBottomCorner_SLOW_Variants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="hidden xs:block sm:hidden top-[90%] ml-auto z-20 absolute">
          <Image src={heroXXS} alt="familyXS" />
        </motion.div>
        <motion.div
          variants={imageFadeInVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="hidden xs:block sm:hidden top-40 right-0 z-10 absolute w-screen">
          <Image src={heroSpotXS} alt="spotXS" className="w-full h-[1000px] brightness-50" />
        </motion.div>
        {/* --- XXS SCREEN --- */}
        <motion.div
          variants={imageFadeInVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="hidden xxs:block xs:hidden top-[100%] w-screen ml-auto z-20 absolute">
          <Image src={heroXXS} alt="familyXXS" />
        </motion.div>
        <motion.div
          variants={imageFadeInVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="hidden xxs:block xs:hidden top-40 right-0 z-10 absolute w-screen">
          <Image src={heroSpotXS} alt="spotXXS" className="w-full h-[1000px] brightness-50" />
        </motion.div>
        {/* --- ULTRA SMALL SCREEN --- */}
        <motion.div
          variants={imageFadeInVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="xxs:hidden top-[95%] ml-auto z-20 absolute">
          <Image src={heroXXS} alt="familySmall" />
        </motion.div>
        <motion.div
          variants={imageFadeInVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="xxs:hidden top-0 right-0 z-10 absolute w-screen">
          <Image src={heroSpotXS} alt="spotSmall" className="w-full h-[1000px] brightness-50" />
        </motion.div>
      </div>
    </div>
  );
};
