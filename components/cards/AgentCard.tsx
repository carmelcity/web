import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader'
import { readexPro } from '~/elements/fonts'
import { BannerImage, CompositeImage, Engagements, DynamicIcon, ActionButton, Community, Animation, Author, People, Tags } from '~/elements';
import { getImageUrl } from '~/utils/main';

const MAX_TITLE = 80
const MAX_INTRO = 120

export const AgentCard = ({ 
  onPress, 
  team, 
  summary,
  isLoading, 
  headline,
  title, 
  children,
  name,
  highlight,
  wide,
  community,
  author,
  project,
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

      return <div className={`relative z-10 z-10`}>
            <h1 className={`${readexPro.className} lg:text-2xl text-2xl text-primary`}>
            { isLoading ? '' : '@' + name.toLowerCase() }
            </h1>
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
  
    if (wide) {
      return <div className={`cursor-pointer flex lg:flex-row flex-col justify-start items-start relative mb-8 w-full g-black/70 lg:m-2`}>
        <div className='flex flex-col justify-start items-center h-full w-full lg:w-64'>
          <div className='lg:w-64 w-48 mask mask-hexagon'>
            <CompositeImage onPress={onPress} wide={wide} isLoading={isLoading} collection={team.collection} assetId={team.owner} />
          </div>
          <h4 className={`${readexPro.className} text-center lg:text-2xl text-xl tracking-tight dark:text-white ${shortIntro ? 'line-clamp-2' : ''}`}>
            <Username/>
            <div className={`${highlight ? '' : 'hidden'} badge badge-success badge-xs animate-pulse text-[#8BC34A] mr-2`}/>
            { title }
          </h4>         
        </div>
        <div className='flex flex-col w-full items-start lg:mt-0 mt-2'>
          <div onClick={onPress} className="flex flex-col p-4 border bg-black/50  lg:ml-4 border-primary/20 min-h-screen leading-normal text-center w-full">
              { children }
        </div>
      </div>
    </div>
    }
  
    return <div className={`cursor-pointer flex flex-col justify-start relative mb-8 w-full ${wide ? 'lg:w-[320px]' : 'lg:w-[320px]'} bg-black/70 lg:m-2 ${highlight ? 'border-2 border-primary/70' : 'border border-primary/30'}`}>
        <CompositeImage onPress={onPress} wide={wide} isLoading={isLoading} collection={team.collection} assetId={team.owner} />
        <div onClick={onPress} className="flex flex-col p-4 leading-normal text-left w-full">
         <Username/>
           <h4 className={`${readexPro.className} ${wide ? 'text-2xl lg:text-2xl' : 'text-xl lg:text-xl'} tracking-tight dark:text-white ${shortIntro ? 'line-clamp-2' : ''}`}>
           <div className={`${highlight ? '' : 'hidden'} badge badge-success badge-xs animate-pulse text-[#8BC34A] mr-2`}/>
           { title }
          </h4>
          { tags && <Tags tags={tags || []} containerClass="mt-4" /> }
          <p className={`${readexPro.className} text-md font-thin text-left text-white mt-4}`}>
            { headline }
          </p>               
          <p className={`${readexPro.className} text-md font-thin text-left text-gray-400 ${shortIntro ? 'line-clamp-3' : ''}`}>
            { summary }
          </p>               
        </div>
    </div>
}