import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader'
import { readexPro } from '~/elements/fonts'
import { BannerImage, CompositeImage, Engagements, ActionButton, Community, Author, People, Tags } from '~/elements';
import { getImageUrl } from '~/utils/main';

const MAX_TITLE = 80
const MAX_INTRO = 120

export const AgentCard = ({ 
  onPress, 
  team, 
  assetId,
  isLoading, 
  title, 
  avatar,
  name,
  description, 
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
  members,
  tags,
  shortIntro
}: any) => {    

    if (isLoading) {
      return <ProfileHeaderPlaceholder/>
    }
    
    const banner = ``

    const Username = () => {
      if (!name) {
        return <div/>
      }

      let fol = followers ? followers.length : 0
    
      return <div className={`relative z-10 z-10`}>
            <h1 className={`${readexPro.className} lg:text-2xl text-2xl text-primary`}>
            { isLoading ? '' : '@' + name.toLowerCase() }
            </h1>
            {/* <div className='flex flex-row'>
              <div className='text-white font-bold mr-1'>
              { fol > 0 ? fol : '' }
              </div>
              <div className='text-gray-400 mt-2'>
              { fol === 0 ? 'No followers yet' : fol === 1 ? `follower` : `${fol} followers` }
              </div>
            </div> */}
          </div>
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

      return <div className='flex flex-row mt-2'>
              <Author
                image={getImageUrl(project || author || '')}
                community={community}
                username={project || author}/>
        </div>
    }
  
    console.log(team)
    return <div className={`cursor-pointer flex flex-col justify-start relative mb-8 w-full ${wide ? '' : 'lg:w-[320px]'} bg-black/70 lg:m-2 ${highlight ? 'border-2 border-primary/70' : 'border border-primary/30'}`}>
        <CompositeImage onPress={onPress} wide={wide} isLoading={isLoading} collection={team.collection} assetId={team.owner} />
        <div onClick={onPress} className="flex flex-col p-4 leading-normal text-left w-full">
           <h4 className={`${readexPro.className} ${wide ? 'text-3xl lg:text-3xl' : 'text-xl lg:text-xl'} tracking-tight dark:text-white ${shortIntro ? 'line-clamp-2' : ''}`}>
           <div className={`${highlight ? '' : 'hidden'} badge badge-success badge-xs animate-pulse text-[#8BC34A] mr-2`}/>
           { title }
          </h4>
          <Username/>
          <CardAuthor/>
          { tags && <Tags tags={tags || []} containerClass="mt-4" /> }
          <p className={`${readexPro.className} text-md font-thin text-gray-400 2xl:w-5/6 mt-4 ${shortIntro ? 'line-clamp-2' : ''}`}>
            { description }
          </p>     
          <div className='flex flex-col items-start pb-10 w-full'>
              {/* { <Engagements comments={comments} upVotes={upVotes} downVotes={downVotes}/> } */}
              { members && <People size={3} all={members}/> }
              {/* { noAction || <ActionButton highlight={highlight} title={actionTitle} onPress={onPress}/> } */}
          </div>
        </div>
    </div>
}