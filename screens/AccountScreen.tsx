import React, { useEffect, useMemo, useState } from 'react';
import { readex_pro } from '~/elements/fonts'
import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
import { useRouter } from 'next/router'
import { Container } from './Container';
import { BannerImage, SoftActionButton, ActionButton, Community, Author, People, Tags } from '~/elements';
import { useCarmel } from '~/sdk'
import { Tabs } from '~/elements';
import { CommunityPosts } from '~/components/posts'
import { getImageUrl } from '~/utils/main';

const CardAuthor = ({
  author, community, communityImage, authorImage
}: any) => {
  console.log({
    author, community, communityImage, authorImage
  })
  if (!author) {
    if (community) {
      return <div className={`flex flex-row relative z-10 lg:ml-56 mt-4`}>
          <Community
            image={getImageUrl(community)}
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
  // let followers = item.followers ? item.followers.length : 0

  return <div className={`relative z-10 lg:ml-56 -mt-2`}>
        <h1 className={`${readex_pro.className} lg:text-2xl text-2xl text-primary`}>
          { isLoading ? '' : "@" + item.username }
        </h1>
        <div className='flex flex-row'>
          {/* <div className='text-white font-bold mr-1'>
          { followers > 0 ? followers : '' }
          </div> */}
          {/* <div className='text-gray-400'>
          { followers === 0 ? 'No followers yet' : followers === 1 ? `follower` : `${followers} followers` }
          </div> */}
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

export const AccountScreen = (props: any) => {
    const router = useRouter()
    const itemId: any = router.query.id
    const carmel = useCarmel()
    const [selectedTab, setSelectedTab] = useState('carmels')
    const [item, setItem] = useState<any>(undefined)
    const [carmels, setCarmels] = useState<any>([])

    const tabs = useMemo(
          () => [
            {
              description: `CARMELS`,
              value: 'carmels'
            }
    ],[])
    
    const isLoading = () => {
      return (carmel.isLoading || !carmel.data || !carmel.data.accounts || !carmel.data.carmels)
    }

    // const onAction = async (type: string, args: any) => {
    //     // await auth.accountAction(type, args)
    //     // await auth.getFreshProfile()
    //     // await data.refresh()
    // }

    useEffect(() => {
        if (isLoading()) return
          const i = carmel.data.accounts.find((i: any) => i.username === itemId)

          if (!i) {
            return 
          }

          const all = carmel.data.carmels.find((c: any) => c.author === i.username)

          setItem(i) 
          setCarmels(all)
    }, [carmel.data])

    const TabBar = () => {
      return <div className='mb-8 mt-8 border-b w-full pb-4 border-primary/40'>
          <Tabs
            isLoading={false}
            tabs={tabs}
            selectedTab={selectedTab}
            onClickTab={(value: string) => {
              setSelectedTab(value);
            }}
          />
      </div>
    }

    const isMember = () => {
      if (!(item.type === "community" || item.type === "project")) {
        return false
      }

      const found = (item.members || []).find((p: string) => p === props.auth.profile.username)

      return found ? true : false
    }

    const isMembershipPending = () => {
      if (!(item.type === "community" || item.type === "project")) {
        return false
      }

      const found = (item.queue || []).find((p: any) => p.username === props.auth.profile.username)

      return found ? true : false
    }

    const posts: any = () => item && item.posts ? Object.values(item.posts).filter((p: any) => p) : []

    const filteredPosts = useMemo(() => {
      const p = posts()

      if (!item || !p || p.length == 0 ) {
        return []
      }

      return p.filter((post: any) => true)
    }, [selectedTab, item]);

    if (isLoading() || !item) {
      return <ProfileHeaderPlaceholder/>
    }

    const Posts = () => {
      if (item.type === "community" || item.type === "project") {
        return <CommunityPosts {...props} {...item} posts={filteredPosts} isMember={isMember()} isMembershipPending={isMembershipPending()}/>
      }

      return <div/>
    }

    return <Container {...item}>
          <div className={`flex flex-col ${isLoading() && 'animate-pulse'} align-start items-start w-full bg-black/80 border border-primary/20 pb-10 px-4`}>
                <h4 className={`${readex_pro.className} lg:ml-56 text-3xl lg:text-3xl tracking-tight dark:text-white lg:mt-4 mt-20`}>
                     { item.title }
              </h4>
              <Username item={item} isLoading={isLoading()}/>
              <CardAuthor {...item} />
              <ProfileSummary {...item}/>
              <div className='lg:ml-56 mt-8'>
                { item.members && <People size={3} all={item.members}/> }
              </div>
              {/* { auth.isLoggedIn() && <Actions onPress={onAction} item={getItem()} actions={auth.profile.actions}/> } */}
          </div>
          <Posts/>
    </Container>
  }