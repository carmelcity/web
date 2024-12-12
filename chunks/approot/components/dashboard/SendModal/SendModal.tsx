import React, { useState, useRef, useEffect } from 'react';
import { Readex_Pro } from 'next/font/google';
import { Dialog } from '@headlessui/react';
import { Modal } from '~/components/modal';
import { SendModalProps } from './props';
import { ArrowUp } from '~/components/icons/ArrowUp';
import { showStatus } from '~/components/toasts';
import { PasteIcon } from '~/components/icons';
import { Dropdown } from '~/components/dropdown';
import { isClient, isValidAddress } from '../utils';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const SendModal = ({ isModalOpen, setModalOpen, asset, available }: SendModalProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [address, setAddress] = useState<string>((isClient() && localStorage.getItem('address')) || '');
  const [network, setNetwork] = useState<string>((isClient() && localStorage.getItem('network')) || '');
  const [amount, setAmount] = useState<number | string>((isClient() && localStorage.getItem('amount')) || '');
  const [isAddressValid, setIsAddressValid] = useState<boolean>(true);
  const [isAmountValid, setIsAmountValid] = useState<boolean>(true);

  useEffect(() => {
    if (!isModalOpen && isClient()) {
      // Reset fields when the modal is closed
      localStorage.setItem('amount', '');
      localStorage.setItem('network', '');
      localStorage.setItem('address', '');
      setAddress('');
      setNetwork('');
      setAmount('');
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (isClient()) {
      if (localStorage.getItem('address')) {
        setIsAddressValid(isValidAddress(address));
      }
      if (localStorage.getItem('amount')) {
        setIsAmountValid(
          !isNaN(parseFloat(amount.toString())) &&
            parseFloat(amount.toString()) >= 0.1 &&
            parseFloat(amount.toString()) <= available,
        );
      }
    }
  }, [address, amount]);

  useEffect(() => {
    if (isClient()) {
      localStorage.setItem('network', network);
    }
  }, [network]);

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();

      setAddress(clipboardText);
      // Use a callback to ensure that setIsAddressValid is called after setAddress
      setAddress(prevAddress => {
        setIsAddressValid(isValidAddress(prevAddress));
        return prevAddress;
      });

      if (inputRef.current) {
        inputRef.current.focus();
        document.execCommand('insertText', false, clipboardText);
      }
    } catch (err) {
      console.error('Error reading from clipboard:', err);
    }
  };

  const handleSend = () => {
    showStatus('Transaction in progress.');
    setModalOpen(false);
  };

  const isSendButtonEnabled = address && isAddressValid && network && amount && isAmountValid;

  const handleBlur = () => {
    setIsAddressValid(isValidAddress(address));
    localStorage.setItem('address', address);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove commas from the entered value
    let sanitizedValue = e.target.value.replace(/[^0-9.]/g, '');
    sanitizedValue = sanitizedValue.slice(0, 8); // max 8 characters

    setAmount(sanitizedValue);
  };

  const handleAmountBlur = () => {
    setIsAmountValid(
      !isNaN(parseFloat(amount.toString())) &&
        parseFloat(amount.toString()) >= 0.1 &&
        parseFloat(amount.toString()) <= available,
    );
    localStorage.setItem('amount', amount.toString());
  };

  const errorMessage = isAddressValid ? '' : 'Address form: 0x... (42 characters)';

  return (
    <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
      <div className="w-11/12 mx-auto">
        <div>
          <div className="flex justify-center items-center mb-5 mt-2">
            <ArrowUp />
          </div>
          <div className="mt-8 text-center sm:mt-5">
            <Dialog.Title as="h3" className={`${readexPro.className} font-normal text-white leading-6 text-grey`}>
              Send {asset}
            </Dialog.Title>
            <div className="mt-8 sm:w-1/2 mx-auto bg-dark-green-secondary rounded-full h-1.5">
              <div className={`bg-cyan h-1.5 rounded-full w-full`}></div>
            </div>
          </div>
        </div>
        <div className="flex mt-24 sm:mt-24 flex-col">
          <div className={`${readexPro.className} font-thin leading-6 text-grey`}>Address</div>
          <div className="flex relative">
            <div className="flex flex-col w-full">
              <input
                ref={inputRef}
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
                onBlur={handleBlur}
                placeholder="Enter Address"
                className={`${readexPro.className} 
                        font-thin 
                        focus:border-none 
                        focus:ring-[0.7px] 
                        focus:ring-[#00FFFF] 
                        placeholder:text-cyan/50 
                        placeholder:font-light 
                        focus:placeholder:text-transparent 
                        w-full 
                        h-10 
                        px-4 
                        bg-[#022A27] 
                        text-sm 
                        text-white 
                        border 
                        ${isAddressValid ? 'border-cyan/20' : 'border-red-500'} 
                        border-solid 
                        border-1
                      `}
              />

              <div
                className={`${readexPro.className} font-thin text-sm leading-6 text-red-500 ${
                  isAddressValid ? 'mb-4' : 'mb-0'
                } `}>
                {errorMessage}
              </div>
            </div>
            <div className="absolute right-2 top-1 bg-[#022A27] p-1" title="Paste" onClick={handlePaste}>
              <PasteIcon />
            </div>
          </div>
          <div className={`${readexPro.className} font-thin leading-6 text-grey`}>Network</div>
          <div className={`flex w-full mb-4`}>
            <Dropdown
              items={['Ethereum', 'Polygon']}
              defaultText={'Select Network'}
              onSelect={setNetwork}
              preselectedItem={(isClient() && localStorage.getItem('network')) || ''}
            />
          </div>
          <div className={`${readexPro.className} font-thin leading-6 text-grey`}>Amount</div>
          <div className="flex relative">
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              onBlur={handleAmountBlur}
              placeholder="Minimum 0.1"
              className={`${
                readexPro.className
              } font-thin focus:border-none focus:ring-[0.7px] focus:ring-[#00FFFF] placeholder:text-cyan/50 placeholder:font-light focus:placeholder:text-transparent w-full h-10 px-4 bg-[#022A27] text-sm text-white border ${
                isAmountValid ? 'border-cyan/20' : 'border-red-500'
              } border-solid border-1`}
              style={{
                WebkitAppearance: 'none',
                margin: 0,
                MozAppearance: 'textfield',
              }}
            />
            <div
              className={`${readexPro.className} absolute bg-[#022A27] z-20 right-3 top-2 leading-6 text-cyan hover:cursor-pointer`}
              onClick={() => setAmount(available)}>
              Max
            </div>
          </div>

          <div className={`${readexPro.className} font-thin text-sm leading-6 text-cyan`}>
            Available {available} {asset}
          </div>
        </div>
        <button
          type="button"
          className={`${
            readexPro.className
          } w-full h-12 mb-4 mt-24 justify-center m-auto text-sm border border-cyan border-opacity-20 border-solid border-1 ${
            !isSendButtonEnabled ? 'bg-cyan/50 cursor-not-allowed' : 'bg-cyan'
          } text-black`}
          onClick={handleSend}
          disabled={!isSendButtonEnabled}>
          Send
        </button>
      </div>
    </Modal>
  );
};
