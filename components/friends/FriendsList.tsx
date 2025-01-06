import React, { useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import Image from 'next/image';
import { FriendRow } from './FriendRow';
import { contactsData } from './WalletSection/mockData';
import { AddContactModal } from './AddContact';
import { ContactListProps } from './props';
import { ContactListPlaceholder } from '~/components/placeholders/ContactList';
import { ActionButton } from '~/elements';
import { InviteModal } from './InviteModal';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const FriendsList = ({ data, isLoading }: any) => {
  const [showInvite, setShowInvite] = useState(false);
  const [isReady, setIsReady] = useState(false)

  if (isLoading) {
    return <ContactListPlaceholder />
  }


  const onToggle = (v: boolean) => {
    if (!v) {
      setIsReady(false)
    }
    setShowInvite(v)
  }

  const onInvite = () => {
    setShowInvite(true)
  }

  // const friends = contactsData.map((item: any, index: number) => {
  //   return (
  //     <div key={index}>
  //       <FriendRow data={item} />
  //     </div>
  //   );
  // });

  return (
    <div className="w-full">
      <InviteModal isModalOpen={showInvite} setModalOpen={onToggle}/>
      <div className="flex lg:flex-row flex-col justify-end items-start pb-4 pr-4 border-b border-primary/10">
        <div className='w-full flex flex-col px-4 text-gray-400 text-md h-10 justify-center'> 
          You have no friends yet
        </div>
        <div className='px-4 lg:mt-0 mt-4'>
          <ActionButton title="Invite a friend" onPress={onInvite}/>
        </div>
      </div>
    </div>
  );
};
