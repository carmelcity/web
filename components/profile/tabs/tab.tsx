import { Readex_Pro } from 'next/font/google';
import React from 'react';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

const Tab = ({ title, count, disabled, selected = false, onClick }: any) => {
  const selectedStylesContainer = 'border-b-primary border-b-[2px]';
  const selectedStylesTitle = 'text-primary';
  const selectedStylesCount = 'bg-primary';

  return (
    <div
      className={`
			flex gap-2 pb-1 px-4 mx-3
			${disabled ? '' : 'hover:cursor-pointer'} 
			${selected ? selectedStylesContainer : ''}
			`}
      onClick={onClick}>
      <div
        className={`
			${selected ? selectedStylesTitle : ''}
			${disabled ? 'text-carmel-grey' : 'text-grey'}
			${readex_pro.className}
			flex justify-center items-center
			`}>
        {title}
      </div>
      {count != undefined ? (
        <div
          className={`
				${readex_pro.className}
				${selected ? 'text-black' : disabled ? 'text-carmel-grey' : 'text-grey'} 
				bg-[#8899B21A] w-8 h-8 flex justify-center items-center
				${selected ? selectedStylesCount : ''} 
					
				`}>
          {count}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Tab;
