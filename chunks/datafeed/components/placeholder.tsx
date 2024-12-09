import React from 'react';

/**
 *
 * @returns
 */
const Title = () => {
  return (
    <div className="flex flex-col w-4/5 lg:w-3/5 xl:w-2/5">
      <div className="flex">
        <div className={`w-full h-5 bg-cyan/20 animate-pulse ml-5`}></div>
        <div className="lg:hidden ml-auto hover:cursor-pointer"></div>
      </div>
      <div className="flex mt-2">
        <div className={`w-5/6 h-5 bg-cyan/20 animate-pulse ml-5`}></div>
        <div className="lg:hidden ml-auto hover:cursor-pointer"></div>
      </div>
    </div>
  );
};

/**
 *
 * @returns
 */
const Body = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        <div className={`w-full h-5 bg-cyan/20 animate-pulse`}></div>
        <div className="lg:hidden ml-auto hover:cursor-pointer"></div>
      </div>
      <div className="flex mt-2">
        <div className={`w-3/4 h-5 bg-cyan/20 animate-pulse`}></div>
        <div className="lg:hidden ml-auto hover:cursor-pointer"></div>
      </div>
      <div className="flex mt-2">
        <div className={`w-4/5 h-5 bg-cyan/20 animate-pulse`}></div>
        <div className="lg:hidden ml-auto hover:cursor-pointer"></div>
      </div>
      <div className="flex mt-2">
        <div className={`w-full h-48 bg-cyan/20 animate-pulse`}></div>
        <div className="lg:hidden ml-auto hover:cursor-pointer"></div>
      </div>
    </div>
  );
};

/**
 *
 * @returns
 */
const Placeholder = () => {
  return (
    <div className="mb-2 border border-primary-color/40 w-full flex flex-col">
      <div className="flex flex-row items-center w-full bg-black/50 py-3">
        <div className="flex items-center w-full bg-black/50 px-6 py-3 border-b border-cyan/10">
          <Title />
        </div>
      </div>
      <div className="flex items-center w-full bg-black/50 px-6 py-3">
        <Body />
      </div>
    </div>
  );
};

export default Placeholder;
