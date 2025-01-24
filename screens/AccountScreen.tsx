import { readex_pro } from '~/elements/fonts'
import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
import { useRouter } from 'next/router'
import { Container } from './Container';
import { BannerImage, SoftActionButton, ActionButton, Community, Author, People, Tags } from '~/elements';
import { useCarmel } from '~/sdk'

const CardAuthor = ({
  author, community, communityImage, authorImage
}: any) => {
  if (!author) {
    if (community) {
      return <div className={`flex flex-row relative z-10 lg:ml-56 mt-4`}>
          <Community
            image={communityImage}
            username={community}
        />
      </div>
    }
    return <div/>
  }

  return <div className={`flex flex-row relative z-10 lg:ml-56 mx-auto lg:mt-0 mt-16`}>
          <Author
            image={authorImage}
            community={community}
            username={author}/>
    </div>
}

const ProfileSummary = ({ intro }: any) => {
    return <div className="relative z-10 lg:ml-56">
              <div className={`${readex_pro.className} font-thin text-gray-400 text-left text-lg mt-5 mb-0`}>
                  { intro }
              </div>
            </div>
}

const Username = ({ item, isLoading }: any) => {
  let followers = item.followers ? item.followers.length : 0

  return <div className={`relative z-10 lg:ml-56 lg:mt-0 mt-16`}>
        <h1 className={`${readex_pro.className} mt-5 lg:text-4xl text-3xl`}>
          { isLoading ? '' : item.username }
        </h1>
        <div className='flex flex-row'>
          <div className='text-white font-bold mr-1'>
          { followers > 0 ? followers : '' }
          </div>
          <div className='text-gray-400'>
          { followers === 0 ? 'No followers yet' : followers === 1 ? `follower` : `${followers} followers` }
          </div>
        </div>
      </div>
}

// const Actions = ({ actions, item, onPress }: any) => {
//   let followAction = undefined
//   if (actions && actions.follows) {
//     followAction = actions.follows.find((a: any) => a.username === item.username)
//   }

//   const isFollowing = followAction ? true: false 

//   return <div className='relative z-10 lg:pl-56 mt-8 flex flex-row gap-4 lg:justify-start justify-center w-full '>
//         { isFollowing || <ActionButton title="Follow" onPress={() => onPress("follow", { username: item.username })}/> }
//         { isFollowing && <SoftActionButton title="Unfollow" onPress={() => onPress("unfollow", { username: item.username })}/> }
//     </div>
// }

export const AccountScreen = ({ auth }: any) => {
    const router = useRouter()
    const itemId: any = router.query.id
    const carmel = useCarmel()

    // const onAction = async (type: string, args: any) => {
    //     // await auth.accountAction(type, args)
    //     // await auth.getFreshProfile()
    //     // await data.refresh()
    // }

    const getItem = () => {
      if (carmel.isLoading || !carmel.data || !carmel.data.accounts) return
      return carmel.data.accounts.find((i: any) => i.username === itemId)
    }

    const isLoading = () => {
      return (carmel.isLoading || !carmel.data || !carmel.data.accounts)
    }

    if (isLoading()) {
      return <ProfileHeaderPlaceholder/>
    }

    return <Container {...getItem()}>
          <div className={`flex flex-col ${isLoading() && 'animate-pulse'} align-start items-start w-full bg-black/80 border border-primary/20 pb-10 px-4`}>
              <Username item={getItem()} isLoading={isLoading()}/>
              <CardAuthor
                {...getItem()}  
              />
              <ProfileSummary {...getItem()}/>
              {/* { auth.isLoggedIn() && <Actions onPress={onAction} item={getItem()} actions={auth.profile.actions}/> } */}
          </div>
    </Container>
  }