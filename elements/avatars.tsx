import Image from 'next/image';
import placeholder from '~/images/userPlaceholder.svg';
import Link from 'next/link';
import { readexPro } from '~/elements/fonts'
import { getImageUrl } from '~/utils/main'

export const SimpleAvatar = (props: any) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-12 h-12 bg-primary/30 z-10"
        style={{
          clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
        }}/>
      <div
        className="w-10 h-10 z-20 bg-primary absolute m-1"
        style={{
          clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
        }}>
        <Image
          src={props.src || placeholder}
          alt={props.alt ?? ''}
          width={10}
          height={10}
          className="object-cover w-10 h-10 border-4 border-white"
        />
      </div>
    </div>
  );
}

// export const LargeAvatar = (props: any) => {
//   return (
//     <div className="flex flex-col items-center border">
//       {/* <div
//         className="w-20 h-20 bg-primary/30 z-10"
//         style={{
//           // clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
//         }}/> */}
//       {/* <div
//         className="z-20 bg-primary absolute"
//         style={{
//           // clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
//         }}> */}
//         <Image
//           src={props.src || placeholder}
//           alt={props.alt ?? ''}
//           width={100}
//           height={100}
//           className="object-cover w-40 h-40"
//         />
//       </div>
//     </div>
//   );
// }


export const LargeAvatar = (props: any) => {
  return (
    <div className="flex flex-col items-center">
        <Image
          src={props.src || placeholder}
          alt={props.alt ?? ''}
          width={100}
          height={100}
          className="object-cover w-32 h-32 mask mask-hexagon"
        />
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
        className="w-10 h-10 z-20 bg-dark-green-secondary mt-0.5"
        style={{
          clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
        }}>
        <Image
          src={getImageUrl(`chunky`)}
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
          src={getImageUrl(`chunky`)}
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
    <div className="flex flex-row">
      <div className="flex">
      <SimpleAvatar src={profileImage || placeholder}/>
      </div>
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
