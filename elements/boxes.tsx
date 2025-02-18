'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useState, useRef } from 'react'
import { readex_pro, showSuccessToast } from '~/elements';
import TextareaAutosize from 'react-textarea-autosize';
import { useCarmelAuth } from '~/sdk'
import { showErrorToast } from '~/elements';

export const CommentBox = ({ name, onCancel, placeholder = "", text = "" }: any)  => {
    return <div className="lg:ml-auto text-right flex flex-col w-full">
        <TextareaAutosize
            minRows={3}
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

export const CarmelBox = ({ title, text, edit = true, carmelId, tags = [], onDone, onCancel, author = '', community = '' }: any) => {
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const auth = useCarmelAuth()

  const editor = useEditor({
    extensions: [StarterKit],
    content: text,
  })

  const handleSubmit = async (e: any) => {
     e.preventDefault()

     const formData = new FormData(e.target)
     let data: any = Object.fromEntries(formData.entries())
     data.intro = editor?.getText()

     if (!data.title) {
        showErrorToast("You need a title")
        return 
     }

     if (!data.intro) {
        showErrorToast("You need to add text")
        return 
     }

     if (!data.author && !edit) {
        showErrorToast("You need an author")
        return 
     }

     if (!data.community && !edit) {
        showErrorToast("You need a community")
        return 
     }

     data.tags = data.tags.split(",").map((t: string) => t.trim())
 
     if (carmelId) {
         data.carmelId = carmelId
     }

     setSending(true)

     const result = await auth.governanceAction(edit ? 'editCarmel' : 'addCarmel', { data })

     if (result.error) {
        setSending(false)
        setError(result.error)
        showErrorToast(result.error)
        return 
     }

     setSending(false)
     showSuccessToast("Successfully updated")
     onDone()
  }

  if (sending) {
    return <div className='flex flex-col p-20'>
        <div className={`w-full flex justify-center relative h-12  bg-cyan bg-opacity-10 border border-primary/20 animate-pulse`}/>
        <div className={`w-full flex justify-center relative h-12  bg-cyan bg-opacity-10 border border-primary/20 mt-8 animate-pulse`}/>
        <div className={`w-full flex justify-center relative h-80  bg-cyan bg-opacity-10 border border-primary/20 mt-8 animate-pulse`}/>
      </div>
  }

  return <div className='flex flex-col w-full'>
        <form method='post' onSubmit={handleSubmit} className='w-full'>
            <div className={`${readex_pro.className} font-thin text-start leading-6 text-grey mb-1`}>
                { `Title:`}
            </div>
            <div className="w-full mx-auto">
                <input name="title" className='w-full border border-primary/50 p-2 bg-black/50' defaultValue={title}/>
            </div>
            <div className={`${readex_pro.className} font-thin text-start leading-6 text-grey mb-1 mt-4`}>
            { `Author:`}
            </div>
            <div className="w-full mx-auto">
                <input name="author" className='w-full border border-primary/50 p-2 bg-black/50' defaultValue={author}/>
            </div>
            <div className={`${readex_pro.className} font-thin text-start leading-6 text-grey mb-1 mt-4`}>
                { `Community:`}
            </div>
            <div className="w-full mx-auto">
                <input name="community" className='w-full border border-primary/50 p-2 bg-black/50' defaultValue={community}/>
            </div>
            
            <div className={`${readex_pro.className} font-thin text-start leading-6 text-grey mb-1 mt-4`}>
                { `Tags:`}
            </div>
            <div className="w-full mx-auto">
                <input name="tags" className='w-full border border-primary/50 p-2 bg-black/50' defaultValue={tags.join(", ")}/>
            </div>
            <div className={`${readex_pro.className} font-thin text-start leading-6 text-grey mb-1 mt-4`}>
                { `Text:`}
            </div>
            <div className="w-full mx-auto border border-primary/50">
                <EditorContent editor={editor} className='w-full p-2' />
            </div>
     
            <div className='flex flex-row mt-8 border-t border-primary/20 pt-8 w-full gap-4 px-4'>
                <button
                    type="submit"
                    className="bg-primary flex gap-2 flex-row hover:bg-dark-green-secondary p-2 hover:text-white text-gray-900 font-bold">
                        Submit
                </button>
                <button
                    type="button"
                    className="bg-transparent flex gap-2 flex-row hover:bg-dark-green-secondary p-2 text-primary font-bold"
                    onClick={onCancel}>
                        Cancel
                </button>
            </div>
        </form>

    </div>
}
