
import React from 'react';
import { Modal } from '~/components/modal';
import { DynamicIcon, Chunky, readexPro, ChunkyLarge } from '~/elements';

export const RatingModal = ({ isModalOpen, onSave, setModalOpen, rating }: any) => {
  const forceClose = () => {
    setModalOpen(false)
  }

  const onRetry = () => {
    forceClose()
  }

  const onSubmit = () => {
    onSave()
    forceClose()
  }

  if (!rating) {
    return <div/>
  }

  return (
    <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} forceClose={forceClose}>
          <div className="w-11/12 mx-auto">
          <div>
          <div className="flex justify-center items-center text-primary">
              <ChunkyLarge/>
            </div>
            <div className="mt-2 text-center font-normal leading-6 text-white text-lg mt-4">
          </div>

          <div className='w-full flex flex-col'>
          <div className='text-primary text-lg font-bold p-2'>
              Carmel Score: { rating.score } / 10
          </div>
          <div className='text-white text-md p-2'>
              { rating.note }
          </div>
          <div className='text-gray-400 text-sm p-2'>
              { rating.suggestion }
          </div>
        </div>
        </div> 
        <div className='flex flex-row gap-8'>
        { parseInt(rating.score) >= 8 && <button
            onClick={onSubmit}
              className={`${
                readexPro.className
              } w-full h-12 mb-4 mt-8 justify-center m-auto text-sm text-black border border-primary border-opacity-40 border-solid border-1 bg-primary/80 border-2 bg-dark-green text-gray-900 }`}>
                  Submit comment
            </button> }
          <button
            onClick={onRetry}
              className={`${
                readexPro.className
              } w-full h-12 mb-4 mt-8 justify-center m-auto text-sm text-black border border-primary border-opacity-40 border-solid border-1 bg-primary/10 border-2 bg-dark-green text-primary }`}>
                  Try again
            </button>
          </div>
      </div>
</Modal>
  );
};
