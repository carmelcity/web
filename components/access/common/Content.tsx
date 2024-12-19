import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerVariants } from '~/utils/animations';
import Check from '~/components/landing/explore/check';
import colorSpot from '~/images/early-access/colorSpot4.webp';
import { useInView } from 'react-intersection-observer';

import { readexPro } from '~/components/fonts'

export default ({ text, children }: any) => {
  const [visibleChecks, setVisibleChecks] = useState([]);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setVisibleChecks((prevVisibleChecks: any) => {
          const nextIndex = prevVisibleChecks.length;
          if (nextIndex < text.benefits.length) {
            return [...prevVisibleChecks, nextIndex];
          } else {
            clearInterval(interval);
            return prevVisibleChecks;
          }
        });
      }, 500)

      return () => clearInterval(interval);
    }
  }, [inView])

  return (
    <div className="relative block xl:flex h-auto max-w-[1920px] w-auto mb-10 xl:mr-32">
      <div className={`mx-auto w-full lg:ml-14 z-20 relative`}>
        <div className="relative z-20 flex flex-col items-start gap-4 px-5 lg:pl-20">
          <div className="flex flex-col items-start gap-2">
            <span
              className={`${readexPro.className} text-left xxs:text-md font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green uppercase`}>
                { text.benefitsIntro }
            </span>
            <div className={`${readexPro.className} text-left text-2xl xxs:text-4xl font-bold w-full`}>
              { text.benefitsTitle}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col gap-3 mt-2 px-5 lg:pl-20" ref={ref}>
            {text.benefits.map((t: string, index: number) => (
              <motion.div
                key={index}
                custom={index}
                variants={staggerVariants}
                initial="hidden"
                animate={visibleChecks.includes(index as never) ? 'visible' : 'hidden'}
                className="mt-2"
                viewport={{ once: false }}>
                <Check text={t} moreClasses='text-left'/>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
     { children }
    </div>
  );
};
