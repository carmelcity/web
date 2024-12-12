import Image from 'next/image';
import React from 'react';
import { Readex_Pro } from 'next/font/google';

const props = {
  image: '/images/codelambs.png',
  imageLogo: '/images/codelambsLogo.png',
  title: 'asdfadfadf',
};

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const FeaturedProduct = () => {
  return (
    <div className="flex flex-col w-full">
      <div className={`${readexPro.className} font-light text-2xl text-primary`}>
        Check out what others are building on Carmel
      </div>
      <div className={`${readexPro.className} font-bold text-4xl md:text-[56px]`}>Featured Product</div>
      <div
        className={`${readexPro.className} font-normal text-black bg-gradient-to-r from-cyan to-light-green uppercase mt-5 py-2 px-3 mx-auto text-3xl`}>
        Codelambs
      </div>
      <div className="mt-20 mb-20 flex flex-col w-full flex flex-col justify-center items-center bg-primary-background-blend">
        <div className="flex lg:flex-row flex-col w-full p-0">
          <div
            className="w-1/3 p-4 flex flex-col justify-between items-start
		w-full md:w-[400px] p-0 backdrop-blur-md
		bg-gradient-to-r from-[#04615a] to-secondary">
            <div>
              <h2 className={`${readexPro.className} text-3xl text-left mb-4`}>About</h2>
              <div className={`${readexPro.className} font-light text-left text-md text-primary leading-8 `}>
                Welcome to Deretica, where we prove that sheep aren't the least intelligent animals. All they need is a
                little help learning the skills to navigate this big world. And you might just learn a few things that
                will help you in your world too along the way.
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
                <div className={`${readexPro.className} text-2xl text-primary`}>Codelambs</div>
                <div className={`${readexPro.className} text-lg text`}>published by the</div>
                <div className={`${readexPro.className} text-lg text-black pr-2 pl-2 font-bold bg-primary`}>
                  Cali Media
                </div>
                <div className={`${readexPro.className} text-lg text`}>Studio</div>
              </div>
            </div>
            <Image src={props.image} alt="app" width="800" height="300" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
