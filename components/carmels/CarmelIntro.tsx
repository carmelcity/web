import Image from 'next/image';
import EditIcon from '~/images/dashboard/EditIcon.webp';
import PhotoIcon from '~/images/dashboard/PhotoIcon.webp';
import { readex_pro } from '~/components/fonts'
import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
import { HexagonalAvatarWithProperty } from '~/components/avatars/HexagonalAvatarWithProperty';
import { useRouter } from 'next/router';
import HexagonalAvatar from '~/components/avatars/HexagonalAvatar';
import { Tags } from '~/components/tags';
import DynamicIcon from '~/components/icons/Dynamic';
import { readexPro } from '~/components/fonts'

const BANNER_PLACEHOLDER = `/images/bg-1.png`
const PROFILE_PLACEHOLDER = `/images/profile_placeholder.webp`

const Engagements = (props: any) => {
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

const People = (props: any) => {
  return <div className="h-20 px-8 flex flex-row items-center">
    { props.people.slice(0, props.size).map((p: any, i: number) => <div key={`${i}-num`} className='-ml-2 z-10'><HexagonalAvatar src={p.image} className=""/></div>) }
        <div className="flex items-center justify-center ml-3 mt-1">
          <span className="text-gray-300 text-sm font-bold"> 
            { props.people.length > props.size ? `+${props.people.length - props.size}&nbsp;more people` : `${props.people.length} people` }
          </span> 
        </div>
  </div>
}

const Author = (props: any) => {
  return <div className="flex flex-row mt-auto mb-1">
    <HexagonalAvatarWithProperty
      profileImage={props.authorImage}
      alt="User"
      username={props.author}
      communityName={props.community}
    />           
  </div>
}

const BannerImage = ({ isLoading, isEditable, image, onEdit, children }: any) => {
    return <div
        className={`
          ${isLoading && 'animate-pulse'}
          w-full flex justify-center
          bg-cover bg-no-repeat bg-center relative h-60 xs:h-80 z-10
          border border-primary/20
        `}
        style={{ backgroundImage: `url(${image})` }}>
        {isEditable && (
          <div
            className={`${readex_pro.className} flex text-white bg-black bg-opacity-40 p-3 font-thin cursor-pointer absolute items-center mt-5 sm:bottom-4 right-4 border border-1 border-cyan`}
            onClick={onEdit}>
            <Image src={PhotoIcon} alt="photo"/>
            <span className={`${readex_pro.className} ml-2 font-normal `}>Change Cover</span>
          </div>
        )}
        { children }
      </div>
  }

  const Summary = ({ isEditable, bio }: any) => {
    if (!isEditable) {
      return <div className="mb-12 relative z-10 w-full items-start flex flex-col">
                <div className={`${readex_pro.className} font-thin text-gray-400 text-left text-lg mt-5 mb-0`}>
                    { bio }
                </div>
              </div>
    }

    return <div className="mb-12 relative z-10 w-full items-start flex flex-col px-2 ">
                <div className={`${readex_pro.className} font-thin text-grey mt-5 mb-0`}>
                  Update your bio
                </div>
                <textarea
                  defaultValue={bio}
                  name="bio"
                  className={`${readex_pro.className} border border-opacity-10 text-left p-2 bg-secondary mt-2 w-full h-48 border-primary/50`}
                />
      </div>
  }

export const CarmelIntro = ({
    isLoading, carmel
  }: any) => {

    if (isLoading) {
      return <ProfileHeaderPlaceholder/>
    }

    const onBannerEdit = () => {

    }

    return <div className={`flex flex-col justify-start relative bg-black/80 border-b border-primary/20 mb-8 w-full`}>
         <BannerImage 
            isLoading={isLoading} 
            image={carmel.banner} 
            isEditable={false} 
            onEdit={onBannerEdit}>
          </BannerImage>
         
          <div className="flex flex-col p-4 leading-normal text-left w-full">
        <h4 className={`${readexPro.className} text-xl lg:text-2xl tracking-tight dark:text-white`}>{carmel.title}</h4>
        <div className='flex flex-row'>
            <Author {...carmel}/>
        </div>
        <Tags tags={carmel.tags || []} containerClass="mt-4" />
        <p className={`${readexPro.className} mb-3 text-lg font-thin text-gray-400 2xl:w-5/6 mt-4`}>
          {carmel.intro }
        </p>
       
       <div className='flex flex-col items-center lg:flex-row'>
          <Engagements {...carmel}/>
          <People size={5} {...carmel}/>
        </div>
      </div>
      </div>
}



 


//   return (
//     <div className={`${props.containerClasses ?? ''} block lg:flex  mx-auto bg-primary-background-blend mb-4 mt-8 border border-primary/50`}>
//       <div className="relative lg:hidden h-48 flex">
//         <Image src={props.banner} alt="card" className="object-cover h-full w-full" width={300} height={300}/>
//       </div>
//       <div className="relative w-96 hidden lg:flex">
//         <Image src={props.thumbnail} alt="card" className="object-cover h-full w-full" width={300} height={300}/>
//       </div>
     
     
//     </div>
//   );
// };
