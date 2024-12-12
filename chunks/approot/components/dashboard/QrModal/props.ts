import { Dispatch, SetStateAction } from 'react';

export type QrModalProps = {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  address: string;
};
