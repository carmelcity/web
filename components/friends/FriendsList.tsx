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

export const FriendsList = ({ auth, data, isLoading }: any) => {
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

  const friends = () => {
    if (!auth.profile || !auth.profile.friends) {
      return []
    }

    return auth.profile.friends.friends || []
  }

  const totalFriends = friends().length
  
  const FriendsRows = () => {
    return friends().map((item: any, index: number) => <div key={index}>
        <FriendRow {...item} />
      </div>)
  }
 
  return (
    <div className="w-full">
      <InviteModal auth={auth} isModalOpen={showInvite} setModalOpen={onToggle}/>
      <div className="flex lg:flex-row flex-col justify-end items-start pb-4 pr-4 border-b border-primary/10">
        <div className='w-full flex flex-col px-4 text-gray-400 text-md h-10 justify-center'> 
          { totalFriends === 0 ? 'You have no friends yet' : totalFriends === 1 ? 'You have 1 friend' : `You have ${totalFriends} friends` }
        </div>
        <div className='px-4 lg:mt-0 mt-4'>
          <ActionButton title="Invite a friend" onPress={onInvite}/>
        </div>
      </div>
      <FriendsRows/>
    </div>
  );
};
