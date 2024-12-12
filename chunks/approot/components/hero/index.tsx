import { Readex_Pro } from 'next/font/google';
import React from 'react';
import { useRouter } from 'next/router';

const readexPro = Readex_Pro({ subsets: ['latin'] });

const Video = () => (
  <video autoPlay loop muted playsInline className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
    <source src="/vids/bg-2.mp4" type="video/mp4" />
  </video>
);

export default () => {
  const router = useRouter();

  const handleEarlyAccessClick = () => {
    router.push('/access/reserve');
  };

  return (
    <div className="relative flex items-center w-full justify-center h-screen overflow-hidden border border-primary-color">
      <div className="relative w-full z-30 p-5 bg-black text-2xl text-white bg-purple-300 bg-opacity-50 h-full grid place-items-center h-screen">
        <div className="w-full">
          <p className="lg:text-2xl font-bold text-lg text-transparent self-center bg-clip-text bg-gradient-to-r from-cyan to-light-green uppercase text-center w-full">
            Publish Carmel Forever™ Content
          </p>
          <h1 className="mb-5 lg:text-5xl text-4xl text-white inline-block text-transparent bg-clip-text">
            Create content that will live on
          </h1>
          <p className="lg:text-xl text-lg text-white uppercase text-center w-full ">
            Start your{' '}
            <span className="lg:text-xl font-bold text-lg text-transparent self-center bg-clip-text bg-gradient-to-r from-cyan to-light-green uppercase text-center w-full">
              Carmel Forever™
            </span>{' '}
            blog and leave your best thoughts as an enduring legacy
          </p>
          <div className="flex flex-col items-center mt-20">
            <button
              className={`${readexPro.className} text-xs xxs:text-lg py-3 lg:px-20 px-4 bg-cyan border text-black font-normal`}
              onClick={handleEarlyAccessClick}>
              Reserve Your Account
            </button>
            <div
              className={`${readexPro.className} text-xs xxs:text-lg font-thin md:font-light text-white sm:mt-2 mt-4`}>
              Limited availability. Invite only.
            </div>
          </div>
        </div>
      </div>
      <Video />
    </div>
  );
};
