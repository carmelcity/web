import Image from 'next/image';
import React from 'react';
import Explore from '../explore';
import Check from '../explore/check';
import { useRouter } from 'next/router';

const props = {
  header: 'Connect',
  title: 'Join Carmel Communities',
  description: '',
  hideButton: false,
  featured: {
    image: '/images/devdads.png',
    title: 'asdfadfadf',
  },
  image: '/images/community-intro5.png',
  buttonTitle: 'Start by reserving your account',
  children: (
    <div className="flex flex-col gap-3 text-left">
      <Check text="Community members self-organize based on shared values" />
      <Check text="Collaborate to advance a common mission together" />
      <Check text="Publish content that aligns with community values" />
      <Check text="Help moderate content and vote on community issues" />
      <Check text="All content is always online with Carmel Forever™ permanent storage" />
    </div>
  ),
};

export const CommunityBusiness = ({ text }: any) => {
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
