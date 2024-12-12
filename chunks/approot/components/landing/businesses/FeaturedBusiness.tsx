import Image from 'next/image';
import React from 'react';
import { Readex_Pro } from 'next/font/google';

const props = {
  image: '/images/devdads.png',
  imageLogo: '/images/devdads-logo.png',
  title: 'asdfadfadf',
};

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const FeaturedBusiness = () => {
  return (
    <div className="flex flex-col w-full">
      <div className={`${readexPro.className} font-light text-2xl text-primary`}>
        {' '}
        Check out how others are connecting on Carmel{' '}
      </div>
      <div className={`${readexPro.className} font-bold text-4xl md:text-[56px]`}>Featured Community</div>
      <div
        className={`${readexPro.className} font-normal text-black bg-gradient-to-r from-cyan to-light-green uppercase mt-5 py-2 px-3 mx-auto text-3xl`}>
        DevDads
      </div>
      <div className="mt-20 mb-20 flex flex-col w-full flex flex-col justify-center items-center bg-primary-background-blend">
        <div className="flex lg:flex-row flex-col w-full p-0">
          <div
            className="w-1/3 p-4 flex flex-col justify-between items-start
		w-full md:w-[400px] p-0 backdrop-blur-md
		bg-gradient-to-r from-[#04615a] to-secondary">
            <div>
              <h2 className={`${readexPro.className} text-3xl text-left mb-4`}>About our community</h2>
              <div className={`${readexPro.className} font-light text-left text-md text-primary leading-8 `}>
                We’re a self-governing community of dads building Web3 Apps together with our children and helping them
                become tech creators, not just consumers. We believe that our children should be tech creators, not just
                consumers and that tech for kids should be fun and profanity-free.
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 mt-4">
              <button className={`${readexPro.className} bg-[#00FFFF] text-black py-2 px-6`} onClick={() => {}}>
                Learn more
              </button>
            </div>
          </div>
          <div className="w-full p-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <Image alt="logo" src={props.imageLogo} width={40} height={40} className="rounded-full" />
                <div className={`${readexPro.className} text-2xl text-primary`}>DevDads</div>
              </div>
            </div>
            <Image src={props.image} alt="app" width="800" height="300" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
