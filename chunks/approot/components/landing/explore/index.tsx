import React from 'react';
import { Readex_Pro } from 'next/font/google';
import { motion } from 'framer-motion';
import { downloadAppVariants } from '~/utils/animations';

const readexPro = Readex_Pro({ subsets: ['latin'] });

const Explore = ({
  moreClasses,
  header,
  title,
  description,
  hideButton,
  buttonTitle,
  children,
  buttonClickHandler,
}: any) => {
  return (
    <motion.div
      variants={downloadAppVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false }}
      className={`flex flex-col items-start gap-4 w-full  z-30 ${moreClasses} w-auto z-30 p-4 md:p-8 lg:p-0`}>
      <div className="flex flex-col items-start">
        <span
          className={`${readexPro.className} xxs:text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green uppercase text-start`}>
          {header}
        </span>

        <div className={`${readexPro.className} text-left text-2xl xxs:text-4xl font-bold`}>{title}</div>
        {description && (
          <div
            className={`${readexPro.className} text-left text-secondary-grey xxs:text-xl font-light sm:w-4/5 leading-7 xxs:leading-9`}>
            {description}
          </div>
        )}
      </div>
      {children}

      {!hideButton && (
        <button
          className={`${readexPro.className} py-3 px-10 text-white bg-transparent backdrop-filter backdrop-blur-md border border-1 shadow-md shadow-[#03664E] mt-5`}
          style={{
            borderImage: 'linear-gradient(0.30turn, #00FFFF, #03664E)',
            borderImageSlice: 1,
          }}
          onClick={buttonClickHandler}>
          {buttonTitle}
        </button>
      )}
    </motion.div>
  );
};

export default Explore;
