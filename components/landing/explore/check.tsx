import React from 'react';
import { HiOutlineCheck } from 'react-icons/hi';
import { readexPro } from '~/elements/fonts';

const Check = ({ text, moreClasses }: any) => {
  return (
    <div className="flex items-center">
      <HiOutlineCheck className="text-primary bg-secondary rounded-full w-5 h-5 flex-shrink-0 mr-2" />
      <div className={`${readexPro.className} ${moreClasses || ""} font-light p-1`}>{text}</div>
    </div>
  );
};

export default Check;
