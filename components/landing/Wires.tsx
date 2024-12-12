import React from 'react';
import Image from 'next/image';
import wire from '~/images/Wire.png';
import secondWire from '~/images/Wire2.png';
import wireXXS from '~/images/landing/Wire5_XXS.png';
import secondWireXXS from '~/images/landing/Wire6_XXS.png';
import wireXS from '~/images/landing/Wire5_XS.png';
import secondWireXS from '~/images/landing/Wire6_XS.png';
import wireLG from '~/images/landing/Wire5_LG.png';
import secondWireLG from '~/images/landing/Wire6_LG.png';

export const Wires = ({ top }: any) => {
    return (<div><Image src={wire} alt="wireXL" className={`hidden xl:block absolute z-20 top-[${top}%] w-screen animate-pulse`} />
      <Image
        src={secondWire}
        alt="wire2XL"
        className={`hidden xl:block absolute z-20 top-[${top}%] w-screen animate-pulse`}
      />
      <Image
        src={wireLG}
        alt="planet"
        className={`hidden lg:block xl:hidden absolute z-20 top-[${top-5}%] w-screen animate-pulse`}
      />
      <Image
        src={secondWireLG}
        alt="planet"
        className={`hidden lg:block xl:hidden absolute z-20 top-[${top-5}%] w-screen animate-pulse`}
      />
      <Image src={wireXXS} alt="planet" className="xs:hidden absolute z-20 top-[87%] w-screen animate-pulse" />
      <Image src={secondWireXXS} alt="planet" className="xs:hidden absolute z-20 top-[90%] w-screen animate-pulse" />
      <Image
        src={wireXS}
        alt="planet"
        className={`hidden xs:block md:hidden absolute z-20 top-[${top-15}%] w-screen animate-pulse`}
      />
      <Image
        src={secondWireXS}
        alt="planet"
        className={`hidden xs:block md:hidden absolute z-20 top-[${top-13}%] w-screen animate-pulse`}
      />
      <Image
        src={wireXS}
        alt="planet"
        className={`hidden md:block lg:hidden absolute z-20 top-[${top-5}%] w-screen animate-pulse`}
      />
      <Image
        src={secondWireXS}
        alt="planet"
        className={`hidden md:block lg:hidden absolute z-20 top-[${top-3}%] w-screen animate-pulse`}
      /></div>)
}