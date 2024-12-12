import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ModalProps } from './props';

export const MobileBottomModal = ({ isModalOpen, setModalOpen, children }: ModalProps) => {
  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-hidden lg:hidden" onClose={setModalOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transform ease-out duration-300 transition-transform"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="transform ease-in duration-200 transition-transform"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-full">
            <div
              className="fixed bottom-0 shadow-lg shadow-cyan shadow-10 shadow-t drop-shadow-2xl border-t border-cyan/10 left-0 right-0 transform bg-black overflow-visible bg-opacity-90 h-[40%] sm:align-middle sm:w-full"
              style={{ boxShadow: '0 -10px 10px -10px #00FFFF' }}>
              <div className="px-4 pt-5 pb-4 h-full">{children}</div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
