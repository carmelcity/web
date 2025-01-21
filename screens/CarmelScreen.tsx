import React, { useEffect, useMemo, useState } from 'react';
import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
import { useRouter } from 'next/router'
import { Container } from './Container';
import { CarmelCard } from '~/components/cards'
import { CarmelPosts } from '~/components/posts'
import { Tabs } from '~/elements';
import { useCarmel } from '~/sdk'

export const CarmelScreen = (props: any) => {
    const [item, setItem] = useState<any>(undefined)
    const router = useRouter()
    const itemId: any = router.query.id
    const carmel = useCarmel()

    const [selectedTab, setSelectedTab] = useState('agree')

    const isLoading = () => {
      return (carmel.isLoading || !carmel.data || !carmel.data.carmels)
    }

    useEffect(() => {
      if (isLoading()) return
      const i = carmel.data.carmels.find((i: any) => parseInt(i.carmelId) === parseInt(itemId))
      setItem(i) 
    }, [carmel.data])

    const tabs = useMemo(
      () => [
        {
          description: `AGREE`,
          value: 'agree',
          icon: "HandThumbUpIcon"
        },
        {
          description: `DISAGREE`,
          value: 'diagree',
          icon: "HandThumbDownIcon"
        }
    ],[])

   

    const posts: any = () => item && item.posts ? Object.values(item.posts).filter((p: any) => p) : []

    const sidePosts = useMemo(() => {
      const p = posts()

      if (!item || !p || p.length == 0 ) {
        return []
      }

      return p.filter((post: any) => {
        const isAnti = post.isAnti ? true : false
        return selectedTab === "anti" ? isAnti : !isAnti
      })
    }, [selectedTab, item]);

    const myPost = () => {
      const p = posts()

      if (!item || !p || p.length == 0 || !props.auth.isLoggedIn()) {
        return
      }

      const post = p.find((i: any) => i.author === props.auth.profile.username)
      const onSide = post && sidePosts && sidePosts.length > 0 ? sidePosts.find((p: any) => parseInt(p.postId) === parseInt(post.postId)) : false

      if (!post || isNaN(post.postId)) {
        return 
      }
      
      return {...post, onSide }
    }
  
    if (isLoading()) {
      return <ProfileHeaderPlaceholder/>
    }

    const TabBar = () => {
      return <div className='mb-8 border-b w-full pb-4 border-primary/40'>
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

    return <div className='w-full flex flex-col items-center mt-20 mb-20 p-4'>
      <CarmelCard {...item} shortIntro={false} noAction isLoading={isLoading()} wide highlight/>
      <TabBar/>
      <CarmelPosts myPost={myPost} {...item} {...props} posts={posts()}/>
    </div>
  }