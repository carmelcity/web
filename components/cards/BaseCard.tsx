import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader'
import { readexPro } from '~/elements/fonts'
import { BannerImage, Engagements, ActionButton, Community, Author, People, Tags } from '~/elements';

export const BaseCard = ({ 
  onPress, 
  isLoading, 
  title, 
  banner, 
  avatar,
  username,
  intro, 
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

    if (isLoading) {
      return <ProfileHeaderPlaceholder/>
    }

    const Username = () => {
      if (!username) {
        return <div/>
      }

    // return <div className={`relative z-10 lg:ml-0 mx-auto`}>
    //     <h1 className={`${readexPro.className} mt-5 lg:text-4xl text-3xl`}>
    //       { isLoading ? '' : username }
    //     </h1>
    //   </div>
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
              image={communityImage}
              username={community}
          /></div>
        }
        return <div/>
      }

      return <div className='flex flex-row mt-2'>
              <Author
                image={projectImage || authorImage}
                community={community}
                username={project || author}/>
        </div>
    }
    
    return <div className={`flex flex-col justify-start relative mb-8 w-full ${wide ? '' : 'lg:w-[600px]'} bg-black/80 border border-primary/20`}>
        { banner && <BannerImage isLoading={isLoading} banner={`${section}/${username}/${banner}`} avatar={`${section}/${username}/${avatar}`}/> }     
        <div className="flex flex-col p-4 leading-normal text-left w-full">
           <h4 className={`${readexPro.className} text-4xl lg:text-4xl tracking-tight dark:text-white`}>{title}</h4>
          <Username/>
          <CardAuthor/>
          { tags && <Tags tags={tags || []} containerClass="mt-4" /> }
          <p className={`${readexPro.className} mb-3 text-lg font-thin text-gray-400 2xl:w-5/6 mt-4`}>
            { shortIntro && intro.length > 200 ? intro.substring(0, 200) + " ..." : intro }
          </p>     
          <div className='flex flex-col items-center lg:flex-row mt-4'>
              { <Engagements comments={comments} upVotes={upVotes} downVotes={downVotes}/> }
              { people && <People size={5} all={people}/> }
              { noAction || <ActionButton title={actionTitle} onPress={onPress}/> }
          </div>
        </div>
    </div>
}