import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader'
import { readexPro } from '~/elements/fonts'
import { BannerImage, Engagements, ActionButton, Community, Author, People, Tags, DynamicIcon, PostIntro, PostText } from '~/elements';
import { getImageUrl } from '~/utils/main';
import { useRouter } from 'next/router';

const MAX_TITLE = 80
const MAX_INTRO = 120

export const CarmelEditCard = ({ 
  onSave, 
  isLoading, 
  title, 
  intro, 
  wide,
  tags,
  shortIntro
}: any) => {    

    const router = useRouter()

    if (isLoading) {
      return <ProfileHeaderPlaceholder/>
    }

    const text = `${intro}`

    return <div className={`${wide ? '' : 'hover:scale-100 scale-95 transform transition duration-500'} cursor-pointer flex lg:flex-row flex-col justify-start relative mb-0 w-full border border-primary/50 p-4 bg-black/50`}>
         <div className='flex items-start lg:items-center lg:justify-start w-full lg:w-24 lg:flex-col flex-row gap-2 mr-4 lg:mb-0 mb-2 lg:mt-2 text-sm'>
            <div className={`border flex flex-row border-primary/50 p-1 flex-nowrap bg-black w-16 justify-center bg-primary text-gray-900`} onClick={onSave}>
                <DynamicIcon name={"CheckIcon"} width={16} height={16} className='mr-2 text-gray-900 mt-0.5'/> Save
            </div>
        </div>
        <div className='w-full flex flex-col'>
              <h4 className={`${readexPro.className} ${wide ? 'text-xl lg:text-2xl' : 'text-xl lg:text-xl'} tracking-tight dark:text-white ${shortIntro ? 'line-clamp-2' : ''}`}>
                { title }
              </h4>
              { wide && tags && <Tags tags={tags || []} containerClass="" /> }
              <PostIntro text={text} short={shortIntro}/>
        </div>        
      </div>
}