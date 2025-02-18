import React, { useRef } from 'react'
import { readexPro } from '~/elements/fonts'
import { PostAuthor, RatingBadge, PostText } from '~/elements';
import { getImageUrl } from '~/utils/main';
import { CommentButton } from '~/elements'
import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { readex_pro, showSuccessToast } from '~/elements';
import { RatingModal } from '~/components/posts/RatingModal'

export const CarmelCommentCard = ({ 
  text,
  authorImage,
  author,
  updatedOn,
  carmelId,
  parentId,
  postId,
  auth,
  rating,
  community,
  comments
}: any) => {    

  const [editing, setEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const box = useRef<any>(undefined)
  const [newRating, setNewRating] = useState<any>(undefined)
  const [ratingAnim, setRatingAnim] = useState<any>(undefined)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [isReadyConfirm, setIsReadyConfirm] = useState(false)

  const isMyPost = (auth.profile.username === author)

  const onEdit = () => {
     setEditing(true)
  }

  const onSave = async () => {
    setLoading(true)

    const result = await auth.postAction("editComment", { text: box.current.value, parentId, postId, author, carmelId })
    setNewRating(result.rating)
    
    if (result.success) {
      setRatingAnim({ id: "success", title: "Congrats, your post was added!" })
      setTimeout(() => { setRatingAnim(undefined) }, 2000)
    } else {
      setRatingAnim({ id: "error", title: "Not quite there yet..." })
      setTimeout(() => { setRatingAnim(undefined) }, 2000)
    }

    setIsConfirmOpen(true)
    setLoading(false)
    setEditing(false)
  }

  const onCancelEdit = () => {
    setEditing(false)
  }


  const onToggleConfirm = (v: boolean) => {
    if (!v) {
      setIsReadyConfirm(false)
    }
    setIsConfirmOpen(v)
  }

  const CommentBox = ({ name, onCancel, placeholder = "", text = "" }: any)  => {
   return <div className="lg:ml-auto text-right flex flex-col w-full">
      <TextareaAutosize
          ref={box}
          minRows={3}
          placeholder={placeholder}
          defaultValue={text}
          name={name}
          className={`${readex_pro.className} border border-opacity-10 text-left p-2 bg-secondary mt-2 w-full h-80 border-primary/50 mb-4`}
      />
      <div className="mt-auto mb-1 flex flex-row gap-4">
      <button
      className="bg-transparent flex gap-2 flex-row hover:bg-dark-green-secondary p-2 text-primary font-bold"
      onClick={onCancel}>
          Cancel
      </button>
      <button
      onClick={onSave}
      className="bg-primary flex gap-2 flex-row hover:bg-dark-green-secondary p-2 hover:text-white text-gray-900 font-bold"
      type="button">
          Submit
      </button>
    </div>
  </div>
}

const MainAction = () => {
        if (auth && !auth.isLoggedIn() || !isMyPost) {
          return <div/>
        }
        
        if (loading) {
          return <div className="mt-4 pl-14 w-full flex flex-col gap-4">
                <div className={`h-5 w-32 bg-cyan/40 animate-pulse`}></div>
                <div className={`h-5 w-56 bg-cyan/40 animate-pulse`}></div>
                <div className={`h-5 w-48 bg-cyan/40 animate-pulse`}></div>
            </div>
        }
  
        if (editing) {
          return <div className="mt-4 pl-14 w-full flex flex-row gap-4">
                <CommentBox onCancel={onCancelEdit} name="commentReplyEdit" text={text} placeholder={`What do you think? Add a thoughtful comment to this post.`}/>
            </div>
        }
  
        return <div className="mt-4 pl-14 w-full flex flex-row gap-4">
                <CommentButton title="Edit" onPress={onEdit} icon="PencilSquareIcon"/>
            </div>
    }

    const CardAuthor = () => {
      return <div className='flex flex-row'>
              <PostAuthor
                image={getImageUrl(author)}
                updatedOn={updatedOn}
                username={author}/>
        </div>
    }

    return <div className={`flex flex-col justify-start relative w-full pl-14 w-full`}>
        <RatingModal isModalOpen={isConfirmOpen} anim={ratingAnim} setModalOpen={onToggleConfirm} rating={newRating} />
        <div className="flex flex-col p-4 leading-normal text-left w-full">
          <CardAuthor/>
          <div className={`${readexPro.className} mb-3 text-lg font-thin 2xl:w-5/6 pl-14 flex flex-col mt-4`}>
              { rating && <RatingBadge {...rating}/> }
              <PostText text={text}/>          
          </div>     
          <MainAction/>
        </div>
    </div>
}