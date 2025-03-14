import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Title, Animation, Spinner } from '~/elements';
import Image from 'next/image';
import logo from '~/public/images/logo/logo-white.svg';
import { useCarmelAuth } from '~/sdk';
import { DynamicIcon, readexPro } from '~/elements'

export const RegisterScreen = () => {
  const [error, setError] = useState("")
  const auth = useCarmelAuth()
  const [isWaiting, setIsWaiting] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')
  const router = useRouter()

  const showError = (er: string) => {
    setError(er)
    setTimeout(() => {
        setError('')
    }, 2500)
  }

  const handleAuth = async (data: any) => {
      if (data.username) {
        const res = await auth.checkUsername({
          username: `${data.username.toLowerCase().trim()}`
        })
  
        if (res.error) {
            showError(res.error)
            return
        }
  
        if (res.exists) {
          showError(`The account already exists`)
          return
        }
  
        setUsername(data.username)
        return
      }
  
      let props: any = {}
  
      if (data.email) {
         props.email = `${data.email.toLowerCase().trim()}`
      }
  
      if (data.username) {
          props.username = `${data.username.toLowerCase().trim()}`
      }
  
      if (username) {
        props.username = `${username.toLowerCase().trim()}`
      }
  
      const result = await auth.getAuthToken(props)
      
      if (result.error) {
        showError(result.error)
        return
      }
      
      setIsWaiting(true)
    }
  
    const handleSubmit = async (e: any) => {
      e.preventDefault();
  
      const formData = new FormData(e.target)
      const data = Object.fromEntries(formData.entries())
  
      return handleAuth(data)
    }
  
    const toggleType = () => {
      setUsername("")
      setError("")
      setIsWaiting(false)
      router.push('/login')
    };
  
    const waitingMessage = () => error ? error : "Great, you're on the list. Stay tuned."

    const UsernameField = () => {
      return <div className="flex flex-col flex-col ">
        <div className={`${readexPro.className} font-thin text-start leading-6 text-grey mb-1 mt-8`}>
          { `Choose a username:`}
        </div>
        <div className="flex flex-col relative mb-8">
            <input
              name="username"
              type="text"
              placeholder="Type here ..."
              className={`${
                readexPro.className
              } font-thin lowercase focus:border-none focus:ring-[0.7px] focus:ring-[#00FFFF] placeholder:text-cyan/50 placeholder:font-light focus:placeholder:text-transparent w-full h-10 px-4 bg-[#022A27] text-sm text-white ${
                'border-cyan/20'
              } border-solid border-1`}
              style={{
                WebkitAppearance: 'none',
                margin: 0,
                MozAppearance: 'textfield',
              }}
            />
          </div>
      </div>
    }
  
    const EmailField = () => {
      return <div className="flex flex-col flex-col">
                <div className={`${readexPro.className} font-thin leading-6 text-grey  text-start mb-1 mt-8`}>Your Email:</div>
                <div className="flex flex-col relative mb-8">
                    <input
                      name="email"
                      type="email"
                      placeholder="Type here ..."
                      className={`${
                        readexPro.className
                      } font-thin lowercase focus:border-none focus:ring-[0.7px] focus:ring-[#00FFFF] placeholder:text-cyan/50 placeholder:font-light focus:placeholder:text-transparent w-full h-10 px-4 bg-[#022A27] text-sm text-white ${
                        'border-cyan/20'
                      } border-solid border-1`}
                      style={{
                        WebkitAppearance: 'none',
                        margin: 0,
                        MozAppearance: 'textfield',
                      }}
                    />
                </div>
          </div>
    }
  
    const RegisterContent = () => {
      return username ? <EmailField/> : <UsernameField/>
    }
  
    const MainContent = () => {
        if (isWaiting) {
            return <div className="flex flex-col flex-col">
                <Animation id="success"/>                
                <div className="mt-2 text-center font-normal leading-6 text-primary text-md mt-4">
                    { waitingMessage() }
                </div>
            </div>
        }
    
        return <RegisterContent/>
    }
  
    const MainButton = () => {
      if (isWaiting) {
        return <div/>
      }
  
      return <button
        type="submit"
        className={`${
          readexPro.className
        } w-full h-12 mb-4 mt-4 justify-center m-auto text-sm text-black border border-primary border-opacity-40 border-solid border-1 bg-primary text-gray-900`}>
            { username ? 'Join the waiting list' : "Continue" }
       </button>
    }
  
    const MainSecondAction = () => {
      if (isWaiting) {
        return <div/>
      }
  
      return <span
          onClick={toggleType}
          className={`flex justify-center items-center font-thin cursor-pointer hover:text-primary ${
            readexPro.className
          } px-3 py-1 text-gray-400 backdrop-blur-sm text-sm`}>
          {`Login if you have an account`}
        </span>
    }
    
    const MainPrompt = () => {
        if (error) {
            return  <div className={`${isWaiting ? 'hidden' : ''} mt-2 text-center font-normal leading-6 text-[#D81B60] text-md`}>
                { error }
            </div>
        }

        return <div className={`${isWaiting ? 'hidden' : ''} mt-2 text-center font-normal leading-6 text-primary text-md`}>
             { username ? `@${username}` : 'Join the waiting list'}
        </div>
    }

  return (
    <main className={`flex w-full flex-col justify-start items-center text-center`}>
      <div className="flex flex-col gap-4 m-8 items-center w-full w-full lg:max-w-[500px] border border-primary/50 bg-dark-green p-8">
              <Image src={logo} alt="card" className={`object-fit w-24 h-24`}/>
              <Title
              decription={'Get early access'}
              moreClasses={`text-center lg:text-2xl text-lg uppercase mb-0`}
              isLoading={false}
        />
            <MainPrompt/>
            <form method='post' onSubmit={handleSubmit} className='w-full'>
                <div className="w-full mx-auto">
                    <MainContent/>
                    <MainButton/>  
                </div>
            </form>
            </div>
            <MainSecondAction/>  
    </main>
  )
}