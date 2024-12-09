import { Readex_Pro } from 'next/font/google';
import React from 'react';
import { handleDownloadClick } from '~/utils/helper';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

const FirstChapter = () => {
  return (
    <div
      className="flex flex-col items-start gap-8 relative mt-7 lg:w-full bg-[#053D3680] backdrop-blur-lg z-20 p-6 md:p-10"
      style={{
        borderImage: 'linear-gradient(0.45turn, #00FFFF, #03664E)',
        borderImageSlice: 1,
        borderWidth: 1,
      }}>
      <div className="text-start font-normal text-2xl font-rocGrotesk leading-9 md:leading-10">
        Global disengagement is widespread due to an emphasis on pleasure and power. The Carmel Way prioritizes meaning
        over wealth and influence, promoting freedom, creativity and openness.
      </div>

      <div className="flex flex-col justify-center gap-6">
        <button
          className="bg-[#00FFFF] text-black py-4 px-4 md:px-10 mt-5 font-rocGrotesk tracking-wide font-medium text-[18px]"
          onClick={() => handleDownloadClick('/docs/CarmelStory.pdf', 'Carmel-Chapter1')}>
          DOWNLOAD THE FIRST CHAPTER
        </button>
        <div className="font-rocGrotesk tracking-wider font-normal text-[18px]">
          First copies start shipping{' '}
          <span className={`${readex_pro.className} text-primary font-normal text-[18px]`}>Spring 2024</span>
        </div>
      </div>
    </div>
  );
};

export default FirstChapter;
