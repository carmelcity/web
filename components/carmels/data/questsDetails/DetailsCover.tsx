import Image from 'next/image';
import { Readex_Pro } from 'next/font/google';
import { HexagonalAvatarTag } from '../HexagonalAvatarTag';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const DetailsCover = (props: any) => {
  return (
    <div className="relative flex items-center justify-center w-full h-[500px] overflow-hidden">
      <div className="relative z-30 w-full p-5 bg-black text-2xl text-white bg-opacity-70 h-full grid place-items-center">
        <div className="flex flex-col items-start p-4 leading-normal text-left lg:w-2/3">
          <h3 className={`${readexPro.className} lg:text-6xl`}>{props.title}</h3>
          <p className={`${readexPro.className} mb-3 text-xl font-normal text-gray-700 dark:text-gray-400`}>
            {props.description}
          </p>
          <div className="flex mt-2">
            <HexagonalAvatarTag src={props.userPhoto} nameTag={'nametag'} alt="user" />
          </div>
        </div>{' '}
      </div>
      <Image
        src={props.coverImage}
        alt="Product Image"
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        style={{ width: '100%', height: '100%' }}
        quality={100}
      />
    </div>
  );
};
