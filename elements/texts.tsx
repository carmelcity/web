import { useState } from 'react' 
import { readexPro, DynamicIcon } from '~/elements'

export const PostText = ({ text }: any) => { 
    const [show, setShow] = useState(false)

    const onToggle = () => {
      setShow(!show)
    }

    return <span className='whitespace-pre text-gray-300 text-wrap'>
        <p className={show ? '' : `line-clamp-2`}>
            { text }
        </p>
        <button className='text-sm mt-4 text-gray-500 flex flex-row' onClick={onToggle}>        
             {show ? `show less` : `show more`}
            <DynamicIcon name={show ? 'ChevronUpIcon' : 'ChevronDownIcon'} width={16} height={16} className='ml-1 mt-0.5 text-white'/>
        </button> 
    </span>
}

export const PostIntro = ({ text, short }: any) => { 
   return  <p className={`${readexPro.className} whitespace-break-spaces text-md font-thin text-gray-400 ${short ? 'line-clamp-2' : ''}`}>
        { text }
    </p>  
}
