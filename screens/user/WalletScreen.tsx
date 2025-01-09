import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { DynamicIcon } from '~/elements'
import { readexPro } from '~/elements/fonts';
import { Container } from './Container';
import { TopupModal } from '~/components/wallet';

const Balance = () => {
  return <div
    key="balance"
    className="flex relative p-5 w-full bg-black lg:border-r border-primary/20 border-opacity-20 border-solid border-1 rounded-md z-10">
    <div className="flex flex-col w-full">
      <div
        className={`${readexPro.className} font-normal text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green mr-auto`}>
        Balance
      </div>
      <div className={`${readexPro.className} text-4xl font-normal mt-4 mr-auto`}>
        ${parseFloat(`0`).toFixed(2)} USD{' '}
      </div>
    </div>
  </div>
}

export const WalletScreen = ({ auth }: any) => {
  const [showTopup, setShowTopup] = useState(false);
  const [isReady, setIsReady] = useState(false)

  const onToggle = (v: boolean) => {
    if (!v) {
      setIsReady(false)
    }
    setShowTopup(v)
  }
  
  const onAddFunds = () => {
    setShowTopup(true)
  }

  const ActionButtons = () => {
    return <div 
        key="actions"
        className="flex relative w-full bg-black flex-row justify-center lg:mt-0 mt-4">
        <button
          onClick={onAddFunds}
          className={`${readexPro.className} flex px-3 w-64 h-20 text-xl text-gray-900 items-center bg-primary border border-cyan border-opacity-20 text-center justify-center lg:w-80 w-full ml-4 mr-4`}>
          <DynamicIcon name="PlusIcon" width={32} height={32} className='mr-2'/>    
          Add Funds
        </button>
      </div>
  }

  return <Container name="Wallet" icon="WalletIcon">
    <TopupModal auth={auth} isModalOpen={showTopup} setModalOpen={onToggle}/>

    <div className={`w-full flex flex-col justify-start h-auto mx-auto mb-4 pb-10 relative`}>
        <div className={`flex items-center mb-5 py-4 bg-black border border-primary/50 w-full lg:flex-row flex-col pb-4`}>
          <div className='w-full px-4'>
              <Balance/>
          </div>
          <div className='w-full'>
              <ActionButtons/>
          </div>
        </div>
      </div>
  </Container>
}