import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader'
import { readexPro } from '~/elements/fonts'
import { BannerImage, Engagements, ActionButton, Community, Author, People, Tags, DynamicIcon, PostIntro, PostText } from '~/elements';
import { getImageUrl } from '~/utils/main';
import { useRouter } from 'next/router';

const MAX_TITLE = 80
const MAX_INTRO = 120

export const ChallengeCard = ({ 
  challengeId, 
  isLoading, 
  title, 
  rewardUSD, 
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
  seats,
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
      router.push(`/challenges/${challengeId}`)
    }

    const text = `${intro}`

    return <div onClick={wide? () => {} : onSelect} className={`${wide ? '' : 'hover:scale-[1.01] scale-[1] transform transition duration-500'} cursor-pointer flex lg:flex-row flex-col justify-start relative mb-4 w-full border border-primary/50 p-4 bg-primary/30`}>
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