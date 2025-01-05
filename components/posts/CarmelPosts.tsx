import React, { useState } from 'react'
import { InfiniteScrollComponent } from '~/elements';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { CarmelPostCard } from '~/components/cards'
import { CommentButton, CommentBox, showSuccessToast, showErrorToast } from '~/elements'
import { useCarmelAuth } from '~/sdk'

export const CarmelPosts = ({ carmelId, posts }: any) => {
  const carmel = useCarmelAuth()
  const [adding, setAdding] = useState(false)
  const [replying, setReplying] = useState(false)

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

  const onAction = async (e: any) => {
    e.preventDefault()

    if (!carmel.isLoggedIn()) {
      return 
    }

    const formData = new FormData(e.target)
    const data: any = Object.fromEntries(formData.entries())

    setAdding(false)

    const result = await carmel.addComment({
      text: data.comment, carmelId
    })

    showSuccessToast("Comment added")
  }

  const onAddComment = async () => {
    if (!carmel.isLoggedIn()) {
      showErrorToast("Please sign in first")
      return 
    }

    setAdding(true)
  }

  const onCancelAddComment = async () => {
    setAdding(false)
  }

  return (
    <div className='w-full flex flex-col'>
      <form method='post' onSubmit={onAction}>
        <div className='w-full flex flex-col'>
          { adding ? <CommentBox onCancel={onCancelAddComment} name="comment"/> : <CommentButton onPress={onAddComment} icon="ChatBubbleLeftIcon" title="Add a comment"/> }          
        </div>
        <div className='border border-primary/10 bg-primary/5 w-full mt-8'>
          <InfiniteScrollComponent
            renderItem={showPosts()}
            elementsNumber={1000}
            loader={<ListPlaceholder />}
          />
        </div>
    </form>
  </div>
  )
}