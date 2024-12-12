import React, { useState } from 'react'
import FormStep from '../common/FormStep'
import { useRouter } from 'next/router'
import FormStart from '../common/FormStart'
import FormEnd from '../common/FormEnd'

export default({ user, text, children }: any) => {
    const [finished, setFinished] = useState(false)
    const [started, setStarted] = useState(false)
    const [fields, setFields] = useState<any>({})

    const router = useRouter()
   
    const onStart = async () => {
      setStarted(true)
    }
  
    const onComplete = async () => {
      router.push("/")
    }

    if (!started) {
      return <FormStart onStart={onStart} text={text}/>
    }

    if (finished) {
      return  <FormEnd onComplete={onComplete} fields={fields} text={text}/>
    }
    
    return React.Children.map(children, (child) => React.cloneElement(child, { text, fields, user, setFinished, setFields }))
}