import Image from 'next/image';
import placeholder from '~/images/userPlaceholder.svg';
import Link from 'next/link';
import { readexPro } from '~/elements/fonts'

export const SimpleAvatar = (props: any) => {
  return (
    <div className="flex">
      <div
        className="w-10 h-10 z-10 mt-0.5 bg-dark-green-secondary"
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
      <div
        className="w-11 h-11 -ml-0.5 absolute bg-cyan"
        style={{
          clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
        }}></div>
    </div>
  );
}

export const ComplexAvatar = ({
  username,
  alt,
  profileImage,
  communityName,
}: any) => {
  return (
    <div className="flex">
      <Link href={`/${username.toLowerCase()}`} className="relative w-10 z-10 mt-0.5">
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
        <Link href={`/${username}`} className={`${readexPro.className} hover:underline text-white`}>
          {username?.length > 20 ? username.substring(0, 20) : username}
        </Link>
        <div className={`flex w-auto`}>
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
