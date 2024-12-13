import Image from 'next/image';
import placeholder from '~/images/userPlaceholder.svg';
import { Readex_Pro } from 'next/font/google';
import Link from 'next/link';
import { HexagonalAvatarProps } from './props';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const HexagonalAvatarWithProperty = ({
  username,
  appLogo,
  appName,
  alt,
  profileImage,
  communityName,
}: HexagonalAvatarProps) => {
  return (
    <div className="flex">
      <Link href={`/${username.toLowerCase()}`} className="relative w-10 z-10 mt-0.5">
        {/* <div className="absolute bottom-0 -right-2 w-6 h-6 z-10 bg-center bg-no-repeat">
          <Image src={appLogo} alt={alt} className="object-fit w-full h-full" width={300} height={300} />
        </div> */}
        <div
          className="w-10 h-10 bg-dark-green-secondary"
          style={{
            clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
          }}>
          <Image src={profileImage || placeholder} alt={alt} className="object-fit w-full h-full" width={300} height={300}/>
        </div>
      </Link>
      <div
        className="w-11 h-11 -ml-0.5 absolute bg-cyan"
        style={{
          clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
        }}></div>

      <div className={`${readexPro.className} block items-center font-normal justify-center ml-3 max-w-1/2`}>
        {/* Covered the case where the username is way too big */}
        <Link
          href={`/${username.toLowerCase()}`}
          className={`${readexPro.className} xxs:hidden xs:flex hover:underline text-white`}>
          {username?.length > 28 ? username.substring(0, 28) : username}
        </Link>
        <Link href={`/${username}`} className={`${readexPro.className} xxs:flex xs:hidden hover:underline text-white`}>
          {username?.length > 20 ? username.substring(0, 20) : username}
        </Link>
        <div className={`flex w-auto`}>
          {/* <span className={`${readexPro.className} text-xs text-gray-400 font-thin flex`}></span> */}
          <Link
            href={`/${communityName}`}
            className={`${readexPro.className} text-xs text-cyan text-s font-thin hover:underline`}>
            {communityName}
          </Link>
        </div>
      </div>
    </div>
  );
};
