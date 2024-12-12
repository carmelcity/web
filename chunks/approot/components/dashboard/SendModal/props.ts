import { Dispatch, SetStateAction } from 'react';

export type SendModalProps = {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  asset: string;
  available: number;
};
