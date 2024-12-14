import React, { useEffect, useRef, useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import { Modal } from '~/components/modal';
import { showSuccessToast } from '~/components/toasts';
import DynamicIcon from '~/components/icons/Dynamic';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const AccessModal = ({ isModalOpen, setModalOpen }: any) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [address, setAddress] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [isAddressValid, setIsAddressValid] = useState<boolean>(true);
  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [isNameValid, setIsNameValid] = useState<boolean>(true);

  useEffect(() => {
    if (!isModalOpen) {
      // Reset fields when the modal is closed
      setName('');
      setIsWaiting(false)
      setIsRegister(false)
      setIsNameValid(true);
    }
  }, [isModalOpen]);

  const handleLogin = () => {
    setIsWaiting(true)
    showSuccessToast('Email sent');
  };


  const handleRegister = () => {
    setIsWaiting(true)
    showSuccessToast('Email sent');
  };

  const toggleType = () => {
    setIsRegister(!isRegister)
    // showSuccessToast('Email sent');
  };

  const forceClose = () => {
    setModalOpen(false)
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    setIsNameValid(newName.length >= 4 && newName.length <= 25);
  };

  const errorMessageName = isNameValid ? '' : 'Name should be between 3 and 16 characters';
  const isButtonDisabled = name && isNameValid;

  const modalTitle = () => isWaiting ? "Check your email" : isRegister ? "Register" : "Login"
  const modalIcon = () => isWaiting ? "EnvelopeIcon" : isRegister ? "UserIcon" : "ArrowRightEndOnRectangleIcon"
  const waitingMessage = () => isRegister ? "To register, click on the link in the email" : "To login, click on the link in the email"

  const Error = () => {
    return <div
    className={`${readexPro.className} font-thin text-sm leading-6 text-red-500 ${
      isAddressValid ? 'mb-4' : 'mb-0'
    } `}>
    {errorMessageName}
  </div>
  }

  const ModalHeader = () => {
    return <div>
      <div className="flex justify-center items-center text-primary">
        <DynamicIcon name={modalIcon()} width={48} height={48} />
      </div>
      <div className="mt-2 text-center font-normal leading-6 text-primary text-2xl">
        { modalTitle() }
      </div>
    </div>
  }

  const LoginContent = () => {
    return <div className="flex flex-col flex-col">
      <div className={`${readexPro.className} font-thin leading-6 text-grey mb-1 mt-8`}>Username:</div>
      <div className="flex flex-col relative mb-8">
          <input
            type="text"
            placeholder="Enter your username"
            className={`${
              readexPro.className
            } font-thin focus:border-none focus:ring-[0.7px] focus:ring-[#00FFFF] placeholder:text-cyan/50 placeholder:font-light focus:placeholder:text-transparent w-full h-10 px-4 bg-[#022A27] text-sm text-white ${
              isNameValid ? 'border-cyan/20' : 'border-red-500'
            } border-solid border-1`}
            style={{
              WebkitAppearance: 'none',
              margin: 0,
              MozAppearance: 'textfield',
            }}
          />
      </div>
    </div>
  }

  const RegisterContent = () => {
    return <div className="flex flex-col flex-col">
      <div className={`${readexPro.className} font-thin leading-6 text-grey mb-1 mt-8`}>Email:</div>
      <div className="flex flex-col relative mb-8">
          <input
            type="email"
            placeholder="Enter your email"
            className={`${
              readexPro.className
            } font-thin focus:border-none focus:ring-[0.7px] focus:ring-[#00FFFF] placeholder:text-cyan/50 placeholder:font-light focus:placeholder:text-transparent w-full h-10 px-4 bg-[#022A27] text-sm text-white ${
              isNameValid ? 'border-cyan/20' : 'border-red-500'
            } border-solid border-1`}
            style={{
              WebkitAppearance: 'none',
              margin: 0,
              MozAppearance: 'textfield',
            }}
          />
      </div>
    </div>
  }

  const ModalContent = () => {
    if (isWaiting) {
        return <div className="flex flex-col flex-col">
            <div className="mt-2 text-center font-normal leading-6 text-primary text-md text-white mt-4">
              { waitingMessage() }
            </div>
        </div>
    }

    if (isRegister) {
      return <RegisterContent/>
    }

    return <LoginContent/>
  }

  const ModalButton = () => {
    if (isWaiting) {
      return <div/>
    }

    return <button
      type="button"
    className={`${
      readexPro.className
    } w-full h-12 mb-4 mt-4 justify-center m-auto text-sm text-black border border-cyan border-opacity-20 border-solid border-1 bg-primary`}
      onClick={isRegister ? handleRegister : handleLogin}>
      { isRegister ? 'Start Registration' : 'Login Now' }
  </button>
  }

  const ModalSecondAction = () => {
    if (isWaiting) {
      return <div/>
    }

    return <span
        onClick={toggleType}
        className={`flex justify-center items-center font-thin cursor-pointer hover:text-primary mt-4 ${
          readexPro.className
        } px-3 py-1 text-gray-400 backdrop-blur-sm text-sm`}>
        {isRegister ? `Login if you have an account` : `Request an account`}
      </span>
  }

  return (
    <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} forceClose={forceClose}>
      <div className="w-11/12 mx-auto">
        <ModalHeader/>
        <ModalContent/>
        <ModalButton/>  
        <ModalSecondAction/>  
      </div>
    </Modal>
  );
};
