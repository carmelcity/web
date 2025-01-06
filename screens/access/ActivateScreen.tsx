import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Title, Animation, Spinner } from '~/elements';
import Image from 'next/image';
import logo from '~/public/images/logo/logo-white.svg';
import { useCarmelAuth } from '~/sdk';
import { ActivateModal } from '~/components/access/ActivateModal';


export const ActivateScreen = () => {
  const [error, setError] = useState("")
  const [isModalOpen, setModalOpen] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [success, setSuccess] = useState(false)
  const auth = useCarmelAuth()
  const router = useRouter();

  const login = () => {
    setTimeout(() => {
      router.push('/profile')
    }, 3000)
  }

  const onDone = () => {
    setSuccess(true)
    login()
  }

  const onToggle = (v: boolean) => {
    if (!v) {
      setIsReady(false)
    }
    setModalOpen(v)
  }

  useEffect(() => {
    (async () => {
      const { token } = router.query

      if (!token) {
        return 
      }

      setModalOpen(true)
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
      <ActivateModal token={router.query.token} isModalOpen={isModalOpen} onDone={onDone} setModalOpen={onToggle} />
      <div className="flex flex-col gap-4 m-8 items-center w-full w-full lg:max-w-[700px] border border-primary/50 bg-dark-green p-8">
            <Image
                    src={logo}
                    alt="card"
                    className={`object-fit w-24 h-24`}
                />
            {/* <Title
              decription="Carmel"
              moreClasses={`text-center lg:text-2xl text-lg uppercase mb-0`}
              isLoading={false}
            />
            <Title
              decription={error ? `Error` : success ? 'Success' : `Authenticating ...`}
              moreClasses={`text-center lg:text-2xl text-sm text-${error ? '[#cc0000]' : 'white'} uppercase mb-10`}
              isLoading={false}
            /> */}
            <div className='flex flex-col items-center justify-center align-center mb-10'>
              <Content/>
            </div>
      </div>
    </main>
  )
}