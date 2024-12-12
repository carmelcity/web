import React from 'react';
import { CarmelWayProps } from './props';
import carmelWay from '~/images/CarmelWay.png';
import carmelWayXS from '~/images/landing/CarmelWay_XS.png';
import { Readex_Pro } from 'next/font/google';
import Image from 'next/image';
import colorSpot from '~/images/spot.png';
import colorSpotXS from '~/images/landing/Spot2_XS.png';
import { handleDownloadClick } from '~/utils/helper';
import colorSpotLG from '~/images/landing/Spot_LG.png';
import { motion } from 'framer-motion';
import { rightToLeftVariants, bottomUpVariants } from '~/utils/animations';

const readexPro = Readex_Pro({ subsets: ['latin'] });

export const CarmelWay = ({ header, title, subtitle, description }: CarmelWayProps) => {
  return (
    <div className="xl:flex relative h-auto max-w-[1920px] lg:h-[1200px] xl:h-[900px]">
      <motion.div
        variants={bottomUpVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        className={`max-w-[1580px] mx-auto w-full px-6 lg:px-14 xl:px-20 z-20 relative`}>
        <div className="relative z-20 flex flex-col items-start gap-4 xl:w-3/5 2xl:w-3/5 m-5 lg:m-0">
          <div className="flex flex-col items-start gap-3">
            <span
              className={`${readexPro.className} w-[90%] sm:w-3/5 text-left xxs:text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green uppercase`}>
              {header}
            </span>
            <div className={`${readexPro.className} text-left text-2xl xxs:text-4xl font-bold`}>{title}</div>
            <div className={`${readexPro.className} text-left text-xl xxs:text-2xl font-normal -mt-4 mb-4`}>
              {subtitle}
            </div>
          </div>
          <div
            className={`${readexPro.className} text-left mt-2 text-white xxs:text-xl font-light sm:w-4/5 2xl:w-1/2 xl:w-4/5 leading-9`}>
            {description}
          </div>
          <div className="flex flex-col sm:flex-row w-full items-center xxs:mt-10">
            <button
              className={`${readexPro.className} w-full sm:w-auto py-3 px-10 text-black bg-cyan drop-shadow shadow-md shadow-[#03664E]`}
              onClick={() => handleDownloadClick('/docs/CarmelStory.pdf', 'Carmel-Chapter1')}>
              Download the First Chapter
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={rightToLeftVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        className="hidden xl:block absolute bottom-20 right-16 z-10">
        <Image src={carmelWay} alt="way" />
      </motion.div>
      <motion.div
        variants={rightToLeftVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        className="hidden lg:block xl:hidden absolute top-[30%] right-[25%] z-10">
        <Image src={carmelWay} alt="way" />
      </motion.div>
      <motion.div
        variants={bottomUpVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        className="lg:hidden relative bottom-20 z-10">
        <Image src={carmelWayXS} alt="way" className="m-auto" />
      </motion.div>
      <Image
        src={colorSpotLG}
        alt="spot"
        className="hidden lg:block xl:hidden absolute bottom-[10%] right-0 ml-auto filter brightness-75"
      />
      <Image
        src={colorSpot}
        alt="spotXL"
        className="hidden xl:block absolute bottom-[60%] right-0 ml-auto filter brightness-75"
      />
      <Image
        src={colorSpot}
        alt="spot"
        className="hidden sm:block md:hidden absolute bottom-[0%] right-0 ml-auto filter brightness-75"
      />
      <Image
        src={colorSpot}
        alt="spot"
        className="hidden md:block lg:hidden absolute bottom-[0%] right-0 ml-auto filter brightness-75"
      />
      <Image
        src={colorSpotXS}
        alt="spot"
        className="sm:hidden absolute bottom-[35%] xs:bottom-[10%] right-0 ml-auto z-0 w-screen filter brightness-75"
      />
    </div>
  );
};
