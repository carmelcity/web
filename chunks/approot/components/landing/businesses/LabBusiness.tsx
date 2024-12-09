import Image from 'next/image';
import React from 'react';
import Explore from '../explore';
import Check from '../explore/check';
import { useRouter } from 'next/router';

const props = {
  header: 'Sell Services',
  title: 'Launch a Carmel Lab.',
  description:
    'Get together in a team of professionals and offer services to Studios to help them build products. Get paid for jobs completed.',
  hideButton: false,
  featured: {
    image: '/images/devdads.png',
    title: 'asdfadfadf',
  },
  image: '/images/lab-intro.png',
  buttonTitle: 'Pre-Order Your Lab Name',
  children: (
    <div className="flex flex-col gap-3 text-left">
      <Check text="Take on Jobs from Studios to create custom product functionality." />
      <Check text="Get paid per jobs completed not per time spent." />
      <Check text="Also create Chunks and sell them on the Carmel Marketplace." />
      <Check text="Earn royalties when your Chunks are purchased by Studios." />
      <Check text="Work on your own time and manage your team as you see fit." />
    </div>
  ),
};

export const LabBusiness = ({ text }: any) => {
  const router = useRouter();

  const handleEarlyAccessClick = () => {
    router.push('/access/reserve');
  };

  return (
    <div className="relative flex flex-col">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <Explore {...props} buttonClickHandler={handleEarlyAccessClick} moreClasses="relative z-20 xxs:m-5 lg:m-0" />
        </div>
        <div className="lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 flex flex-col items-center justify-center">
          <Image
            className="aspect-[2/2] w-full object-cover shadow-2xl shadow-slate-700 rounded-2xl"
            width={300}
            height={300}
            src={props.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
