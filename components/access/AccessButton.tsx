"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import profile_placeholder from '~/images/profile_placeholder.webp';
import DynamicIcon from '~/components/icons/Dynamic';
import { AccessModal } from './AccessModal'
import { ConfirmModal } from './ConfirmModal';
import { useCarmelAuth } from '~/sdk';
import { showSuccessToast, showErrorToast } from '~/components/toasts';

export const AccessButton = () => {
  const router = useRouter()
  const [isModalOpen, setModalOpen] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [isReadyConfirm, setIsReadyConfirm] = useState(false)
  const [isConfirm, setIsConfirm] = useState("")
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const auth = useCarmelAuth()
 
  const onToggleConfirm = (v: boolean) => {
    if (!v) {
      setIsReadyConfirm(false)
    }
    setIsConfirmOpen(v)
  }

  const onToggle = (v: boolean) => {
    if (!v) {
      setIsReady(false)
    }
    setModalOpen(v)
  }

  const handleAccount = () => {
    setMenuOpen(!menuOpen)
  }

  const onConfirm = () => {
    auth.logout()
    showSuccessToast('You are now signed out')
    router.push('/')
  }
 
  const handleAccountMenuItem = (e: any) => {
    switch(e.id) {
      case "profile":
        router.push('/profile')
        break
      case "wallet":
        router.push('/wallet')
        break
      case "signout":
        setIsConfirm(`Are you sure you want to sign out?`)
        setIsConfirmOpen(true)
        break
    }
  }

  const handleLogin = () => {
    if (isReady) return 
    setIsReady(true)
    setModalOpen(true);
  }

  const MyMenus = () => {
    return [{
      id: "profile",
      title: "Profile",
      icon: "IdentificationIcon"
    }, {
      id: "wallet",
      title: "Wallet",
      icon: "WalletIcon"
    }, {
      id: "signout",
      title: "Sign out",
      icon: "ArrowLeftOnRectangleIcon"
    }]
  }

  if (auth.isLoggedIn()) {
      return <div tabIndex={0} onClick={handleAccount} className={`dropdown dropdown-button ${menuOpen ? 'dropdown-open' : 'dropdown-close'} cursor-pointer h-12 lg:w-full bg-cyan bg-opacity-20 mb-5 flex items-center border border-primary/20 mt-4 ml-4 lg:ml-0`}>
        <div className="mr-auto ml-1 bg-transparent flex justify-center items-center w-full">
          <div className="flex items-center">
            <div
              className="w-10 h-10 m-auto z-10 bg-transparent">
              <Image
                src={auth.session.avatarImage || profile_placeholder}
                width={180}
                height={180}
                alt={'profile'}
                className="object-cover w-full h-full mask mask-hexagon"
              />
            </div>
          </div>
          <div className='ml-4 mr-2 w-full text-xl text-primary lg:flex hidden'>
            { auth.session.username }
          </div>
        </div>
        <div
          className="w-9 h-full ml-auto bg-dark-green-secondary flex justify-center items-center cursor-pointer text-primary"
          onClick={handleAccount}>
            <DynamicIcon name={"ChevronDownIcon"} width={20} height={20} />
        </div>
        <div className='z-200'>
          <ConfirmModal isModalOpen={isConfirmOpen} setModalOpen={onToggleConfirm} message={isConfirm} onConfirm={onConfirm}/>
        </div>
        <ul tabIndex={0} className={`dropdown-content ${menuOpen ? '' : 'hidden'} menu bg-dark-green border border-primary/50 z-100 w-64 left-0 top-14 p-2 shadow`}>
              { MyMenus().map((menu: any, i: number) => <li key={`menu-${i}`} >
                  <div className='text-gray-400 hover:text-primary' onClick={() => handleAccountMenuItem(menu)}>
                      <DynamicIcon name={menu.icon} width={24} height={24}/>
                      {menu.title}
                  </div>
              </li>)}
            </ul>
      </div>
  }

  return <div onClick={handleLogin} className={`cursor-pointer h-12 lg:w-full mb-2 flex items-center mt-2 lg:ml-0`}>
          <Image
            src={`/images/login-lg.png`}
            width={600}
            height={200}
            alt={'profile'}
            className="mt-2 w-80 hidden lg:flex"
          />
          <Image
            src={`/images/login.png`}
            width={600}
            height={200}
            alt={'profile'}
            className=" ml-4 w-80 lg:hidden flex"
          />

        <div className='z-200'>
          <AccessModal env={env} isModalOpen={isModalOpen} setModalOpen={onToggle} />
        </div>
      </div>
}