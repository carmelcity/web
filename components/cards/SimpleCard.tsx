import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader'
import { readexPro } from '~/components/fonts'
import { useRouter } from 'next/router'
import { BannerImage } from '~/components/banners';
import { ActionButton } from '~/components/buttons'
import { Author } from '~/components/avatars/Author';
import { People } from '~/components/avatars/People';
import { Tags } from '~/components/tags';

export const SimpleCard = ({ 
  onPress, 
  isLoading, 
  title, 
  banner, 
  intro, 
  actionTitle,
  authorImage,
  community,
  author,
  noAction,
  people,
  tags
}: any) => {
    const router = useRouter()
    
    if (isLoading) {
      return <ProfileHeaderPlaceholder/>
    }

    const CardAuthor = () => {
      if (!author) {
        return <div/>
      }

      return <div className='flex flex-row'>
              <Author
                image={authorImage}
                community={community}
                username={author}/>
        </div>
    }
    
    return <div className={`flex flex-col justify-start relative bg-black/80 border-b border-primary/20 mb-8 w-full`}>
        <BannerImage isLoading={isLoading} image={banner}/>         
        <div className="flex flex-col p-4 leading-normal text-left w-full">
          <h4 className={`${readexPro.className} text-xl lg:text-2xl tracking-tight dark:text-white`}>{title}</h4>
          <CardAuthor/>
          { tags && <Tags tags={tags || []} containerClass="mt-4" /> }
          <p className={`${readexPro.className} mb-3 text-lg font-thin text-gray-400 2xl:w-5/6 mt-4`}>
            {intro }
          </p>     
          <div className='flex flex-col items-center lg:flex-row'>
              { people && <People size={5} all={people}/> }

              { noAction || <ActionButton title={actionTitle} onPress={onPress}/> }
          </div>

        </div>
    </div>
}