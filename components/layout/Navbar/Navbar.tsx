import React, { useEffect, useState } from 'react';
import { publicRoutes } from './routes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LogoSmall from '~/images/carmel.webp';
import Logo from '~/images/logo/logo-white-with-white-text.svg'
import Image from 'next/image';
import { readexPro } from '~/elements/fonts';
import profile_placeholder from '~/images/profile_placeholder.webp';
import { ConfirmModal } from '~/components/access/ConfirmModal';
import { DynamicIcon, showSuccessToast, AuthButton, SoftActionButton } from '~/elements';
import { getImageUrl } from '~/utils/main';

export const Navbar = ({ auth }: any) => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false)
  const [isConfirm, setIsConfirm] = useState("")
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [isReadyConfirm, setIsReadyConfirm] = useState(false)

  const hideMenu = () => setShowMenu(false);

  useEffect(() => {
    router.events.on('routeChangeComplete', hideMenu);

    return () => {
      router.events.off('routeChangeComplete', hideMenu);
    };
  }),
    [];


  const handleAccount = () => {
    setMenuOpen(!menuOpen)
  }

  const handleAccountMenuItem = (e: any) => {
    switch(e.id) {
      case "profile":
        router.push('/profile')
        break
      // case "govern":
      //   router.push('/govern')
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


  const onToggleConfirm = (v: boolean) => {
    if (!v) {
      setIsReadyConfirm(false)
    }
    setIsConfirmOpen(v)
  }

  const MyMenus = () => {
    return [{
      id: "profile",
      title: "Profile",
      icon: "UserIcon"
    // }, {
    //   id: "govern",
    //   title: "Govern",
    //   icon: "ShieldCheckIcon"
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
      title: "Logout",
      icon: "ArrowLeftOnRectangleIcon"
    }]
  }

  const onConfirm = () => {
      auth.logout()
      showSuccessToast('You are now signed out')
      router.push('/')
  }

  const AccessSection = () => {
    if (auth && auth.isLoggedIn()) {
      return <div tabIndex={0} onClick={handleAccount} className={`dropdown dropdown-button ${menuOpen ? 'dropdown-open' : 'dropdown-close'} cursor-pointer h-12 lg:w-full bg-cyan bg-opacity-20 mb-5 flex items-center border border-primary/20 mt-4 ml-4 lg:ml-0`}>
        <div className="mr-auto ml-1 bg-transparent flex justify-center items-center w-full">
          <div className="flex items-center">
            <div
              className="w-10 h-10 m-auto z-10 bg-transparent">
              <Image
                src={getImageUrl(auth.profile.username)}
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
        <ul tabIndex={0} className={`dropdown-content ${menuOpen ? '' : 'hidden'} menu bg-dark-green border border-primary/50 z-100 w-64 right-0 top-14 p-2 shadow`}>
              { MyMenus().map((menu: any, i: number) => <li key={`menu-${i}`} >
                  <div className='text-gray-400 hover:text-primary' onClick={() => handleAccountMenuItem(menu)}>
                      <DynamicIcon name={menu.icon} width={24} height={24}/>
                      {menu.title}
                  </div>
              </li>)}
        </ul>
      </div>
  }

    return <div className='flex flex-row'>
        <Link href={'/login'} key={'reg1'}>
          <button
            className={`${readexPro.className} text-nowrap text-sm md:text-md shrink-0 hover:opacity-80 border-cyan font-medium text-primary px-4 py-3 shrink-0`}>
                Login
          </button>
        </Link>
        <Link href={'/register'} key={'reg1'}>
          <button
            className={`${readexPro.className} text-nowrap text-sm md:text-md shrink-0 hover:opacity-80 border-cyan font-medium border text-white px-2 py-3 shadow-early-access-button shrink-0`}>
                Get early access
          </button>
        </Link>
      </div>
  }

  // const renderNonLinks = () => {
  //   return publicRoutes
  //     .filter(r => r.type === 'button' || r.type === 'link')
  //     .map((route, index) => (
  //       <Link href={route.path} key={index}>
  //         <button
  //           className={`${readexPro.className} text-sm md:text-md shrink-0 hover:opacity-80 ${
  //             route.type === 'button' &&
  //             'border-cyan font-medium border text-white py-3 shadow-early-access-button shrink-0'
  //           } ${route.type === 'inverted_link' && 'text-cyan font-light '}`}>
  //           {route.name}
  //         </button>
  //       </Link>
  //     ));
  // };

  // const renderBurgerMenu = () => (
  //   <button className="text-white cursor-pointer w-10 h-10 bg-cyan" onClick={() => setShowMenu(!showMenu)}>
  //     <div className="w-[16px] h-[0.18rem] bg-black m-auto"></div>
  //     <div className="w-[16px] h-[0.18rem] bg-black m-auto mt-1"></div>
  //   </button>
  // );

//   <Link href="/" className='lg:flex hidden'>
//   <Image src={Logo} alt="card" className="w-48 ml-3" />
// </Link>

  // const renderLogo = () => (
  //   <div className="flex h-16 items-center hover:opacity-80">
  //     <Link href="/" className=''>
  //         <Image src={LogoSmall} alt="card" className="h-14 w-14" />
  //     </Link>
  //   </div>
  // );

  return (
    <div className="flex fixed top-0 w-full z-50">
      <nav
        className={`h-20 w-full bg-transparent border-b border-b-cyan/20 px-2 backdrop-blur-md lg:pr-80`}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust the opacity value (0.8) as needed
          zIndex: 1000, // Adjust the zIndex value as needed
        }}>
          <div className="w-full items-center flex h-full flex-row">
            <div className='w-full'>
            <Link href={'/'}>
              <Image src={LogoSmall} alt="card" className="h-14 w-14 flex lg:hidden" />
            </Link>
            </div>
            <div className="gap-x-6 justify-end items-center flex-1 lg:flex">
               <AccessSection/>
            </div>           
          </div>
      </nav>
    </div>
  );
};
