import { DynamicIcon } from '~/elements'

export const RatingBadge = ({ score, description }: any) => {
    return <div
          key={'score'}
          data-tip={`${description}`}
          className={`tooltip tooltip-bottom tooltip-primary flex w-32 justify-center items-start font-thin cursor-pointer hover:bg-primary/30 px-1 bg-black/30 bg-opacity-25 text-white text-xs border border-primary/80 px-2 py-1 mb-4`}>
          <DynamicIcon name="CheckBadgeIcon" width={18} height={18} className='text-primary mr-2'/>
          <span key={'score-label2'} className={`flex justify-center items-center font-thin text-xs text-nowrap text-white mt-0.5`}>
              SCORE:
          </span>
          <span key={'score-label3'} className={`ml-1 flex justify-center items-center font-thin text-xs text-nowrap text-primary mt-0.5`}>
            { score } / 10
          </span>
    </div>
}