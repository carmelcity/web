import React from 'react';
import Image from 'next/image';
import { Readex_Pro } from 'next/font/google';
import { motion } from 'framer-motion';
import { bottomUpVariants, imageFadeInVariants } from '~/utils/animations';
import Check from '~/components/landing/explore/check';
import colorSpot from '~/images/early-access/colorSpot3.webp';
import tile1 from '~/images/early-access/tile1.webp';
import tile2 from '~/images/early-access/tile2.webp';
import tile3 from '~/images/early-access/tile3.webp';
import tile4 from '~/images/early-access/tile4.webp';

const readexPro = Readex_Pro({ subsets: ['latin'] });

export const Plans = () => {
  return (
    <div className="relative xl:flex h-auto max-w-[1920px] lg:h-[1000px] w-full">
      <motion.div
        variants={bottomUpVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        className={`mx-auto w-full lg:px-14 z-20 relative`}>
        <div className="relative z-20 flex flex-col items-start gap-4 px-5 lg:px-20 ">
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-col md:flex-row mt-2 lg:gap-12">
              <Check
                text="Unlimited Design"
                moreClasses={`${readexPro.className} text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green font-normal`}
              />
              <Check
                text="Unlimited Development"
                moreClasses={`${readexPro.className} text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green font-normal`}
              />
              <Check
                text="Unlimited Audience Building"
                moreClasses={`${readexPro.className} text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green font-normal`}
              />
            </div>
            <div className={`${readexPro.className} text-left text-2xl xxs:text-4xl font-bold w-full`}>
              Why Pre-Register?
            </div>
            <div
              className={`${readexPro.className} text-left text-white text-xs xxs:text-xl font-light font-thin xl:w-[55%] leading-8`}>
              Get early access to The Carmel Micro-Startup Launchpad. Craft meaningful experiences by publishing apps,
              telling stories and developing customers.
            </div>
            <div className={`${readexPro.className} mb-40 md:mb-0 text-left text-2xl xxs:text-4xl font-bold w-full`}>
              Plans starting at $2k for the Carmel Beta
            </div>
          </div>
        </div>
      </motion.div>
      <motion.img
        variants={imageFadeInVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        src={tile1.src}
        className="hidden lg:block absolute object-contain top-[35%] left-[25%] z-10"
      />
      <motion.img
        variants={imageFadeInVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        src={tile2.src}
        className="hidden lg:block absolute object-contain z-10 top-[20%] right-0"
      />
      <motion.img
        variants={imageFadeInVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        src={tile3.src}
        className="hidden lg:block absolute object-contain z-10 top-[30%]"
      />
      <motion.img
        variants={imageFadeInVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        src={tile4.src}
        className="hidden lg:block absolute object-contain top-[50%] right-[5%]"
      />
      <motion.img
        variants={imageFadeInVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        src={tile4.src}
        className="lg:hidden absolute object-contain top-[72%] right-[5%] z-10"
      />
      <Image src={colorSpot} alt="spot" className="absolute bottom-[0%] z-0 w-screen max-w-[1920px]" />
    </div>
  );
};
