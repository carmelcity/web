import { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

export default function Main() {
  return (
    <div className="relative isolate w-full lg:w-4/5">
      <svg
        className="absolute inset-0 -z-10 h-screen w-screen [mask-image:radial-gradient(100%_100%_at_top_left,white,transparent)]"
        aria-hidden="true">
        <defs>
          <pattern id="p" width="180" height="104" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="rgba(255,255,255, 0.2)" strokeWidth="1">
              <path id="a" d="M90 0H30L0 52l30 52h60l30-52z" />
              <path d="M120 52h60" />
              <use href="#a" x="180" />
            </g>
          </pattern>
        </defs>
        <rect fill="url(#p)" width="100%" height="100%"></rect>
      </svg>
      <div className="mx-auto w-full px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 className="mt-0 max-w-lg text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
            The Internet is broken.
          </h1>
        </div>
        <div className="mt-16 lg:flex-shrink-0 lg:flex-grow">
          <svg
            viewBox="0 0 300 700"
            role="img"
            className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl cursor-pointer transition opacity-90 duration-500 ease-in-out scale-100 hover:scale-110 hover:opacity-100">
            <foreignObject
              width={400}
              height={500}
              transform="translate(0 0)"
              className="border border-primary-color bg-black"
              clipPath="">
              <img src="/images/building.png" alt="" />
            </foreignObject>
            <foreignObject width={80} height={80} transform="translate(120 200)" className="" clipPath="">
              <img src="/images/play.png" alt="" />
            </foreignObject>
          </svg>
        </div>
      </div>
    </div>
  );
}
