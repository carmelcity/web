import React, { useState } from 'react'
import { InfiniteScrollComponent } from '~/elements';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { CarmelPostCard } from '~/components/cards'
import { CommentButton, CommentBox, showSuccessToast, showErrorToast } from '~/elements'

export const CarmelPosts = ({ carmelId, author, myPost, onRefresh, isAnti, posts, auth }: any) => {
  const [adding, setAdding] = useState(false)
  const [editing, setEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [replyingPostId, setReplyingPostId] = useState(-10)

  const onReply = (post: any) => {
    setReplyingPostId(post.postId)
  }

  const onCancelEdit = async () => {
    setEditing(false)
    setReplyingPostId(-10)
  }

  const onEdit = (post: any) => {
    setEditing(true)
  }

  const showPosts = () => {
    const oldPost = myPost()

    let otherPosts = posts.filter((p: any) => !(oldPost && oldPost.postId === p.postId)).map((element: any, elementId: any) => {
       return <CarmelPostCard 
            replying={replyingPostId === element.postId}
            onCancelEdit={onCancelEdit}
            loading={loading && replyingPostId === element.postId}
            key={`${elementId}`} 
            onReply={() => onReply(element)}
            {...element} 
        />})

    if (oldPost && oldPost.onSide) {
      return [<CarmelPostCard 
        editing={editing} 
        replying={replyingPostId === oldPost.postId}
        highlight 
        loading={loading}
        text={oldPost ? oldPost.text : ""}
        onCancelEdit={onCancelEdit}
        key={'mypost'} 
        onReply={() => onReply(oldPost)} 
        onEdit={() => onEdit(oldPost)} {...oldPost}/>, ...otherPosts]
    }

    return [...otherPosts]
  }

  const resetFields = () => {
    setEditing(false)
    setLoading(false)  
    setAdding(false)
    setReplyingPostId(-10)
  }

  const onAction = async (e: any) => {
    e.preventDefault()

    if (!auth.isLoggedIn()) {
      return 
    }

    const formData = new FormData(e.target)
    const data: any = Object.fromEntries(formData.entries())

    if (!data.comment) {
      return 
    }
    
    const oldPost = myPost()

    if (auth.profile.username !== author && !oldPost && replyingPostId === -10) {
      setLoading(true)

      const result = await auth.postAction("new", {
        text: data.comment, carmelId
      })

      if (result.error) {
        showErrorToast(result.error)
        return resetFields()
      }

      onRefresh()

      setTimeout(() => {
        showSuccessToast("Your comment was added")
        return resetFields()
      }, 1000)
      return 
    }
    
    if (replyingPostId > -10) {
      setLoading(true)

      const result = await auth.postAction("reply", {
        text: data.comment, carmelId, postId: oldPost.postId, parentId: replyingPostId
      })

      if (result.error) {
        showErrorToast(result.error)
        setEditing(false)
        setLoading(false)
        return 
      }
  
      onRefresh()

      setTimeout(() => {
        showSuccessToast("Your reply was added")
        return resetFields()
      }, 1000)

      return
    }

    setLoading(true)

    const result = await auth.postAction("edit", {
      text: data.comment, carmelId, postId: oldPost.postId
    })

    if (result.error) {
      showErrorToast(result.error)
      return resetFields()
    }

    onRefresh()

    setTimeout(() => {
      showSuccessToast("Your comment was updated")
      return resetFields()
    }, 1000)
  }

  const onAddComment = async () => {
    if (!auth.isLoggedIn()) {
      showErrorToast("Please sign in first")
      return 
    }

    const oldPost = myPost()

    if (oldPost && oldPost.postId) {
      showErrorToast('You already joined this side')
      return resetFields()
    }

    setAdding(true)
  }

  const onCancelAddComment = async () => {
    setAdding(false)
  }

  const MainAction = () => {
    const oldPost = myPost()

    if (!oldPost || !oldPost.postId) {
      if (loading && replyingPostId === -10) {
          return <div className="mt-4 pl-14 w-full flex flex-col gap-4 mb-8" >
                <div className={`h-5 w-32 bg-cyan/40 animate-pulse`}></div>
                <div className={`h-5 w-56 bg-cyan/40 animate-pulse`}></div>
                <div className={`h-5 w-48 bg-cyan/40 animate-pulse`}></div>
            </div>
      }

      if (auth.profile.username === author) {
        return <div/>
      }

      return <div className='w-full flex flex-col'>
        { adding ? 
          <CommentBox onCancel={onCancelAddComment} name="comment"/> : 
          <CommentButton onPress={onAddComment} icon="ChatBubbleLeftIcon" title="Join this side"/> 
        }          
      </div>
    }

    return <div/>
  }

  const TopLabel = () => {
    if (!posts || posts.length === 0) {
      return <div className='text-gray-500 font-sm'>
          No one chose this side yet
      </div>
    }
    
    return <div className='text-gray-500 font-sm'>
          { posts.length } { posts.length > 1 ? 'people' : 'person' } chose this side so far
    </div>
  }

  return (
    <div className='w-full flex flex-col'>
      <form method='post' onSubmit={onAction}>
        <MainAction/>
        { editing || loading || adding || <TopLabel/> }
        <div className='w-full mt-8'>
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