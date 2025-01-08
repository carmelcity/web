import React, { useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import { showSuccessToast } from '~/elements';
import { DotsVertical } from '~/elements/icons';
import moment from 'moment'
import Link from 'next/link';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const FriendRow = (friend: any) => {
  let status = friend.status
  
  switch(friend.status) {
    case "invite_sent":
      status = "Invite Sent"
      break
    case "invite_accepted":
      status = "Accepted invite"
      break
  }

  return (
    <div className="flex items-center w-full bg-black/50 px-6 py-3 border-t border-cyan/10">
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
      <div className="flex flex-row gap-4">
      <div className={`${readexPro.className} flex ml-5 text-primary text-md`}>
        <Link href={friend.username ? `/${friend.username}` : ''} className='p-1 text-primary hover:bg-primary/30'>
          {friend.username || friend.email}
        </Link>
      </div>
      <div className={`${readexPro.className} flex ml-5 text-gray-300 text-sm p-1`}>
            {status}
            <div className={`${readexPro.className} flex ml-1 text-sm text-gray-500`}>
                {moment.unix(friend.updatedOn / 1000).fromNow()}
            </div>
            </div>
      </div>
    </div>
  );
};
