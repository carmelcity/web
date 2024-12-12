import React from 'react'
import Explore from './explore'
import { useRouter } from 'next/router'
import { Wires } from './Wires'

export const Section = (props: any) => {
  const router = useRouter();

  const handleEarlyAccessClick = () => {
    router.push('/business/access');
  }

  return (
    <div className="relative z-40 max-w-[1920px] lg:mt-40 lg:mb-40">
      <div className="max-w-[1580px] mx-auto w-full">
        <Explore
          moreClasses="relative z-20"
          {...props}
          buttonClickHandler={handleEarlyAccessClick}
        />
        <Wires top={100} className=""/>
      </div>
    </div>
  );
};
