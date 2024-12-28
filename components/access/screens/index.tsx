import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Spinner } from '~/components/spinner'
import Title from '~/components/title';
import Image from 'next/image';
import logo from '~/public/images/logo/logo-white.svg';
import { useCarmelAuth } from '~/sdk';
import Animation from "~/components/anim"

export const AccessScreen = () => {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const auth = useCarmelAuth()
  const router = useRouter();

  const login = () => {
    setTimeout(() => {
      router.push('/profile')
    }, 3000)
  }

  useEffect(() => {
    (async () => {
      const { token } = router.query

      if (!token) {
        return 
      }
  
      const result = await auth.verifyAuthToken({ token })

      if (result.error) {
        setError(result.error.name === "TokenExpiredError" ? "The link expired, try again." : "An error occurred")
        return 
      }
      
      setSuccess(true)
      login()
    })()
  }, [router.query])

  const Content = () => {
    if (error) {
      return <div className='text-xl text-gray-500'>
         { error }
       </div>
    }

    if (success) {
      return <Animation id="success"/>
    }

    return <Spinner/>
  }

  return (
    <main className={`flex w-full flex-col justify-start items-center text-center`}>
      <div className="flex flex-col gap-4 m-8 items-center w-full w-full lg:max-w-[700px] border bg-dark-green p-8">
            <Image
                    src={logo}
                    alt="card"
                    className={`object-fit w-24 h-24`}
                />
            <Title
              decription="Carmel"
              moreClasses={`text-center lg:text-2xl text-lg uppercase mb-0`}
              isLoading={false}
            />
            <Title
              decription={error ? `Error` : success ? 'Success' : `Authenticating ...`}
              moreClasses={`text-center lg:text-2xl text-sm text-${error ? '[#cc0000]' : 'white'} uppercase mb-10`}
              isLoading={false}
            />
            <div className='flex flex-col items-center justify-center align-center mb-10'>
              <Content/>
            </div>
      </div>
    </main>
  )
}