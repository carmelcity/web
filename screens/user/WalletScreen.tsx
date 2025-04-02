import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { DynamicIcon } from '~/elements'
import { readexPro } from '~/elements/fonts';
import { Container } from './Container';
import { TopupModal } from '~/components/wallet';
import { TransactionsList } from '~/components/wallet';

const Balance = ({ ethBalance, ethPrice }: any) => {
  const BalanceContent = () => {
    if (!ethBalance || !ethPrice) {
      return <div className="flex flex-col mt-4 mb-2 w-full"><div className={`h-12 w-80 bg-cyan/20 animate-pulse`}/></div>
    }

    return <div className={`${readexPro.className} text-4xl font-normal mt-4 mr-auto`}>
            ${ (ethBalance * ethPrice).toFixed(2) } USD
      </div>
  }

  return <div
    key="balance"
    className="flex relative p-5 w-full bg-black lg:border-r border-primary/20 border-opacity-20 border-solid border-1 rounded-md z-10">
    <div className="flex flex-col w-full">
      <div
        className={`${readexPro.className} font-normal text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green mr-auto`}>
        Balance
      </div>
      <BalanceContent/>
    </div>
  </div>
}

export const WalletScreen = ({ auth }: any) => {
  const [showTopup, setShowTopup] = useState(false);
  const [isReady, setIsReady] = useState(false)
  const [ethPrice, setETHPrice] = useState(0)
  const [ethBalance, setETHBalance] = useState(0)

  const onToggle = (v: boolean) => {
    if (!v) {
      setIsReady(false)
    }
    setShowTopup(v)
  }
  
  const onAddFunds = () => {
    console.log("!!!")
    // setShowTopup(true)
  }

  useEffect(() => {
    (async () => {
      console.log(auth.profile)
      // const crypto = await auth.getCrypto()

      // if (crypto && crypto.ethPrice) {
      //   setETHPrice(crypto.ethPrice)
      // }

      // if (auth.profile.wallet && auth.profile.wallet.balance) {
      //   setETHBalance(auth.profile.wallet.balance.eth)
      // }
    })()
  }, [])

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
    {/* <TopupModal auth={auth} isModalOpen={showTopup} setModalOpen={onToggle}/> */}

    <div className={`w-full flex flex-col justify-start h-auto mx-auto mb-4 pb-10 relative`}>
        <div className={`flex items-center mb-5 py-4 bg-black border border-primary/50 w-full lg:flex-row flex-col pb-4`}>
          <div className='w-full px-4'>
              <Balance ethPrice={ethPrice} ethBalance={ethBalance}/>
          </div>
          <div className='w-full'>
              <ActionButtons/>
          </div>
        </div>
        <div className={`flex items-center mb-5 py-4 bg-black border border-primary/50 w-full lg:flex-row flex-col pb-4`}>
         { ethPrice ? <TransactionsList ethPrice={ethPrice} auth={auth}/>
          : <div className="flex flex-col mt-4 mb-2 w-full">
              <div className={`h-8 w-80 bg-cyan/20 ml-10 animate-pulse`}/>
              <div className={`h-8 w-80 bg-cyan/20 ml-10 mt-4 animate-pulse`}/>
              <div className={`h-8 w-80 bg-cyan/20 ml-10 mt-4 animate-pulse`}/>
            </div>
          }
        </div>
      </div>
  </Container>
}