import React, { useState } from 'react';
import { ContactTableProps } from './props';
import Image from 'next/image';
import placeholder from '~/images/userPlaceholder.svg';
import { Readex_Pro } from 'next/font/google';
import { showSuccessToast } from '~/elements';
import { DocumentDuplicateGrey, DotsVertical } from '~/elements/icons';
// import { QrModal } from '../QrModal';
// import { SelectCurrencyModal, SendModal } from '../SendModal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ActionDropdown } from '~/elements';
import { formatAddress } from '../utils';
import { SendToContactModal } from './SendToContactModal';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const FriendRow = (friend: any) => {
  const status = friend.status === "invite_sent" ? "Invite Sent" : friend.status

  return (
    <div className="flex items-center w-full bg-black/50 px-6 py-3 border-b border-cyan/10">
      <div className="flex justify-center">
        { friend.image && <div
          className="w-12 h-14 z-10 mt-0.5 bg-dark-green-secondary"
          style={{
            clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
          }}>
          {/* <Image src={profilePhoto || placeholder} alt="profile" className="object-cover w-full h-full" /> */}
        </div>  }
        { friend.image && <div
          className="w-[51px] h-[59px] mt-[0.4px] absolute bg-gradient-to-r from-cyan to-dark-cyan"
          style={{
            clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
          }}></div> }
      </div>
      <div className="flex flex-col w-4/5 lg:w-2/5 xl:w-1/5">
        <div className="flex">
          {/* {herotag && (
            <div className={`${readexPro.className} flex ml-5`}>
              <span className={`${readexPro.className} text-cyan mr-1`}>@</span>
              {herotag}
            </div>
          )} */}
          <div className={`${readexPro.className} flex ml-5`}>{friend.email}</div>
          <div className="lg:hidden ml-auto hover:cursor-pointer" onClick={() => {}}>
            <DotsVertical />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-2/5">
        <div className={`${readexPro.className} hidden xl:flex text-grey font-thin`}>{status}</div>
        {/* <div className={`${readexPro.className} flex xl:hidden text-grey font-thin`}>{formatAddress(address, 6)}</div> */}
       
      </div>
      {/* <div className="hidden lg:flex items-center ml-auto ">
        <button
          onClick={handleSendClick}
          className={`${readexPro.className} w-24 h-8 text-sm text-cyan rounded-sm items-center bg-dark-green-secondary border border-cyan border-opacity-10 border-solid border-1`}>
          Send
        </button>
        <button
          onClick={handleQRClick}
          className={`${readexPro.className} text-cyan text-sm ml-3 w-24 h-8 rounded-sm items-center bg-dark-green-secondary border border-cyan border-opacity-10 border-solid border-1`}>
          Receive
        </button>
        <div className="ml-2 hover:cursor-pointer" onClick={() => {}}>
          <ActionDropdown items={['Option 1', 'Option 2']}/>
        </div>
      </div> */}

      {/* <QrModal isModalOpen={isQrModalOpen} setModalOpen={setQrModalOpen} address={address}/> */}
      {/* <SendToContactModal isModalOpen={isSendModalOpen}
        setModalOpen={setSendModalOpen}
        contactData={data}
        formatAddress={formatAddress}
        onAddressCopy={onAddressCopy}/> */}
    </div>
  );
};
