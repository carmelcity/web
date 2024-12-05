import React from 'react'
import Tags from './tags'
import Header from './header'
import Actions from './actions'
import { Footer } from './footer'
import { useRouter } from 'next/navigation'
import { DataItem } from '../types/data'

/**
 * 
 * @param data 
 * @returns 
 */
export const Card = ({ data } : { data: DataItem }) => {
    const router = useRouter()

    const onSelect= () => {
      if (data.simple) {
        return
      }
      
      router.push(`/${data.id}`)
    }

    return (<div onClick={onSelect} className={`cursor-${data.simple ? 'auto' : 'pointer'} mb-2 border border-primary-color/40 w-full flex flex-col`}>
      <Header data={{...data, onSelect }}/>
      <Actions data={data}/>
      
      <figure onClick={onSelect} className={`cursor-${data.simple ? 'auto' : 'pointer'}`}>
          <img src={data.banner} className='opacity-90 hover:opacity-100 scale-95 hover:scale-100 transition delay-50 duration-200 ease-in-out'/>
      </figure>

      <div className='p-4 text-grey'>
        { data.intro}
      </div>

      <Tags data={data} href="/"/>
      <Footer data={data}/>
    </div>)
}

export default Card