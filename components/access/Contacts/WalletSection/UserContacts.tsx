import React, { useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import { ContactsProps } from './props';
import { contactsData } from './mockData';
import Image from 'next/image';
import placeholder from '~/images/userPlaceholder.svg';
import { AddContact, DocumentDuplicateGrey, WETH } from '~/components/icons';
import { showSuccessToast } from '~/components/toasts';
import MobileContactModal from './MobileContactModal';
import { AddContactModal } from '../AddContact';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SendToContactModal } from '../SendToContactModal';
import { formatAddress } from '../../utils';
import { WalletContactsPlaceholder } from '~/components/placeholders/WalletContacts';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const Contacts = ({ data, isLoading }: ContactsProps) => {
  const [viewAll, setViewAll] = useState(false);
  const [isSmallModalOpen, setSmallModalOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [contactData, setContactData] = useState<any>();
  const [isAddContactModalOpen, setAddContactModalOpen] = useState(false);

  if (isLoading) {
    return <WalletContactsPlaceholder />;
  }

  const handleAddContact = () => {
    setAddContactModalOpen(true);
  };

  const onAddressCopy = () => {
    showSuccessToast('Address copied to clipboard');
  };

  const contacts = contactsData.map((contact: any, index: number) => {
    // TO BE REPLACED WITH REAL DATA
    return (
      <div className="flex flex-col mb-5 relative items-center w-32 hover:cursor-pointer" key={index}>
        <div
          className="w-24 h-28 z-10 mt-0.5 bg-dark-green-secondary"
          style={{
            clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
          }}
          onClick={() => {
            if (window.innerWidth < 1024) {
              setSmallModalOpen(true);
            } else {
              setModalOpen(true);
            }
            setContactData(contact);
          }}>
          <Image src={contact.profilePhoto || placeholder} alt="profile" className="object-cover w-full h-full" />
        </div>
        <div
          className="w-[99px] h-[115px] mt-[0.4px] absolute bg-gradient-to-r from-cyan to-dark-cyan"
          style={{
            clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
          }}></div>
        <div
          className={`${readexPro.className} font-light text-center mx-auto mt-2 truncate w-28`}
          title={contact.username}>
          {contact.username}
        </div>
        <div
          className={`${readexPro.className} font-light text-center mx-auto mt-2 truncate w-28`}
          title={contact.herotag}>
          {contact.herotag && <span className={`${readexPro.className} text-cyan mr-1`}>@</span>}
          {contact.herotag}
        </div>
        <div className={`${readexPro.className} font-light text-center mx-auto truncate w-28`} title={contact.name}>
          {contact.name}
        </div>
        <CopyToClipboard text={contact.address}>
          <div
            className={`${readexPro.className} flex items-center font-thin text-grey mx-auto mt-1`}
            onClick={onAddressCopy}>
            {formatAddress(contact.address, 4)}
            <div className="ml-1" title="Copy">
              <DocumentDuplicateGrey />
            </div>
          </div>
        </CopyToClipboard>
      </div>
    );
  });

  return (
    <div
      className={`flex flex-col lg:w-5/6 mb-5 mx-5 rounded-md bg-black pl-7 py-7 z-10 ${
        viewAll ? 'h-auto' : 'max-h-[340px] lg:max-h-[300px]'
      }`}>
      <div className="flex items-center w-full pr-7">
        <div className={`${readexPro.className} font-light text-xl mb-2 p-2`}>Contacts</div>
        <div
          onClick={() => setViewAll(!viewAll)}
          className={`${readexPro.className} font-light text-xl mb-2 p-2 ml-auto text-cyan hover:cursor-pointer`}>
          {viewAll ? 'Collapse' : 'View All'}
        </div>
      </div>
      <div
        className={`flex ${
          viewAll
            ? 'flex-wrap justify-center sm:justify-start'
            : 'flex-start lg:flex-wrap lg:overflow-y-hidden overflow-x-auto lg:overflow-x-hidden'
        }`}>
        <div className="flex flex-col hover:cursor-pointer w-32 items-center" onClick={handleAddContact}>
          <AddContact />
          <div className={`${readexPro.className} font-light text-cyan mx-auto mb-2 p-2`}>Add Contact</div>
        </div>
        {contacts}
      </div>
      <MobileContactModal
        isModalOpen={isSmallModalOpen}
        setModalOpen={setSmallModalOpen}
        contactData={contactData}
        formatAddress={formatAddress}
        onAddressCopy={onAddressCopy}
      />
      <SendToContactModal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        contactData={contactData}
        formatAddress={formatAddress}
        onAddressCopy={onAddressCopy}
      />
      <AddContactModal isModalOpen={isAddContactModalOpen} setModalOpen={setAddContactModalOpen} />
    </div>
  );
};
