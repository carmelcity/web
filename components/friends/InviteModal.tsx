import React, { useEffect, useState } from 'react'
import { Modal } from '~/components/modal'
import { DynamicIcon, readexPro, showSuccessToast, showErrorToast } from '~/elements'

export const InviteModal = ({ isModalOpen, setModalOpen, auth }: any) => {
  const [error, setError] = useState("")
  const [username, setUsername] = useState<string>('')
  const [isWaiting, setIsWaiting] = useState<boolean>(false)

  const handleInvite = async (data: any) => {
    if (!data || !data.email) {
      return 
    }

    const result = await auth.sendInvite("friend", { email: data.email })
   
    if (result.error) {
      setIsWaiting(true)
      setError(result.error)
      showErrorToast(result.error)
      forceClose()
      return
    }

    await auth.getFreshProfile()
    
    setIsWaiting(true)
    showSuccessToast(`Your invitation was sent`)
    forceClose()
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    return handleInvite(data)
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

  const modalTitle = () => error ? "Please try again" : "Invite a friend"
  const modalIcon = () => error ? "ExclamationTriangleIcon" : "UserPlusIcon" 
  const waitingMessage = () => error ? error : "Your invitation was sent"

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

  const EmailField = () => {
    return <div className="flex flex-col flex-col">
              <div className={`${readexPro.className} font-thin leading-6 text-grey mb-1 mt-8`}>Your Friend's Email:</div>
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

  const ModalContent = () => {
    if (isWaiting) {
        return <div className="flex flex-col flex-col">
            <div className="mt-2 text-center font-normal leading-6 text-gray-400 text-md mt-4">
              { waitingMessage() }
            </div>
        </div>
    }
    return <EmailField/>
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
          Send Invite
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
