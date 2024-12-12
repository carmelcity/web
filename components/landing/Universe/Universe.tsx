import React from 'react';
import Image from 'next/image';
import tradingCards from '~/images/TradingCards.png';
import tradingCardsXS from '~/images/landing/TradingCards_XS.png';
import tradingCardsMD from '~/images/landing/TradingCards_MD.png';
import { Readex_Pro } from 'next/font/google';
import { UniverseProps } from './props';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { imageFadeInVariants } from '~/utils/animations';
import Check from '../explore/check';

const readexPro = Readex_Pro({ subsets: ['latin'] });

export const Universe = ({ text }: any) => {
  const router = useRouter();

  const handleCarmelUniverse = () => {
    router.push('/preregister');
  };

  return (
    <div className="flex flex-col h-[500px] xxs:h-[700px] sm:h-[600px] md:h-[700px] items-center z-40 mt-5 xl:mt-32 xl:mb-32">
      <div className="flex flex-col">
        <span
          className={`${readexPro.className} xxs:text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green uppercase`}>
        ddddds
        </span>
        <span className={`${readexPro.className} mt-5 text-sm xxs:text-4xl font-bold mx-auto mb-5`}>sadgfsdf</span>
        {/* <div className="flex flex-col lg:flex-row my-5 lg:gap-10 mx-auto">
          <Check text="Unlimited Design" moreClasses="text-cyan font-normal" />
          <Check text="Unlimited Development" moreClasses="text-cyan font-normal" />
          <Check text="Unlimited Audience Building" moreClasses="text-cyan font-normal" />
        </div> */}
        <div
        className={`${readexPro.className} xxs:text-3xl w-auto font-extralight text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green`}>
        Get Started now
      </div>
        <div className="flex flex-col items-center gap-4 mt-20">
          <button
            className={`${readexPro.className} text-xs xxs:text-lg py-3 px-20 bg-cyan  text-black font-normal`}
            onClick={handleCarmelUniverse}>
            Get Early Access
          </button>
          <div className={`${readexPro.className} text-xs xxs:text-lg font-thin md:font-light text-cyan sm:mt-2`}>
            Invitation-only
          </div>
        </div>
      </div>

      {/* <motion.div variants={imageFadeInVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: false }}>
        <Image src={tradingCards} alt="apps" className="hidden sm:block md:hidden -mt-28 z-10" />
      </motion.div>
      <motion.div variants={imageFadeInVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: false }}>
        <Image src={tradingCardsXS} alt="apps" className="sm:hidden mt-10 w-screen z-10" />
      </motion.div>
      <motion.div variants={imageFadeInVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: false }}>
        <Image src={tradingCardsMD} alt="apps" className="hidden md:block lg:hidden -mt-60 w-screen z-10" />
      </motion.div>
      <motion.div variants={imageFadeInVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: false }}>
        <Image src={tradingCardsMD} alt="apps" className="hidden lg:block xl:hidden -mt-80 w-screen z-10" />
      </motion.div>
      <motion.div variants={imageFadeInVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: false }}>
        <Image src={tradingCardsMD} alt="apps" className="hidden xl:block -mt-64 z-10" />
      </motion.div> */}
    </div>
  );
};
