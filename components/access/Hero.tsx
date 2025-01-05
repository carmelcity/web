import React from 'react';
import { motion } from 'framer-motion';
import { downloadAppVariants } from '~/utils/animations';
import Image from 'next/image';
import { readexPro } from '~/elements/fonts'

const TextContent = ({ moreClasses,
  header,
  title,
  buttonTitle,
  buttonClickHandler,
}: any) => {
  return <div className="flex flex-col items-center lg:items-start w-full">
  <span
    className={`${readexPro.className} w-full xxs:text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green uppercase text-start`}>
    {header}
  </span>

  <div className={`${readexPro.className} text-left text-2xl xxs:text-4xl font-bold`}>{title}</div>
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

export const Hero = (props: any) => {
  return (
    <motion.div
      variants={downloadAppVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false }}
      className={`flex flex-col items-start gap-4 z-30 ${props.moreClasses} w-auto z-30 p-8 pb-20`}>
      <div className="flex lg:flex-row flex-col items-center w-full">
      { props.invert ? 
        [<ImageContent {...props} key="d1"/>,<TextContent key="d2" {...props}/>]  :
        [<TextContent key="e1" {...props}/>,<ImageContent key="e2" {...props}/>]
      }
      </div>
    </motion.div>
  );
};