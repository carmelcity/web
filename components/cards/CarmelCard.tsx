// import { BaseCard } from './BaseCard';

// export const CarmelCard = (props: any) => {
//   return <BaseCard { ...props} />
// }

import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader'
import { readexPro } from '~/elements/fonts'
import { BannerImage, Engagements, ActionButton, Community, Author, People, Tags, DynamicIcon } from '~/elements';
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
  people,
  tags,
  shortIntro
}: any) => {    

    const router = useRouter()

    if (isLoading) {
      return <ProfileHeaderPlaceholder/>
    }

    const Username = () => {
      if (!username) {
        return <div/>
      }

      let fol = followers ? followers.length : 0
    
      return <div className={`relative z-10 z-10`}>
            <h1 className={`${readexPro.className} lg:text-2xl text-2xl text-primary`}>
              { isLoading ? '' : '@' + username }
            </h1>
            <div className='flex flex-row'>
              <div className='text-white font-bold mr-1'>
              { fol > 0 ? fol : '' }
              </div>
              <div className='text-gray-400 mt-2'>
              { fol === 0 ? 'No followers yet' : fol === 1 ? `follower` : `${fol} followers` }
              </div>
            </div>
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

      return <div className='flex flex-col'>
              <Author
                image={getImageUrl(project || author || '')}
                community={community}
                username={project || author}/>
        </div>
    }
    
    // return <div className={`flex flex-col justify-start relative mb-8 w-full border-2 border-primary/70`}>
    //     <div className="flex flex-col p-4 leading-normal text-left w-full">
    //        <h4 className={`${readexPro.className} ${wide ? 'text-3xl lg:text-3xl' : 'text-xl lg:text-xl'} tracking-tight dark:text-white ${shortIntro ? 'line-clamp-2' : ''}`}>
    //        <div className={`${highlight ? '' : 'hidden'} badge badge-success badge-xs animate-pulse text-[#8BC34A] mr-2`}/>
    //        { title }
    //       </h4>
    //       <Username/>
    //       <CardAuthor/>
    //       { tags && <Tags tags={tags || []} containerClass="mt-4" /> }
    //       <p className={`${readexPro.className} text-md font-thin text-gray-400 2xl:w-5/6 mt-4 ${shortIntro ? 'line-clamp-2' : ''}`}>
    //         { intro }
    //       </p>     
    //       <div className='flex flex-col items-center pb-10 w-full'>
    //           { <Engagements comments={comments} upVotes={upVotes} downVotes={downVotes}/> }
    //           { people && <People size={5} all={people}/> }
    //           {/* { noAction || <ActionButton highlight={highlight} title={actionTitle} onPress={onPress}/> } */}
    //       </div>
    //     </div>
    // </div>
    // { <Engagements comments={comments} upVotes={upVotes} downVotes={downVotes}/> }
    
    const onSelect = () => {
      router.push(`/${carmelId}`)
    }

    const text = `${intro}`

    return <div onClick={onSelect} className={`${wide ? '' : 'hover:scale-100 scale-95 transform transition duration-500'} cursor-pointer flex lg:flex-row flex-col justify-start relative mb-0 w-full border border-primary/50 p-4 bg-black/50`}>
         <div className='flex items-start lg:items-center lg:justify-start w-full lg:w-24 lg:flex-col flex-row gap-2 mr-4 lg:mb-0 mb-2 lg:mt-2 text-sm'>
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
              <p className={`${readexPro.className} whitespace-break-spaces text-md font-thin text-gray-400 ${shortIntro ? 'line-clamp-2' : ''}`}>
                   { text }
              </p>  
              <div className='flex w-64 flex-row'>
                <CardAuthor/>
                { people && <People size={3} all={people}/> }
              </div>
        </div>        
      </div>

}