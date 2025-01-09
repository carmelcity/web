import React, { useEffect, useState } from 'react'
import { Modal } from '~/components/modal'
import { DynamicIcon, readexPro, showSuccessToast, Animation } from '~/elements'
import { QRCodeSVG } from 'qrcode.react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { DocumentDuplicateGrey, } from '~/elements/icons';

export const TopupModal = ({ isModalOpen, setModalOpen, auth }: any) => {
  const [error, setError] = useState("")
  const [topup, setTopup] = useState<any>(undefined)
  const [now, setNow] = useState(Date.now())

  const forceClose = () => {
    setModalOpen(false)
  }

  const onNewTopup = () => {
    setTimeout(() => {
        showSuccessToast("Your wallet was topped up")
        forceClose()
    }, 2500)
  }

  useEffect(() => {
    if (!isModalOpen) {
      setError("")
      setTopup(undefined)
    }
  }, [isModalOpen])

  useEffect(() => {
    if (!auth.userNotifications || !auth.userNotifications.topups) {
      return 
    }
    
    const all = Object.values(auth.userNotifications.topups).filter((d: any) => parseInt(d.timestamp) > now)
    
    if (!all || all.length <= 0) {
      return
    }

    setTopup(all[0])
    onNewTopup()
  }, [auth.userNotifications])

  const modalTitle = () => error ? "Please try again" : "Top Up your Wallet"
  const modalIcon = () => error ? "ExclamationTriangleIcon" : "CurrencyDollarIcon" 

  const ModalHeader = () => {
    if (topup) {
      return <div/>
    }

    return <div>
      <div className="flex justify-center items-center text-primary">
        <DynamicIcon name={modalIcon()} width={48} height={48} />
      </div>
      <div className="mt-2 text-center font-normal leading-6 text-primary text-2xl">
        { modalTitle() }
      </div>
      <div className="mt-2 text-center font-normal leading-6 text-white text-md">
        Send ETH to the following address
      </div>
    </div>
  }

  const onAddressCopy = () => {
    showSuccessToast('Address copied to clipboard');
  }

  const ModalContent = () => {
   if (topup) {
    return <div className='flex flex-col w-full items-center mt-8 mb-8 cursor-pointer'>
        <Animation id="success"/>
      </div>
   }

   return <div className='flex flex-col w-full items-center mt-8 mb-8 cursor-pointer'>
    <QRCodeSVG
    value={auth.profile.wallet.address}
    size={256}
    bgColor={"#ffffff"}
    fgColor={"#000000"}
    level={"L"}
    imageSettings={{
        src: "/images/logo/logo-white.svg",
        x: undefined,
        y: undefined,
        height: 60,
        width: 60,
        excavate: true,
      }}/>
      <CopyToClipboard text={auth.profile.wallet.address}>
          <button
            className={`${readexPro.className}items-center font-thin text-primary mt-8 flex flex-row`}
            onClick={onAddressCopy}>
            { auth.profile.wallet.address }
            <div className="ml-1 text-white" title='Copy'>
              <DocumentDuplicateGrey/>
            </div>
          </button>
      </CopyToClipboard>
    </div>
  }

  return (
    <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} forceClose={forceClose}>
        <div className="w-11/12 mx-auto">
          <ModalHeader/>
          <ModalContent/>
        </div>
    </Modal>
  );
};
