import Image from 'next/image';
import { HexagonalAvatarTag } from '~/components/quests/HexagonalAvatarTag';
import { Readex_Pro } from 'next/font/google';
import { useRouter } from 'next/router';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const ChallengeCard = (props: any) => {
  const router = useRouter();

  const handleDetails = () => {
    const url = {
      pathname: `/challenges/${props.slug}`,
      query: props.slug,
    };

    router.push(url);
  };

  return (
    <div className="block lg:flex bg-primary-background-blend mb-5 w-full">
      <div className="relative lg:w-[200px] lg:h-[158px] h-[208px]">
        <Image src={props.photo} alt="card" className="object-fit" style={{ width: '100%', height: '100%' }} />
        <span
          className={`${readexPro.className} lg:hidden font-normal text-cyan py-2 px-4 absolute bg-black opacity-70 top-0 right-0`}>
          {props.reward}
        </span>
      </div>
      <div className="flex flex-col p-4 leading-normal text-left lg:w-3/4">
        <h4 className={`${readexPro.className} md:text-4xl tracking-tight dark:text-white`}>{props.title}</h4>
        <div className="flex mt-2">
          <HexagonalAvatarTag src={props.userPhoto} alt="User" nameTag={props.nameTag} />
          <div
            className={`${readexPro.className} font-thin mt-1 lg:mt-0 md:ml-16 px-2 py-1 h-8 lg:px-5 lg:py-2 lg:h-10 bg-dark-turquoise ml-auto`}>
            {props.tagText}
          </div>
          <span
            className={`${readexPro.className} hidden 2xl:inline-block font-thin text-cyan py-2 md:ml-16 font-bold`}>
            {props.reward}
          </span>
        </div>
      </div>
      {!props.isComplete && (
        <div className="mt-auto mb-auto mr-4 ml-4 lg:ml-auto text-right flex flex-col">
          <button
            className="border border-cyan bg-transparent py-2 px-4 mb-4 lg:mb-0 lg:w-48 text-cyan font-bold w-full"
            onClick={handleDetails}>
            View Details <span className="ml-1 text-cyan text-lg">&#8594;</span>
          </button>
        </div>
      )}
      {props.isComplete && (
        <div className="mt-auto mb-auto mr-4 ml-4 lg:ml-auto text-right flex flex-col">
          <div className="flex">
            <span className={`${readexPro.className} uppercase`}>{props.status}:</span>
            <span className={`${readexPro.className} ml-2 text-cyan`}>{props.score}</span>
            <span className="flex items-center justify-center bg-cyan w-6 h-6 ml-2" style={{ top: '40%' }}>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-dark-green-secondary"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"></path>
              </svg>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
