import { readexPro } from '~/elements/fonts'
import { PostAuthor, RatingBadge } from '~/elements';
import { getImageUrl } from '~/utils/main';

export const CarmelCommentCard = ({ 
  text,
  authorImage,
  author,
  updatedOn,
  rating,
  community,
  comments
}: any) => {    

    const CardAuthor = () => {
      return <div className='flex flex-row'>
              <PostAuthor
                image={getImageUrl(author)}
                updatedOn={updatedOn}
                username={author}/>
        </div>
    }

    const Text = ({ text }: any) => {
      return <span className='whitespace-pre text-gray-400 text-wrap'>
        { text }
      </span>
    }
    
    
    return <div className={`flex flex-col justify-start relative w-full pl-14 w-full`}>
        <div className="flex flex-col p-4 leading-normal text-left w-full">
          <CardAuthor/>
          <div className={`${readexPro.className} mb-3 text-lg font-thin 2xl:w-5/6 pl-14 flex flex-col mt-4`}>
               <RatingBadge {...rating}/> 
              <Text text={text}/>          
          </div>     
        </div>
    </div>
}