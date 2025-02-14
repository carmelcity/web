"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import profile_placeholder from '~/images/profile_placeholder.webp';
import { DynamicIcon, showSuccessToast, AuthButton, SoftActionButton } from '~/elements';
import { AccessModal } from './AccessModal'
import { ConfirmModal } from './ConfirmModal';
import logo from '~/images/logo/logo-white-with-white-text.svg'
import logoSM from '~/images/logo/logo-white.svg'

export const AccessButton = ({ auth }: any) => {
  const router = useRouter()
  const [isModalOpen, setModalOpen] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [isReadyConfirm, setIsReadyConfirm] = useState(false)
  const [isConfirm, setIsConfirm] = useState("")
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
 
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
      // case "wallet":
      //   router.push('/wallet')
      //   break
      // case "friends":
      //   router.push('/friends')
      //   break
      // case "settings":
      //   router.push('/settings')
      //   break
      // case "card":
      //   router.push('/card')
      //   break
      case "signout":
        setIsConfirm(`Are you sure you want to sign out?`)
        setIsConfirmOpen(true)
        break
    }
  }

  const handleLogin = () => {
    // if (isReady) return 
    // setIsReady(true)
    // setModalOpen(true);
  }

  const handleRegister = () => {
    // if (isReady) return 
    // setIsReady(true)
    // setModalOpen(true);
  }

  const MyMenus = () => {
    return [{
      id: "profile",
      title: "Profile",
      icon: "UserIcon"
    // }, {
    //   id: "card",
    //   title: "Card",
    //   icon: "IdentificationIcon"
    // }, {
    //   id: "wallet",
    //   title: "Wallet",
    //   icon: "WalletIcon"
    // }, {
    //   id: "friends",
    //   title: "Friends",
    //   icon: "UsersIcon"
    // }, {
    //   id: "settings",
    //   title: "Settings",
    //   icon: "Cog8ToothIcon"
    }, {
      id: "signout",
      title: "Sign out",
      icon: "ArrowLeftOnRectangleIcon"
    }]
  }

  if (auth && auth.isLoggedIn()) {
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
          <div className='ml-2 mr-2 w-full text-sm text-primary lg:flex hidden'>
            { auth.profile.username }
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

  return <div className='flex flex-col mt-2'>
        <a href="/" className='cursor-pointer'>
          <Image src={logoSM} width={60} height={60} alt='logo' className='lg:hidden ml-2'/>
          <Image src={logo} width={200} height={60} alt='logo' className='hidden lg:block'/>
        </a>
    </div>

  // return <div className={`cursor-pointer h-12 lg:w-full mb-2 flex items-center mt-2 lg:ml-0`}>
  //     <div>
  //       <Image src={logo}/>
  //     </div>
  //       <div className='lg:w-full text-center mt-2 flex flex-row gap-2'>
  //       <button className="bg-primary flex gap-2 flex-row hover:bg-dark-green-secondary p-2 text-gray-900 hover:text-primary font-bold border border-primary w-full justify-center text-nowrap"
  //               onClick={handleRegister}>
  //               <DynamicIcon name={"UserIcon"} width={20} height={20} />                  
  //                 Register
  //       </button>
  //       <button
  //             className="border border-primary/20 bg-primary/10 hover:bg-dark-green-secondary py-2 px-4 font-bold w-full"
  //             onClick={handleLogin}>
  //               <div className='text-nowrap text-gray-400'>
  //               Sign In
  //               </div>
  //       </button>
        
  //       </div>
  //       <div className='z-200'>
  //         <AccessModal isModalOpen={isModalOpen} setModalOpen={onToggle} />
  //       </div>
  //     </div>
}