import { readexPro } from '~/elements/fonts'
import { PostAuthor } from '~/elements';
import { CarmelPostComments } from '~/components/posts'
import { CommentButton } from '~/elements'

export const CarmelPostCard = ({ 
  text,
  carmelId,
  authorImage,
  author,
  updatedOn,
  postId,
  parentId,
  community,
  comments
}: any) => {    

    const CardAuthor = () => {
      return <div className='flex flex-row'>
              <PostAuthor
                image={authorImage}
                updatedOn={updatedOn}
                username={author}/>
        </div>
    }

    const Text = ({ text }: any) => {
      return <span className='whitespace-pre text-gray-300 text-wrap'>
        { text }
      </span>
    }

    const onAddComment = () => {
      console.log(carmelId, postId, parentId)
    }
    
    return <div className={`flex flex-col justify-start relative w-full`}>
        <div className="flex flex-col p-4 leading-normal text-left w-full">
          <CardAuthor/>
          <p className={`${readexPro.className} mb-3 text-lg font-thin text-gray-400 2xl:w-5/6 mt-4 pl-14`}>
            <Text text={text}/>
          </p>     
            <div className="mt-4 pl-14 w-full">
              <CommentButton title="Reply" onSave={onAddComment} icon="ChatBubbleLeftIcon"/>
            </div>
        </div>
        <CarmelPostComments comments={comments}/>
    </div>
}