import React, { useState } from 'react'
import { readex_pro } from '~/elements';

export const CommentBox = ({ name, onCancel, placeholder = "", text = "" }: any)  => {
    return <div className="lg:ml-auto text-right flex flex-col w-full">
        <textarea
            placeholder={placeholder}
            defaultValue={text}
            name={name}
            className={`${readex_pro.className} border border-opacity-10 text-left p-2 bg-secondary mt-2 w-full h-80 border-primary/50 mb-4`}
        />
        <div className="mt-auto mb-1 flex flex-row gap-4">
        <button
        className="bg-transparent flex gap-2 flex-row hover:bg-dark-green-secondary p-2 text-primary font-bold"
        onClick={onCancel}>
            Cancel
        </button>
        <button
        className="bg-primary flex gap-2 flex-row hover:bg-dark-green-secondary p-2 hover:text-white text-gray-900 font-bold"
        type="submit">
            Submit
        </button>
    </div>
    </div>
  } 
  