import { Dispatch, SetStateAction } from 'react';

export type SelectCurencyModalProps = {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setSendModalOpen: Dispatch<SetStateAction<boolean>>;
  setSendCurrency: any;
};
