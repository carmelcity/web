'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
  })

  const onCancel = () => {

  }

  const onSave = () => {
    console.log(editor?.getText())
  }

  return <div className='flex flex-col w-full'>
    <EditorContent editor={editor} className='w-full p-2' />
        <div className='flex flex-row mt-8 border-t border-primary/20 pt-4 w-full gap-4 px-4'>
            <button
                className="bg-primary flex gap-2 flex-row hover:bg-dark-green-secondary p-2 hover:text-white text-gray-900 font-bold"
                onClick={onSave}>
                    Submit
            </button>
            <button
                className="bg-transparent flex gap-2 flex-row hover:bg-dark-green-secondary p-2 text-primary font-bold"
                onClick={onCancel}>
                    Cancel
            </button>
        </div>
    </div>
}
