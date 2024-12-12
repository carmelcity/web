import { Dispatch, SetStateAction } from 'react';

export type SwapModalProps = {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};
