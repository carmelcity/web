import { Dispatch, SetStateAction } from 'react';

export type AddContactModalProps = {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};
