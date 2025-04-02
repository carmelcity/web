import React, { useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import { TransactionRow } from './TransactionRow';
import { ContactListPlaceholder } from '~/components/placeholders/ContactList';
import { ActionButton } from '~/elements';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const TransactionsList = ({ ethPrice, auth }: any) => {
  const latestTransaction = auth.userTransactions.length > 0 ? auth.userTransactions[0] : undefined

  const TransactionsRows = () => {
    return auth.userTransactions.map((item: any, index: number) => <div key={index}>
        {/* <TransactionRow ethPrice={ethPrice} {...item} latest={latestTransaction ? item.eventId === latestTransaction.eventId : false } /> */}
      </div>)
  }

  return (
    <div className="w-full">
      <div className="flex lg:flex-row flex-col justify-end items-start pb-4 pr-4">
        <div className='w-full flex flex-col px-4 text-gray-400 text-sm h-10 justify-center'> 
          { auth.userTransactions.length === 0 ? 'No transactions yet' : auth.userTransactions.length === 1 ? '1 transaction' : `${auth.userTransactions.length} transactions` }
        </div>
        {/* <div className='px-4 lg:mt-0 mt-4'>
          <ActionButton title="Invite a friend" onPress={onInvite}/>
        </div> */}
      </div>
      {/* <TransactionsRows/> */}
    </div>
  );
};
