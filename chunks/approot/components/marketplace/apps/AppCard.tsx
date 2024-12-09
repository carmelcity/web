import React from 'react';
import { useRouter } from 'next/router';
import { AppCardProps } from './props';
import Image from 'next/image';
import { Readex_Pro } from 'next/font/google';
import { Calendar } from '~/components/icons';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const AppCard = ({ data }: AppCardProps) => {
  const router = useRouter();
  const { image, title, id } = data;

  const handleClick = () => {
    // Use the router to navigate to the new route with the slug (id)
    router.push(`/marketplace/${id}`);
  };

  return (
    <div
      className="flex flex-col sm:w-52 mt-5 sm:mt-0 sm:mr-5 h-72 bg-dark-green/80 hover:cursor-pointer hover:bg-dark-green/70 border border-cyan/10 group hover:brightness-100"
      onClick={handleClick}>
      <Image src={image} alt="app" className="p-[0.7px] w-full max-h-48 brightness-75 group-hover:brightness-100" />
      <div className="p-2 mt-auto">
        <div className={`${readexPro.className} font-light text-sm truncate`}>{title}</div>
      </div>
      <div className="flex items-center p-2">
        <div className="h-5 w-8 rounded-lg bg-[#1D1E28] items-center justify-center flex">20</div>
        <div className="ml-auto">
          <Calendar />
        </div>
      </div>
    </div>
  );
};
