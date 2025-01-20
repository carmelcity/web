import React, { useMemo, useState } from 'react';
import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
import { useRouter } from 'next/router'
import { Container } from './Container';
import { CarmelCard } from '~/components/cards'
import { CarmelPosts } from '~/components/posts'
import { Tabs } from '~/elements';
import { useCarmel } from '~/sdk'

export const CarmelScreen = (props: any) => {
    const router = useRouter()
    const itemId: any = router.query.id
    const carmel = useCarmel()

    const [selectedTab, setSelectedTab] = useState('pro')

    const getCarmel = () => {
      if (carmel.isLoading || !carmel.data || !carmel.data.carmels) return
      const item = carmel.data.carmels.find((i: any) => parseInt(i.carmelId) === parseInt(itemId))

      return item
    }

    const tabs = useMemo(
      () => [
        {
          description: `PRO`,
          value: 'pro',
        },
        {
          description: `AGAINST`,
          value: 'anti',
        }
    ],[])

    // const filteredPosts = useMemo(() => {
    //   if (!data.item.posts) {
    //     return []
    //   }

    //   return data.item.posts.filter((post: any) => {
    //     const isAnti = post.isAnti ? true : false
    //     return selectedTab === "anti" ? isAnti : !isAnti
    //   })
    // }, [selectedTab, data]);

    // const myPost = () => {
    //   if (!data.item.posts || !props.auth.isLoggedIn()) {
    //     return
    //   }

    //   const post = data.item.posts.find((p: any) => p.author === props.auth.profile.username)
    //   const onSide = post && filteredPosts && filteredPosts.length > 0 ? filteredPosts.find((p: any) => parseInt(p.postId) === parseInt(post.postId)) : false

    //   if (isNaN(post.postId)) {
    //     return 
    //   }
      
    //   return {...post, onSide }
    // }
  
    if (carmel.isLoading) {
      return <ProfileHeaderPlaceholder/>
    }

    const TabBar = () => {
      // if (!data.item.posts || data.item.posts.length === 0) {
      //   return <div/>
      // }

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

    const onRefresh = () => {
      // data.refresh()
    }

    return <div className='w-full flex flex-col items-center mt-20 mb-20'>
      <CarmelCard {...getCarmel()} shortIntro={false} noAction isLoading={carmel.isLoading}/>
      <TabBar/>
      {/* <CarmelPosts myPost={myPost} onRefresh={onRefresh} {...data.item} posts={filteredPosts} {...props}/> */}
    </div>
  }