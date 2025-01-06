import React, { useEffect, useRef, useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import { Dialog } from '@headlessui/react';
import { Modal } from '~/components/modal';
import { AddContactModalProps } from './props';
import { AddNewContact, PasteIcon } from '~/elements/icons';
import { isValidAddress } from '../../utils';
import { showSuccessToast } from '~/elements';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const AddContactModal = ({ isModalOpen, setModalOpen }: AddContactModalProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [address, setAddress] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [isAddressValid, setIsAddressValid] = useState<boolean>(true);
  const [isNameValid, setIsNameValid] = useState<boolean>(true);

  useEffect(() => {
    if (!isModalOpen) {
      // Reset fields when the modal is closed
      setName('');
      setAddress('');
      setIsAddressValid(true);
      setIsNameValid(true);
    }
  }, [isModalOpen]);

  const handleSaveClick = () => {
    setModalOpen(false);
    showSuccessToast('Contact saved');
  };

  const handleAddressBlur = () => {
    setIsAddressValid(isValidAddress(address));
  };

  const handleNameBlur = () => {
    setIsNameValid(name.length >= 4 && name.length <= 25);
  };

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

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    setIsNameValid(newName.length >= 4 && newName.length <= 25);
  };

  const errorMessageName = isNameValid ? '' : 'Name should be between 4 and 25 characters';
  const errorMessageAddress = isAddressValid ? '' : 'Address form: 0x... (42 characters)';

  const isButtonDisabled = name && address && isAddressValid && isNameValid;

  return (
    <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
      <div className="w-11/12 mx-auto">
        <div>
          <div className="flex justify-center items-center mb-5 mt-2">
            <AddNewContact />
          </div>
          <div className="mt-8 text-center sm:mt-5">
            <Dialog.Title as="h3" className={`${readexPro.className} font-normal text-white leading-6 text-grey`}>
              Add Contact
            </Dialog.Title>
          </div>
        </div>

        <div className="flex flex-col mt-20 flex-col">
          <div className={`${readexPro.className} font-thin leading-6 text-grey mb-1`}>Name / Herotag</div>
          <div className="flex flex-col relative mb-8">
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              placeholder="Type here..."
              className={`${
                readexPro.className
              } font-thin focus:border-none focus:ring-[0.7px] focus:ring-[#00FFFF] placeholder:text-cyan/50 placeholder:font-light focus:placeholder:text-transparent w-full h-10 px-4 bg-[#022A27] text-sm text-white border ${
                isNameValid ? 'border-cyan/20' : 'border-red-500'
              } border-solid border-1`}
              style={{
                WebkitAppearance: 'none',
                margin: 0,
                MozAppearance: 'textfield',
              }}
            />
            <div
              className={`${readexPro.className} font-thin text-sm leading-6 text-red-500 ${
                isAddressValid ? 'mb-4' : 'mb-0'
              } `}>
              {errorMessageName}
            </div>
          </div>
          <div className={`${readexPro.className} font-thin leading-6 text-grey mb-1`}>Address</div>
          <div className="flex relative">
            <div className="flex flex-col w-full">
              <input
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
                onBlur={handleAddressBlur}
                placeholder="Type here..."
                className={`${
                  readexPro.className
                } font-thin focus:border-none focus:ring-[0.7px] focus:ring-[#00FFFF] placeholder:text-cyan/50 placeholder:font-light focus:placeholder:text-transparent w-full h-10 px-4 bg-[#022A27] text-sm text-white border ${
                  isAddressValid ? 'border-cyan/20' : 'border-red-500'
                } border-solid border-1`}
                style={{
                  WebkitAppearance: 'none',
                  margin: 0,
                  MozAppearance: 'textfield',
                }}
              />

              <div
                className={`${readexPro.className} font-thin text-sm leading-6 text-red-500 ${
                  isAddressValid ? 'mb-4' : 'mb-0'
                } `}>
                {errorMessageAddress}
              </div>
            </div>
            <div className="absolute right-2 top-1 bg-[#022A27] p-1" title="Paste" onClick={handlePaste}>
              <PasteIcon />
            </div>
          </div>
        </div>

        <button
          type="button"
          className={`${
            readexPro.className
          } w-full h-12 mb-4 mt-24 justify-center m-auto text-sm text-black border border-cyan border-opacity-20 border-solid border-1 ${
            isButtonDisabled ? 'bg-cyan' : 'bg-cyan/50 cursor-not-allowed'
          }`}
          onClick={handleSaveClick}
          disabled={!isButtonDisabled}>
          Save Contact
        </button>
      </div>
    </Modal>
  );
};
