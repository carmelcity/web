import React, { useEffect, useState } from 'react'
import { InfiniteScrollComponent } from '~/elements';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { CarmelPostCard } from '~/components/cards'
import { CommentButton, ActionButton, CommentBox, showSuccessToast, DynamicIcon, showErrorToast } from '~/elements'
import { RatingModal } from './RatingModal'

export const CommunityPosts = ({ posts, auth, members, isMembershipPending, username, closed, type, isMember }: any) => {
  const [adding, setAdding] = useState(false)
  const [editing, setEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [joining, setJoining] = useState(false)
  const [isReadyConfirm, setIsReadyConfirm] = useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [ratingAnim, setRatingAnim] = useState<any>(undefined)
  const [rating, setRating] = useState<any>(undefined)
  const [currentComment, setCurrentComment] = useState<any>("")
  const [replyingPostId, setReplyingPostId] = useState(-10)

  const resetFields = () => {
    setEditing(false)
    setLoading(false)  
    setAdding(false)
    setCurrentComment("")
    setJoining(false)
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

  const onReplyToMyPost = (post: any) => {
    console.log("reply to mine ->", post)
  }

  const onCancelEdit = async () => {
    setEditing(false)
  }

  const onEdit = (post: any) => {
    setEditing(true)
  }
 
  const showPosts = () => {
    return posts.map((element: any, elementId: any) => {
      return <CarmelPostCard 
      replying={replyingPostId === element.postId}
      onCancelEdit={undefined}
      loading={loading}
      key={`${elementId}`} 
      auth={auth}
      currentComment={currentComment}
      onReply={() => onReply(element)}
      {...element}
      text={element.text}/>
    })
  }

  // const myPost = () => {
  //   const p = posts()

  //   if (!item || !p || p.length == 0 || !props.auth.isLoggedIn()) {
  //     return
  //   }

  //   const post = p.find((i: any) => i.author === props.auth.profile.username)
  //   const onSide = post && sidePosts && sidePosts.length > 0 ? sidePosts.find((p: any) => parseInt(p.postId) === parseInt(post.postId)) : false

  //   if (!post || isNaN(post.postId)) {
  //     return 
  //   }
    
  //   return {...post, onSide }
  // }

  const handlePostSubmission = async (text: string) => {
      setLoading(true)
      
      // setLoading(true)

      // const result = await auth.communityAction("newpost", {
      //   text: data.comment, username, type
      // })
  
      // console.log(result)
  
      // if (result.error) {
      //   showErrorToast(result.error)
      //   return 
      // }
  
      // setTimeout(() => {
      //   showSuccessToast("Your post was added")
      //   setAdding(false)
      //   setLoading(false)
      // }, 1000)


      // const oldPost = myPost()
      let action = "newpost"//replyingPostId > -10 ? "comment" :  "newpost"
      const result = await auth.communityAction(action, Object.assign({ text, username, type }, replyingPostId > -10 && { parentId: replyingPostId }))
        
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

  //   const oldPost = myPost()

  //   if (oldPost && oldPost.postId) {
  //     showErrorToast('You already joined this side')
  //     return 
  //   }

    setAdding(true)
  }

  // const onEditMyComment = async () => {
  //   if (!auth.isLoggedIn()) {
  //     showErrorToast("Please sign in first")
  //     return 
  //   }

  //   const oldPost = myPost()

  //   if (!oldPost || !oldPost.postId) {
  //     showErrorToast('You did not join this side yet!')
  //     return 
  //   }

  //   setEditing(true)
  // }

  const onCancelAddComment = async () => {
    setAdding(false)
  }

  const onJoin = async () => {
    if (!auth.isLoggedIn()) {
      showErrorToast("Please sign in first")
      return 
    }

    setJoining(true)
    const result = await auth.communityAction('join', { username, type }) 

    if (result.error) {
      showErrorToast(result.error)
      return resetFields()
    }

    showSuccessToast("Your request was sent")
    return resetFields()
  }

  const MainAction = () => {
      if (!auth.isLoggedIn()) {
        return <div/>
      }

      if (!isMember && closed) {
        return <div className='text-sm mt-4 text-gray-500 flex flex-row gap-2'>
          <DynamicIcon width={20} height={20} name="LockClosedIcon" className='text-primary'/> { `Access to this ${type} is closed.`}
        </div>
      }

      if (!isMember && !closed) {
        if (joining) {
          return <div className=''>          
             <div className={`h-10 w-48 bg-cyan/40 animate-pulse`}></div>
          </div>
        }

        if (isMembershipPending) {
              return <div className='text-sm text-gray-500 mt-4 flex flex-row gap-2'>
                  <DynamicIcon width={20} height={20} name="InformationCircleIcon" className='text-primary'/> { `Your membership request is pending`}
              </div>  
        }

        return <div className=''>          
            <ActionButton highlight onPress={onJoin} icon="UserPlusIcon" title={`Request Access`}/> 
         </div>
      }
    
      if (loading) {
          return <div className="mt-4 pl-14 w-full flex flex-col gap-4">
                 <div className={`h-5 w-32 bg-cyan/40 animate-pulse`}></div>
                 <div className={`h-5 w-56 bg-cyan/40 animate-pulse`}></div>
                 <div className={`h-5 w-48 bg-cyan/40 animate-pulse`}></div>
             </div>
      }

      return <div className='w-full flex flex-col'>
          <div className='text-sm text-gray-500 mt-4 flex flex-row gap-2'>
                <DynamicIcon width={20} height={20} name="ShieldExclamationIcon" className='text-primary'/> { `You are a member of this ${type}`}
          </div>
         { adding ? 
           <CommentBox onCancel={onCancelAddComment} name="comment" text={currentComment}/> : 
           <ActionButton onPress={onAddComment} icon="ChatBubbleLeftIcon" title="Add a post"/> 
         }          
       </div>
  }

  console.log({
    rating
  })

  return (<div className='w-full flex flex-col'>
      <RatingModal isModalOpen={isConfirmOpen} anim={ratingAnim} setModalOpen={onToggleConfirm} rating={rating} />
      <form method='post' onSubmit={onAction}>
        { auth.isLoggedIn() && <div className='w-full flex flex-row align-center border-primary/20 border-b pb-4'>
          <MainAction/>
        </div> }
        <div className='w-full mt-8'>
          <InfiniteScrollComponent
            renderItem={showPosts()}
            elementsNumber={1000}
            loader={<ListPlaceholder />}
          />
        </div>
    </form>
  </div>)
}