import React, { useState } from 'react'
import { InfiniteScrollComponent } from '~/elements';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { CarmelPostCard } from '~/components/cards'
import { CommentButton, Chunky, CommentBox, showSuccessToast, showErrorToast } from '~/elements'
import { RatingModal } from './RatingModal'

export const CarmelPosts = ({ carmelId, author, myPost, anti, posts, auth }: any) => {
  const [adding, setAdding] = useState(false)
  const [editing, setEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [rating, setRating] = useState<any>(undefined)
  const [currentComment, setCurrentComment] = useState<any>("")
  const [isReadyConfirm, setIsReadyConfirm] = useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [ratingAnim, setRatingAnim] = useState<any>(undefined)

  const [replyingPostId, setReplyingPostId] = useState(-10)

  const resetFields = () => {
    setEditing(false)
    setLoading(false)  
    setAdding(false)
    setCurrentComment("")
    setReplyingPostId(-10)
  }

  const onToggleConfirm = (v: boolean) => {
    if (!v) {
      setIsReadyConfirm(false)
    }
    setIsConfirmOpen(v)
  }

  const onReply = (post: any) => {
    setReplyingPostId(post.postId)
  }

  const onCancelEdit = async () => {
    resetFields()
  }

  const onEdit = (post: any) => {
    setEditing(true)
  }

  const showPosts = () => {
    const oldPost = myPost()
    const ogComment = oldPost && oldPost.text;

    let otherPosts = posts.filter((p: any) => !(oldPost && oldPost.postId === p.postId)).map((element: any, elementId: any) => {
       return <CarmelPostCard 
            replying={replyingPostId === element.postId}
            onCancelEdit={onCancelEdit}
            loading={loading && replyingPostId === element.postId}
            key={`${elementId}`} 
            currentComment={currentComment}
            onReply={() => onReply(element)}
            {...element}
            text={element.text} 
        />})

    if (oldPost && oldPost.onSide) {
      return [<CarmelPostCard 
        editing={editing} 
        replying={replyingPostId === oldPost.postId}
        highlight 
        currentComment={currentComment}
        ogComment={ogComment}
        loading={loading}
        text={oldPost ? oldPost.text : ""}
        onCancelEdit={onCancelEdit}
        key={'mypost'} 
        onReply={() => onReply(oldPost)} 
        onEdit={() => onEdit(oldPost)} {...oldPost}/>, ...otherPosts]
    }

    return [...otherPosts]
  }

  const handlePostSubmission = async (text: string) => {
    setLoading(true)
    
    const oldPost = myPost()
    let action = replyingPostId > -10 ? "comment" : (auth.profile.username !== author && !oldPost) ? "new" : "edit"    
    const result = await auth.postAction(action, Object.assign({ anti, text, carmelId }, replyingPostId > -10 && { parentId: replyingPostId }))

    if (result.error) {
      showErrorToast(result.error)
      return resetFields()
    }
    
    setRating(result.rating)
    
    if (result.success) {
      setRatingAnim({ id: "success", title: "Congrats, your post was added!" })
      setTimeout(() => { setRatingAnim(undefined) }, 2000)
    } else {
      setRatingAnim({ id: "error", title: "Not quite there yet..." })
      setTimeout(() => { setRatingAnim(undefined) }, 2000)
    }

    setIsConfirmOpen(true)

    if (result.success) {
      resetFields()
      return 
    }

    setCurrentComment(text)
    setLoading(false)
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
    
    await handlePostSubmission(data.comment)
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

      return <div className='w-full flex flex-row'>
        <div className='m-1'>
          <Chunky/>
        </div>
        { adding ? 
          <CommentBox text={currentComment} onCancel={onCancelAddComment} name="comment" placeholder={`What do you think? Add a thoughtful post to this debate.`}/> : 
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

  if (!author) {
    return <div/>
  }

  return (
    <div className='w-full flex flex-col'>
      <RatingModal isModalOpen={isConfirmOpen} anim={ratingAnim} setModalOpen={onToggleConfirm} rating={rating} />
      
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