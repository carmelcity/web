import { readexPro } from '~/elements/fonts'
import { PostAuthor } from '~/elements';

export const CarmelPostCard = ({ 
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
    
    return <div className={`flex flex-col justify-start relative mb-8 w-full bg-black/50 border border-primary/20`}>
        <div className="flex flex-col p-4 leading-normal text-left w-full">
          <CardAuthor/>
          <p className={`${readexPro.className} mb-3 text-lg font-thin text-gray-400 2xl:w-5/6 mt-4`}>
            { text }
          </p>     
        </div>
    </div>
}