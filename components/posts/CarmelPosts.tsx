import React from 'react';
import { InfiniteScrollComponent } from '~/elements';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { CarmelPostCard } from '~/components/cards'

export const CarmelPosts = ({ posts }: any) => {
  if (!posts || posts.length === 0) {
    return <div/>
  }

  const showPosts = () => {
    return posts.map((element: any, elementId: any) => <CarmelPostCard 
        key={`${elementId}`} 
        onPress={() => {}}
         {...element} 
    />)
  }

  return (
    <InfiniteScrollComponent
      renderItem={showPosts()}
      elementsNumber={1000}
      loader={<ListPlaceholder />}
    />
  )
}