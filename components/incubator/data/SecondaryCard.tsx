import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Tags } from '~/components/tags';
import { readexPro } from '~/components/fonts'

export const SecondaryCard = (props: any) => {
  const router = useRouter();
  const handleDetails = () => {
    const url = {
      pathname: `/${props.slug}`,
    };

    router.push(url);
  };


  const Action = ()  => {
    return <div className="mt-8 lg:ml-auto flex flex-col">
    <div className="mt-auto mb-1 ">
      <button
        className="border border-cyan bg-transparent hover:bg-dark-green-secondary py-2 px-4 mb-4 text-cyan font-bold w-full"
        onClick={handleDetails}>
        TAKE&nbsp;THIS&nbsp;{props.type.toUpperCase()}<span className="ml-2 text-cyan text-lg">&#8594;</span>
      </button>
    </div>
  </div>
  } 
  
  return (
    <div className={`${props.containerClasses ?? ''} block lg:flex  mx-auto bg-primary-background-blend mb-4 mt-8 border w-full border-primary/50`}>
      <div className="relative lg:hidden h-48 flex">
        <Image src={props.imageLink} alt="card" className="object-cover h-full w-full" width={300} height={300}/>
      </div>
      <div className="relative w-96 hidden lg:flex">
        <Image src={props.thumbnailLink} alt="card" className="object-cover h-full w-full" width={300} height={300}/>
      </div>
      <div className="flex flex-col p-4 leading-normal text-left w-full">
        <h1 className={`${readexPro.className} text-3xl tracking-tight dark:text-white`}>{props.title}</h1>
        <Tags tags={props.tags || []} containerClass="mt-4" />
        <p className={`${readexPro.className} mb-3 text-sm font-thin text-gray-400 2xl:w-5/6 mt-4`}>
          {props.description.length > 200
            ? props.description.substring(0, 200) + '...'
            : props.description}
        </p>
       
       <div className='flex flex-col lg:flex-row'>
       <Action/>
       </div>

      </div>
     
    </div>
  );
}
