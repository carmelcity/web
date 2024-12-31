import React from 'react';
import Image from 'next/image';
import { HexagonalAvatarWithProperty } from './HexagonalAvatarWithProperty';
import { useRouter } from 'next/router';
import HexagonalAvatar from '~/components/avatars/HexagonalAvatar';
import { Tags } from '~/components/tags';
import DynamicIcon from '~/components/icons/Dynamic';
import Link from 'next/link';
import { readexPro } from '~/components/fonts'

export const MainCard = (props: any) => {
  const router = useRouter();
  const handleDetails = () => {
    const url = {
      pathname: `/${props.username}`,
    }

    router.push(url);
  }

  const people = [{}, {}, {}, {}, {}]

  const Action = ()  => {
    let verb = "VIEW"

    switch(props.type) {
      case "tutorial":
      case "challenge":
        verb = "TAKE"
    }

    return <div className="mt-8 flex flex-col">
    <div className="mt-auto mb-1">
      <button
        className="border border-cyan bg-transparent hover:bg-dark-green-secondary py-2 px-4 mb-4 text-cyan font-bold w-full"
        onClick={handleDetails}>
        {verb}&nbsp;{props.type.toUpperCase()}<span className="ml-2 text-cyan text-lg">&#8594;</span>
      </button>
    </div>
  </div>
  } 
  
  const People = () => {
    return <div className="flex flex-row w-full pl-4 mt-4 lg:mt-0 items-center justify-start">
      { people.map((p: any, i: number) => <div key={`${i}-num`} className='-ml-2 z-10'><HexagonalAvatar src={props.authorImageLink} className=""/></div>)}
<div className="flex items-center justify-center ml-3 mt-1">
  <span className="text-cyan text-sm font-bold"> +3 more members </span>
</div>
</div>
  }
  return (
    <div className={`${props.containerClasses ?? ''} block lg:flex w-full mx-auto bg-primary-background-blend mb-4 mt-8 border border-primary/50`}>
      <div className="relative lg:hidden h-48 flex">
        <Image src={props.banner} alt="card" className="object-cover h-full w-full" width={300} height={300}/>
      </div>
      <div className="relative w-96 hidden lg:flex">
        <Image src={props.profile} alt="card" className="object-cover h-full w-full" width={300} height={300}/>
      </div>
      <div className="flex flex-col p-4 leading-normal text-left w-full">
        <h1 className={`${readexPro.className} text-3xl mt-4 tracking-tight dark:text-white`}>{props.username}</h1>
        {/* <Author/> */}
        <Tags tags={props.tags || []} containerClass="mt-4" />
        {/* <div className={`flex lg:hidden items-center`}>
          <h4 className={`${readexPro.className} text-cyan font-thin`}>Rewards:</h4>
          <h4 className={`${readexPro.className} text-xl font-normal ml-5 text-cyan`}>{props.reward}</h4>
        </div> */}
        <p className={`${readexPro.className} h-20 mb-3 text-lg font-thin text-gray-400 2xl:w-5/6 mt-4`}>
          {props.bio.length > 200
            ? props.bio.substring(0, 200) + '...'
            : props.bio}
        </p>
       
       <div className='flex flex-col lg:flex-row items-start align-start justify-start'>
       <Action/>
       </div>

      </div>
     
    </div>
  );
};
