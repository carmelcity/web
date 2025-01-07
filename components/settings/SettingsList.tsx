import React, { useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import { ContactListPlaceholder } from '~/components/placeholders/ContactList';
import { ActionButton } from '~/elements';
import { SignatureModal } from './SignatureModal';
import { readex_pro, DynamicIcon } from '~/elements';
import { supportsPasskeys } from '~/sdk/security'

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const SettingsList = ({ auth, data, isLoading }: any) => {
  const [showSignatureModal, setShowSignatureModal] = useState(false);
  const [isReady, setIsReady] = useState(false)

  if (isLoading) {
    return <ContactListPlaceholder />
  }

  const onToggle = (v: boolean) => {
    if (!v) {
      setIsReady(false)
    }
    setShowSignatureModal(v)
  }

  const onNewSignature = () => {
    setShowSignatureModal(true)
  }

  const SignaturesSectionAction = () => {
    if (!supportsPasskeys()) {
      return <div className='text-sm text-gray-400 pt-8'>
        Your device does not support passkeys, so you cannot secure your device at this time.
      </div>
    }

    return <div className='w-full flex justify-start mt-4'>
              <ActionButton title="Secure now" onPress={onNewSignature}/>
        </div>
  }

  const SignaturesSection = () => {
    const isSecured = auth.isDeviceSecured()

    return <div className="flex flex-col justify-start items-start p-4">
              <div className={`text-lg flex flex-row items-center ${isSecured ? 'text-primary' : 'text-red'} align-center w-full text-nowrap`}>
                  <DynamicIcon name={isSecured ? "CheckBadgeIcon" : "LockOpenIcon"} width={24} height={24} className={`${isSecured ? 'text-primary' : 'text-red'} text-sm mr-2 mb-1`}/>
                  Your device { isSecured ? 'is secured' : 'is not secured'} 
              </div>
              <div className='text-lg flex flex-row items-center text-gray-400 align-center text-sm w-full border-b pb-4 border-primary/20 mt-4'>
                  Securing this device enables you to perform sensitive actions such as depositing funds into your wallet.
              </div>
              { isSecured || <SignaturesSectionAction/> }
      </div>
  }
 
  return (
    <div className="w-full">
      <SignatureModal auth={auth} isModalOpen={showSignatureModal} setModalOpen={onToggle}/>
      <SignaturesSection/>
    </div>
  );
};
