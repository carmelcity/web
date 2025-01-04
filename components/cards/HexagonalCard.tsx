import Image from 'next/image';
import React, { useState } from 'react';
import { HexagonalCardProps } from './props';
import { readexPro } from '~/elements/fonts'

export const HexagonalCard = ({
  icon,
  title,
  titleStyles,
  description,
  id,
  flippingCard = false,
  small,
}: HexagonalCardProps) => {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const handleCardHover = (id: any) => {
    setHoveredCardId(id);
  };

  return (
    <div
      className={`group ${small ? 'h-40 w-40' : 'h-96 w-80'} bg-transparent backdrop-filter backdrop-blur-md mt-10 ${
        small ? '' : 'cursor-pointer'
      } z-20`}
      style={{
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      }}>
      <div
        className={`relative h-full w-full rounded-xl shadow-xl ${
          flippingCard
            ? 'transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'
            : ''
        }`}
        onMouseEnter={id ? () => handleCardHover(id) : undefined}
        onMouseLeave={id ? () => handleCardHover(null) : undefined}>
        <svg
          className="absolute w-full h-full"
          viewBox="1 1 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none">
          <path
            d="M1.5 4.5V10.5L7.5 14L13.5 10.5V4.5L7.5 1L1.5 4.5Z"
            stroke={hoveredCardId === id ? 'cyan' : 'darkcyan'}
            strokeWidth={0.5}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className="flex flex-col justify-center h-full items-center gap-3 w-full max-w-64 m-auto p-6 [backface-visibility:hidden]">
          <Image {...icon} alt="icon" />
          {title && (
            <div className={`${readexPro.className} text-lg md:text-xl uppercase ${titleStyles ?? ''}`}>{title}</div>
          )}
          {description && <div className={`${readexPro.className} font-thin text-primary`}>{description}</div>}
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-cyan/30  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <Image src={icon} alt="icon" width={80} height={80} />
            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
