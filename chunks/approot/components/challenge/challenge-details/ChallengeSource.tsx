import Image from 'next/image';
import placeholder from '~/images/userPlaceholder.svg';
import TwitterIcon from '~/images/TwitterIcon.svg';
import YouTubeIcon from '~/images/YouTubeIcon.svg';
import { Readex_Pro } from 'next/font/google';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const ChallengeSource = (props: any) => {
  switch (props.type) {
    case 'article':
      return (
        <div className="flex mt-2 mb-2">
          <div
            className="w-8 h-8 md:w-10 md:h-10 z-10 mt-0.5 bg-dark-green-secondary"
            style={{
              clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
            }}>
            <Image src={props.src || placeholder} alt={props.alt} className="object-cover w-full h-full" />
          </div>
          <div
            className={`w-9 h-9 md:h-11 md:w-11 -ml-0.5 absolute bg-cyan`}
            style={{
              clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
            }}></div>
          <div
            className={`${readexPro.className} flex ml-3 text-xs lg:text-sm items-center justify-center text-gray-400`}>
            {props.author}
          </div>
          <div className={`${readexPro.className} flex items-center ml-auto lg:ml-10 text-xs lg:text-sm text-gray-400`}>
            {props.source}
          </div>
        </div>
      );
    case 'tweet':
      return (
        <div className="flex mt-2 mb-2">
          <Image src={TwitterIcon} alt={'tweet'} />
          <div className="px-5 py-2 text-gray-400">{props.source}</div>
        </div>
      );
    case 'video':
      return (
        <div className="flex items-center mt-2 mb-2">
          <Image src={YouTubeIcon} alt={'video'} className="mb-1" />
          <div className="px-5 py-2 text-gray-400">{props.source}</div>
        </div>
      );
    default:
      return <div></div>;
  }
};
