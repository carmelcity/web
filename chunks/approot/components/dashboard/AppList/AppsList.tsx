import Image from 'next/image';

import { Readex_Pro } from 'next/font/google';
import { AppsListPlaceholder } from '~/components/placeholders/AppsList';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

type AppsListProps = {
  data: any;
  isLoading: boolean;
};

export const AppsList = ({ data, isLoading }: AppsListProps) => {
  const handleAppClick = (app: any) => {
    // Do something with the clicked app data
  };

  if (isLoading) {
    return <AppsListPlaceholder />;
  }

  return (
    <div className="h-screen">
      {data?.map((item: any, index: number) => (
        <div className="m-8" key={index}>
          <div
            className={`${readexPro.className} text-md lg:text-xl w-full mr-auto text-left flex items-center text-cyan mb-2`}>
            <Image src={item.icon} alt="category" className="mr-5" />
            {item.category}
          </div>
          <div className="flex flex-wrap bg-transparent py-3 h-auto w-full border-t-1 border-b-1 border-r-0 border-l-0 border border-dark-green-secondary">
            {item.apps.map((app: any, key: number) => (
              <div
                key={key}
                className={`${readexPro.className} flex justify-center items-center mt-1 mr-4 w-16 lg:mt-5 lg:mr-5 lg:w-32 lg:h-32 flex-col gap-2 lg:mb-5`}>
                <Image src={app.icon} alt="app" className="h-12 w-12 lg:h-32 lg:w-32" />
                <span className={`${readexPro.className} font-thin lg:font-light text-xs lg:text-md`}>{app.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
