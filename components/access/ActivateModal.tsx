import React, { useEffect, useState } from 'react'
import { Modal } from '~/components/modal'
import { DynamicIcon, readexPro, showSuccessToast, showErrorToast } from '~/elements'
import { useCarmelAuth } from '~/sdk'

export const ActivateModal = ({ isModalOpen, onDone, token, setModalOpen }: any) => {
  const auth = useCarmelAuth()
  const [error, setError] = useState("")
  const [username, setUsername] = useState<string>('')
  const [isWaiting, setIsWaiting] = useState<boolean>(false)

  const handleAuth = async (data: any) => {
    const res = await auth.checkUsername({ username: `${data.username}`.trim().toLowerCase() })

    if (res.error) {
      showErrorToast(res.error)
      return
    }

    if (res.exists) {
      showErrorToast(`The account already exists`)
      return
    }

    const result = await auth.activateAccount({ username: data.username, token })
    
    if (result.error) {
      showErrorToast(result.error)
      return
    }
    
    forceClose()
    onDone()
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    if (!data.username || `${data.username}`.trim().length === 0) {
      showErrorToast(`Your username cannot be empty`)
      return 
    }

    if (!data.username || `${data.username}`.trim().length === 0) {
      showErrorToast(`Your username cannot be empty`)
      return 
    }

    if (`${data.username}`.trim().length > 20) {
      showErrorToast(`Your username cannot be more than 20 characters`)
      return 
    }

    const isValid = `${data.username}`.match(/^[0-9a-zA-Z\-]+$/);

    if (!isValid) {
      showErrorToast(`Only letters, numbers and '-' are allowed`)
      return 
    }

    return handleAuth(data)
  }

  useEffect(() => {
    if (!isModalOpen) {
      setUsername("")
      setError("")
      setIsWaiting(false)
    }
  }, [isModalOpen])

  const toggleType = () => {
    setUsername("")
    setError("")
    setIsWaiting(false)
  };

  const forceClose = () => {
    setModalOpen(false)
  }

  const modalTitle = () => error ? "Please try again" : isWaiting ? "Wait ..."  : "Activate your account"
  const modalIcon = () => error ? "ExclamationTriangleIcon" : isWaiting ? "EnvelopeIcon" : "UserPlusIcon"
  const waitingMessage = () => error ? error : "To login, click on the link in the email"

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
        { `Choose a username:`}
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

  const ModalContent = () => {
    if (isWaiting) {
        return <div className="flex flex-col flex-col">
            <div className="mt-2 text-center font-normal leading-6 text-gray-400 text-md mt-4">
              { waitingMessage() }
            </div>
        </div>
    }
    return <UsernameField/>
  }

  const ModalButton = () => {
    if (isWaiting) {
      return <div/>
    }

    return <button
      type="submit"
      className={`${
        readexPro.className
      } w-full h-12 mb-4 mt-4 justify-center m-auto text-sm text-black border border-primary border-opacity-40 border-solid border-1 bg-primary/10 border-2 bg-dark-green text-primary`}>
          { 'Create Your Account' }
     </button>
  }

  return (
    <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} forceClose={forceClose}>
      <form method='post' onSubmit={handleSubmit}>
        <div className="w-11/12 mx-auto">
          <ModalHeader/>
          <ModalContent/>
          <ModalButton/>  
        </div>
      </form>
    </Modal>
  );
};
