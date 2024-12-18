import React, { useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import { StatsProps } from './WalletStats/props';
import arrowRight from '~/images/dashboard/ArrowRight_black.webp';
import useWindowSize from '~/sdk/hooks/windowSize';
import { LG_WIDTH } from '~/utils/constants';
import QR from '~/images/dashboard/QR.webp';
import mountain from '~/images/dashboard/Mountain.webp';
import arrowUp from '~/images/dashboard/ArrowUp.webp';
import arrowDown from '~/images/dashboard/ArrowDown.webp';
// import { QrModal } from '../QrModal';
// import { SwapModal } from '../SwapModal';
// import { SelectCurrencyModal, SendModal } from '../SendModal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoCheckmarkDoneSharp, IoCopySharp } from 'react-icons/io5';
import { showSuccessToast } from '../toasts';
import DynamicIcon from '~/components/icons/Dynamic'

// import USDC from '~/images/dashboard/USDC.webp';
// import ETH from '~/images/dashboard/ETH.webp';
// import CARMEL from '~/images/dashboard/Carmel.webp';
// import { formatAddress } from '../utils';
// import { WalletStatsPlaceholder } from '~/components/placeholders/WalletStats';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const Wallet = () => {
  const { width } = useWindowSize();
  const [copying, setCopying] = useState(false);
  const [isQrModalOpen, setQrModalOpen] = useState(false);
  const [isSwapModalOpen, setSwapModalOpen] = useState(false);
  const [isSelectCurrencyModalOpen, setSelectCurrencyModalOpen] = useState(false);
  const [isSendModalOpen, setSendModalOpen] = useState(false);
  const [sendCurrency, setSendCurrency] = useState('');

  // if (isLoading) {
  //   return <WalletStatsPlaceholder />;
  // }

  // const secondFiatPrice = 3 || parseFloat(user.pools[1].prices[1]); // REMOVE 3 WHEN YOU NEED REAL DATA
  // const firstFiatPrice = 3 || parseFloat(user.pools[0].prices[0]) * secondFiatPrice; // REMOVE 3 WHEN YOU NEED REAL DATA
  // const firstBalance = 3 || parseFloat(user?.dataState?.tokens[Object.keys(user?.dataState?.tokens)[0]].balance); // REMOVE 3 WHEN YOU NEED REAL DATA
  // const secondBalance = 3 || parseFloat(user?.dataState?.tokens[Object.keys(user?.dataState?.tokens)[1]].balance); // REMOVE 3 WHEN YOU NEED REAL DATA

  // const firstAssetFiat = firstFiatPrice * firstBalance;
  // const secondAssetFiat = secondFiatPrice * secondBalance;
  // const fiatTotal = firstAssetFiat + secondAssetFiat;

  // const fiatTotals = [firstAssetFiat, secondAssetFiat];

  const onAddressCopy = () => {
    setCopying(true);
    showSuccessToast('Address copied to clipboard');
    setTimeout(() => {
      setCopying(false);
    }, 2000);
  };

  const handleQRClick = () => {
    setQrModalOpen(true);
  };

  const handleSwapClick = () => {
    setSwapModalOpen(true);
  };

  const handleSendClick = () => {
    setSelectCurrencyModalOpen(true);
  };

  // const assetIcon = (name: string): any => {
  //   switch (name) {
  //     case 'WETH':
  //       return ETH;
  //     case 'USDC':
  //       return USDC;
  //     case 'CARMEL':
  //       return CARMEL;
  //   }
  // };

  const getStats = () => {
    return <div
            key={0}
            className="flex relative p-5 lg:w-full h-40 bg-black border border-cyan border-opacity-20 border-solid border-1 lg:ml-4 rounded-md z-10">
            <div className="flex flex-col w-full">
              <div className="flex relative">
                <div
                  className={`${readexPro.className} font-normal uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green mr-auto`}>
                  USD
                </div>
                <div className="w-10 h-10">
                  {/* <Image src={assetIcon(item)} alt="icon" /> */}
                </div>
              </div>
              <div className={`${readexPro.className} text-2xl font-normal relative -lg:top-2 mr-auto`}>
                {parseFloat(`49293.34`).toFixed(6)}
              </div>
              <div className={`${readexPro.className} text-md text-grey mr-auto font-extralight mt-auto`}>
                ${parseFloat('3045959459.4958582763755').toFixed(6)} USD
              </div>
            </div>
          </div>
    }

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

  const ActionButtons = () => {
    return <div 
        key="actions"
        className="flex relative w-full bg-black flex-row justify-center lg:mt-0 mt-4">
        <button
          onClick={handleSendClick}
          className={`${readexPro.className} flex px-3 w-64 h-20 text-xl text-gray-900 items-center bg-primary border border-cyan border-opacity-20 text-center justify-center lg:w-80 w-full ml-4 mr-4`}>
          <DynamicIcon name="PlusIcon" width={32} height={32} className='mr-2'/>    
          Add Funds
        </button>
      </div>
  }

  return ( <div className={`w-full flex flex-col justify-start h-auto mx-auto mb-4 pb-10 relative lg:px-12 px-4`}>
        <div className={`flex items-center mb-5 py-4 bg-black border border-primary/50 w-full lg:flex-row flex-col pb-4`}>
          <div className='w-full px-4'>
              <Balance/>
          </div>
          <div className='w-full'>
              <ActionButtons/>
          </div>
        </div>
      </div>
  )
}
