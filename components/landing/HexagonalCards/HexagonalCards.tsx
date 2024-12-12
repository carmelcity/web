import React from 'react';
import { BenefitsProps } from './props';
import { HexagonalCard } from '../HexagonalCard';

export const HexagonalCards = ({ data, flippingCard }: BenefitsProps) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:gap-20 lg:gap-0 2xl:gap-36 z-10">
        {/* First two cards */}
        {data.slice(0, 2).map((cardItem: any, index: number) => (
          <div key={index} className="col-span-1 md:-mb-36 xl:mb-0 mx-auto">
            <HexagonalCard
              title={cardItem.title}
              description={cardItem.description}
              icon={cardItem.icon}
              id={cardItem.id}
              tag={cardItem.tag}
              flippingCard={flippingCard}
            />
          </div>
        ))}
  
        {/* Centered card on MD screens */}
        <div className="md:col-span-2 xl:col-span-1 mx-auto">
          {data.slice(2, 3).map((cardItem: any, index: number) => (
            <HexagonalCard
              key={index}
              title={cardItem.title}
              description={cardItem.description}
              icon={cardItem.icon}
              id={cardItem.id}
              tag={cardItem.tag}
              flippingCard={flippingCard}
            />
          ))}
        </div>
      {/* Centered card on MD screens */}
      {/* <div className="md:col-span-2 xl:col-span-1 mx-auto">
        {data.slice(2, 3).map((cardItem: any, index: number) => (
          <HexagonalCard
            key={index}
            title={cardItem.title}
            description={cardItem.description}
            icon={cardItem.icon}
            id={cardItem.id}
            flippingCard={flippingCard}
          />
        ))}
      </div> */}
    </div>
  );
};
