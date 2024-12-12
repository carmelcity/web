// import Image from 'next/image';
// import React from 'react';
// import Explore from '../explore';
// import appsScreen from '~/images/landing/CustomerPortal.webp';
// import appsScreenXXS from '~/images/landing/CustomerPortal.webp';
// import appsScreenXS from '~/images/landing/CustomerPortal.webp';
// import appsScreenMD from '~/images/landing/CustomerPortal.webp';
// import appsScreenXL from '~/images/landing/CustomerPortal.webp';
// import spot from '~/images/landing/Spot_NFT.webp';
// import spot_XXS_XS from '~/images/landing/Spot_XS.png';
// import Check from '../explore/check';
// import { motion } from 'framer-motion';
// import { bottomUpVariants, rightBottomCorner_FAST_Variants } from '~/utils/animations';
// import { useRouter } from 'next/router';

// const explore1 = {
//   header: 'Next-Generation Financial Platform',
//   title: 'Own your finances.',
//   description:
//     '',
//   hideButton: false,
//   children: (
//     <div className="flex flex-col gap-3 text-left">
//       <Check text="Wallet." />
//       <Check text="dddd." />
//       <Check text="dddddd." />
//     </div>
//   ),
// };

// export const SellSection = ({ text }: any) => {
//   const router = useRouter();

//   const handleEarlyAccessClick = () => {
//     router.push('/access/reserve');
//   };

//   return (
//     <div className="relative xs:top-0 mt-10 block xl:flex h-[900px] lg:h-[700px] mb-28 xxs:mb-40 xs:mb-60 md:mb-60 lg:mb-60 xl:mb-0 max-w-[1920px] md:mt-0">
//       <div className="max-w-[1580px] mx-auto w-full lg:px-14 xl:px-20">
//         <Explore {...explore1} buttonClickHandler={handleEarlyAccessClick} moreClasses="relative z-20 xxs:m-5 lg:m-0" />
//       </div>
//       <motion.div
//         variants={rightBottomCorner_FAST_Variants}
//         initial="offscreen"
//         whileInView="onscreen"
//         viewport={{ once: false }}
//         className="hidden xl:block absolute top-[-20%] right-0 z-20">
//         <Image src={appsScreenXL} alt="apps" />
//       </motion.div>
//       <motion.div
//         variants={bottomUpVariants}
//         initial="offscreen"
//         whileInView="onscreen"
//         viewport={{ once: false }}
//         className="hidden lg:block xl:hidden absolute top-[20%] right-0 z-20">
//         <Image src={appsScreen} alt="apps" />
//       </motion.div>
//       <motion.div
//         variants={bottomUpVariants}
//         initial="offscreen"
//         whileInView="onscreen"
//         viewport={{ once: false }}
//         className="hidden md:block lg:hidden absolute top-[50%] z-20 right-0">
//         <Image src={appsScreenMD} alt="apps" />
//       </motion.div>
//       <motion.div
//         variants={bottomUpVariants}
//         initial="offscreen"
//         whileInView="onscreen"
//         viewport={{ once: false }}
//         className="hidden sm:block md:hidden absolute top-[50%] z-20">
//         <Image src={appsScreen} alt="apps" />
//       </motion.div>
//       <motion.div
//         variants={bottomUpVariants}
//         initial="offscreen"
//         whileInView="onscreen"
//         viewport={{ once: false }}
//         className="xs:hidden absolute top-[75%] right-0 w-screen z-20">
//         <Image src={appsScreenXXS} alt="apps" className="w-full" />
//       </motion.div>
//       <Image src={appsScreenXS} alt="apps" className="hidden xs:block sm:hidden absolute top-[55%] z-20" />
//       <Image src={spot} alt="spotXL" className="hidden xl:block absolute top-[-60%] right-0" />
//       <Image src={spot} alt="spot" className="hidden sm:block md:hidden absolute top-[50%] w-full" />
//       <Image src={spot} alt="spot" className="hidden md:block xl:hidden absolute top-[40%] w-full" />
//       <Image src={spot_XXS_XS} alt="spot" className="xs:hidden absolute top-0 w-full" />
//       <Image src={spot_XXS_XS} alt="spot" className="hidden xs:block sm:hidden absolute top-[45%] w-screen h-full" />
//     </div>
//   );
// };

