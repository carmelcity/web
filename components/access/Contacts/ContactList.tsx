import React, { useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import Image from 'next/image';
import { ContactRow } from './ContactRow';
import { contactsData } from './WalletSection/mockData';
import { AddContactModal } from './AddContact';
import { ContactListProps } from './props';
import { ContactListPlaceholder } from '~/components/placeholders/ContactList';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const Contacts = ({ data, isLoading }: ContactListProps) => {
  const [isAddContactModalOpen, setAddContactModalOpen] = useState(false);

  if (isLoading) {
    return <ContactListPlaceholder />;
  }

  const handleAddContact = () => {
    setAddContactModalOpen(true);
  };

  const contacts = contactsData.map((item: any, index: number) => {
    return (
      <div key={index}>
        <ContactRow data={item} />
      </div>
    );
  });

  return (
    <div className="p-5 lg:p-8 z-10 mt-28 lg:mt-0">
      <div className="flex items-center mb-5">
        <div className={`${readexPro.className} text-2xl`}>Contacts</div>
        <button
          onClick={handleAddContact}
          className={`${readexPro.className} flex px-3 w-40 h-12 text-cyan items-center ml-auto bg-dark-green-secondary border border-cyan border-opacity-20 border-solid border-1`}>
          Add Contact
          <span className={`${readexPro.className} font-extralight mb-1 text-cyan text-2xl ml-auto`}>+</span>
        </button>
        <AddContactModal isModalOpen={isAddContactModalOpen} setModalOpen={setAddContactModalOpen} />
      </div>
      <div className="flex h-12 bg-dark-green rounded-md items-center w-full">
        <div className={`${readexPro.className} text-grey font-light w-4/5 lg:w-2/5 xl:w-1/5 pl-8 ml-14`}>Name</div>
        <div className={`${readexPro.className} hidden lg:flex text-grey font-light w-2/5 pl-2`}>Address</div>
        <div className={`${readexPro.className} hidden lg:flex text-grey font-light ml-auto mr-56`}>Actions</div>
      </div>
      {contacts}
    </div>
  );
};