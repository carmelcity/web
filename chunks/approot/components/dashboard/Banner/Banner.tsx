import React from 'react';
import { Readex_Pro } from 'next/font/google';
import { useBackgroundImage } from '~/components/hooks/useBackgroundImage';
import bannerLg from '~/public/images/Banner.png';
import bannerXs from '~/public/images/Banner-sm.png';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const Banner = () => {
  const backgroundImage = useBackgroundImage(bannerLg, bannerXs);
  const handleExploreApps = () => {
    //TO BE DEFINED
  };

  return (
    <div
      className="flex lg:h-1/3 ml-5 mr-5 md:m-8 lg:mt-0 mt-5"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
      }}>
      <div className="flex p-6 lg:p-10">
        <div className="text-left w-full lg:w-1/2 mt-auto mb-auto">
          <h3 className={`${readexPro.className} text-left text-md lg:text-4xl text-cyan font-normal`}>
            Explore exciting apps from our ecosystem!
          </h3>
          <h5 className={`${readexPro.className} text-left w-3/4 text-sm lg:text-xl text-cyan font-extralight`}>
            Discover the best applications in the CARMEL ecosystem and learn how to get involved.
          </h5>
          <button
            onClick={handleExploreApps}
            className={`${readexPro.className} border border-cyan bg-cyan py-2 px-4 mt-24 lg:mt-4 md:w-48 text-black w-40 lg:w-auto`}>
            Explore Apps
          </button>
        </div>
      </div>
    </div>
  );
};
