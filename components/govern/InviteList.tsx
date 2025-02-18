import React, { useState, useEffect } from 'react';
import { Readex_Pro } from 'next/font/google';
import { ContactListPlaceholder } from '~/components/placeholders/ContactList';
import { ActionButton, showErrorToast, showSuccessToast } from '~/elements';
import { InviteRow } from './InviteRow';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const InviteList = ({ auth }: any) => {
  const [showInvite, setShowInvite] = useState(false);
  const [invites, setInvites] = useState<any>([])
  const [isReady, setIsReady] = useState(false)

  const refresh = async () => {
    setIsReady(false)
    const result = await auth.governanceAction("getWaitingList", { data: {} })

    if (!result.data) {
      return 
    }

    setInvites(Object.values(result.data))
    setIsReady(true)
  }

  useEffect(() => {
      (async () => {
        await refresh()
      })()
  }, [])


  const onApprove = async ({ email, username }: any) => {
    const result = await auth.governanceAction("approveAccount", { data: { username } })

    if (result.error) {
      showErrorToast("The user could not approved")
      return 
    }    

    showSuccessToast("The user was approved")
    await refresh()
  }

  if (!isReady) {
    return <ContactListPlaceholder />
  }

  return <div className='w-full flex flex-col px-4  justify-center'> 
        { invites.map((item: any, index: number) => <div key={index}>
          <InviteRow {...item} onApprove={onApprove}/>
      </div>) }
    </div>
};
