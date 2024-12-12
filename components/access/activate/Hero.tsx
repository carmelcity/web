import React from 'react';
import Image from 'next/image';
import { Readex_Pro } from 'next/font/google';
import { motion } from 'framer-motion';
import { bottomUpVariants, imageFadeInVariants, rightBottomCorner_SLOW_Variants } from '~/utils/animations';
import heroImage from '~/images/early-access/request-access.webp';
import colorSpot from '~/images/early-access/colorSpot.webp';
import wire1 from '~/images/early-access/wire1.webp';
import wire2 from '~/images/early-access/wire2.webp';

const readexPro = Readex_Pro({ subsets: ['latin'] });

export default ({ text }: any) => {
  return (
    <div className="relative xl:flex max-w-[1920px] py-[25%] lg:py-[17%] w-full">
      <motion.div
        variants={bottomUpVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        className={`mx-auto w-full px-5 lg:px-14 z-20 relative`}>
        <div className="relative z-20 flex flex-col items-start gap-4 lg:px-20 lg:w-3/5 ">
          <div className="flex flex-col items-start gap-2">
            <span
              className={`${readexPro.className} text-left xxs:text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green uppercase`}>
              { text.intro }
            </span>
            <span
              className={`${readexPro.className} text-left text-2xl xxs:text-4xl md:text-5xl font-bold w-full`}>
              { text.title }
            </span>
            <div
              className={`${readexPro.className} text-left mt-2 text-cyan text-xs xxs:text-2xl font-light font-thin leading-10`}>
              { text.subtitle }
            </div>
          </div>
        </div>
      </motion.div>
      <motion.img
        variants={imageFadeInVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        src={heroImage.src}
        className="hidden xxs:block lg:hidden absolute h-[55%] w-[45%] object-contain top-[50%] right-[30%]"
      />
      <motion.img
        variants={rightBottomCorner_SLOW_Variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        src={heroImage.src}
        className="hidden lg:block absolute h-[55%] w-[35%] object-contain top-48 right-56"
      />
      <Image src={colorSpot} alt="spot" className="absolute top-0 right-40 z-0" />
      <motion.div
        variants={bottomUpVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        className="hidden lg:block absolute z-20 top-[70%] w-screen">
        <Image src={wire1} alt="wire" className="w-screen max-w-[1920px] animate-pulse" />
      </motion.div>
      <motion.div
        variants={bottomUpVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        className="hidden lg:block absolute z-20 top-[70%] w-screen">
        <Image src={wire2} alt="wire" className="w-screen max-w-[1920px] animate-pulse" />
      </motion.div>
      <motion.div
        variants={bottomUpVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        className="absolute lg:hidden z-20 top-[90%] w-screen">
        <Image src={wire1} alt="wire" className="w-screen max-w-[1920px] animate-pulse" />
      </motion.div>
      <motion.div
        variants={bottomUpVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        className="absolute lg:hidden z-20 top-[90%] w-screen">
        <Image src={wire2} alt="wire" className="w-screen max-w-[1920px] animate-pulse" />
      </motion.div>
    </div>
  )
}
