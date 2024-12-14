import { Dispatch, SetStateAction } from 'react';

export type ContactsProps = {
  data: any;
  isLoading: boolean;
};

export type MobileContactsModalProps = {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  contactData: any;
  formatAddress: (address: string, characters: number) => string;
  onAddressCopy: () => void;
};
