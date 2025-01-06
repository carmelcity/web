import React from 'react';
import { Readex_Pro } from 'next/font/google';
import { MobileBottomModal } from '~/components/modal/MobileBottomModal';
import Image from 'next/image';
import placeholder from '~/images/userPlaceholder.svg';
import { DocumentDuplicateGrey, Carmel, WETH } from '~/components/icons';
import { MobileContactsModalProps } from './props';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

const MobileContactModal = ({
  isModalOpen,
  setModalOpen,
  contactData,
  formatAddress,
  onAddressCopy,
}: MobileContactsModalProps) => {
  return (
    <MobileBottomModal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
      <div className="flex flex-col items-center h-full">
        <div className="absolute -top-[14%] items-center w-20 h-28">
          <div
            className="w-20 h-24 z-10 mt-0.5 ml-[0.3px] bg-dark-green-secondary absolute"
            style={{
              clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
            }}>
            <Image
              src={contactData?.profilePhoto || placeholder}
              alt="profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div
            className="w-[81px] h-[99px] mt-[0.4px] absolute bg-gradient-to-r from-cyan to-dark-cyan"
            style={{
              clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
            }}></div>
        </div>
        <div className="mt-6">
          <div
            className={`${readexPro.className} font-light text-center mx-auto mt-2 truncate w-28`}
            title={contactData?.username}>
            {contactData?.username}
          </div>
          <div
            className={`${readexPro.className} font-light text-center mx-auto mt-2 truncate w-28`}
            title={contactData?.herotag}>
            {contactData?.herotag && <span className={`${readexPro.className} text-cyan mr-1`}>@</span>}
            {contactData?.herotag}
          </div>
          <div
            className={`${readexPro.className} font-light text-center mx-auto truncate w-28`}
            title={contactData?.name}>
            {contactData?.name}
          </div>
        </div>
        <div
          className={`${readexPro.className} flex items-center font-thin text-grey mx-auto mt-2`}
          onClick={onAddressCopy}>
          {formatAddress(contactData?.address || '', 4)}
          <div className="ml-1" title="Copy">
            <DocumentDuplicateGrey />
          </div>
        </div>
        <button className="flex items-center w-full mt-auto border bg-dark-green-secondary border border-cyan border-opacity-10 pl-20">
          <Carmel />{' '}
          <span className={`${readexPro.className} ml-2`} onClick={() => window.alert('Coming soon')}>
            Send CARMEL
          </span>
        </button>
        <button className="flex items-center w-full mt-3 mb-5 border bg-dark-green-secondary border border-cyan border-opacity-10 pl-20">
          <WETH />{' '}
          <span className={`${readexPro.className} ml-2`} onClick={() => window.alert('Coming soon')}>
            Send WETH
          </span>
        </button>
      </div>
    </MobileBottomModal>
  );
};

export default MobileContactModal;
