import React from 'react';
import Card from './card';

const Cards = ({ cards }: any) => {
  const getCards = () => cards.map((card: any, index: number) => <Card {...card} key={index} />);

  const getHexagonalCards = () => {
    return cards.map((card: any, index: number) => (
      <div
        key={index}
        className="relative w-64 h-80 bg-cyan bg-opacity-10"
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        }}>
        <Card {...card} key={index} />
      </div>
    ));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-10">
      {getHexagonalCards()}
    </div>
  );
};

export default Cards;
