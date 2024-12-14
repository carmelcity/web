import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Readex_Pro } from 'next/font/google';
import profile_placeholder from '~/images/profile_placeholder.webp';
import DynamicIcon from '~/components/icons/Dynamic';
import { AccessModal } from './AccessModal'

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const AccessButton = ({ data, isLoading, user }: any) => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isReady, setIsReady] = useState(false)

  const onToggle = (v: boolean) => {
    if (!v) {
      setIsReady(false)
    }
    setModalOpen(v)
  }

  const handleLogin = () => {
    if (isReady) return 
    setIsReady(true)
    setModalOpen(true);
  };

  return <div onClick={handleLogin} className="cursor-pointer h-12 w-full bg-cyan bg-opacity-20 mb-5 flex items-center border border-primary/20 mt-6">
    <div className="mr-auto ml-1 bg-transparent flex justify-center items-center">
      <div className="flex items-center">
        <div
          className="w-7 h-7 m-auto z-10 bg-transparent"
          style={{
            clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
          }}>
          <Image
            src={data?.user?.avatarImage || profile_placeholder}
            width={100}
            height={100}
            alt={'profile'}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex items-center justify-center ml-3">
          <span className={`${readexPro.className} text-cyan text-s font-extralight pr-4`}>{'Login'}</span>
        </div>
      </div>
    </div>
    <div
      className="w-9 h-full ml-auto bg-dark-green-secondary flex justify-center items-center cursor-pointer text-primary"
      onClick={handleLogin}>
      <DynamicIcon name={"ArrowRightEndOnRectangleIcon"} width={20} height={20} />
    </div>
    <div className='z-200'>
    <AccessModal isModalOpen={isModalOpen} setModalOpen={onToggle} />
    </div>
  </div>
};
