import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { DynamicIcon } from '~/elements'

export const Modal = ({ children, forceClose, isModalOpen, setModalOpen }: any) => {
  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => null}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto mt-20 mb-20 sm:mt-0 cursor-pointer" onClick={forceClose}>
          <div className="flex mt-16 sm:mt-32 justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-md sm:p-6  border border-cyan overflow-visible border-opacity-20 border-solid border-1">
                <div className='w-full flex flex-row justify-end'>
                  <button onClick={forceClose} className='border-none'> 
                    <DynamicIcon width={40} height={40} name="XMarkIcon"/>
                  </button>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
