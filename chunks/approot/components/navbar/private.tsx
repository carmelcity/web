import React from 'react';
import {
  AcademicCapIcon,
  DocumentTextIcon,
  IdentificationIcon,
  ListBulletIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/solid';
import { isMobile } from 'react-device-detect';
import { useRouter } from 'next/router';
import Link from 'next/link';

const IconButton = (props: any) => {
  const Icon = props.icon;
  const size = isMobile ? 6 : 8;
  const padding = isMobile ? 0 : 8;
  const selected = props.pathname === props.link;

  return (
    <div
      className={`flex flex-${isMobile ? 'col' : 'row'} justify-center items-center align-center ${
        selected ? 'border-b-2' : ''
      } pb-2`}>
      <a
        href={props.link}
        className={` ${isMobile ? '' : 'tooltip tooltip-bottom'} btn btn-${
          selected ? 'ghost' : 'ghost'
        } rounded-full text-white border`}>
        <Icon className={`h-${size} w-${size} lg:m-4 lg:mt-2`} />
      </a>
    </div>
  );
};

const Logo = () => {
  return (
    <Link className="lg:ml-4 btn-ghost rounded-full" href="/">
      <img src="/images/logo/logo-white-with-white-text.svg" alt="logo" className="h-12 hidden md:block" />
      <img src="/images/logo/logo-white.svg" alt="logo" className="h-16 lg:hidden" />
    </Link>
  );
};

const Account = ({ user }: any) => {
  const imgUrl = '/images/avatar.jpeg';
  return (
    <Link className={`btn btn-ghost rounded-full lg:mr-4 relative z-10 avatar`} href="/me">
      {isMobile || <span className="mr-2"> {user.username} </span>}
      <div className="mask mask-hexagon bg-primary border-2 border-white-color w-12 h-12">
        <img src={imgUrl} className={`mask lg:w-12 lg:h-12 w-6 h-6 mask-hexagon`} />
      </div>
    </Link>
  );
};

export default (props: any) => {
  const router = useRouter();
  const { pathname } = router;
  const { carmel } = props;
  const { user } = carmel.auth.account;

  const Items = [
    <IconButton key={0} pathname={pathname} link="/" title={'Apps'} primary icon={Squares2X2Icon} />,
    <IconButton key={1} pathname={pathname} link="/quests" title={'Quests'} primary icon={ListBulletIcon} />,
    <IconButton key={2} pathname={pathname} link="/challenges" title={'Challenges'} primary icon={AcademicCapIcon} />,
    <IconButton key={3} pathname={pathname} link="/posts" title={'Posts'} primary icon={DocumentTextIcon} />,
  ];

  return (
    <header className="navbar bg-base-100 sticky top-0 z-50 w-full h-20 bg-black/40 backdrop-blur-xl flex justify-center items-center border-b border-primary-color">
      <div className="navbar-start">
        <Logo />
      </div>
      <div className="navbar-center">
        {Items[0]}
        {Items[1]}
        {Items[2]}
        {Items[3]}
      </div>
      <div className="navbar-end">
        <Account user={user} />
      </div>
    </header>
  );
};
