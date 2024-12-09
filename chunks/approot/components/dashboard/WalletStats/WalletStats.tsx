import React, { useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import { StatsProps } from './props';
import arrowRight from '~/images/dashboard/ArrowRight_black.webp';
import useWindowSize from '~/sdk/hooks/windowSize';
import { LG_WIDTH } from '~/utils/constants';
import QR from '~/images/dashboard/QR.webp';
import mountain from '~/images/dashboard/Mountain.webp';
import arrowUp from '~/images/dashboard/ArrowUp.webp';
import arrowDown from '~/images/dashboard/ArrowDown.webp';
import { QrModal } from '../QrModal';
import { SwapModal } from '../SwapModal';
import { SelectCurrencyModal, SendModal } from '../SendModal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoCheckmarkDoneSharp, IoCopySharp } from 'react-icons/io5';
import { showSuccessToast } from '../../toasts';

import USDC from '~/images/dashboard/USDC.webp';
import ETH from '~/images/dashboard/ETH.webp';
import CARMEL from '~/images/dashboard/Carmel.webp';
import { formatAddress } from '../utils';
import { WalletStatsPlaceholder } from '~/components/placeholders/WalletStats';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const WalletStats = ({ user, isLoading }: StatsProps) => {
  const { width } = useWindowSize();
  const [copying, setCopying] = useState(false);
  const [isQrModalOpen, setQrModalOpen] = useState(false);
  const [isSwapModalOpen, setSwapModalOpen] = useState(false);
  const [isSelectCurrencyModalOpen, setSelectCurrencyModalOpen] = useState(false);
  const [isSendModalOpen, setSendModalOpen] = useState(false);
  const [sendCurrency, setSendCurrency] = useState('');

  if (isLoading) {
    return <WalletStatsPlaceholder />;
  }

  const secondFiatPrice = 3 || parseFloat(user.pools[1].prices[1]); // REMOVE 3 WHEN YOU NEED REAL DATA
  const firstFiatPrice = 3 || parseFloat(user.pools[0].prices[0]) * secondFiatPrice; // REMOVE 3 WHEN YOU NEED REAL DATA
  const firstBalance = 3 || parseFloat(user?.dataState?.tokens[Object.keys(user?.dataState?.tokens)[0]].balance); // REMOVE 3 WHEN YOU NEED REAL DATA
  const secondBalance = 3 || parseFloat(user?.dataState?.tokens[Object.keys(user?.dataState?.tokens)[1]].balance); // REMOVE 3 WHEN YOU NEED REAL DATA

  const firstAssetFiat = firstFiatPrice * firstBalance;
  const secondAssetFiat = secondFiatPrice * secondBalance;
  const fiatTotal = firstAssetFiat + secondAssetFiat;

  const fiatTotals = [firstAssetFiat, secondAssetFiat];

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

  const assetIcon = (name: string): any => {
    switch (name) {
      case 'WETH':
        return ETH;
      case 'USDC':
        return USDC;
      case 'CARMEL':
        return CARMEL;
    }
  };

  const getStats = () => {
    const stats =
      [] ||
      Object.keys(user?.dataState?.tokens).map((item: any, index: any) => {
        // REMOVE THE EMPTY ARRAY WHEN YOU NEED REAL DATA
        return (
          <div
            key={index}
            className="flex relative p-5 lg:w-full h-40 bg-black border border-cyan border-opacity-20 border-solid border-1 lg:ml-4 rounded-md z-10">
            <div className="flex flex-col w-full">
              <div className="flex relative">
                <div
                  className={`${readexPro.className} font-normal uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green mr-auto`}>
                  {item}
                </div>
                <div className="w-10 h-10">
                  <Image src={assetIcon(item)} alt="icon" />
                </div>
              </div>
              <div className={`${readexPro.className} text-2xl font-normal relative -lg:top-2 mr-auto`}>
                {parseFloat(user?.dataState?.tokens[item].balance).toFixed(6)}
              </div>
              <div className={`${readexPro.className} text-md text-grey mr-auto font-extralight mt-auto`}>
                ${fiatTotals[index].toFixed(6)} USD
              </div>
            </div>
          </div>
        );
      });

    const total = (
      <div
        key="total"
        className="flex relative p-5 lg:w-full h-40 bg-black border border-cyan border-opacity-20 border-solid border-1 rounded-md z-10">
        <div className="flex flex-col w-full">
          <div
            className={`${readexPro.className} font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green mr-auto`}>
            Total balance
          </div>
          <div className={`${readexPro.className} text-2xl font-normal mt-4 mr-auto`}>
            {' '}
            $ {fiatTotal.toFixed(6)} USD{' '}
          </div>
          <div className="flex items-center mt-auto w-full">
            <div className={`${readexPro.className} text-sm text-grey mr-auto font-extralight`}>
              {firstBalance.toFixed(6)} CARMEL
            </div>
            <div className={`${readexPro.className} text-sm text-grey ml-auto font-extralight`}>
              {secondBalance.toFixed(6)} WETH
            </div>
          </div>
        </div>
      </div>
    );

    const swap = (
      <div
        key="qr"
        className="hidden xl:flex relative p-5 lg:w-1/2 h-40 bg-gradient-to-r from-cyan to-light-green z-10 ml-4 rounded-md hover:cursor-pointer"
        onClick={handleSwapClick}>
        <div className="flex flex-col w-full">
          <div className="flex items-center">
            <Image src={QR} alt="qr" className="mb-auto" />
            <Image src={mountain} alt="logo" className="ml-auto" />
          </div>
          <div className="flex items-center mt-auto w-full">
            <div className={`${readexPro.className} text-lg text-black mr-auto font-normal w-1/2`}>Exchange Carmel</div>
            <Image src={arrowRight} alt="arrow" className="mt-auto " />
          </div>
        </div>
      </div>
    );

    const screenSize = window.innerWidth;

    const elements = [total, ...(stats || '')];

    if (screenSize >= 1024) {
      elements.push(swap);
    }

    return elements;
  };

  return (
    <div className="mb-8 mt-10 max-w-[1920px] m-5 sm:ml-8 h-auto relative pt-24 lg:pt-0">
      <div className="flex items-center mb-5">
        <span
          className={`${readexPro.className} xl:hidden lg:font-light flex items-start text-md font-light lg:text-xl z-10 relative`}>
          {(user.dataState?.primaryAddress && formatAddress(user.dataState?.primaryAddress, 6)) ||
            formatAddress('0xaaaa1234bbbb1234cccc1234dddd1234ee12ffff', 6)}
        </span>
        <span
          className={`${readexPro.className} hidden xl:flex lg:font-light flex items-start text-md font-light lg:text-xl z-10 relative`}>
          {user.dataState?.primaryAddress || '0xaaaa1234bbbb1234cccc1234dddd1234ee12ffff'}
        </span>

        <div className="flex relative h-12 bg-gradient-to-r from-cyan to-light-green z-10 rounded-md hover:cursor-pointer ml-5">
          <div className="flex flex-col w-full m-3">
            <div className="flex items-center mt-auto w-full">
              <CopyToClipboard
                text={user.dataState?.primaryAddress || '0xaaaa1234bbbb1234cccc1234dddd1234ee12ffff'}
                onCopy={onAddressCopy}>
                <div className={`${readexPro.className} text-lg text-black mr-auto font-normal flex flex-row`}>
                  {user.dataState?.primaryAddress}
                  {copying ? (
                    <IoCheckmarkDoneSharp className="m-1 text-back" />
                  ) : (
                    <IoCopySharp className="m-1 text-black" />
                  )}
                </div>
              </CopyToClipboard>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center ml-auto ">
          <button
            onClick={handleSendClick}
            className={`${readexPro.className} flex px-3 w-40 h-12 text-cyan items-center bg-dark-green-secondary border border-cyan border-opacity-20 border-solid border-1`}>
            Send
            <Image src={arrowUp} alt="up" className="ml-auto" />
          </button>
          <button
            onClick={handleQRClick}
            className={`${readexPro.className} flex px-3 text-cyan ml-3 w-40 h-12 items-center bg-dark-green-secondary border border-cyan border-opacity-20 border-solid border-1`}>
            Receive
            <Image src={arrowDown} alt="down" className="ml-auto" />
          </button>
        </div>
      </div>
      <div className="flex">
        {!width ? (
          getStats()
        ) : width <= LG_WIDTH ? (
          <Carousel
            infiniteLoop
            autoPlay
            showStatus={false}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            className="w-full">
            {getStats()}
          </Carousel>
        ) : (
          getStats()
        )}
      </div>

      <div className="flex mt-5 lg:hidden items-center ml-auto lg:mr-10">
        <button
          onClick={handleSendClick}
          className={`${readexPro.className} flex px-3 w-full h-12 text-cyan items-center bg-dark-green-secondary border border-cyan border-opacity-20 border-solid border-1`}>
          Send
          <Image src={arrowUp} alt="up" className="ml-auto" />
        </button>
        <button
          onClick={handleQRClick}
          className={`${readexPro.className} flex px-3 text-cyan ml-3 w-full h-12 items-center bg-dark-green-secondary border border-cyan border-opacity-20 border-solid border-1`}>
          Receive
          <Image src={arrowDown} alt="down" className="ml-auto" />
        </button>
      </div>

      <div
        key="qr"
        className="flex xl:hidden relative p-5 w-full h-40 bg-gradient-to-r from-cyan to-light-green z-10 mt-5 rounded-md hover:cursor-pointer"
        onClick={handleSwapClick}>
        <div className="flex flex-col w-full">
          <div className="flex items-center">
            <Image src={QR} alt="qr" className="mb-auto" />
            <Image src={mountain} alt="logo" className="ml-auto" />
          </div>
          <div className="flex items-center mt-auto w-full">
            <div className={`${readexPro.className} text-lg text-black mr-auto font-normal w-1/2`}>Exchange Carmel</div>
            <Image src={arrowRight} alt="arrow" className="mt-auto " />
          </div>
        </div>
      </div>
      <QrModal
        isModalOpen={isQrModalOpen}
        setModalOpen={setQrModalOpen}
        address={user.dataState?.primaryAddress || '0xaaaa1234bbbb1234cccc1234dddd1234ee12ffff'}
      />
      <SwapModal isModalOpen={isSwapModalOpen} setModalOpen={setSwapModalOpen} />
      <SelectCurrencyModal
        isModalOpen={isSelectCurrencyModalOpen}
        setModalOpen={setSelectCurrencyModalOpen}
        setSendModalOpen={setSendModalOpen}
        setSendCurrency={setSendCurrency}
      />
      <SendModal isModalOpen={isSendModalOpen} setModalOpen={setSendModalOpen} asset={sendCurrency} available={1.23} />
    </div>
  );
};
