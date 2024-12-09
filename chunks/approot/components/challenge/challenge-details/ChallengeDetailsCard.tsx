import Image from 'next/image';
import { ChallengeSource } from '~/components/challenge/challenge-details/ChallengeSource';
import { Readex_Pro } from 'next/font/google';
import placeholder from '../../../images/userPlaceholder.svg';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const ChallengeDetailsCard = (props: any) => {
  const buttonText = () => {
    if (props.type === 'article') {
      return 'Read Article';
    }
    if (props.type === 'tweet') {
      return 'Read Tweet';
    }
    if (props.type === 'video') {
      return 'Watch Video';
    }
    return 'Watch';
  };

  return (
    <div className="block lg:flex bg-primary-background-blend mb-5 lg:mb-20 w-full lg:mt-20">
      <div className="relative lg:w-[200px] lg:h-[158px] h-[208px]">
        <Image src={props.photo} alt="card" className="object-fit" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="flex flex-col p-4 leading-normal text-left lg:w-3/4">
        <h4 className={`${readexPro.className} md:text-4xl tracking-tight text-gray-900 dark:text-white`}>
          {props.title}
        </h4>
        <ChallengeSource
          src={props.userPhoto || placeholder}
          alt="Author"
          author={props.author}
          type={props.type}
          source={props.source}
        />
      </div>
      <div className="mt-auto mb-auto mr-4 ml-4 lg:ml-auto text-right flex flex-col">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <button className="border border-cyan bg-transparent py-2 px-4 mb-4 lg:mb-0 lg:w-48 text-cyan font-bold w-full">
            {buttonText()} <span className="ml-1 text-cyan text-lg">&#8594;</span>
          </button>
        </a>
      </div>
    </div>
  );
};
