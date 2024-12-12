import React from 'react';
import Image from 'next/image';
import { Readex_Pro } from 'next/font/google';
import { motion } from 'framer-motion';
import { bottomUpVariants, imageFadeInVariants } from '~/utils/animations';
import colorSpot from '~/images/early-access/colorSpot2.webp';
import wire1 from '~/images/early-access/wire3.webp';
import wire2 from '~/images/early-access/wire4.webp';
import { FeaturesCards } from './FeaturesCards';

const readexPro = Readex_Pro({ subsets: ['latin'] });

export const FreeFeatures = () => {
  return (
    <div className="relative xl:flex flex-col h-auto max-w-[1920px] lg:h-[1600px] xl:h-[1300px] py-[5%] w-full">
      <div className="relative flex flex-col z-20 items-center">
        <div
          className={`${readexPro.className} xxs:text-xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green uppercase`}>
          Welcome to the future of social entrepreneurship
        </div>
        <div className={`${readexPro.className} text-xl xxs:text-4xl md:text-5xl font-bold sm:mt-2 px-2`}>
          The foundational 3 pillars that will help you build the ecosystem you’ve always dreamed of.
        </div>
        <motion.div
          variants={imageFadeInVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false }}>
          <div
            className={`${readexPro.className} xxs:text-xl font-normal text-black bg-gradient-to-r from-cyan to-light-green uppercase mt-5 py-2 px-3`}>
            Value $50,259. You get it for free.
          </div>
        </motion.div>
      </div>
      <div className="mx-auto max-w-[1580px] w-screen px-1 z-30 relative top-8">
        <FeaturesCards />
      </div>
      <Image src={colorSpot} alt="spot" className="absolute top-0 z-0" />
      <motion.div
        variants={bottomUpVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        className="absolute z-10 bottom-[10%] w-screen">
        <Image src={wire1} alt="wire" className="w-screen max-w-[1920px] filter brightness-75" />
      </motion.div>
      <motion.div
        variants={bottomUpVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        className="absolute z-10 bottom-0 w-screen">
        <Image src={wire2} alt="wire" className="w-screen max-w-[1920px] filter brightness-75" />
      </motion.div>
    </div>
  );
};
