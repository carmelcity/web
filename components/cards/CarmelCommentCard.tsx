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

    const Text = ({ text }: any) => {
      return <span className='whitespace-pre text-gray-400 text-wrap'>
        { text }
      </span>
    }
    
    
    return <div className={`flex flex-col justify-start relative w-full pl-14 w-full`}>
        <div className="flex flex-col p-4 leading-normal text-left w-full">
          <CardAuthor/>
          <div className={`${readexPro.className} mb-3 text-lg font-thin 2xl:w-5/6 pl-14`}>
            <Text text={Buffer.from(text, 'base64').toString('utf8')}/>
          </div>     
        </div>
    </div>
}