import React, { useState } from 'react'
import { Readex_Pro } from 'next/font/google'
import Animation from "~/components/anim"

const readexPro = Readex_Pro({ subsets: ['latin'] });

export default ({ text, onStart }: any) => {
    return <div className="xl:w-full mx-5 lg:mx-32 xl:mx-0 h-auto bg-transparent p-10 rounded-md shadow-lg backdrop-blur-lg border border-[2px] border-dark-turquoise z-30 relative mt-2 xl:mt-0">
        <div className='flex flex-col items-center align-center'>
        <img src={ text.form.startImage }width={200} className='mb-2'/>
        <h1 className='text-2xl mt-2'>
        { text.form.title }
        </h1>
        <button
        className={`w-full mt-2 flex flex-col align-center items-center`}
        onClick={onStart}>
            <Animation {...text.form.startAnimation}/>
        </button>
        <span
        className={`${readexPro.className} mt-2 text-left text-md font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green`}>
            { text.form.footer }
        </span>
        </div>
    </div> 
}