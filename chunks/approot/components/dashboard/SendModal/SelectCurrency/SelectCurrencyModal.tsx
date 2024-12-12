import React, { useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import { Dialog } from '@headlessui/react';
import { Modal } from '~/components/modal';
import { SelectCurencyModalProps } from './props';
import { ArrowUp } from '~/components/icons/ArrowUp';
import { Ethereum } from '~/components/icons/Ethereum';
import { Carmel } from '~/components/icons/Carmel';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const SelectCurrencyModal = ({
  isModalOpen,
  setModalOpen,
  setSendModalOpen,
  setSendCurrency,
}: SelectCurencyModalProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('Ethereum');

  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(currency);
  };

  const handleNextClick = () => {
    setSendCurrency(selectedCurrency);
    setSendModalOpen(true);
    setModalOpen(false);
  };

  return (
    <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
      <div className="w-11/12 mx-auto">
        <div>
          <div className="flex justify-center items-center mb-5 mt-2">
            <ArrowUp />
          </div>
          <div className="mt-8 text-center sm:mt-5">
            <Dialog.Title as="h3" className={`${readexPro.className} font-normal text-white leading-6 text-grey`}>
              Select Currency
            </Dialog.Title>
            <div className="mt-8 sm:w-1/2 mx-auto bg-dark-green-secondary rounded-full h-1.5">
              <div
                className={`bg-cyan h-1.5 rounded-full w-[50%]${
                  selectedCurrency === 'Ethereum' ? ' border-cyan border border-opacity-20 border-solid' : ''
                }`}></div>
            </div>
          </div>
        </div>
        <div className="flex mt-24 sm:mt-24">
          <button
            type="button"
            className={`${
              readexPro.className
            } w-full h-32 justify-center m-auto bg-cyan/50 bg-opacity-50 text-md text-white ${
              selectedCurrency === 'Ethereum' ? 'border border-cyan border-opacity-50 border-solid' : ''
            }`}
            onClick={() => handleCurrencySelect('Ethereum')}>
            <div className="flex items-center justify-center mb-3">
              <Ethereum />
            </div>
            Ethereum
          </button>
          <button
            type="button"
            className={`${
              readexPro.className
            } w-full h-32 mx-2 justify-center m-auto bg-cyan/50 bg-opacity-50 text-md uppercase text-cyan/60 ${
              selectedCurrency === 'Carmel' ? 'border border-cyan border-opacity-50 border-solid' : ''
            }`}
            onClick={() => handleCurrencySelect('Carmel')}>
            <div className="mx-auto mb-3 w-12">
              <Carmel />
            </div>
            Carmel
          </button>
        </div>
        <button
          type="button"
          className={`${readexPro.className} w-full h-12 mb-4 mt-24 justify-center m-auto bg-cyan text-sm text-black border border-cyan border-opacity-20 border-solid border-1`}
          onClick={handleNextClick}>
          Next
        </button>
      </div>
    </Modal>
  );
};
