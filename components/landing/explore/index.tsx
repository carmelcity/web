import React from 'react';
import { motion } from 'framer-motion';
import { downloadAppVariants } from '~/utils/animations';
import Image from 'next/image';
import Check from './check'
import { readexPro } from '~/components/fonts';

const TextContent = ({ moreClasses,
  header,
  title,
  description,
  benefits,
  buttonTitle,
  buttonClickHandler,
}: any) => {
  return <div className="flex flex-col items-center lg:items-start w-full">
  <span
    className={`${readexPro.className} w-full xxs:text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green uppercase text-start`}>
    {header}
  </span>

  <div className={`${readexPro.className} text-left text-2xl xxs:text-4xl font-bold`}>{title}</div>
  {description && (
    <div className={`${readexPro.className} text-left text-secondary-grey xxs:text-xl font-light sm:w-4/5 leading-7 xxs:leading-9`}>
      {description}
    </div>
  )}
<div className="flex flex-col gap-3 text-left mt-4">
  { benefits.map((b: string, i: number) => <Check text={b} key={`ben-${i}`} />) }
</div>
<button
    className={`${readexPro.className} py-3 px-10 text-white w-60 bg-transparent backdrop-filter backdrop-blur-md border border-1 shadow-md shadow-[#03664E] mt-12 ml-4`}
    style={{
      borderImage: 'linear-gradient(0.30turn, #00FFFF, #03664E)',
      borderImageSlice: 1,
    }}
    onClick={buttonClickHandler}>
    {buttonTitle}
  </button>
</div>
}

const ImageContent = ({ image }: any) => {
  return <div className='lg:w-1/2 lg:mt-0 mt-8'>
  <Image src={image} width={500} height={500} alt="assets" />
</div>
}

const Explore = (props: any) => {
  return (
    <motion.div
      variants={downloadAppVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false }}
      className={`flex flex-col items-start gap-4 z-30 ${props.moreClasses} w-auto z-30 p-8 pb-20`}>
      <div className="flex lg:flex-row flex-col items-center w-full">
      { props.invert ? 
        [<ImageContent {...props} key="l1"/>,<TextContent key="l2" {...props}/>]  :
        [<TextContent key="s1" {...props}/>,<ImageContent key="s2" {...props}/>]
      }
      </div>
    </motion.div>
  );
};

export default Explore;
