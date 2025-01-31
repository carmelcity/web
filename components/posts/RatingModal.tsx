import React, { useEffect, useState, useMemo } from 'react';
import { Modal } from '~/components/modal';
import { DynamicIcon, Chunky, readexPro, ChunkyLarge } from '~/elements';
import { Title, Animation, Spinner } from '~/elements';
import { rightBottomCorner_SLOW_Variants, imageFadeInVariants } from '~/utils/animations';
import { motion } from 'framer-motion';

export const RatingModal = ({ isModalOpen, anim, setModalOpen, rating }: any) => {
  const forceClose = () => {
    setModalOpen(false)
  }

  const onRetry = () => {
    forceClose()
  }

  if (!rating) {
    return <div/>
  }
  
  const ModalContentDone = () => {
    if (anim) {
      return <div className="w-11/12 mx-auto">
          <div className="flex justify-center items-center text-primary">
                  <ChunkyLarge/>
                </div>
                <div className='w-full flex flex-col'>
                    <div className='text-primary text-lg font-bold p-2 text-center'>
                        { anim.title }
                    </div>
                    <Animation id={anim.id}/>
                </div>
      </div>
    } 

    return <div className="w-11/12 mx-auto">
              <motion.div
                  variants={imageFadeInVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}>
                    
                <div className="flex justify-center items-center text-primary">
                  <ChunkyLarge/>
                </div>

                <div className='w-full flex flex-col'>
                    <div className='text-primary text-lg font-bold p-2 text-center'>
                        Carmel Score: { rating.score } / 10
                    </div>
                    <div className='text-white text-md p-2'>
                        { rating.description }
                    </div>
                    <div className='text-gray-400 text-sm p-2'>
                        { rating.suggestion }
                    </div>
                </div>

                <div className='flex flex-row gap-8'>
                  <button
                    onClick={onRetry}
                      className={`${
                        readexPro.className
                      } w-full h-12 mb-4 mt-8 justify-center m-auto text-sm text-black border border-primary border-opacity-40 border-solid border-1 border-2 bg-dark-green bg-primary/10 text-primary`}>
                        { 'go back' }
                    </button>
                </div>
            </motion.div>
      </div>
  }

  return (
    <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} forceClose={forceClose}>
          <ModalContentDone/>
   </Modal>
  );
};
