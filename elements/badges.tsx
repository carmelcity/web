import { useState } from 'react'
import { DynamicIcon } from '~/elements'

export const RatingBadge = ({ score, description }: any) => {
    const [show, setShow] = useState(false)

    const onToggle = () => {
      setShow(!show)
    }

    return <div className='flex flex-col'>
          <div
            key={'score'}
            onClick={onToggle}
            data-tip={`${description}`}
            className={`flex-row flex w-40 justify-center items-start font-thin cursor-pointer hover:bg-primary/30 px-1 bg-black/30 bg-opacity-25 text-white text-xs border border-primary/80 px-2 py-1 mb-4`}>
            <DynamicIcon name="CheckBadgeIcon" width={18} height={18} className='text-primary mr-2'/>
            <span key={'score-label2'} className={`flex justify-center items-center font-thin text-xs text-nowrap text-white mt-0.5`}>
                SCORE:
            </span>
            <span key={'score-label3'} className={`ml-1 flex justify-center items-center font-thin text-xs text-nowrap text-primary mt-0.5`}>
              { score } / 10
            </span>
            <DynamicIcon name={show ? 'ChevronUpIcon' : 'ChevronDownIcon'} width={16} height={16} className='text-white ml-2 mt-0.5'/>
          </div>
          { show && <div className='text-sm mb-4 text-gray-500 p-2 flex flex-row'>
            <DynamicIcon name={'ArrowTurnDownRightIcon'} width={16} height={16} className='text-white'/>

            { description}
          </div> }
        </div>
}

