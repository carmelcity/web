"use client"

import React from 'react'
import * as anims from './anims'
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

export const Animation = (opts: any) => {
    const animationData = (anims as any)[opts.id]
    let View: any = <div/>
    
    const options = {
        loop: false,
        autoplay: true, 
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        },
        ...opts
    }

    try {            
        View = (<div className='w-full items-center align-center flex flex-col'>
                    <div className='w-full h-full'>
                        <Lottie
                            options={options}
                            height={opts.height || 150}
                            width={opts.width || 150}/>
                    </div>
                </div>) 
    } catch {}

    return View
}