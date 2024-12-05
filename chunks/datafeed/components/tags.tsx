import React from 'react'
import font from './font'
import Link from 'next/link'
import { DataItem } from '../types/data'

/**
 * 
 * @returns 
 */
const Tags = ({ data, href } : { href: string, data: DataItem }) => {
    if (!data.tags) {
      return <div/>
    }

    return <div className={`flex flex-wrap items-center px-4 gap-3 pb-4 w-full`}>
        { data.tags.map((tag: string, index: number) => (
            <Link
            href={`${href}/tag/${encodeURI(tag)}`}
            key={tag}
            className={`flex justify-center items-center font-thin ${ font } px-3 py-1 m-2 bg-[#0B6F6F] bg-opacity-25 text-white border border-light-primary border-[0.5px] border-opacity-50 backdrop-blur-sm btn btn-sm`}>
              { tag }
          </Link>
        ))}
    </div>
}

export default Tags