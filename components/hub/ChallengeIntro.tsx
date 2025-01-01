import Image from 'next/image';
import PhotoIcon from '~/images/dashboard/PhotoIcon.webp';
import { readex_pro } from '~/components/fonts'
import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
import { Tags } from '~/components/tags';
import { readexPro } from '~/components/fonts'
import { Author } from '~/components/avatars/Author';
import { People } from '~/components/avatars/People';
import { useRouter } from 'next/router'

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

const Action = ({ onPress }: any)  => {
  return <div className="mt-8 lg:ml-auto text-right flex flex-col">
  <div className="mt-auto mb-1 ">
    <button
      className="border border-cyan bg-transparent hover:bg-dark-green-secondary py-2 px-4 mb-4 lg:w-48 text-cyan font-bold w-full"
      onClick={onPress}>
      View Challenge <span className="ml-1 text-cyan text-lg">&#8594;</span>
    </button>
  </div>
</div>
} 

export const ChallengeIntro = (props: any) => {
    const router = useRouter()
    
    if (props.isLoading) {
      return <ProfileHeaderPlaceholder/>
    }

    const onBannerEdit = () => {

    }

    const onPress = () => {
      router.push(`/challenges/${props.challengeId}`)
    }
    
    return <div className={`flex flex-col justify-start relative bg-black/80 border-b border-primary/20 mb-8 w-full mt-12`}>
         <BannerImage 
            isLoading={props.isLoading} 
            image={props.banner} 
            isEditable={false} 
            onEdit={onBannerEdit}>
          </BannerImage>
         
        <div className="flex flex-col p-4 leading-normal text-left w-full">
        <h4 className={`${readexPro.className} text-xl lg:text-2xl tracking-tight dark:text-white`}>{props.title}</h4>
        <div className='flex flex-row'>
            <Author
                image={props.authorImage}
                community={props.community}
                username={props.author}/>
        </div>
        <Tags tags={props.tags || []} containerClass="mt-4" />
        <p className={`${readexPro.className} mb-3 text-lg font-thin text-gray-400 2xl:w-5/6 mt-4`}>
          {props.intro }
        </p>
       
       <div className='flex flex-col items-center lg:flex-row'>
          <People size={5} all={props.people}/>
        </div>
      </div>
      </div>
}