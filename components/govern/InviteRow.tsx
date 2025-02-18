import React, { useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import { showSuccessToast } from '~/elements';
import { DotsVertical } from '~/elements/icons';
import moment from 'moment'
import Link from 'next/link';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const InviteRow = ({ username, email, onApprove }: any) => {
  return (
    <div className="flex items-center w-full bg-black/50 px-6 py-3 border-t border-cyan/10">
      <div className="flex flex-row gap-4 items-center">
        <div className={`${readexPro.className} flex ml-5 text-white text-md`}>
        <button onClick={() => onApprove({ email, username })}
                  className={`${readexPro.className} text-nowrap text-sm md:text-md shrink-0 hover:opacity-80 border-cyan font-medium border text-white px-2 py-2 shadow-early-access-button shrink-0`}>
            Approve
        </button>
        </div>
        <div className={`${readexPro.className} flex ml-5 text-white text-md`}>
            { username }
        </div>
        <div className={`${readexPro.className} flex ml-5 text-gray-500 text-md`}>
            { email }
        </div>     
      </div>
    </div>
  );
};
