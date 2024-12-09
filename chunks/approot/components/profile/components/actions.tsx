import { Readex_Pro } from 'next/font/google';
import React, { useState } from 'react';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

const Action = ({ selected, description, onClick }: any) => {
  const selectedStyles = 'text-secondary bg-primary';
  const unselectedStyles = 'text-white';
  return (
    <div
      className={`
			${readex_pro.className}
			${selected ? selectedStyles : unselectedStyles}
			inline-flex px-6 py-3 hover:cursor-pointer
		`}
      onClick={onClick}>
      {description}
    </div>
  );
};

const Actions = ({ actions }: any) => {
  const [selectedAction, setSelectedAction] = useState(0);

  const getSelectedAction = () =>
    actions.length ? actions.find((_: any, index: number) => index === selectedAction).render : null;

  return (
    <>
      <div className="inline-flex justify-start items-start p-1 bg-secondary mb-4">
        {actions.map((action: any, index: number) => (
          <Action
            key={index}
            {...action}
            selected={index === selectedAction}
            onClick={() => {
              setSelectedAction(index);
              action.onClick();
            }}
          />
        ))}
      </div>
      {getSelectedAction()}
    </>
  );
};

export default Actions;
