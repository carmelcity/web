import React, { useEffect, useState } from 'react'
import { Modal } from '~/components/modal'
import { DynamicIcon, readexPro, showSuccessToast, showErrorToast } from '~/elements'
import { registerPublicKey, getSignatureJWK } from '~/sdk/security'

export const SignatureModal = ({ isModalOpen, setModalOpen, auth }: any) => {
  const [error, setError] = useState("")
  const [isWaiting, setIsWaiting] = useState<boolean>(false)

  const handleAdd = async (data: any) => {
    setIsWaiting(true)

    let result = await auth.signatureAction("challenge", { name: data.name })

    if (result.error) {
      showErrorToast(result.error)
      return 
    }

    const challenge = Buffer.from(result.challenge, 'base64')

    const siteUrl = `${process.env.NEXT_PUBLIC_SITE_URL}`
    const user = {
      id: `${auth.profile.username}@carmel`, 
      username: `${auth.profile.username}@carmel`
    }

    const publicKey: any = registerPublicKey({ siteUrl, user, challenge })
    const attestation: any = await navigator.credentials.create({ publicKey })
    const signatureJWK: any = await getSignatureJWK(attestation)

    const jwk = Buffer.from(JSON.stringify({ ...signatureJWK })).toString('base64')

    result = await auth.signatureAction("add", { jwk })

    if (result.error) {
      showErrorToast(result.error)
      return 
    }

    await auth.getFreshProfile()    

    showSuccessToast(`The signature was added`)
    forceClose()
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    
    return handleAdd(data)
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

  const modalTitle = () => error ? "Please try again" : "Secure this device"
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
        To secure this device, click to add a biometric signature right now.
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
          Add Signature
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
