import React from 'react';
import { motion } from 'framer-motion';
import { Readex_Pro } from 'next/font/google';
import { SwapCardProps } from './props';
import { formatNumberWithSeparator } from '../../utils';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const SwapCard = ({
  action,
  coin,
  amount,
  balance,
  isEditable,
  onAmountChange,
  onAmountValidation,
  onUseMax,
}: SwapCardProps) => {
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let sanitizedValue = e.target.value.replace(/[^0-9.]/g, '');
    sanitizedValue = sanitizedValue.slice(0, 8); // max 8 characters

    onAmountChange(sanitizedValue || '');

    if (onAmountValidation && parseFloat(sanitizedValue) > parseFloat(balance)) {
      onAmountValidation({ status: false, message: 'The entered amount exceeds your current balance' });
    } else if (onAmountValidation && sanitizedValue === '') {
      onAmountValidation({ status: false, message: 'Please enter a value' });
    } else if (onAmountValidation) {
      onAmountValidation({ status: true, message: '' });
    }
  };

  return (
    <motion.div
      key={coin}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.9 }}
      className="flex flex-col bg-cyan/50 bg-opacity-40 py-2 px-3 w-full h-28">
      <p className={`${readexPro.className} font-thin text-sm text-grey`}>{action}</p>
      <div className="flex items-center">
        <h3 className={`${readexPro.className} text-lg font-normal uppercase`}>{coin}</h3>
        {isEditable ? (
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className={`${readexPro.className} text-lg font-normal uppercase ml-auto bg-transparent border-none text-right w-full outline-none focus:outline-none focus:border-none focus:ring-transparent`}
            style={{
              WebkitAppearance: 'none',
              margin: 0,
              MozAppearance: 'textfield',
            }}
          />
        ) : (
          <h3 className={`${readexPro.className} text-lg font-normal uppercase ml-auto`}>
            {amount.toString() === 'NaN' && 0} {amount.toString() !== 'NaN' && parseFloat(amount).toFixed(6)}
          </h3>
        )}
      </div>
      <div className="flex">
        <p className={`${readexPro.className} font-thin text-sm text-cyan text-opacity-50`}>
          Balance: {formatNumberWithSeparator(+balance, ',')}
        </p>
        {isEditable && (
          <div
            className={`${readexPro.className} font-normal text-sm text-cyan hover:cursor-pointer ml-auto`}
            onClick={onUseMax}>
            Use max
          </div>
        )}
      </div>
    </motion.div>
  );
};
