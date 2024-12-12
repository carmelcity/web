import React from 'react';
import { Readex_Pro } from 'next/font/google';
import Image from 'next/image';
import { ContentProps } from './props';
import { HexagonalAvatarWithProperty } from '~/components/quests/HexagonalAvatarWithProperty';
import viewsLogo from '~/images/Views.svg';
import likesLogo from '~/images/Likes.svg';
import { ContentPlaceholder } from '~/components/placeholders/Content';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const Content = ({ data, isLoading }: ContentProps) => {
  if (isLoading) {
    return <ContentPlaceholder />;
  }

  const handleContentClick = () => {
    // TO BE DEFINED
  };

  return (
    <div className="flex flex-wrap m-8">
      {data.map((item: any, index: number) => {
        return (
          <div key={index} className="relative w-80 h-96 mr-5 mb-5 cursor-pointer ">
            <div
              className="absolute top-0 left-0 w-full h-full z-10"
              style={{
                backgroundImage: `url('${item.image.src}')`,
                backgroundSize: 'cover',
              }}
              onClick={handleContentClick}></div>
            <div
              className="absolute top-0 left-0 w-full h-full z-20"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
            <div className="flex items-center m-5 relative z-30">
              <div
                className={`${readexPro.className} text-sm w-3/5 font-thin h-9 flex bg-dark-turquoise items-center justify-center`}>
                {item.tag}
              </div>
              <span className={`${readexPro.className} text-sm font-thin bg-transparent ml-auto mr-2 w-1/3`}>
                {item.date}
              </span>
            </div>
            <div className="flex relative z-30">
              <div className="flex items-center m-5 mt-32 w-4/5">
                <div className="flex flex-col">
                  <span className={`${readexPro.className} text-xl font-normal bg-transparent text-left mb-5`}>
                    {item.title}
                  </span>
                  <HexagonalAvatarWithProperty
                    profileImage={item.authorPhoto}
                    alt="author"
                    username={item.author}
                    appName={item.property}
                    appLogo={item.propertyLogo}
                    communityName="Community"
                  />
                </div>
              </div>
              <div className="flex items-center mt-auto mb-4 w-1/5">
                <div className="flex flex-col">
                  <Image src={viewsLogo} alt="views" />
                  <span className="text-cyan mb-2">{item.views}</span>
                  <Image src={likesLogo} alt="views" className="mt-2" />
                  <span className="text-cyan">{item.likes}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
