import Image from 'next/image';
import { useRouter } from 'next/router';
import { Readex_Pro } from 'next/font/google';
import { Orbitron } from 'next/font/google';
import placeholderImage from 'images/QuestsDetailsPlaceholder.png';

const orbitron = Orbitron({
  subsets: ['latin'],
});

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const DetailsCard = (props: any) => {
  const router = useRouter();

  return (
    <div className="sm:block md:flex bg-primary-background-blend mb-5 xxs:-ml-8 md:ml-0">
      <div className="sm:mb-0 sm:mr-4 flex justify-center">
        <Image
          src={props.photo || placeholderImage}
          alt="card"
          className="object-cover m-5 md:w-[110px] md:h-[110px] w-full h-[116px]"
        />
      </div>
      <div className="flex flex-col p-4 leading-normal text-left md:w-1/2">
        <h4 className={`${readexPro.className} md:text-4xl tracking-tight text-gray-900 dark:text-white`}>
          {props.title}
        </h4>
        <p className={`${readexPro.className} mb-3 text-sm font-thin text-cyan text-left`}>
          {props.shortDescription.length > 155
            ? props.shortDescription.substring(0, 155) + '...'
            : props.shortDescription}
        </p>
      </div>
      <div className="ml-auto mt-5 mr-5 mb-9 xxs:ml-5 md:ml-auto text-right flex flex-col">
        <div className="mt-auto">
          {props.complete && (
            <div className="flex flex-col sm:flex-row text-left mb-5">
              <p
                className={`${orbitron.className} hidden lg:flex text-l font-thin text-cyan mb-2 sm:mb-0 sm:mr-5 uppercase`}>
                + {props.reward}
              </p>
              <div className="flex m-auto mb-5">
                <span className={`${readexPro.className} mr-2 font-normal`}>COMPLETE</span>
                <span className="flex items-center justify-center bg-cyan w-6 h-6" style={{ top: '40%' }}>
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
          {!props.complete && (
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <button className="border border-cyan bg-transparent py-2 px-4 mb-4 md:w-48 text-cyan font-bold xxs:w-full">
                Get started <span className="ml-1 text-cyan text-lg">&#8594;</span>
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
