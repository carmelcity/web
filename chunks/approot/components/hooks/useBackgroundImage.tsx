import { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

export const useBackgroundImage = (urlLg: StaticImageData, urlXs: StaticImageData) => {
  const [bgImage, setBgImage] = useState<string>('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBgImage(urlXs.src);
      } else {
        setBgImage(urlLg.src);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return bgImage;
};
