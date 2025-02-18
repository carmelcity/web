import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader'
import { readexPro } from '~/elements/fonts'
import { BannerImage, Engagements, ActionButton, Community, Author, People, Tags, DynamicIcon, PostIntro, PostText } from '~/elements';
import { getImageUrl } from '~/utils/main';
import { useRouter } from 'next/router';

const MAX_TITLE = 80
const MAX_INTRO = 120

export const CarmelCard = ({ 
  onPress, 
  isLoading, 
  title, 
  banner, 
  avatar,
  username,
  intro, 
  carmelId,
  highlight,
  wide,
  actionTitle,
  section,
  authorImage,
  community,
  author,
  project,
  comments,
  upVotes,
  followers,
  projectImage,
  communityImage,
  downVotes,
  noAction,
  isEditable,
  onEdit,
  people,
  tags,
  shortIntro
}: any) => {    

    const router = useRouter()

    if (isLoading) {
      return <ProfileHeaderPlaceholder/>
    }

    const CardAuthor = () => {
      if (!author) {
        if (community) {
          return <div className='flex flex-row mt-2'>
            <Community
              image={getImageUrl(community)}
              username={community}/>
          </div>
        }
        return <div/>
      }

      return <div className='flex flex-col'>
              <Author
                image={getImageUrl(project || author || '')}
                community={community}
                username={project || author}/>
        </div>
    }

    const onSelect = () => {
      router.push(`/${carmelId}`)
    }

    const text = `${intro}`

    return <div onClick={wide? () => {} : onSelect} className={`${wide ? '' : 'hover:scale-[1.01] scale-[1] transform transition duration-500'} cursor-pointer flex lg:flex-row flex-col justify-start relative mb-4 w-full border border-primary/50 p-4 bg-black/50`}>
         <div className='flex items-start lg:items-center lg:justify-start w-full lg:w-24 lg:flex-col flex-row gap-2 mr-4 lg:mb-0 mb-2 lg:mt-2 text-sm'>
            { isEditable && <div className={`border flex flex-row border-primary/50 p-1 flex-nowrap bg-black w-16 justify-center bg-primary text-gray-900`} onClick={onEdit}>
                <DynamicIcon name={"PencilSquareIcon"} width={16} height={16} className='mr-2 text-gray-900 mt-0.5'/> Edit
            </div> }
             <div className={`border text-primary flex flex-row border-primary/50 p-1 flex-nowrap bg-black w-16 justify-center`}>
                <DynamicIcon name={"ChevronUpIcon"} width={16} height={16} className='mr-2 text-primary mt-0.5'/> { upVotes }
            </div>
            <div className='border text-primary flex flex-row p-1 border-primary/50 flex-nowrap bg-black w-16 text-sm justify-center'>
                <DynamicIcon name={"ChevronDownIcon"} width={16} height={16} className='mr-2 text-primary mt-0.5'/> { downVotes }
            </div>
            <div className='border text-white flex flex-row p-1 border-primary/50 flex-nowrap bg-black w-16 text-sm justify-center'>
                <DynamicIcon name={"ChatBubbleLeftIcon"} width={16} height={16} className='mr-2 text-white mt-0.5'/> { comments || 0 }
            </div>
        </div>
        <div className='w-full flex flex-col'>
              <h4 className={`${readexPro.className} ${wide ? 'text-xl lg:text-2xl' : 'text-xl lg:text-xl'} tracking-tight dark:text-white ${shortIntro ? 'line-clamp-2' : ''}`}>
                { title }
              </h4>
              { wide && tags && <Tags tags={tags || []} containerClass="" /> }
              <PostIntro text={text} short={shortIntro}/>
              <div className='flex w-64 flex-row'>
                <CardAuthor/>
                <div className='ml-2 lg:hidden'>
                    { people && <People size={3} all={people}/> }
                </div>
                <div className='ml-4 lg:block hidden'>
                    { people && <People size={5} all={people}/> }
                </div>
              </div>
        </div>        
      </div>
}