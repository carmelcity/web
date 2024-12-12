import React, { useEffect, useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import { Dialog } from '@headlessui/react';
import { Modal } from '~/components/modal';
import { SwapModalProps } from './props';
import { Swap } from '~/components/icons/Swap';
import { SwapButton } from '~/components/icons/SwapButton';
import { SwapCard } from './SwapCard';
import { showSuccessToast } from '~/components/toasts';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const SwapModal = ({ isModalOpen, setModalOpen }: SwapModalProps) => {
  const [card1, setCard1] = useState({
    action: 'You send',
    coin: 'carmel',
    amount: '1',
    balance: '10352',
    isEditable: true,
    value: 0.112,
  });
  const [card2, setCard2] = useState({
    action: 'You receive',
    coin: 'weth',
    amount: '1',
    balance: '2592',
    isEditable: false,
    value: 1300,
  });

  const [editableAmount, setEditableAmount] = useState<string>('1');
  const [isValidAmount, setIsValidAmount] = useState<{ status: boolean; message: string }>({
    status: true,
    message: '',
  });

  const handleSwap = () => {
    const temp = { ...card1 };
    setCard1({ ...card2, action: 'You send', isEditable: true });
    setCard2({ ...temp, action: 'You receive', isEditable: false });
    setEditableAmount(card2.amount);
  };

  const handleUseMax = () => {
    setEditableAmount(card1.balance);
  };

  const handleApproveSwap = () => {
    setModalOpen(false);
    showSuccessToast(`${card1.coin.toLocaleUpperCase()} swapped to ${card2.coin.toLocaleUpperCase()}`);
  };

  const swappedAmount = (parseFloat(editableAmount) * card1.value) / card2.value;

  return (
    <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
      <div>
        <div className="flex justify-center items-center">
          <Swap />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <Dialog.Title as="h3" className={`${readexPro.className} font-normal text-white leading-6 text-grey`}>
            Exchange Carmel
          </Dialog.Title>
          <div className="mt-4">
            <p className={`${readexPro.className} font-light text-sm text-grey`}>Easiest way to swap currencies.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-full relative top-14 border border-cyan border-opacity-60 border-solid border-1">
          <SwapCard
            action={card1.action}
            coin={card1.coin}
            balance={card1.balance}
            amount={editableAmount}
            isEditable={card1.isEditable}
            onAmountChange={setEditableAmount}
            onAmountValidation={setIsValidAmount}
            onUseMax={handleUseMax}
          />
        </div>
        <button className="relative top-6 z-10" onClick={handleSwap}>
          <SwapButton />
        </button>
        <div className="w-full">
          <SwapCard
            action={card2.action}
            coin={card2.coin}
            balance={card2.balance}
            amount={swappedAmount.toString()}
            onAmountChange={() => {}}
            isEditable={card2.isEditable}
          />
        </div>
      </div>
      <div className="flex mb-10">
        <div className={`${readexPro.className} font-thin text-xs xxs:text-sm text-grey`}>Price per </div>
        <span className={`${readexPro.className} font-thin text-xs xxs:text-sm text-grey ml-1 uppercase`}>
          {card1.coin}
        </span>
        <span className={`${readexPro.className} font-light text-xs xxs:text-sm text-grey ml-auto uppercase`}>
          {(card1.value / card2.value).toFixed(7)} {card2.coin}
        </span>
      </div>

      {isValidAmount.status && (
        <div className="flex flex-wrap justify-start items-center">
          <div className={`${readexPro.className} font-thin text-xs xxs:text-sm`}>You are about to exchange</div>
          <span className={`${readexPro.className} font-thin text-xs xxs:text-sm text-cyan uppercase ml-1`}>
            {+editableAmount} {card1.coin}
          </span>
          <div className={`${readexPro.className} font-thin text-xs xxs:text-sm ml-1`}>for</div>
          <span className={`${readexPro.className} font-thin text-xs xxs:text-sm text-cyan uppercase ml-1`}>
            {swappedAmount.toFixed(6)} {card2.coin}
          </span>
        </div>
      )}
      {!isValidAmount.status && (
        <div className="flex flex-wrap justify-start items-center">
          <div className={`${readexPro.className} font-thin text-xs text-red-500 xxs:text-sm`}>
            {isValidAmount.message}
          </div>
        </div>
      )}
      <button
        type="button"
        className={`${readexPro.className} ${
          isValidAmount.status ? 'cursor-pointer bg-cyan' : 'cursor-not-allowed bg-cyan/50'
        } w-full h-12 mb-4 mt-4 justify-center m-auto text-sm text-black border border-cyan border-opacity-20 border-solid border-1`}
        onClick={handleApproveSwap}
        disabled={!isValidAmount.status}>
        Approve Swap
      </button>
    </Modal>
  );
};
