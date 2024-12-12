import React, { useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import Image from 'next/image';
import money from '~/images/dashboard/money.png';
import { SmallSpinner } from '~/components/spinner';
import { SendIcon } from '~/components/icons/SendIcon';
import { ReceiveIcon } from '~/components/icons/ReceiveIcon';
import { BuyIcon } from '~/components/icons/BuyIcon';
import { FailedIcon } from '~/components/icons/FailedIcon';
import { activity } from './mockData';
import { ActivityProps } from './props';
import { WalletActivityPlaceholder } from '~/components/placeholders/WalletActivity';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const WalletActivity = ({ user, isLoading }: ActivityProps) => {
  const [toppingUp, setToppingUp] = useState(false);

  if (isLoading) {
    return <WalletActivityPlaceholder />;
  }

  const onTopUp = async () => {
    setToppingUp(true);

    const result = await user.auth.sign();

    console.log(result);

    setToppingUp(false);
  };

  const userActivity = activity.map((item: any, index: number) => (
    <div key={index} className="flex w-full mb-2 sm:mb-6 px-2 items-center">
      <div className="flex relative">
        {item.action === 'buy' && (
          <>
            <Image src={item.assetIcon} alt="icon" />
            <div className="absolute bottom-0 right-0">{item.failed ? <FailedIcon /> : <BuyIcon />}</div>
          </>
        )}
        {item.action === 'sent' && (
          <>
            <Image src={item.assetIcon} alt="icon" />
            <div className="absolute bottom-0 right-0">{item.failed ? <FailedIcon /> : <SendIcon />}</div>
          </>
        )}
        {item.action === 'received' && (
          <>
            <Image src={item.assetIcon} alt="icon" />
            <div className="absolute bottom-0 right-0">{item.failed ? <FailedIcon /> : <ReceiveIcon />}</div>
          </>
        )}
        {item.action === 'swap' && (
          <div className="flex -mr-3">
            <div className="">
              <Image src={item.assetIcon} alt="icon" className="relative -top-1 w-6" />
            </div>
            <div className="">
              <Image src={item.swapIcon} alt="icon" className="relative w-9 right-3" />
            </div>
          </div>
        )}
      </div>
      <div className={`flex flex-col ml-3`}>
        {item.action !== 'swap' && (
          <div className={`${readexPro.className} capitalize`}>
            {item.action} {item.asset}
          </div>
        )}
        {item.action === 'swap' && (
          <div className={`${readexPro.className}`}>
            {item.assetShort} to {item.swapAsset}
          </div>
        )}
        <div className={`${readexPro.className} font-thin text-grey`}>{item.date}</div>
      </div>
      <div className="hidden sm:flex flex-col ml-auto">
        <div className={`${readexPro.className} ml-auto ${item.failed ? 'text-red-500' : 'text-cyan'}`}>
          {item.action === 'buy' || item.action === 'received' ? `+ ${item.value} ${item.assetShort}` : ''}
        </div>

        {item.action === 'sent' && (
          <div className={`${readexPro.className} text-grey ml-auto`}>
            - {item.value} {item.assetShort}
          </div>
        )}
        {item.action === 'swap' && (
          <div className={`${readexPro.className} text-cyan ml-auto`}>
            + {item.value} {item.swapAsset}
          </div>
        )}
        <div className={`${readexPro.className} text-grey font-thin ml-auto`}>$ {item.fiatValue}</div>
      </div>
    </div>
  ));

  // const hasActivity = user.activity && user.activity.length > 0;
  const hasActivity = true;

  return (
    <div className="flex flex-col relative mx-5 mb-5 lg:mx-8 p-3 sm:p-7 lg:w-full h-auto min-h-[560px] bg-black lg:mr-0 rounded-md z-10">
      <div className={`${readexPro.className} font-light text-xl mb-2 p-2`}>Recent Activity</div>
      <div
        className={`flex flex-col h-full items-center w-full ${
          hasActivity ? '' : 'border border-dashed space-y-10 border-cyan border-opacity-20'
        }`}>
        {hasActivity ? (
          userActivity
        ) : (
          <div className="m-auto text-center">
            <Image src={money} alt="coin" className="w-20 mx-auto" />
            <div className={`${readexPro.className} font-normal mt-2`}>No Funds</div>
            <div className={`${readexPro.className} font-normal text-grey mt-2 mb-4`}>
              Get started by creating a new project.
            </div>
            {!toppingUp && (
              <button
                onClick={onTopUp}
                disabled={toppingUp}
                className={`${readexPro.className} mt-4 px-3 w-40 h-12 text-cyan items-center bg-dark-green-secondary border border-cyan border-opacity-20 border-solid border-1`}>
                + Top Up
              </button>
            )}
            {toppingUp && <SmallSpinner />}
          </div>
        )}
      </div>
    </div>
  );
};
