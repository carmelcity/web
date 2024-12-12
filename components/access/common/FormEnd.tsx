import React, { useState } from 'react'
import { Readex_Pro } from 'next/font/google'
import Animation from "~/components/anim"

const readexPro = Readex_Pro({ subsets: ['latin'] });

export default ({ text, onComplete, fields }: any) => {
    return <div className="xl:w-full mx-5 lg:mx-32 xl:mx-0 h-auto bg-transparent p-10 rounded-md shadow-lg backdrop-blur-lg border border-[2px] border-dark-turquoise z-30 relative mt-10 xl:mt-0">
        <Animation {...text.form.finishAnimation}/>
        <h1 className='text-xl mt-2'>
          Almost there, &nbsp;
          <span
          className={`${readexPro.className} mt-10 text-left text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green`}>
          { fields.username }
        </span>        
        </h1>
        <h1 className='text-lg mt-2'>
          { text.form.endSubtitle }
        </h1>
        { text.form.endActionTarget &&
        <button
          className={`${readexPro.className} bg-cyan bg-opacity-80 hover:bg-opacity-90 text-black py-2 px-4 focus:ring focus:ring-cyan focus:ring-opacity-50 mt-10`}
          onClick={onComplete}>
          { text.form.endActionTitle }
        </button> }
      </div>
}