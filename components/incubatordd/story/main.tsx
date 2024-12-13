import React from 'react';
import Image from 'next/image';
import { HexagonalAvatarWithProperty } from '../../carmels/data/HexagonalAvatarWithProperty';
import { Readex_Pro } from 'next/font/google';
import { useRouter } from 'next/router';
import HexagonalAvatar from '~/components/avatars/HexagonalAvatar';
import { Tags } from '~/components/tags';
import DynamicIcon from '~/components/icons/Dynamic';
import Link from 'next/link';

const readex_pro = Readex_Pro({ subsets: ['latin'] })
const readexPro = Readex_Pro({ subsets: ['latin'] })

const Presentation = ({ logo, title, image, tags, hideTags, hideHeader }: any) => {
  return (
    <div className="flex flex-1 flex-col gap-4 px-4 py-5 bg-secondary">
      <div className="flex flex-wrap justify-between w-full">
        {!hideHeader && (
          <div className="flex items-center gap-4">
            <img src={logo} width={24} height={24} className="max-h-6 max-w-6" />
            <div className={`${readex_pro.className} text-2xl text-primary`}>{title}</div>
          </div>
        )}
        {!hideTags && (
          <Tags
            tags={tags}
            tagClass="!text-primary bg-secondary border-[#00FFFF3D] border-[1px]"
            containerClass="justify-start"
          />
        )}
      </div>
      <div className="flex items-center h-full">
        <img src={image} className="w-full h-auto" />
      </div>
    </div>
  );
};

const Description = ({ title, description, price }: any) => {
  return (
    <div
      className="
		flex flex-col justify-between items-start
		w-full md:w-[400px] p-6 backdrop-blur-md
		bg-gradient-to-r from-[#04615a] to-secondary
		">
      <div>
        <h2 className={`${readex_pro.className} text-3xl text-left mb-6`}>{title}</h2>
        <div className={`${readex_pro.className} text-left leading-8 text-secondary-grey`}>{description}</div>
      </div>
      <div className="flex flex-col items-start gap-4">
        <div className={`${readex_pro.className} text-primary text-lg`}>{price} $Carmel</div>
        <button className={`${readex_pro.className} bg-[#00FFFF] text-black py-2 px-6`} onClick={() => {}}>
          Available Now
        </button>
      </div>
    </div>
  );
};

const Card = (props: any) => {
  const router = useRouter();
  const handleDetails = () => {
    const url = {
      pathname: `/${props.slug}`,
    };

    router.push(url);
  };

  const people = [{}, {}, {}, {}, {}]

  const Action = ()  => {
    return  <div className="mt-8 lg:ml-auto text-right flex flex-col">
    {/* <div className="hidden lg:block">
      <h4 className={`${readexPro.className} font-thin text-cyan`}>Rewards:</h4>
      <h4 className={`${readexPro.className} text-3xl tracking-tight text-cyan`}>{props.reward}</h4>
    </div> */}
    <div className="mt-auto mb-1 ">
      <button
        className="border border-cyan bg-transparent hover:bg-dark-green-secondary py-2 px-4 mb-4 lg:w-48 text-cyan font-bold w-full"
        onClick={handleDetails}>
        Join this Carmel <span className="ml-1 text-cyan text-lg">&#8594;</span>
      </button>
    </div>
  </div>
  } 
  
  const Author = () => {
    return   <div className="flex flex-row mt-auto mb-1">
    <HexagonalAvatarWithProperty
      profileImage={props.authorImageLink}
      alt="User"
      username={props.username}
      appName={props.property}
      appLogo={props.propertyLogo}
      communityName={props.communityName}
    />
    <div className="w-full"/>
         <Link href={"/"}>
            <div className="ml-2 flex justify-center text-primary items-center cursor-pointer mt-1">
              <DynamicIcon name={"ChatBubbleOvalLeftEllipsisIcon"} width={24} height={24} />
              <span className='text-primary p-1'>12</span>
            </div>
        </Link>            
        <Link href={"/"}>
            <div className="ml-2 flex justify-center text-primary items-center cursor-pointer mt-1">
              <DynamicIcon name={"HandThumbUpIcon"} width={24} height={24} />
              <span className='text-primary p-1'>42</span>
            </div>
        </Link>  
        <Link href={"/"}>
            <div className="ml-2 flex justify-center text-primary items-center cursor-pointer mt-1">
              <DynamicIcon name={"HandThumbDownIcon"} width={24} height={24} />
              <span className='text-primary p-1'>3</span>
            </div>
        </Link>            
    {/* <div
      className={`${readexPro.className} font-thin md:ml-8 px-2 py-1 h-8 lg:px-5 lg:py-2  lg:h-10 bg-dark-turquoise ml-auto`}>
      {props.tagText}
    </div>
    <span className={`${readexPro.className} hidden 2xl:flex font-thin text-cyan py-2 md:ml-8 font-bold`}>
      {props.info}
    </span> */}
  </div>
  }
  const People = () => {
    return <div className="flex flex-row w-full pl-4 mt-4 lg:mt-0 items-center justify-start">
      { people.map((p: any, i: number) => <div key={`${i}-num`} className='-ml-2 z-10'><HexagonalAvatar src={props.authorImageLink} className=""/></div>)}
<div className="flex items-center justify-center ml-3 mt-1">
  <span className="text-cyan text-sm font-bold"> +3 more talking </span>
</div>
</div>
  }
  return (
    <div className={`${props.containerClasses ?? ''} block lg:flex  mx-auto bg-primary-background-blend mb-4 mt-8 border border-primary/50`}>
      <div className="relative lg:hidden h-48 flex">
        <Image src={props.imageLink} alt="card" className="object-cover h-full w-full" width={300} height={300}/>
      </div>
      <div className="relative w-96 hidden lg:flex">
        <Image src={props.thumbnailLink} alt="card" className="object-cover h-full w-full" width={300} height={300}/>
      </div>
      <div className="flex flex-col p-4 leading-normal text-left w-full">
        <h4 className={`${readexPro.className} text-xl lg:text-2xl tracking-tight dark:text-white`}>{props.title}</h4>
        <Author/>
        <Tags tags={props.tags || []} containerClass="mt-4" />
        {/* <div className={`flex lg:hidden items-center`}>
          <h4 className={`${readexPro.className} text-cyan font-thin`}>Rewards:</h4>
          <h4 className={`${readexPro.className} text-xl font-normal ml-5 text-cyan`}>{props.reward}</h4>
        </div> */}
        <p className={`${readexPro.className} mb-3 text-sm font-thin text-gray-400 2xl:w-5/6 mt-4`}>
          {props.description.length > 200
            ? props.description.substring(0, 200) + '...'
            : props.description}
        </p>
       
       <div className='flex flex-col lg:flex-row'>
        <People/>
        <Action/>
        </div>

      </div>
     
    </div>
  );
};

export const Main = ({
  logo,
  titlePresentation,
  image,
  tags,
  titleDescription,
  description,
  price,
  reverse,
  hideTags,
  hideHeader,
}: any) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'flex-row-reverse md:flex-row-reverse' : ''}`}>
      <Presentation
        logo={logo}
        title={titlePresentation}
        image={image}
        tags={tags}
        hideTags={hideTags}
        hideHeader={hideHeader}
      />
      <Description title={titleDescription} description={description} price={price} />
      <Card/>
    </div>
  );
};