import React, { useState, useRef, useMemo } from 'react'
import * as anims from './anims'
import Lottie from 'react-lottie'

export default (opts: any) => {
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