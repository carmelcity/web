import React from 'react';
import Image from 'next/image';
import Container from '~/containers/main';
import background from '~/images/landing/BackgroundBenefits.png';
import wire1 from '~/images/Wire3.png';
import wire2 from '~/images/Wire4.png';
import { Readex_Pro } from 'next/font/google';
import { BenefitsCards } from '~/components/benefits';
import { motion } from 'framer-motion';
import { leftToRightVariants } from '~/utils/animations';

const readexPro = Readex_Pro({ subsets: ['latin'] });

export const Benefits = () => {
  return (
    <Container>
      <div className="w-full mx-auto flex justify-center bg-black h-full min-h-screen pt-20">
        <div className="max-w-[1920px] relative w-screen min-h-[2000px] overflow-hidden">
          <motion.div
            variants={leftToRightVariants}
            initial="offscreen"
            whileInView="onscreen"
            animate={{ rotate: 360 }}
            transition={{ duration: 800, loop: Infinity, ease: 'linear' }}
            viewport={{ once: false }}
            className="absolute top-[10%] z-0">
            <Image src={background} alt="first" className="w-screen filter brightness-50" />
          </motion.div>
          <Image src={wire1} alt="wire1" className="absolute top-[70%] right-0 w-80 z-0 w-screen" />
          <Image src={wire2} alt="wire2" className="absolute top-[70%] right-0 w-80 z-0 w-screen" />
          <div className="flex flex-col z-20 mt-20 relative">
            <div
              className={`${readexPro.className} xxs:text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green uppercase mb-4`}>
              Tagline here
            </div>
            <div className={`${readexPro.className} text-4xl font-bold mb-5`}>Benefits</div>
            <div
              className={`${readexPro.className} text-white xxs:text-xl font-thin xs:font-extralight w-4/5 md:w-2/5 mx-auto leading-9`}>
              Web3 is the greatest opportunity for social entrepreneurs since the invention of the Internet. Leverage
              it. The Carmel Way.
            </div>
          </div>
          <BenefitsCards />
        </div>
      </div>
    </Container>
  );
};
