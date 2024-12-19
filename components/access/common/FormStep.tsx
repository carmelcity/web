import React, { useState, useCallback } from 'react'
import Animation from "~/components/anim"
import { useRouter } from 'next/router'
import HorizontalStepper from '~/components/horizontalStepper'
import { SmallSpinner } from '~/components/spinner'
import { readexPro } from '~/components/fonts'

export default ({ text, user, fields, setFields, setFinished, handlers }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [error, setError] = useState('')
  const [enableAction, setEnableAction] = useState(false)
  const [loading, setLoading] = useState(false)
  const steps = ['invite code', 'username', '']
  const [value, setValue] = useState('')
  const [hasInput, setHasInput] = useState(true)
  const router = useRouter()

  const { query } = router

  const updateValue = (event: any) => {
    setError('')
    setEnableAction(event.target.value)
    setValue(event.target.value)
  }

  const handleContinue = async () => {
    setLoading(true)
    let result;
    switch(currentIndex) {
      case 0: 
        result = await handlers[currentIndex].onLoad({ value, query })
        if (!result) {
          setError(text.form.steps[currentIndex].error)
        } else {
          setFields({ ...fields, [text.form.steps[currentIndex].key]: value })
          setCurrentIndex(currentIndex+1)
          setError('')
          setHasInput(!text.form.steps[currentIndex].disableNextInput) 
          setEnableAction(false)
          setFinished(text.form.steps.length == currentIndex + 1)
          setValue('')
        }
        break;
      case 1: 
        result = await handlers[currentIndex].onLoad({ value, query })
        if (result) {
           setFields({ ...fields,  [text.form.steps[currentIndex].key]: value })
           setCurrentIndex(currentIndex+1)
           setError('')
           setValue('')
           setHasInput(!text.form.steps[currentIndex].disableNextInput) 
           setEnableAction(true)
           setFinished(text.form.steps.length == currentIndex + 1)
          } else {
          setError(text.form.steps[currentIndex].error)
        }
        break;
      case 2: 
        result = await handlers[currentIndex].onLoad({ query, value: { ...fields, [text.form.steps[currentIndex].key]: (value || true) } })
        if (!result) {
          setError(text.form.steps[currentIndex].error)
        } else {
          setFields({ ...fields, [text.form.steps[currentIndex].key]: (value || true) })
          setCurrentIndex(currentIndex+1)
          setHasInput(!text.form.steps[currentIndex].disableNextInput) 
          setError('')
          setValue('')
          setEnableAction(true)
          setFinished(text.form.steps.length == currentIndex + 1)
        }
        break;
    }
    setLoading(false)
  }

  const Error = () => {
    if (!error) {
      return <div/>
    }

    return <div className="p-4 mb-4 text-sm bg-gray-800 text-red-400" role="alert">
        { error }
    </div>
  }

   return <div className="xl:w-full mx-5 items-center lg:mx-32 xl:mx-0 h-auto bg-transparent p-10 rounded-md shadow-lg backdrop-blur-lg border border-[2px] border-dark-turquoise z-30 relative mt-10 xl:mt-0">
    <Animation {...text.form.steps[currentIndex].animation}/>
    <h1 className='text-xl mt-4'>
      Step {currentIndex+1}: &nbsp;
      <span
      className={`${readexPro.className} mt-10 text-left text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green`}>
      { text.form.steps[currentIndex].title }
    </span>
    </h1>
    <div className="flex justify-center items-center m-10">
      { text.form.steps.length > 1 &&
        <HorizontalStepper stepsNumber={steps.length || 0} currentIndex={currentIndex} />
      }
    </div> 
    <Error/>
    {(loading || !hasInput) || <input
      type="text"
      id="value"
      onChange={updateValue}
      name="value"
      placeholder={text.form.steps[currentIndex].placeholder}
      className={`${readexPro.className} font-thin w-full py-2 px-3 bg-transparent border border-[0.1px] border-dark-turquoise placeholder-cyan placeholder-opacity-50 text-thin focus:placeholder-transparent focus:ring-cyan mt-4`}
    />}
    { loading && <SmallSpinner/> }
    { loading || <button
      disabled={!enableAction}          
      className={`${readexPro.className} bg-cyan ${enableAction ? 'bg-opacity-80 hover:bg-opacity-90' : 'bg-opacity-20'} text-black py-2 px-4 focus:ring focus:ring-cyan focus:ring-opacity-50 mt-10`}
      onClick={handleContinue}>
      Continue
      </button>
    }
  </div>
}