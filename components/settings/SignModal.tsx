import React, { useEffect, useState } from 'react'
import { Modal } from '~/components/modal'
import { DynamicIcon, readexPro, showSuccessToast, showErrorToast } from '~/elements'
import { signPublicKey, getSignature } from '~/sdk/security'

export const SignModal = ({ isModalOpen, setModalOpen, auth }: any) => {
  const [error, setError] = useState("")
  const [isWaiting, setIsWaiting] = useState<boolean>(false)

  const handleSign = async (data: any) => {
    setIsWaiting(true)

    let result = await auth.signatureAction("assert", { name: data.name })

    if (result.error) {
      showErrorToast(result.error)
      return 
    }

    const assertionJSON = JSON.parse(Buffer.from(result.assertion, 'base64').toString())
    const publicKey: any = signPublicKey(assertionJSON)
    const assertion: any = await navigator.credentials.get({ publicKey })       
    const signature = await getSignature(assertion, { challenge: assertionJSON.challenge })

    result = await auth.signatureAction("sign", { signature })

    if (result.error) {
      showErrorToast(result.error)
      return 
    }

    await auth.getFreshProfile()    

    showSuccessToast(`The signature was successful`)
    forceClose()
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    
    return handleSign(data)
  }

  useEffect(() => {
    if (!isModalOpen) {
      setError("")
      setIsWaiting(false)
    }
  }, [isModalOpen])

  const forceClose = () => {
    setModalOpen(false)
  }

  const modalTitle = () => error ? "Please try again" : "Sign now"
  const modalIcon = () => error ? "ExclamationTriangleIcon" : "LockClosedIcon" 
  const waitingMessage = () => error ? error : "The signature is being added"

  const ModalHeader = () => {
    return <div>
      <div className="flex justify-center items-center text-primary">
        <DynamicIcon name={modalIcon()} width={48} height={48} />
      </div>
      <div className="mt-2 text-center font-normal leading-6 text-primary text-2xl">
        { modalTitle() }
      </div>
      <div className="mt-2 text-center font-normal leading-6 text-white text-md mt-8 mb-8">
        Click to sign with your biometric signature.
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
          Sign
     </button>
  }

  return (
    <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} forceClose={forceClose}>
      <form method='post' onSubmit={handleSubmit}>
        <div className="w-11/12 mx-auto">
          <ModalHeader/>
          <ModalButton/>  
        </div>
      </form>
    </Modal>
  );
};
