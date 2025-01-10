import React, { useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import { DynamicIcon } from '~/elements';
import moment from 'moment'
import Link from 'next/link';

const readexPro = Readex_Pro({
  subsets: ['latin']
})

export const TransactionRow = (transaction: any) => {
  if (transaction.type !== "deposit") {
    return <div/>
  }
  let link = `https://etherscan.io/tx/${transaction.hash}`
  let title = 'Transaction'
  let value = `${transaction.value.toFixed(4)} ETH`
  let progressString = ""

  switch(transaction.stage) {
    case 1:
      title = `Topup received`
      progressString = transaction.latest  ? "Deposit will start in a few seconds ..." : ""
      break;
    case 2:
      title = `Deposit started`
      progressString = transaction.latest  ? "Deposit will complete in a couple of minutes or so ..." : ""
      break;
    case 3:
      link = `https://basescan.org/tx/${transaction.hash}`
      title = `Deposit completed`
      break
  }

  const Progress = () => {
    if (progressString) {
        return <div className='mb-4'>
          <div className='flex text-sm flex-row text-gray-500'>
            <DynamicIcon name={"ArrowPathIcon"} width={14} height={14} className={"text-sm text-gray-500 mr-2 animate-spin"}/>
            { progressString }
          </div>
        </div>
    }

    return <div/>
  }

  return (
    <div className="flex items-center w-full bg-black/50 px-6 py-3 border-t border-cyan/10">
      <div className='flex flex-col'>
        <Progress/>
        <div className="flex flex-row gap-4">
            <DynamicIcon name={"CheckCircleIcon"} width={24} height={24} className={"text-primary"}/>
            <Link href={link} className='p-1 text-primary hover:bg-primary/30 text-sm lg:w-48 w-24'>
                { title }
            </Link>
          <div className={`${readexPro.className} flex ml-5 text-white text-sm mt-1`}>
                { value }
          </div>
          <div className={`${readexPro.className} flex ml-5 text-gray-300 text-sm p-1`}>
              <div className={`${readexPro.className} flex ml-1 text-sm text-gray-500`}>
                { moment.unix(transaction.timestamp / 1000).fromNow() }
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}