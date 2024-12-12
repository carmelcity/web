import { Dispatch, SetStateAction } from 'react';

export type ModalProps = {
  children: any;
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};
