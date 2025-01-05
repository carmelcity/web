import React, { useMemo, useState } from 'react';
import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
import { useCarmelItem } from '~/sdk/hooks';
import { useRouter } from 'next/router'
import { Container } from './Container';
import { CarmelCard } from '~/components/cards'
import { CarmelPosts } from '~/components/posts'
import { Tabs } from '~/elements';

export const CarmelScreen = () => {
    const router = useRouter()
    const itemId: any = router.query.id
    
    const data = useCarmelItem('carmels', itemId)

    const [selectedTab, setSelectedTab] = useState('pro')

    const antiPosts = () => data.item.posts ? data.item.posts.filter((post: any) => post.isAnti ? true : false) : []
    const proPosts = () => data.item.posts ? data.item.posts.filter((post: any) => post.isAnti ? false : true) : []
    
    const tabs = useMemo(
      () => [
        {
          description: `PRO (${proPosts().length})`,
          value: 'pro',
        },
        {
          description: `Against (${antiPosts().length})`,
          value: 'anti',
        }
    ],[])

    const filteredPosts = useMemo(() => {
      if (!data.item.posts) {
        return []
      }
      return data.item.posts.filter((post: any) => {
        const isAnti = post.isAnti ? true : false
        return selectedTab === "anti" ? isAnti : !isAnti
      })
    }, [selectedTab, data]);
  
    if (data.isLoading) {
      return <ProfileHeaderPlaceholder/>
    }

    const TabBar = () => {
      if (!data.item.posts || data.item.posts.length === 0) {
        return <div className='text-sm text-gray-400'>
          This Carmel does not have any comments yet
        </div>
      }

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

    return <Container>
      <CarmelCard {...data.item} noAction isLoading={data.isLoading}/>
      <TabBar/>
      <CarmelPosts posts={filteredPosts}/>
    </Container>
  }