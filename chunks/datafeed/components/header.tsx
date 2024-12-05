import React from 'react'
import Icon from './icon'
import font from './font'
import Link from 'next/link'
import { DataItem } from '../types/data'
import moment from 'moment'

/**
 * 
 */
export default ({ data } : { data: DataItem }) => {
    return  <div onClick={data.onSelect} className={`cursor-${data.simple ? 'auto' : 'pointer'} flex flex-col w-full`}>
                <div className="flex flex-row items-center w-full bg-black/50">
                    <div className="flex items-center w-full px-4 py-4 border-b border-cyan/10">
                      <div className="flex flex-col w-full">
                          
                          { data.name && <div className="flex text-2xl break-words text-pretty text-primary">
                          { data.name }
                          </div> }

                          <div className="flex text-xl break-words text-pretty [overflow-wrap:anywhere]">
                          { data.title }
                          </div>
                          <div className="flex flex-row w-full text-grey text-sm flex-wrap">
                            <span>{ (data.type === "team" || data.type === "community") ? 'founded by' : (data.type === "user" ? 'since': 'by') }</span>
                            <Link className={`${ font } text-cyan font-normal pl-1 pr-1 z-50 pointer-cursor`} href={`/${data.author}`}>
                              { data.type === "user" ? moment(data.since, "YYYY-MM-DD").format('MMMM Do, YYYY'): data.author }
                            </Link> 

                            { data.target &&
                            [<span key="sp1">in</span>,
                            <Link key="sp2" className={`${ font } text-cyan font-normal pl-1 z-50 pointer-cursor`} href={`/${data.target}`}>
                                { data.target }
                            </Link>] }

                          </div>
                      </div>
                      { data.funds && <div className='flex flex-col items-center align-center items-center'>
                            <Link href={data.simple ? '#' : `/${data.id}`} key={'xlink'} className={`btn border w-20 lg:w-24 text-white border-primary/50 ${data.purchase ? 'bg-primary/50' : ''}`}>
                              <div className='flex flex-row text-white font-bold items-center'>
                                <Icon name="CurrencyDollarIcon" width={20} height={20} className='text-white'/>
                                { data.funds }
                              </div>
                            </Link>
                            <span className='text-grey text-xs pt-2 text-center'> { data.pricing } </span>
                       </div> }
                  </div> 
            </div>
  </div>
}