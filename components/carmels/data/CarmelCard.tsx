import Image from 'next/image';
import { HexagonalAvatarWithProperty } from '../../avatars/HexagonalAvatarWithProperty';
import { useRouter } from 'next/router';
import HexagonalAvatar from '~/components/avatars/HexagonalAvatar';
import { Tags } from '~/components/tags';
import DynamicIcon from '~/components/icons/Dynamic';
import Link from 'next/link';
import { readexPro } from '~/components/fonts'

export const CarmelCard = (props: any) => {
  const router = useRouter();
  const handleDetails = () => {
    const url = {
      pathname: `/${props.carmelId}`,
    };

    router.push(url);
  };

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
        View Carmel <span className="ml-1 text-cyan text-lg">&#8594;</span>
      </button>
    </div>
  </div>
  } 
  
  const Engagements = () => {
    return <div className="flex h-20 mr-2 flex-row items-center">
            <div className="ml-2 flex justify-center text-primary items-center mt-1 ">
              <DynamicIcon name={"ChatBubbleOvalLeftEllipsisIcon"} width={24} height={24} />
              <span className='text-text-gray-300 px-1'>{ props.comments }</span>
              <span className='text-text-gray-300'>comments</span>
            </div>
            <div className="ml-2 flex justify-center text-primary items-center mt-1">
              <DynamicIcon name={"HandThumbUpIcon"} width={24} height={24} />
              <span className='text-white p-1'>{ props.upVotes }</span>
            </div>
            <div className="ml-2 flex justify-center text-primary items-center mt-1">
              <DynamicIcon name={"HandThumbDownIcon"} width={24} height={24} />
              <span className='text-white p-1'>{ props.downVotes } </span>
            </div>
    </div>
  }
  const Author = () => {
    return <div className="flex flex-row mt-auto mb-1">
      <HexagonalAvatarWithProperty
        profileImage={props.authorImage}
        alt="User"
        username={props.author}
        appName={props.property}
        appLogo={props.propertyLogo}
        communityName={props.community}
      />           
    {/* <div
      className={`${readexPro.className} font-thin md:ml-8 px-2 py-1 h-8 lg:px-5 lg:py-2  lg:h-10 bg-dark-turquoise ml-auto`}>
      {props.tagText}
    </div>
    <span className={`${readexPro.className} hidden 2xl:flex font-thin text-cyan py-2 md:ml-8 font-bold`}>
      {props.info}
    </span> */}
  </div>
  }

  const People = ({ size }: any) => {
    return <div className="h-20 px-8 flex flex-row items-center">
      { props.people.slice(0, size).map((p: any, i: number) => <div key={`${i}-num`} className='-ml-2 z-10'><HexagonalAvatar src={p.image} className=""/></div>) }
          <div className="flex items-center justify-center ml-3 mt-1">
            <span className="text-gray-300 text-sm font-bold"> 
              { props.people.length > size ? `+${props.people.length - size}&nbsp;more people` : `${props.people.length} people` }
            </span> 
          </div>
    </div>
  }

  return (
    <div className={`${props.containerClasses ?? ''} block lg:flex  mx-auto bg-primary-background-blend mb-4 mt-8 border border-primary/50`}>
      <div className="relative lg:hidden h-48 flex">
        <Image src={props.banner} alt="card" className="object-cover h-full w-full" width={300} height={300}/>
      </div>
      <div className="relative w-96 hidden lg:flex">
        <Image src={props.thumbnail} alt="card" className="object-cover h-full w-full" width={300} height={300}/>
      </div>
      <div className="flex flex-col p-4 leading-normal text-left w-full">
        <h4 className={`${readexPro.className} text-xl lg:text-2xl tracking-tight dark:text-white`}>{props.title}</h4>
        <div className='flex flex-row'>
            <Author/>
        </div>
        <Tags tags={props.tags || []} containerClass="mt-4" />
        <p className={`${readexPro.className} mb-3 text-lg font-thin text-gray-400 2xl:w-5/6 mt-4`}>
          {props.intro.length > 200
            ? props.intro.substring(0, 200) + '...'
            : props.intro}
        </p>
       
       <div className='flex flex-col items-center lg:flex-row'>
          <Engagements/>
          <People size={5}/>
          <Action/>
        </div>

      </div>
     
    </div>
  );
};
