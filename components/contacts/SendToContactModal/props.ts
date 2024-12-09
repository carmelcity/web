import { Dispatch, SetStateAction } from 'react';

export type SendToContactModalProps = {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  contactData: any;
  formatAddress: (address: string, characters: number) => string;
  onAddressCopy: () => void;
};
