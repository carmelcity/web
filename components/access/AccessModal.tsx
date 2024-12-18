import React, { useEffect, useRef, useState } from 'react'
import { Readex_Pro } from 'next/font/google'
import { Modal } from '~/components/modal'
import { showSuccessToast, showErrorToast } from '~/components/toasts'
import DynamicIcon from '~/components/icons/Dynamic'
import { useCarmelAuth } from '~/sdk'

const readexPro = Readex_Pro({
  subsets: ['latin'],
})

export const AccessModal = ({ isModalOpen, setModalOpen }: any) => {
  const auth = useCarmelAuth()
  const [error, setError] = useState("")
  const [username, setUsername] = useState<string>('')
  const [isWaiting, setIsWaiting] = useState<boolean>(false)
  const [isRegister, setIsRegister] = useState<boolean>(false)

  const handleAuth = async (data: any) => {
    if (isRegister && !username) {
      const res = await auth.checkUsername(data)

      if (res.error) {
        showErrorToast(res.error)
        return
      }

      if (res.exists) {
        showErrorToast(`The account already exists`)
        return
      }

      setUsername(data.username)
      return
    }

    const result = await auth.getAuthToken(Object.assign({ ...data }, username && { username }))
    
    if (result.error) {
      showErrorToast(result.error)
      return
    }
    
    setIsWaiting(true)
    showSuccessToast('Email sent');
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    return handleAuth(data)
  }

  useEffect(() => {
    if (!isModalOpen) {
      setUsername("")
      setError("")
      setIsWaiting(false)
      setIsRegister(false)
    }
  }, [isModalOpen])

  const toggleType = () => {
    setUsername("")
    setError("")
    setIsWaiting(false)
    setIsRegister(!isRegister)
  };

  const forceClose = () => {
    setModalOpen(false)
  }

  const modalTitle = () => error ? "Oh no, please try again" : isWaiting ? "Check your email" : isRegister ? "Register" : "Login"
  const modalIcon = () => error ? "ExclamationTriangleIcon" : isWaiting ? "EnvelopeIcon" : isRegister ? "UserIcon" : "ArrowRightEndOnRectangleIcon"
  const waitingMessage = () => error ? error : isRegister ? "To register, click on the link in the email" : "To login, click on the link in the email"

  const ModalHeader = () => {
    return <div>
      <div className="flex justify-center items-center text-primary">
        <DynamicIcon name={modalIcon()} width={48} height={48} />
      </div>
      <div className="mt-2 text-center font-normal leading-6 text-primary text-2xl">
        { modalTitle() }
      </div>
      <div className="mt-2 text-center font-normal leading-6 text-white text-md">
          { username }
      </div>

    </div>
  }

  const UsernameField = () => {
    return <div className="flex flex-col flex-col">
      <div className={`${readexPro.className} font-thin leading-6 text-grey mb-1 mt-8`}>
        { isRegister ? `Choose a username:` : `Your username:`}
      </div>
      <div className="flex flex-col relative mb-8">
          <input
            name="username"
            type="text"
            placeholder="Type here ..."
            className={`${
              readexPro.className
            } font-thin focus:border-none focus:ring-[0.7px] focus:ring-[#00FFFF] placeholder:text-cyan/50 placeholder:font-light focus:placeholder:text-transparent w-full h-10 px-4 bg-[#022A27] text-sm text-white ${
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
              <div className={`${readexPro.className} font-thin leading-6 text-grey mb-1 mt-8`}>Your Email:</div>
              <div className="flex flex-col relative mb-8">
                  <input
                    name="email"
                    type="email"
                    placeholder="Type here ..."
                    className={`${
                      readexPro.className
                    } font-thin focus:border-none focus:ring-[0.7px] focus:ring-[#00FFFF] placeholder:text-cyan/50 placeholder:font-light focus:placeholder:text-transparent w-full h-10 px-4 bg-[#022A27] text-sm text-white ${
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

  const LoginContent = () => {
    return <UsernameField/>
  }

  const RegisterContent = () => {
    return username ? <EmailField/> : <UsernameField/>
  }

  const ModalContent = () => {
    if (isWaiting) {
        return <div className="flex flex-col flex-col">
            <div className="mt-2 text-center font-normal leading-6 text-primary text-md text-white mt-4">
              { waitingMessage() }
            </div>
        </div>
    }

    if (isRegister) {
      return <RegisterContent/>
    }

    return <LoginContent/>
  }

  const ModalButton = () => {
    if (isWaiting) {
      return <div/>
    }

    return <button
      type="submit"
      className={`${
        readexPro.className
      } w-full h-12 mb-4 mt-4 justify-center m-auto text-sm text-black border border-primary border-opacity-40 border-solid border-1 ${isRegister ? 'bg-primary text-gray-900' : 'bg-primary/10 border-2 bg-dark-green text-primary' }`}>
          { isRegister ? username ? 'Start Registration' : "Continue" : 'Login Now' }
     </button>
  }

  const ModalSecondAction = () => {
    if (isWaiting) {
      return <div/>
    }

    return <span
        onClick={toggleType}
        className={`flex justify-center items-center font-thin cursor-pointer hover:text-primary mt-4 ${
          readexPro.className
        } px-3 py-1 text-gray-400 backdrop-blur-sm text-sm`}>
        {isRegister ? `Login if you have an account` : `Request an account`}
      </span>
  }

  return (
    <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} forceClose={forceClose}>
      <form method='post' onSubmit={handleSubmit}>
        <div className="w-11/12 mx-auto">
          <ModalHeader/>
          <ModalContent/>
          <ModalButton/>  
          <ModalSecondAction/>  
        </div>
      </form>
    </Modal>
  );
};
