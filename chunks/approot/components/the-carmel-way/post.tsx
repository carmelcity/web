import React, { useState } from 'react';
import { BiCaretRight } from 'react-icons/bi';

const Post = ({ data, category, imageLink, author, slug }: any) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <a
      className="flex flex-col text-left z-10 transition-all duration-300 box-border"
      href={`/stories/${slug}/`}
      style={{
        borderImage: isHover
          ? 'linear-gradient(0.45turn, #00FFFF, #03664E) 1'
          : 'linear-gradient(0.45turn, #00FFFF80, #03664E80) 1',
        borderImageSlice: 1,
        borderWidth: 1,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <img src={imageLink} className="w-full h-auto" />
      <div className="flex flex-col items-start p-4 gap-2 bg-[#053D3640] backdrop-blur-sm z-20">
        <div className="text-primary font-medium text-sm font-rocGrotesk">{category}</div>
        <div className=" text-[18px] leading-6 font-medium line-clamp-2 md:line-clamp-3 font-rocGrotesk">
          {data.title}
        </div>
        <div className="line-clamp-2 leading-6 text-sm tracking-wider font-normal md:line-clamp-3 font-rocGrotesk">
          {data.description}
        </div>
        <div
          className={`${
            isHover ? 'bg-primary text-black' : 'bg-secondary-green text-white'
          } flex items-center font-medium text-[14px] justify-self-end self-center transition-all duration-300 my-6 py-3 px-10 md:px-6 lg:px-10 font-rocGrotesk hover:cursor-pointer scale-x-125`}
          style={{ clipPath: 'polygon(100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 0)' }}>
          READ
          <BiCaretRight
            height={20}
            width={20}
            className={`${isHover ? 'text-black' : 'text-primary'} transition-all duration-300 ml-1`}
          />
        </div>
      </div>
    </a>
  );
};

export default Post;
