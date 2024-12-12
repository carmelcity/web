import Image from 'next/image';
import { HexagonalAvatarWithProperty } from './HexagonalAvatarWithProperty';
import { Readex_Pro } from 'next/font/google';
import { useRouter } from 'next/router';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const QuestCard = (props: any) => {
  const router = useRouter();

  const handleDetails = () => {
    const url = {
      pathname: `/${props.slug}`,
    };

    router.push(url);
  };

  return (
    <div className={`${props.containerClasses ?? ''} block lg:flex lg:h-72 mx-auto bg-primary-background-blend mb-5`}>
      {/* <div className="lg:w-96 lg:h-full relative">
        <Image src={props.photo} alt="card" className="object-fit lg:h-full w-full" />
      </div> */}
      <div className="flex flex-col p-4 leading-normal text-left lg:w-2/3">
        <h4 className={`${readexPro.className} 2xl:w-5/6 md:text-4xl tracking-tight dark:text-white`}>{props.title}</h4>
        <div className={`flex lg:hidden items-center`}>
          <h4 className={`${readexPro.className} text-cyan font-thin`}>Rewards:</h4>
          <h4 className={`${readexPro.className} text-xl font-normal ml-5 text-cyan`}>{props.reward}</h4>
        </div>
        <p className={`${readexPro.className} mb-3 text-sm font-thin text-gray-400 2xl:w-5/6`}>
          {props.shortDescription.length > 155
            ? props.shortDescription.substring(0, 155) + '...'
            : props.shortDescription}
        </p>
        <div className="flex mt-auto mb-1">
          <HexagonalAvatarWithProperty
            profileImage={props.userPhoto}
            alt="User"
            username={props.username}
            appName={props.property}
            appLogo={props.propertyLogo}
            communityName="community"
          />
          <div
            className={`${readexPro.className} font-thin md:ml-8 px-2 py-1 h-8 lg:px-5 lg:py-2  lg:h-10 bg-dark-turquoise ml-auto`}>
            {props.tagText}
          </div>
          <span className={`${readexPro.className} hidden 2xl:flex font-thin text-cyan py-2 md:ml-8 font-bold`}>
            {props.info}
          </span>
        </div>
      </div>
      <div className="mt-5 mr-4 ml-4 lg:ml-auto text-right flex flex-col">
        <div className="hidden lg:block">
          <h4 className={`${readexPro.className} font-thin text-cyan`}>Rewards:</h4>
          <h4 className={`${readexPro.className} text-3xl tracking-tight text-cyan`}>{props.reward}</h4>
        </div>
        <div className="mt-auto mb-1">
          <button
            className="border border-cyan bg-transparent py-2 px-4 mb-4 lg:w-48 text-cyan font-bold w-full"
            onClick={handleDetails}>
            View Details <span className="ml-1 text-cyan text-lg">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
};
