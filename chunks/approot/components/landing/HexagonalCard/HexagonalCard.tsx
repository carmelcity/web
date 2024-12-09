import React, { useState, useEffect } from 'react';
import { Readex_Pro } from 'next/font/google';
import Image from 'next/image';
import { HexagonalCardProps } from './props';
import { motion } from 'framer-motion';
import { imageVariants } from '~/utils/animations';

const readexPro = Readex_Pro({ subsets: ['latin'] });

export const HexagonalCard = ({
  icon,
  title,
  subtitle,
  description,
  tag,
  id,
  flippingCard = false,
  moreDetails,
}: HexagonalCardProps) => {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleCardHover = (id: any) => {
    setHoveredCardId(id);
  };

  useEffect(() => {
    if (flippingCard) {
      // Animate the first card
      if (id == 1) {
        setTimeout(() => {
          setShouldAnimate(true);

          setTimeout(() => {
            setShouldAnimate(false);
          }, 1000); // Adjust the duration as needed
        }, id * 1000);
      }
    }
  }, [id]);

  return (
    <motion.div
      variants={imageVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false }}
      className={`group h-[250px] w-[250px] xxs:h-[320px] xxs:w-[320px] sm:h-[420px] sm:w-[420px] md:h-[320px] md:w-[320px] lg:h-[420px] lg:w-[420px] bg-transparent mb-20 z-30`}>
      <div
        className={`relative h-full w-full shadow-none   ${
          flippingCard
            ? `transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
                shouldAnimate
                  ? 'transition-all duration-1000 [transform-style:preserve-3d] [transform:rotateY(180deg)]'
                  : ''
              } `
            : ''
        }`}
        onMouseEnter={() => handleCardHover(id)}
        onMouseLeave={() => handleCardHover(null)}>
        <svg
          className="absolute h-[250px] w-[250px]  xxs:h-[320px] xxs:w-[320px] sm:h-[420px] sm:w-[420px] md:h-[320px] md:w-[320px] lg:h-[420px] lg:w-[420px]"
          viewBox="1 1 13 13"
          fill="rgba(0,0,0,0.6)"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.5 4.5V10.5L7.5 14L13.5 10.5V4.5L7.5 1L1.5 4.5Z"
            stroke={hoveredCardId === id ? 'cyan' : 'darkcyan'}
            strokeWidth={0.8}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className="flex flex-col relative bottom-24 xxs:bottom-16 sm:bottom-4 md:bottom-16 lg:bottom-4 justify-center items-center sm:gap-3 w-full max-w-64 h-[420px] m-auto p-6 [backface-visibility:hidden]">
          <div className="hidden sm:block md:hidden lg:block">
            <Image src={icon} alt="icon" width={100} height={100} />
          </div>
          <div className="sm:hidden md:block lg:hidden">
            <Image src={icon} alt="icon" width={80} height={80} />
          </div>
          <div className={`${readexPro.className} font-medium xxs:text-xl uppercase`}>{title}</div>
          <div className={`${readexPro.className} font-medium xxs:text-xl text-white`}>{subtitle}</div>
          <div
            className={`${readexPro.className} text-xs xxs:text-sm sm:text-lg md:text-sm lg:text-lg font-thin text-white p-2`}>
            {description}
          </div>
        </div>
        {flippingCard && (
          <div className="absolute inset-0 h-full w-full rounded-xl px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center ">
              <Image src={icon} alt="icon" width={80} height={80} />
              <p className="text-base text-white mt-5">{moreDetails}</p>
            </div>
          </div>
        )}
        {tag && (
          <div className="absolute top-[86.5%] -right-2 w-[130px] xxs:w-[170px] sm:w-[225px] md:w-[170px] lg:w-[225px] uppercase">
            <div className="transform -rotate-[30.2deg] text-black bg-gradient-to-r from-cyan to-light-green">
              <span className={`${readexPro.className} text-black`}>{tag}</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
