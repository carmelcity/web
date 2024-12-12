import { Dispatch, SetStateAction } from 'react';

export type SwapCardProps = {
  action: string;
  coin: string;
  amount: string;
  balance: string;
  isEditable: boolean;
  onAmountChange: Dispatch<SetStateAction<string>>;
  onAmountValidation?: Dispatch<SetStateAction<{ status: boolean; message: string }>>;
  onUseMax?: () => void;
};
