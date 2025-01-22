import Image from 'next/image';
import placeholder from '~/images/userPlaceholder.svg';
import Link from 'next/link';
import { readexPro } from '~/elements/fonts'

export const SimpleAvatar = (props: any) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-11 h-11 bg-cyan z-10"
        style={{
          clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
        }}/>
      <div
        className="w-10 h-10 z-20 bg-dark-green-secondary absolute mt-0.5"
        style={{
          clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
        }}>
        <Image
          src={props.src || placeholder}
          alt={props.alt ?? ''}
          width={10}
          height={10}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}


export const Chunky = (props: any) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-11 h-11 bg-primary z-10"
        style={{
          clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
        }}/>
      <div
        className="w-10 h-10 z-20 bg-dark-green-secondary absolute mt-0.5"
        style={{
          clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
        }}>
        <Image
          src={`http://files.chunky.io/main/carmel/accounts/chunky/avatar.png`}
          alt={'chunky'}
          width={10}
          height={10}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}


export const ChunkyLarge = (props: any) => {
  return (
    <div className="flex flex-col items-center">
      
      <div
        className="-mt-24">
        <Image
          src={`http://files.chunky.io/main/carmel/accounts/chunky/avatar.png`}
          alt={'chunky'}
          width={100}
          height={100}
          className="mask mask-hexagon"
        />
      </div>
    </div>
  );
}

export const ComplexAvatar = ({
  username,
  noCommunityLink,
  alt,
  profileImage,
  communityName,
}: any) => {
  return (
    <div className="flex">
      <SimpleAvatar src={profileImage || placeholder}/>
      <div className={`${readexPro.className} block items-center font-normal justify-center ml-3 max-w-1/2`}>
        <Link href={`/${username}`} className={`${readexPro.className} hover:underline text-white`}>
          {username?.length > 20 ? username.substring(0, 20) : username}
        </Link>
        <div className={`flex w-auto`}>
          <Link
            href={`/${noCommunityLink ? username : communityName}`}
            className={`${readexPro.className} text-xs text-cyan text-s font-thin hover:underline`}>
            {communityName}
          </Link>
        </div>
      </div>
    </div>
  );
};
