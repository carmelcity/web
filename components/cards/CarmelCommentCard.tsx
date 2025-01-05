import { readexPro } from '~/elements/fonts'
import { PostAuthor } from '~/elements';

export const CarmelCommentCard = ({ 
  text,
  authorImage,
  author,
  updatedOn,
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
    
    return <div className={`flex flex-col justify-start relative w-full lg:pl-20 pl-10 pb-10`}>
        <div className="flex flex-col p-4 leading-normal text-left w-full bg-black/20 border border-t border-primary/20">
          <CardAuthor/>
          <p className={`${readexPro.className} mb-3 text-lg font-thin text-gray-400 2xl:w-5/6 mt-4`}>
            { text }
          </p>     
        </div>
    </div>
}