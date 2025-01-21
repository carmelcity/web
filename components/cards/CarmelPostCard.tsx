import { readexPro } from '~/elements/fonts'
import { PostAuthor } from '~/elements';
import { CarmelPostComments } from '~/components/posts'
import { CommentButton, CommentBox } from '~/elements'

export const CarmelPostCard = ({ 
  text,
  highlight,
  carmelId,
  replying,
  loading,
  authorImage,
  author,
  updatedOn,
  postId,
  editing,
  parentId,
  community,
  onReply,
  onCancelEdit,
  onEdit,
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

    const MainAction = () => {
      if (loading) {
        return <div className="mt-4 pl-14 w-full flex flex-col gap-4">
              <div className={`h-5 w-32 bg-cyan/40 animate-pulse`}></div>
              <div className={`h-5 w-56 bg-cyan/40 animate-pulse`}></div>
              <div className={`h-5 w-48 bg-cyan/40 animate-pulse`}></div>
              </div>
      }

      if (editing || replying) {
        return <div className="mt-4 pl-14 w-full flex flex-row gap-4">
              <CommentBox onCancel={onCancelEdit} name="comment" text={replying ? "" : Buffer.from(text, 'base64').toString('utf8')}/>
          </div>
      }

      return <div className="mt-4 pl-14 w-full flex flex-row gap-4">
            { highlight && <CommentButton title="Edit" onPress={onEdit} icon="PencilSquareIcon"/> }
            <CommentButton title="Reply" onPress={onReply} icon="ChatBubbleLeftIcon"/>
        </div>
    }

    return <div className={`flex flex-col justify-start relative w-full ${highlight ? 'bg-primary/20' : 'bg-primary/5'} mb-4 border border-primary/20`}>
        <div className="flex flex-col p-4 leading-normal text-left w-full">
          <CardAuthor/>
          { loading || editing || <p className={`${readexPro.className} mb-3 text-lg font-thin text-gray-400 2xl:w-5/6 mt-4 pl-14`}>
               <Text text={Buffer.from(text, 'base64').toString('utf8')}/>
            </p>     
          }
          <MainAction/>
        </div>
        <CarmelPostComments comments={comments}/>
    </div>
}