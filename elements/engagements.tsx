import { DynamicIcon } from './icons';

export const Engagements = ({
    comments, upVotes, downVotes
  }: any) => {
    if (isNaN(parseInt(comments))) {
      return <div/>
    }

    return <div className="flex h-20 mr-2 flex-row items-center">
            <div className="ml-2 flex justify-center text-primary items-center mt-1 ">
              <DynamicIcon name={"ChatBubbleOvalLeftEllipsisIcon"} width={24} height={24} />
              <span className='text-text-gray-300 px-1'>{ comments }</span>
              <span className='text-text-gray-300'>comments</span>
            </div>
           <div className="ml-2 flex justify-center text-primary items-center mt-1">
              <DynamicIcon name={"HandThumbUpIcon"} width={24} height={24} />
              <span className='text-white p-1'>{ upVotes }</span>
            </div>
            <div className="ml-2 flex justify-center text-primary items-center mt-1">
              <DynamicIcon name={"HandThumbDownIcon"} width={24} height={24} />
              <span className='text-white p-1'>{ downVotes } </span>
            </div>
      </div>
  }