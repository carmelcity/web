import { useState } from 'react' 
import { readexPro, DynamicIcon } from '~/elements'

const SM_MAX = 64
const LG_MAX = 256

export const PostText = ({ text }: any) => { 
    const [show, setShow] = useState(false)

    const onToggle = () => {
      setShow(!show)
    }

    return <span className='whitespace-pre text-gray-300 text-wrap'>
        <p className={show ? '' : `line-clamp-2`}>
            { text }
        </p>
        <div className='flex flex-row w-full justify-start'>
        { text.length > SM_MAX && <button className='text-sm text-gray-500 flex flex-row lg:hidden' onClick={onToggle}>        
             {show ? `show less` : `show more`}
            <DynamicIcon name={show ? 'ChevronUpIcon' : 'ChevronDownIcon'} width={16} height={16} className='ml-1 mt-0.5 text-white'/>
        </button> }
        { text.length > LG_MAX && <button className='text-sm text-gray-500 hidden lg:flex flex flex-row' onClick={onToggle}>        
             {show ? `show less` : `show more`}
            <DynamicIcon name={show ? 'ChevronUpIcon' : 'ChevronDownIcon'} width={16} height={16} className='ml-1 mt-0.5 text-white'/>
        </button> }
        </div>
    </span>
}

export const PostIntro = ({ text, short }: any) => { 
    const [show, setShow] = useState(false)

    const onToggle = () => {
      setShow(!show)
    }

   return  <span className='whitespace-pre text-gray-300 text-wrap'>
    <p className={`${readexPro.className} whitespace-break-spaces text-md font-thin text-gray-400 ${short ? 'line-clamp-2' : ''}`}>
        { text }
    </p> 
    </span> 
}
