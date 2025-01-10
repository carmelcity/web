import React, { useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import { showSuccessToast } from '~/elements';
import { DotsVertical } from '~/elements/icons';
import moment from 'moment'
import Link from 'next/link';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const TransactionRow = (transaction: any) => {
  let link = `https://basescan.org/tx/${transaction.hash}`
  let title = 'Transaction'
  let value = `${transaction.value.toFixed(4)} ETH`

  if (transaction.type === "deposit") {
    switch(transaction.stage) {
      case 1:
        link = `https://etherscan.io/tx/${transaction.hash}`
        title = `Received Topup`
        break;
      case 2:
        link = `https://etherscan.io/tx/${transaction.hash}`
        title = `Initiated Deposit`
        break;
      case 3:
        link = `https://basescan.org/tx/${transaction.hash}`
        title = `Completed Deposit`
        break
    }
  }

  return (
    <div className="flex items-center w-full bg-black/50 px-6 py-3 border-t border-cyan/10">
      <div className="flex flex-row gap-4">
          <Link href={link} className='p-1 text-primary hover:bg-primary/30 text-sm lg:w-48 w-24'>
            { title }
          </Link>
        <div className={`${readexPro.className} flex ml-5 text-white text-sm mt-1`}>
              { value }
        </div>
        <div className={`${readexPro.className} flex ml-5 text-gray-300 text-sm p-1`}>
              <div className={`${readexPro.className} flex ml-1 text-sm text-gray-500`}>
                  {moment.unix(transaction.timestamp / 1000).fromNow()}
              </div>
        </div>
      </div>
       
    </div>
  );
};