import React from 'react';
import Check from '../explore/check';
import Image from 'next/image';
import Explore from '../explore';
import assetsXS from '~/images/landing/StoryEditor.webp';
import assetsSM from '~/images/landing/StoryEditor.webp';
import assetsMD from '~/images/landing/StoryEditor.webp';
import assetsLG from '~/images/landing/StoryEditor.webp';
import assetsXL from '~/images/landing/StoryEditor.webp';
import wire from '~/images/Wire.png';
import secondWire from '~/images/Wire2.png';
import wireXXS from '~/images/landing/Wire5_XXS.png';
import secondWireXXS from '~/images/landing/Wire6_XXS.png';
import wireXS from '~/images/landing/Wire5_XS.png';
import secondWireXS from '~/images/landing/Wire6_XS.png';
import wireLG from '~/images/landing/Wire5_LG.png';
import secondWireLG from '~/images/landing/Wire6_LG.png';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { leftToRightVariants } from '~/utils/animations';

const explore2 = {
  header: 'Next-Generation Financial Platform',
  title: 'Own your finances.',
  description: '',
  hideButton: false,
  children: (
    <div className="flex flex-col gap-3 text-left">
      <Check text="Wallet." />
      <Check text="dddd." />
      <Check text="dddddd." />
    </div>
  ),
};

export const SellSection = ({ text }: any) => {
  const router = useRouter();

  const handleEarlyAccessClick = () => {
    router.push('/preregister');
  };

  return (
    <div className="relative h-[700px] xxs:h-[900px] sm:h-[1100px] lg:h-[900px] mb-32 xs:mb-60 md:mb-96 md:mt-20 lg:mb-96 xl:mb-64 sm:mt-10 z-40 max-w-[1920px]">
      <div className="max-w-[1580px] mx-auto w-full xs:px-6">
        <Explore
          moreClasses="xxs:m-5 lg:ml-auto relative z-20 xs:ml-[20%] sm:ml-[35%] xl:mr-[-10%] 2xl:mr-[-14%]"
          {...explore2}
          buttonClickHandler={handleEarlyAccessClick}
        />
      </div>
      <motion.div
        variants={leftToRightVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        className="hidden xl:block absolute top-[-10%] z-30">
        <Image src={assetsXL} alt="assets" />
      </motion.div>
      <motion.div
        variants={leftToRightVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        className="hidden lg:block xl:hidden absolute top-[40%] z-30">
        <Image src={assetsLG} alt="assets" />
      </motion.div>
      <motion.div
        variants={leftToRightVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        className="sm:hidden relative top-5 z-30">
        <Image src={assetsXS} alt="assets" />
      </motion.div>
      <motion.div
        variants={leftToRightVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        className="hidden sm:block md:hidden top-[46%] absolute z-20">
        <Image src={assetsSM} alt="assets" />
      </motion.div>
      <motion.div
        variants={leftToRightVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        className="hidden md:block lg:hidden top-[50%] absolute z-30">
        <Image src={assetsMD} alt="assets" />
      </motion.div>
      <Image src={wire} alt="wireXL" className="hidden xl:block absolute z-20 top-[80%] w-screen animate-pulse" />
      <Image
        src={secondWire}
        alt="wire2XL"
        className="hidden xl:block absolute z-20 top-[80%] w-screen animate-pulse"
      />
      <Image
        src={wireLG}
        alt="planet"
        className="hidden lg:block xl:hidden absolute z-20 top-[115%] w-screen animate-pulse"
      />
      <Image
        src={secondWireLG}
        alt="planet"
        className="hidden lg:block xl:hidden absolute z-20 top-[115%] w-screen animate-pulse"
      />
      <Image src={wireXXS} alt="planet" className="xs:hidden absolute z-20 top-[87%] w-screen animate-pulse" />
      <Image src={secondWireXXS} alt="planet" className="xs:hidden absolute z-20 top-[90%] w-screen animate-pulse" />
      <Image
        src={wireXS}
        alt="planet"
        className="hidden xs:block md:hidden absolute z-20 top-[105%] w-screen animate-pulse"
      />
      <Image
        src={secondWireXS}
        alt="planet"
        className="hidden xs:block md:hidden absolute z-20 top-[107%] w-screen animate-pulse"
      />
      <Image
        src={wireXS}
        alt="planet"
        className="hidden md:block lg:hidden absolute z-20 top-[115%] w-screen animate-pulse"
      />
      <Image
        src={secondWireXS}
        alt="planet"
        className="hidden md:block lg:hidden absolute z-20 top-[117%] w-screen animate-pulse"
      />
    </div>
  );
};
