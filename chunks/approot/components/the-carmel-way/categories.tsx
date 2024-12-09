import React from 'react';

export const Action = ({ description, onClick, selected }: any) => {
  const selectedStyles = 'bg-secondary-green text-primary';
  const notSelectedStyles = 'bg-secondary-page text-black';

  return (
    <div
      className={`py-3 font-medium text-sm px-6 hover:cursor-pointer whitespace-nowrap font-rocGrotesk tracking-[0.2em] ${
        selected ? selectedStyles : notSelectedStyles
      }`}
      onClick={onClick}
      style={{ clipPath: 'polygon(100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 0)' }}>
      {description}
    </div>
  );
};

const Categories = ({ categories, selectedIndex, setSelectedIndex }: any) => {
  return (
    <div className="flex w-full gap-3 overflow-auto mb-2">
      {categories.map((category: any, index: number) => (
        <Action
          description={category.description}
          key={index}
          selected={selectedIndex === index}
          onClick={() => setSelectedIndex(index)}
        />
      ))}
    </div>
  );
};

export default Categories;
