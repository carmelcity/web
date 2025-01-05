
import React from 'react';
import { Modal } from '~/components/modal';
import { DynamicIcon, readexPro } from '~/elements';

export const ConfirmModal = ({ isModalOpen, setModalOpen, message, onConfirm }: any) => {

  const forceClose = () => {
    setModalOpen(false)
  }

  const onYes = () => {
    onConfirm()
    forceClose()
  }

  const onNo = () => {
    forceClose()
  }

  return (
    <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} forceClose={forceClose}>
          <div className="w-11/12 mx-auto">
          <div>
          <div className="flex justify-center items-center text-primary">
              <DynamicIcon name={"QuestionMarkCircleIcon"} width={48} height={48} />
            </div>
            <div className="mt-2 text-center font-normal leading-6 text-white text-lg mt-4">
                { message }
          </div>
        </div> 
        <div className='flex flex-row gap-8'>
        <button
            onClick={onYes}
            className={`${
                readexPro.className
              } w-full h-12 mb-4 mt-8 justify-center m-auto text-sm text-black border border-primary border-opacity-40 border-solid border-1 bg-primary border-2 bg-dark-green text-gray-900 }`}>
                  Yes
            </button>
            <button
            onClick={onNo}
              className={`${
                readexPro.className
              } w-full h-12 mb-4 mt-8 justify-center m-auto text-sm text-black border border-primary border-opacity-40 border-solid border-1 bg-primary/10 border-2 bg-dark-green text-primary }`}>
                  No
            </button>
     </div>
      </div>
</Modal>
  );
};
