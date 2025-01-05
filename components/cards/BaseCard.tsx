import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader'
import { readexPro } from '~/elements/fonts'
import { BannerImage, Engagements, ActionButton, Community, Author, People, Tags } from '~/elements';

export const BaseCard = ({ 
  onPress, 
  isLoading, 
  title, 
  banner, 
  thumbnail,
  username,
  profile,
  intro, 
  actionTitle,
  authorImage,
  community,
  author,
  comments,
  upVotes,
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

    return <div className={`relative z-10 lg:ml-0 mx-auto`}>
        <h1 className={`${readexPro.className} mt-5 lg:text-4xl text-3xl`}>
          { isLoading ? '' : username }
        </h1>
      </div>
    }

    const CardAuthor = () => {
      if (!author) {
        if (community) {
          return <Community
              image={communityImage}
              username={community}
          />
        }
        return <div/>
      }

      return <div className='flex flex-row'>
              <Author
                image={authorImage}
                community={community}
                username={author}/>
        </div>
    }
    
    return <div className={`flex flex-col justify-start relative mb-8 w-full bg-black/80 border border-primary/20`}>
        <BannerImage isLoading={isLoading} banner={banner} thumbnail={thumbnail || profile}/>         
        <div className="flex flex-col p-4 leading-normal text-left w-full">
          <Username/>
          <h4 className={`${readexPro.className} text-xl lg:text-2xl tracking-tight dark:text-white`}>{title}</h4>
          <CardAuthor/>
          { tags && <Tags tags={tags || []} containerClass="mt-4" /> }
          <p className={`${readexPro.className} mb-3 text-lg font-thin text-gray-400 2xl:w-5/6 mt-4`}>
            { shortIntro && intro.length > 200 ? intro.substring(0, 200) + " ..." : intro }
          </p>     
          <div className='flex flex-col items-center lg:flex-row'>
              { comments && <Engagements comments={comments} upVotes={upVotes} downVotes={downVotes}/> }
              { people && <People size={5} all={people}/> }
              { noAction || <ActionButton title={actionTitle} onPress={onPress}/> }
          </div>
        </div>
    </div>
}