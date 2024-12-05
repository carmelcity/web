import React from 'react'
import Icon from './icon'
import font from './font'
import Link from 'next/link'
import { DataItem } from '../types/data'

/**
 * 
 * @param data 
 * @returns 
 */
export const Footer = ({ data } : { data: DataItem }) => {
   if (!data.comments || !data.people) {
     return <div/>
   }

   return <div className="flex flex-row items-center w-full px-4 py-3 border-t border-cyan/10 align-center bg-black/50">        
      <Link href={data.simple ? '#' : `/${data.id}`} key={'x2'} className={`ml-2 flex justify-center items-center font-thin ${ font } px-2 py-1 text-cyan btn btn-sm bg-primary/10`}>
        <Icon name="ChatBubbleLeftEllipsisIcon" width={16} height={16} className='text-cyan'/> { data.comments } { data.comments > 1 ? 'comments' : 'comment' }
      </Link>
   </div>
}

export default Footer